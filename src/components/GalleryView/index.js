import { useParams } from "react-router-dom"
import './GalleryView.css'

function GalleryView({galleries}) {
  let {galleryId} = useParams()

  const galleryChoice = galleries.find(gallery => (
    gallery.id === parseInt(galleryId))
  )

  return (
    <div className="gallery-view">
      <h2>{galleryChoice.name}</h2>
    </div>
  )
}

export default GalleryView
