import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router'

import { pageConfig } from '../config/page.config'

import { useStore } from '../store/useStore'

interface IForm {
	title: string
	description: string
	image: string
}

export const CreateProduct = () => {
	const { register, handleSubmit } = useForm<IForm>()
	const { addProduct } = useStore()

	const onSubmit: SubmitHandler<IForm> = data => {
		addProduct({
			id: Date.now(),
			...data,
			liked: false
		})
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

				<button type='submit'>Add Product</button>
			</form>
		</>
	)
}
