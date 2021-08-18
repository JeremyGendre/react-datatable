
export interface DataInterface{
    id: number,
    name: string,
    createdAt: Date,
    age: number,
    email: string,
    phone: string
}

export function generateData(number: number) {
    const data:Array<DataInterface> = [];
    for(let i = 0; i < number; i++){
        data.push(generateOneData(i));
    }
    return data;
}

export function generateOneData(id: number): DataInterface{
    return {
        id: id,
        name: `Nametest${id}`,
        email: `nametest${id}@gamil.com`,
        phone: `06 ${getRandomIntArbitrary(10,99)} ${getRandomIntArbitrary(10,99)} ${getRandomIntArbitrary(10,99)} ${getRandomIntArbitrary(10,99)}`,
        age: getRandomInt(80),
        createdAt: new Date(),
    };
}

function getRandomInt(max: number):number {
    return Math.floor(Math.random() * max);
}

function getRandomIntArbitrary(min: number, max:number) {
    return Math.floor(Math.random() * ((max+1) - min) + min);
}