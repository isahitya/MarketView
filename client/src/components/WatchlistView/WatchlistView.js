import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import TickerOverview from "../TickerOverview";

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
          <Divider />
          <List>
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
        <TickerOverview key={selectedSymbol} symbol={selectedSymbol} />
      </Box>
    </>
  );
}
