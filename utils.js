export function generateUser(userData) {
   // take in formData oject -- return
    return {
        Name: userData.get('name'),
        Avatar: userData.get('avatar'),
        Blings: 0,
        Lives: 0,
        Completed: {}
    };
}

export function setUser() {

}
