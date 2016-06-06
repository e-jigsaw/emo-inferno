import {frr} from 'redux-frr'

export default frr('emojisRecieved', (state, action) => {
  return action.emojis
})
