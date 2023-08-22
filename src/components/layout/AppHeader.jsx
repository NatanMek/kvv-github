import NetcomLogo from "../../assets/netcom-kassel-logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href="https://netcom-kassel.de/" target="_blank">
            <img src={NetcomLogo} style={{ width: "150px" }}></img>
          </a>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            GitHub API
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
