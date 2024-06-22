"use strict";

const tabContainer = document.querySelector(".tab-container");
const cardContainer = document.querySelector(".card-container");
const searchContainer = document.querySelector(".serach-list");
let content = "";
let listContent = "";

//the array container
const container = [
  {
    title: "Account",
    cards: [
      {
        head: "Customer Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "MSP Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "Sales Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
    ],
  },
  {
    title: "Lodings & Contracts",
    cards: [
      {
        head: "Loding Customer Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "Loding MSP Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "Sales Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
    ],
  },
  {
    title: "Management Reports",
    cards: [
      {
        head: "Management Customer Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "Management MSP Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
      {
        head: "Management Sales Reports",
        list: [
          "Customer Genral Reports",
          "Customer Cash Reports",
          "Customer Product Reports",
          "Creditor Customers",
          "Debitor Customers",
          "Customer Payments to MSP",
        ],
      },
    ],
  },
];

//making the list cards

container.forEach((e, i) => {
  tabContainer.innerHTML += `<div class="tab">
    <button class="tablinks" onclick="openCity(event, '${e.title}')">
    <img src="clock.svg" height="22px" style="margin-right:10px">${e.title}
    </button>
  </div>`;
  content = `<div id="${e.title}" class="contain-card">`;
  let card = container[i].cards;
  card.forEach((ec, ic) => {
    content += ` <div class="tabcontent">
        <h4>
        <img
        src="star.svg"11
        height="20px"
        style="background-color: white; padding: 4px; border-radius: 3px"
      />
        ${card[ic].head}</h4><hr width="100%" size="2">
        `;
    let list = card[ic].list;
    list.forEach((el, il) => {
      content += `<p><img src="stars.svg" style="height: 20px; width: 20px"/>
      ${list[il]}</p>`;
    });
    content += `</div>`;
  });
  content += `<div>`;
  cardContainer.innerHTML += content;

  // let cardl = container[i].cards;
  // cardl.forEach((es, is) => {
  //   let selectList = cardl[is].list;
  //   selectList.forEach((esl, isl) => {
  //     console.log(selectList[isl]);
  //     listContent += `<option>${selectList[isl]}</option>`;
  //     searchContainer.innerHTML = listContent;
  //   });
  // });
});

//making the search list for the search section
let options = container.flatMap((e) => e.cards.flatMap((el) => el.list));

for (let i = 0; i < options.length; i++) {
  listContent = `<option><p><img src="stars.svg" style="height: 20px; width: 20px"/>${options[i]}</p></option>`;
  searchContainer.innerHTML += listContent;
  console.log(listContent);
}

//function to change the list by clicking on the title buttons

document.getElementById("Account").style.display = "flex";

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("contain-card");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
