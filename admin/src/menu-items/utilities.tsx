// assets
import {
    AntDesignOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
} from '@ant-design/icons';

import BookmarksIcon from '@mui/icons-material/Bookmarks';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PetsIcon from '@mui/icons-material/Pets';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
};

const utilities = {
    id: 'utilities',
    title: 'Payments',
    type: 'group',
    children: [
        // {
        //     id: 'blankPage',
        //     title: 'Blank Page',
        //     type: 'item',
        //     url: '/blank-page',
        //     icon: CheckBoxOutlineBlankIcon,
        // },
        {
            id: 'brand',
            title: 'Brand',
            type: 'item',
            url: '/brand',
            icon: BookmarksIcon,
        },
        {
            id: 'productCategory',
            title: 'Product Category',
            type: 'item',
            url: '/product-category',
            icon: CategoryIcon,
        },

        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/products',
            icon: icons.AntDesignOutlined,
        },
        {
            id: 'products-order',
            title: 'Product Order',
            type: 'item',
            url: '/product/order',
            icon: ShoppingCartIcon,
        },
        {
            id: 'productReviews',
            title: 'Product Reviews',
            type: 'item',
            url: '/product-reviews',
            icon: RateReviewIcon,
        },
        {
            id: 'pets',
            title: 'Pets',
            type: 'item',
            url: '/pets',
            icon: PetsIcon,
        },
        {
            id: 'petCategory',
            title: 'Pet Category',
            type: 'item',
            url: '/pet-category',
            icon: icons.AntDesignOutlined,
        },

        {
            id: 'PetAdaptation',
            title: 'Pet Adaptation',
            type: 'item',
            url: '/pet/adaptation',
            icon: FavoriteBorderIcon,
        },
        {
            id: 'petReviews',
            title: 'Pet Reviews',
            type: 'item',
            url: '/pet-reviews',
            icon: RateReviewIcon,
        },
        {
            id: 'treatmentOrder',
            title: 'Treatment Order',
            type: 'item',
            url: '/treatment/order',
            icon: ShoppingCartIcon,
        },
        {
            id: 'pet-are',
            title: 'Pet Care',
            type: 'item',
            url: '/pet/care',
            icon: MapsHomeWorkIcon,
        },
        {
            id: 'offers',
            title: 'Offers',
            type: 'item',
            url: '/offers',
            icon: SellIcon,
        },
    ],
};

export default utilities;
