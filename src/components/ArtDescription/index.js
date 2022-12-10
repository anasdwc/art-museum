import { useParams, Link } from "react-router-dom"

function ArtDescription({gallery}) {
  const { galleryId, artId } = useParams()

  const artChoice = gallery.find(i => i.id === parseInt(artId))

  return (
    <div className="art-description">
      <h2>Art Description</h2>
      <Link to={`/gallery/${galleryId}`}>Back to Gallery {artChoice.title}</Link>
      <div className="arts">
        {
          artChoice.images.map(img => (
            <div key={img.idsid} className="art">
              {/* images of the artwork, the description, credit, and technique. */}
              <div className="art-img">
                <img src={img.baseimageurl} alt={img.alttext} />
              </div>
              <div className="art-desc">
                <h3 className="copyright">{img.copyright}</h3>
                <p className="description">{img.description}</p>
                <p className="technique">{img.technique}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ArtDescription
