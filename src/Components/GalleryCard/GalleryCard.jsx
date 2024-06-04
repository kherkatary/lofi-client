import './GalleryCard.scss'

const GalleryCard = ({image,name}) => {
    return (
        
            <div className="galleryCard">
                <img src={image} className="card-img-top" alt="Image One"/>
                    <div className="card-body">
                        <p className="card-text">Scene {name}</p>
                    </div>
            </div>

    )
}

export default GalleryCard;