import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Read from "./components/Read"
import NewArticle from "./components/NewArticle"
function App() {
	return (
		<div className='bg-gray-100 min-w-screen min-h-screen w-screen h-auto'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/read/:id' element={<Read />} />
				<Route path='/new' element={<NewArticle />} />
				<Route path='/edit/' element={<p>edit</p>} />
			</Routes>
		</div>
	)
}

export default App
