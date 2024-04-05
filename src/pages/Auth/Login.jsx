import Auth from "../../layouts/Auth";
import { Stack, Box, Typography, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Auth>
      <LeftSide />
    </Auth>
  );
}

const LeftSide = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack
      sx={{ marginInline: "15%", height: "100vh" }}
      alignItems={"center"}
      gap={3}
      // justifyContent={"center"}
    >
      <Box sx={{ marginTop: "60px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "700", textAlign: "center", marginBottom: 1 }}
          color={"white"}
        >
          ورود
        </Typography>
        <Typography
          // variant="p"
          sx={{ display: "flex", justifyContent: "center" }}
          color={"gray"}
        >
          Your Social Campaigns
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "15px" }}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={
            // <CloudUploadIcon />
            <img width={20} src={"./icons8-google-94.png"} />
          }
          sx={{
            background: "transparent",
            color: "#848595",
            border: ".1px solid",
          }}
        >
          Sign in with Google
          <VisuallyHiddenInput type="file" />
        </Button>

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={
            // <CloudUploadIcon />
            <img width={20} src={"./icons8-apple-16.png"} />
          }
          sx={{
            background: "transparent",
            color: "#848595",
            border: ".1px solid",
          }}
        >
          Sign in with Apple
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "40px",
          width: "600px",
          "@media (max-width:600px)": {
            width: "400px",
          },
          "@media (max-width:400px)": {
            width: "150px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "17%",
            borderBottom: ".1px solid gray",
            width: "400px",
            height: "20px",
            "@media (max-width:600px)": {
              left: "0%",
            },
            "@media (max-width:400px)": {
              backgroundColor: "blue",
              width: "0px",
              position: "unset",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "37%",
              top: "22%",
              paddingBlock: "5px",
              paddingInline: "15px",
              bgcolor: "#0f1014",
              "@media (max-width:400px)": {
                position: "unset",
                // width: "100px",
                width: "140px",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Typography color={"#848595"}>Or with email</Typography>
          </Box>
        </Box>
      </Box>

      <Stack dir="rtl" color={"white"} gap={"6px"} width={"100%"}>
        <label for="">
          <Typography>ایمیل :</Typography>
        </label>
        {/* <label for="html">HTML</label> */}
        <br />
        <TextField
          error
          id="outlined-error-helper-text"
          // label="Error"
          // defaultValue="Hello World"
          placeholder="ایمیل"
          helperText="Incorrect entry."
          InputProps={{ style: { color: "white", height: "-1px" } }} // Set the color of the input text
          // InputLabelProps={{ style: { color: "white" } }} // Set the color of the label
          // FormHelperTextProps={{ style: { color: "white" } }} // Set the color of the helper text
          // sx={{ width: "600px" }}
        />

        <label for="">
          <Typography>گذرواژه :</Typography>
        </label>
        {/* <label for="html">HTML</label> */}
        <br />
        <TextField
          error
          id="outlined-error-helper-text"
          // label="Error"
          // defaultValue="Hello World"
          placeholder="گذرواژه"
          helperText="Incorrect entry."
          InputProps={{ style: { color: "white", height: "-1px" } }}
        />

        <Link>
          {" "}
          <Typography sx={{ color: "#054a9c" }}>
            گذرواژه را فراموش کردید ؟
          </Typography>
        </Link>

        <Button
          variant="contained"
          sx={{ background: "#054a9c", color: "#fff", marginTop: "19px" }}
        >
          ادامه
        </Button>
        {/* <Button
          variant="contained"
          sx={{ background: "#172331", color: "#549acb" }}
        >
          رد
        </Button> */}
        <Box
          sx={{
            display: "flex",
            color: "#4f515d",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Typography>
            هنوز عضو نشدید ؟
            <Link to={"./register"}>
              <Typography
                variant="a"
                sx={{ color: "#054a9c", marginRight: "4px" }}
              >
                ثبت نام
              </Typography>
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            color: "#054a9c",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c" }}>Terms</Typography>
          </Link>
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c", marginInline: "25px" }}>
              Plans
            </Typography>
          </Link>
          <Link to={"#"}>
            <Typography sx={{ color: "#054a9c" }}>Contact Us</Typography>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  // background:"red"
});
