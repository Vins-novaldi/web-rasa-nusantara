// -------------- vagabond

// ---------navbar menu
const nav = document.querySelector(".nav");

document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// jbjjb

const playVid = document.querySelector(".putar-vidio");
document.querySelector("#putar1").onclick = () => {
  playVid.classList.toggle("active");
};
document.querySelector("#kembali1").onclick = () => {
  playVid.classList.remove("active")
}


const playVid2 = document.querySelector(".putar-vidio2");
document.querySelector("#putar2").onclick = () => {
  playVid2.classList.toggle("active");
};
document.querySelector("#kembali2").onclick = () => {
  playVid2.classList.remove("active")
}


const playVid3 = document.querySelector(".putar-vidio3");
document.querySelector("#putar3").onclick = () => {
  playVid3.classList.toggle("active");
};
document.querySelector("#kembali3").onclick = () => {
  playVid3.classList.remove("active")
}



const add = document.querySelector(".add");
const iconAdd = document.getElementById("iconAdd")
add.onclick = () => {
  add.classList.toggle("active");

  if (iconAdd.className == "fa-regular fa-bookmark") {
    iconAdd.className = "fa-solid fa-bookmark";
  } else {
    iconAdd.className = "fa-regular fa-bookmark";
  }
};

const like = document.querySelector(".like");
const iconLike = document.getElementById("iconLike");
like.onclick = () => {
  like.classList.toggle("active")
  if (iconLike.className == "fa-regular fa-thumbs-up") {
    iconLike.className = "fa-solid fa-thumbs-up";
  } else {
    iconLike.className = "fa-regular fa-thumbs-up";
  }
};


const done = document.querySelector(".donee");

done.onclick = () => {
  done.classList.toggle("active");
};




