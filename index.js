const day = prompt('Zadej den:');
const month = prompt('Zadej mesic:');
const year = prompt('Zadej rok:');

document.body.innerHTML +=
  // '<p> Datum: ' + day + '.' + month + '.' + year + '</p>';

  '<p class="date">Datum: <span class="day" >' + day + '</span >.<span class="month" >' + month + '</span >.<span class="year" >' + year + '</span>';

