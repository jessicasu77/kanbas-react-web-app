import { Link } from "react-router-dom";
import "./index.css";

export function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) {

  const AddCourse = () => {
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
