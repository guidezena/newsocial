import { v4 as uuid} from "uuid"; //importar no terminal: npm install uuid

const user = {
    name: "Guilherme Dezena",
    username: "Gui_dezena ",
    https:"https://www.viajantecomum.com/wp-content/uploads/2017/04/praia-de-bacutia-1.jpg",
    id: uuid()
}

export function getPost(){
    return {
        id: uuid(),
        user: user,
        text: "Fé",
        https:"https://www.viajantecomum.com/wp-content/uploads/2017/04/praia-de-bacutia-1.jpg",
        likes: 10,
        comments: [{
            user: user,
            text: "Fé!!"
        }, {
            user: user,
            text: "Fé"
        }]
    }
}