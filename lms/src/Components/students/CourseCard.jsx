import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  // ✅ Safely calculate average rating
  const calculateRating = () => {
    const ratings = course?.courseRatings;

    // If ratings array is missing or empty
    if (!Array.isArray(ratings) || ratings.length === 0) return 0;

    // If ratings are objects like [{rating: 5}], update the reduce function accordingly
    const total = ratings.reduce((sum, rating) => {
      return sum + (typeof rating === "number" ? rating : rating?.rating || 0);
    }, 0);

    const avg = total / ratings.length;

    // If avg is not a number (shouldn’t happen, but safe guard)
    return isNaN(avg) ? 0 : Number(avg.toFixed(1));
  };

  const avgRating = calculateRating();
  const numRatings = course?.courseRatings?.length || 0;

  // ✅ Calculate price after discount
  const discountedPrice =
    course?.coursePrice && course?.discount
      ? course.coursePrice - (course.discount * course.coursePrice) / 100
      : course?.coursePrice || 0;

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg max-w-xs mx-auto"
    >
      <div className="flex justify-center p-3">
        <img
          className="max-w-full max-h-40 object-contain"
          src={course.courseThumbnail}
          alt={course.courseTitle}
        />
      </div>

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">GreatStack</p>

        {/* ✅ Rating Section */}
        <div className="flex items-center space-x-2 mt-1">
          <p>{avgRating}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(avgRating) ? assets.star : assets.star_blank
                }
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500">{numRatings}</p>
        </div>

        {/* ✅ Price */}
        <p className="text-base font-semibold text-gray-800 mt-2">
          {currency}
          {discountedPrice.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
