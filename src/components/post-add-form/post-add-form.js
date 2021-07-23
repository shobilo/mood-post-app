const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input 
        type="text"
        placeholder="Input your note here"
        className="form-control new-post-label"
      />
      <button type="submit"
              className="btn btn-outline-secondary">
        Add note
      </button> 
    </form>
  )
}

export default PostAddForm