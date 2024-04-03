import Hero from "./Hero";

const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <div>{obj.original_title}</div>
    })

    return (
        <>
            <Hero text={title} />
            {resultsHtml}
        </>
    )
}

export default SearchView;