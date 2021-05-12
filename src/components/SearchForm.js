
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts } from '../redux/actions'

const SearchForm = () => {
  const { searchText } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <Formik
        initialValues={{ searchText: searchText }}
        onSubmit={ values => {
          if (values.searchText) {
            dispatch(getContacts(values.searchText))
          }
        }}
    >{({ values, handleChange, handleSubmit, handleClear }) => (
        <Form onSubmit={handleSubmit} className='search-form' >
            <Form.Control
                type="text"
                name='searchText'
                className='search-field'
                placeholder="Type Your Search"
                onChange={handleChange}
                value={values.searchText}
            />
            <Button
                onClick={handleSubmit}
                block
                variant='warning'
                disabled={!values.searchText}
                className='search-button'>Search</Button>
        </Form>
    )}
    </Formik>
  )
}

export default SearchForm
