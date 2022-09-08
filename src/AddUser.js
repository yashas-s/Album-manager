import React from 'react';
import './User.css'

//Using State to add user
const AddUser = ({onAdd}) => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";
        
    }
    //Adding form section and input section too
    return (
        <div className='album-title'>
            <form  onSubmit={handleOnSubmit}>
                <h3>Name of the Album to be added</h3>
                <input placeholder='Album name' name='name' />
                <button className='button' onSubmit={handleOnSubmit}>Add</button>
            </form>
            <hr />
        </div>
    )
}
export default AddUser