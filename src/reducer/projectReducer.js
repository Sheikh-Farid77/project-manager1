import { generateId } from "../utility/generateId";
import { ADDED, DELETED, UPDATED } from "./action";

export const projectReducer = (state, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: generateId(state),
                    ...action.payload,

                }
            ]


        case UPDATED:
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        case DELETED:
            return state.filter((task) => task.id !== action.payload.id);

        default:
            return state;
    }
}