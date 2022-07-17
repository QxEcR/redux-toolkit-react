import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteArticle } from "../redux/Articles"
import { useParams, useNavigate } from "react-router-dom"

const Read = () => {
	const articles = useSelector((state) => state.articles)
	const dispatch = useDispatch()
	const [article, setArticle] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		setArticle(articles.articles.find((article) => article.id == id))
	}, [])

	const handleDelete = () => {
		dispatch(deleteArticle({ id }))
		navigate("/")
	}

	return (
		<div className='w-full p-10'>
			<div className='w-full min-h-[250px] sm:min-h-[500px] rounded-md px-20 py-10 bg-red-300'>
				<h1 className='text-center font-bold text-2xl'>{article.title}</h1>
				<p className='mt-10'>{article.content}</p>
			</div>
			<button
				onClick={handleDelete}
				className='w-full mt-10 p-2 border bg-slate-300 border-gray-300 rounded-lg'>
				Delete
			</button>
		</div>
	)
}

export default Read
