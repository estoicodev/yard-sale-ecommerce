import PropTypes from 'prop-types'

function CardsList({children}) {
  return (
    <div className="w-full grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10 mb-10 place-content-center">
      {children}
    </div>
  )
}

CardsList.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardsList