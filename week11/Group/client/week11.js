import { makeRequest } from './authHelpers.js';
import Auth from './auth.js';

const auth = new Auth();

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
// });

async function getPosts () {
    const data = await makeRequest('posts', 'GET', null, auth.token);
    const stuff = document.querySelector('#stuff');
    stuff.innerHTML = `data`;
    console.log(data);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    auth.login(getPosts)});