import toast from 'react-hot-toast'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IProduct {
	id: number
	title: string
	description: string
	image: string
	liked: boolean
}

interface IStore {
	products: IProduct[]
	likedProducts: IProduct[]
	setProducts: (products: IProduct[]) => void
	addProduct: (product: IProduct) => void
	toggleLike: (id: number) => void
	updateProduct: (id: number, data: IProduct) => void
	deleteProduct: (id: number) => void
}

export const useStore = create<IStore>()(
	persist(
		set => ({
			products: [],
			likedProducts: [],
			setProducts: products => set({ products }),
			addProduct: product => {
				set(state => ({ products: [...state.products, product] }))
				toast.success('Product added successfully!')
			},
			toggleLike: id =>
				set(state => ({
					products: state.products.map(p =>
						p.id === id ? { ...p, liked: !p.liked } : p
					),
					likedProducts: state.products.filter(p => p.liked)
				})),
			updateProduct: (id, data) => {
				set(state => ({
					products: state.products.map(product =>
						product.id === id ? { ...product, ...data } : product
					)
				}))
				toast.success('Product updated successfully!')
			},
			deleteProduct: id => {
				set(state => ({ products: state.products.filter(p => p.id !== id) }))
				toast.success('Product deleted successfully!')
			}
		}),
		{
			name: 'product-store'
		}
	)
)
