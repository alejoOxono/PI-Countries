import { useSelector } from "react-redux"


const Pagination = ({ pageFunction, data, current }) => {

    const countries = useSelector((state) => state.countriesFiltered);

    const arrayPaginado = [];
    const ctrl = Math.ceil(countries.length / data);

    for (let n = 1; n <= ctrl; n++) {
        arrayPaginado.push(n)
    }

    const previous = (e, page) => {
        e.preventDefault();
        if (page === 1) {
            pageFunction(arrayPaginado?.length);
        }
        else pageFunction(page - 1);
    }

    const next = (e, page) => {
        e.preventDefault()
        if (page === arrayPaginado?.length) {
            pageFunction(1);
        }
        else {
            pageFunction(page + 1)
        }
    }


    return (
        <nav>
            <button onClick={(e) => previous(e, current)}> {'<'} </button>
            <ul>
                {arrayPaginado && arrayPaginado.map((page) => {
                    return <lo>
                        <a onClick={() => pageFunction(page)}>{page}</a>
                    </lo>
                })}
            </ul>
            <button onClick={(e) => next(e, current)}> {'>'} </button>
        </nav>
    )
}

export default Pagination