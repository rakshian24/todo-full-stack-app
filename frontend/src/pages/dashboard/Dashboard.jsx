import React, { useContext } from "react";

import { Stack, Typography } from "@mui/material";
import { AuthContext } from "../../context/authContext";

const Dashboard = () => {
  const {
    user: { user },
  } = useContext(AuthContext);
  return (
    <Stack>
      <Typography fontSize={16} fontWeight={500}>
        Hi! {user.username}
      </Typography>
    </Stack>
  );
};

export default Dashboard;
