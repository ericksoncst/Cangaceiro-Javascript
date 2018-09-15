// class	DateConverter	{

// 	paraTexto(data)	{
// 		return	data.getDate()
// 		+	'/'	+	(data.getMonth()	+	1)
// 		+	'/'	+	data.getFullYear();
// 	}

// 	paraData(texto)	{
// 		return new Date(...texto.split('-').map((item,indice)	=>	item	-	indice	%	2));
// 	}
// }

//Adicionando Static antes dos metodos Agora,	 podemos	 chamar	 os	 métodos	 diretamente	 da	 classe.
//Alterando	o	código	de		NegociacaoController	:
// class	DateConverter	{

// 	static paraTexto(data)	{
// 		return	data.getDate()
// 		+	'/'	+	(data.getMonth()	+	1)
// 		+	'/'	+	data.getFullYear();
// 	}

// 	static paraData(texto)	{
// 		return new Date(...texto.split('-').map((item,indice)	=>	item	-	indice	%	2));
// 	}
// }

//Adicinando aviso para que não seja possivel acessar o metodo statico

// class	DateConverter	{

// 	constructor()	{
// 		throw new Error('Esta	classe	não	pode	ser	instanciada');
// 	}


// 	static paraTexto(data)	{
// 		return	data.getDate()
// 		+	'/'	+	(data.getMonth()	+	1)
// 		+	'/'	+	data.getFullYear();
// 	}

// 	static paraData(texto)	{
// 		return new Date(...texto.split('-').map((item,indice)	=>	item	-	indice	%	2));
// 	}
// }


//adicionando template literal nas concatenações ${}
// class	DateConverter	{

// 	constructor()	{
// 		throw new Error('Esta	classe	não	pode	ser	instanciada');
// 	}


// 	static paraTexto(data)	{
// 			return	`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
// 	}

// 	static paraData(texto)	{
// 		return new Date(...texto.split('-').map((item,indice)	=>	item	-	indice	%	2));
// 	}
// }


// ******* ADICIONANO FAIL FIST*********
class	DateConverter	{

	constructor()	{
		throw new Error('Esta	classe	não	pode	ser	instanciada');
	}


	static paraTexto(data)	{
			return	`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static	paraData(texto)	{
if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
throw new Error('Deve	estar	no	formato	aaaa-mm-dd');

return new Date(...texto.split('-').map((item,indice)	=>	item	-	indice	%	2));
	}
}

	