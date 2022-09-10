import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';

import BlankPage from '../pages/BlankPage';
import Brand from '../pages/Brand';
import Offers from '../pages/Offers';
import PetCategory from '../pages/PetCategory';
import PetReviews from '../pages/PetReviews';
import Pets from '../pages/Pets';
import ProductCategory from '../pages/ProductCategory';
import ProductReviews from '../pages/ProductReviews';
import Products from '../pages/Products';
import ViewReviews from '../pages/ViewReviews';
import PrivateRoute from '../utils/PrivateRoute';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));

const MainRoutes = {
    path: '/',
    element: (
        <PrivateRoute>
            <MainLayout />
        </PrivateRoute>
    ),
    children: [
        {
            path: '/',
            element: <DashboardDefault />,
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />,
                },
            ],
        },
        {
            path: 'blank-page',
            element: <BlankPage />,
        },

        {
            path: 'product-category',
            element: <ProductCategory />,
        },
        {
            path: 'brand',
            element: <Brand />,
        },
        {
            path: 'products',
            element: <Products />,
        },
        {
            path: 'pet-category',
            element: <PetCategory />,
        },
        {
            path: 'pets',
            element: <Pets />,
        },
        {
            path: 'pet-reviews',
            element: <PetReviews />,
        },
        {
            path: 'offers',
            element: <Offers />,
        },
        {
            path: 'product-review/:id',
            element: <ViewReviews />,
        },
        {
            path: 'product-reviews',
            element: <ProductReviews />,
        },
    ],
};

export default MainRoutes;
