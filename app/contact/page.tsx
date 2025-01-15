import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact OneMart - Get a Quote Today",
  description:
    "Reach out to OneMart for inquiries, support, or to get a personalized quote for your construction project. We're here to assist you with all your construction material needs.",
  openGraph: {
    title: "Contact OneMart - Get a Quote Today",
    description:
      "Reach out to OneMart for inquiries, support, or to get a personalized quote for your construction project. We're here to assist you with all your construction material needs.",
    url: "https://www.onemart.com/contact",
    images: [
      {
        url: "https://www.onemart.com/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "/logo.png",
      },
    ],
  },
  twitter: {
    title: "Contact OneMart - Get a Quote Today",
    description:
      "Reach out to OneMart for inquiries, support, or to get a personalized quote for your construction project. We're here to assist you with all your construction material needs.",
    images: "/logo.png",
  },
};

export default function Contact() {
  return (
    <div>
      {/* Flex Container for Contact Information and Form */}
      <div className="lg:flex lg:space-x-6 mx-auto lg:mx-20 lg:my-10 max-w-7xl border-2 border-cyan-900 rounded-lg p-6">
        {/* Left Section: Contact Information */}
        <div className="lg:w-1/2 p-4 space-y-6">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Google Maps */}
            <div className="p-6 flex flex-col items-center border border-gray-200 rounded-lg hover:bg-cyan-900 hover:text-white bg-white">
              <Image
                src="/contact/google-maps.png"
                alt="Google Maps"
                width={50}
                height={50}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">Our Address</h3>
                <p>
                  <a
                    href="https://www.google.com/maps?q=ADITHYA+NAGAR,+POST+OFFICE,+B-CAMP+AREA+KURNOOL,+KURNOOL+DISTRICT+518002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    ADITHYA NAGAR, POST OFFICE, B-CAMP AREA KURNOOL, KURNOOL
                    DISTRICT 518002
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Call */}
            <div className="p-6 flex flex-col items-center border border-gray-200 rounded-lg hover:bg-cyan-900 hover:text-white bg-white">
              <Image
                src="/contact/call.png"
                alt="Call Us"
                width={50}
                height={50}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p>
                  <a href="tel:+919063901504" className="hover:underline">
                    +91-9063901504
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 flex flex-col items-center border border-gray-200 rounded-lg hover:bg-cyan-900 hover:text-white bg-white">
              <Image
                src="/contact/gmail.png"
                alt="Email Us"
                width={50}
                height={50}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p>
                  <a
                    href="mailto:onemart@gmail.com"
                    className="hover:underline"
                  >
                    onemart@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 p-6 border-2 border-cyan-900 bg-white rounded-lg">
          <h1 className="heading-below-the-line text-3xl text-center font-bold mb-6 text-cyan-900">
            Get a Quote
          </h1>
          <div className="space-y-4">
            <h2 className="font-bold">
              OneMart is your trusted partner in sourcing building and
              construction materials.
            </h2>
            <p>
              If you&apos;re ready to make a purchase or need a quote for your
              specific project, we&apos;re here to help.
            </p>
            <p>
              Fill out the form with your material requirements, and one of our
              team members will get back to you with a personalized quote as
              soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-md p-2 bg-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-black w-full text-[#e0c080] lg:text-xl"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
