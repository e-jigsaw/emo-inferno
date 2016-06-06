import Inferno from 'inferno'
import Component from 'inferno-component'
import {connect} from './Provider.js'

class Finder extends Component {
  test () {
    console.log(this.refs)
  }

  render () {
    return pug`
      form.pure-form(onsubmit='{false}')
        input(
          id='in'
          type='text'
          ref='input'
          value='{this.props.searchWord}',
          onKeydown='{this.props.onChange}'
        )
    `
  }
}

export default connect(
  (state) => {
    return {
      searchWord: 'aaa'
    }
  },
  (dispatch) => {
    return {
      onChange: (event) => {
        console.log(event.target.value)
      }
    }
  }
)(Finder)
