import { Container, Box, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Box bgcolor="#f45454" color="#ffffff" sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            xs=8
          </Grid>
          <Grid item xs={6}>
            xs=4
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
