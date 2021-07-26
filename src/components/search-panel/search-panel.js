import { Component } from 'react' 

import "./search-panel.css"

class SearchPanel extends Component {
  state = {
    searchText: ''
  }

  onUpdateSearch = (event) => {
    const searchText = event.target.value
    this.setState({searchText})
    this.props.onUpdateSearch(searchText)
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search notes"
        onChange={this.onUpdateSearch}
      />
    )
  }
}

export default SearchPanel