import React from 'react';
import './style.css';
function Navbar() {
	return (
		<div>
			<nav>
				<div className="logo">Jordan Albers</div>
				<ul className="nav-links">
					<li>
						<a href="index.html">
							<i className="far fa-user-circle fa-2x" />
							<b>About</b>
						</a>
					</li>
					<li>
						<a href="portfolio.html">
							<i className="fas fa-laptop-code fa-2x" />
							<b>Projects</b>
						</a>
					</li>
					<li>
						<a href="contact.html">
							<i className="far fa-envelope fa-2x" />
							<b>Contact</b>
						</a>
					</li>
				</ul>
			</nav>
			
		</div>
	);
}

export default Navbar;
