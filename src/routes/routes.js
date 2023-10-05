import { Routes, Route } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"

const PageTest = () => {
    return (
        <div>Page Test</div>
    )
}

const RoutesPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="/" element={<PageTest />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutesPage;