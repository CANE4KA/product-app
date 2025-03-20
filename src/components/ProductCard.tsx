import { Heart, PenBoxIcon, Trash } from 'lucide-react'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router'

import { pageConfig } from '../config/page.config'

import { IProduct, useStore } from '../store/useStore'

interface Props {
	product: IProduct
}

export const ProductCard = ({ product }: Props) => {
	const { toggleLike, deleteProduct } = useStore()

	const handleCardClick = () => {
		navigate(`${pageConfig.product}/${product.id}`)
	}

	const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		toggleLike(product.id)
	}

	const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		deleteProduct(product.id)
	}

	const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		navigate(`${pageConfig.updateProduct}/${product.id}`)
	}

	const navigate = useNavigate()
	return (
		<div className='product-card' onClick={handleCardClick}>
			<div>
				<img src={product.image} alt={product.title} />
				<h3>{product.title}</h3>
				<p>{product.description}</p>
			</div>

			<div className='product-actions'>
				<button onClick={handleLike}>
					{product.liked ? <Heart fill='white' /> : <Heart />}
				</button>

				<button onClick={handleChange}>
					<PenBoxIcon />
				</button>

				<button onClick={handleDelete}>
					<Trash />
				</button>
			</div>
		</div>
	)
}
