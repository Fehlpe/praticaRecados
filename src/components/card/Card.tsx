import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Checkbox from "../../components/card/Checkbox";
import { Grid } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface CardCompProps {
  titulo?: string;
  texto?: string;
  acao?: () => void;
  xs?: number;
  lg?: number;
}

const CardComp: React.FC<CardCompProps> = ({ titulo, texto, xs, lg, acao }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            estudar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            tentar aprender mais sobre react e material ui
          </Typography>
          <Checkbox />
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            startIcon={<EditOutlinedIcon />}
            onClick={() => console.log("Editou")}
          >
            Editar
          </Button>

          <Button
            onClick={handleClickOpen}
            autoFocus
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Excluir
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deseja realizar essa operação?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta operação é irreversivel!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="error"
            variant="contained"
            startIcon={<CloseIcon />}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => console.log("Excluiu")}
            autoFocus
            color="success"
            variant="contained"
            startIcon={<CheckCircleOutlineIcon />}
          >
            Aceito
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default CardComp;
