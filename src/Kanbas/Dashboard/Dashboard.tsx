import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../Database";
import "./index.css";

export function Dashboard() {
  const [courses, setCourses] = useState(coursesData);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const AddCourse = () => {
    const addNewCourse = () => {
      const newCourse = {
        ...course,
        _id: new Date().getTime().toString()
      };
      setCourses([...courses, { ...course, ...newCourse }]);
    };
    return (
      <div style={{ width: 300 }}>
        <h5>Course</h5>
        <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
        <button className="btn btn-primary card-button" onClick={addNewCourse}>
            Add
        </button>
        <button className="btn btn-primary card-button" onClick={updateCourse} >
          Update
        </button>

      </div>
    )
  }
  
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }} />
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary card-button">
                    Go </Link>
                   <button className="btn btn-primary card-button" onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                    }}>
                      Edit
                    </button>
                    <button className="btn btn-primary card-button" onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    {/* TODO ADD SPACING BETWEEN BUTTONS */}
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddCourse />
    </div>
  );
}
