import { createSlice } from "@reduxjs/toolkit"

interface User_t{
    isLoggedIn: boolean,
    isPrime: boolean,
    isNewsLettered: boolean
}

const initialState : User_t = {
    isLoggedIn : false, 
    isPrime: false, 
    isNewsLettered : false
} 

const UserSlice = createSlice({
    name : "user",
    initialState,
    reducers : {}
})

export default UserSlice.reducer