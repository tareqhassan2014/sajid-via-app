import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
import MainLayout from '../layout/MainLayout';
import BlankPage from '../pages/BlankPage';
import Brand from '../pages/Brand';
import HostelBook from '../pages/HostelBook';
import HostelOrder from '../pages/HostelOrder';
import Offers from '../pages/Offers';
import PetAdaptation from '../pages/PetAdaptation';
import PetCategory from '../pages/PetCategory';
import PetReviews from '../pages/PetReviews';
import Pets from '../pages/Pets';
import ProductCategory from '../pages/ProductCategory';
import ProductOrder from '../pages/ProductOrder';
import ProductReviews from '../pages/ProductReviews';
import Products from '../pages/Products';
import TreatmentOrder from '../pages/TreatmentOrder';
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
            path: 'product/order',
            element: <ProductOrder />,
        },
        {
            path: 'pet/care',
            element: <HostelOrder />,
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
            path: 'pet/adaptation',
            element: <PetAdaptation />,
        },
        {
            path: '/treatment/order',
            element: <TreatmentOrder />,
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
            path: 'books',
            element: <HostelBook />,
        },
    ],
};

export default MainRoutes;
