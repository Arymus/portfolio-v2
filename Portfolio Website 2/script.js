async function fetchRepository(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    let repository = [];
    let error = null;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status.toString());   
        };
        repository = await response.json();
    }

    catch (e) {
        error = "Failed to fetch repositories: " + e.message;
    }
    return {repository, error};
};

const username = "Arymus";
fetchRepository(username).then(({repository, error}) => {
    if (error) {
        console.error(error); 
    } else {
        displayRepositories(repository);
    };
});

function displayRepositories(repository) {
    repository.forEach(function() {
        repoList = document.createElement("li");
    });
};