const template = team => {
    console.log(team);
    const teamArray = [];
    const manager = team.filter(employee => {
        return employee.getRole() === 'Manager'
    }).map(manager => {
        return ` 
        <div class="card card-1">
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
            <p>ID: ${manager.getId()}</p>
            <p>Email: ${manager.getEmail()}</p>
            <p>Office Number: ${manager.getOffice()}</p>
        </div> 
       
                `
    });
    teamArray.push(manager);
    const engineer = team.filter(employee => {
        return employee.getRole() === 'Engineer'
    }).map(engineer => {
        return `
         <div class="card card-2">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>               
            <p>ID: ${engineer.getId()}</p>
            <p>Email: ${engineer.getEmail()}</p>
            <p>Github: ${engineer.getGithub()}</p>
         </div>
      `
    });
    teamArray.push(engineer)
    const intern = team.filter(employee => {
        return employee.getRole() === 'Intern'
    }).map(intern => {
        return `
        <div class="card card-3">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
            <p>ID: ${intern.getId()}</p>
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
        </div>
        `
    });
    teamArray.push(intern)
    return teamArray.join("")
}
    

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css" >
   
</head>
<body>
    <div class="container">
        <div class="div-transform">
        ${template(team)}
        </div>
    </div>
</body>
</html>`
}