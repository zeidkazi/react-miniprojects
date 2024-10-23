import Card from "./components/Card";
import ParticleEffect from "./components/ParticleEffect";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <Card />
      <ParticleEffect />
    </div>
  );
};

export default App;
