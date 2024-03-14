import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [module, setModule] = useState({
    _id: "placeholder",
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };

  const AddNewModule = () => {
    const addModule = (module: any) => {
      const newModule = { ...module,
        _id: new Date().getTime().toString() };
      const newModuleList = [newModule, ...moduleList];
      setModuleList(newModuleList);
    };
    const updateModule = () => {
      const newModuleList = moduleList.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      });
      setModuleList(newModuleList);
    };
    return (
      <div className="add-new-module">
        <h3>Add a New Module</h3>
        <input value={module.name} className="form-control"
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <br/>
        <textarea value={module.description} className="form-control"
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
        <br/>
        <button onClick={() => { addModule(module) }} className="btn btn-primary">Add</button>
        <button className="btn btn-primary" onClick={updateModule}>
                Update
        </button>

      </div>
    )
  }

  // const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
      <div className="modules-list">
      <div className="top-buttons">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
            <option>Publish All</option>
            <option>Publish All Modules and Items</option>
            <option>Publish Modules Only</option>
            <option>Unpublish All</option>
        </select>
        <button className="red-button">+ Module</button>
        <FaEllipsisV className="ms-2 pad-ellipse" />
        </div>  
        <AddNewModule />
        <ul className="list-group wd-modules">     
        {moduleList.filter((module) => module.course === courseId)
          .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
                </span>
                <div>{module.description}</div>
            </div>
              <ul className="list-group">
                {module.lessons?.map((lesson: any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <div>{lesson.description}</div>
                  </li>
                ))}
                
              </ul>
            <div className="bottom-module-btns">
            <button 
                onClick={() => deleteModule(module._id)}>
                Delete
              </button>
            <button
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>
            </div>
          </li>
        ))}
        </ul>
    </div>
    
  );
}
export default ModuleList;