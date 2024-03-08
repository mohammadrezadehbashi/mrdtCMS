import { Box, Stack } from "@mui/material";
import React from "react";

function ContentLayout({ children }) {
  return (
    <Stack>
      <Stack>header</Stack>
      <Stack>{children}</Stack>
    </Stack>
  );
}

export default ContentLayout;
