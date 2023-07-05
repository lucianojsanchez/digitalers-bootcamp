//-------------------------------------//

const multiplicationTable = () => {
  let table = "";
  let i = 1;

  while (i <= 10) {
    let result = 10 * i;
    table += `10 * ${i} = ${result}<br>`;
    i++;
  }

  document.getElementById("tableContainer").innerHTML = table;
};

//------------------------------//

const promptUserAlert = () => {
  let name = prompt("Ingresa tu nombre completo");
  let age = prompt("Ingresa tu edad");
  let salary = prompt("Ingresa tu sueldo");
  let bonus = prompt("Ingresa tu bonus de este mes");
  let salaryNum = parseInt(salary);
  let bonusNum = parseFloat(bonus);
  let result = salaryNum + bonusNum;

  if (name !== null && age !== null && result !== null) {
    alert(
      "El nombre de usuario es " +
        name +
        " ,tienes " +
        age +
        " años y tu sueldo es de " +
        result +
        " por mes"
    );
    document.getElementById("promptUser").innerHTML =
      "El nombre del usuario es " +
      name +
      " y tiene " +
      age +
      " años y cobra " +
      result +
      " por mes";
  }
};

//-------------------------------------//

const puntoDeEquilibrio = () => {
  let costoFijo = parseInt(document.getElementById("costosFijos").value);
  let precioDeVenta = parseInt(document.getElementById("preciosDeVenta").value);
  let costosVariables = parseInt(
    document.getElementById("costoVariable").value
  );

  let result = costoFijo / (precioDeVenta - costosVariables);

  alert("Punto de equilibrio: " + result);
};

//-------------------------------//

const presupuestoPersonal = () => {
  let numero = parseInt(prompt("Ingresa la cantidad de dinero total"));
  let porcentaje1 = 0.5;
  let porcentaje2 = 0.3;
  let porcentaje3 = 0.2;

  let gastos = numero * porcentaje1;
  let gastosOpcionales = numero * porcentaje2;
  let inversion = numero * porcentaje3;

  if (numero > 0) {
    alert(
      "Dedicar " +
        gastos +
        "$ a los gastos necesarios, unos " +
        gastosOpcionales +
        "$ a gastos opcionales y unos " +
        inversion +
        "$ a reinvertir."
    );
  }
};

//-------------------------------//

const roleConditional = () => {
  let rol = prompt("Cual es tu rol?");

  if (rol === "Admin" || rol === "Recursos") {
    let clave = parseInt(prompt("Clave"));
    if (clave === 1234) {
      let user = prompt("Cual es tu nombre completo?");
      document.getElementById("role").innerHTML =
        "Hola " + user + " Bienvenido";
      employees();
    }
  } else {
    document.getElementById("role").innerHTML =
      "Hubo un error hablar con soporte";
  }
};

//------------------------------------//

const employees = () => {
  let employeesArray = [
    { name: "Juan", surname: "Pérez", age: 30 },
    { name: "María", surname: "Gómez", age: 35 },
    { name: "Pedro", surname: "López", age: 28 },
  ];
  const table = document.getElementById("employeesTable");

  for (let i = 0; i < employeesArray.length; i++) {
    let employee = employeesArray[i];

    let row = table.insertRow();

    let nameCell = row.insertCell();
    let surnameCell = row.insertCell();
    let ageCell = row.insertCell();

    nameCell.textContent = employee.name;
    surnameCell.textContent = employee.surname;
    ageCell.textContent = employee.age;
  }
};

//----------------------------------------------//

