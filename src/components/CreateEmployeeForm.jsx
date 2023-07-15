import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import { states } from "../assets/states"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../utils/colors"
import { useDispatch } from "react-redux"
import {
  getCity,
  getDateOfBirth,
  getDepartment,
  getFirstName,
  getLastName,
  getStartDate,
  getState,
  getStreet,
  getZipCode,
} from "../Store/store"
import { CheckAllInputs } from "../utils/checkInputs"

const InfoWrapper = styled.div`
  background: ${colors.lightGreen};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
`
const InputRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const AddressWrapper = styled.div`
  margin-top: 30px;
  background: ${colors.lightGreen};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;

  h2 {
    margin-bottom: 30px;
    padding: 0;
  }
`

const DepartementWrapper = styled.div`
  margin-top: 30px;
  background: ${colors.lightGreen};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  align-items: center;

  h2 {
    padding: 0;
    margin-bottom: 30px;
  }
`
const ButtonStyled = styled.button`
  background: ${colors.darkGreen};
  height: 30px;
  width: 200px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  color: ${colors.black};
  font-weight: bold;
  cursor: pointer;
`
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

function CreateEmployeeForm({ setActive }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Element for the input's form
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birth, setBirth] = useState("")
  const [startDate, setStartDate] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const state = states.map((nameState) => nameState.name)
  const [countryState, setCountryState] = useState(state[0])
  const [zipCode, setZipCode] = useState("")
  const departmentOptions = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ]
  const [department, setDepartment] = useState(departmentOptions[0])

  // Conversion of the date for the view
  const timeStampBirth = new Date(birth).toLocaleDateString("fr-FR")
  const timeStampStartDate = new Date(startDate).toLocaleDateString("fr-FR")

  // To display the code in the view of the employees
  const codeState = () => {
    const code = states.find((state) => state.name === countryState)
    return code.abbreviation
  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    const checkInput = (inputValue) => {
      if (inputValue === "") {
        return false
      }
      return true
    }

    // We check every input so we make sure that they are not empty
    const firstNameCheck = checkInput(firstName)
    const lastNameCheck = checkInput(lastName)
    const dateOfBirthCheck = checkInput(birth)
    const startDateCheck = checkInput(timeStampStartDate)
    const streetCheck = checkInput(street)
    const cityCheck = checkInput(city)
    const zipCodeCheck = checkInput(zipCode)

    // To change the state's name to a code state
    const codeState = states.find((state) => state.name === countryState)
    const code = codeState.abbreviation

    if (
      firstNameCheck &&
      lastNameCheck &&
      dateOfBirthCheck &&
      startDateCheck &&
      streetCheck &&
      cityCheck &&
      zipCodeCheck
    ) {
      console.log("check ok")
      // Save the employee to the localStorage
      const employeesArray = JSON.parse(localStorage.getItem("employees")) || []
      const employee = {
        city,
        birth,
        department,
        firstName,
        lastName,
        startDate,
        code,
        street,
        zipCode,
      }
      employeesArray.push(employee)
      localStorage.setItem("employees", JSON.stringify(employeesArray))

      // To show the modal
      setActive("active")
    }

    // update the store before we send the user to the employee's page
    dispatch(getFirstName(firstName))
    dispatch(getLastName(lastName))
    dispatch(getDateOfBirth(timeStampBirth))
    dispatch(getStartDate(timeStampStartDate))
    dispatch(getStreet(street))
    dispatch(getCity(city))
    dispatch(getState(codeState.abbreviation))
    dispatch(getZipCode(zipCode))
    dispatch(getDepartment(department))

    CheckAllInputs(firstName, lastName, birth, startDate, street, city, zipCode)
  }

  return (
    <form
      id="employeeForm"
      onChange={CheckAllInputs(
        firstName,
        lastName,
        birth,
        startDate,
        street,
        city,
        zipCode
      )}
    >
      <InfoWrapper>
        <InputRow>
          <div>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <ErrorMessage id="firstNameError">
              First name must be filled out
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <ErrorMessage id="lastNameError">
              Last name must be filled out
            </ErrorMessage>
          </div>
        </InputRow>
        <InputRow>
          <DateWrapper>
            <label htmlFor="birth">Date of birth</label>
            <DatePicker
              selected={birth}
              onChange={(date) => setBirth(date)}
              showIcon
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              value={birth}
              id="birth"
            />
            <ErrorMessage id="dateOfBirthError">
              Date of birth must be filled out
            </ErrorMessage>
          </DateWrapper>
          <DateWrapper>
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showIcon
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              value={startDate}
              id="startDate"
            />
            <ErrorMessage id="startDateError">
              Start date must be filled out
            </ErrorMessage>
          </DateWrapper>
        </InputRow>
      </InfoWrapper>
      <AddressWrapper>
        <h2>Address</h2>
        <InputRow>
          <div>
            <label htmlFor="street">Street</label>
            <br />
            <input
              type="text"
              id="street"
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <ErrorMessage id="streetError">
              Street must be filled out
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="city">City </label>
            <br />
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <ErrorMessage id="cityError">
              Street must be filled out
            </ErrorMessage>
          </div>
        </InputRow>
        <InputRow>
          <div>
            <label htmlFor="city">State </label>
            <Dropdown
              options={state}
              value={countryState}
              onChange={(e) => setCountryState(e.value)}
            />
          </div>
          <div>
            <label htmlFor="zipCode">Zip code </label>
            <br />
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <ErrorMessage id="zipCodeError">
              Zip code must be filled out
            </ErrorMessage>
          </div>
        </InputRow>
      </AddressWrapper>
      <DepartementWrapper>
        <h2>Department</h2>
        <Dropdown
          options={departmentOptions}
          value={department}
          onChange={(e) => setDepartment(e.value)}
        />
        <ButtonStyled onClick={(e) => HandleSubmit(e)}>Save</ButtonStyled>
      </DepartementWrapper>
    </form>
  )
}

export default CreateEmployeeForm
