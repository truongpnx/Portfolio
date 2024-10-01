// Function to fetch the project card template
function getProjectCardTemplate() {
    return fetch('./html/project_card.html')
        .then(response => response.text())
        .catch(error => console.error('Error loading project card template:', error));
}

// Function to create a project card using the template
function createProjectCard(project) {
    return getProjectCardTemplate().then(template => {
        let cardHTML = template
            .replace(/{name}/g, project.name)                    // Use regex to replace all occurrences
            .replace(/{image}/g, project.image)
            .replace(/{description}/g, project.description)
            .replace(/{technologies}/g, project.technologies)
            .replace(/{link}/g, project.link);
        
        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardHTML;
        return cardElement.firstElementChild; // Return the DOM element
    });
}

// Function to render all projects dynamically
function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    projects.forEach(project => {
        createProjectCard(project).then(card => {
            container.appendChild(card);
        });
    });
}

// Export functions if needed (in case you're using modules)
// export { renderProjects };
