import React from "react";
import Star from "@/components/star/Star";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Card = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Typography fontWeight="900" variant="h4" component="h1">
          Diseño de páginas web Profesional🚀
        </Typography>
        <Typography fontSize="medium" variant="h6" component="h2">
          🎨Con un diseño web estratégicamente diseñado, podemos ayudarte a
          convertir visitantes en clientes, aumentando así tus ventas y tu éxito
          en línea.🚀
        </Typography>
        <Star />
        <Box>
          <Button variant="contained" color="primary">
            <Typography
              sx={{ textTransform: "capitalize" }}
              variant="h6"
              component="span"
            >
              Contáctanos
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Card;
