import daniel from '../../resources/danielwhite.jpg';
import ania from '../../resources/aniawhite.jpg';
import aniaidaniel from '../../resources/mobile-background.png';
import './Home.css'
import TopHeader from './Top-Header/TopHeader';
import MobileHeader from './mobile-header/MobileHeader';

function Home(props) {
   return (
      <div className='page'>
         <div className='desktop-header'>
            <TopHeader></TopHeader>
         </div>
         <div className='mobile-header'>
            <MobileHeader></MobileHeader>
         </div>
         <div className='images-container'>
            <img className='person-image desktop' src={daniel}></img>
            <img className='person-image desktop' src={ania}></img>
            <img className='person-image mobile' src={aniaidaniel}></img>
         </div>
         <div className='text-container'>
               <h1>Ania i Daniel</h1>
               <h3>Z pasji do efektów</h3>
            </div>
      </div>
   );
}

export default Home;