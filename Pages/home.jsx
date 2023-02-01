import { Hero } from "../cmps/hero.jsx"
import { Intro } from "../cmps/intro.jsx"
import { SuccessStories } from "../cmps/success-stories.jsx"
import {Contact} from "../cmps/contact.jsx"
import {Footer} from "../cmps/footer.jsx"


export function Home() {
    return (
        <section className="home">
            <Hero />
            <Intro/>
            <SuccessStories/>
            <Contact/>
            <Footer/>
        </section>
    )
}

