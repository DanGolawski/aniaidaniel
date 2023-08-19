import './Additionals.css';
import daniel from '../../resources/danielwhite.jpg';
import Additional from '../Additional/Additional';

function Additionals(props) {
   return (
      <div className='main-container page'>
         <img className='person-image' src={daniel}></img>
         <Additional title='Dedykowaną aplikację z zadaniami'></Additional>
         <Additional title='Spotkania zdalne, w których piszesz razem z korepetytorem'></Additional>
         <Additional title='Spotkania zorganizowane pod twoje potrzeby'></Additional>
      </div>
   );
}

export default Additionals;