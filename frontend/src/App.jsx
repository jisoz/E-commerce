import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.global};
    
  }
`;


const lightTheme = {
  body: '#efae45',
  text: '#ffff',
  global:"#3e3737",
  nav:"rgba(0, 0, 0, 0.5)"
};

const darkTheme = {
  body: '#fcf9f1',
  text: '#020101',
  global:'#ffffff',
  nav:'rgba(208, 207, 208, 0.5)'

};

function App() {

  const isDarkMode = useSelector(state => state.darkmode.isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}>
    </Route>
    
   </Routes>
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
