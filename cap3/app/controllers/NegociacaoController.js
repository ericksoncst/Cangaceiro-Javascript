// class	NegociacaoController	{

// 	adiciona(event)	{
// 		event.preventDefault();
// 		//	buscando	os	elementos
// 		let inputData	=	document.querySelector('#data');
// 		let	inputQuantidade	=		document.querySelector('#quantidade');
// 		let	inputValor	=	document.querySelector('#valor');

// 	}

// }	

//&**************2*****************
// class	NegociacaoController	{

// 	adiciona(event)	{
// 		event.preventDefault();
// 		//	a	ideia	é	que	$	seja	o	querySelector
// 		//	realizando	o	bind,	$	mantém	document	como	seu	contexto
// 		let	$	=	document.querySelector.bind(document);
// 		let	inputData	=	$('#data');
// 		let	inputQuantidade	=	$('#quantidade');
// 		let	inputValor	=	$('#valor');
// 		console.log(inputData.value);
// 		console.log(parseInt(inputQuantidade.value));
// 		console.log(parseFloat(inputValor.value));
// 	}
// }

// *****3****** EVITANDO	PERCORRER	DESNECESSARIAMENTE	O	DOM
// class	NegociacaoController	{
// 	constructor()	{
// 		let	$	=	document.querySelector.bind(document);
// 		this._inputData	=	$('#data');
// 		this._inputQuantidade	=		$('#quantidade');
// 		this._inputValor	=	$('#valor');
// 			}
// 	adiciona(event)	{
// 		event.preventDefault();
// 		//	precisamos	acessar	as	propriedades	através	de	this
// 		console.log(this._inputData.value);
// 		console.log(parseInt(this._inputQuantidade.value));
// 		console.log(parseFloat(this._inputValor.value));
// 	}
// }


//v ****** 4 *********** diminuir verbosidade do cod com arrow function => e ...	spread	operator
// class	NegociacaoController	{
// 	constructor()	{
// 		let	$	=	document.querySelector.bind(document);
// 		this._inputData	=	$('#data');
// 		this._inputQuantidade	=		$('#quantidade');
// 		this._inputValor	=	$('#valor');
// 			}
// adiciona(event)	{
// 		event.preventDefault();
// let	data	=	new Date(...this._inputData
// 	.value.split('-')
// 	.map(function(item,	indice) {
// 			return	item	-	indice	%	2;
// 	}));
// console.log(data);
// }
// }


class	NegociacaoController	{
	constructor()	{
		let	$	=	document.querySelector.bind(document);
		this._inputData	=	$('#data');
		this._inputQuantidade	=		$('#quantidade');
		this._inputValor	=	$('#valor');
			}
adiciona(event)	{
	event.preventDefault();
	let	data	=	new Date(...this._inputData.value
		.split('-')
		.map((item,	indice)	=>	item	-	indice	%	2));
	let	negociacao	=	new Negociacao(
		data,
	parseInt(this._inputQuantidade.value),
	parseFloat(this._inputValor.value)
		);
	console.log(negociacao);
}


}