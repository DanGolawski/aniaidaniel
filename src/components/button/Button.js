import './Button.css';

function Button(props) {
   return (
      <div className='body'>
         <span className='title'>{props.title}</span>
      </div>
   );
}

export default Button;