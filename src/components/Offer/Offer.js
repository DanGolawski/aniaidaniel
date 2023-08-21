import './Offer.css';
import ania from '../../resources/aniawhite.jpg'
import ListElement from '../list-element/ListElement';

const offerTitles = [
   'Cykliczne spotkania indywidualne',
   'Dokładne przygotowania do matury',
   'Cykliczne spotkania grupowe',
   'Spotkania jednorazowe indywidualne',
   'Spotkania jednorazowe grupowe',
   'Ekspresowa powtórka przed maturą'
]

function Offer(props) {
   return (
      <div className='offer-main-container page'>
         <div className='offer-container'>
            {
               offerTitles.map(title => <ListElement title={title}></ListElement>)
            }
         </div>
         <img className='person-image' src={ania}></img>
      </div>
   );
}

export default Offer;