const rooms = [
  {
    name: "Habitacion Standard",
    price: "$100",
    image: "../resources/images/standard.jpg",
  },
  {
    name: "Habitacion Deluxe",
    price: "$200",
    image: "../resources/images/deluxe.jpg",
  },
  {
    name: "Suite",
    price: "$300",
    image: "../resources/images/suite.jpg",
  },
];

const roomCards = rooms.map((room) => {
  return `
    <div class="card">
      <img src="${room.image}" class="card-img-top" alt="${room.name}" />
      <div class="card-body">
        <h5 class="card-title">${room.name}</h5>
        <p class="card-text">Price: ${room.price}</p>
        <a href="#" class="btn btn-primary">Book Now</a>
      </div>
    </div>
  `;
});

const roomContainer = document.getElementById("roomContainer");
roomContainer.innerHTML = `
  <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
    ${roomCards.join("")}
  </div>
`;
