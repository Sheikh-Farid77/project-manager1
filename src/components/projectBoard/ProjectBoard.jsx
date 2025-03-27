import AddProject from "./AddProject";
import ProjectCategory from "./ProjectCategory";

export default function ProjectBoard() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <AddProject />
      <div className="-mx-2 mb-6 flex flex-wrap">
      {/* ToDo Category */}
      <ProjectCategory type = 'ToDo' color= {'indigo-600'} />
      {/* On Progress category */}
      <ProjectCategory type = 'On Progress' color= {'yellow-500'} />
      {/* Done Category */}
      <ProjectCategory type = 'Done' color= {'teal-500'} />
      {/* Revise Category */}
      <ProjectCategory type = 'Revise' color= {'rose-500'} />
      </div>
    </div>
  );
}
