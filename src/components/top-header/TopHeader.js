import './TopHeader.css';
import Button from '../button/Button';

function TopHeader(props) {
   return (
      <div className='main-container'>
         <Button title='Nasza oferta'></Button>
         <Button title='Co dostajesz'></Button>
         <Button title='Kim Jesteśmy'></Button>
         <Button title='Aplikacja'></Button>
         <Button title='Kontakt'></Button>
      </div>
   );
}

export default TopHeader;