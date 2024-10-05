import {configureStore} from '@reduxjs/toolkit'
import {challengeReducer} from '../feature/challengeSlice'

 const store = configureStore({
    reducer: challengeReducer
})

export default store