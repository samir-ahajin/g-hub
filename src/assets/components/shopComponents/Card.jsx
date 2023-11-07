/* eslint-disable react/prop-types */
import styled from "styled-components";
import mainBg from "../../resources/mainBg.gif";
const Card = ({ data }) => {
  return (
    <ImageCon className="glass-card">
      <ImageSample src={data.background_image} alt="sample" />
      <MiniIcons>
        <li className="buttons">
          <button>add</button>
          <button>info</button>
        </li>

        <li className="meta">
          {data.metacritic == null ? 0 : data.metacritic}
        </li>
        <li className="title item">
          <h1>{data.name}</h1>
        </li>
      </MiniIcons>
      <TitleCon>
        {" "}
        <li className="item">
          <ul>
            {data.parent_platforms.map((info, index) => {
              return <li key={index}>{info.platform.name}</li>;
            })}
          </ul>
        </li>
      </TitleCon>
    </ImageCon>
  );
};

export default Card;

const ImageSample = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;
const ImageCon = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
`;
const MiniIcons = styled.ul`
  display: grid;
  grid-template-areas:
    "add meta"
    "title title";
  li {
    padding: 0.2rem;
  }
  .title {
    padding: 1rem;
    font-size: 28px;
    text-align: center;
    grid-area: title;
  }
  .meta {
    padding: 5px;
    text-align: right;
    grid-area: meta;
    color: #837585;
  }
  .buttons {
    button {
      max-height: 30px;
      margin-right: 4px;
    }
  }
`;

const TitleCon = styled.ul`
  li {
    text-align: center;
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 5px;
      gap: 2px;
      li {
        background-color: #4d4c4c;
        color: #dddbdb;
        padding: 4px;
        font-size: 8px;
        border-radius: 4px;
      }
    }
  }
`;
