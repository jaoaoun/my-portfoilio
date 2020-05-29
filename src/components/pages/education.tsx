import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import bgedu from '../../assets/bgedu.jpg'
import imgedu1 from '../../assets/ungrad.png'

import styled from 'styled-components'

const { Content } = Layout

const education = () => {
  return (
    <BackgroundImg>
      <Content>
        <Edu1>
          <ImgEdu1 />

          <TextEdu1>
            King Mongkut's Institute of Technology Ladkrabang <br />
            Bachelor's Degree in Information Engineering <br />
            2016 - PRESENT
          </TextEdu1>
        </Edu1>
      </Content>
    </BackgroundImg>
  )
}

export default education

const BackgroundImg = styled(Layout)`
  height: 100vh;
  background-image: url(${bgedu});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Edu1 = styled.div`
  margin-top: 75px;
`

const TextEdu1 = styled.p`
  /* Educate-1 */
  margin: auto;
  top: 62px;

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

const ImgEdu1 = styled.div`
  /* ungrad 1 */
  margin: auto;
  width: 255px;
  height: 240px;
  top: 75px;
  background-image: url(${imgedu1});
  background-position: center;
  background-repeat: no-repeat;
`
