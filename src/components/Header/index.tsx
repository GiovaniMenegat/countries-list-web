import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';

import { Header } from './styles';

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <h2>Where in the world?</h2>
        </Link>
        <div>
          <FiMoon size={26} />

          <button type="button">Dark Mode</button>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
