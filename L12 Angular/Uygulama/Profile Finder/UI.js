class ui {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.allert = document.querySelector('#allert');
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                    <a href="https://placeholder.com/"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                        <div class ="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                                ${profile.name}
                            </li>
                            <li class="list-group-item">
                                ${profile.username}
                            </li>
                            <li class="list-group-item">
                                ${profile.email}
                            </li>
                            <li class="list-group-item">
                                ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                ${profile.phone}
                            </li>
                            <li class="list-group-item">
                                ${profile.website}
                            </li>
                            <li class="list-group-item">
                                ${profile.company.name}
                            </li>
                            </ul>                       
                        </div>
                </div>
            </div>
        
        
        `;
    }

    showProfile(text) {
        this.allert.innerHTML = `${text} is found.`;
    }
    clear() {
        this.profileContainer.innerHTML = "";
        this.allert.innerHTML = "";
    }

}