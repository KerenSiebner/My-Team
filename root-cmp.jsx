import { AppHeader } from './cmps/app-header.jsx';
import { Home } from './Pages/home.jsx';

export function App() {
    console.log('App rendered');

    function onDrink(newCount) {
        console.log('Drinking...', newCount)
    }

    return <section className=" app">
        <AppHeader />
        <Home />
    </section>
}