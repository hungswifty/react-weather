import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

function Home({ news_DT }) {
  console.log("props ne");
  console.log(news_DT);
  console.log(news_DT.results[0].url);

  const newsContent = news_DT.results.map((item, i) => (
    <Card key={i} className="root-card">
      <CardActionArea onClick={(event) => (window.location.href = item.url)}>
        <CardMedia
          component="img"
          height="140"
          image="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/grammy-week-2021-gettyimages-911475958.jpg?itok=Kg-5Gy4X"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ));

  const newLists = <ul class="news-lists">{newsContent}</ul>;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={3}>
        {newsContent}
      </Grid>
    </Grid>
  );
}

export default withRouter(Home);
