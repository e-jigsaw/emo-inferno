import Inferno from 'inferno'
import {render} from 'inferno-dom'
import Component from 'inferno-component'
import createElement from 'inferno-create-element'

class Sample extends Component {
  render () {
    return pug`
      div yeah
    `
  }
}

render(createElement(Sample), document.getElementById('app'))
