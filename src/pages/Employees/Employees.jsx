import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import { useSelector } from "react-redux"

function Employees(props) {
  const {
    firstName,
    lastName,
    startDate,
    department,
    dateOfBirth,
    street,
    city,
    state,
    zipCode,
  } = useSelector((state) => state.employees)

  // console.log(employeesArray)
  return (
    <div>
      <Header title="Current employees" link="/" textLink="Home" />
    </div>
  )
}

export default Employees
