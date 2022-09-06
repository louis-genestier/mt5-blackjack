import styled from 'styled-components';
import Card from './card';
import Home from './home';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  );
}

export default App;
