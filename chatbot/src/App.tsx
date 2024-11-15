import Background from "./components/Background";
import InputField from "./components/InputField";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col font-geist">
        <Navbar />
        <div className="w-full flex-1 ">
          <Background />
        </div>
        <InputField />
      </div>
    </>
  );
};

export default App;
