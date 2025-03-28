import { generateId } from "../utility/generateId";
import { ADDED, DELETED, UPDATED } from "./action";

export const projectReducer = (state, action) => {
    switch (action.type) {
        case ADDED:
            return[
                ...state,
                {
                    ...action.payload,
                    id: generateId(state),
                }
            ]


        case UPDATED:
            return
        case DELETED:
            return

        default:
            return state;
    }
}