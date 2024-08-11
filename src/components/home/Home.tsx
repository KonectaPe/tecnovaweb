"use client";

import Grid from "@mui/material/Grid";
import Layout from "@/components/layout/Layout";
import Card from "@/components/card/Card";
import Image from "next/image";
import svgContactanos from "../../../public/contactanos.svg";
import { Typography } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Cards from "@/components/cards/Cards";

const Home = () => {
  return (
    <>
      <Layout>
        <Grid container spacing={2} columns={{ xs: 1, sm: 12 }}>
          <Grid item xs={6}>
            <Card />
          </Grid>
          <Grid item xs={6} sx={{ margin: "auto" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image
                src={svgContactanos}
                alt="Contactanos"
                priority={true}
                quality={20}
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography textAlign={{ xs: "center", sm: "end" }} sx={{ mt: 2 }}>
              Diseñado por 😁
              <Link
                style={{ textDecoration: "underline", color: "inherit" }}
                href="https://lukaszadam.com/illustrations"
                passHref
                target="_blank"
                prefetch={false}
              >
                <Typography component="span" sx={{ padding: 0.5 }}>
                  LukaszAdam
                </Typography>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Layout>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundImage: "url(/wave.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Layout>
          <Grid container spacing={4} columns={{ xs: 3, sm: 6, md: 12 }}>
            <Cards />
          </Grid>
        </Layout>
      </Box>
    </>
  );
};

export default Home;
