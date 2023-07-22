import PropTypes from 'prop-types'

function CardsList({children}) {
  return (
    <div className="w-full grid grid-cols-1 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4 place-content-center">
      {children}
    </div>
  )
}

CardsList.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardsList