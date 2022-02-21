import LinkButton from 'components/LinkButton';

function App() {
	return (
		<div
			className='App'
			style={{ background: 'hsl(207, 13%, 34%)', padding: 20 }}
		>
			<LinkButton classConfig={{ default: true, bg: false, border: false }}>
				Sign Up
			</LinkButton>
			<br />
			<br />
			<LinkButton classConfig={{ default: true, bg: true, border: false }}>
				Sign Up
			</LinkButton>
			<br />
			<br />
			<LinkButton classConfig={{ default: true, bg: false, border: true }}>
				Sign Up
			</LinkButton>
		</div>
	);
}

export default App;
