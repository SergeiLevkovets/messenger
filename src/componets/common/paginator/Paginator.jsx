import React, {useState} from 'react';
import css from './Paginator.module.css';

let Paginator = ({totalCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(totalCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
        }
        {pages.filter((p) => {return p >= leftPortionPageNumber && p <= rightPortionPageNumber}).map((p) => {
                return <button key={p} className={currentPage === p && css.selectedPage}
                               onClick={() => onPageChanged(p)}>{p}</button>
            })}
        {portionNumber < portionCount &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
        }
    </div>

}

export default Paginator;