import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Offer from './components/Offer/Offer';
import Additionals from './components/Additionals/Additionals';
import MobileApp from './components/MobileApp/MobileApp';
import Contact from './components/Contact/Contact';
import WhoWeAre from './components/Who-We-Are/WhoWeAre';

function App() {
  return (
    <div>
      <Home></Home>
      <h1 className='page-header blue-header' id='offer'>Nasza Oferta:</h1>
      <Offer></Offer>
      <h1 className='page-header blue-header' id='additionals'>...a dodatkowo otrzymujesz:</h1>
      <Additionals></Additionals>
      <h1 className='page-header blue-header' id='whoweare'>Kim jesteśmy:</h1>
      <WhoWeAre></WhoWeAre>
      <h1 className='page-header' id='mobile-app'>Nasza aplikacja mobilna:</h1>
      <MobileApp></MobileApp>
      <h1 className='page-header' id='contact'>Kontakt:</h1>
      <Contact></Contact>
    </div>
    
  );
}

export default App;
