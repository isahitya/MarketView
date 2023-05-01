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
    cursor: "pointer",
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
    title:
      "General Motors raises 2023 guidance as first-quarter earnings beat expectations",
    image: "https://picsum.photos/200/200?random=1",
    description:
      "For the full year, GM is raising its adjusted earnings expectations to a range of $11 billion to $13 billion, or $6.35 to $7.35 a share, up from a previous range of $10.5 billion to $12.5 billion, or ...",
  },
  {
    id: 2,
    title:
      "US home prices rose slightly in February, snapping seven months of declines",
    image: "https://picsum.photos/200/200?random=2",
    description:
      "US home prices rose slightly in February, snapping a seven-month streak of month-over-month declines, according to the latest S&P CoreLogic Case-Shiller US National Home Price Index, released Tuesday...",
  },
  {
    id: 3,
    title: "US consumer confidence falls to 9-month low in April",
    image: "https://picsum.photos/200/200?random=3",
    description:
      "U.S. consumer confidence fell to a nine-month low in April led by a darkening outlook that augers a recession beginning in the near future, a survey showed on Tuesday...",
  },
  {
    id: 4,
    title: "For Tech, Doing Better Might Not Look Good Enough",
    image: "https://picsum.photos/200/200?random=4",
    description:
      "The first-quarter earnings season is well under way with roughly 20% of the S&P 500 companies having reported already. And the verdict is: So far, so good...",
  },
  {
    id: 5,
    title:
      "First Republic says deposits tumbled 40% to $104.5 billion in 1Q, but have stabilized since",
    image: "https://picsum.photos/200/200?random=5",
    description:
      "Troubled regional bank First Republic said Monday that its deposits fell 40.8% to $104.5 billion in the first quarter, which saw the collapse of two other mid-sized banks and sparked fear from customers about widespread bank failures...",
  },
  {
    id: 6,
    title:
      "Roblox, Amazon, Microsoft lead companies with highest paid internships",
    image: "https://picsum.photos/200/200?random=6",
    description:
      "Stripe topped Glassdoor's annual list of the 25 highest-paying internships with interns bringing home an average monthly salary of $9,064 based on a 40-hour work week, according to the report. That would equal over $100,000 per year...",
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
