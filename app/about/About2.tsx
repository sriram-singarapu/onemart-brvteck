import Image from "next/image";

const accordionItems = [
  {
    title: "Extensive Product Range",
    image: "/About/1.png",
    content:
      "Discover a vast selection of top-quality building and construction materials, carefully curated to meet the diverse needs of your projects.",
  },
  {
    title: "Uncompromised Quality",
    image: "/About/2.png",
    content:
      "We source materials from trusted manufacturers, ensuring that every product in our inventory meets or exceeds industry standards for durability and performance.",
  },
  {
    title: "Fast and Reliable Delivery",
    image: "/About/3.png",
    content:
      "We understand the importance of timely project completion. Our efficient logistics ensure that your orders are processed promptly and delivered to your doorstep as scheduled.",
  },
  {
    title: "Expert Customer Support",
    image: "/About/4.jpg",
    content:
      "Have a question or need assistance? Our knowledgeable and responsive customer support team is ready to assist you at every step of your purchasing journey.",
  },
];

const About2 = () => {
  return (
    <div className="bg-white p-6 m-5">
      <h2 className=" text-3xl font-bold mb-4 text-center text-cyan-900">
        Get the Best Quality Materials for Your Construction
      </h2>
      <p className=" text-lg mb-4 text-center">
        Choosing the right building and construction materials is crucial for
        the success of your projects, so <br />
        <strong>
          Choose OneMart and get the right and best quality materials.
        </strong>
      </p>

      {/* Responsive Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className=" p-4 m-2 flex flex-col items-center hover:bg-black hover:text-white"
          >
            <div
              className="flex items-center justify-center mb-4 "
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

export default About2;
