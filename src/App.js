import logo from './logo.svg';
import './App.css';
// to link react with store.js 
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </>
  );
}

export default App;
