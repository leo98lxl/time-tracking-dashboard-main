import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Profile() {
  return (
    <Box sx={{backgroundColor: "hsl(235, 46%, 20%)", 
              borderRadius: "0.9375rem",
              width: "20vw"
              }}>
      <Box sx={{backgroundColor: "hsl(246, 80%, 60%)",
                borderRadius: "0.9375rem", 
                padding: "2rem"
                }}>
        <Image 
            src="/images/image-jeremy.png" 
            alt="User image"
            height={78}
            width={78}
        />
        <Typography sx={{fontSize: "0.9375rem", color: "hsl(0, 0%, 100%)"}}>Report for</Typography>
        <Typography sx={{fontSize: "2.5rem", color: "hsl(0, 0%, 100%)"}}>Jeremy Robinson</Typography>
      </Box>
      <Box sx={{padding: "2rem",
                display: "flex",
                flexDirection: "column"
      }}>
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </Box>
    </Box>
  );
};
