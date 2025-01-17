import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getInfo, loadData } from "../../api/Getdata";
import { v4 as uuidv4 } from "uuid";
import { getDateQuery } from "../../api/Getdata";

const Shop = () => {
  const { genres, platforms } = useLoaderData();
  const [category, setCategory] = useState("");

  const [isPending, setIsPending] = useState(true);

  // useEffect(() => {
  //   if (category !== "") {
  //     loadData(category);
  //   }
  //   return () => {};
  // }, [category]);

  return (
    <>
      <ShopCon>
        <div id="shop-list" className="glass-morph">
          <div>____New Releases</div>
          {/* https://api.rawg.io/api/games?dates= 2019-01-01,2019-12-31 &key */}
          <Column>
            <NavLink to={`${getDateQuery("prior")}`}>30 days </NavLink>
            <NavLink to={`${getDateQuery("thisWeek")}`}>this week </NavLink>
            <NavLink to={`${getDateQuery("nextWeek")}`}> next week</NavLink>
          </Column>

          <div>Top</div>
          <Column>
            <NavLink to={`${getDateQuery("thisYear")}`}>
              {" "}
              best of the year
            </NavLink>
            <NavLink to={`${getDateQuery("lastYear")}`}>
              {" "}
              popular last year
            </NavLink>
            <NavLink to="games"> all time top</NavLink>
          </Column>

          <div id="genres">
            ___genres
            <Column>
              {genres["results"].map((genre, index) => {
                return (
                  <NavLink to={`genres=${genre.id}`} key={index}>
                    {genre.name}
                  </NavLink>
                );
              })}
            </Column>
          </div>
          <div>
            ___PLATFORM
            <Column>
              {platforms["results"].map((platform, index) => {
                return (
                  <NavLink to={`platforms=${platform.id}`} key={index}>
                    {platform.name}
                  </NavLink>
                );
              })}
            </Column>
          </div>
        </div>
        <div className="glass-morph">
          <Outlet />
        </div>
      </ShopCon>
    </>
  );
};
export default Shop;

const ShopCon = styled.div`
  color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  height: auto;
  min-height: 100%;
`;

const Column = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  a {
    color: white;
  }
  a.active {
    color: red;
  }
`;
