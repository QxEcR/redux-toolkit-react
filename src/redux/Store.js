import { configureStore } from "@reduxjs/toolkit"
import ArticlesReducer from "./Articles"

export default configureStore({
	reducer: {
		articles: ArticlesReducer,
	},
})
