import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PaidIcon from "@mui/icons-material/Paid";

const Cards = () => {
  return (
    <>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <ElectricBoltIcon sx={{ fontSize: "5em", color: "#8A9FFF" }} />
              </Box>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Velocidad de Carga Rápida
              </Typography>
              <Typography
                fontWeight="500"
                fontSize="1em"
                variant="body2"
                component="h6"
                color="text.secondary"
              >
                No habrá tiempo de espera. Tu página se cargará al instante,
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <ThumbUpAltIcon sx={{ fontSize: "5em", color: "#8A9FFF" }} />
              </Box>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Contenido que engancha y atrapa
              </Typography>
              <Typography
                fontWeight="500"
                fontSize="1em"
                variant="body2"
                component="h6"
                color="text.secondary"
              >
                Contenido irresistible que los mantendrá enganchados desde el
                primer momento.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <SavedSearchIcon sx={{ fontSize: "5em", color: "#8A9FFF" }} />
              </Box>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Optimización SEO {"<>Google</>"}
              </Typography>
              <Typography
                fontWeight="500"
                fontSize="1em"
                variant="body2"
                component="h6"
                color="text.secondary"
              >
                Tus clientes te encontrarán sin esfuerzo. ¡Tus páginas web o
                tienda virtual!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea>
            <CardMedia sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <PaidIcon sx={{ fontSize: "5em", color: "#8A9FFF" }} />
              </Box>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6">
                Llamadas a la Acción Efectivas
              </Typography>
              <Typography
                fontWeight="500"
                fontSize="1em"
                variant="body2"
                component="h6"
                color="text.secondary"
              >
                Cada visitante recibirá una invitación personalizada a tomar
                acción.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default Cards;
