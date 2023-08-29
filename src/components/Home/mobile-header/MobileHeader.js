import Button from '../Button/Button';
import './MobileHeader.css';

function MobileHeader(props) {

   function markAsClicked(hamburger) {
      document.querySelector('.hamburger-container').classList.toggle('clicked');
      document.querySelector('.mobile-buttons-container').classList.toggle('expanded');
   }

   function scrollTo(elementId) {
      if (!elementId) {
         return;
      }
      markAsClicked();
      const pageComponent = document.querySelector(`#${elementId}`);
      console.log(pageComponent)
      if (pageComponent) {
         pageComponent.scrollIntoView({behaviour: 'smooth'});
      }
   }
   
   return (
      <div className='mobile-header-container'>
         <div className="hamburger-container" onClick={() => markAsClicked()}>
            <div class="hamburger-bar hamburger-bar-1"></div>
            <div class="hamburger-bar hamburger-bar-2"></div>
            <div class="hamburger-bar hamburger-bar-3"></div>
         </div>
         <div className='mobile-buttons-container'>
            <div className='button-wrapper' onClick={() => scrollTo('offer')}>
               <Button title='Nasza oferta' white={true}></Button>
            </div>
            <div class='button-wrapper' onClick={() => scrollTo('additionals')}>
               <Button title='Co dostajesz' white={true}></Button>
            </div>
            <div class='button-wrapper' onClick={() => scrollTo('whoweare')}>
               <Button title='Kim Jesteśmy' white={true}></Button>
            </div>
            <div class='button-wrapper' onClick={() => scrollTo('mobile-app')}>
               <Button title='Aplikacja' white={true}></Button>
            </div>
            <div class='button-wrapper' onClick={() => scrollTo('contact')}>
               <Button title='Kontakt' white={true}></Button>
            </div>
         </div>
      </div>
   )
}

export default MobileHeader;