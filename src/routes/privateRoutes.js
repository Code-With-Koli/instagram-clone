import { lazy } from 'react';

const Dashboard = lazy(() => import('../screens/Dashboard'));
const Profile = lazy(() => import('../screens/Profile'));

export default [
    {
        path: '/app/dashboard',
        key: 'APP_DASHBOARD',
        exact: true,
        component: Dashboard,
        name: 'Dashboard',
        icon: 'home',
        leftNav: true,
        accessor: 'dashboard',
    },
    {
        path: '/app/profile',
        key: 'APP_PROFILE',
        exact: true,
        component: Profile,
        name: 'Profile',
        icon: 'home',
        leftNav: true,
        accessor: 'Profile',
    },

];
