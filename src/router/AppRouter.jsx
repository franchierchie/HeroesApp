import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

import { PrivateRouter } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <>
            <Routes>


                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRoutes />
                    </PrivateRouter>
                } />

                {/* <Route path="login" element={<LoginPage/>}/> */}
                {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

            </Routes>
        </>
    )
}
