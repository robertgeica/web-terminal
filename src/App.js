import React, { useState, Fragment } from 'react';
import './App.scss';

const App = () => {
	const focusInput = () => {
		document.getElementById('cmd-input').focus();
	};

	const [ inputValue, setInputValue ] = useState('');
	const [ cmd, setCmd ] = useState();
	const [ history, setHistory ] = useState([`Hi there!`, `Type in the command.`, `Not sure? Type 'help' to see available commands`]);

  const commands = ['help', 'clear', 'intro', 'skills', 'programming', 'edu', 'contact'];

	const clearInput = () => {
		setInputValue('');
	};


  // commands to add: intro, skills, programming, edu, contact, help, clear
	const handleOnSubmit = (e) => {
		e.preventDefault();
    
    if(!commands.includes(inputValue)) {
      const print = [ `robertgeica@dev:~$ ${inputValue}`, `${inputValue}: command not found`, `Try 'help' instead.`];

      setHistory([ ...history, ...print ]);
    }
    
    if (inputValue == 'help') {
      const print = [ `robertgeica@dev:~$ ${inputValue}`, 'Available commands are: ', 'help', 'clear', 'intro', 'skills', 'programming', 'edu', 'contact' ];

      setHistory([ ...history, ...print ]);
    }

    if (inputValue == 'clear') {
      setHistory([]);
    }

		if (inputValue == 'intro') {
			const print = [ `robertgeica@dev:~$ ${inputValue}`, `>_ intro`, `>_ dsada` ];

			setHistory([ ...history, ...print ]);
		}

		if (inputValue == 'skills') {
			const print = [ `robertgeica@dev:~$ ${inputValue}`, `>_ my skills are`, `>_ js`, `>_ react`, `>_ nodejs` ];

			setHistory([ ...history, ...print ]);
		}

    if (inputValue == 'edu') {
      const print = [ `robertgeica@dev:~$ ${inputValue}`, `>_ education` ];

      setHistory([ ...history, ...print ]);
    }

    if (inputValue == 'contact') {
      const print = [ `robertgeica@dev:~$ ${inputValue}`, `>_ contact mail@mail.com` ];

      setHistory([ ...history, ...print ]);
    }

		clearInput();
	};

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	console.log(history);
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
						<Fragment>
							<span className="cmd">{h}</span>
							<br />
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
