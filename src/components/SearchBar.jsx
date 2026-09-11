export default function SearchBar({ inputValue, onChange, }) {

    return (
        <div className="search-bar">
            <input
                type="text"
                value={inputValue}
                onChange={(e)=> onChange(e.target.value)}
                placeholder="Cerca un film..."
              

            />
        </div>
    )
}