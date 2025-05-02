let data = [
  {
    address: {
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
      firstname: "john",
      lastname: "doe",
    },
    phone: "1-570-236-7033",
  },
  {
    address: {
      city: "kilcoole",
      street: "Lovers Ln",
      number: 7267,
      zipcode: "12926-3874",
    },
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    name: {
      firstname: "david",
      lastname: "morrison",
    },
    phone: "1-570-236-7033",
  },
  {
    address: {
      city: "Cullman",
      street: "Frances Ct",
      number: 86,
      zipcode: "29567-1452",
    },
    id: 3,
    email: "kevin@gmail.com",
    username: "kevinryan",
    password: "kev02937@",
    name: {
      firstname: "kevin",
      lastname: "ryan",
    },
    phone: "1-567-094-1345",
  },
  {
    address: {
      city: "San Antonio",
      street: "Hunters Creek Dr",
      number: 6454,
      zipcode: "98234-1734",
    },
    id: 4,
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    name: {
      firstname: "don",
      lastname: "romer",
    },
    phone: "1-765-789-6734",
  },
  {
    address: {
      city: "san Antonio",
      street: "adams St",
      number: 245,
      zipcode: "80796-1234",
    },
    id: 5,
    email: "derek@gmail.com",
    username: "derek",
    password: "jklg*_56",
    name: {
      firstname: "derek",
      lastname: "powell",
    },
    phone: "1-956-001-1945",
  },
  {
    address: {
      city: "el paso",
      street: "prospect st",
      number: 124,
      zipcode: "12346-0456",
    },
    id: 6,
    email: "david_r@gmail.com",
    username: "david_r",
    password: "3478*#54",
    name: {
      firstname: "david",
      lastname: "russell",
    },
    phone: "1-678-345-9856",
  },
  {
    address: {
      city: "fresno",
      street: "saddle st",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 7,
    email: "miriam@gmail.com",
    username: "snyder",
    password: "f238&@*$",
    name: {
      firstname: "miriam",
      lastname: "snyder",
    },
    phone: "1-123-943-0563",
  },
  {
    address: {
      city: "mesa",
      street: "vally view ln",
      number: 1342,
      zipcode: "96378-0245",
    },
    id: 8,
    email: "william@gmail.com",
    username: "hopkins",
    password: "William56$hj",
    name: {
      firstname: "william",
      lastname: "hopkins",
    },
    phone: "1-478-001-0890",
  },
  {
    address: {
      city: "miami",
      street: "avondale ave",
      number: 345,
      zipcode: "96378-0245",
    },
    id: 9,
    email: "kate@gmail.com",
    username: "kate_h",
    password: "kfejk@*_",
    name: {
      firstname: "kate",
      lastname: "hale",
    },
    phone: "1-678-456-1934",
  },
  {
    address: {
      city: "fort wayne",
      street: "oak lawn ave",
      number: 526,
      zipcode: "10256-4532",
    },
    id: 10,
    email: "jimmie@gmail.com",
    username: "jimmie_k",
    password: "klein*#%*",
    name: {
      firstname: "jimmie",
      lastname: "klein",
    },
    phone: "1-104-001-4567",
  },
];

console.log(data);
let close = document.querySelector("#close");
let cardContainer = document.querySelector(".card-container");
let info = document.querySelector(".info");
for ($i = 0; $i < data.length; $i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  let card_span = document.createElement("span");
  card_span.innerText =
    $i + 1 + ") " + data[$i].name.firstname + " " + data[$i].name.lastname;
  card.appendChild(card_span);
  let fullname = data[$i].name.firstname + " " + data[$i].name.lastname;
  let parent = document.createElement("div");
  Row = document.createElement("p");
  $nm = document.createElement("span");
  $nm.innerHTML = " Data Of " + "<b>" + fullname.toUpperCase() + "</b>";
  $nm.style.fontSize = "20px";

  $nm.style.textAlign = "center";
  parent.appendChild($nm);
  for (key in data[$i]) {
    console.log(key + " : " + data[$i][key]);

    let Row = document.createElement("p");

    if (typeof data[$i][key] === "object") {
      Row.innerHTML = "<b>" + key + ":" + "</b>";
      parent.appendChild(Row);
      for (subkey in data[$i][key]) {
        let Row = document.createElement("p");

        Row.innerText = subkey + " : " + data[$i][key][subkey];
        parent.appendChild(Row);
      }
    } else {
      Row.innerText = key + " : " + data[$i][key];
      parent.appendChild(Row);
    }

    card.addEventListener("click", () => {
      info.style.display = "block";
      info.style.zindex = "100";
      info.appendChild(parent);
    });
    close.addEventListener("click", () => {
      info.removeChild(parent);
      info.style.display = "none";
    });
    cardContainer.appendChild(card);
  }
}
info.style.display = "none";
