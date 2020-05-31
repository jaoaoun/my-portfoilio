import React from 'react'
import { Layout, Card, Row, Col } from 'antd'
import styled, { keyframes } from 'styled-components'
import img from '../../assets/profile.jpg'

const { Content } = Layout

/* Background */
const Container = styled(Layout)`
  background-size: cover;
  background: #d8e4f2;
  height: 100vh;
`
const Contents = styled(Content)`
  margin: 7% auto;
`
/* Content */
const CardContent = styled(Card)`
  background: rgba(255, 255, 255, 0.5);
  padding: 5% 10% 0 10%;
  height: 100%;
`
const CardImg = styled(Card)`
  background: #2c2b2b;
  height: 100%;
  padding: 5%;
  text-align: center;
`
const Img = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 8px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Titles = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
`
const Subtitles = styled.div`
  margin-top: 10%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`
const scroll = keyframes`
  0% {
    margin: auto;
    opacity: 1;
  }
  100% {
    margin: auto;
    opacity: 0;
    transform: translateY(40px);
    -webkit-transform: translateY(40px);
    -moz-transform: translateY(40px);
    -ms-transform: translateY(40px);
  }
`
const MouseScrollAnimate = styled.div`
  & {
    margin: auto;
    width: 25px;
    height: 52px;
    margin-top: 25px;
    margin-bottom: 25px;
    box-shadow: inset 0 0 0 1px #292929;
    -webkit-box-shadow: inset 0 0 0 1px #292929;
    -moz-box-shadow: inset 0 0 0 1px #292929;
    -ms-box-shadow: inset 0 0 0 1px #292929;
    border-radius: 25px;
  }
  &:before {
    position: inherit;
    display: block;
    content: '';
    width: 8px;
    height: 8px;
    background: #292929;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${scroll};
  }
`

const aboutMe = () => {
  return (
    <Container>
      <Contents>
        <Row>
          <Col span={12}>
            <CardImg>
              <Img src={`${img}`} alt="img" className="Profile-img" />
            </CardImg>
          </Col>
          <Col span={12}>
            <CardContent>
              <Titles>
                Name: Sorayuth Charoensrisan <br />
                Age: 22 years old <br />
                Location: Bangkok, Thailand
              </Titles>
              <Subtitles>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I'm a university student who love coding.
                Recently, web apps or programs to be smart. I want to learn more about technical programming and find
                many bug or problem. I hope that I'm made to improve and wise up by your company. Apart from coding I
                also love to listen music and play futsal. Cool, isn't it?
              </Subtitles>
              <MouseScrollAnimate />
            </CardContent>
          </Col>
        </Row>
      </Contents>
    </Container>
  )
}

export default aboutMe