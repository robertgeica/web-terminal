import React, { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

const App = () => {
	const focusInput = () => {
		document.getElementById('cmd-input').focus();
	};

	const [ inputValue, setInputValue ] = useState('');
	const [ history, setHistory ] = useState([`Hi there!`, `Type in the command.`, `Not sure? Type 'help' to see available commands`]);

  const commands = ['help', 'clear', 'intro', 'skills', 'projects', 'edu', 'contact'];

	const clearInput = () => {
		setInputValue('');
	};


  // commands to add: intro, skills, projects, edu, contact, help, clear
	const handleOnSubmit = (e) => {
		e.preventDefault();
    
    if(!commands.includes(inputValue)) {
      const print = [ `robertgeica@dev:~$ ${inputValue}`, `${inputValue}: command not found`, `Try 'help' instead.`];

      setHistory([ ...history, ...print ]);
    }
    
    if (inputValue === 'help') {
      const print = [ <span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>, 'Available commands are: ', 'help', 'clear', 'intro', 'skills', 'projects', 'edu', 'contact' ];

      setHistory([ ...history, ...print ]);
    }

    if (inputValue === 'clear') {
      setHistory([]);
    }

		if (inputValue === 'intro') {
			const print = [ 
				
				<span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>,
				`>_ Hi! I am Robert Geica.`, 
				`>_ I am currently pursuing Bachelor's degree in Computer Science at University of Craiova, Romania`,
				`>_ I am constantly looking to improve my programming skills`, 
				`>_ I am open to work and collaborations`
			];

			setHistory([ ...history, ...print ]);
		}

		if (inputValue === 'skills') {
			const print = [ 
				<span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>, 
				`>_ I am confident working with JavaScript, React, Node.js, Express, Redux, Scss, HTML5/CSS3`, 
				`>_ I am competent with MongoDb, MaterialUI, Bootstrap`, 
				`>_ I am familiar with React Native, Java`, 
				`>_ I am working with tools and apps such as Git, npm, yarn, Babel, Webpack, Postman, VSCode, MongoDB Compass`,
				`>_ I prefer to work in a Linux environment`,
				`>_ I can do basic tasks in Adobe Photoshop` 

			];

			setHistory([ ...history, ...print ]);
		}
		
		if (inputValue === 'projects') {
      const print = [ 
				<span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>, 
				<div>
					<span>>_ </span> 
					<a href="https://github.com/robertgeica/weekly">Weekly</a> 
					<span>  a mern-stack weekly task planner</span>
				</div>, 

				<div>
					<span>>_ </span> 
					<a href="https://github.com/robertgeica/taskit">Taskit</a> 
					<span>  a mern-stack trello like application</span>
				</div>,
			
				`>_ You can check more of my work here:`,
				<a href="http://github.com/robertgeica">github.com/robertgeica</a>
			];

      setHistory([ ...history, ...print ]);
    }

    if (inputValue === 'edu') {
      const print = [ 
				<span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>, 
				`>_ Bachelor's Degree in Computer Science`, 
				`>_ University of Craiova`, 
			];

      setHistory([ ...history, ...print ]);
    }

    if (inputValue === 'contact') {
      const print = [ 
				<span>robertgeica@dev:~$ <span className="cmd">{inputValue}</span></span>, 
				`>_ Email: geicarobert@gmail.com`,
				<div>
					<span>>_ Github </span>
					<a href="https://github.com/robertgeica">github.com/robertgeica</a>
				</div>
			];

      setHistory([ ...history, ...print ]);
    }

		clearInput();
	};

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="App">
			<div className="terminal-container">
				<div className="terminal-bar">
					<span id="option1" />
					<span id="option2" />
					<span id="option3" />
				</div>

				<div onClick={focusInput} className="terminal-cmds">

					{history.map((h) => (
						<Fragment key={uuidv4()}>
							<span>{h}</span>
						</Fragment>
					))}

					<form onSubmit={(e) => handleOnSubmit(e)}>
						<span>robertgeica@dev:~$</span>

						<input
							onChange={(e) => handleOnChange(e)}
							autoComplete="off"
							id="cmd-input"
							className="cmd-input"
							value={inputValue}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default App;
