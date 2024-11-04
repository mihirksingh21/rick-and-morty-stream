
import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
   padding: 20px;
   text-align: center;
   background-color: ${({ theme }) => theme.colors.secondary};
`;

const HeaderTitle = styled.h1`
   margin-bottom: 10px;
`;

const HeaderButton = styled.button`
   background-color: ${({ theme }) => theme.colors.buttonBackground};
   color: ${({ theme }) => theme.colors.buttonText};
   border-radius: 5px;
   padding: 10px;

   &:hover {
     opacity: 0.8;
   }
`;

const Header = () => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
     setDarkMode(!darkMode);
     document.body.classList.toggle('dark-mode', !darkMode);
   };

   return (
     <HeaderContainer>
       <HeaderTitle>Rick and Morty Streaming</HeaderTitle>
       <HeaderButton onClick={toggleDarkMode}>
         Switch to {darkMode ? 'Light' : 'Dark'} Mode
       </HeaderButton>
     </HeaderContainer>
   );
};

export default Header;