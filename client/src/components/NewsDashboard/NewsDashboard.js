import React from "react";
import Typography from "@mui/material/Typography";

const styles = {
  heading: {
    textAlign: "left",
    marginBottom: "1rem",
    textShadow: "1px 1px #dcdcdc",
  },
};

export default function NewsDashboard() {
  return (
    <>
      {" "}
      <Typography variant="h4" gutterBottom style={styles.heading}>
        Latest updates
      </Typography>
    </>
  );
}
