import logo from './logo.svg';
import './App.css';

import GoodsList from './containers/GoodsList.js';
import CartList from './containers/CartList'

function App() {
  return (
    <>
    <GoodsList></GoodsList>
    <CartList></CartList>
    </>
  );
}

export default App;
