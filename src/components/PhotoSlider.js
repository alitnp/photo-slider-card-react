import { useState, useEffect } from "react";
import styled from "styled-components";

//دیتا فِیک که میتونه از سمت سرور فچ بشه
import ebrahim from "../images/ebrahim.jpg";
import behdad from "../images/behdad.jpg";
import palet from "../images/palet.jpg";
const songsArray = [
	{ songName: "نصف النهار مبدأ", artistName: "گروه پالت", photo: palet },
	{ songName: "هزار تو", artistName: "حامد بهداد", photo: behdad },
	{ songName: "ابراهیم", artistName: "محسن چاووشی", photo: ebrahim },
];

const Container = styled.div`
	width: 300px;
	height: 400px;
	background-color: #fff;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	//عکس پس زمینه از اکتیو اسلاید میاد
	background-image: url(${(p) => p.backgroundImage});
	background-size: 300px 275px;
	background-position: top center;
`;

const Info = styled.div`
	width: 100%;
	height: 125px;
	margin-top: 275px;
	backdrop-filter: blur(30px);
	background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.5));
	color: #fff;
	text-shadow: 0 0 10px #000;
	text-align: center;
	padding-top: 1rem;
	& > :nth-child(2) {
		margin-top: 5px;
	}
`;

const DotsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	// دایره ای که کلاس اکتیو داره نیم برابر بزرگتر میشه و پس زمینه آبی
	.active {
		transform: scale(1.5);
		background-color: #29b4f5;
	}
`;
const Dot = styled.div`
	width: 10px;
	height: 10px;
	background-color: #fff;
	border-radius: 50%;
	margin: 0 0.5rem;
	transition: transform 0.3s ease-out;
	cursor: pointer;
	:hover {
		transform: scale(1.3);
	}
`;

const PhotoSlider = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const handleSlide = () => {
			// اگر اکتیواسلاید فعلی، آخرین اسلاید در آرایه هست
			activeSlide === songsArray.length - 1
				? //پس برو به اولین اسلاید
				  setActiveSlide(0)
				: //در غیر این صورت برو به اسلاید جلوتر
				  setActiveSlide(activeSlide + 1);
		};

		// هر سه ثانیه فانکشن بالا صدا میشه
		const autoSlide = setInterval(handleSlide, 3000);
		return () => clearInterval(autoSlide);
	}, [activeSlide]);

	return (
		<Container backgroundImage={songsArray[activeSlide].photo}>
			<Info>
				<p>{songsArray[activeSlide].artistName}</p>
				<p>{songsArray[activeSlide].songName}</p>
				<DotsWrapper>
					{/* به تعداد آیتم های موجود در آرایه دایره بساز */}
					{songsArray.map((item, index) => {
						return (
							<Dot
								//در ریاکت هر المنت باید کلید مخصوص به خودشو داشته باشه
								key={index}
								//دایره ای که ایندکسش با اکتیواسلاید برابره کلاس اکتیو میخوره
								className={activeSlide === index && "active"}
								//وقتی کلیک شد، اکتیو اسلاید رو بکن ایندکسه این دایره تا اکتیو بشه
								onClick={() => setActiveSlide(index)}
							/>
						);
					})}
				</DotsWrapper>
			</Info>
		</Container>
	);
};

export default PhotoSlider;
