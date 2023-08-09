import React, { Component } from "react";
import './Pagination.css';

class Pagination extends Component {
    render() {
        return (
            <div id="pagination">
                <div className="pagination mb-5 d-flex">
                    <span>Show 1-5 From 20</span>
                    <button type="button" className="btn bg-yellow mx-2">Next</button>
                </div>
            </div>
        );
    }
}

export default Pagination;

// import React from "react";
// import './Pagination.css';
// const Pagination = () => {
//     return (
//         <div id="pagination">
//             <div className="pagination mb-5 d-flex">
//                 <span>Show 1-5 From 20</span>
//                 <button type="button" className="btn bg-yellow mx-2">Next</button>
//             </div>
//         </div>

//     );
// };

// export default Pagination;