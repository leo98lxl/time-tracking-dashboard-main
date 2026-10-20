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
  },
  {
    title: "Play",
    weeklyHours: 10,
    prevWeeklyHours: 8,
    icon: "/images/icon-work.svg",
    color: "hsl(195, 74%, 62%)"
  },
  {
    title: "Study",
    weeklyHours: 4,
    prevWeeklyHours: 7,
    icon: "/images/icon-work.svg",
    color: "hsl(348, 100%, 68%)"
  },
  {
    title: "Exercise",
    weeklyHours: 4,
    prevWeeklyHours: 5,
    icon: "/images/icon-work.svg",
    color: "hsl(145, 58%, 55%)"
  },
  {
    title: "Social",
    weeklyHours: 5,
    prevWeeklyHours: 10,
    icon: "/images/icon-work.svg",
    color: "hsl(264, 64%, 52%)"
  },
  {
    title: "Self Care",
    weeklyHours: 2,
    prevWeeklyHours: 2,
    icon: "/images/icon-work.svg",
    color: "hsl(43, 84%, 65%)"
  }
]

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh"
      }}>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "60vh"
        }}>
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
      </Box>
    </Box>
  );
};
