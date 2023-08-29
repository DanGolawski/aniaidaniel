import './ListElement.css';

function ListElement(props) {
   return (
      <div className='list-element-body'>
         <p className='list-element-header'>{props.title}</p>
      </div>
   );
}

export default ListElement;