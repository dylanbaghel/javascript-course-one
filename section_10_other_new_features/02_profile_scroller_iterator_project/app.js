const data = [
    {
        name: 'Abhishek Baghel',
        age: 19,
        gender: 'male',
        lookingFor: 'female',
        location: 'Gwalior MP',
        image: 'https://baghel.netlify.app/static/about_profile-c688002af7c9ac37c268438ec9ed48e1.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    }
];

function profileIterator(...profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

const profiles = profileIterator(...data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" />`;
    } else {
        window.location.reload();
    }
}