import AppHeader from "../app-header/app-header"
import SearchPanel from "../search-panel/search-panel"
import PostStatusFilter from "../post-status-filter/post-status-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"
import styled from 'styled-components'
import {Component} from 'react'

import "./app.css"

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
class App extends Component {
  state = {
    data : JSON.parse(localStorage.getItem("store")) || [],
    searchText: '',
    filter: 'all'
  }

  componentDidUpdate = () => {
    console.log('dsad')
    localStorage.setItem("store", JSON.stringify(this.state.data))
  }

  addNote = (text) => {
    const newNote = {
      label: text,
      important: false,
      like: false,
      id: Date.now()
    }

    this.setState(({data}) => {
      const newArray = [...data, newNote]

      return {
        data: newArray
      }
    })
  }

  deleteNote = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const arrayBefore = data.slice(0, index)
      const arrayAfter = data.slice(index + 1)

      const newArray = [...arrayBefore, ...arrayAfter]

      return {
        data: newArray
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      return {
        data: this.changePropertyFlagItem(data, id, 'important')
      }
    })
  }

  onToggleLiked = (id) => {
    this.setState(({data}) => {
      return {
        data: this.changePropertyFlagItem(data, id, 'like')
      }
    })
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  changePropertyFlagItem = (data, id, property) => {
    const index = data.findIndex(element => element.id === id)

    const oldItem = data[index]

    const newItem = {...oldItem}
    newItem[property] = !oldItem[property]

    const arrayBeforeNewItem = data.slice(0, index)
    const arrayAfterNewItem = data.slice(index + 1)

    const newArray = [...arrayBeforeNewItem, newItem, ...arrayAfterNewItem]

    return newArray
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like': return items.filter(item => item.like)
      case 'important': return items.filter(item => item.important)
      case 'all' : return items
      default : return new Error('Invalid filter')
    }
  }

  searchPost = (items, searchText) => {
    if (searchText.length === 0) return items

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    })
  }

  onUpdateSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    const {data, searchText, filter} = this.state
    const likedNotesCounter = data.filter(item => item.like).length
    const allPostsNumber = data.length
    const visiblePosts = this.filterPost(this.searchPost(data, searchText), filter)

    return (
    <AppBlock>
      <AppHeader
        likedNotesCounter={likedNotesCounter}
        allPostsNumber={allPostsNumber}
      />
      <div className="search-panel d-flex">
        <SearchPanel
          onUpdateSearch={this.onUpdateSearch}
        />
        <PostStatusFilter
          filter={filter}
          onFilterSelect={this.onFilterSelect}
        />
      </div>
      <div className="post-list">
        <PostList 
          posts={visiblePosts}
          onDelete={ this.deleteNote }
          onToggleImportant={ this.onToggleImportant }
          onToggleLiked={ this.onToggleLiked }
        />
      </div>

      <PostAddForm
        onAdd={this.addNote}
      />
    </AppBlock>
    )
  }
}

export default App