import styled from "styled-components";

export const TextEditorWrapper = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    background-color: #49c01a;
    margin: 0;
  }
  .container .ql-editor {
    width: 8.5in;
    min-height: 11in;
    padding: 1in;
    margin: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    background-color: #c51111ff;
  }

  .quill {
    background-color: white;
    margin: 0;
  }

  .ql-container {
    width: 8.5in;
    min-height: 11in;
    padding: 1in;
    margin: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  }
  .container .ql-container.ql-snow {
    border: none;
    display: flex;
    justify-content: center;
    background-color: #dd2525;
  }

  .container .ql-toolbar.ql-snow {
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #d11e1e;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    width: 8.5in;
  }

  @page {
    margin: 2in;
  }

  @media print {
    body {
      background: none;
    }

    .container .ql-editor {
      width: 6.5in;
      height: 9in;
      padding: 0;
      margin: 0;
      box-shadow: none;
      align-self: flex-start;
    }

    .container .ql-toolbar.ql-snow {
      display: none;
      width: 8.5in;
    }
  }
`;
