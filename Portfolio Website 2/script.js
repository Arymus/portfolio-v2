async function fetchRepository(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    let repository = [];
    let error = null;

    try {
        const response = fetch(url);
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
    console.log(repository);
    };
});