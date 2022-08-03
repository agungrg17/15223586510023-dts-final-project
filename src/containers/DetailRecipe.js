import { RestaurantMenuOutlined, Timer } from "@mui/icons-material";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardMedia,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
import { useParams } from "react-router-dom";
import useHooks from "../services/ApiHooks";
import ListForRecipe from './ListRecipe'

const DetailRecipe = () => {

    let { recipeId } = useParams();
    const { response, loading, error } = useHooks(`/recipe/${recipeId}`);

    if (loading) {
        return (
            <Container
            sx={{
              paddingY: 5,
              marginTop: 25,
              position: "relative"
            }}
          >
            <Alert severity="error">
              <AlertTitle>Sedang Memuat Data</AlertTitle>
            </Alert>
          </Container>
        )
      }
    
      if (error) {
        return (
          <Container
            sx={{
              paddingY: 5,
              marginTop: 25,
              position: "relative"
            }}
          >
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error.message}
            </Alert>
          </Container>
        );
      }

      const { 
                author, 
                desc, 
                ingredient, 
                servings, 
                step, 
                thumb, 
                times, 
                title 
            } = response.results;

    return (
        <Container sx={{
                marginTop: 13,
            }}
        >
            <Stack direction="row" justifyContent="center"
                    sx={{marginBottom: 3}}
            >
                <Box sx={{
                        maxWidth: "840px",
                    }}
                >
                    <Typography variant="h4" fontWeight={600}>
                        {title.replace("Resep", "").split(",")[0]}
                    </Typography>
                </Box>
            </Stack>
            <Stack 
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={4}
                sx={{marginBottom: 3}}
             >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box>
                        <Typography fontWeight="700">{author.user}</Typography>
                        <Typography fontWeight="500">{author.datePublished}</Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Timer />
                    <Box>
                        <Typography fontWeight="700">
                            Durasi
                        </Typography>
                        <Typography fontWeight="500">
                            {times}
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <RestaurantMenuOutlined />
                    <Box>
                        <Typography fontWeight="700">
                            Sajian
                        </Typography>
                        <Typography fontWeight="500">
                            {servings}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
            <Card sx={{
                     boxShadow: "none",
                     width: "100%",
                     maxHeight: "440px",
                     marginBottom: 5,
                }}
            >
                <CardMedia
                 sx={{
                    borderRadius: "30px",
                  }}
                  component="img"
                  image={thumb}
                  alt={title}
                >
                </CardMedia>
            </Card>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    sx={{
                    marginBottom: 5,
                    }}
                >
                <Box
                    sx={{
                        paddingRight: 5,
                    }}
                    >
                    <Box>
                        <Typography
                        fontWeight={600}
                        variant="h4"
                        sx={{
                            marginBottom: 2,
                        }}
                        >
                        Bahan - Bahan
                        </Typography>
                        <ListForRecipe data={ingredient} />
                    </Box>
                </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Box>
                        <Typography
                        fontWeight={600}
                        variant="h4"
                        sx={{
                            marginBottom: 2,
                        }}
                        >
                        Cara Memasak
                        </Typography>
                        <ListForRecipe data={step} />
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Typography
                    fontWeight={600}
                    variant="h4"
                    sx={{
                        marginBottom: 2,
                    }}
                    >
                    Apa itu {title.replace("Resep", "").split(",")[0]} ?
                </Typography>
                <Typography
                    variant="body"
                    fontWeight={400}
                    fontSize="16px"
                    lineHeight="28px"
                >
                    {desc}
                </Typography>
            </Box>
        </Container>
    );
};

export default DetailRecipe;


