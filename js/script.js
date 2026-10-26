const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    const lightThemeEnabled = document.body.classList.toggle('light-theme');
    themeToggle.setAttribute(
        'aria-label',
        lightThemeEnabled ? 'Schakel donker thema in' : 'Schakel licht thema in'
    );
});