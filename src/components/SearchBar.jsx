export default function SearchBar({ searchTerm, onChange, }) {

    return (
        <>
            <input
                type="text"
                value={searchTerm}
                placeholder="Cerca un film..." onChange={onChange}
              

            />
        </>
    )
}