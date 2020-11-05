import axios from 'axios';

export const FETCH_REVIEWS_START = 'FETCH_REVIEWS_START';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_FAILURE = 'FETCH_REVIEWS_FAILURE';

export const fetchReviews = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_REVIEWS_START });

        axios
            .get('https://thereportoftheweek-api.herokuapp.com/reports?between=2018-1-1%7C2019-1-1')
            .then((res) => {
                dispatch({  type: FETCH_REVIEWS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_REVIEWS_FAILURE, payload: err.message })
            })
    }
}