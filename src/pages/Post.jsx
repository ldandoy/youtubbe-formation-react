import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import { getPost } from '../services/posts'

const Post = () => {
	let history = useHistory()
	let { postId } = useParams()
	const [post, setPost] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		(async () => {
			let res = await getPost(postId)

			setPost(res.data)
			setIsLoading(false)
		})()
	}, [postId])

	const handlerOnClick = (e) => {
		history.push('/')
	}

	return (
		<div>
			{ isLoading && <div>Loading...</div> }
			
			{ !isLoading && <>
				<h1>{ post.title }</h1> 
				<p>{ post.body }</p>
				<p><Link to='/posts'>Retour à la liste</Link></p>
				<p>
					<button onClick={handlerOnClick}>Retour à la home</button>
				</p>
			</>}
			
		</div>
	)
}

export default Post