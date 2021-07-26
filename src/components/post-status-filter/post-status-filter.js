import { Button } from 'reactstrap'
import { Component } from 'react'

class PostStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'All notes'},
    {name: 'like', label: 'Favourite'},
    {name: 'important', label: 'Important'}
  ]

  render() {
    const buttons = this.buttons.map(({name, label, style}) => {
      const {filter, onFilterSelect} = this.props
      const active = filter === name
      const buttonColor = active ? 'info' : 'outline-secondary'

      return (
        <Button 
          key={name} 
          color={buttonColor}
          onClick={() => onFilterSelect(name)}>
            {label}
        </Button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    ) 
  }

}

export default PostStatusFilter