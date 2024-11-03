import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState: {
        open: false,
        emails: [],
        selectedEmail: null,
        user: null
    
    },
    reducers: {
        //actions
        setOpen: (state,action)=> {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSelectedEmail: (state,action) => {
            state.selectedEmail = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const {setOpen, setEmails,setSelectedEmail,setUser } = appSlice.actions;
export default appSlice.reducer;