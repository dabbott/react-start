import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { exampleActions } from '../state/actions'

@connect(
  state => ({
    items: state.example.todos,
  }),
  {
    addItem: exampleActions.add,
  },
)
export default class Example extends PureComponent {
  addItem = () => {
    const {addItem} = this.props

    addItem(Math.random().toString())
  }

  renderItem = (item, i) => {
    return (
      <div key={i}>
        {item}
      </div>
    )
  }

  render() {
    const {items} = this.props

    return (
      <div>
        {items.map(this.renderItem)}
        <div onClick={this.addItem}>
          Click to add item
        </div>
      </div>
    )
  }
}
