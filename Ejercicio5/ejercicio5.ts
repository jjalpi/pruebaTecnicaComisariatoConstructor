// Ejercicio 5: Refactorización de Código
// Revisa y refactoriza el siguiente código para mejorar su eficiencia, legibilidad y mantenibilidad:

// class UserService {
//     private users: any[] = [];
//     private lastId: number = 0;
  
//     constructor() {
//       this.users = [
//         { id: 1, name: "Andrea", role: "admin", isActive: true },
//         { id: 2, name: "Carlos", role: "user", isActive: false },
//         { id: 3, name: "Beatriz", role: "moderator", isActive: true },
//         { id: 4, name: "Daniela", role: "user", isActive: true }
//       ];
//       this.lastId = this.users.length;
//     }
  
//     getUser(id: number): any {
//       for (let i = 0; i < this.users.length; i++) {
//         if (this.users[i].id === id) {
//           return this.users[i];
//         }
//       }
//       return null;
//     }
  
//     getUsersByRole(role: string): any[] {
//       let result = [];
//       for (let i = 0; i < this.users.length; i++) {
//         if (this.users[i].role == role) {
//           result.push(this.users[i]);
//         }
//       }
//       return result;
//     }
  
//     deleteUser(id: number): void {
//       for (let i = 0; i < this.users.length; i++) {
//         if (this.users[i].id === id) {
//           this.users.splice(i, 1);
//         }
//       }
//     }
  
//     addUser(user: any): void {
//       if (user.id && user.name && user.role) {
//         this.users.push(user);
//       }
//     }
  
//     activateUser(id: number): void {
//       let user = this.getUser(id);
//       if (user) {
//         user.isActive = true;
//       }
//     }
  
//     deactivateUser(id: number): void {
//       let user = this.getUser(id);
//       if (user) {
//         user.isActive = false;
//       }
//     }
  
//     getActiveUsers(): any[] {
//       let activeUsers = [];
//       for (let i = 0; i < this.users.length; i++) {
//         if (this.users[i].isActive) {
//           activeUsers.push(this.users[i]);
//         }
//       }
//       return activeUsers;
//     }
//   }


//Refactorización

// el tipado fuerte de User, ayuda a definir de manera clara la estrucutura
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'moderator';
  isActive: boolean;
}
  
class UserService {
  // se quito any, mejora la declaracion de tipos
  private users: User[];
  private lastId: number;
  
  constructor() {
    this.users = [
      { id: 1, name: "Andrea", role: "admin", isActive: true },
      { id: 2, name: "Carlos", role: "user", isActive: false },
      { id: 3, name: "Beatriz", role: "moderator", isActive: true },
      { id: 4, name: "Daniela", role: "user", isActive: true }
    ];
    this.lastId = Math.max(...this.users.map(user => user.id), 0);
    //se corrige y se selecciona el ultimo mayor id
  }

  // se usa find para codigo mas expresivo y conciso
  getUser(id: number): User | null {
    return this.users.find(user => user.id === id) ?? null;
  }

  // se usa filter para codigo mas expresivo y conciso
  getUsersByRole(role: string): User[] {
    return this.users.filter(user => user.role === role);
  }

  // no uso de splice, Uso de filter para crear nuevo array (sin el objeto.id = id) para evitar errores
  deleteUser(id: number): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    return this.users.length !== initialLength;
  }

  // validación de los tipos de User, Uso de Omit para que id, isActive no sean necesarios
  addUser(userData: Omit<User, 'id' | 'isActive'>): User {
    const newUser: User = {
      ...userData,
      id: ++this.lastId,
      isActive: true
    };
    this.users.push(newUser);
    return newUser;
  }

  //union de metodos de misma lógica
  activateDeactivateUserStatus(id: number, activate: boolean): boolean {
    const user = this.getUser(id);
    if (user) {
      user.isActive = activate;
      return true;
    }
    return false;
  }

  // se usa filter para codigo mas expresivo y conciso
  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }


}


