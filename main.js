function onSignIn(googleUser) {

    const signInButton = document.getElementById('signInButton')
    const signOutButton = document.getElementById('signOutButton')

    if (onclick(onSignIn())) {
        signInButton.style.display = 'none'
        signOutButton.style.display = 'block'
    } else {
        signInButton.style.display = 'block'
        signOutButton.style.display = 'none'
    }

    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
onSignIn()
