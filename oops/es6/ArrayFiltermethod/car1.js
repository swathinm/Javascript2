let cars = [{ model: "XUV500", Brand: "Mahindra", price: 1500000, color: "White" },
{ model: "BlackBird", Brand: "Tata", price: 1900000, color: "Red" },
{ model: "x5", Brand: "BMW", price: 7500000, color: "Blue" },
{ model: "Swift", Brand: "Maruthi", price: 800000, color: "Rose" },
{ model: "Safari", Brand: "Tata", price: 1800000, color: "White" },
{ model: "Rapid", Brand: "Skoda", price: 1300000, color: "Gray" },
{
    model: "POLO", Brand: "VW", price: 900000, color: "White"
},
{ model: "Tiago", Brand: "Tata", price: 400000, color: "White" },
{ model: "Scorpio N", Brand: "Mahindra", price: 2500000, color: "White" },
{ model: "X1", Brand: "BMW", price: 3500000, color: "Black" },
{ model: "Nexon", Brand: "Tata", price: 1500000, color: "White" }]


//display only white color cars

let new_Cars = cars.filter((car) => {
    return car.color == "Rose"
})
console.log(new_Cars)