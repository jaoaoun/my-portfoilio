import React from 'react'
import 'antd/dist/antd.css'
import { Layout, Button } from 'antd'
import bgimg from '../../assets/indeximg.jpg'
import styled from 'styled-components'

const { Content } = Layout

const index = () => {
  return (
    <BackgroundImg>
      <Content>
        <Welcome>Welcome</Welcome>
        <To>to</To>

        <Myprofile>My Profile </Myprofile>

        <StyledButton>$ user/cd.. Sorayuth_C.</StyledButton>
      </Content>
    </BackgroundImg>
  )
}

export default index

const Welcome = styled.p`
  /* Welcome */
  align-self: center;
  text-align: center;
  padding-top: 85px;
  margin-bottom: 0px;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 83px;
  -webkit-text-stroke: 0.5px #000000;
  color: #fffcfc;
  mix-blend-mode: normal;
`

const To = styled.p`
  /* to */

  text-align: center;
  margin-bottom: 0px;

  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  -webkit-text-stroke: 0.5px #000000;

  color: #ffffff;
`

const Myprofile = styled.p`
  /* My Profile */
  width: auto;
  background: rgba(196, 196, 196, 0.15);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  -webkit-text-stroke: 0.15px #000000;

  /* identical to box height */

  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledButton = styled(Button)`
  /* Button Primary */
  height: 55px;
  top: 25%;

  /* Auto Layout */
  margin: auto;
  align-items: center;

  /* Gray 1 */
  background: #333333;
  mix-blend-mode: normal;

  /* Gray 3 */
  border: 1px solid #828282;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  /* Text */
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  /* identical to box height */
  display: flex;
  color: #ffffff;
`

const BackgroundImg = styled(Layout)`
  height: 100vh;
  background-image: url(${bgimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
