fetch('https://weerlive.nl/api/json-data-10min.php?key=7964ce7459&locatie=Erp')
  .then(response => response.json())
  .then(data => console.log(data))
