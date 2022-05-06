const User = require('./../../app/models/User')

describe("Unit Test for User class", () => {

    test('Create an User object', () => {

        const user = new User(1, "johndaviz", "john", "Bio")

        //Aqui validas los resultados de ese código
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)

        expect(user.id).toBe(1);
        expect(user.username).toBe("johndaviz");
        expect(user.name).toBe("john");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('add getters', () => {

        const user = new User(1,"johndaviz", "john", "Bio")
        expect(user.getUsername).toBe("johndaviz");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('add setters', () => {
        const user = new User(1,"johndaviz", "john", "Bio")
        user.username= "johndaviz"
        expect(user.username).toBe("johndaviz")

        user.setBio="New bio"
        expect(user.bio).toBe("New bio")

    })
})