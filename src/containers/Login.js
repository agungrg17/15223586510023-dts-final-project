import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Typography,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Modal,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithGoogle, logInWithEmailAndPassword } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import themes from '../themes/themes'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f6dbf3",
  border: "2px solid grey",
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const err = await logInWithEmailAndPassword(
      data.get("email"),
      data.get("password")
    );
    if (!err) {
      navigate("/");
    } else {
      handleOpen();
    }
  };

  return (
    <ThemeProvider theme={themes}>
      <Grid container component="main" 
        sx={{ 
            height: "90vh", 
            marginTop: 11, 
            marginBottom: -14 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/cute-bakery-chef-girl-smiling-uniform-mascots-cartoon-art-illustration_56104-571.jpg?w=996&t=st=1659499489~exp=1659500089~hmac=234589a5e1fa22386e40137e9e6bc8834901e95472265c8dd71b3c15921ffbfd)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link onClick={() => navigate("/")} component="button">            
            <Typography 
                component="h1" 
                variant="h5"
                sx={{
                  color: "black",
                  }}>
              Sign in
            </Typography>
            </Link>
            <Box
              component="form"
              noValidate={false}
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                startIcon={<GoogleIcon></GoogleIcon>}
                sx={{ mb: 2, backgroundColor: "white" }}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link 
                  variant="body2"
                  sx={{
                    color: "black",
                    }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant="body2"
                    component="button"
                    onClick={() => navigate("/register")}
                    sx={{
                        color: "black",
                        }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" 
                sx={{ 
                    mb: 5,
                    color: "black" 
                    }}>
              The email address or password is incorrect. Please retry...
            </Typography>
            <Button
              color="error"
              variant="contained"
              onClick={() => {
                handleClose();
              }}
              sx={{
                color: "black",
                }}
            >
              Retry
            </Button>
          </Box>
        </Modal>
      </Grid>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Recipes. All Rights Reserved
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Login;
