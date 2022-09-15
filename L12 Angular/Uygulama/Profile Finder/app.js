const profile = new Profile();
const UI = new ui();
const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup', (event) => {
    ui.clear();
    let text = event.target.value;

    if (text !== '') {
        profile.getProfile(text).then(res => {
            if (res.profile.length === 0) {
                UI.showAlert('No Profile Found', 'alert alert-danger');
            } else {
                UI.showProfile(res.profile[0]);

            }
        });
    }

});