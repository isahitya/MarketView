import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const styles = {
  heading: {
    textAlign: "left",
    marginBottom: "1rem",
    textShadow: "1px 1px #dcdcdc",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    margin: "1rem",
    width: "100%",
  },
  media: {
    height: "6em",
    width: "100px",
    maxWidth: "100px",
  },
  content: {
    flexGrow: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "0.5rem",
  },
  headingText: {
    marginBottom: "0.5rem",
  },
};

const news = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    image: "https://picsum.photos/200/200?random=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque congue magna.",
  },
  {
    id: 2,
    title: "Praesent ac lacinia felis",
    image: "https://picsum.photos/200/200?random=2",
    description:
      "Praesent ac lacinia felis, vitae posuere elit. In viverra ante sit amet justo malesuada.",
  },
  {
    id: 3,
    title: "Fusce ultricies odio nec justo",
    image: "https://picsum.photos/200/200?random=3",
    description:
      "Fusce ultricies odio nec justo ullamcorper, a maximus magna scelerisque. Donec sit amet aliquam sapien.",
  },
  {
    id: 4,
    title: "Fusce ultricies odio nec justo",
    image: "https://picsum.photos/200/200?random=3",
    description:
      "Fusce ultricies odio nec justo ullamcorper, a maximus magna scelerisque. Donec sit amet aliquam sapien.",
  },
  {
    id: 5,
    title: "Fusce ultricies odio nec justo",
    image: "https://picsum.photos/200/200?random=3",
    description:
      "Fusce ultricies odio nec justo ullamcorper, a maximus magna scelerisque. Donec sit amet aliquam sapien.",
  },
  {
    id: 6,
    title: "Fusce ultricies odio nec justo",
    image: "https://picsum.photos/200/200?random=3",
    description:
      "Fusce ultricies odio nec justo ullamcorper, a maximus magna scelerisque. Donec sit amet aliquam sapien.",
  },
];

export default function NewsDashboard() {
  return (
    <>
      <Typography variant="h4" gutterBottom style={styles.heading}>
        Latest updates
      </Typography>
      {news.map((item) => (
        <Card key={item.id} style={styles.card}>
          <CardMedia
            style={styles.media}
            image={item.image}
            title="News Image"
          />
          <CardContent style={styles.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={styles.headingText}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
