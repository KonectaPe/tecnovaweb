"use client";

import Grid from "@mui/material/Grid";
import Layout from "@/components/layout/Layout";
import Card from "@/components/card/Card";
import Image from "next/image";
import svgContactanos from "../../../public/contactanos.svg";
import { Typography } from "@mui/material";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Layout>
      <Grid container spacing={2} columns={{ xs: 1, sm: 12 }}>
        <Grid item xs={6}>
          <Card />
        </Grid>
        <Grid item xs={6} sx={{ margin: "auto" }}>
          <Image
            src={svgContactanos}
            alt="Contactanos"
            width={200}
            height={200}
            style={{ width: "100%", height: "100%" }}
            priority={true}
            quality={50}
          />
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
  );
};

export default Home;
