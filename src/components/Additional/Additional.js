import './Additional.css';

function Additional(props) {
   return (
      <div className='additional-body'>
         <img className='background-image' src={props.image}></img>
         <h1>{props.title}</h1>
      </div>
   );
}

export default Additional;