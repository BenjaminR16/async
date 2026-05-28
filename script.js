
export async function contador(counter) {
    console.log(counter);

    setInterval(() => {
        counter.textContent = parseInt(counter.textContent) + 1
    }, 1000)

    // setTimeout(() => {
    //     alert('ha pasado un segundo')
    // }, 1000)

    // console.log('esta es la promesa: ', await promesa())

}

const parametro = true;
export function promesa() {
    return new Promise((resolve, reject) => {
        if (parametro) {
            resolve('la promesa se ha cumplido')
        } else {
            reject('no existe el parametro')
        }
    })
}

export function lecturaPromesa() {
    promesa()
        .then(response => console.log(response + ' desde lectura'))
        .catch(error => console.log(error))
        .finally(() => console.log('ejecutado'))
}


export async function pokeApi() {
    let contador = 0;
    setInterval(async () => {
        contador++
        const Api = await fetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
        const imgJson = await Api.json()

        const pokeImg = document.getElementById('poke');
        console.log(imgJson.sprites.other['official-artwork'].front_default); //para leer el - del json necesito ['']
        pokeImg.src = imgJson.sprites.other['official-artwork'].front_default;
        if (contador >= 151) {
            contador = 1
        }
    }, 1000)


}
