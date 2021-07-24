import "./post-list-item.css"

const PostListItem = ({label, important = false}) => {

  let classNames = 'app-list-item d-flex justify-content-between'

  if (important) {
    classNames += ' important'
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label">
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm" 
                type="button">
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm" 
                type="button">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  )
}

export default PostListItem