import { Route } from "react-router-dom";
import GalleryNavigation from "./components";
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records} />
      
      <div className="page-wrapper">
        <Route path='/gallery/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
      </div>
    </>
  );
}

export default App;
