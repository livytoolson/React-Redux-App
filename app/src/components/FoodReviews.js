import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../store/actions';

const FoodReviews = (props) => {

    useEffect(() => {
        props.fetchReviews();
    }, []);

    return (
        <div>
            <h1>Food Reviews</h1>
            {props.isLoading ? <p>Loading food reviews ...</p> : null}
            {props.error ? <p style={{ color: "red " }}>{props.errpr}</p> : null}
            {props.reviews.map((review) => (
                <div>
                    <h4>Product: {review.product}</h4>
                    <p>Restaurant: {review.manufacturer}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        reviews: state.foodReviewData,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchReviews})(FoodReviews);