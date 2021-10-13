import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { postPost } from '../services/posts'

const PostsNew = () => {
	let history = useHistory()

	const [newPost, setNewPost] = useState({
		title: '',
		body: ''
	})
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const HandlerOnChange = (event) => {
		const { name, value } = event.target
		setNewPost({...newPost, [name]: value})
	}

	const handlerOnSubmit = async (event) => {
		event.preventDefault()
		setIsLoading(true)

		const res = await postPost(newPost)

		setIsLoading(false)

		if (res === false) {
			setError('Il y a une erreur.')
		} else {
			history.push("/posts")
		}
	}

	return (
		<div>
			<h1>Ajouter un nouveau post</h1>

			{ isLoading && <div>Loading...</div> }

			{ error && !isLoading && <div className="error">{ error }</div>}

			{ !isLoading && <form onSubmit={handlerOnSubmit}>
				<div>
					<label>Titre</label>
					<input 
						type="text"
						name="title"
						value={newPost.title}
						placeholder="Entrez le titre de votre post"
						onChange={HandlerOnChange}
					/>
				</div><div>
					<label>Corps</label>
					<textarea
						name="body"
						value={newPost.body}
						placeholder="Entrez le corps de votre post"
						onChange={HandlerOnChange}
					></textarea>
				</div>
				<input
					type="submit"
					name="send"
					value="Créer"
				/>
			</form> }
		</div>
	)
}

export default PostsNew