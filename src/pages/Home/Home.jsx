import React from 'react';
import './style.css'

function Home() {
	return (
		<div>
			 <div class="container">
				<div class="row">
					<div class="col-md-4 col-lg-4">
						<img
							src="https://jorxan.github.io/portfolio/images/IMG_1184_Original.JPG"
							class="img-fluid rounded"
							alt="Responsive image"
						/>
					</div>
					<div class="col-md-8 col-lg-8">
						<h1>Jordan Albers | Web Developer</h1>
						<div class="row">
							<div class="col-lg-12">
								<div class="text">
									<p>
										Hi, my name is Jordan Albers, and I am a full stack web development student at
										the University of Arizona. I have experience working with HTML, CSS w/SASS,
										JavaScript w/jQuery, Nodejs, MySQL, MongoDB, and Reactjs. For more information,
										check out my Linkedin.
										<a href="https://www.linkedin.com/in/jordan-albers-607201149/">
											<i class="fab fa-linkedin fa-lg" />
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
		</div>
	);
}

export default Home;
