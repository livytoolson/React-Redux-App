import { 
    FETCH_REVIEWS_START, 
    FETCH_REVIEWS_SUCCESS, 
    FETCH_REVIEWS_FAILURE 
} from '../actions'

const initialState = {
    isLoading: false,
    foodReviewData: [],
    error: ''
};

export const foodReviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_REVIEWS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                foodReviewData: action.payload
            };
        case FETCH_REVIEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state
    };
};