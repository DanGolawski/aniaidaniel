import './OfferElement.css';

function OfferElement(props) {
   return (
      <div className='body'>
         <span>{props.title}</span>
      </div>
   );
}

export default OfferElement;