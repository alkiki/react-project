import PropTypes from "prop-types";

const SearchBar = ({ onCategoryChange, onSearch }) => {
  return (
    <div className="pt-10">
      <section
        className="bg-indigo-700 pt-10 pb-7"
        style={{
            background:"linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(205,76,116,1) 38%, rgba(162,80,193,1) 47%, rgba(101,100,190,1) 72%, rgba(67,56,202,1) 100%, rgba(75,114,171,1) 100%, rgba(92,115,233,1) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Find Your Match
            </h1>
            <p className="my-4 text-xl text-white">
              Choose a category and start browsing.
            </p>
          </div>
          {/* Dropdown and Search */}
          <div className="mt-2 flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            {/* Dropdown Menu */}
            <select
              className="bg-white text-gray-700 rounded-md py-2 border-solid border-2 border-white px-4"
              onChange={(e) => onCategoryChange(e.target.value)}
              defaultValue="all"
              aria-label="Category"
            >
              <option value="all">All</option>
              <option value="creatives">Creatives</option>
              <option value="jobs">Jobs</option>
              <option value="collabs">Collaborations</option>
              <option value="learnings">Learnings</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-700 rounded-md py-2 px-4 w-full md:w-64"
              onChange={(e) => onSearch(e.target.value)}
              aria-label="Search"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

SearchBar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
