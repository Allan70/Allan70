  import {createSlice } from "@reduxjs/toolkit"

  interface Theme {
    isDark : boolean;
  }

  const initialState : Theme = {
    isDark : false,
  }

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {}
})

export default themeSlice.reducer