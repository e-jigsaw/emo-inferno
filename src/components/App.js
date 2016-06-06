import Inferno from 'inferno'
import {connect} from './Provider.js'
import getEmojis from '../actions/getEmojis.js'
import Finder from './Finder.js'
import Emojis from './Emojis.js'

function App ({getEmojis}) {
  return pug`
    div(onAttached='{getEmojis}')
      Finder
      Emojis
  `
}

export default connect(
  (state) => {
    return {
    }
  }, (dispatch) => {
    return {
      getEmojis: () => {
        dispatch(getEmojis())
      }
    }
  }
)(App)
