import PropTypes from "prop-types";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ProfileBar = ({
  name = "",
  course = "",
  year = "",
  gitLink = "",
  instaLink = "",
  linkedinLink = "",
  picture = "",
}) => {
  return (
    <div className="pt-10">
      <section
        className="bg-indigo-700 pt-12 pl-20 pb-4"
        style={{
            background:"linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(205,76,116,1) 38%, rgba(162,80,193,1) 47%, rgba(101,100,190,1) 72%, rgba(67,56,202,1) 100%, rgba(75,114,171,1) 100%, rgba(92,115,233,1) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <div className="flex">
            <div>
              <img
                className="w-40 h-40 rounded-full object-cover"
                src={picture}
                alt={`${name}'s profile`}
              />
            </div>
            <div className="ml-6 mt-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">{name}</h1>
              <p className="my-1 text-xl text-white sm:text-xl md:text-2xl">{course}</p>
              <p className="my-1 text-xl text-white sm:text-xl md:text-2xl italic">{year}</p>

              <div className="flex space-x-4 mt-2 text-white">
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl" />
                </a>
                <a href={instaLink} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Define PropTypes for the ShowcaseBar component
ProfileBar.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string,
  year: PropTypes.string,
  gitLink: PropTypes.string,
  instaLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  picture: PropTypes.string,
};

export default ProfileBar;
