import "./search.css";

const SearchInput = ({placeholder}) =>{
    return (
        <div className="search-wrapper">
            <input  id="search" placeholder={placeholder} type='text' />
        </div>
    )
}

export default SearchInput;