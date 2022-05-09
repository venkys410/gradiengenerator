import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  AppHeading,
  DirectionPara,
  DirectionsButtonsContainer,
  ColorsInputContainer,
  CustomColorDetails,
  ColorValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientProp: `to ${gradientDirectionsList[0].value} , #8ae323,#014f7b `,
  }

  onChangeActiveDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  onChangeFromColorInput = event => {
    this.setState({
      fromColorInput: event.target.value,
    })
  }

  onChangeToColorInput = event => {
    this.setState({
      toColorInput: event.target.value,
    })
  }

  generateGradient = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientProp: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  render() {
    const {
      gradientProp,
      activeGradientDirection,
      fromColorInput,
      toColorInput,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientProp}
      >
        <ResponsiveContainer>
          <AppHeading>Generate a CSS Color Gradient</AppHeading>
          <DirectionPara>Choose Direction</DirectionPara>
          <DirectionsButtonsContainer>
            {gradientDirectionsList.map(eachGradient => (
              <GradientDirectionItem
                key={eachGradient.directionId}
                gradientDetails={eachGradient}
                isActive={activeGradientDirection === eachGradient.value}
                onChangeActiveDirection={this.onChangeActiveDirection}
              />
            ))}
          </DirectionsButtonsContainer>
          <DirectionPara>Pick the colors</DirectionPara>
          <ColorsInputContainer>
            <CustomColorDetails>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColorInput}
              />
            </CustomColorDetails>
            <CustomColorDetails>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColorInput}
              />
            </CustomColorDetails>
          </ColorsInputContainer>
          <GenerateButton onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
