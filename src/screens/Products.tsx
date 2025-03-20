import { Link } from 'react-router'

import { ProductList } from '../components/ProductList'

import { pageConfig } from '../config/page.config'

import { useInitializeStore } from '../hooks/useInitializeStore'

export const Products = () => {
	useInitializeStore()

	return (
		<div>
			<h1>Products</h1>
			<Link to={pageConfig.createProduct}>Add product</Link>
			<ProductList />
		</div>
	)
}