const flow = () => {
  let flowArray = [
    { periodo: "Enero", ingreso: 1500, egreso: 1500 },
    { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
    { periodo: "Marzo", ingreso: 84683, egreso: 1155 },
    { periodo: "Abril", ingreso: 135353, egreso: 1533 },
    { periodo: "Mayo", ingreso: 1535, egreso: 5434 },
    { periodo: "Junio", ingreso: 4343354, egreso: 5434543 },
    { periodo: "Julio", ingreso: 435453, egreso: 4543 },
    { periodo: "Agosto", ingreso: 78351, egreso: 7816 },
    { periodo: "Septiembre", ingreso: 1878, egreso: 95634 },
    { periodo: "Octubre", ingreso: 48483, egreso: 9433 },
    { periodo: "Noviembre", ingreso: 35483, egreso: 53133 },
    { periodo: "Diciembre", ingreso: 3843, egreso: 348133 },
  ];

  let flowTable = document.getElementById("flowTable");

  for (i = 0; i < flowArray.length; i++) {
    let flow = flowArray[i];

    let row = flowTable.insertRow();

    let periodoCell = row.insertCell();
    let ingresoCell = row.insertCell();
    let egresoCell = row.insertCell();

    periodoCell.textContent = flow.periodo;
    ingresoCell.textContent = flow.ingreso;
    egresoCell.textContent = flow.egreso;

    if (flow.ingreso > flow.egreso) {
      periodoCell.classList.add("text-success");
    } else if (flow.ingreso < flow.egreso) {
      periodoCell.classList.add("text-danger");
    } else if (flow.ingreso === flow.egreso) {
      periodoCell.classList.add("text-warning");
    }
  }
};

//-----------------------------------------------//

const intereses = () => {
  const planesArray = [
    {
      nombre: "Plan 001",
      capital: 150000,
      plazo: 30,
      tasa: 0.15,
    },
    {
      nombre: "Plan 002",
      capital: 300000,
      plazo: 180,
      tasa: 0.1,
    },
    {
      nombre: "Plan 003",
      capital: 485000,
      plazo: 60,
      tasa: 0.23,
    },
  ];

  let arr = [];
  for (let i = 0; i < planesArray.length; i++) {
    let plan = planesArray[i];
    let interes = (plan.capital * plan.tasa * plan.plazo) / 100;
    let obj = {
      nombre: plan.nombre,
      interes: interes,
    };
    arr.push(obj);
  }
};

//-------------------------------------------------//

// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");

// const valor1 = btn1.textContent;
// const valor2 = btn2.textContent;
// const valor3 = btn3.textContent;
// const valor4 = btn4.textContent;

// btn1.addEventListener("click", () => {
//   alert("El boton es de color: " + valor1);
// });
// btn2.addEventListener("click", () => {
//   alert("El boton es de color: " + valor2);
// });
// btn3.addEventListener("click", () => {
//   alert("El boton es de color: " + valor3);
// });
// btn4.addEventListener("click", () => {
//   alert("El boton es de color: " + valor4);
// });

const buttonIds = ["btn1", "btn2", "btn3", "btn4"];
const colorIsElement = document.getElementById("colorIs");

for (let i = 0; i < buttonIds.length; i++) {
  const btn = document.getElementById(buttonIds[i]);
  const value = btn.textContent.toLowerCase();
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

  btn.addEventListener("click", () => {
    alert("El boton es de color: " + capitalizedValue);
    colorIsElement.innerHTML = "El color es: " + capitalizedValue;

    colorIsElement.classList.remove(
      "bg-danger",
      "bg-success",
      "bg-primary",
      "bg-warning"
    );

    switch (value) {
      case "rojo":
        colorIsElement.classList.add("bg-danger");
        break;
      case "verde":
        colorIsElement.classList.add("bg-success");
        break;
      case "azul":
        colorIsElement.classList.add("bg-primary");
        break;
      case "amarillo":
        colorIsElement.classList.add("bg-warning");
        break;
      default:
        alert("Color desconocido");
        colorIsElement.innerHTML = "Color desconocido";
        break;
    }
  });
}
//----------------------------------------------------------------//
let arr = [];

const formTableBody = document.getElementById("formTableBody");

const formToArray = () => {
  let name = document.getElementById("nombre").value;
  let surname = document.getElementById("apellido").value;
  let age = parseInt(document.getElementById("edad").value);

  let object = {
    name,
    surname,
    age,
  };

  let newRow = formTableBody.insertRow();

  let nameCell = newRow.insertCell();
  let surnameCell = newRow.insertCell();
  let ageCell = newRow.insertCell();

  nameCell.textContent = object.name;
  surnameCell.textContent = object.surname;
  ageCell.textContent = object.age;
};

const button = document.getElementById("btnForm");
button.addEventListener("click", formToArray);

//-----------------------------//

multiplicationTable();
flow();
