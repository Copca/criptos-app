import styled from '@emotion/styled';
import '../styles/Spinner.css';

const Contenedor = styled.div`
	margin-top: 2rem;
`;

const Spinner = () => {
	return (
		<Contenedor>
			<div className='sk-chase'>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
			</div>
		</Contenedor>
	);
};

export default Spinner;
