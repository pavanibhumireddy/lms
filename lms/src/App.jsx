import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";

// Student Pages
import Home from "./pages/students/Home";
import CoursesList from "./pages/students/CoursesList";
import CourseDetails from "./pages/students/CourseDetails";
import MyEnrollments from "./pages/students/MyEnrollments";
import Player from "./pages/students/Player";
import Loading from "./components/students/Loading";

// Educator Layout & Pages
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";

// Shared Components
import Navbar from "./components/students/Navbar";

// Quill Styles
import "quill/dist/quill.snow.css";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default">
      {!isEducatorRoute && <Navbar />}{" "}
      {/* Optionally hide Navbar for Educator */}
      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        {/* Educator Routes with Layout */}
        <Route path="/educator" element={<Educator />}>
          <Route index element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
      {/* Optionally hide Footer for Educator */}
    </div>
  );
};

export default App;
