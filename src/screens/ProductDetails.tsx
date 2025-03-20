import { Link, useParams } from 'react-router'

import { pageConfig } from '../config/page.config'

import { useStore } from '../store/useStore'

export const ProductDetails = () => {
	const { id } = useParams()

	if (!id) {
		return <div>Id not found</div>
	}

	const { products } = useStore()
	const product = products.find(project => project.id === parseInt(id))

	if (!product) {
		return <div>Product not found</div>
	}

	return (
		<div className='product-detail'>
			<Link to={pageConfig.products}>Go to products</Link>
			<h1>{product.title}</h1>

			<img src={product.image} alt={product.title} />

			<p>{product.description}</p>
		</div>
	)
}
