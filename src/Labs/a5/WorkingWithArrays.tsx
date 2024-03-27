import React, { useState, useEffect } from "react";
import axios from "axios"
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
      completed: false
    });
  type TodoType = {id: number, title: string, description: string, due: string, completed: boolean}
  const [todos, setTodos] = useState<TodoType[]>([]);
  const fetchTodos = async () => {
    const response = await axios.get<TodoType[]>(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo:TodoType) => {
    const response = await axios
      .get<TodoType[]>(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id:number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo:TodoType) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };


  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>To Do List</h4>
      <h5>This to do list is fetched with Axios and will update with buttons in Axios lab sections below.</h5>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <ul>Description: {todo.description}</ul>
            <ul>Completed: {String(todo.completed)}</ul>
            <button className="btn btn-danger ms-2" onClick={() => deleteTodo(todo)} >
              Delete
            </button>
            <button onClick={() => fetchTodoById(todo.id)} >
          Edit
        </button>    
            
          </li>
          
        ))}
      </ul>
      <h4>Post Todos with Axios</h4>
      <textarea value={todo.description} 
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo </button>
      <h4>Fetching Arrays with Axios</h4>
      <button onClick={createTodo} >
        Create Todo
      </button>
      <h4>Edit to do with Axios</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value)
        })} /><label>ID</label><br/>
      <input value={todo.title}
        onChange={(e) => setTodo({ ...todo,
          title: e.target.value
        })} /><label>Title</label><br/>
      <input value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value
        })} /><label>Description</label><br/>
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      <label><br/>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label><br/>
      <button onClick={updateTitle} >
        Update Title with Axios
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>
      <h4>Retrieving Arrays</h4>
      <a href={API}>
        Get Todos
          </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
      <a href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
      <h3>Creating new Items in an Array</h3>
    <a href={`${API}/create`}>
        Create Todo
    </a>
          <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
          </a><br />
    <h3>Updating an Item in an Array</h3>
    <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
      <br />
    <a href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
          </a>
    <h3>Updating Completed To Do property</h3>
          <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value)
        })} />
          <label>To Do ID to change</label><br/>
          <input type="checkbox" checked={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: Boolean(e.target.checked) })}/><label>Completed</label>
          <br />
          <a href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Update Completed to {String(todo.completed)}
          </a>
    <h3>Updating Completed Description property</h3>
          <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value)
        })} />
          <label>To Do ID to change</label><br />
        <input type="text" value={todo.description}
        onChange={(e) => setTodo({
            ...todo, description: e.target.value
        })} />
          <label>To Do Description</label><br />
          <br />
        <a href={`${API}/${todo.id}/description/${todo.description}`} >
        Update description to {todo.description}
          </a>
    </div>
  );
}
export default WorkingWithArrays;