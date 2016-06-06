import Inferno from 'inferno'
import {connect} from './Provider.js'

function Emojis ({emojis, onClick}) {
  const normalizeName = (name) => {
    return name.replace(/\+/, '')
  }
  const generateEmojis = emojis.map((emoji, i) => {
    return pug`
      span(
        className="{'emo emo-margin emoji s_' + normalizeName(emoji.name)}"
        onClick='{onClick(emoji)}'
      )
    `
  })

  return pug`
    .emojis {generateEmojis}
  `
}

export default connect(
  (state) => {
    return {
      emojis: state.emojis
    }
  },
  (dispatch) => {
    return {
      onClick: (emoji) => {
        return (event) => {
          console.log(emoji, event)
        }
      }
    }
  }
)(Emojis)
