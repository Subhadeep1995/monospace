import Link from 'next/link'

const Index = () => {
	return (
			<div>
				<ul>
					<li><Link href="/movies">Movies</Link></li>
					<li><Link href="/x-men/x-men-s03">X-Men</Link></li>
				</ul>
			</div>
		)
}

export default Index