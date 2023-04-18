import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import WatchlistCard from "./WatchlistCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const styles = {
  heading: {
    textAlign: "left",
    marginBottom: "1rem",
    textShadow: "1px 1px #dcdcdc",
  },
};

export default function WatchlistDashboard(props) {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  console.log(userCtx.watchlists);
  return (
    <>
      <Typography variant="h4" gutterBottom style={styles.heading}>
        Your watchlists
      </Typography>
      <Grid container justifyContent="center" spacing={2} wrap="wrap">
        {userCtx.watchlists.length > 0 &&
          userCtx.watchlists.map((each) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={each.name}>
                <WatchlistCard
                  onWatchlistSelect={props.onWatchlistSelect}
                  key={each.name}
                  list={each}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
