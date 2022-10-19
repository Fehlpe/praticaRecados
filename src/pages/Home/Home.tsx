///- Na página Home deve conter um título com boas-vindas ao usuário que está logado. Deve mostrar o nome do usuário que está logado na aplicação.
// Deve mostrar uma listagem de tarefas do usuário logado.
// Cada tarefa deve conter: card?? título, descrição, status (concluído e não-concluído), bem como um botão de editar e excluir a tarefa.
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export default function MediaCard() {

  return (
    <>
        <Link to="/recados">Home</Link>
        <Card sx={{ maxWidth: 345 }}>
    
         
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
    </>
  );
}