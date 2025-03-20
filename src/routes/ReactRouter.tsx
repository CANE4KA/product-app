import { BrowserRouter, Route, Routes } from 'react-router'

import { ROUTES } from './routes.data'

export const ReactRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map(route => (
					<Route key={route.path} {...route} />
				))}
			</Routes>
		</BrowserRouter>
	)
}
