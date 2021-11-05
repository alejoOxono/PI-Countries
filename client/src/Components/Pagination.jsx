import { useState } from "react";
import { useSelector } from "react-redux"
import style from "../css-module/Pagination.module.css"

const Pagination = ({ pageFunction, data, current }) => {

    const countries = useSelector((state) => state.countriesFiltered);

    const [pageDisplayed, setPageDisplayed] = useState(4);
    const [maxPageDisplayed, setMaxPageDisplayed] = useState(4);
    const [minPageDisplayed, setMinPageDisplayed] = useState(0);


    const arrayPaginado = [];
    const ctrl = Math.ceil(countries.length / data);

    for (let n = 1; n <= ctrl; n++) {
        arrayPaginado.push(n)
    }

    const movePages = (page) => {
        if (page === arrayPaginado?.length) {
            movePagesPrevius(0)
            setMaxPageDisplayed(4);
            setMinPageDisplayed(0);

        } else {
            if (page === 0) page = arrayPaginado?.length;
            let maxi = page + pageDisplayed - 1;
            let mini = maxi - pageDisplayed;
            setMaxPageDisplayed(maxi);
            setMinPageDisplayed(mini);
        }
    }

    const movePagesPrevius = (page) => {
        if (page === 1) movePages(0)
        else if (page <= 2 && page > 0) {
            setMaxPageDisplayed(4);
            setMinPageDisplayed(0);
        }
        else {
            if (page === 0) page = 1;
            let maxi = page + pageDisplayed - 3;
            let mini = maxi - pageDisplayed;
            setMaxPageDisplayed(maxi);
            setMinPageDisplayed(mini);
        }
    }


    const handleClik = (page) => {
        movePages(page);
        pageFunction(page);
    }

    const previous = (e, page) => {
        e.preventDefault();
        movePagesPrevius(page);
        if (page === 1) {
            pageFunction(arrayPaginado?.length);
        }
        else pageFunction(page - 1);
    }

    const next = (e, page) => {
        e.preventDefault()
        movePages(page);
        if (page === arrayPaginado?.length) {
            pageFunction(1);
        }
        else {
            pageFunction(page + 1)
        }
    }

    const renderPageNumber = arrayPaginado?.map((pages) => {

        if (pages < maxPageDisplayed + 1 && pages > minPageDisplayed - 1) {
            return <li key={pages} id={pages} className={current === pages ? style.active : null}>
                <a onClick={() => handleClik(pages)}>{pages}</a>
            </li>
        } else {
            return null;
        }
    });


    return (
        <nav className={style.all}>
            <button className={style.previous} onClick={(e) => previous(e, current)}> {'<'} </button>
            <ul className={style.listaPag}>
                {renderPageNumber}
            </ul>
            <button className={style.next} onClick={(e) => next(e, current)}> {'>'} </button>
        </nav>
    )
}

export default Pagination