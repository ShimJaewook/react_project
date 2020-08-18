import React, { Component } from "react"
import { Checkbox } from "semantic-ui-react"

class CheckedView extends Component {
  state = { checked: true, label: this.props.value }

  onFilterItem = (e) => {
    if (this.state.checked === true) {
      this.setState({ checked: !this.state.checked })
      this.props.filterItem(e)
    } else if (this.state.checked === false) {
      this.setState({ checked: !this.state.checked })
      this.props.addItem(e)
    }
  }

  render() {
    return (
      <div>
        <Checkbox
          label={this.state.label}
          checked={this.state.checked}
          onClick={() => this.onFilterItem(this.props.value)}
        />
      </div>
    )
  }
}

export default CheckedView
