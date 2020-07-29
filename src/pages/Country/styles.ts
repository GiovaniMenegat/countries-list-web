import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  margin: 30px 80px;
  padding: 5px 20px;
  border: none;
  background: transparent;
  box-shadow: 0px 0px 5px 3px ${props => props.theme.colors.shadow};
  border-radius: 5px;
  svg {
    vertical-align: bottom;
    margin-right: 10px;
  }
  @media (max-width: 825px) {
    margin: 30px 40px;
  }
`;

export const CountryInfo = styled.div`
  color: ${props => props.theme.colors.text};
  display: flex;
  margin: 30px 80px;
  img {
    width: 50%;
  }

  .information {
    width: 50%;
    margin-left: 50px;
    h2 {
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 10px;
    }
    .information-detail {
      justify-content: space-between;
      display: flex;
    }
    .border-div {
      margin-top: 30px;
    }
  }
  @media (max-width: 825px) {
    display: block;
    margin: 30px 40px;
    img {
      width: 100%;
    }
    .information {
      width: 100%;
      margin: 30px 0;
      h2 {
        margin-bottom: 20px;
      }
      .information-detail {
        display: block;
        .right-div {
          margin-top: 30px;
        }
      }
    }
  }
`;
