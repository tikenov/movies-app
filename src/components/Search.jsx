import React, { PureComponent } from 'react'

class Search extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("Search initiated:", this.state.value);
    this.setState({ value: '' })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState(() => ({ value: event.target.value }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="search" />
      </form>
    )
  }
}

export default Search;