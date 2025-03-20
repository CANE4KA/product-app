import { Navigate, RouteProps } from 'react-router'

import { pageConfig } from '../config/page.config'

import { CreateProduct } from '../screens/CreateProduct'
import { ProductDetails } from '../screens/ProductDetails'
import { Products } from '../screens/Products'
import { UpdateProduct } from '../screens/UpdateProduct'

export const ROUTES: RouteProps[] = [
	{ path: '/', element: <Navigate to={pageConfig.products} replace /> },
	{ path: pageConfig.products, element: <Products /> },
	{ path: `${pageConfig.product}/:id`, element: <ProductDetails /> },
	{ path: `${pageConfig.updateProduct}/:id`, element: <UpdateProduct /> },
	{ path: pageConfig.createProduct, element: <CreateProduct /> }
]
