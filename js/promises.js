// fetch(url, {headers: {'Authorization': 'gitHubKey'}})

function getGithubUsernames() {
    return fetch('https://api.github.com/users/'+userName+"/events/public",
        {headers: {'Authorization': gitHubKey}})
        .then(function(response) {
            return response.json();
        });
}

    getUsersFromGithubAsJSON("Herman-M-Bimikwe")
        .then(function (userData) {
            console.log(userData[0])
        });