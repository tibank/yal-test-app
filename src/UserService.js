class UserService {

    static getUsers() {
        const COUNT_LETTER = 26;
        const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const users = [];

        for (let i = 0; i < COUNT_LETTER; i++ ) {
            users.push([])
        }

        return fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then((res) => res.json())
            .then(
                (result) => {
                    for (let i = 0; i < result.length; i++) {
                        let index = ALPHABET_UPPER.indexOf(result[i].firstName[0].toUpperCase())
                        users[index].push(result[i])
                    }
                    return users;
                }
            );
    }
}

export default UserService;
