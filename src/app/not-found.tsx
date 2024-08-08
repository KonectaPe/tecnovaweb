import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const NotFound = () => {
  return (
    <Box component="main">
      <Container maxWidth="lg">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "80vh", textAlign: "center" }}
          spacing={2}
        >
          <Typography variant="h2" component="h1" color="error">
            404
            <Typography variant="h6" component="div">
              Parece que te has perdido!!! {`:(`}
            </Typography>
          </Typography>
          <Button
            LinkComponent={Link}
            color="error"
            variant="contained"
            href="/"
          >
            Volver
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;
