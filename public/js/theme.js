const bootswatchBase = "https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist";
const themeSelector = document.getElementById('theme-selector');
const themeStylesheet = document.getElementById('theme-stylesheet');

const currentTheme = localStorage.getItem('theme') || 'sketchy';
themeStylesheet.href = `${bootswatchBase}/${currentTheme}/bootstrap.min.css`;
themeSelector.value = currentTheme;

themeSelector.addEventListener('change', function () {
    const selectedTheme = this.value;
    themeStylesheet.href = `${bootswatchBase}/${selectedTheme}/bootstrap.min.css`;
    localStorage.setItem('theme', selectedTheme);
});