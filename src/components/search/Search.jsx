//I ran out of time to implement this post-mvp component. Leaving here to work on later

import "./Search.css";

function Search(props) {
  return (
    <div className="search-box">
      <div className="search-selector">
        <label htmlFor="search">Search</label>
        <input type="text" id="Search" />
        <label htmlFor="search-title">Title</label>
        <input type="checkbox" id="search-title" />
        <label htmlFor="search-ingredient">Ingredient</label>
        <input type="checkbox" id="search-ingredient" />
      </div>
    </div>
  );
}

export default Search;
