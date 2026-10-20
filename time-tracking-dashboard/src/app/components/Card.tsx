import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
    title: string;
    weeklyHours: string;
    prevWeeklyHours: string;
    icon: string;
    color: string;
}

export default function Card({title, weeklyHours, prevWeeklyHours, icon, color,}: Props) {
    return (
        <Box 
            sx={{
                backgroundColor: color,
                width: "18vw",
                height: "25vh",
                alignSelf: "flex-end",
                borderRadius: "0.9375rem",
            }}>
            <Box
                sx={{
                    backgroundColor: "hsl(235, 46%, 20%)",
                    width: "18vw",
                    height: "18vh",
                    borderRadius: "0.9375rem",
                    padding: "1rem",
            }}>
                <Image 
                    src={icon} 
                    alt="Icon"
                    width={78}
                    height={78}
                />
                <Typography>{title}</Typography>
                <Typography>{weeklyHours}</Typography>
                <Typography>{prevWeeklyHours}</Typography>
            </Box>
        </Box>
    );
};
