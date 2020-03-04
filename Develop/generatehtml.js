const fs = require("fs");

//Loop through the array of objects
const render = function (teamArr) {
    let markup = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>
    </head>
    <body>
  `;
    console.log(teamArr);
    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].role === "Manager") {
            console.log(teamArr[i].name);
            markup += `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${teamArr[i].name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${teamArr[i].id}</li>
        <li class="list-group-item">${teamArr[i].title}</li>
        <li class="list-group-item">${teamArr[i].email}</li>
        <li class="list-group-item">${teamArr[i].role}</li>
        <li class="list-group-item">${teamArr[i].officeNumber}</li>
      </ul>
    </div>`;
        } else if (teamArr[i].role === "Employee") {
            console.log(teamArr[i].name);
            markup += `<div class="card" style="width: 18rem;">
        <div class="card-header">${teamArr[i].name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${teamArr[i].id}</li>
          <li class="list-group-item">${teamArr[i].title}</li>
          <li class="list-group-item">${teamArr[i].email}</li>
          <li class="list-group-item">${teamArr[i].role}</li>
        </ul>
      </div>;`;
        } else if (teamArr[i].role === "Engineer") {
            console.log(teamArr[i].name);
            markup += `<div class="card" style="width: 18rem;">
      <div class="card-header">
      ${teamArr[i].name}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${teamArr[i].id}</li>
        <li class="list-group-item">${teamArr[i].title}</li>
        <li class="list-group-item">${teamArr[i].email}</li>
        <li class="list-group-item">${teamArr[i].role}</li>
        <li class="list-group-item">${teamArr[i].github}</li>
      </ul>
    </div>
    `;
        } else if (teamArr[i].role === "Intern") {
            console.log(teamArr[i].name);
            markup += `<div class="card" style="width: 18rem;">
        <div class="card-header">${teamArr[i].name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${teamArr[i].id}</li>
          <li class="list-group-item">${teamArr[i].title}</li>
          <li class="list-group-item">${teamArr[i].email}</li>
          <li class="list-group-item">${teamArr[i].role}</li>
          <li class="list-group-item">${teamArr[i].school}</li>
        </ul>
      </div>`;
        }
    }
    markup += ` 
  </body>
</html>`;
    console.log(markup);
    return markup;
};

module.exports = render;