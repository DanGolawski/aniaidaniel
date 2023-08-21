import './TopHeader.css';
import Button from '../Button/Button';

function TopHeader(props) {

   function scrollTo(elementId) {
      if (!elementId) {
         return;
      }
      const pageComponent = document.querySelector(`#${elementId}`);
      console.log(pageComponent)
      if (pageComponent) {
         pageComponent.scrollIntoView({behaviour: 'smooth'});
      }
   }

   return (
      <div className='main-container'>
         <div onClick={() => scrollTo('offer')}>
            <Button title='Nasza oferta'></Button>
         </div>
         <div onClick={() => scrollTo('additionals')}>
            <Button title='Co dostajesz'></Button>
         </div>
         <div onClick={() => scrollTo('whoweare')}>
            <Button title='Kim Jesteśmy'></Button>
         </div>
         <div onClick={() => scrollTo('mobile-app')}>
         <Button title='Aplikacja'></Button>

         </div>
         <div onClick={() => scrollTo('contact')}>
            <Button title='Kontakt'></Button>
         </div>
      </div>
   );
}

export default TopHeader;