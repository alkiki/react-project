import SearchBar from "../components/SearchBar";
import Listings from "../components/Listings";
import PropTypes from "prop-types";

const HomePage = ({ onCategoryChange, onSearch, type, query }) => {
  return (
    <div>
      <div>
        {/* ShowcaseBar component with dropdown and search */}
        <SearchBar onCategoryChange={onCategoryChange} onSearch={onSearch} />

        {/* Render all listings if type is "all" */}
        {type === "all" && (
          <>
            <Listings isHome={false} type="creatives" query={query} />
            <Listings isHome={false} type="jobs" query={query} />
            <Listings isHome={false} type="collabs" query={query} />
            <Listings isHome={false} type="learnings" query={query} />
          </>
        )}

        {/* Render only the selected category */}
        {type === "creatives" && (
          <Listings isHome={false} type="creatives" query={query} />
        )}
        {type === "jobs" && (
          <Listings isHome={false} type="jobs" query={query} />
        )}
        {type === "collabs" && (
          <Listings isHome={false} type="collabs" query={query} />
        )}
        {type === "learnings" && (
          <Listings isHome={false} type="learnings" query={query} />
        )}
      </div>
    </div>
  );
};

// PropTypes definition
HomePage.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  query: PropTypes.string
};

export default HomePage;