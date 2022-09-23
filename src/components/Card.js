import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { DataContext } from '../App';
import "./Card.css";

const Card = ({note,id}) => {
  const {updateToggle,setUpdateToggle,deleteCard,updateCard}=useContext(DataContext);

  const handleUpdate=()=>{
    updateCard(id);
    setUpdateToggle(!updateToggle);
  }

  const handleDelete=()=>{
    deleteCard(id)
  }

  return (

    <div className="card">

        <div className="note">
            <p>{note}</p>
        </div>

        <div className="update" onClick={handleUpdate}>
            <FiEdit className='updateIcon'/>
        </div>

        <div className="delete" onClick={handleDelete}>
            <MdDelete className='deleteIcon'/>
        </div>
    
    </div>
  )
}

export default Card;