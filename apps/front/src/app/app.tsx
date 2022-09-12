import styled from 'styled-components';
import { Header } from './header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { space } from './style/const';
import { CreateUserPage } from './create-user';
import { useState } from 'react';
import { BoardGamePage } from './board-game';


export const App = () => {
  const [selectedGender, setSelectedGender] = useState<null | string>(null)
	const [username, setUsername] = useState<null | string>(null)
  return (
    <StyledApp>
      <Header />
      <Router>
        <Routes>
          <Route  path='/create-user' element={<CreateUserPage username={username} selectedGender={selectedGender} setSelectedGender={setSelectedGender} setUsername={setUsername} />} />
          <Route  path='/board' element={<BoardGamePage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}


const StyledApp = styled.div`
  padding: ${space.s} ${space.xl};
  background-color: #F7F7F7;
  font-family: Avenir;
  height: 100vh;
`;


