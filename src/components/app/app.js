import AppHeader from "../app-header/app-header"
import SearchPanel from "../search-panel/search-panel"
import PostStatusFilter from "../post-status-filter/post-status-filter"
import PostList from "../post-list/post-list"
import PostAddForm from "../post-add-form/post-add-form"
import styled from 'styled-components'

import "./app.css"

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
  background-color: grey;
`

const App = () => {

  const data = [
    {label: 'Going to learn React', important: true, id: 'dsadsa'},
    {label: 'Waiting for something...', important: false, id: 'saijf'},
    {label: 'Great summer', important: false, id: 'saidnk'}
  ];

  return (
    <AppBlock>
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </AppBlock>
  )
}

export default App