import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    backgroundColor: '#121214e6';
  }

  .react-modal-content {
    top: '50%';
    left: '50%';
    right: 'auto';
    bottom: 'auto';
    marginRight: '-50%';
    transform: 'translate(-50%, -50%)';
    background: '#F0F0F5';
    color: '#000000';
    borderRadius: '8px';
    width: '736px';
    border: 'none';
  }
`;
