var form = document.getElementById("myform")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    var search = document.getElementById("search").value
    var originalName = search.split(' ').join('')
    document.getElementById("response").innerHTML = ""
    fetch("https://api.github.com/users/"+originalName)
    .then( (response) => response.json() )
    .then( (data) => { console.log(data)
        document.getElementById("response").innerHTML = `
        <a target="_blank" href="$https://www.github.com/${originalName}"> 
        <div class="id">${data.id}</div>
        <div class="url">${data.url}</div>
        <img src=${data.avatar_url}/> 
        </a>
        `
    })
})