fetch(url, {headers: {'Authorization': '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'}})

function getGithubUsernames() {
    return fetch('https://api.github.com/users/'+userName+"/events/public",
        {headers: {'Authorization': gitHubKey}})
        .then(function(response) {
            return response.json();
        });
}

    getUsersFromGithubAsJSON("Hermannn14")
        .then(function (userData) {
            console.log(userData[0])
        });

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));