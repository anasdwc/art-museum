import { Link, useRouteMatch } from "react-router-dom"
import './ArtImageTile.css'

function ArtImageTile({art}) {
  const {url} = useRouteMatch()
  const firstArt = art.images[0]

  return(
    <div className="art-image-tile">
      <Link to={`${url}/art/${art.id}`}>
        {art.title}
        <img key={firstArt.idsid} className="thumbnail" src={firstArt.baseimageurl} alt={firstArt.alttext} />
      </Link>
    </div>
  )
}

export default ArtImageTile
