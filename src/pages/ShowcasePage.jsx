import ShowcaseBar from "../components/ShowcaseBar";

const ShowcasePage = () => {
  return (
    <>
      <ShowcaseBar title="Celebrating Creativity & Connection" subtitle="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-20">
        {[
          {
            src: "src/assets/prj1.jpeg",
            alt: "Image 1",
            desc: "Lamp Building",
          },
          {
            src: "src/assets/prj2.jpeg",
            alt: "Image 2",
            desc: "Tech & Design",
          },
          {
            src: "src/assets/prj3.jpeg",
            alt: "Image 3",
            desc: "Jewellery Design",
          },
          { src: "src/assets/prj4.jpeg", alt: "Image 4", desc: "SWELL App" },
          { src: "src/assets/prj5.jpeg", alt: "Image 5", desc: "Mindfullness" },
          {
            src: "src/assets/prj6.jpeg",
            alt: "Image 6",
            desc: "Calendar Design",
          },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.src}
              alt={item.alt}
              className="h-40 w-full object-cover aspect-video rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <p className="text-white text-center px-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowcasePage;
