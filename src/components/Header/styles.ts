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
`;
