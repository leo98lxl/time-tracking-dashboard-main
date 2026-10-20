import Box from "@mui/material/Box";
import Card from "./components/Card";
import Container from "@mui/material/Container";
import Profile from "./components/Profile";
import React from "react";

const data = [
  {
    title: "Work",
    weeklyHours: 32,
    prevWeeklyHours: 36,
    icon: "/images/icon-work.svg",
    color: "hsl(15, 66%, 56%)"
  }
]

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "60vh"
        }}>
      </Box>
      <Profile />
      <Box 
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "3rem"
        }}>
          {data.map((item) => {
            return <Card key={item.title} {...item} />
          })}
      </Box>
    </Container>
  );
};
