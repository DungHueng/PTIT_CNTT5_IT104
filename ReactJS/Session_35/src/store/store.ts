import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/ListNumber/numberSlice";
import themeReducer from "../features/ChangeTheme/themeSlice";
import listReducer from "../features/ListState/listSlice";
import languageReducer from "../features/Language/languageSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ListNumber: numberReducer,
        ChangeTheme: themeReducer,
        ListState: listReducer,
        Language: languageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>