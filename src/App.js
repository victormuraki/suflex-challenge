import { GlobalStyle } from './styles/global';
import { HeaderApp } from './components/Header';
import { Content } from './components/Content';
import { Provider } from './components/Context/Provider';
import { Modal } from './components/ModalInfo';

export function App() {

  return (
    <>
      <Provider>
        <HeaderApp />
        <Content />
        <Modal />
        <GlobalStyle />
      </Provider>
    </>
  );
}