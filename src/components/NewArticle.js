import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { newArticle } from "../redux/Articles"
import { useNavigate } from "react-router-dom"

const NewArticle = () => {
	const idRef = useRef()
	const titleRef = useRef()
	const contentRef = useRef()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const saveArticle = (e) => {
		const id = parseInt(idRef.current.value)
		const title = titleRef.current.value
		const content = contentRef.current.value
		dispatch(newArticle({ id, title, content }))
		navigate("/")
	}

	return (
		<div className='w-full p-10 grid place-items-center'>
			<div className='w-3/5 min-h-[250px] sm:min-h-[500px] rounded-md px-20 py-10 flex justify-center items-center flex-col'>
				<input
					ref={idRef}
					type='text'
					placeholder='id'
					className='w-full p-2 border border-gray-300 rounded-lg mb-10'
				/>
				<input
					ref={titleRef}
					type='text'
					placeholder='Title'
					className='w-full p-2 border border-gray-300 rounded-lg mb-10'
				/>
				<textarea
					ref={contentRef}
					type='text'
					placeholder='Content'
					rows='30'
					className='w-full mb-10 p-2 border border-gray-300 rounded-lg'
				/>
				<button
					onClick={saveArticle}
					className='w-full p-2 border bg-slate-300 border-gray-300 rounded-lg'>
					Save
				</button>
			</div>
		</div>
	)
}

export default NewArticle
