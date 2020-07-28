import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { DefaultTheme } from 'styled-components';

import { Header } from './styles';

interface Props {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const HeaderComponent: React.FC<Props> = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header>
        <h2>Where in the world?</h2>
        <div>
          {theme.title === 'light' ? (
            <button type="button" onClick={toggleTheme}>
              <FiMoon size={26} />
              Dark Mode
            </button>
          ) : (
            <button type="button" onClick={toggleTheme}>
              <FiSun size={26} />
              Light Mode
            </button>
          )}
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
