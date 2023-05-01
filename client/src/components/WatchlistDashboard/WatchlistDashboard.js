import React, { useContext, useState } from "react";
import UserContext from "../../store/user-context";
import WatchlistCard from "./WatchlistCard";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CreateWatchListModal from "../CreateWatchListModal/CreateWatchListModal";

const styles = {
  heading: {
    textAlign: "left",
    marginBottom: "1rem",
    textShadow: "1px 1px #dcdcdc",
  },
  watchlistContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "1rem",
  },
};

export default function WatchlistDashboard(props) {
  const userCtx = useContext(UserContext);
  const stockSymbols = userCtx.allSymbols;
  const [createWatchListModalOpen, setCreateWatchListModalOpen] =
    useState(false);
  console.log(userCtx);
  console.log(userCtx.watchlists);

  const createWatchlistHandler = () => {
    setCreateWatchListModalOpen(true);
  };

  return (
    <>
      <CreateWatchListModal
        open={createWatchListModalOpen}
        handleClose={() => setCreateWatchListModalOpen(false)}
        stockSymbols={stockSymbols}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom style={styles.heading}>
          Your watchlists
        </Typography>
        <Button onClick={createWatchlistHandler}>Create Watchlist</Button>
      </div>
      <div style={styles.watchlistContainer}>
        {userCtx.watchlists.length > 0 &&
          userCtx.watchlists.map((each) => {
            return (
              <WatchlistCard
                onWatchlistSelect={props.onWatchlistSelect}
                key={each.name}
                list={each}
                style={{ minWidth: "300px" }}
              />
            );
          })}
      </div>
    </>
  );
}
