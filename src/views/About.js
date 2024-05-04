import 'aos/dist/aos.css';

import { Link, Route, Routes } from 'react-router-dom';


const About = () => {
	return (
		<div id="wrapper" class="about">
			<div class="wrapper-holder">
				<div className="container">
					<section id="main">
						<h1>We are an independent school for kids. Our experience help us to teach the youngest kids with awesome results. We use only the best methods and systems to improve learning.</h1>
						<div className="about-txt">
							<div className="col">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in <strong>rhoncus dui vestibulum cum sociis natoque penatibus et magnis dis parturient montes, nascetur</strong> ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices.</p>
							</div>
							<div className="col-dvdr">&nbsp;</div>
							<div className="col">
								<p>In vel purus ac purus porttitor condimentum vel eu tellus. Nulla euismod, risus eu fringilla luctus, tellus diam congue libero, eget porta nisl urna at ligula. <a href="#">Quisque neque orci, volutpat at massa egestas,</a> consequat sodales diam. Praesent ut felis mi. Proin et quam sed metus fringilla sodales. Mauris vel eleifend ligula. Proin a est eu nulla faucibus adipiscing.</p>
							</div>
						</div>
						<div className="person">
							<div className="person-img">
								<img src="images/img-person01.jpg" alt="" />
								<div className="mask"></div>
							</div>
							<div className="person-description">
								<h2>Dorothea Larsson</h2>
								<address>(590) 452 463 984 
								<a className="email" href="mailto:dorothea@kidschool.com">dorothea@kidschool.com</a>
								<a className="facebook" href="#">Visit me at Facebook</a></address>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in rhoncus dui vestibulum ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices purus, vitae vestibulum arcu velit at leo. </p>
							</div>
						</div>
						<div className="person">
							<div className="person-img">
								<img src="images/img-person02.jpg" alt="" />
								<div className="mask"></div>
							</div>
							<div className="person-description">
								<h2>Patricia Stevenson</h2>
								<address>(590) 398 484 358 
								<a className="email" href="mailto:patricia@kidschool.com">patricia@kidschool.com</a>
								<a className="facebook" href="#">Visit me at Facebook</a></address>
								<p>Pellentesque libero nulla, interdum eu lobortis et, scelerisque in enim. Vestibulum accumsan a est in rutrum. Nam molestie mauris eget lacus rutrum, in varius leo volutpat. Integer non tellus pellentesque, faucibus orci ac, interdum arcu. Nam cursus quis arcu eget pharetra. Nulla tellus nulla, rhoncus et venenatis eu, viverra non quam. Vestibulum euismod sem ac ante porta, vitae vestibulum justo semper. Ut sem arcu, porttitor et metus quis, lobortis mattis nisl.</p>
							</div>
						</div>
						<div className="person">
							<div className="person-img">
								<img src="images/img-person03.jpg" alt="" />
								<div className="mask"></div>
							</div>
							<div className="person-description">
								<h2>Jessica Smith</h2>
								<address>(590) 892 352 293 
								<a className="email" href="mailto:jessica@kidschool.com">jessica@kidschool.com</a>
								<a className="facebook" href="#">Visit me at Facebook</a></address>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in rhoncus dui vestibulum ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices purus, vitae vestibulum arcu velit at leo. </p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default About;
