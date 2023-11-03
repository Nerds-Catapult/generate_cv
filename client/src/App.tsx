import "./App.css";
import Nav from "./components/Nav/Nav";
import HerosectionView from "./components/Horesection/Hero";

export default function App() {
  return (
    <div className="h-screen w-screen">
      <div className="relative ">
        <Nav />
      </div>
      <div className="w-screen h-[80%] flex items-center justify-center">
        <HerosectionView />
      </div>
    </div>
  );
}
