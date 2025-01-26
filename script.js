async function fetchRepository() {
    const url = `https://api.github.com/users/Arymus/repos`;
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

fetchRepository().then(({repository, error}) => {
    if (error) {
        console.error(error); 
    } else {
        displayRepositories(repository);
    };
});

function displayRepositories(repository) {
    repository.forEach((repo) => {
        const repoList = document.createElement("li");
        repoList.classList.add("repoList");
        repoList.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        document.getElementById("repo-list").appendChild(repoList);
        console.log(repository.name);
    });
};