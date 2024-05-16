import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import themeReducer from "./slices/ThemeSlice"

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;