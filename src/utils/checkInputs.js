const checkInput = (inputValue, inputId) => {
  if (inputValue) {
    const visible = document.querySelector(inputId)
    visible?.classList.remove("active")
  } else {
    const visible = document.querySelector(inputId)
    visible?.classList.add("active")
  }
}
/**
 *
 * @param {*} Check all the inputs and display a message if it's false
 */

export const CheckAllInputs = (
  firstName,
  lastName,
  birth,
  startDate,
  street,
  city,
  zipCode
) => {
  checkInput(firstName, "#firstNameError")
  checkInput(lastName, "#lastNameError")
  checkInput(birth, "#dateOfBirthError")
  checkInput(startDate, "#startDateError")
  checkInput(street, "#streetError")
  checkInput(city, "#cityError")
  checkInput(zipCode, "#zipCodeError")
}
