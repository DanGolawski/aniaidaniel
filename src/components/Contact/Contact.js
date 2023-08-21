import './Contact.css';
import logo from '../../resources/aniadaniellogo.png';
import instagram from '../../resources/instagram.png';
import youtube from '../../resources/youtube.png';
import tiktok from '../../resources/tiktok.png';

function Contact(props) {
   return (
      <div className='contact-container page'>
         <img className='logo-image' src={logo}></img>
         <h1>Telefon:</h1>
         <h2 className='bold'>515451515</h2>
         <h1>e-mail:</h1>
         <h2 className='bold'>aniaidaniel.kontakt@gmail.com</h2>
         <h1>Social Media</h1>
         <div className='social-media-container'>
            <a href='https://www.instagram.com/matematyka.ania.daniel/'>
               <img className='social-media-logo' src={instagram}></img>
            </a>
            <a href='https://www.youtube.com/channel/UCDGgQza1qp7aLK2yd6tLnwQ'>
               <img className='social-media-logo' src={youtube}></img>
            </a>
            <a>
               <img className='social-media-logo' src={tiktok}></img>
            </a>
         </div>
      </div>
   );
}

export default Contact;