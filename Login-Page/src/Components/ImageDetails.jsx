import './ImageDetails.css'
import backgroundImage from '../assets/background-image.jpg'

function ImageDetails() {

  return (
    <>
      <div className='image-container'>
        <img src={backgroundImage} className="fit-screen-height" alt="img" />
      </div>
    </>
  )
}

export default ImageDetails
