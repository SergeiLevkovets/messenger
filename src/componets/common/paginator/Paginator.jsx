import React from 'react';
import css from './Paginator.module.css';

let Paginator = ({totalCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    if (currentPage - 5 <= 0) {
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }
    } else if (currentPage + 5 >= pageCount) {
        for (let i = pageCount - 10; i <= pageCount; i++) {
            pages.push(i);
        }
    } else {
        for (let i = currentPage - 5; i <= currentPage + 5; i++) {
            pages.push(i);
        }
    }

    return <div>
        {pages.map(p => {
            return <button className={currentPage === p && css.selectedPage}
                           onClick={() => onPageChanged(p)}>{p}</button>
        })}
    </div>

}

export default Paginator;