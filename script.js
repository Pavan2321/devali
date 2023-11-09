let username;
const userNameTag = document.getElementById("name");
const quoteTag = document.getElementById("quote");

username = prompt("Enter your name");

const capName = username.split(" ");
for (var i = 0; i < capName.length; i++) {
  capName[i] = capName[i].charAt(0).toUpperCase() + capName[i].slice(1);
}



diwaliQuotes = [
  "Shine like sparkles, glow like candles, and burn all the negativity like crackles. Wish you all a very lovely & cheerful Diwali!",

  "May your home be filled with good vibes and an intensively positive aura as we celebrate the Diwali festival.",

  "Let us light so many lamps that there is no dark corner left on the inside or on the outside. Wishing a joyous and prosperous Diwali to all.",

  "May the colors of rangoli be full of colors of happiness, success, and health for all of us. Happy Diwali to all.",

  "I hope that the flaming sparks of the lamps of Diwali which burn like a shooting star, guide your way through your dreams.",

  "May every aspect of your life become as luminous and exciting as the lights flickering on the lamps in the festival of lights.",

  "As the holy occasion of Diwali is here and the atmosphere is filled with the spirit of mirth and love, here’s hoping this festival of beauty brings your way.",

  "May every candle, that will be lit on the evening of Diwali, bring joy and prosperity to everyone.",

  "Diwali is about setting goals, not accumulating gold. As Lakshmi comes from Lakshya or goal. Happy Diwali!",

  "The lights of Diwali are bringers of good health, long life, and good luck. May you celebrate this occasion so that you will attain all of these good things.",

  " Open your main entrance door and welcome Goddess Lakshmi wholeheartedly. I hope she will fulfill all your dreams. Wish you a very happy and wealthy Diwali.",

  " Separated by distance, joined by hearts. Sending you Diwali wishes, from miles apart. Have a happy and safe Diwali!",

  " May the fire at the wick of the candle at the festival of lights warm up the world to relieve the coldness brought by wars, disputes, and disasters.",

  " As you walk the path of life, may the lights of Diwali dance like fireflies in your dark days, so that they will help you get through till you find the sunshine.",

  " Another year will be over, another year will come. I hope and pray that the lights of Diwali illuminate the new chapter of your life.",
];

let randomNumber = Math.ceil(Math.random() * 10)

userNameTag.innerText = capName.join(" ");
console.log(diwaliQuotes[randomNumber]);
quoteTag.innerText = "\"" + diwaliQuotes[randomNumber] + "\""