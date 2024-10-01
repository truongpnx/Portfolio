function getLicenseCardTemplate() {
    return fetch('../html/license_card.html') // Ensure the path is correct
        .then(response => response.text())
        .catch(error => console.error('Error loading license card template:', error));
}

function createLicenseCard(license) {
    return getLicenseCardTemplate().then(template => {
        let cardHTML = template
            .replace(/{name}/g, license.name)
            .replace(/{description}/g, license.description)
            .replace(/{link}/g, license.link);

        const cardElement = document.createElement('div');
        cardElement.innerHTML = cardHTML;
        return cardElement.firstElementChild;  // Return the DOM element
    });
}

function renderLicenses(licenses, containerId) {
    const container = document.getElementById(containerId);
    licenses.forEach(license => {
        createLicenseCard(license).then(card => {
            container.appendChild(card);
        });
    });
}
