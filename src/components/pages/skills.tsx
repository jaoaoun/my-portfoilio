import React from 'react'
import { Layout, Card, Col, Row } from 'antd'
import styled from 'styled-components'
import imgweb from '../../assets/skills/webdev.png'
import imgreact from '../../assets/skills/react.png'
import imgvue from '../../assets/skills/vue.png'
import imgpython from '../../assets/skills/python.png'
import imgccvb from '../../assets/skills/ccvb.png'
import imgfigma from '../../assets/skills/figma.png'
import imgsql from '../../assets/skills/sql1.png'
import imggit from '../../assets/skills/git.png'

const { Content } = Layout
const { Meta } = Card

/* Background */
const Container = styled(Layout)`
  background-size: cover;
  background: #d5dde5;
  height: 100%;
`
const Contents = styled(Content)`
  margin: 5% 0;
  width: auto;
`
/* Content */
const CardTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */
  text-align: center;
`
const CardContents = styled(Card)`
  background: rgba(255, 255, 255, 0.5);
  height: 100%;
  background: #f2f2f2;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height */
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
`
const ItemContents = styled(Card)`
  width: 100%;
  text-align: 'center';
  padding: 0.25%;
`
const Cols = styled(Col)`
  padding: 10px;
`
const Img = styled.img`
  width: 100%;
  padding: 5%;
  border-radius: 8px;
  background: #e6e6e6;
`
const MetaStyled = styled(Meta)`
  background: #ffffff;
`
const skills = () => {
  return (
    <Container>
      <Contents>
        <CardContents title={<CardTitle>My Coding Skills</CardTitle>} bordered={false}>
          “If you don’t try this, you won’t become the superhero you were meant to be”
          <Row>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgweb}`} />
                  </div>
                }
              >
                <MetaStyled title="HTML, CSS, JS" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgreact}`} />
                  </div>
                }
              >
                <MetaStyled title="React.js & React Native" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgvue}`} />
                  </div>
                }
              >
                <MetaStyled title="Vue.js" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgpython}`} />
                  </div>
                }
              >
                <MetaStyled title="Python" />
              </ItemContents>
            </Cols>
          </Row>
          <Row>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgccvb}`} />
                  </div>
                }
              >
                <MetaStyled title="C#, C++, VB" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgfigma}`} />
                  </div>
                }
              >
                <MetaStyled title="Figma" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imgsql}`} />
                  </div>
                }
              >
                <MetaStyled title="SQL" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents
                hoverable
                cover={
                  <div>
                    <Img alt="logo" src={`${imggit}`} />
                  </div>
                }
              >
                <MetaStyled title="Git" />
              </ItemContents>
            </Cols>
          </Row>
        </CardContents>
      </Contents>
    </Container>
  )
}

export default skills