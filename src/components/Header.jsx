import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/wealth-health-logo.jpg"
import styled from "styled-components"
import { colors } from "../utils/colors"

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
const ImgStyled = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20%;
`
const TitleStyled = styled.h1`
  display: inline-flex;
  padding-left: 20px;
  flex: 1;
`
const LinkStyled = styled(Link)`
  text-align: right;
  color: ${colors.black};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

function HeaderHome({ title, link, textLink }) {
  return (
    <TitleWrapper>
      <ImgStyled src={logo} alt="Logo Wealth Health" />
      <TitleStyled>{title}</TitleStyled>
      <LinkStyled to={link}>{textLink}</LinkStyled>
    </TitleWrapper>
  )
}

export default HeaderHome
