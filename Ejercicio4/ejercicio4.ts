// Ejercicio 4: Filtrado y Ordenamiento

// Se entrega un array de objetos que representan usuarios en una plataforma, cada uno con nombre, 
// email y rol. 

// Se solicita implementar una función en TypeScript que filtre eficientemente los usuarios 
// según su rol y ordene el resultado alfabéticamente. 

type User = {
    name: string;
    email: string;
    role: string;
};

// Array
const users : User[] = [
  { name: "Andrea López", email: "andrea.lopez@example.com", role: "admin" },
  { name: "Carlos Pérez", email: "carlos.perez@example.com", role: "user" },
  { name: "Beatriz Gómez", email: "beatriz.gomez@example.com", role: "moderator" },
  { name: "Daniela Ruiz", email: "daniela.ruiz@example.com", role: "user" },
  { name: "Eduardo Sánchez", email: "eduardo.sanchez@example.com", role: "admin" },
  { name: "Fernando Castro", email: "fernando.castro@example.com", role: "user" },
  { name: "Gabriela Mendoza", email: "gabriela.mendoza@example.com", role: "moderator" },
  { name: "Héctor Jiménez", email: "hector.jimenez@example.com", role: "user" },
  { name: "Isabela Torres", email: "isabela.torres@example.com", role: "admin" },
  { name: "Jorge Ramírez", email: "jorge.ramirez@example.com", role: "moderator" }
];


function getUsersByRole(users: User[], role: string): User[] {
    
    //filter by role
    const filteredUsers = users.filter(user => user.role === role);
    
    // sort by name
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
    
    return sortedUsers;
}
  

  // Use
  const role = "user"; 
  const result = getUsersByRole(users, role);
  
  console.log(`Usuarios con rol "${role}":`);
  console.log(result);