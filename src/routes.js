import Main from './pages/main/main';
import News from './pages/current-news/current-news'
import ExchangeRages from './pages/exchange-rates/exchange-rates'
import Home from './pages/home/home';
import Weather from './pages/weather/weather';
import map3D from './pages/3d-map/3d-map';

const routes = [
    {
        path: '/',
        component: Home,
        alias: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/category/:category',
        name: 'newsCategory',
        component: Main,
        props: true
    },
    {
        path: '/country/:country',
        name: 'newsCountry',
        component: Main,
        props: true
    },
    {
        path: '/news',
        name: 'News',
        component: News,
        props: true
    },
    {
        path: '/exchange-rates',
        name: 'ExchangeRates',
        component: ExchangeRages,
    },
    {
        path: '/weather',
        name: 'Weather',
        component: Weather,
    },
    {
        path: '/map3D',
        name: 'map3D',
        component: map3D,
    }
];

export default routes