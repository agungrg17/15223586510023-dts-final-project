import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";


const Banner = ({data}) => {
    const img = "https://img.freepik.com/free-photo/concept-cooking-cake-pie-top-view_185193-80492.jpg?w=1380&t=st=1659505037~exp=1659505637~hmac=fec387f12c27145178d3cd0daeb8b7925d366b31ea12e91f0e26011668355221"

  return (
    <>
    <Box sx={{ 
        display: "flex", 
        marginTop: "5rem",
        flexDirection: "column"}} 
    >
    <Card
      sx={{
        marginY: 5,
        // boxShadow: "none",
        background: "#f6dbf3",
        borderRadius: "10px",
        minHeight: "400px",
        display: "flex",
        width: "100%",
      }}
      
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
        <CardContent sx={{ flex: "1 0 auto", justifyContent: "center" }}>
          <Stack spacing={4}>
            <Typography variant="h3" fontWeight="600">
              Temukan Resep Favoritmu
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Semua bisa memasak dengan mengikuti resep terbaik<br/>
              Mudah diikuti dan diterapkan siapa saja<br/>
              Tidak harus menjadi koki profesional untuk bisa memasak
            </Typography>
            {/* <Stack direction="row" spacing={2}>
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
            </Stack> */}
          </Stack>
        </CardContent>
        {/* <CardActions>
          <Stack
            sx={{ width: "100%", paddingX: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            rowGap={2}
          >
          </Stack>
        </CardActions> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "50%" }}
        image={img}
        alt="gambar"
      />
    </Card>
    </Box>   
    </>
  );
};

export default Banner;




// import { PlayCircleFilled, Restaurant, Timer } from "@mui/icons-material";
// import {
//   Alert,
//   AlertTitle,
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Chip,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { Container } from "@mui/system";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import useHooks  from "../services/ApiHooks";

// const HeroBanner = () => {
//   const key = "resep-chicken-teriyaki";

//   const navigate = useNavigate();
//   const { response, loading, error } = useHooks(`/recipe/${key}`);

//   if (loading) {
//     return <></>;
//   }

//   if (error) {
//     return (
//       <Container
//         sx={{
//           paddingY: 5,
//           marginTop: 25,
//           position: "relative"
//         }}
//       >
//         <Alert severity="error">
//           <AlertTitle>Error</AlertTitle>
//           {error.message}
//         </Alert>
//       </Container>
//     );
//   }

//   // console.log(response.results);
//   const { title, servings, thumb, times, desc, author } = response.results;
//   return (
//     <>
//     <Box sx={{ display: "flex", marginTop: "5rem"}}>
//       <Card
//         sx={{
//           marginY: 5,
//           boxShadow: "none",
//           background: "#f6dbf3",
//           borderRadius: "30px",
//           minHeight: "500px",
//           display: "flex",
//           width: "100%",
//         }}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column", padding: 5 }}>
//           <CardContent sx={{ flex: "1 0 auto" }}>
//             <Stack spacing={3}>
//               <Typography variant="h3" fontWeight="600">
//                 {title.replace("Resep", "").split(",")[0]}
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {desc.split(".")[0]}. {desc.split(".")[1]}
//               </Typography>
//               <Stack direction="row" spacing={2}>
//                 <Chip sx={{
//                     background: "lightpink"
//                 }}
//                  icon={<Timer />} label={times} />
//                 <Chip sx={{
//                     background: "lightpink"
//                 }}
//                  icon={<Restaurant />} label={servings} />
//               </Stack>
//             </Stack>
//           </CardContent>
//           <CardActions>
//             <Stack
//               sx={{ width: "100%", paddingX: 1 }}
//               direction="row"
//               justifyContent="space-between"
//               alignItems="center"
//               flexWrap="wrap"
//               rowGap={2}
//             >
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Avatar
//                   alt={author.user}
//                   src="https://i.pravatar.cc/100?img=61"
//                   sx={{ width: "56px", height: "56px" }}
//                 />
//                 <Stack>
//                   <Typography variant="subtitle1" color="text.secondary">
//                     {author.user}
//                   </Typography>
//                   <Typography variant="subtitle1" color="text.secondary">
//                     {author.datePublished}
//                   </Typography>
//                 </Stack>
//               </Stack>
//               <Button
//                 variant="contained"
//                 sx={{ 
//                     height: "60px", 
//                     textTransform: "none", 
//                     paddingX: 5 , 
//                     background: "lightpink",
//                 }}
//                 endIcon={<PlayCircleFilled />}
//                 onClick={() => {
//                   navigate(`recipes/${key}`);
//                 }}
//               >
//                 View Recipes
//               </Button>
//             </Stack>
//           </CardActions>
//         </Box>
//         <CardMedia
//           component="img"
//           sx={{ width: "50%" }}
//           image={thumb}
//           alt={key}
//         />
//       </Card>
//       </Box>
//     </>
//   );
// };

// export default HeroBanner;
