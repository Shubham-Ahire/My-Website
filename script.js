const username = 'Shubham-Ahire'; // Your GitHub username

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || 'No description available.'}`;
            repoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));
