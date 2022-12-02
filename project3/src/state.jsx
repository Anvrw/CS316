export const users = [
    {
        username: 'test2',
        email: 'test2@example.com',
        password: '123',
        phone: '1231231234'
    }
];

export function changeUser(i){
    currUser = users[i]
}

export let currUser = users[0];