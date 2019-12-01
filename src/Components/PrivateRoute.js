import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute(props) {
	const {
		component: Component,
		...rest
	} = props

	return (
		<Route {...rest} render={(renderProps) => {
			const token = localStorage.getItem('token')
				return token
					? <Component />
					: <Redirect to="/home" />
			}
		} />
	)
};

export default PrivateRoute;