import './Additionals.css';
import daniel from '../../resources/danielwhite.jpg';
import ListElement from '../list-element/ListElement';

const additionalTitles = [
   'Dedykowaną aplikację z zadaniami',
   'Spotkania zdalne, w których piszesz razem z korepetytorem',
   'Spotkania zorganizowane pod twoje potrzeby'
]

function Additionals(props) {
   return (
      <div className='additionals-main-container page'>
         <img className='additionals-person-image' src={daniel}></img>
         <div className='additionals-container'>
         {
            additionalTitles.map(title => <ListElement title={title}></ListElement>)
         }
         </div>
      </div>
   );
}

export default Additionals;