import daniel from '../../resources/danielwhite.jpg'
import ania from '../../resources/aniawhite.jpg'
import './Home.css'
import TopHeader from './Top-Header/TopHeader';

function Home(props) {
   return (
      <div className='page'>
         <TopHeader></TopHeader>
         <div className='images-container'>
            <img className='person-image' src={daniel}></img>
            <img className='person-image' src={ania}></img>
         </div>
         <div className='text-container'>
               <h1>Ania i Daniel</h1>
               <h3>Z pasji do efektów</h3>
            </div>
      </div>
   );
}

export default Home;