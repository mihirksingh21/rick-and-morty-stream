// src/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background}; 
    color: ${({ theme }) => theme.colors.text}; 
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  header {
    padding: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .season-card {
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.buttonText};
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    header {
      font-size: 1.5em;
    }

    .season-card {
      width: calc(100% - 20px);
      margin-bottom: 10px;
      padding: 15px;
      font-size: smaller; // Adjust font size for mobile
    }
    
    h2, h3 {
      font-size: smaller; // Adjust heading sizes for mobile
    }
    
    video {
      width: 100%;
      height: auto; // Make video responsive
    }
  }
`;

export default GlobalStyles;