var start = 'Bonjour ', name, result;
name = prompt('Quel est votre prénom?'); // boîte de dialogue avec zone de saisie de texte pour récupérer le nom
if(name){
  result = start + name;
  alert(result);
}
