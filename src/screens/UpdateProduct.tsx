import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router'

import { pageConfig } from '../config/page.config'

import { IProduct, useStore } from '../store/useStore'

export const UpdateProduct = () => {
	const { id } = useParams()

	if (!id) {
		return <div>Id not found</div>
	}

	const { updateProduct, products } = useStore()

	const product = products.find(project => project.id === parseInt(id))

	if (!product) {
		return <div>Product not found</div>
	}

	const { register, handleSubmit } = useForm<IProduct>({
		defaultValues: {
			title: product.title,
			description: product.description,
			image: product.image
		}
	})

	const onSubmit: SubmitHandler<IProduct> = data => {
		updateProduct(product.id, data)
	}

	return (
		<>
			<Link to={pageConfig.products}>Go to products</Link>

			<form onSubmit={handleSubmit(onSubmit)} className='product-form'>
				<textarea
					{...register('title', { required: true })}
					placeholder='Title'
				/>
				<textarea
					{...register('description', { required: true })}
					placeholder='Description'
				/>
				<input
					{...register('image', { required: true })}
					placeholder='Image URL'
				/>

				<button type='submit'>Update Product</button>
			</form>
		</>
	)
}
