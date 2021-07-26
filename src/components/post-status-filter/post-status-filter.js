import { Button } from 'reactstrap'

import "./post-status-filter.css"

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info">All notes</Button>
      <Button color="danger">Favourite</Button>
    </div>
  ) 
}

export default PostStatusFilter