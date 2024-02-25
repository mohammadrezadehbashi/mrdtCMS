import { Box, styled } from "@mui/material";
import React from "react";
import Sidebar from "../../components/partials/Sidebar";

export default function Home() {
  // const styles = (theme) => ({
  //   root: {
  //     backgroundColor: "blue",
  //     // Match [sm, md)
  //     //       [600px, 900px)
  //     [theme.breakpoints.between("sm", "md")]: {
  //       backgroundColor: "red",
  //     },
  //   },
  // });
  // Create a styled component with dynamic styles
  const StyledBox = styled(Box)(({ theme }) => ({
    // display: "flex",
    // justifyContent: "space-between",
    // backgroundColor: "blue",
    // width: "85%",
    [theme.breakpoints.between("sm", "md")]: {
      backgroundColor: "red",
    },
    "& .custom-content": {
      backgroundColor: "green",
    },
  }));
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ backgroundColor: "blue", width: "85%" }}>content</Box>
      <StyledBox sx={{ backgroundColor: "red", minWidth: "240px" }}>
        <Sidebar />
      </StyledBox>
    </Box>
  );
}


