import { GlobalStyle } from './styles/global';
import { HeaderApp } from './components/Header';
import { Content } from './components/Content';
import { Provider } from './components/Context/Provider';

export function App() {

  return (
    <>
      <Provider>
        <HeaderApp />
        <Content />
        <GlobalStyle />
      </Provider>
    </>
  );
}