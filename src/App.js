import { GlobalStyle } from './styles/global';
import { HeaderApp } from './components/Header';
import { Content } from './components/Content';
import { Provider } from './components/Context/Provider';
import { Modal } from './components/ModalInfo';
import { Footer } from './components/Footer';

export function App() {

  return (
    <>
      <Provider>
        <HeaderApp />
        <Content />
        <Footer/>
        <Modal />
        <GlobalStyle />
      </Provider>
    </>
  );
}