import './index.css'

const ImagesItem = props => {
  const {imageItemDetails, imageTab} = props
  const {id, thumbnailUrl} = imageItemDetails

  const onClickImage = () => {
    imageTab(id)
  }

  return (
    <li className="images-list-container">
      <button className="button" type="button" onClick={onClickImage}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImagesItem
