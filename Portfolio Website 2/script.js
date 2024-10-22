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

    catch (e) { // What is e?
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
    const repoList = document.getElementById('repo-list');
    repository.forEach(repo => {
        const listItem = document.createElement('li');
        listItem.textContent = repo.name;
        repoList.appendChild(listItem);
    });
};

function linkRepositories(repository) {
    const repoURL = `https://github.com/${username}/${repository}`;
    repository.forEach(function(repoURL) {
        const repoLink = document.createElement("a");
        repoLink.href = repoURL;
        repoLink.textContent = repository.name;
        listItem.appendChild(repoLink);
    })
};