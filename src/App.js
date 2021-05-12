import { Logo, SearchForm, SearchResults } from './components'
import { useSelector } from 'react-redux'

const App = () => {
  const { results } = useSelector(state => state)
  return (
    <div className={`app ${results.length && 'search-on-top'}`}>
        <div className='search-container'>
          <Logo />
          <SearchForm />
        </div>
        <SearchResults />
    </div>
  )
}

export default App
