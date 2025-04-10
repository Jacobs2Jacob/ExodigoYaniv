import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import HomePage from '@/pages/HomePage/HomePage';
import Loader from '../components/Layout/Loader/Loader';
import ErrorBoundary from '../components/Layout/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../components/Layout/ErrorFallback/ErrorFallback';

const CocktailDetailPage = lazy(() => import('@/features/cocktails/pages/CocktailDetailPage/CocktailDetailPage'));
const NewCocktailPage = lazy(() => import('@/features/cocktails/pages/NewCocktailPage/NewCocktailPage'));

const AppRoutes = () => (
    <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cocktail/:id" element={<CocktailDetailPage />} />
                    <Route path="cocktail/new" element={<NewCocktailPage />} />
                </Route>
            </Routes>
        </Suspense>
    </ErrorBoundary>
);

export default AppRoutes;