import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f6dbf3",
          paddingY: 2,
          marginTop: "7rem",
          marginBottom: "1rem",
        }}
      >
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2" color="inherit">
              {" "}
              © 2022 ARG17
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
