import "./weboptions.css";
import search from "../../img/search.svg";
import x from "../../img/x.svg";
import { selectCocktailData } from "../../selectors/selectCocktailData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { POPUP_NAME } from "../../utils/popupNames";
import searchicon from "../../img/search.svg";
import { useState } from "react";
import { selectOpenPopup } from "../../selectors/selectCocktailData";
import Input from "../input/Input";

export function WebOptions() {
  const open = useSelector(selectOpenPopup);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const cocktailData = useSelector(selectCocktailData);
  return (
    <div className="weboptions">
      <div className="categories">
        {open && (
          <Input
            icon={searchicon}
            value={searchValue}
            className="search-input"
            placeholder="TYPE HERE"
            onChange={(e) => {
              setSearchValue(e.target.value);
              dispatch({
                type: "SEARCH",
                payload: { searchParam: e.target.value },
              });
            }}
          />
        )}

        {!open && <Link to="/">HOME</Link>}
        {!open &&
          cocktailData.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              onClick={() => {
                dispatch({
                  type: "SET_CATEGORY",
                  payload: { id: category.id },
                });
              }}
            >
              {category.categoryTitle}
            </Link>
          ))}
      </div>
      <div
        className="websearch"
        onClick={() => {
          dispatch({
            type: "TOGGLE_POPUP",
            payload: { name: POPUP_NAME.SEARCH, value: true },
          });
        }}
      >
        {!open && <img src={search} alt="search" />}
      </div>
      {open && (
        <div
          className="close-search"
          onClick={() => {
            dispatch({
              type: "SEARCH",
              payload: { searchParam: "" },
            });
            setSearchValue("");
            dispatch({
              type: "TOGGLE_POPUP",
              payload: { name: POPUP_NAME.OPTIONS, value: false },
            });
          }}
        >
          <img src={x} alt="Close icon"></img>
        </div>
      )}
    </div>
  );
}