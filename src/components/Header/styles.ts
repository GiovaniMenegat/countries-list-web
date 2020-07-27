import styled from 'styled-components';

export const Header = styled.header`
  color: #3a3a3a;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 6px 0px #e6dfdf;
  padding: 30px 80px 20px;
  a {
    text-decoration: none;
    color: #3a3a3a;
  }
  div {
    cursor: pointer;
    svg {
      vertical-align: bottom;
      margin-right: 6px;
    }

    button {
      border: none;
      background-color: #fff;
      font-weight: 600;
    }
  }
`;
