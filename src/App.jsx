import { Home } from "./components/home/Home"
import { Team } from "./components/team/Team"
import { Events } from "./components/events/Events"
import { Contact } from "./components/contact/Contact"
import { About } from "./components/about/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
