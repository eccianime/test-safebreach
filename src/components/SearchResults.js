import { useSelector } from 'react-redux'
import ResultItem from './ResultItem'

const SearchResults = () => {
  const { results, isLoaded } = useSelector(state => state)
  return (
    isLoaded && (
      results.length
        ? results.map(({ _id, ...props }) => <ResultItem key={_id} {...props} />)
        : <div className="container no-results">
            <h4>No Results</h4>
        </div>
    )
  )
}
export default SearchResults
