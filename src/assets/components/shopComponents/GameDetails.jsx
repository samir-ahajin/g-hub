import { json, useLoaderData, useParams } from "react-router-dom";
import { loadData } from "../../../api/Getdata";
import { useEffect, useState } from "react";
import { getDateQuery } from "../../../api/Getdata";
import Card from "./Card";
const GameDetails = () => {
  const { id } = useParams();
  let [games, setGames] = useState();
  const [queries, setQueries] = useState("");

  useEffect(() => {
    let temp;

    if (id == "games") {
      setQueries("");
    } else {
      setQueries(id + "&");
    }
    loadData("/games", queries).then((data) => setGames(data));

    console.log(games);
    console.log("hello");
  }, [id]);

  return (
    <>
      <div>{id}</div>
      <ul>
        {games == undefined ? (
          <div>no data</div>
        ) : (
          games["results"].map((data, index) => {
            return <Card key={index} data={data}></Card>;
          })
        )}
      </ul>
    </>
  );
};

export default GameDetails;
