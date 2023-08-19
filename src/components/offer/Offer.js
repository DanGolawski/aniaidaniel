import './Offer.css';
import ania from '../../resources/aniawhite.jpg'
import OfferElement from '../offer-element/OfferElement';

function Offer(props) {
   return (
      <div className='main-container page'>
         <div className='offer-grid'>
            <div className='offer-element-wrapper'>
               <OfferElement title='Cykliczne spotkania indywidualne'></OfferElement>
            </div>
            <div className='offer-element-wrapper'>
               <OfferElement title='Cykliczne spotkania grupowe'></OfferElement>
            </div>
            <div className='offer-element-wrapper'>
               <OfferElement title='Dokładne przygotowania do matury'></OfferElement>
            </div>
            <div className='offer-element-wrapper'>
               <OfferElement title='Spotkania jednorazowe indywidualne'></OfferElement>
            </div>
            <div className='offer-element-wrapper'>
               <OfferElement title='Spotkania jednorazowe grupowe'></OfferElement>
            </div>
            <div className='offer-element-wrapper'>
               <OfferElement title='Ekspresowa powtórka przed maturą'></OfferElement>
            </div>            
         </div>
         <img className='person-image' src={ania}></img>
      </div>
   );
}

export default Offer;