import Image from "next/image";
import { Metadata } from "next";
import About2 from "./About2";
import About1 from "./About1";
import ClientReviews from "./clienttReviews";
export const metadata: Metadata = {
  title: "About OneMart - Our Mission & Vision",
  description:
    "Learn more about OneMart, our mission to provide quality construction materials, our vision for the future, and hear from our satisfied clients through their testimonials.",
  openGraph: {
    title: "About OneMart - Our Mission & Vision",
    description:
      "Learn more about OneMart, our mission to provide quality construction materials, our vision for the future, and hear from our satisfied clients through their testimonials.",
    url: "https://www.onemart.com/about",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About OneMart",
      },
    ],
  },
  twitter: {
    title: "About OneMart - Our Mission & Vision",
    description:
      "Learn more about OneMart, our mission to provide quality construction materials, our vision for the future, and hear from our satisfied clients through their testimonials.",
    images: "/logo.png",
  },
};

const About = () => {
  return (
    <>
      <div className="lg:mx-16">
        <div className="card lg:card-side">
          <Image
            src="/About/About.jpg"
            alt="construction site"
            width={500}
            height={500}
            style={{ boxShadow: "10px 10px #e0c080" }}
          />

          <div className="card-body">
            <p className="heading-with-line-about text-gray-400 text-lg">
              Who We Are
            </p>
            <h1 className="card-title text-4xl text-cyan-900 font-extrabold">
              Your Premier Destination for Construction and Civil Work
              Materials!
            </h1>
            <p>
              At OneMart, we offer a wide selection of top-quality construction
              and civil work materials, catering to the needs of builders,
              contractors, and DIY enthusiasts alike.
            </p>
            <h1 className="heading-with-verticalLine-about bg-gray-100 text-xl font-bold">
              Powering Your Build with Speed and Support
            </h1>
            <p className=" inline-flex items-center">
              <Image
                src="/About/verify (1).png"
                alt="right symbol"
                className="mr-2"
                style={{ width: "28px" }}
                width={28}
                height={100}
              />
              Browse and order materials conveniently from anywhere
            </p>
            <p className=" inline-flex items-center">
              <Image
                src="/About/verify (1).png"
                alt="right symbol"
                className="mr-2"
                width={28}
                height={100}
                style={{ width: "28px" }}
              />
              Fast delivery and top-notch customer support for a smooth
              experience.
            </p>
          </div>
        </div>
      </div>
      <About1 />
      <About2 />
      <ClientReviews />
    </>
  );
};

export default About;
