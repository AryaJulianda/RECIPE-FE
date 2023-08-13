
import React from "react";
import './Pagination.css';

const Pagination = ({onNext,onPrev}) => {
    return (
        <div id="pagination">
            <div className="pagination mb-5 d-flex">
                <button type="button" className="btn bg-yellow mx-2" onClick={onPrev} >Prev</button>
                    <span>Show 1 From 20</span>
                <button type="button" className="btn bg-yellow mx-2" onClick={onNext}>Next</button>
            </div>
        </div>

    );
};

export default Pagination;