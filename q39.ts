// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(city:string,country:string){
    return `The city name is: ${city}. it is located in: ${country}`;
}
console.log(city_country("Quetta","Pakistan"));
console.log(city_country("Madina","Kingdom of Saudia Arabia"));
console.log(city_country("Dubia","United Arab Emirates"));