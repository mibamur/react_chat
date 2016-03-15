import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import AppGestureDecorator from 'app-gesture-decorator';

@AppGestureDecorator()
export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initGestureHandler();
  }

  componentWillUnmount() {
    this.removeGestureHandler();
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          require('../redux/utils/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
          {this.content}
      </Provider>
    )
  }
}
// {this.devTools}
