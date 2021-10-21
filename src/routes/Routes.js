import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Applayout from '../screens/AppLayout';
// import NotFound from '../screens/NotFound';


const WithNavigation = ({ children }) => (
    <>
        <Applayout>
            {children}
        </Applayout>
    </>
);

const RouteWithSubRoutes = ({
    path,
    exact,
    routes,
    component: Component,
}) => (
    <Route
        path={path}
        exact={exact}
        render={(props) => <Component {...props} routes={routes} />}
    />
);

const Routes = ({
    routes,
    // accessibleRoutes
}) => (
    <Switch>
        <Route exact path="/app">
            <Redirect to="/app/dashboard" />
        </Route>
        {/*
        ***** this is for latter when we apply access levels
        {routes.map(({ accessor, key, ...route }) =>
            accessibleRoutes.includes(accessor) && (
                <RouteWithSubRoutes key={key} {...route} />
            )
        )}
        */}
        {routes.map(({ key, ...route }) => <RouteWithSubRoutes key={key} {...route} />)}
        <Route component={NotFound} />
    </Switch>
);

const Authenticated = ({
    requiredToChangePassword = false,
    authenticated,
    ...rest
}) => {
    // const accessTree = useContext(AccessTreeContext);
    if (requiredToChangePassword) {
        /*
        return (
            <WithNavigation>
                <Switch>
                    <Route path="/app/profile/change-password">
                        <Profile />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </WithNavigation>
        );
        */
        return null;
    } if (authenticated) {
        const accessibleRoutes = [];
        /*
        const accessibleRoutes = keys(accessTree).filter((key) => {
            const value = accessTree[key];
            return (
                value === true ||
                (typeof value === "object" && keys(value).length > 0)
            );
        });
        */
        return (
            <WithNavigation>
                <Routes
                    {...rest}
                    accessibleRoutes={accessibleRoutes}
                />
            </WithNavigation>
        );
    }
    return (
        <Redirect to="/login" />
    );
};

const mstp = ({
    authentication: { authenticated, requiredToChangePassword },
}) => ({ authenticated, requiredToChangePassword });

export const AuthenticatedRoutes = connect(mstp)(Authenticated);
export default Routes;
