import PropTypes from "prop-types";

const ProfileSection = ({title=""}) => {
  return (
    <>
        <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold mb-2 text-indigo-700">{title}</h3>
            <button className="text-gray-400 text-lg"><sup>edit</sup></button>
        </div>
        <hr className="mb-2"></hr>
    </>
  )
}

ProfileSection.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProfileSection