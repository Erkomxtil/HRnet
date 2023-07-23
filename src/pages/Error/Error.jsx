import React from "react"
import styled from "styled-components"

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: 100vh;

  span {
    font-size: 200px;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <span>Error</span> <br />
      <span>404</span> <br />
      Page not found
    </ErrorWrapper>
  )
}

export default Error
