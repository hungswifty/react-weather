import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

function Home({ news_DT }) {
  console.log("props ne")
  console.log(news_DT)

    const newsContent = news_DT.articles.map((item) =>
    (
      <div key={item.title}>
        <h3>{item.author}</h3>
        <p>{item.publishedAt}</p>
      </div>
    )
    );

    const newLists = (
      <ul>{newsContent}</ul>
    ); 
  

    return (
      <div>
        <h2>Home</h2>
        <h3> test home</h3>
          {newLists}
        <h4> test test test home </h4>
      </div>
    );
}

export default withRouter(Home);
