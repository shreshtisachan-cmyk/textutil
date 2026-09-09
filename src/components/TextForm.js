import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [savedTexts, setSavedTexts] = useState([]);

  // Convert text to uppercase
  const handleUpClick = () => {
    setText(text.toUpperCase());

    props.showAlert(
      'Text has been converted to Upper Case',
      'success'
    );
  };

  // Convert text to lowercase
  const handleLoClick = () => {
    setText(text.toLowerCase());

    props.showAlert(
      'Text has been converted to Lower Case',
      'success'
    );
  };

  // Clear text
  const handleClearClick = () => {
    setText('');

    props.showAlert(
      'Text has been cleared',
      'success'
    );
  };

  // Copy text
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(text);

    props.showAlert(
      'Text has been copied',
      'success'
    );
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    const newText = text
      .split(/\s+/)
      .filter(word => word !== '')
      .join(' ');

    setText(newText);

    props.showAlert(
      'Extra spaces have been removed',
      'success'
    );
  };

  // Handle textarea changes
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Save text to MongoDB
  const handleSaveText = async () => {
    if (text.trim() === '') {
      props.showAlert(
        'Please enter some text first',
        'warning'
      );
      return;
    }

    try {
      const response = await fetch(
        'http://localhost:5000/api/texts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: text
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSavedTexts([...savedTexts, data]);

        props.showAlert(
          'Text saved successfully',
          'success'
        );
      } else {
        props.showAlert(
          data.message || 'Failed to save text',
          'danger'
        );
      }
    } catch (error) {
      console.error(error);

      props.showAlert(
        'Backend server is not running',
        'danger'
      );
    }
  };

  // Get texts from MongoDB
  const handleGetTexts = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/texts'
      );

      const data = await response.json();

      setSavedTexts(data);

      props.showAlert(
        'Saved texts loaded',
        'success'
      );
    } catch (error) {
      console.error(error);

      props.showAlert(
        'Unable to connect to backend',
        'danger'
      );
    }
  };

  // Delete text from MongoDB
  const handleDeleteText = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/texts/${id}`,
        {
          method: 'DELETE'
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSavedTexts(
          savedTexts.filter(item => item._id !== id)
        );

        props.showAlert(
          'Text deleted successfully',
          'success'
        );
      } else {
        props.showAlert(
          data.message || 'Failed to delete text',
          'danger'
        );
      }
    } catch (error) {
      console.error(error);

      props.showAlert(
        'Unable to connect to backend',
        'danger'
      );
    }
  };

  // Word count
  const wordCount =
    text.trim() === ''
      ? 0
      : text.trim().split(/\s+/).length;

  // Reading time
  const readingTime = wordCount * 0.008;

  return (
    <>
      <div
        className="container my-4"
        style={{
          color: props.mode === 'dark'
            ? 'white'
            : 'black'
        }}
      >

        <h1 className="mb-3">
          {props.heading}
        </h1>

        {/* Textarea */}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="8"
            placeholder="Enter your text here..."
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === 'dark'
                  ? 'black'
                  : 'white',

              color:
                props.mode === 'dark'
                  ? 'white'
                  : 'black'
            }}
          />
        </div>

        {/* Buttons */}
        <div className="mb-4">

          <button
            className="btn btn-primary mx-1 mb-2"
            onClick={handleUpClick}
          >
            Convert to Upper Case
          </button>

          <button
            className="btn btn-secondary mx-1 mb-2"
            onClick={handleLoClick}
          >
            Convert to Lower Case
          </button>

          <button
            className="btn btn-success mx-1 mb-2"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>

          <button
            className="btn btn-warning mx-1 mb-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>

          <button
            className="btn btn-danger mx-1 mb-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>

          {/* Save button */}
          <button
            className="btn btn-dark mx-1 mb-2"
            onClick={handleSaveText}
          >
            💾 Save Text
          </button>

          {/* Get texts button */}
          <button
            className="btn btn-info mx-1 mb-2"
            onClick={handleGetTexts}
          >
            📂 Load Saved Texts
          </button>

        </div>

        {/* Text Summary */}
        <h2>Your Text Summary</h2>

        <p>
          <strong>{wordCount}</strong> words and{' '}
          <strong>{text.length}</strong> characters
        </p>

        <p>
          <strong>{readingTime.toFixed(2)}</strong> minutes read
        </p>

        {/* Preview */}
        <h2>Preview</h2>

        <div
          className="border rounded p-3"
          style={{
            color:
              props.mode === 'dark'
                ? 'white'
                : 'black',

            backgroundColor:
              props.mode === 'dark'
                ? '#212529'
                : 'white'
          }}
        >
          {text || 'Nothing to preview'}
        </div>

        {/* Saved Texts */}
        <h2 className="mt-5">
          Saved Texts
        </h2>

        {savedTexts.length === 0 ? (
          <p>No saved texts yet.</p>
        ) : (
          savedTexts.map((item) => (
            <div
              key={item._id}
              className="border rounded p-3 mb-3"
            >
              <p className="mb-2">
                {item.text}
              </p>

              <button
                className="btn btn-danger btn-sm"
                onClick={() =>
                  handleDeleteText(item._id)
                }
              >
                🗑️ Delete
              </button>
            </div>
          ))
        )}

      </div>
    </>
  );
}