import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import WatchlistCard from "./WatchlistCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { margin } from "@mui/system";

export default function WatchlistDashboard(props) {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  console.log(userCtx.watchlists);
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Your watchlists
      </Typography>
      <Grid container justifyContent="center">
        {userCtx.watchlists.length > 0 &&
          userCtx.watchlists.map((each) => {
            return (
              <WatchlistCard
                onWatchlistSelect={props.onWatchlistSelect}
                key={each.name}
                list={each}
              />
            );
          })}
      </Grid>
    </>
  );
}
