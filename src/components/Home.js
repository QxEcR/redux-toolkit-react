import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Home = () => {
	const { articles } = useSelector((state) => state.articles)
	React.useEffect(() => {
		console.log(articles)
	}, [])

	return (
		<div className='w-full p-20 flex flex-wrap justify-center'>
			{articles.map((article) => {
				return (
					<Link to={`/read/${article.id}`} key={article.id}>
						<div className='w-[150px] mx-7 mb-7 h-[200px] bg-gray-200 rounded-2xl p-6 border'>
							<p className='text-center font-bold'>{article.title}</p>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default Home
