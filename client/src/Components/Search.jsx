import { useDispatch } from "react-redux";
import { searchCountry } from "../actions/actionsCreator";

const Search = ({setOrden}) =>{
    const dispatch = useDispatch()

    const searchByCountry = (e) =>{
        e.preventDefault();
        dispatch(searchCountry(e.target.value))
        setOrden(`Encontrado ${e.target.value}`)
    }

    return(
        <div>
            <input type='text' placeholder='Search Country...' onChange={(e)=>searchByCountry(e)}/>
        </div>
    )
}

export default Search;