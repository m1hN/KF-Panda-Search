// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", btnThemeClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statement - Test the Input
  if (name == "po" || name == "dragon warrior" || name == "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name == "tigress" || name == "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name == "mantis" || name == "master mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name == "monkey" || name == "master monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  } else if (name == "viper" || name == "master viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImgEl.src = "img/viper.png";
  } else if (name == "crane" || name == "master crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImgEl.src = "img/crane.png";
  } else if (name == "croc" || name == "master croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    charImgEl.src = "img/croc.png";
  } else if (name == "boss wolf" || name == "wolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML = "Chew on that, tubby!";
    charImgEl.src = "img/boss-wolf.png";
  } else if (
    name == "kai" ||
    name == "general kai" ||
    name == "the collector"
  ) {
    charNameEl.innerHTML = "General Kai";
    charQuoteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    charImgEl.src = "img/kai.png";
  } else if (name == "oogway" || name == "master oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "You are too concerned with what was and what will be. There's a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImgEl.src = "img/oogway.png";
  } else if (name == "mr ping" || name == "ping") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteEl.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImgEl.src = "img/mr-ping.png";
  } else if (name == "shen" || name == "master shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "You think knowing will heal you, huh? Fill some... crater in your soul. Well, here's your answer. Your parents didn't love you. But here... let me heal you";
    charImgEl.src = "img/shen.png";
  } else if (name == "shifu" || name == "master shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    charImgEl.src = "img/shifu.png";
  } else if (name == "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "We shall see, Shen.";
    charImgEl.src = "img/soothsayer.png";
  } else if (
    name == "storming ox" ||
    name == "master storming ox" ||
    name == "ox"
  ) {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    charImgEl.src = "img/storming-ox.png";
  } else if (name == "tai lung" || name == "master tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Fly back there and tell them... the real Dragon Warrior is coming home.";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "-----------";
    charImgEl.src = "img/question-mark.png";
  }
}

function btnThemeClicked() {
  let value = document.getElementById("theme-in").value.toLowerCase();

  if (value == "black" || value == "dark") {
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
    document.getElementById("text").style.color = "white";
    console.log("hi");
  }

  if (value == "white" || value == "light") {
    document.getElementById("body").style.background = "rgba(255,255,255, 0.7)";
    document.getElementById("text").style.color = "black";
  }

  if (value == "random") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.background = "#" + randomColor;
    document.getElementById("text").style.color = "#" + randomColor2;
  }

  let number = Math.floor(Math.random() * 16777215).toString(16); // 23a67b  >> #23a67b

  // create 3 random numbers from 1 - 255
  document.getElementById(
    "thing"
  ).style.color = `rgb(${rand1}, ${rand2}, ${rand3})`;
  console.log(number);
}
