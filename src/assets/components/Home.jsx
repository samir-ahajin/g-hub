import { useLoaderData } from "react-router-dom";

import Carousel from "./homeComponents/Carousel";
import styled from "styled-components";

const Home = () => {
  const carouselData = useLoaderData();

  return (
    <>
      <HomeCon className="center">
        <Title>
          <div className="center">
            <h1>
              G<span>ame</span>-hub
            </h1>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            incidunt est quae explicabo expedita voluptatem laudantium nobis
            facere, nihil rerum dicta labore perferendis ea necessitatibus
            similique doloribus enim eveniet atque.
          </div>
        </Title>

        <ConDiv className="images">
          <Carousel carouselData={carouselData} />
        </ConDiv>
      </HomeCon>
    </>
  );
};

export default Home;
const HomeCon = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
`;
const Title = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  gap: 35px;
  color: white;
  text-align: center;
  padding-top: 2rem;
  h1 {
    background: rgba(3, 10, 53, 0.85);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);

    border-radius: 10px;
    max-width: 200px;
    font-size: 30px;
    padding: 1rem;
    span {
      color: #691f08;
    }
  }
`;

const ConDiv = styled.div``;
