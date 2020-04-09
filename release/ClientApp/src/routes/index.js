import Contacts from "../components/Contacts";
import Layout from "../components/Layout";
import About from "../components/About";
import Product from "../components/Product";
import ProductLayout from "../components/ProductLayout";
import Login from "../components/Login";
import ProductAdmin from "../components/AdminPanel/ProductAdmin";
import EditAbout from "../components/AdminPanel/Edit/EditAbout";
import EditContacts from "../components/AdminPanel/Edit/EditContacts";
import AddProduct from "../components/AdminPanel/Add/AddProduct";
import EditProduct from "../components/AdminPanel/Edit/EditProduct";
import CategoryAdmin from "../components/AdminPanel/ProductCategory";
import AddCategory from "../components/AdminPanel/Add/AddCategory";
import EditCategory from "../components/AdminPanel/Edit/EditCategory";
import CallBackPage from "../components/CallBackPage";

export const routes = [
    {
        component: Layout,
        path: '/'
    },
    {
        component: Contacts,
        path: '/Contacts'
    },
    {
        component: CallBackPage,
        path: '/M3NadyaM3'
    },
    {
        component: About,
        path: '/About'
    },
    {
        component: Product,
        path: '/Product/*'
    },
    {
        component: Login,
        path: '/252179fd-3e2f-40ab-b84b-0bebb1c5dc18'
    },
    {
        component: ProductLayout,
        path: '/Category/*'
    }
]

export const adminRoutes = [
    {
        component: Layout,
        path: '/'
    },
    {
        component: Contacts,
        path: '/Contacts'
    },
    {
        component: About,
        path: '/About'
    },
    {
        component: Product,
        path: '/Product/*'
    },
    {
        component: Login,
        path: '/252179fd-3e2f-40ab-b84b-0bebb1c5dc18'
    },
    {
        component: ProductLayout,
        path: '/Category/*'
    },
    {
        component: ProductAdmin,
        path: '/productAdmin'
    },
    {
        component: EditAbout,
        path: '/aboutAdmin'
    },
    {
        component: EditContacts,
        path: '/contactsAdmin'
    },
    {
        component: AddProduct,
        path: '/addProduct'
    },
    {
        component: EditProduct,
        path: '/editProduct'
    },
    {
        component: CategoryAdmin,
        path: '/categoryAdmin'
    },
    {
        component: AddCategory,
        path: '/addCategory'
    },
    {
        component: EditCategory,
        path: '/editCategory'
    }
]