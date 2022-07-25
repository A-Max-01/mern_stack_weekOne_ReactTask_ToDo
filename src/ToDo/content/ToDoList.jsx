import { Container, Text, MediaQuery, Card, Center, Input, Button } from '@mantine/core';
import React, { useState } from 'react'
import img from '../../404-not-found.gif'
import AddNewToDo from '../components/AddNewToDo';
import ToDoUserList from '../components/ToDoUserList';


const ToDo = () => {
    const [ToDoList, setToDo] = useState(
        [
            {id:"u1", text:"this is first jop", user:"User1"},
            {id:"u2", text:"this is first jop", user:"User2"},
            {id:"u3", text:"this is first jop", user:"User3"},
            {id:"u4", text:"this is first jop", user:"User4"},
            {id:"u5", text:"this is first jop", user:"User5"},
        ]);

        
        const addNewHandler = newToDo =>{
            setToDo(x => x.concat(newToDo));
        }
    return ( 
        <MediaQuery>
        <Container style={{marginTop:'3%', width:1000}}>
            <Card shadow={'md'} p="lg">
                <div style={{border:"1px solid black",borderRadius:15, margin:"20px" , padding:'20px'}}>
                        <Text weight={700} p='md'>Todo List Website</Text>
                       <AddNewToDo onAddItem={addNewHandler} />
                   <ToDoUserList items={ToDoList}/>

                </div>
            </Card>
        </Container>
       </MediaQuery>
     );
}
 
export default ToDo;