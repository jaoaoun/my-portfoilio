import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import bgedu from '../../assets/bgedu.jpg'
import styled from 'styled-components'

const { Content } = Layout

const education = () => {
  return (
    <BackgroundImg>
      <Content>
        <DivImg1>
          <Img1 src={require('../../assets/ungrad.png')} />
        </DivImg1>
        <TextEdu1>
          King Mongkut's Institute of Technology Ladkrabang <br />
          Bachelor's Degree in Information Engineering <br />
          2016 - PRESENT
        </TextEdu1>
        <DivTimeline>
          <ImgTim src={require('../../assets/timeline1.png')} />
        </DivTimeline>
        <DivImg>
          <Img2 src={require('../../assets/highschool.png')} />
        </DivImg>
        <TextEdu2>
          Assumption College Thonburi School <br />
          Middle schooler & High schooler <br />
          2009 - 2015
        </TextEdu2>
        <DivTimeline>
          <ImgTim src={require('../../assets/timeline3.png')} />
        </DivTimeline>
        <DivImg>
          <Img3 src={require('../../assets/kindergarten.png')} />
        </DivImg>
        <TextEdu3>
          Sarasas Thonburi School <br />
          Elementary schooler <br />
          2012 - 2014
        </TextEdu3>
      </Content>
    </BackgroundImg>
  )
}

export default education

const BackgroundImg = styled(Layout)`
  width: 100%;
  /* height: 100vh; */
  background-image: url(${bgedu});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment:fixed;
`
const DivImg1 = styled.div`
  margin-top: 60px;
`
const DivImg = styled.div`
  margin-top: 15px;
`

const DivTimeline = styled.div`
  margin-top: 15px;
`

const TextEdu1 = styled.p`
  /* King Mongkut's Institute of Technology Ladkrabang Bachelor's Degree in Information Engineering 2016 - PRESENT */
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140.62%;
  /* or 34px */
  text-align: center;
  color: #000000;
`
const Img1 = styled.img`
  /* ungrad 1 */
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 240px;
`
const Img2 = styled.img`
  /* highschool 1 */
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 199px;
`
const Img3 = styled.img`
  /* kindergarten 1 */
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 203px;
`
const ImgTim = styled.img`
  /* timeline-1,timeline-3 */
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 52px;
  height: 303px;
`

const TextEdu2 = styled.p`
  /* Assumption College Thonburi School Middle schooler & High schooler 2009 - 2015 */
  margin-top: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140.62%;
  /* or 34px */
  text-align: center;
  color: #000000;
`
const TextEdu3 = styled.p`
  /* Sarasas Thonburi School Elementary schooler 2014 - 2012 */
  margin-top: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 140.62%;
  /* or 34px */
  text-align: center;
  color: #000000;
`
