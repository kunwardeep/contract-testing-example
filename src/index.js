import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore';
import { users as loadUsers } from './actions/githubActions';
import Root from './components/Root/Root'

const store = configureStore();
store.dispatch(loadUsers());

render(
    <Root store={store} />,
    document.getElementById('root')
)