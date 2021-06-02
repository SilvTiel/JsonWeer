fetch('https://weerlive.nl/api/json-data-10min.php?key=7964ce7459&locatie=Veghel')
  .then(response => response.json())
  .then(data => weer(data))

  function weer(data){
    document.getElementById("name").innerHTML = data.liveweer[0].plaats
    document.getElementById("temp").innerHTML = data.liveweer[0].temp
    document.getElementById("desc").innerHTML = data.liveweer[0].verw
  }