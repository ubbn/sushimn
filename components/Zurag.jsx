import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  & {
    display: inline;
    float: left;
    position: relative;
    width: 100%;
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
  }
`
const Content = styled.div`
  position: absolute;
  left: 15%;
  top: 30%;
  right: 15%;
  text-align: center;
  z-index: 99;
`
// const Image = styled.div`
//   width: 100%;
// `
const Title = styled.div`
  font-family: 'Tangerine', cursive;
  font-size: 100px;
  font-weight: 400;
  line-height: 40px;
  color: #ffa500;
`
const Title1 = styled.div`
  color: #fff;
  font-size: 70px;
  line-height: 90px;
`
const Body = styled.div`
  color: #fff;
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
  padding: 0 30px;
`

export default function Zurag({ image, title, title1, body }) {
  return (
    <Container>
      {/* <div className="mu-top-slider-single"> */}
      <img src={image} alt="img" />
      {/* <!-- Top slider content --> */}
      <Content>
        <Title>{title}</Title>
        <Title1>{title1}</Title1>
        <Body>{body}</Body>
        <a
          href="#mu-reservation"
          className="mu-readmore-btn mu-reservation-btn">
          BOOK A TABLE
        </a>
      </Content>
      {/* </div> */}
    </Container>
  )
}
