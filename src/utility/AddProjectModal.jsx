import { useState } from "react";
import { toast } from "react-toastify";
import { useProjects } from "../context/ProjectProvider";
import { ADDED } from "../reducer/action";

export default function AddProjectModal({ onShowModal }) {
  const initialProject = {
    taskName: "",
    description: "",
    dueDate: "",
    category: "todo",
  };

  const [inputProject, setInputProject] = useState(initialProject);
  const {dispatch} = useProjects();
  // controlled input
  const handleInputProject = (e) => {
   
   setInputProject({
    ...inputProject,
    [e.target.name]: e.target.value,
   })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValues = Object.values(inputProject);
    const isNotEmptyInputs = inputValues.every((value) => Boolean(String(value).trim()));

    if(isNotEmptyInputs){
      dispatch({
        type: ADDED,
        payload: {
          ...inputProject
        }
      })

      toast.success(
        'task successfully added'
      )

    }else{
      toast.error(
         "Oops! It looks like you forgot to fill in some information."
      )
    }
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-gray-900 shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  for="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  onChange={handleInputProject}
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={inputProject.taskName}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  for="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  onChange={handleInputProject}
                  id="description"
                  name="description"
                  value={inputProject.description}
                  rows="3"
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  for="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  onChange={handleInputProject}
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={inputProject.dueDate}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  for="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  onChange={handleInputProject}
                  id="category"
                  name="category"
                  value={inputProject.category}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="todo">To-Do</option>
                  <option value="inprogress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => onShowModal(false)}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
