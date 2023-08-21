import './WhoWeAre.css';
import ania from '../../resources/aniawhite.jpg'
import daniel from '../../resources/danielwhite.jpg'

function WhoWeAre(props) {
   return (
      <div className='page'>
         <div className='row'>
            <img className='profile-image' src={ania}></img>
            <div>Jestem urodzoną perfekcjonistką i dopinam wszystko na ostatni guzik. Z matmą lubiłam się od zawsze - na początku jako kujonka w pierwszej ławce, poźniej łamaczka najstraszniejszych zadań maturalnych. Z pasji do tego przedmiotu ukończyłam matematykę na Politechnice. Na co dzień pracuje w IT jako Analityk Danych. Korepetycji zaczęłam udzielać już kilka lat temu, a widząc zadowolenie u swoich podopiecznych postanowiłam zająć się tłumaczeniem matematyki na poważnie. Ogromną frajdę sprawiają mi słowa uczniów: "Ooo, już rozumiem", "to nie było takie trudne", "wreszcie to ogarnąłem", dlatego na swoich lekcjach stawiam na efektywność i prostotę tłumaczenia. Prywatnie jestem fanką rozwoju osobistego, zdrowego stylu życia i owsianki z waniliowym skyrem.</div>
         </div>
         <div className='row'>
            <img className='profile-image' src={daniel}></img>
            <div>Z zawodu jestem programistą - Frontend Developerem, prywatnie snuję codziennie nowe plany biznesowe. W liceum miałem problemy z matematyką w liceum, nawet nie zdałem pierwszego semestru w drugiej klasie. To co mi pomogło to ciężka praca - robiłem minimum 75% zadań z książki, nawet kosztem zarwanych nocy. Ostatecznie udało mi się nie tylko zrozumieć matematykę, także zacząłem ją lubić. Napisałem maturę na wynik, który pozwolił mi ze spokojem wejść do IT. Na podstawie swoich doświadczeń potrafię zrozumieć osoby, które chcą, ale nie potrafią zaliczać matematyki. Stawiam na maksymalną praktykę i stopniowe zrozumienie tematu, a systematyczność pozwoli nam na pierwsze efekty w ciągu niedługiego czasu.</div>
         </div>
      </div>
   );
}

export default WhoWeAre;