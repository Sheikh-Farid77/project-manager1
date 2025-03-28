import { ToastContainer } from "react-toastify";
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
            <ToastContainer 
            position="bottom-right" // Position toasts at the bottom-right corner
            autoClose={2000}
            />
            <Header />
            <ProjectBoard />
          </ProjectProvider>
        </main>
      </div>
    </>
  );
}

export default App;
