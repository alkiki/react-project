import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Listings = ({ type, query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `/api/${type}`;
      try {
        const res = await fetch(apiUrl);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  // Filter data based on search query
  const filteredData = query
    ? data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(query.toLowerCase()),
      )
    : data;

  return (
    <div className="pt-10">
      <section className="px-4 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {type === "all"
              ? "All Listings"
              : `Browse ${type.charAt(0).toUpperCase() + type.slice(1)}`}
          </h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.length === 0 ? (
                <p>No results found.</p>
              ) : (
                filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                  >
                    {/* Title */}
                    <h3 className="text-lg font-bold text-black">
                      {item.name || item.position || "No Title"}
                    </h3>

                    {/* Subtitle (e.g., 3rd Year Student) */}
                    {item.experienceLevel && (
                      <p className="text-sm text-gray-500 mt-2">
                        {item.experienceLevel}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 mt-4 line-clamp-3">
                      {item.description ||
                        item.bio ||
                        item.collabType ||
                        item.skill ||
                        "No description available"}
                    </p>

                    {/* Location and Button */}
                    <div className="mt-6 flex items-center justify-between">
                      {/* Location */}
                      <p className="text-sm text-pink-700 flex items-center">
                      <FaMapMarker className="inline text-lg mb-1 mr-1" />
                        {item.location || "No location"}
                      </p>

                      {/* Read More Button */}
                      <Link
                        to={`/${type}/${item.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                      >
                        About
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

Listings.propTypes = {
  isHome: PropTypes.bool,
  type: PropTypes.string.isRequired,
  query: PropTypes.string,
};

export default Listings;
