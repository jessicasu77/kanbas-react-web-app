import { coursesData as courses } from "../../Kanbas/Database";
import { useParams, Route, Routes, Navigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="course d-md-block d-none">
        <h1><HiMiniBars3 /> Course {course?.name}</h1>
        <br></br>
      </div>
      <div className="row">
        <div
          className="course col-auto d-lg-block d-none">
          <CourseNavigation />
        </div>
        <div className="col wd-bg-color-blue d-md-block d-lg-block">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;