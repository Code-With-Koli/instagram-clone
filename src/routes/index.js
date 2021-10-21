import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes, { AuthenticatedRoutes } from './Routes';
import PRIVATE from './privateRoutes';
import PUBLIC from './publicRoutes';

const ROUTES = [
    ...PUBLIC,
    {
        path: '/app',
        key: 'APP',
        component: AuthenticatedRoutes,
        routes: PRIVATE,
        accessor: 'app',
    },
];

const accessibleRoutes = PUBLIC
    .map((route) => route.accessor)
    .concat('app');

const Router = () => (
    <BrowserRouter>
        <Routes
            routes={ROUTES}
            accessibleRoutes={accessibleRoutes}
        />
    </BrowserRouter>
);

export default Router;
