import Grid from "@mui/material/Grid";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          xs=6
        </Grid>
        <Grid item xs={6}>
          xs=6
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
