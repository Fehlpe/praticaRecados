import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CardComp from "../../components/card/Card";
import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/">Home</Link>
      <Typography gutterBottom variant="h1">
        Bem vindo a página
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardComp />
        </Grid>

        <Grid item xs={3}>
          <CardComp />
        </Grid>
        <Grid item xs={3}>
          <CardComp />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
