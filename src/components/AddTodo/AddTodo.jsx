import React from "react";
import InputTitle from "../SubComponents/InputTitle/InputTitle";

const AddTodo=(props)=>{


    return(
    <>
    <InputTitle  onChangeHandlerInput={props.onChangeHandler}/>
    </>
    )
}


export default AddTodo;