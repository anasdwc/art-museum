import GalleryNavigation from "./components";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
    </>
  );
}

export default App;
