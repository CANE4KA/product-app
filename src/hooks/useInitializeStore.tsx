import { useEffect } from 'react'

import { getProducts } from '../services/products.service'

import { IProduct, useStore } from '../store/useStore'

export const useInitializeStore = () => {
	const { setProducts, products } = useStore()

	useEffect(() => {
		if (products.length > 0) return

		const initializeProducts = async () => {
			try {
				const products = await getProducts()
				const formattedProducts = products.map((product: IProduct) => ({
					id: product.id,
					title: product.title,
					description: product.description,
					image: product.image,
					liked: false
				}))
				setProducts(formattedProducts)
			} catch (error) {
				console.error('Failed to initialize products:', error)
			}
		}

		initializeProducts()
	}, [setProducts, products])
}
