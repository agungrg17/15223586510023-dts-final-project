import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { useState } from 'react';
// import recipesApi from '../apis/RecipesApi';
import { useNavigate } from "react-router-dom";
// import {
//     Alert,
//     AlertTitle,
//   } from "@mui/material";
// import SearchRecipe from '../containers/SearchRecipe';

const SearchInput = () => {
    const [inputSearch, setInputSearch] = useState("");
	const navigate = useNavigate();
    // const [input, setInput] = useState("");
    // const [query, setQuery] = useState("");
    // const [searchRecipes, setSearchRecipes] = useState([]);
    // const [error, setError] = useState("");
    // const [loading, setloading] = useState(false);
  
    // const searchData = async (params) => {
    //   setError("");
    //   setloading(true);
    //   try {
    //     const searchResult = await recipesApi.get(params);
    //     setSearchRecipes(searchResult.data.results);
    //     setloading(false);
    //     if (searchResult.data.results.length === 0) {
    //       setError({
    //         message: "Data yang Anda cari tidak ditemukan.",
    //       });
    //     }
    //   } catch (error) {
    //     setError(error);
    //     setloading(false);
    //   }
    // };
  
    // const submitHandler = () => {
    //   if (query === "") {
    //     setError({ message: "Isi kata kunci terlebih dahulu!." });
    //   } else {
    //     searchData(`/search/?q=${query}`);
    //   }
    // };
    const submitHandler = (e) => {
		e.preventDefault();
		navigate("/search/?q=" + inputSearch);
	};

    return (
        <>
        <form
            onSubmit={submitHandler}
            className="bg-gray-200 rounded-full flex items-center mr-4 ml-4 px-2 w-[400px] sm:w-[600px] lg:w-[700px]"
        >
        <SearchOutlined />
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none text-black"
          placeholder="Search Recipe"
        />
        </form>
        {/* {error && (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message}
            </Alert>
            )}
            <SearchRecipe result={searchRecipes} loading={loading} /> */}
      </>
    )
}
export default SearchInput;


// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import { InputBase, Box } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(0.5, 0.5, 0.5, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// const SearchInput = () => {
//   const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const query = data.get("search");
//     if (query !== "") navigate(`/search/${query}`);
//   };
//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mx: 2 }}>
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search", style: { fontSize: 15.5 } }}
//           name="search"
//         />
//       </Search>
//     </Box>
//   );
// }
// export default SearchInput;
