import React from "react";
import "../../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function (props) {
  const list = props.list;
  console.log(list);
  return (
    // <div className={"watchlist-card"}>
    //   {list.name}
    //   <ul>
    //     {list.symbols.length > 0 &&
    //       list.symbols.map((item) => <li key={item}>{item}</li>)}
    //   </ul>
    // </div>
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {list.name}
        </Typography>
        <List dense>
          {list.symbols.length > 0 &&
            list.symbols.map((item) => (
              <ListItem>
                <ListItemText primary={item} />
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  );
}
