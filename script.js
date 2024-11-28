// JavaScript to fetch GitHub repositories
document.addEventListener('DOMContentLoaded', function () {
    const repoList = document.getElementById('repo-list');

    // Fetch repositories from GitHub API
    fetch('https://api.github.com/users/Shubham-Ahire/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');
                repoItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : 'No description available'}</p>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => {
            console.error('Error fetching repos:', error);
            repoList.innerHTML = '<p>Failed to load repositories. Please try again later.</p>';
        });
});
