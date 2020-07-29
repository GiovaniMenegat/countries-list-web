import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 6px 0px ${props => props.theme.colors.shadow};
  padding: 30px 80px 20px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
  div {
    cursor: pointer;
    svg {
      vertical-align: bottom;
      margin-right: 6px;
    }

    button {
      border: none;
      background-color: transparent;
      font-weight: 600;
    }
  }
  @media (max-width: 825px) {
    padding: 30px 40px 20px;
    h2 {
      font-size: 16px;
    }
    div {
      svg {
        width: 20px;
      }
      button: {
        font-size: 16px;
      }
    }
  }
`;
