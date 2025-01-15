import Image from "next/image";

const accordionItems = [
  {
    title: "Leading with Integrity",
    image: "/About/leadership.png",
    content:
      "Establish OneMart as a trusted leader in the construction materials industry.",
  },
  {
    title: "Quality First",
    image: "/About/construction-site.png",
    content: "Provide only the best materials for every project, big or small",
  },
  {
    title: "Determined to Succeed",
    image: "/About/mechanical-engineer.png",
    content:
      "Driven by hard work and dedication to Ensure Customer satisfaction",
  },
];

const About1 = () => {
  return (
    <div className="bg-white p-6 m-5 text-center">
      <p className="heading-below-the-line text-xl text-center text-gray-400 mb-4">
        OUR MISSION AND VISION
      </p>
      <h2 className=" text-3xl font-bold mb-4 text-center text-cyan-900">
        Building the Future with Trust and Excellence
      </h2>
      <p className=" text-lg mb-4 text-center">
        At OneMart, our vision is to redefine the construction materials
        industry through unwavering commitment and excellence.
      </p>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className=" p-2 m-2 flex flex-col items-center border border-gray-200 hover:animate-grow"
          >
            <div
              className="flex items-center justify-center mb-4  "
              style={{ width: "100px", height: "100px" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About1;
