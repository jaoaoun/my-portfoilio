import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Content } = Layout

const experience = () => {
  return (
    <LayoutEx>
      <ContentEx>
        <TextTitle>EXPERIENCE</TextTitle>
        <DivSubTitle>
          <TextSubTitle>
            2020 <br />
            [ Workshop-Toyota tsusho denso electronic (Thailand) co. ltd ] <br />
            - Develop embedded software for ECU.
            <br />
            [Graduation Project ] <br />
            - IoT system for Car Parking to detect car in parking lot and <br />
            notify to mobile app that communicate with LoRa and deploy <br />
            data to the cloud. <br />
            <br />
            2019 <br />
            [ Industrial Training ] <br />
            RIS Company Limited. <br />
            Software Engineering [ Solution Development Team ] <br />
            - Full stack Web developed <br />
            - Electronic Data Capture (software) developed <br />
            [ Digital Challenge by Dimension Data (Thailand) Limited ] <br />
            - Security Vulnerabilities <br />
            <br />
            2018 <br />
            [ NBIoT by Truelab ] <br />
            - Workshop NBIoT playground. <br />
            [ SharedKan Android App Mini Project ] <br />
            - Mobile App about sharing promotions and searching for <br />
            another one to match promotions that same interests.
          </TextSubTitle>
        </DivSubTitle>
      </ContentEx>
    </LayoutEx>
  )
}

export default experience

const LayoutEx = styled(Layout)`
  width: 100%;

  background-color: #d8e4f2;
`

const ContentEx = styled(Content)`
  height: 896px;
  background-color: rgba(242, 242, 242, 0.5);
  margin-top: 95px;
  margin-bottom: 95px;
`

const TextTitle = styled.p`
  /* Title */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */
  padding: 45px;
  text-align: center;
  color: #000000;
  margin-bottom: 0px;
`
const TextSubTitle = styled.p`
  /* Subtitle */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 152.34%;
  /* or 34px */
  color: #000000;
  text-align: left;
`
const DivSubTitle = styled.div`
  margin: 0 auto;
  width: 611px;
`
