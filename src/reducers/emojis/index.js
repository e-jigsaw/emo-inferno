import {rr} from 'redux-frr'
import init from './init.js'
import recieved from './recieved.js'

export default rr(init, recieved)
