export const createTableQuery = `
CREATE TABLE employee_details (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    salary NUMERIC(10, 2) NOT NULL,
    hire_date DATE NOT NULL
)`;

export const SelectAllEmployeesQuery = "SELECT * FROM employee_details";
export const SelectEmpById = "SELECT * FROM employee_details WHERE id = $1";
export const DeleteEmp = "DELETE FROM employee_details WHERE id = $1 ";


export const SelectAllAdvice = "SELECT * FROM tbadvice";
export const InsertAdvice = `
    INSERT INTO tbadvice
    (name, title, phone, email, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
`;