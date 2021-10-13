import axios from 'axios'

export const getPosts = async () => {
	return await axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const getPost = async (postId) => {
	return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

export const postPost = async (post) => {
	try {
		return await axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
	} catch (e) {
		return false
	}
}