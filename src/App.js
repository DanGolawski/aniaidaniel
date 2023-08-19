import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Offer from './components/offer/Offer';
import Additionals from './components/Additionals/Additionals';

function App() {
  return (
    <div>
      <Home></Home>
      <h1 className='page-header'>Nasza Oferta:</h1>
      <Offer></Offer>
      <h1 className='page-header'>A dodatkowo otrzymujesz:</h1>
      <Additionals></Additionals>
    </div>
    
  );
}

export default App;
