import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

import { IProduct } from '../store/useStore'

interface Props {
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	products: IProduct[]
	itemsPerPage: number
}

export const Pagination = ({
	currentPage,
	itemsPerPage,
	products,
	setCurrentPage
}: Props) => {
	return (
		<div className='pagination'>
			<p
				onClick={() => setCurrentPage(prev => prev - 1)}
				className={currentPage === 1 ? 'disabled' : ''}
			>
				<ChevronLeft />
			</p>

			{Array.from(
				{ length: Math.ceil(products.length / itemsPerPage) },
				(_, i) => (
					<p
						key={i + 1}
						onClick={() => setCurrentPage(i + 1)}
						className={currentPage === i + 1 ? 'active' : ''}
					>
						{i + 1}
					</p>
				)
			)}

			<p
				onClick={() => setCurrentPage(prev => prev + 1)}
				className={
					currentPage === Math.ceil(products.length / itemsPerPage)
						? 'disabled'
						: ''
				}
			>
				<ChevronRight />
			</p>
		</div>
	)
}
