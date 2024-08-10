import Layout from "@/components/layout/Layout";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@/components/card/Card";

const Page = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Layout>
  );
};

export default Page;
