import { createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            //MAKE Sure action.payload is and object with name & string
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            //make sure action.paylod === car to remove
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload
            });
            state.cars = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer