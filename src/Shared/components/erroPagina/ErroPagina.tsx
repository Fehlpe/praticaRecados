import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import imagem from "./img.jpg";

const DivImg = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;

  img {
    height: 500px;
  }
`;

export default function ErroPagina() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Typography variant="h3" align="center" mt={5} p={2}>
          Ops! Não encontramos essa página.
        </Typography>

        <Typography variant="body2" color="text.secondary" align="center">
          Acho que você escolheu a página errada, porque eu não consegui achar a
          que você está procurando.
        </Typography>
        <DivImg>
          {" "}
          <img src={imagem} alt="" />
        </DivImg>
      </Grid>
    </Box>
  );
}
