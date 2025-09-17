import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard"; // adjust path if needed
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="text-center my-10 px-4">
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding
        and design to
        <br /> business and wellness, our courses are crafted to deliver
        results.
      </p>

      <div className="grid grid-cols-auto sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className="mt-6">
        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500 px-10 py-3 rounded"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
