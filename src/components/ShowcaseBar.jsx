import PropTypes from "prop-types";

const Hero = ({ title = "", subtitle = "" }) => {
  return (
    <div className="pt-10">
      <section
        className="bg-indigo-700 py-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(205,76,116,1) 38%, rgba(162,80,193,1) 47%, rgba(101,100,190,1) 72%, rgba(67,56,202,1) 100%, rgba(75,114,171,1) 100%, rgba(92,115,233,1) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Define PropTypes for the Hero component
Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
