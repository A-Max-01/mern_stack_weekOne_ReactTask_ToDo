import { Container, Grid, Image,Text, TextInput, Button,PasswordInput,Center } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../signup-image.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
const SingUp = () => {
    return ( 
        <Container >
        <Grid style={{ boxShadow:"20px 30px 60px  black",borderRadius:20,  marginTop:100}}>
           
            <Grid.Col span={5}>
                <div style={{padding:20, marginTop:50}}>
                    <Text size={'xl'} weight={700}
                    
                    style={{fontSize:34}}
                    >Sign up</Text>
                    <form style={{marginTop:50}} method={'Post'} onSubmit={()=>{<Link to="/"/>}}>
                        <TextInput
                        icon={<AccountCircleIcon/>}
                        placeholder="User name"
                        variant='unstyled'
                        sx={(theme)=>({
                            '&:hover':{borderBottom:'3px solid #424242'}
                        })}
                        ></TextInput>
                        <PasswordInput
                        icon={<LockIcon/>}
                        placeholder="Password"
                        variant='unstyled'
                        sx={(theme)=>({
                            marginTop:50,
                            '&:hover': { borderBottom:'3px solid #424242' }
                        })}
                        ></PasswordInput>
                        <PasswordInput
                        icon={<LockIcon/>}
                        placeholder="Re-Enter Password"
                        variant='unstyled'
                        sx={(theme)=>({
                            marginTop:50,
                            '&:hover': { borderBottom:'3px solid #424242' }
                        })}
                        ></PasswordInput>
                        <Center>
                        <Button 
                        redius="md" size="md" color="indigo"
                        style={{marginTop:40}}
                        >Register</Button>
                        </Center>
                    </form>
                </div>
            
            </Grid.Col>
            <Grid.Col style={{ width:300, }} span={5}>
                <div style={{width:300, height:450, padding:60}}>
                <Image
                height={350}
                    radius={'md'} src={img} alt='img'/>
                    <div style={{marginTop: 100, marginLeft:150}}>
                        <Link style={{  marginTop: 60}} to="/login">I am already member</Link>
                    </div>
                    
                </div> 
            </Grid.Col>
        </Grid>
    </Container>
     );
}
 
export default SingUp;