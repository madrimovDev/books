declare namespace Auth {
	interface SignUpRequest {
		email: string
		name: string
		key: string
		secret: string
	}
	interface SignUpResponse {
		data: {
			id: number
			name: string
			email: string
			key: string
			secret: string
		}
		isOk: boolean
		message: string
	}
}

declare namespace Books {
	interface Book {
		id: number
		isbn: string
		title: string
		cover: string
		author: string
		published: number
		pages: number
	}

	interface List {
		status: number
		book: Book
	}

	interface Response<T> {
		data: T | null
		message: string
		isOk: boolean
	}
}
