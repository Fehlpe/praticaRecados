import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Checkbox from '../../components/card/Checkbox'



export default function MediaCard() {

    return (
      <>
          
          <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          estudar 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            tentar aprender mais sobre react e material ui
          </Typography>
          <Checkbox/>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" startIcon={<EditOutlinedIcon />}>Editar</Button>
          <Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Excluir</Button>
          
        </CardActions>
          </Card>
      </>
    );
  }