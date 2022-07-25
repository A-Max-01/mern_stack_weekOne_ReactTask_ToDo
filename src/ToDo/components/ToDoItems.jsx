import { Container, Text, MediaQuery, Card, Center, TextInput, Input, Button, Image, Box, Space, Group } from '@mantine/core';
import { borderRadius } from '@mui/system';

import React, { PureComponent } from 'react'

const ToDoItems = (props) => {
    return ( 
        <Box 
        sx={(theme)=>({
            padding:12,
             borderRadius:12,
              margin:15,
        })}
        >
            <Card 
            shadow={'md'} p='lg'  >
                <Card.Section  style={{display:'flex', position:'relative'}} p='md'>
                    <Text size='lg'>
                        {props.text}
                        </Text>
                        <Space w={350} />
                        <Group  style={{            
                                position:'absolute',
                                right:'20px'
                            }}>
                    <Button>Edit</Button>
                    <Button
                    color={'red'}
                    >Delete</Button>
                    </Group>
                                    </Card.Section>
                                </Card>
                            </Box>
                        );
}
 
export default ToDoItems;



