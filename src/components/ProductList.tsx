import { useState } from 'react'

import { useStore } from '../store/useStore'

import { Pagination } from './Pagination'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
	const { products } = useStore()
	const [filter, setFilter] = useState<'all' | 'liked'>('all')
	const [currentPage, setCurrentPage] = useState<number>(1)
	const itemsPerPage = 6

	const filteredProducts =
		filter === 'liked' ? products.filter(product => product.liked) : products

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const paginatedProducts = filteredProducts.slice(
		indexOfFirstItem,
		indexOfLastItem
	)

	const handleFilterChange = (newFilter: 'all' | 'liked') => {
		setFilter(newFilter)
		setCurrentPage(1)
	}

	return (
		<>
			<div className='filter-buttons'>
				<button onClick={() => handleFilterChange('all')}>All</button>
				<button onClick={() => handleFilterChange('liked')}>Liked</button>
			</div>

			<div className='product-list'>
				{paginatedProducts.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>

			{products.length > itemsPerPage && (
				<Pagination
					currentPage={currentPage}
					itemsPerPage={itemsPerPage}
					products={filteredProducts}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</>
	)
}
