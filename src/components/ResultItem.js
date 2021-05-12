import PropTypes from 'prop-types'

const ResultItem = ({ name, age, phone_number, address, picture }) => (
    <div className="container">
        <img className="user-avatar" src={`/images/${picture === 'image0.png' ? 'image1.png' : picture}`} alt={name} />
        <div className="sub-container">
            <div className="label">{name}, {age}, {phone_number}</div>
            <p className="description">{address}</p>
        </div>
    </div>
)

ResultItem.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  phone_number: PropTypes.string,
  address: PropTypes.string,
  picture: PropTypes.string
}

export default ResultItem
