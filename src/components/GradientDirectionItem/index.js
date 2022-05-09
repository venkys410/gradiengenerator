// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, isActive, onChangeActiveDirection} = props
  const {value, displayText} = gradientDetails
  const changeActiveBtn = () => {
    onChangeActiveDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton activeBtn={isActive} onClick={changeActiveBtn}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
