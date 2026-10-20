import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <Box sx={{backgroundColor: "hsl(235, 46%, 20%)"}}>
      <Box sx={{backgroundColor: "hsl(246, 80%, 60%)"}}>
        <Image 
            src="/images/image-jeremy.png" 
            alt="User image"
            height={78}
            width={78}
        />
      </Box>
      <button>Daily</button>
      <button>Weekly</button>
      <button>Monthly</button>
    </Box>
  );
};
