// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: 0, lastname: 0}

  onFirstname = () => {
    this.setState(item => ({firstname: item.firstname + 1}))
  }

  onLastname = () => {
    this.setState(item => ({lastname: item.lastname + 1}))
  }

  render() {
    const {firstname, lastname} = this.state

    let firstnamecard
    if (firstname % 2 !== 0) {
      firstnamecard = (
        <div className="small-card-container">
          <p>Joe</p>
        </div>
      )
    }

    let lastnamecard
    if (lastname % 2 !== 0) {
      lastnamecard = (
        <div className="small-card-container">
          <p>Jonas</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              type="button"
              className="button-style"
              onClick={this.onFirstname}
            >
              Show/Hide Firstname
            </button>
            {firstnamecard}
          </div>
          <div>
            <button
              type="button"
              className="button-style"
              onClick={this.onLastname}
            >
              Show/Hide Lastname
            </button>
            {lastnamecard}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
