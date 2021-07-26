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

// const StyledAppBlock = styled(AppBlock)`
//   background-color: grey;
// `

class App extends Component {
  state = {
    data : [
      {label: 'Going to learn React', important: false, like: false, id: 'dsadsa'},
      {label: 'Waiting for something...', important: false, like: false, id: 'saijf'},
      {label: 'Great summer, really nice', important: false, like: false, id: 'saidnk'}
    ]
  }

  addNote = (text) => {
    const newNote = {
      label: text,
      important: false,
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
        data: this.changePropertyFlagItem(data, id, 5)
      }
    })
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

  render() {
    const {data} = this.state
    const likedNotesCounter = data.filter(item => item.like).length
    const allPostsNumber = data.length

    return (
    <AppBlock>
      <AppHeader
        likedNotesCounter={likedNotesCounter}
        allPostsNumber={allPostsNumber}
      />
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList 
        posts={this.state.data}
        onDelete={ this.deleteNote }
        onToggleImportant={ this.onToggleImportant }
        onToggleLiked={ this.onToggleLiked }
      />
      <PostAddForm
        onAdd={this.addNote}
      />
    </AppBlock>
    )
  }
}

export default App