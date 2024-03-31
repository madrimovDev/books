import Books from './ui/books'
import CreateBook from './ui/create-book'
import HomeTop from './ui/home-top'

export default function Home() {
	return (
		<>
			<HomeTop />
			<Books />
			<CreateBook />
		</>
	)
}
