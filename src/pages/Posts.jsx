import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getPosts } from '../services/posts'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		(async () => {
			let res = await getPosts()

			setPosts(res.data)
			setIsLoading(false)
		})()
	}, [])

	return (
		<>
			<h1>Page des Posts</h1>
			<p><Link to='/posts/new'>Ajouter un post</Link></p>

			{ isLoading && <div>Loading ...</div> }

			{ !isLoading && <div>
				{ posts.map(post => <div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<p><Link to={`/posts/${post.id}`}>En savoir +</Link></p>
				</div>)}
			</div> }
		</>
	)
}

export default Posts