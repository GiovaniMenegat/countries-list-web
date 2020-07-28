import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 80px;
`;

export const Form = styled.form`
  color: #858585;
  div {
    display: flex;
    width: 150%;
    box-shadow: 0px 0px 6px 0px ${props => props.theme.colors.shadow};
    background-color: ${props => props.theme.colors.input};
    padding: 8px;
    border-radius: 3px;
    svg {
      vertical-align: bottom;
      margin-right: 10px;
    }
    input {
      width: 100%;
      border: none;
    }
  }
  select {
    border: none;
    box-shadow: 0px 0px 6px 0px ${props => props.theme.colors.shadow};
    background-color: ${props => props.theme.colors.input};
    padding: 13px 20px;
    border-radius: 5%;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 20px;
`;

export const Country = styled.div`
  img {
    width: 100%;
  }
  div {
    margin: 15px;
    h4 {
      font-size: 20px;
      margin: 10px 0;
    }
    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;

export const CountrySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 80px;

  a {
    margin-bottom: 30px;
    width: 180px;
    background-color: ${props => props.theme.colors.input};
    color: ${props => props.theme.colors.text};
    flex: 0 1 21%;
  }
`;
