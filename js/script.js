// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19

var nome= prompt('inserisci il tuo nome');
var cognome= prompt('inserisci il tuo cognome');
var colore= prompt('inserisci il tuo colore preferito');


// console.log(nome, cognome, colore);

document.getElementById('presentazione').innerHTML='nome' + ' ' + 'cognome' + ' ' + 'colore';
