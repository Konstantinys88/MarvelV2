import Header from '../header/Header';
import RandomCharacter from '../randomCharacter/RandomCharacter';
import CharList from '../charList/CharList';

import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<RandomCharacter />
			<div className='App__charList'>
				<CharList />
			</div>

		</div>
	);
}

export default App;
