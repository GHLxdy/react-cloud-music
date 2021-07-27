import './App.css';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { Provider } from 'react-redux';
import store from 'store';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {renderRoutes(routes)}
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
