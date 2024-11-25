import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileData from "../profile.json";
import ProfileBar from "../components/ProfileBar";
import ProfileSection from "../components/ProfileSection";
import CollabCard from "../components/CollabCard";
import { FaGitSquare, FaReact, FaNodeJs, FaHtml5, FaMusic, FaGamepad, FaCamera, FaSuitcase } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  const iconMapping = {
    // Skills
    "Git": <FaGitSquare className="text-pink-700"/>,
    "React": <FaReact className="text-pink-700"/>,
    "Node.js": <FaNodeJs className="text-pink-700"/>,
    "HTML & CSS": <FaHtml5 className="text-pink-700"/>,
    "JavaScript": <IoLogoJavascript className="text-pink-700"/>,
    // Interests
    "Photography": <FaCamera className="text-pink-700"/>,
    "Traveling": <FaSuitcase className="text-pink-700"/>,
    "Gaming": <FaGamepad className="text-pink-700"/>,
    "Music": <FaMusic className="text-pink-700"/>
  };

  useEffect(() => {
    // Fetch profile data from the JSON file
    const fetchProfile = async () => {
      setProfile(profileData.profile);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>; // Show loading state if data isn't fetched yet
  }

  return (
    <div>
      <ProfileBar
        name={profile.name}
        course={profile.course}
        year={profile.experienceLevel}
        picture={profile.picture}
        gitLink={profile.links.github}
        instaLink={profile.links.instagram}
        linkedinLink={profile.links.linkedin}
      />

      <div className="container-xl lg:container m-auto p-5">
        <div className="about mt-8 bg-white shadow-md p-8 rounded-lg">
          <ProfileSection title="About Me" />
          <p className="text-lg">{profile.about}</p>
        </div>

        <div className="grid grid-cols-2">
          <div className="about mt-8 bg-white shadow-md p-8 rounded-lg mr-5">
            <ProfileSection title="Skills" />
            <ul className="text-lg">
              {profile.skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{iconMapping[skill]}</span> {/* Render icon from iconMapping */}
                  <span>{skill}</span> {/* Render skill name */}
                </li>
              ))}
            </ul>
          </div>

          <div className="about mt-8 bg-white shadow-md p-8 rounded-lg ml-5">
            <ProfileSection title="Interests" />
            <ul className="text-lg">
              {profile.interests.map((interest, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{iconMapping[interest]}</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about mt-8 bg-white shadow-md p-8 rounded-lg mb-8">
          <ProfileSection title="Portfolio" />
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 text-lg"
          >
            View my portfolio
          </a>
        </div>

        <div className="about mt-8 bg-white shadow-md p-8 rounded-lg mb-8">
          <ProfileSection title="Collabs" />
          <div className="grid grid-cols-3 gap-5">
            <CollabCard
              imageSrc={profile.collabs.collab1}
              title="Art & Anatomy"
            />

            <CollabCard
              imageSrc={profile.collabs.collab2}
              title="Mirrors"
            />

            <CollabCard
              imageSrc={profile.collabs.collab3}
              title="If my body could speak"
            />
          </div>
        </div> 
        <Link
          to={`/add-job`}
          className="bg-pink-700 w-full py-5 mb-10 text-white text-xl rounded-lg block text-center"
        >
          Add to CollabHub
        </Link>    
      </div>
    </div>
  );
};

export default ProfilePage;
