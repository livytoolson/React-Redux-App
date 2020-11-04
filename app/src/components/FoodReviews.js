import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../store/actions';

import '../App.css';

const FoodReviews = (props) => {

    useEffect(() => {
        props.fetchReviews();
    }, []);

    return (
        <div>
            <div className="review-title">
                <h1>Fast Food Reviews</h1>
            </div>
            {props.isLoading ? <p className="loading">Loading food reviews ...</p> : null}
            {props.error ? <p className="error" style={{ color: "red " }}>{props.error}</p> : null}
            <div className="review-wrapper">
                {props.reviews.map((review) => (
                <div className="review-content">
                    <h4>{review.product}</h4>
                    <p>Restaurant: {review.manufacturer}</p>
                    <p>Rating: {review.rating}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        reviews: state.foodReviewData,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchReviews})(FoodReviews);