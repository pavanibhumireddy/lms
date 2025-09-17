import React, { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

// Create context
export const AppContext = createContext();

// Create provider
export const AppContextProvider = (props) => {
  // ✅ Add fallback currency
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // ✅ Function to calculate average course rating
  const calculateRating = (course) => {
    if (
      !course ||
      !Array.isArray(course.courseRatings) ||
      course.courseRatings.length === 0
    ) {
      return 0;
    }

    const total = course.courseRatings.reduce((sum, r) => {
      const ratingValue = typeof r === "number" ? r : r.rating;
      return sum + (Number(ratingValue) || 0);
    }, 0);

    return (total / course.courseRatings.length).toFixed(1);
  };

  // ✅ Function to calculate total time for a chapter
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.forEach((lecture) => {
      time += lecture.lectureDuration;
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // ✅ Function to calculate total course duration
  const calculateCourseDuration = (course) => {
    let time = 0;

    course.courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        time += lecture.lectureDuration;
      });
    });

    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // ✅ Function to calculate total number of lectures
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;

    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });

    return totalLectures;
  };

  // ✅ Fetch all courses (dummy data for now)
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // ✅ Fetch enrolled courses (dummy data)
  const fetchUserEnrolledCourses = async () => {
    setEnrolledCourses(dummyCourses);
  };

  // ✅ Fetch data on component mount
  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  // ✅ Values to share via context
  const value = {
    currency,
    navigate,
    allCourses,
    isEducator,
    setIsEducator,
    enrolledCourses,
    fetchUserEnrolledCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContext;
