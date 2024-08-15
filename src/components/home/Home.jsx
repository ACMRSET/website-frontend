import Navbar from '../Navbar'
import { Hero } from './Hero'
import { MainContent } from './MainContent'

const home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <MainContent />
        </>
    )
}

export default home