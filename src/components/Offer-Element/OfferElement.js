import './OfferElement.css';

function OfferElement(props) {
   return (
      <div className='offer-element-body'>
         <span>{props.title}</span>
      </div>
   );
}

export default OfferElement;