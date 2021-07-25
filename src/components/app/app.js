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
      {label: 'Going to learn React', important: true, id: 'dsadsa'},
      {label: 'Waiting for something...', important: false, id: 'saijf'},
      {label: 'Great summer', important: false, id: 'saidnk'}
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
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index)
      const after = data.slice(index + 1)

      const newArray = [...before, ...after]

      return {
        data: newArray
      }
    })
  }

  render() {
    return (
    <AppBlock>
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList 
        posts={this.state.data}
        onDelete={ this.deleteNote }
      />
      <PostAddForm
        onAdd={this.addNote}
      />
    </AppBlock>
    )
  }
}

export default App