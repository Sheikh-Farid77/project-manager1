import { useProjects } from "../../context/ProjectProvider";
import AddProject from "./AddProject";
import ProjectCategory from "./ProjectCategory";

export default function ProjectBoard() {
  const { projects, searchValue } = useProjects();

  // filter projects by searchValue
  const filteredProjects = projects?.filter((project) =>
    project.taskName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddProject />
      <div className="-mx-2 mb-6 flex flex-wrap">
        {/* ToDo Category */}
        <ProjectCategory
          type="ToDo"
          color={"bg-indigo-600"}
          text={"text-indigo-600"}
          category="todo"
          projects={filteredProjects}
        />
        {/* On Progress category */}
        <ProjectCategory
          type="On Progress"
          color={"bg-yellow-500"}
          text={"text-yellow-500"}
          category="inprogress"
          projects={filteredProjects}
        />
        {/* Done Category */}
        <ProjectCategory
          type="Done"
          color={"bg-teal-500"}
          text={"text-teal-500"}
          category="done"
          projects={filteredProjects}
        />
        {/* Revise Category */}
        <ProjectCategory
          type="Revise"
          color={"bg-rose-500"}
          text={"text-rose-500"}
          category="revised"
          projects={filteredProjects}
        />
      </div>
    </div>
  );
}
