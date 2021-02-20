import "./Search.css";
function Search(props) {
  return (
    <div className="search-box">
      <div className="search-selector">
        <label htmlFor="isveggie">Vegetarian</label>
        <input type="checkbox" name="" id="isveggie" />
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}

export default Search;
