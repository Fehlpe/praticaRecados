import styled from "styled-components";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '../../Shared/components/inputs/Input';
import Background from '../../Shared/components/background/Background';
import Buttons from '../../Shared/components/botoes/Buttons';
import { Button } from "@mui/material";

const CardSign = styled.div`
    width: 50%;
    background: #2b2b2b;
    padding: 3%;
    -webkit-box-shadow: 0px 10px 26px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 26px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 10px 26px 0px rgba(0,0,0,0.75);
    color: white;
    
    Link{
        text-decoration: none;
    }
`

function Cadastro(){

    return(
        <>
        <Background>
            
                <CardSign>
                    <h1>Cadastrar</h1>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                            <Input id='standard-name-input' label='Nome'/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Input id='standard-email-input' label='E-mail'/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Input id='standard-password-input' label='Password' type='password'/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Input id='standard-passwordRepeat-input' label='Repeat password' type='password'/>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Buttons >Cadastrar</Buttons>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button variant="contained"><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Fazer Login</Link></Button>
                        </Grid>
                    </Grid>
                </CardSign>
            
        </Background>
        </>
    );
}

export default Cadastro;