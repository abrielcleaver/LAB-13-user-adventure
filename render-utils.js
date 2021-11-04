// import getUser from ./utils.js
import { getUser } from './utils.js';

export function loadProfile(){
    // grab user info from LS
    const user = getUser();
    // update DOM w/user info
  // const img = document.getElementById('user-image');
//   img.src = `../assets/${user.avatar}.png`;
    const name = document.getElementById('user-name');
    name.textContent = user.name;
    const hungry = document.getElementById('user-hungry');
    hungry.textContent = user.hungry;
    const full = document.getElementById('user-full');
    full.textContent = user.full;
}