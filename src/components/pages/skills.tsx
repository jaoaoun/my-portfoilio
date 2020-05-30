import React from 'react'
import { Layout, Card, Col, Row } from 'antd'
import styled from 'styled-components'
import img from '../../assets/skills/webdev.png'

const { Content } = Layout
const { Meta } = Card;

const skills = () => {
  return (
    <Container>
      <Contents>
        <CardContents title={<CardTitle>My Coding Skills</CardTitle>} bordered={false}>
          “If you don’t try this, you won’t become the superhero you were meant to be”
          <Row>
            <Cols span={6}>
              <ItemContents hoverable cover={<div><Img alt="logo" src={`${img}`} /></div>}>
              <MetaStyled title="HTML, CSS, JS" />
              </ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content2</ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content3</ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content4</ItemContents>
            </Cols>
          </Row>
          <Row>
            <Cols span={6}>
              <ItemContents>Content5</ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content6</ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content7</ItemContents>
            </Cols>
            <Cols span={6}>
              <ItemContents>Content8</ItemContents>
            </Cols>
          </Row>
        </CardContents>
      </Contents>
    </Container>
  )
}

export default skills

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
  background: #FFFFFF;
`

/* “If you don’t try this, you won’t become the superhero you were meant to be” */
// const CardSubTitles = styled(SubTitle)`

// `

// /* Card Blog 8 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 + 450px);
// top: 563px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* Git */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(Untitled-1.png);
// border-radius: 8px;

// /* Card Blog 7 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 + 150px);
// top: 563px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* SQL */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ee92a46.0488681015273524309551.png);
// border-radius: 8px;

// /* Card Blog 6 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 - 150px);
// top: 563px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* Figma */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(image.png);
// border-radius: 8px;

// /* Card Blog 5 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 - 450px);
// top: 563px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* C#, C++, VB */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 111px;
// height: 111px;
// left: calc(50% - 111px/2 - 55.5px);
// top: calc(50% - 111px/2 - 81px);

// background: url(image.png);
// border-radius: 8px;

// /* Rectangle 4 */

// position: absolute;
// width: 145px;
// height: 111px;
// left: calc(50% - 145px/2 - 0.5px);
// top: calc(50% - 111px/2 + 42px);

// background: url(image.png);
// border-radius: 8px;

// /* Rectangle 5 */

// position: absolute;
// width: 111px;
// height: 111px;
// left: calc(50% - 111px/2 + 71.5px);
// top: calc(50% - 111px/2 - 81px);

// background: url(image.png);
// border-radius: 8px;

// /* Card Blog 4 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 + 450px);
// top: 187px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* Python */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(image.png);
// border-radius: 8px;

// /* Card Blog 3 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 + 150px);
// top: 187px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* Vue.js */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(image.png);
// border-radius: 8px;

// /* Card Blog 2 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 - 150px);
// top: 187px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* React.js & React Native */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 64px;
// height: 64px;
// left: calc(50% - 64px/2);
// top: 103px;

// background: #E6E6E6;
// border-radius: 8px;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(react.png);
// border-radius: 8px;

// /* Card Blog 1 */

// position: absolute;
// width: 270px;
// height: 321px;
// left: calc(50% - 270px/2 - 450px);
// top: 187px;

// /* Content */

// position: absolute;
// width: 270px;
// height: 66px;
// left: 0px;
// top: 270px;

// /* Background */

// position: absolute;
// height: 66px;
// left: 0%;
// right: 0%;
// bottom: -15px;

// background: #FFFFFF;

// /* HTML, CSS, JS */

// position: absolute;
// left: 8.89%;
// right: 8.89%;
// top: 91.28%;
// bottom: 0%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 20px;
// line-height: 23px;

// color: #000000;

// /* Media */

// position: absolute;
// width: 270px;
// height: 270px;
// left: 0px;
// top: 0px;

// /* Rectangle */

// position: absolute;
// height: 270px;
// left: 0%;
// right: 0%;
// top: 0px;

// background: #E6E6E6;

// /* Rectangle 3 */

// position: absolute;
// width: 222px;
// height: 222px;
// left: calc(50% - 222px/2);
// top: calc(50% - 222px/2 - 25.5px);

// background: url(webdev.png);
// border-radius: 8px;

// /* See More › */

// position: absolute;
// left: 85.97%;
// right: 9.38%;
// top: 90.62%;
// bottom: 7.64%;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 19px;

// color: #000000;

// /* Timeline */

// position: absolute;
// width: 126px;
// height: 1024px;
// left: 42px;
// top: 0px;

// /* Line 1 */

// position: absolute;
// width: 1024px;
// height: 0px;
// left: 60px;
// top: 1024px;

// border: 5px solid #D2CCC1;
// transform: rotate(-90deg);

// /* Ellipse 5 */

// position: absolute;
// width: 31px;
// height: 27px;
// left: 42px;
// top: 723px;

// background: #FBF6EE;
// border: 1px solid #D2CCC1;
// box-sizing: border-box;

// /* Ellipse 4 */

// position: absolute;
// width: 31px;
// height: 27px;
// left: 42px;
// top: 553px;

// background: #FBF6EE;
// border: 1px solid #D2CCC1;
// box-sizing: border-box;

// /* Ellipse 3 */

// position: absolute;
// width: 31px;
// height: 27px;
// left: 42px;
// top: 383px;

// background: #FBF6EE;
// border: 1px solid #D2CCC1;
// box-sizing: border-box;

// /* Ellipse 2 */

// position: absolute;
// width: 31px;
// height: 27px;
// left: 42px;
// top: 213px;

// background: #FBF6EE;
// border: 1px solid #D2CCC1;
// box-sizing: border-box;

// /* About */

// position: absolute;
// width: 48px;
// height: 25px;
// left: 80px;
// top: 45px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 140.62%;
// /* or 25px */
// text-align: center;

// color: #000000;

// /* Education */

// position: absolute;
// width: 80px;
// height: 25px;
// left: 80px;
// top: 214px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 140.62%;
// /* or 25px */
// text-align: center;

// color: #000000;

// /* Experience */

// position: absolute;
// width: 88px;
// height: 25px;
// left: 80px;
// top: 384px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 140.62%;
// /* or 25px */
// text-align: center;

// color: #000000;

// /* Skills */

// position: absolute;
// width: 43px;
// height: 25px;
// left: 80px;
// top: 554px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 140.62%;
// /* or 25px */
// text-align: center;

// color: #000000;

// /* Contact */

// position: absolute;
// width: 63px;
// height: 25px;
// left: 80px;
// top: 724px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 18px;
// line-height: 140.62%;
// /* or 25px */
// text-align: center;

// color: #000000;

// /* Ellipse 1 */

// position: absolute;
// width: 31px;
// height: 27px;
// left: 42px;
// top: 43px;

// background: #FBF6EE;
// border: 1px solid #D2CCC1;
// box-sizing: border-box;

// */
