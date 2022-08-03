import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Page404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{
        marginLeft: 55
    }}>       
    <img src="/404.png" alt="404 Not Found" className="" />
    <Link to="/" className="p-2 bg-lightpink-700 text-center rounded-sm">
        Back
    </Link>
    </Box>
  );
}

export default Page404;
