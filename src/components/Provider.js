import Inferno from 'inferno'
import Component from 'inferno-component'
import createElement from 'inferno-create-element'

export default class Provider extends Component {
  getChildContext () {
    return {
      store: this.store
    }
  }

  constructor (props) {
    super(props)
    this.store = props.store
  }

  render () {
    return createElement(this.props.children, {})
  }
}

const defaultMapDispatchToProps = () => {}

export function connect (
  mapStateToProps, mapDispatchToProps = defaultMapDispatchToProps
) {
  return (Comp) => {
    return class Connect extends Component {
      constructor (props) {
        super(props)
      }

      setStore () {
        this.store = this.context.store
        this.store.subscribe(this.handleChange.bind(this))
        const storeState = this.context.store.getState()
        this.setState({storeState})
      }

      handleChange () {
        const storeState = this.store.getState()
        const prevStoreState = this.state.storeState
        if (storeState === prevStoreState) {
          return
        }
        this.setState({storeState})
      }

      render () {
        const s2p = mapStateToProps(this.context.store.getState())
        const d2p = mapDispatchToProps(this.context.store.dispatch)
        const props = Object.assign({}, s2p, d2p)
        const c = createElement(Comp, props)
        return pug`
          span(onAttached='{this.setStore.bind(this)}') {c}
        `
      }
    }
  }
}
