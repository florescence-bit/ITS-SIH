document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    // Create a container div
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.height = '100vh';
    container.style.background = '#f5f6fa';

    // Create a heading
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to ITS-SIH!';
    heading.style.color = '#273c75';

    // Create a paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is your new project. Start building something amazing!';
    paragraph.style.color = '#353b48';

    // Append elements
    container.appendChild(heading);
    container.appendChild(paragraph);
    root.appendChild(container);
});