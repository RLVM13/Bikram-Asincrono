// EJERCICIO 1
//Declara una funcion getAllBreeds que devuelva todas las razas de perro

//PARA COMENTAR UN BLOQUE, SEÑALANDOLO Y PULSANDO ALT+SHIFT+A

function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breedList => Object.keys(breedList.message))
}

getAllBreeds().then(data => console.log(data));


//EJERCICIO 2
//Declara una función getRandomDog que obtenga una imagen random de una raza

function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(foto => foto.json())
        .then(image => image.message)
}

////EJERCICIO 3
//Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza.

function getAllImagesByBreed() {
    return fetch('https://dog.ceo/api/breed/komondor/images')
        .then(foto => foto.json())
        .then(image => image.message)
}


//EJERCICIO 4
//Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento

function getAllImagesByBreed2(breed) {
    return fetch('https://dog.ceo/api/breed/' + breed + '/images')
        .then(foto => foto.json())
        .then(image => image.message)
}

//EJERCICIO 5
//Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario.
/*
function getGitHubUserProfile(username) {
    return fetch('https://api.github.com/users/' + username) // Devuelve una promesa
    //return fetch ("D:\Bridge\RLVM13.json") //Archivo en local
        .then(data => data.json()) //Fulfilled
        .catch((error) => { // Rejected - Conveniente para identificar si se producen errores
            console.log(error); //Mensaje de error
            alert("Error en la llamada " + error);
        })
}

//getGitHubUserProfile("RLVM13");
//getGitHubUserProfile("RLVM13").then(data => console.log(data)); //f(x) asincrona con el THEN, lo que devuelve esta en DATA y lo imprimimos por consola
//getGitHubUserProfile("RLVM13").then(data => document.body.innerHTML = JSON.stringify(data)); //convierte el objeto JS en JSON y lo imprime en la web (OBJ a String)
*/
//EJERCICIO 6
//Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username),
//retorne {img, name} y pinte la foto y el nombre en el DOM.
/*
function printGithubUserProfile(username1) {
    return fetch('https://api.github.com/users/' + username1) //  HTTP GET todos los productos
    //   fetch("D:\Bridge\RLVM13.json")
        .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
        .then((git) => {
            // Pintar tarjetas con título y precio
            let datos = [`${git.login}, ${git.avatar_url}`];
            console.log(datos);
            return datos;
        }) // Usa los datos en la tarea que necesites

}

printGithubUserProfile("RLVM13").then(data => document.body.innerHTML = JSON.stringify(datos));
printGithubUserProfile().then(data => document.body.innerHTML = JSON.stringify(datos));
*/


//EJERCICIO 7
//Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener
//información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la
//estructura debe ser exactamente la misma:

function getAndPrintGitHubUserProfile(username2) {
    fetch('https://api.github.com/users/' + username2) //  HTTP GET todos los productos
    //fetch("D:\Bridge\RLVM13.json")
        .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
        .then(git => {
            // Pintar tarjetas con título y precio
            let datos = "<section>";
            datos += `<img src="${git.avatar_url}" alt="imagen de usuario">
                        <h1>${git.login}</h1>
                         <p>Public repos: ${git.public_repos}</p>
                    </section>`;
            document.querySelector("main").innerHTML = datos;
            return datos;
        }) // Usa los datos en la tarea que necesites
}

getAndPrintGitHubUserProfile("RLVM13").then(data=>console.log(data))

//EJERCICIO 8
//Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input
//el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función getAndPrintGitHubUserProfile(username)
//que se ejecute cuando se pulse el botón buscar.(Esto no se testea).

document.getElementById("buscar").addEventListener("click", function () {
    alert(document.getElementById("user").value);
    const userboton=(document.getElementById("user").value);
    alert(userboton);
    getAndPrintGitHubUserProfile(userboton)
        .then(data => document.getElementById("gituser").innerHTML = data)
});


//EJERCICIO 9
//Dada una lista de usuarios de github guardada en una array, crea una funcion fetchGithubUsers(userNames) 
//que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
//Objetivo: Usar Promise.all()
//Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
//Pregunta. ¿cuántas promesas tendremos?
/*
function fetchGithubUsers(userNames) {
    const promises = [
        fetch('https://api.github.com/users/')];
        Promise.all(promises)
        .then(results => {
            const prom = results[0];
        })
        .catch(error => {
            // Al menos una promesa fue rechazada 
            console.error(error);
        });
}
*/
