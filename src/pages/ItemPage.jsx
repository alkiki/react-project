import { useParams, useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaMapMarker, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemPage = () => {
  const { type } = useParams(); // Use type parameter for dynamic routing
  const item = useLoaderData();

  const renderMainContent = () => {
    switch (type) {
      case "creatives":
        return (
          <>
            <h1 className="text-3xl font-bold mb-1">{item.name}</h1>
            <h3 className="text-lg"> {item.course}</h3>
            <h3 className="text-gray-500 mb-4"> {item.experienceLevel}</h3>
            <hr></hr>
            <p className="my-4 text-lg">{item.bio}</p>
            <div className="text-pink-700 mb-3">
              <FaMapMarker className="inline text-lg mb-1 mr-1" />
              {item.location}
            </div>
          </>
        );
      case "jobs":
        return (
          <>
            <h1 className="text-3xl font-bold mb-2">{item.position}</h1>
            <hr className="mb-4"></hr>

            <h3 className="text-indigo-800 text-lg font-bold mb-3">
              About the job
            </h3>
            <p className="mb-4">{item.description}</p>
            <p className="text-m font-bold mb-2">
              {item.paymentType} Opportunity / {item.workTime}{" "}
            </p>
            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <FaMapMarker className="text-pink-700 mr-1" />
              <p className="text-pink-700">{item.location}</p>
            </div>
          </>
        );
      case "collabs":
        return (
          <>
            <h1 className="text-3xl font-bold mb-1">{item.name}</h1>
            <h3 className="text-lg"> {item.course}</h3>
            <h3 className="text-gray-500 mb-4"> {item.experienceLevel}</h3>
            <hr className="mb-4"></hr>

            <h3 className="text-indigo-800 text-lg font-bold mb-3">
              About the collaboration
            </h3>
            <p className="mb-4">{item.collabType}</p>
            <h3 className="text-indigo-800 text-lg font-bold mb-3">
              Number of collaborators
            </h3>
            <p className="mb-4"> {item.numberOfCollaborators}</p>
            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <FaMapMarker className="text-pink-700 mr-1" />
              <p className="text-pink-700">{item.location}</p>
            </div>
          </>
        );
      case "learnings":
        return (
          <>
            <h1 className="text-3xl font-bold mb-1">{item.name}</h1>
            <h3 className="text-lg"> {item.course}</h3>
            <h3 className="text-gray-500 mb-4"> {item.experienceLevel}</h3>
            <hr className="mb-4"></hr>

            <h3 className="text-indigo-800 text-lg font-bold mb-3">
              About the learning
            </h3>
            <p className="mb-4">{item.skill}</p>
            <h3 className="text-indigo-800 text-lg font-bold mb-3">
              Current level
            </h3>
            <p className="mb-4"> {item.status}</p>
            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <FaMapMarker className="text-pink-700 mr-1" />
              <p className="text-pink-700">{item.location}</p>
            </div>
          </>
        );
      default:
        return <p className="text-gray-500">Details not available.</p>;
    }
  };

  const renderSidebarContent = () => {
    if (type === "jobs") {
      return (
        <>
          <h1 className="text-3xl font-bold mb-1">{item.name}</h1>
          <h3 className="text-lg"> {item.course}</h3>
          <h3 className="text-gray-500 mb-4"> {item.experienceLevel}</h3>
          <hr></hr>
          <h3 className="text-xl"> Email:</h3>
          <p className="my-2 bg-indigo-100 p-2 font-bold rounded">{item.email}</p>
          <h3 className="text-xl"> Links:</h3>
          <p className="my-2 bg-indigo-100 p-2 w-full rounded">
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="inline-block" /> Linkedin
            </a>
          </p>
        </>
      );
    }
    return (
      <>
        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
        <hr className="my-4" />
        <h3 className="text-xl"> Email:</h3>
        <p className="my-2 bg-indigo-100 p-2 font-bold rounded">{item.email}</p>
        <h3 className="text-xl"> Links:</h3>
        <p className="my-2 bg-indigo-100 p-2 w-full rounded">
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="inline-block" /> Linkedin
          </a>
        </p>
      </>
    );
  };

  return (
    <>
      <section>
        <div
          className="container m-auto px-6"
          style={{ paddingTop: "100px" }}
        >
          <Link
            to={`/`}
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Discover
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto pt-5 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                {renderMainContent()}
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {renderSidebarContent()}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const itemLoader = async ({ params }) => {
  const { type, id } = params;

  if (!type || !id) {
    throw new Error("Missing 'type' or 'id' parameters");
  }

  const res = await fetch(`/api/${type}/${id}`);

  if (!res.ok) {
    // Handle non-200 responses gracefully
    throw new Error(`Failed to fetch ${type} with id ${id}`);
  }

  const data = await res.json();
  return data;
};

export { ItemPage as default, itemLoader };
