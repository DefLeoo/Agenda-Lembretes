//comprovar se está tudo ok...
document.addEventListener('DOMContentLoaded', function(){
	console.log("Hey");
	//mostrarError();

	//Chamamos a function createRecordatorio
	document.getElementById("buttomSave").onclick = createRecordatorio;
});

//Function para verificar de há texto...
function textoValido(texto){
	if(texto == null || texto == "" || texto.lenght < 1){
		return false;
	}else{
		return true;
	}
}

//Function para mostrar error...
function mostrarError(){
	var html = "";
	html += '<div class="alert alert-danger" role="alert">';
	html += 'Please insert a things';
	html += '</div>';

	document.getElementById('error').innerHTML = html;
}

//Function for clear this error
function limparError(){
	document.getElementById("error").innerHTML = "";
}

//Function for create to lembrete...
function createRecordatorio(){
	var conteudoTextArea = document.getElementById("texto").value;
	if(!textoValido(conteudoTextArea)){
       mostrarError();
       return;
	}
	limparError();
}