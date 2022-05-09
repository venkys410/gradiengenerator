// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`
export const AppHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`
export const DirectionPara = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
`
export const DirectionsButtonsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const ColorsInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomColorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  margin-left: 25px;
`

export const ColorValue = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`
export const CustomColorInput = styled.input`
  height: 50px;
  width: 100px;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #00c9b7;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  margin-top: 34px;
  color: #1e293b;
  font-weight: 500;
`
