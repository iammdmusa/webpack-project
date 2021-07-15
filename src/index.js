import "./styles/indext.scss";

const musaShieldRecipe = {
   leatherStrips : 2,
   ironIngot: 1,
   refinedMoonst: 4,
}

const musaGauntletasRecipe = {
    ...musaShieldRecipe,
    leather: 10,
    refinedMoonst:9
}

const helloArne = {
    hello: "Hello",
}
console.log(musaShieldRecipe);

console.log(musaGauntletasRecipe, helloArne);