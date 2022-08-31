let GotHouse = [
    "targaryen",
    "stark",
    "greyjoy",
    "mallister",
    "hightower",
    "rayne",
    "lannister",
    "clegane",
    "martell",
    "umber",
    "karstark",
    "tully",
    "tarth",
    "tyrell",
    "arryn",
    "frey",
    "baratheon",
    "blackfyre",
    "bolton",
    "tarly",
    "dondarrion",
    "dayne",
    "manderly",
    "mormont",
    "glover",
    "velarion"
]

function randomWord() {
  return GotHouse[
    Math.floor(Math.random() * GotHouse.length)
  ];
}

export { randomWord };