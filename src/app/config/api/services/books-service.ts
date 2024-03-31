import { api } from '..'

export const getBooks = async () => {
	return (await api.get<Books.Response<Books.List[]>>('/books')).data
}

export const createBook = async (isbn: string) => {
	return (await api.post<Books.Response<Books.List>>('/books', { isbn })).data
}

export const removeBook = async (id: number) => {
	return await api.delete(`/books/${id}`)
}
