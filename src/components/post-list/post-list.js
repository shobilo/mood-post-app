import PostListItem from '../post-list-item/post-list-item'

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </ul>
  )
}

export default PostList