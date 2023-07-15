import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ErrorMessage = styled.p`
  display: none;
  font-weight: bold;
  font-size: 10px;
  color: #cc0000;
  margin-top: 6px;

  &.active {
    display: block;
  }
`

function Error({ visible, children }) {
  const [active, setActive] = useState("true")

  useEffect(() => {
    if (!visible) {
      setActive("active")
    }
  }, [visible])

  return <ErrorMessage className={active}>{children}</ErrorMessage>
}

export default Error
