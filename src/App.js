import { GlobalStyle } from './styles/global';
import { HeaderApp } from './components/Header';
import { Content } from './components/Content';

export function App() {

  return (
    <>
      <HeaderApp />
      <Content />
      <GlobalStyle />
    </>
  );
}