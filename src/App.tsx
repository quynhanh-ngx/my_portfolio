import React from 'react';
import linkedIn from './linkedin.svg';
import github from './github.svg';
import mail from './mail.svg';
import logo from './carrot.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Hi, my name is Anh Nguyen</h1>
                <p>
                    I am a Computer Science student at the University of North Carolina at Charlotte.
                </p>
                <div className="programming-skills">
                    <div className="skill-list">
                <h2>Languages</h2>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                </ul>
                    </div>
                    <div className="skill-list">
                <h2>Backend</h2>
                <ul>
                    <li>Spring</li>
                    <li>Django</li>
                    <li>Flask</li>
                </ul>
                    </div>
                    <div className="skill-list">
                <h2>Frontend</h2>
                <ul>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                </div>
                </div>


                <div className="social-media">
                    <a href="https://www.linkedin.com/in/anhnguyenq/" target="_blank" rel="noopener noreferrer"
                       className="icon-wrapper linkedin">
                        <div>
                            <img src={linkedIn} alt="LinkedIn logo" className="social-media-logo"/>
                        </div>
                    </a>
                    <a href="https://github.com/quynhanh-ngx" target="_blank" rel="noopener noreferrer"
                       className="icon-wrapper github"
                    >
                        <div>
                            <img src={github} alt="GitHub logo" className="social-media-logo"/>
                        </div>
                    </a>
                    <a href="mailto:audreynguyen2803@gmail.com"
                       className="icon-wrapper mail"
                    >
                        <div>
                            <img src={mail} alt="mail logo" className="social-media-logo"/>
                        </div>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default App;
