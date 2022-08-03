import { RestaurantMenuOutlined, Timer } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();

  const { title, times, key, thumb, portion } = data;
  return (
    <>
      <Card
        sx={{
          maxWidth: "400px",
          boxShadow: "none",
          background: "#f6dbf3",
          borderRadius: "30px",
          marginBottom: 2,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`/recipes/${key}`);
          }}
          sx={{
            padding: 2,
            borderRadius: "30px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "30px",
            }}
            component="img"
            height="225px"
            image={thumb}
            alt="resep-iga-bakar-a-la-makassar"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" fontWeight={600}>
              {title.replace("Resep", "")}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Chip size="small" icon={<Timer />} label={times} />
              <Chip size="small" icon={<RestaurantMenuOutlined />} label={portion} />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default RecipeCard;