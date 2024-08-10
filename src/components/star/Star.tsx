import styled from "@mui/system/styled";
import { Box, Stack } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

const Item = styled("div")((theme) => ({
  textAlign: "center",
  borderRadius: 4,
}));

const Starts = () => {
  return (
    <Box>
      <StarIcon fontSize="small" sx={{ color: "#F8E10F" }} />
      <StarIcon fontSize="small" sx={{ color: "#F8E10F" }} />
      <StarIcon fontSize="small" sx={{ color: "#F8E10F" }} />
      <StarIcon fontSize="small" sx={{ color: "#F8E10F" }} />
    </Box>
  );
};

const Star = () => {
  return (
    <Stack
      spacing={1}
      letterSpacing=".1rem"
      useFlexGap
      flexWrap="wrap"
      direction="row"
    >
      <Item>
        <Starts />
      </Item>
      <Item>
        <Typography
          fontWeight="400"
          fontSize=".8em"
          variant="h6"
          component="h6"
        >
          4.0 - opiniones en Google
        </Typography>
      </Item>
    </Stack>
  );
};

export default Star;
