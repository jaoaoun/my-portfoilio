import React from 'react'
import { Layout, Form, Button, Input } from 'antd'
import styled from 'styled-components'
import img from '../../assets/contacts/PersonCaptions.jpg'
import fbIco from '../../assets/contacts/facebook.png'
import githubIco from '../../assets/contacts/github.png'
import linkedInIco from '../../assets/contacts/linkedin.png'
import emailIco from '../../assets/contacts/envelope.png'
import { DownloadOutlined } from '@ant-design/icons'

const { Content, Footer } = Layout
const validateMessages = {
  types: {
    email: 'your email is not validate email!'
  }
}

/* Background */
const Container = styled(Layout)`
  background-size: cover;
  background: #f2f2f2;
  height: 100vh;
`
const Contents = styled(Content)`
  margin: 5% auto 0 auto;
  text-align: center;
`
const Captions = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  color: #000000;
`
const Img = styled.img`
  width: 8%;
  padding: 1%;
  border-radius: 50%;
`
const PersonCaptions = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`
const TitleDownload = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-top: 70px;
  margin-bottom: 20px;
`
const Inputs = styled(Input)`
  width: 20%;
`
const Buttons = styled(Button)`
  bottom: 5px;
  width: 19.5%;
`
const Footers = styled(Footer)`
  text-align: center;
`
const Line = styled.hr`
  width: 80%;
  color: #000000;
`
const FullName = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #000000;
`
const ContactIcon = styled.img`
  width: 40px;
  margin: 10px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 50px;
`
const Credit = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  color: #000000;
`
const onFinish = (values: any) => {
  console.log(values) //ตัวเอาไปใช้ต่อ
}
const contact = () => {
  return (
    <Container>
      <Contents>
        <Captions>“You’ll never walk alone.” </Captions>
        <Img src={`${img}`} />
        <PersonCaptions>Football Club, Gerry and the Pacemakers</PersonCaptions>
        <TitleDownload>
          It’s interesting for you, aren’t you? <br />
          Download my resume now!
        </TitleDownload>
        <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
            <Inputs placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Buttons type="primary" ghost htmlType="submit">
              <DownloadOutlined /> Resume
            </Buttons>
          </Form.Item>
        </Form>
      </Contents>
      <Footers>
        <FullName>Sorayuth Charoensrisan</FullName>
        <br />
        <br />
        <Line />
        <ContactIcon src={`${fbIco}`} />
        <ContactIcon src={`${githubIco}`} />
        <ContactIcon src={`${linkedInIco}`} />
        <ContactIcon src={`${emailIco}`} />

        <Credit>
          ©2020 Created by Sorayuth C. <br />
          Built using Ant design & React.js Typescript
        </Credit>
      </Footers>
    </Container>
  )
}

export default contact
