function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

        const signInButton = document.getElementById('signInButton')
        const signOutButton = document.getElementById('signOutButton')

        signInButton.style.display = 'block'
        signOutButton.style.display = 'none'

        console.log('User signed out.');
    });
}
signOut()