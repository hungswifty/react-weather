import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Home from "./home";

function HomeData() {
  const [data, setData] = useState([]);
  const REACT_APP_NEWS_URL = process.env.REACT_APP_NEWS_URL;
  const REACT_APP_NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      console.log(REACT_APP_NEWS_API_KEY);
      await fetch(
        `${REACT_APP_NEWS_URL}/7.json?api-key=${REACT_APP_NEWS_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    if (data.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div>
      {typeof data.results !== "undefined" ? (
        <div>
          <Home news_DT={data} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default withRouter(HomeData);
