import React, { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import TickerOverview from "../TickerOverview";
import RiskProfile from "./RiskProfile";
import calculateRiskProfile from "./RiskProfileCalculator";

const drawerWidth = 240;

export default function WatchlistView(props) {
  const watchlist = props.watchlist;
  const [selectedSymbol, setSelectedSymbol] = useState(
    watchlist.symbols.length > 0 ? watchlist.symbols[0] : ""
  );

  const selectedItemChangeHandler = (e) => {
    console.log(e);
    setSelectedSymbol(e);
  };

  // const riskProfile = {
  //   averagePeRatio: 18.6,
  //   averageBeta: 1.1,
  //   averageSharpeRatio: 0.35,
  // };

  const [riskProfile, setRiskProfile] = useState(null);

  useEffect(() => {
    setRiskProfile(calculateRiskProfile(3));
  }, []);

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem key={watchlist.name} disablePadding>
              <ListItemButton>
                {/* <ListItemText primary={watchlist.name} /> */}
                <h2 style={{ margin: "0.1em" }}>{watchlist.name}</h2>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider marginBottom="10em" />
          <List marginTop="10em">
            {watchlist.symbols.map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => selectedItemChangeHandler(text)}
              >
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box style={{ marginLeft: "16em", marginTop: "5em" }}>
        {riskProfile != null && (
          <RiskProfile
            riskProfile={riskProfile}
            watchlistName={watchlist.name}
          />
        )}
        <div style={{ border: "1px solid black", marginTop: "2em" }}></div>
        <TickerOverview key={selectedSymbol} symbol={selectedSymbol} />
      </Box>
    </>
  );
}
