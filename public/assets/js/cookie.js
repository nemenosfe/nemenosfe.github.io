function setCookie(nombre, valor, caducidad) {
	//Si no tenemos caducidad para la cookie, la definimos a 31 dias
	if(!caducidad)
		caducidad = 31

	var expireDate = new Date() //coge la fecha actual
	expireDate.setDate(expireDate.getDate()+caducidad);

	//crea la cookie: incluye el nombre, la caducidad y la ruta donde esta guardada
	//cada valor esta separado por ; y un espacio
	document.cookie = nombre + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";
}

function getCookie(nombre)
{
	/*
	 * document.cookie
	 * Contiene todas las cookies que estan al alcance de la paginas web en el formato:
	 * nombreCookie1=valor1; nombreCookie2=valor2
	 *
	 * document.cookie.length
	 * Contiene la longitud de la suma de todas las cookies
	 */
	if(document.cookie.length>0)
	{
		/*
		 * indexOf(caracter,desde) Devuelve la primera posicion que el caracter aparece
		 * devuelve -1 si no encuentra el caracter
		 */
		start=document.cookie.indexOf(nombre + "=");
		if (start!=-1)
		{
			//El inicio de la cookie, el nombre de la cookie mas les simbolo '='
			start=start + nombre.length+1;
			//Buscamos el final de la cookie (es el simbolo ';')
			end=document.cookie.indexOf(";",start);
			//Si no encontramos el simbolo del final ';', el final sera el final de la cookie.
			if (end==-1)
				end=document.cookie.length;
			//Devolvemos el contenido de la cookie.
			//substring(start,end) devuelve la cadena entre el valor mas bajo y
			//el mas alto, indiferentemente de la posicion.
			return unescape(document.cookie.substring(start,end));
		}
	}
	//no hemos encontrado la cookie
	return "";
}
