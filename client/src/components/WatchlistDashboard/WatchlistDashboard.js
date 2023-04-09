import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import WatchlistCard from "./WatchlistCard";

export default function WatchlistDashboard() {
  const userCtx = useContext(UserContext);
  console.log(userCtx);
  console.log(userCtx.watchlists);
  return (
    <>
      {userCtx.watchlists.length > 0 &&
        userCtx.watchlists.map((each) => {
          return <WatchlistCard list={each} />;
        })}
    </>
  );
}
