import { useParams, Route } from "react-router-dom"
import ArtImageTile from "../ArtImageTile"
import ArtDescription from '../ArtDescription'
import './GalleryView.css'

function GalleryView({galleries}) {
  let {galleryId} = useParams()

  const galleryChoice = galleries.find(gallery => (
    gallery.id === parseInt(galleryId))
  )

  return (
    <div key={parseInt(galleryId)} className="gallery-view">
      <h2>{galleryChoice.name}</h2>
      {
        galleryChoice.objects.map(art => (
          <ArtImageTile art={art} />
        ))
      }

      <Route path={'/gallery/:galleryId/art/:artId'}>
        <ArtDescription gallery={galleryChoice.objects} />
      </Route>
    </div>
  )
}

export default GalleryView
