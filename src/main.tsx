import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { ReactRouter } from './routes/ReactRouter'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Toaster
			position='bottom-right'
			reverseOrder={false}
			toastOptions={{
				style: {
					borderRadius: '5px',
					backgroundColor: '#333',
					color: '#fff'
				}
			}}
		/>
		<ReactRouter />
	</StrictMode>
)
