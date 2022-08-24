import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  header {
    background: ${({ theme }) => theme.headerBg};
    color: ${({ theme }) => theme.text};
  }

  .jobs-logo, .moon-icon, .down-arrow, .location-icon, .date-posted-icon {
    fill: ${({ theme }) => theme.text};
  }

  .job {
    background: ${({ theme }) => theme.headerBg};
  }

  .fulltime {
    color: ${({ theme }) => theme.body};
  }
  `;
