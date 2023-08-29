import './MobileApp.css';
import mobileApp from '../../resources/mobile.png';
import Button from '../Home/Button/Button';

function MobileApp(props) {
   return (
      <div className='mobile-container page'>
         <img className='mobile-app' src={mobileApp}></img>
         <div className='app-description-container'>
            <p className='main-paragraph'>Obserwujemy potrzeby naszych uczniów, dlatego stworzyliśmy darmową aplikację, która pomoże Ci w samodzielnej pracy.</p>
            <p className='main-paragraph'>Rozwiązuje podstawowy problem, kiedy nie masz korepetycji, a musisz rozwiązać zadania, pracę domową lub szybko przygotować się do sprawdzianu.</p>
            <p>W aplikacji znajdziesz:</p>
            <p>- rozwiązania zadań z twojej książki</p>
            <p>- zadania do matury</p>
            <p>- szybki dostęp do naszych social mediów</p>
            <p>- dodatkowe materiały samorozwojowe</p>
            <div class='button-container'>
               <a href='https://dangolawski.github.io/math-app/home'><Button title='Przejdź do aplikacji' white={true}></Button></a>
            </div>
         </div>
         
      </div>
   );
}

export default MobileApp;