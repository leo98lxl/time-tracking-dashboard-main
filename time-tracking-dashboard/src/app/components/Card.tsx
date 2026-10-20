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
                <Typography 
                    sx={{
                        color: "hsl(0, 0%, 100%)",
                        fontSize: "1.125rem", 
                }}>
                    {title}
                </Typography>
                <Typography 
                    sx={{
                        color: "hsl(0, 0%, 100%)",
                        fontSize: "3rem", 
                }}>
                    {weeklyHours}hrs
                </Typography>
                <Typography 
                    sx={{
                        color: "hsl(236, 100%, 87%)",
                        fontSize: "0.9375rem", 
                }}>
                    Last Week - {prevWeeklyHours}hrs
                </Typography>
            </Box>
        </Box>
    );
};
