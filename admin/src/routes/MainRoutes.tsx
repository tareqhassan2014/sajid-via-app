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
import SignIn from '../pages/SignIn';
import ViewReviews from '../pages/ViewReviews';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../pages/dashboard')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
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
        {
            path: 'signin',
            element: <SignIn />,
        },
    ],
};

export default MainRoutes;
