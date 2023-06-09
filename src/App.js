import "./App.css";
import { DetailsPage } from "./pages/details/Details";
import { CategoryPage } from "./pages/categories/CategoryPage";
import createStore from "./store";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/homepage/Homepage";
import { PopupWrapper } from "./components/popupWrapper/popupWrapper";
import { isMobile } from "../src/selectors/selectCocktailData";
import {
  CATEGORY_PAGE_ROUTE,
  DETAILS_PAGE_ROUTE,
  FAVORITES_PAGE_ROUTE,
  HOMEPAGE,
  HOMEPAGE_ROUTE,
} from "./constants";
import { useEffect } from "react";
import { getFavorite } from "./actions/favourites";
import { FavoriteWrapper } from "./components/favoriteWrapper/favoriteWrapper";
import { FavoritesPage } from "./pages/favoritespage/FavoritesPage";

const { store } = createStore();

function App() {
  const mobile = isMobile();

  return (
    <Provider store={store}>
      <HashRouter>
        <FavoriteWrapper />
        <PopupWrapper />
        <Routes>
          <Route path={HOMEPAGE_ROUTE} element={<HomePage />} />
          {mobile && (
            <Route path={DETAILS_PAGE_ROUTE} element={<DetailsPage />} />
          )}
          <Route path={CATEGORY_PAGE_ROUTE} element={<CategoryPage />} />
          <Route path={FAVORITES_PAGE_ROUTE} element={<FavoritesPage />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
