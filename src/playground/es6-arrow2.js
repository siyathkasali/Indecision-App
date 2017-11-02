//     name: "Siyath",
//     cites: ['tirunelveli','vizag','bangalore', 'chennai'],
//     persionLived(){
//         return this.cites.map((city)=>  this.name + " Lived in " + city);
//         return placesLived;

//     }
// }

// console.log(obj.persionLived());


const math = {
    numbers: [3,4,5,6,7,8,9],
    multiply: 2,
    mathFunction(){
        return this.numbers.map((e)=> this.multiply * e);
    }
}

console.log(math.mathFunction());