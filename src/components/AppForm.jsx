import TextField from "@mui/material/TextField";
import { GitHub } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Box from "@mui/material/Box";
import GitHubTable from "./GitHubTable";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";

function AppForm() {
  const [username, setUsername] = useState("");
  const [userInfo, setUserinfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const hadnleUserInput = (user) => {
    setUsername(user);
  };

  const handleFetchUser = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      setIsLoading(false);
      throw Error("Couldn't fetch user from GitHub repo.");
    }

    const res = await response.json();

    if (res.length == 0) {
      setError(true);
    }
    setUserinfo(res);
    setUsername("");
    setIsLoading(false);
  };
  return (
    <>
      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginLeft: "120px",
        }}
      >
        <FormControl variant="standard">
          <Box>
            <GitHub sx={{ color: "black", mr: 1, my: 0.9 }} />
            <TextField
              id="input-with-sx"
              label="Username"
              variant="outlined"
              size="small"
              value={username}
              onChange={(event) => hadnleUserInput(event.target.value)}
            />
          </Box>
        </FormControl>

        <LoadingButton
          size="small"
          onClick={handleFetchUser}
          loading={isLoading}
          variant="outlined"
          style={{ marginBottom: "10px" }}
        >
          <span>Fetch Info</span>
        </LoadingButton>
      </Box>
      {userInfo.length > 0 && (
        <GitHubTable
          user={userInfo}
          username={username}
          public_repos={userInfo.length}
          name={userInfo.name}
          desc={userInfo.description}
          url={userInfo.url}
          id={userInfo.id}
          created={userInfo.created_at}
        />
      )}

      {error && (
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            marginLeft: "100px",
            marginTop: "20px",
          }}
        >
          No repos finded!
        </Typography>
      )}
    </>
  );
}

export default AppForm;
