// libs
import { useEffect, useState } from 'react';

// components
import Header from './components/Header';
import Lessons from './components/Lessons/Lessons';
import Theme from './components/Theme';

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

	useEffect(() => {
		document.body.classList.add('colors_default');

		if (theme) {
			document.body.classList.add(theme);
		}
	}, []);

	useEffect(() => {
		if (theme === "") {
			return;
		}

		document.body.classList = ["colors_default"];
		document.body.classList.add(theme);

	}, [theme]);

	const newTheme = (themeName) => {
		setTheme(themeName);
		localStorage.setItem("theme", themeName);
	}

	return (
		<div>
			<Header />
			<Lessons />
			<Theme newTheme={newTheme} />
		</div>
	);
}

export default App;