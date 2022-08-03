import { AccessTimeFilledOutlined, RestaurantMenuOutlined, ThumbUpOffAltOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  Button
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({data}) => {
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{ 
        display: "flex", 
        marginTop: "5rem",
        flexDirection: "column"}} 
        key={data.key}>
    <Card
      sx={{
        marginY: 5,
        boxShadow: "none",
        background: "#f6dbf3",
        borderRadius: "30px",
        minHeight: "400px",
        display: "flex",
        width: "100%",
      }}
      
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: 5 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack spacing={3}>
            <Typography variant="h3" fontWeight="600">
              {data.title.replace("Resep", "").split(",")[0]}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {data.title}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Chip sx={{
                  background: "lightpink"
              }}
                icon={<ThumbUpOffAltOutlined/>} label={data.dificulty} />
              <Chip sx={{
                  background: "lightpink"
              }}
              icon={<RestaurantMenuOutlined />} label={data.portion} />
              <Chip sx={{
              background: "lightpink"
              }}
              icon={<AccessTimeFilledOutlined />} label={data.times} />
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Stack
            sx={{ width: "100%", paddingX: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            rowGap={2}
          >
            <Button
              variant="contained"
              sx={{ 
                  height: "60px", 
                  textTransform: "none", 
                  paddingX: 5 , 
                  background: "lightpink",
              }}
              onClick={() => {
                navigate(`recipes/${data.key}`);
              }}
            >
              Lihat Resep
            </Button>
          </Stack>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "50%" }}
        image={data.thumb}
        alt={data.key}
      />
    </Card>
    </Box>   
    </>
  );
};

export default HeroBanner;