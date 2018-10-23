import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App/App'
import UserDetails from '../UserDetails/UserDetails'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/user/:userlogin" component={UserDetails} />
            </div>
        </Router>
    </Provider >
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root