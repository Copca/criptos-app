import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { monedas } from '../data/monedas';

import useSelectMonedas from '../hooks/useSelectMonedas';

import Error from './Error';

const InputSubmit = styled.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
	margin-top: 30px;

	&:hover {
		background-color: #7470fe;
	}
`;

const Formulario = ({ setMonedas }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	const [monedaseleccionada, SelectMonedas] = useSelectMonedas(
		'Elige tu Moneda',
		monedas
	);
	const [criptoseleccionada, SelectCripto] = useSelectMonedas(
		'Elige tu Cripto Moneda',
		criptos
	);

	useEffect(() => {
		const consultarAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
			const respuesta = await fetch(url);
			const resultado = await respuesta.json();

			const arrayCriptos = resultado.Data.map(cripto => {
				const criptoMoneda = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName
				};

				return criptoMoneda;
			});

			setCriptos(arrayCriptos);
		};

		consultarAPI();
	}, []);

	const handleSubmit = e => {
		e.preventDefault();

		// Validar que los campos
		if ([monedaseleccionada, criptoseleccionada].includes('')) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 3000);
			return;
		}

		setError(false);

		setMonedas({
			monedaseleccionada,
			criptoseleccionada
		});
	};

	return (
		<>
			{error && <Error>Todos los campos son obligatorios</Error>}

			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCripto />

				<InputSubmit type='submit' value='Cortizar' />
			</form>
		</>
	);
};

export default Formulario;
