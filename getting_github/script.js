fetch("https://api.github.com/users/adion81")
    .then(response => response.json() )
    .then(coderData => console.log(coderData) )
    .catch(err => console.log(err) )


async function getCoderData() {
    var response = await fetch("https://api.github.com/users/MSBivens");
    var coderData = await response.json();
    return coderData;
}

console.log(getCoderData())