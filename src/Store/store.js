import { configureStore, createSlice } from "@reduxjs/toolkit"
const initialState = {
  firstName: "",
  lastName: "",
  startDate: "",
  department: "",
  dateOfBirth: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
}

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    getFirstName: (state, action) => {
      state.firstName = action.payload
    },
    getLastName: (state, action) => {
      state.lastName = action.payload
    },
    getStartDate: (state, action) => {
      state.startDate = action.payload
    },
    getDepartment: (state, action) => {
      state.department = action.payload
    },
    getDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload
    },
    getStreet: (state, action) => {
      state.street = action.payload
    },
    getCity: (state, action) => {
      state.city = action.payload
    },
    getState: (state, action) => {
      state.state = action.payload
    },
    getZipCode: (state, action) => {
      state.zipCode = action.payload
    },
  },
})

//Actions
export const {
  getFirstName,
  getLastName,
  getStartDate,
  getDepartment,
  getDateOfBirth,
  getStreet,
  getCity,
  getState,
  getZipCode,
} = employeeSlice.actions

export const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
})

console.log(store.getState())
