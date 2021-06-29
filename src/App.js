import logo from './logo.svg';
import './App.css';
// to link react with store.js 
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer'


function App() {
  return (
    <>
      <Provider store={store}>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </Provider>
    </>
  );
}

export default App;
