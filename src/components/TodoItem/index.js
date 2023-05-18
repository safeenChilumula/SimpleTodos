import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachItemObj, onDeleteTodos} = this.props
    const {title, id} = eachItemObj

    const onDelete = () => {
      onDeleteTodos(id)
    }
    return (
      <li className="list-container">
        <p className="title">{title}</p>
        <button onClick={onDelete} className="button" type="button">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
