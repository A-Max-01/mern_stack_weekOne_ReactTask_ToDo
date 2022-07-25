import { Container, Text, MediaQuery, Card, Center, TextInput, Input, Button, Image } from '@mantine/core';
import React from 'react'
import img from '../../404-not-found.gif'
import ToDoItems from './ToDoItems';

const ToDoUserList = ({items}) => {
if(items.length === 0){
    
    return(
        <div style={{padding:"20px", marginTop:"20px"}}>
                            <Center>
                                 <Text p={'md'}>please add a todo</Text>
                            </Center>
                            <Center >
                            <div style={{width:200, height:200}}>
                                 <Image src={img} />
                            </div>
                               
                            </Center>

                        </div>
    );
}
else{
    return (
       <div>
        {items.map(item =>(
            <ToDoItems key={item.id} id={item.id} text={item.text} user={item.user}/>
        ))}
       </div>
    );
}
     
}
 
export default ToDoUserList;