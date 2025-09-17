import React from "react";
import { dummyTestimonial, assets } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className="pb-14 px-6 md:px-0 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        Testimonials
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Header: Profile + Role */}
            <div className="flex items-center gap-4 bg-gray-50 px-6 py-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-700">{testimonial.role}</p>
              </div>
            </div>

            {/* Body: Stars and Feedback */}
            <div className="px-6 py-5 flex flex-col flex-grow">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="h-5 w-5"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm mt-3 flex-grow">
                {testimonial.feedback}
              </p>

              {/* Read More link */}
              <p className="text-blue-600 font-medium mt-3 cursor-pointer hover:underline">
                Read More
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
