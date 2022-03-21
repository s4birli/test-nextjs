import React from "react";
import { Container, Typography, Box, Tabs, Tab } from "@mui/material";
import { NextPage } from "next";

import useRouteMatch from "../hooks/useRouteMatch";
import NextLink from "../components/NextLink";

const MainLayout: NextPage = ({ children }) => {
  const routeMatch = useRouteMatch(["/form", "/table"]);
  const currentTab = routeMatch;
	console.log(currentTab);
  return (
    <Container maxWidth="md" sx={{ pt: 5 }}>
      <Typography fontWeight={"bold"} fontSize={30}>
        Test Application
      </Typography>
      <Typography>
        Technologies: Next.js, SCSS, Redux (preferably Redux Toolkit), MUI
      </Typography>

      <Box sx={{ width: "100%", borderBottom: 1, borderColor: 'divider', mt: 5 }}>
        <Tabs value={currentTab}>
          <Tab label="Form" value="/form" href="/form" component={NextLink} />
          <Tab label="Table" value="/table" href="/table" component={NextLink} />
        </Tabs>
      </Box>
			<Box sx={{p: 3}}>
				{children}
			</Box>
      
    </Container>
  );
};

export default MainLayout;
