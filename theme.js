/* -------------------------------------------------------
   Theme switcher — white (light) is the default; users can
   toggle to dark. The choice is saved in localStorage and
   applied on every page before paint to avoid a flash.
------------------------------------------------------- */
(function () {
    // Apply the saved theme as early as possible (this file is
    // loaded synchronously in <head>, so it runs before the body paints).
    var saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    if (!nav) return;

    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle light/dark theme');

    function paintIcon() {
        var theme = document.documentElement.getAttribute('data-theme');
        // Show the icon of the theme you'd switch TO.
        btn.innerHTML = theme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    }

    paintIcon();

    btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        paintIcon();
    });

    nav.appendChild(btn);
});
