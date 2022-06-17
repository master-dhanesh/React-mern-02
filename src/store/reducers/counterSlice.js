import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(incrementByAmountAsync.pending, (state, action) =>
    //             console.log("PROCESS PENDING")
    //         )
    //         .addCase(incrementByAmountAsync.fulfilled, (state, action) => {
    //             console.log("PROCESS FULFILLED");
    //             console.log(action);
    //             state.value += action.payload;
    //         })
    //         .addCase(incrementByAmountAsync.rejected, (state, action) => {
    //             console.log("PROCESS REJECTED");
    //         });
    // },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

export const incrementByAmountAsync = (amount) => (dispatch, getState) => {
    console.log("--ASYNC GETSTATE--", getState());
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 2000);
};

// export const incrementByAmountAsync = createAsyncThunk(
//     "counter/incrementByAmountAsync",
//     (amt) => {
//         console.log(amt);
//         setTimeout(() => {
//             return incrementByAmount(amt);
//         }, 2000);
//     }
// );
