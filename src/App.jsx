import Aside from "./components/Aside";
import Header from "./components/Header";
import ProjectBoard from "./components/projectBoard/ProjectBoard";
import ProjectProvider from "./context/ProjectProvider";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Aside />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <ProjectProvider>
            <Header />
            <ProjectBoard />
          </ProjectProvider>
        </main>
      </div>
    </>
  );
}

export default App;
