import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStyles from 'react-styles-provider'

import { exampleActions } from '../state/actions'

@createStyles({
  container: {
    padding: 20,
    backgroundColor: 'whitesmoke',
  },
  item: {
    color: 'black',
  },
  button: {
    color: 'skyblue',
    cursor: 'pointer',
  },
})
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
    const {styles} = this.props

    return (
      <div
        key={i}
        style={styles.item}
      >
        {item}
      </div>
    )
  }

  render() {
    const {items, styles} = this.props

    return (
      <div style={styles.container}>
        {items.map(this.renderItem)}
        <div
          style={styles.button}
          onClick={this.addItem}
        >
          Click to add item
        </div>
      </div>
    )
  }
}
