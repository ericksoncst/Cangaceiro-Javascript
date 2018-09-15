// class	Negociacao	{
// 	constructor()	{
// 		this.data	=	new Date();	//	data	atual
// 		this.quantidade	=	1;
// 		this.valor	=	0.0;
// 	}
// }

// usa-se o underline,para que o valor não seja modificado.
// class	Negociacao	{
// 	constructor(data,	quantidade,	valor)	{
// 		this._data	=	new Date(data.getTime());	//	data	atual
// 		this._quantidade	=	quantidade;
// 		this._valor	=	valor;
// 		Object.freeze(this);
// 	}

class	Negociacao	{
	constructor(_data,	_quantidade,	_valor)	{
			Object.assign(this,	{	_quantidade,	_valor	});
			this._data	=	new Date(_data.getTime());
			Object.freeze(this);

		}

		get	volume()	{
			return this._quantidade	*	this._valor;
		}

		get	data()	{
			return new Date(this._data.getTime()); // para tornar a data imutavel
		}

		get	quantidade()	{
			return this._quantidade;
		}

		get	valor()	{
			return this._valor;
		}	
}

