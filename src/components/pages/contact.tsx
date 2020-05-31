import React from 'react'
import { Layout, Form, Button, Input } from 'antd'
import styled from 'styled-components'
import img from '../../assets/skills/webdev.png'
import { DownloadOutlined } from '@ant-design/icons'

const { Content, Footer } = Layout
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 }
}
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
  margin: 7% auto;
  text-align: center;
`
const Img = styled.img`
  width: 10%;
  padding: 1%;
  border-radius: 8px;
`
const Footers = styled(Footer)`
  text-align: center;
`
const onFinish = (values: any) => {
  console.log(values) //ตัวเอาไปใช้ต่อ
}
const contact = () => {
  return (
    <Container>
      <Contents>
        “You’ll never walk alone.” <br />
        <Img src={`${img}`} />
        <br />
        Liverpool Football Club, Gerry and the Pacemakers <br />
        <br />
        It’s interesting for you, aren’t you? <br />
        Download my resume now!
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              <DownloadOutlined /> Submit
            </Button>
          </Form.Item>
        </Form>
      </Contents>
      <Footers>
        Sorayuth Charoensrisan
        <br />
        <br />
        <hr />
        <br />
        ©2020 Created by Sorayuth C. All Rights Reserved.
      </Footers>
    </Container>
  )
}

export default contact
