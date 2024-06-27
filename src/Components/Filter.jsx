
const Filter = () => {
  return (
    <div className="filter-body d-flex justify-content-between m-5">
        <h3>My Todos</h3>
            <div className="filter d-flex mt-2">
            <h4>Status Filter: </h4>
            <select className="bg-danger text-white bg-opacity-50">
                <option>All</option>
                <option>Completed</option>
                <option>Not Completed</option>
            </select>
        </div>
    </div>
  )
}

export default Filter