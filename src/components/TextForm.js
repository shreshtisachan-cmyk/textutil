import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('');

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
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);

    props.showAlert(
      'Text has been copied',
      'success'
    );
  };

  // Remove extra spaces
  const handleExtraSpaces = () => {
    setText(
      text
        .split(/\s+/)
        .filter(word => word !== '')
        .join(' ')
    );

    props.showAlert(
      'Extra spaces have been removed',
      'success'
    );
  };

  // Handle textarea changes
  const handleOnChange = (event) => {
    setText(event.target.value);
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
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >

        <h1 className="mb-3">
          {props.heading}
        </h1>

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
                props.mode === 'dark' ? 'black' : 'white',

              color:
                props.mode === 'dark' ? 'white' : 'black'
            }}
          ></textarea>
        </div>

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

        </div>

        <h2>Your Text Summary</h2>

        <p>
          <strong>{wordCount}</strong> words and{' '}
          <strong>{text.length}</strong> characters
        </p>

        <p>
          <strong>{readingTime.toFixed(2)}</strong> minutes read
        </p>

        <h2>Preview</h2>

        <div
          className="border rounded p-3"
          style={{
            color: props.mode === 'dark' ? 'white' : 'black',
            backgroundColor:
              props.mode === 'dark' ? '#212529' : 'white'
          }}
        >
          {text || 'Nothing to preview'}
        </div>

      </div>
    </>
  );
}