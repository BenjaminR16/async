
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

const parametro = false;
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
