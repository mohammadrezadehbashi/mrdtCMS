import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../../components/partials/Sidebar";
import ContentLayout from "../../layouts/ContentLayout";
import Auth from "../Auth";
import Dashboard from "../Dashboard";

export default function Home() {
  const [tab, setTab] = useState(0);

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
      backgroundColor: "black",
    },
  }));
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          // backgroundColor: "blue",
          width: "85%",
          display: "flex",
          justifyContent: "",
        }}
      >
        {/* CONTENT LAYOUT */}
        <ContentLayout>
          {tab === 1 ? <Auth /> : tab === 2 ? <Dashboard /> : null}
        </ContentLayout>
      </Box>
      <StyledBox sx={{ backgroundColor: "red", width: "15%" }}>
        <Sidebar tab={tab} setTab={setTab} />
      </StyledBox>
    </Box>
  );
}
