import { lazy } from 'react';

const Login = lazy(() => import('../screens/Login'));

export default [
    {
        path: '/',
        key: 'LOGIN',
        exact: true,
        component: Login,
        accessor: 'login',
    },
];
