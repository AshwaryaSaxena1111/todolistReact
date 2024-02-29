import React from 'react'
import Button from '../Buttons/Buttons'


const InputTitle = (props) => {


  return (
    <form>
        <input type='text' 
        name = 'name'
        // value={todo.name}
        onChange={props.onChangeHandlerInput}
        
        />
    <Button />
       
    </form>
  )
}

export default InputTitle