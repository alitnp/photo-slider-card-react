import styled from "styled-components";
import PhotoSlider from "./PhotoSlider";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = () => {
	return (
		<Container>
			<PhotoSlider />
		</Container>
	);
};

export default Wrapper;
