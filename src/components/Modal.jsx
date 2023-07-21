import React from "react"
import styled from "styled-components"
import closeBtn from "../assets/close.png"
import { colors } from "../utils/colors"

const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
  text-align: center;

  p {
    background: ${colors.white};
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 2;
    max-width: 500px;
    box-sizing: border-box;
    width: 90%;
    background: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
    text-align: left;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    height: 30px;
    width: 30px;
  }

  &.active {
    display: block;
  }
`
/**
 * Change the class of the modal if click on the button that you choose to display it
 * @param {*} active, setActive to change the class of the modal
 * @returns the class "active" on the modalWrapper to make it work
 */
function Modal({ active, setActive }) {
  return (
    <ModalWrapper className={active}>
      <p>
        Employee created!{" "}
        <img src={closeBtn} alt="Close button" onClick={() => setActive("")} />
      </p>
    </ModalWrapper>
  )
}

export default Modal
