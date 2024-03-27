import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: "false", score: "5",
    });
    const [module, setModule] = useState({
    id: "m1", name:"Module1", description:"My first module", course: "NodeJS"
    })
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const MODULE_URL = `${API_BASE}/a5/module`
    const fetchAssignment = async () => {
      const response = await axios.get(`${ASSIGNMENT_URL}`);
      setAssignment(response.data);
    };
    const updateTitle = async () => {
      const response = await axios
        .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
      setAssignment(response.data);
    };
    useEffect(() => {
      fetchAssignment();
    }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
       <h4>Retrieving Objects</h4>
      <a href={`${API_BASE}/a5/assignment`}>
        Get Assignment
          </a><br/>
      <a href={`${API_BASE}/a5/module`}>
        Get Module
          </a>
      <h4>Retrieving Properties</h4>
      <a href={`${API_BASE}/a5/assignment/title`}>
        Get Assignment Title
          </a>
      
      <br />
      <a href={`${API_BASE}/a5/module/name`}>
        Get Module name
       </a>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <br />
      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Module name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
              value={module.name} />
      <br />
          
        <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}/>
          <br />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Assignment Completed
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.value })}
        value={assignment.completed}/>
          <br />
    </div >
  );
}
export default WorkingWithObjects;