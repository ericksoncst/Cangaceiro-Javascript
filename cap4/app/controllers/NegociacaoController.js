// class	NegociacaoController	{
// 	constructor()	{
// 		let	$	=	document.querySelector.bind(document);
// 		this._inputData	=	$('#data');
// 		this._inputQuantidade	=		$('#quantidade');
// 		this._inputValor	=	$('#valor');
// 			}
// adiciona(event)	{
// 	event.preventDefault();
// 	let	data	=	new Date(...this._inputData.value
// 		.split('-')
// 		.map((item,	indice)	=>	item	-	indice	%	2));
// 	let	negociacao	=	new Negociacao(
// 		data,
// 	parseInt(this._inputQuantidade.value),
// 	parseFloat(this._inputValor.value)
// 		);
// 	console.log(negociacao);
// }


// }

//******* ADD () na soma pra corrigir data
// class	NegociacaoController	{
// 	constructor()	{
// 		let	$	=	document.querySelector.bind(document);
// 		this._inputData	=	$('#data');
// 		this._inputQuantidade	=		$('#quantidade');
// 		this._inputValor	=	$('#valor');
// 			}
// adiciona(event)	{
// 	event.preventDefault();
// 	let	data	=	new Date(...this._inputData.value
// 		.split('-')
// 		.map((item,	indice)	=>	item	-	indice	%	2));
// 	let	negociacao	=	new Negociacao(
// 		data,
// 	parseInt(this._inputQuantidade.value),
// 	parseFloat(this._inputValor.value)
// 		);
// 	let	diaMesAno	=	negociacao.data.getDate()
// 	+	'/'	+	(negociacao.data.getMonth() + 1)
// 	+	'/'	+	negociacao.data.getFullYear();
// console.log(diaMesAno);

// }


// }


// class	NegociacaoController	{
// 	constructor()	{
// 		let	$	=	document.querySelector.bind(document);
// 		this._inputData	=	$('#data');
// 		this._inputQuantidade	=		$('#quantidade');
// 		this._inputValor	=	$('#valor');
// 			}
// 	adiciona(event)	{
// 		event.preventDefault();
// 		let	converter	=	new	DateConverter();
// 		let	data	=	converter.paraData(this._inputData.value);
// 		let	negociacao	=	new	Negociacao(data,
// 		parseInt(this._inputQuantidade.value),
// 		parseFloat(this._inputValor.value));
// 		let	diaMesAno	=	converter.paraTexto(negociacao.data);

// 		console.log(diaMesAno);

// 	}


// }

//chamando metodos,apos ter modificado os metodos de dateconverter.js para static
// não é mais necessario chamar instancia
class	NegociacaoController	{
	constructor()	{
		let	$	=	document.querySelector.bind(document);
		this._inputData	=	$('#data');
		this._inputQuantidade	=		$('#quantidade');
		this._inputValor	=	$('#valor');
			}
	adiciona(event)	{
		event.preventDefault();
		let	negociacao	=	new	Negociacao(
		DateConverter.paraData(this._inputData.value),
		parseInt(this._inputQuantidade.value),
		parseFloat(this._inputValor.value)
		);

		console.log(negociacao.data);
		//	CHAMANDO	O	MÉTODO	ESTÁTICO
		let	diaMesAno	=	DateConverter.paraTexto(negociacao.data);
		console.log(diaMesAno);

	}


}