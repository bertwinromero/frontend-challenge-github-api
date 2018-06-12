import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


const Pagination = ({ pageCount, onPageChange }) => {
    let rows = [], i = 0, len = pageCount;
    while (++i <= len) rows.push(i);
    return (
        <div className="text-center">
            <nav>
                <ul className="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {rows.map(function (i) {
                        return <li key={i} onClick={onPageChange} value={i}><a href="#">{i}</a></li>;
                    })}

                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};


export default Pagination;