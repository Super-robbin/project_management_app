import ProjectsSideBar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

const App = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
};

export default App;
