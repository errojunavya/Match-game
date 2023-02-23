import './index.css'

const TabItem = props => {
  const {tabDetails, onTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const buttonColor = isActive ? 'active button ' : 'button'

  const onClickTab = () => {
    onTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={buttonColor} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
