export function generateUser(userData) {
   // take in formData oject -- return
    return {
        Name: userData.get('name'),
        Avatar: userData.get('avatar'),
        Hungry: 0,
        Full: 0,
        Completed: {}
    };
}

export function setUser(newUser) {
    const userString = JSON.stringify(newUser);
    localStorage.setItem('USER', userString);
}
