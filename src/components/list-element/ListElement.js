import './ListElement.css';

function ListElement(props) {
   return (
      <div className='element-body'>
         <h1>{props.title}</h1>
      </div>
   );
}

export default ListElement;