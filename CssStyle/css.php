//Will be creating css for the MechaniX web app

//Homepage CSS Styling
.wthreehome-latest {
	padding: 50px 0;
	background-color: #F5F5F5;
}

.wthreehome-latest-grid {
	padding: 10px;
}

.wthreehome-latest-grid h4 {
	font-size: 16px;
	color: #555;
}

.wthreehome-latest-grid h5 {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	margin: 10px 0;
}

.wthreehome-latest-grid h6 a {
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 400;
	text-decoration: underline;
	color: #000;
}

.wthreehome-latest-grid h6 a:hover {
	color: #c41228;
}

.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	height: auto;
	background: #000;
	margin-bottom: 10px;
}

.grid figure img {
	position: relative;
	display: block;
	max-width: 100%;
}

.grid figure figcaption {
	padding: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before, .grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption, .grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

figure.effect-apollo {
	background: #000;
}

figure.effect-apollo img {
	opacity: 0.95;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale3d(1.05,1.05,1);
	transform: scale3d(1.05,1.05,1);
}

figure.effect-apollo figcaption::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,0.5);
	content: '';
	-webkit-transition: -webkit-transform 0.6s;
	transition: transform 0.6s;
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
}

figure.effect-apollo:hover img {
	opacity: 0.6;
	-webkit-transform: scale3d(1,1,1);
	transform: scale3d(1,1,1);
}

figure.effect-apollo:hover figcaption::before {
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}


//Contactus Page Styling
