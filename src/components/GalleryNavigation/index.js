import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {

  return (
    <nav className="gallery-navigation">
      <ul>
        {galleries.map(record => (
          <li key={record.galleryid}>
            <NavLink  
              to={`/gallery/${record.galleryid}`}
            >
              {record.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GalleryNavigation
