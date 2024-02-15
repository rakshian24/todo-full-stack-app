import React, { useContext } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { ROUTES } from "../constants";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    logOut();
    navigate(ROUTES.LOGIN);
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        px: 2,
        py: 2,
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
        position: "sticky",
      }}
    >
      <Link to={"/"}>
        <Typography fontSize={20} fontWeight={600}>
          Todo App
        </Typography>
      </Link>
      {user?.token && <Button onClick={onLogOut}>Logout</Button>}
    </Stack>
  );
};

export default Header;
