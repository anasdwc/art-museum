import { Route, Switch } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <>
      <div className="welcome">
        <h1>Welcome to<br/>Harvard Art Museum</h1>
      </div>
      
      <GalleryNavigation galleries={harvardArt.records} />
      
      <div className="page-wrapper">
        <Switch>
          <Route exact path='/'>
            <div className="center">
              <h2>Harvard Art Museum</h2>
              <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
            </div>
          </Route>
          <Route path='/gallery/:galleryId'>
            <GalleryView galleries={harvardArt.records} />
          </Route>
          <Route>
            <h2 className="center">Page Not Found</h2>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
