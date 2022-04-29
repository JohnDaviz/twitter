const User = require ('./../../app/models/User')

describe("Unit Test for User class", () => {

    test('Create an User object', () => {
    
        const user = new User(1, "johndaviz", "john", "Bio", "dateCreated", "lastUpdated")

        //Aqui validas los resultados de ese código
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        
      expect(user.id).toBe(1);
      expect(user.username).toBe("johndaviz");
      expect(user.name).toBe("Carlo");
      expect(user.bio).toBe("Bio");
      expect(user.dateCreated).toBe("dateCreated");
      expect(user.lastUpdated).toBe("lastupdated");
    });
  })