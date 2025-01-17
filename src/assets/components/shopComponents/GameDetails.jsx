import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { getInfo } from "../../../api/Getdata";
import Card from "./Card";
const GameDetails = () => {
  const { id } = useParams();
  const games = useLoaderData();
  const isLoading = useNavigation();

  const nextPage = async (query) => {
    getInfo({ params: query });
  };
  return (
    <>
      <div>{id}</div>
      {games["next"] !== null && (
        <div>
          <button
            onClick={() => {
              nextPage({ id: games["next"] });
            }}
          >
            next
          </button>
        </div>
      )}
      <div className="center">
        {games == undefined ? (
          <div>no data</div>
        ) : isLoading.state === "loading" ? (
          <div className="spinner"></div>
        ) : (
          <ul>
            {games["results"].map((data, index) => {
              return <Card key={index} data={data}></Card>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default GameDetails;
