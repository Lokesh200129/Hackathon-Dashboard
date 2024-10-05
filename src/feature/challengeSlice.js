import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    challenges: [{
        id: 1,
        name: "abc",
        startDate: 12,
        endDate: 23,
        description: "abc abc abc abc",
        image: "image.com",
        level: "easy"
    }]
}
const challengeSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
        addChallenge : (state, action) => {
            const challenge = {
                id: nanoid(),
                name: action.payload.name,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                description: action.payload.description,
                image:action.payload.image,
                level: action.payload.level
            }
            state.challenges.push(challenge)
            console.log(state.challenges)
        },
        updateChallenge: (state, action)=>{
            const {id, name, startDate, endDate, description, image, level} = action.payload;
            const previousChallenge = state.challenges.find(challenge => challenge.id ===id)
            if(previousChallenge){
                previousChallenge.name = name,
                previousChallenge.startDate = startDate,
                previousChallenge.endDate = endDate,
                previousChallenge.description = description,
                previousChallenge.image = image,
                previousChallenge.level = level
            }
        },
        removeChallenge: (state , action) => {
            state.challenges = state.challenges.filter((challenge)=> challenge.id !== action.payload)
        },

    }
})

export const {addChallenge, updateChallenge,removeChallenge} = challengeSlice.actions;
export const challengeReducer =  challengeSlice.reducer;