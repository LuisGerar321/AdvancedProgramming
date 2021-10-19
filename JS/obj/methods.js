let user1 = {
        firstName: 'Rafael',
        lastName: 'Rosado',
        age: 25, 
        greeting(greet) {   
                console.log(`${greet} ${this.firstName} ${this.lastName}!\n`);
        }
      };
      user1.greeting("Hi");