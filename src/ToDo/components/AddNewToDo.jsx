import { Container, Text, MediaQuery, Card, Center, Input, Button } from '@mantine/core';
import React, { useState } from 'react'

const AddNewToDo = (props) => {
const [newEntered, setnewEntered] = useState('')


const addToDoHandler = evt =>{
    evt.preventDefault();
    const newItem = {
        id: Math.random().toString(),
        text: newEntered

    };
    setnewEntered('');
    props.onAddItem(newItem);
};
const textChangeHandler = event => {
    setnewEntered(event.target.value);
  };
    return ( 
        <form onSubmit={addToDoHandler}>
        <Center>
         <Input
         onChange={textChangeHandler}
         size='md'
         style={{width:'80%', }}
         placeholder='Add whatever you want'
         rightSectionWidth={70}
         rightSection={
             <Button
             type='submit'
             color="indigo"
             >Add</Button>
         }
         
         />
         </Center></form>
     );
}
 
export default AddNewToDo;