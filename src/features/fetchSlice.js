import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch_app",
  initialState: {
    isFetching: false,
    isFetchFetching: false,
    error: false,
    errMsg: "",
    appointments: [],
    inqueue: [],
    doctors: [],
    completed: [],
    prescriptions: [],
    totalPages: [],
    bookings: [],
  },
  reducers: {
    FetchStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
    },
    FetchSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetching = false;
      state.appointments = action?.payload;
      state.inqueue = action?.payload;
      state.doctors = action?.payload.data;
      console.log(state.doctors);
      state.prescriptions = action?.payload?.data;
      state.bookings = action?.payload?.data;
      state.totalPages = action?.payload?.totalPages;
    },
    FetchFailure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetching = false;
      state.error = true;
    },
    FetchAppointmentStart: (state, action) => {
      state.isFetchFetching = true;
      state.error = false;
    },
    FetchAppointmentSuccess: (state, action) => {
      state.errMsg = "";
      state.error = false;
      state.isFetchFetching = false;
      state.appointments = action?.payload;
    },
    FetchAppointmentFailure: (state, action) => {
      state.errMsg = action.payload;
      state.isFetchFetching = false;
      state.error = true;
    },
  },
});

export const {
  FetchFailure,
  FetchStart,
  FetchSuccess,
  FetchAppointmentStart,
  FetchAppointmentSuccess,
  FetchAppointmentFailure,
} = fetchSlice.actions;
export default fetchSlice.reducer;
