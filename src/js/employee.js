export default (id, employee_name, employee_salary, employee_age) => {

    let template = `
        <li class="country-card">
           <div class="country-data">
            <div class="country-data">
                <h3 class="country-name">${employee_name}</h3>
                <h4 class="continent-name">Id : ${id}</h4>
                <h4 class="continent-name">Employee salary : ${employee_salary}</h4>
                <h4 class="continent-name">Employee age : ${employee_age}</h4>
            </div>
            </div>
        </li>
    `
    return template;
}