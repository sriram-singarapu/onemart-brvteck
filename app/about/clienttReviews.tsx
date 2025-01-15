import Image from "next/image";

const reviews = [
  {
    id: 1,
    text: "I ordered steel and cement, the quality was excellent, and the delivery was quick. Highly recommend!",
    author: "Mr. Patel",
    location: "Ahmedabad, Gujarat",
    imgSrc: "/Testimonials/testimonial1.jpg",
  },
  {
    id: 2,
    text: "Wide variety of construction materials and fast delivery. Very satisfied with the service.",
    author: "Mr. Singh",
    location: "Jaipur, Rajasthan",
    imgSrc: "/Testimonials/testimonial2.jpg",
  },
  {
    id: 3,
    text: "Ordered electrical supplies. The process was smooth, and the quality was impressive.",
    author: "Mrs. Kumar",
    location: "Bangalore, Karnataka",
    imgSrc: "/Testimonials/testimonial3.jpg",
  },
  {
    id: 4,
    text: "Found great flooring options with fast delivery. Excellent experience overall.",
    author: "Mr. Khan",
    location: "Kolkata, West Bengal",
    imgSrc: "/Testimonials/testimonial4.jpg",
  },
  {
    id: 5,
    text: "Amazing customer service. The team guided me well through the purchase.",
    author: "Mrs. Sharma",
    location: "Pune, Maharashtra",
    imgSrc: "/Testimonials/testimonial5.jpg",
  },
  {
    id: 6,
    text: "Good prices, fast delivery, and seamless website experience.",
    author: "Mr. Verma",
    location: "Delhi, India",
    imgSrc: "/Testimonials/testimonial6.jpg",
  },
];

const ClientReviews = () => {
  return (
    <div className="mx-16 flex flex-col">
      <div>
        <h1 className="heading-with-line-about text-gray-400 text-lg">
          Testimonials
        </h1>
        <h2 className="card-title text-4xl text-cyan-900 font-extrabold">
          What they say about our services
        </h2>
      </div>
      <div className="category-container flex overflow-x-auto space-x-4 p-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="cursor-pointer flex-none mt-8 text-center border border-black p-4 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:scale-105 w-72 h-64 relative" // Fixed height
          >
            {/* Image on the card line */}
            <div className="relative -top-14">
              <Image
                src={review.imgSrc}
                alt={review.author}
                width={100}
                height={100}
                className="w-20 h-20 mx-auto rounded-full border-4 border-white"
              />
            </div>
            {/* Add margin below image */}
            <p className="font-semibold text-xl">{review.author}</p>
            <p>{review.location}</p>
            {/* Review text */}
            <p className="mt-2 h-20 overflow-hidden">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
