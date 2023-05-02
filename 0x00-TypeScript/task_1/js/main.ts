// Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  // Creating teacher objects
  const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: true
  };
  
  const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "Los Angeles",
    salary: 50000
  };
  
  const teachersList: Teacher[] = [teacher1, teacher2];
  
  // Rendering table with teachers data
  const table = document.createElement("table");
  const tableHead = table.createTHead();
  const tableHeadRow = tableHead.insertRow();
  const headers = ["First Name", "Last Name", "Full Time Employee", "Years of Experience", "Location"];
  headers.forEach(header => {
    const th = document.createElement("th");
    th.innerText = header;
    tableHeadRow.appendChild(th);
  });
  
  const tableBody = table.createTBody();
  teachersList.forEach(teacher => {
    const tr = document.createElement("tr");
    Object.values(teacher).forEach(value => {
      const td = document.createElement("td");
      td.innerText = String(value);
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
  
  document.body.appendChild(table);

interface Directors extends Teacher {
    numberOfReports: number;
  }

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework() {
      return "Currently working";
    }
  
    displayName() {
      return this.firstName;
    }
  }
  