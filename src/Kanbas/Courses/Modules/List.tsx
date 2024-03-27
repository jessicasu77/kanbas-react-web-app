import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule, setModules
} from "./reducer";
import { KanbasState } from "../../store";
import { useEffect } from "react";
import * as client from "../client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const AddNewModule = () => {
    return (
      <div className="add-new-module">
        <h3>Add a New Module</h3>
        <input value={module.name} className="form-control"
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <br/>
        <textarea value={module.description} className="form-control"
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <br/>
        <button onClick={handleAddModule} className="btn btn-primary">Add</button>
        <button className="btn btn-primary" onClick={handleUpdateModule}>
                Update
        </button>

      </div>
    )
  }

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
            onClick={() => dispatch(setModule(module))}>
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
                onClick={() => handleDeleteModule(module._id)}>
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