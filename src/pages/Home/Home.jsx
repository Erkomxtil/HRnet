import React, { useState, lazy } from "react"
import { colors } from "../../utils/colors"
import styled from "styled-components"
import Header from "../../components/Header"
import CreateEmployeeForm from "../../components/CreateEmployeeForm"
const Modal = lazy(() => import("../../components/Modal"))

const HomeWrapper = styled.div`
  background: ${colors.darkGreen};
  display: flex;
  flex-direction: column;

  h2 {
    padding-top: 20px;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    flex-direction: column;
    align-items: center;
  }
`

function Home() {
  const [active, setActive] = useState("")
  return (
    <HomeWrapper>
      <Header
        title="HRnet"
        link="/employees"
        textLink="View current employees"
      />
      <h2>Create employee</h2>
      <CreateEmployeeForm setActive={setActive} />
      <Modal active={active} setActive={setActive} />
    </HomeWrapper>
  )
}

export default Home
