import { Container, Grid, Image,Text, TextInput, Button,PasswordInput, Center } from '@mantine/core';
import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../signin-image.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return ( 
        <Container >
            <Grid style={{ boxShadow:"20px 30px 60px  black",borderRadius:20,  marginTop:100}}>
                <Grid.Col style={{ width:300, }} span={7}>
                    <div style={{width:300, height:450, padding:60}}>
                    <Image
                    height={350}
                        radius={'md'} src={img} alt='img'/>
                        <div style={{marginTop: 100, marginLeft:150}}>
                            <Link style={{  marginTop: 60}} to="/signup">Create New Account</Link>
                        </div>
                        
                    </div> 
                </Grid.Col>
                <Grid.Col span={5}>
                    <div style={{padding:20, marginTop:50}}>
                        <Text size={'xl'} weight={700}
                        
                        style={{fontSize:34}}
                        >Login</Text>
                        <form style={{marginTop:50}} method={'Post'} onSubmit={()=>{<Link to="/"/>}}>
                            <TextInput
                            icon={<AccountCircleIcon/>}
                            placeholder="User name"
                            variant='unstyled'
                            // style={{borderBottom:'3px solid #424242'}}
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
                            <Center>
                            <Button 
                            redius="md" size="md" color="indigo"
                            style={{marginTop:40}}
                            >Login</Button></Center>
                        </form>
                    </div>
                
                </Grid.Col>
            </Grid>
        </Container>
     );
}
 
export default Login;