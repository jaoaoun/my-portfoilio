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
          <To>To</To>
          <Myprofile>My Profile</Myprofile>
          <StyledButton>$ user/cd.. Sorayuth_C.</StyledButton>
        </Content>
    </BackgroundImg>
  )
}

export default index

const Welcome = styled.p`
  /* Welcome */
  position: absolute;
  width: 331px;
  height: 96px;
  left: calc(50% - 331px / 2 + 10.5px);
  top: 116px;

  font-family: Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif ;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 83px;

  color: #fffcfc;

  mix-blend-mode: normal;
`

const To = styled.p`
  /* to */

  position: absolute;
  width: 67px;
  height: 92px;
  left: calc(50% - 67px / 2 + 10.5px);
  top: 250px;

  font-family: Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;

  color: #ffffff;
`

const Myprofile = styled.p`
  /* Group 1 */

  position: absolute;
  width: 1440px;
  height: 200px;
  left: 0px;
  top: 360px;

  /* Rectangle 1 */

position: absolute;
width: 1440px;
height: 200px;
left: calc(50% - 1440px/2);
top: calc(50% - 200px/2 - 55px);

background: rgba(196, 196, 196, 0.15);


  /* My Profile */

  position: absolute;
  width: 479px;
  height: 116px;
  left: calc(50% - 479px / 2 - 0.5px);
  top: calc(50% - 116px / 2 - 51px);

  font-family: Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 116px;
  /* identical to box height */

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledButton = styled(Button)`
  /* Button Primary */

  left: calc(50% - 331px / 2 + 10.5px);
  top: 800px;
  /* Auto Layout */
  display: flex;
  flex-direction: column;
  padding: 23px 142px;

  position: absolute;

  /* Gray 1 */
  background: #333333;
  mix-blend-mode: normal;
  /* Gray 3 */
  border: 1px solid #828282;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transform: rotate(-0.18deg);

  /* Text */

  /* position: static; */
  /* height: 42px;
  left: 104.31px;
  right: 104.16px;
  top: calc(50% - 42px/2 + 1.59px); */

  font-family: Arial Rounded MT Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  transform: rotate(-0.18deg);

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  align-self: center;
  margin: 0px 10px;
`

const BackgroundImg = styled(Layout)`
  height: 750px;
  background-image: url(${bgimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`