// Set window.SITE_BASE = "../" (etc.) on pages nested inside a subfolder, before site.js loads.
var BASE = typeof window.SITE_BASE === "string" ? window.SITE_BASE : "";

// Edit these to update the social icons everywhere on the site at once.
var SOCIAL_LINKS = {
  scholar: "https://scholar.google.com/citations?user=FaUbdtkAAAAJ&hl=en&oi=ao",
  linkedin: "https://www.linkedin.com/in/aatamgajjar",
  orcid: "https://orcid.org/0009-0004-5035-9078",
  github: "https://github.com/aatamgajjar"
};

var SITE_NAV = [
  { href: "experience.html", label: "Experience", id: "experience" },
  { href: "projects.html", label: "Projects", id: "projects" },
  { href: "publications.html", label: "Publications", id: "publications" },
  { href: "education.html", label: "Education & Skills", id: "education" }
];

function renderHeader(activeId, variant) {
  var isSlim = variant === "slim";
  var navLinks = SITE_NAV.map(function (item) {
    var current = item.id === activeId ? ' aria-current="page"' : "";
    return '<a href="' + BASE + item.href + '"' + current + ">" + item.label + "</a>";
  }).join("\n        ");

  var tagline = isSlim
    ? ""
    : '<p class="tagline">I make industrial and energy systems safer and more efficient, with control theory, data science, and machine learning.</p>';

  var avatar = isSlim
    ? ""
    : '<div class="avatar"><img src="' + BASE + 'assets/img/avatar.jpg" alt="Portrait of Aatam Gajjar"></div>';

  return (
    '<header class="hero' + (isSlim ? " hero-slim" : "") + '">' +
    avatar +
    '<div class="hero-text">' +
    '<div class="hero-top">' +
    "<div>" +
    '<h1><a href="' + BASE + 'index.html">Aatam Gajjar</a></h1>' +
    tagline +
    "</div>" +
    '<div class="icons">' +
    '<a href="' + SOCIAL_LINKS.scholar + '" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 4 2 9l10 5 8-4.4V15" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
    '<a href="' + SOCIAL_LINKS.linkedin + '" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7.5" y1="10" x2="7.5" y2="16.5"/><circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" stroke="none"/><path d="M11.5 16.5V12.8c0-1.4 1-2.3 2.2-2.3s2.1 0.8 2.1 2.3v3.7" stroke-linecap="round"/></svg></a>' +
    '<a href="' + SOCIAL_LINKS.orcid + '" target="_blank" rel="noopener noreferrer" aria-label="ORCID" title="ORCID"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><line x1="8.8" y1="9" x2="8.8" y2="16"/><circle cx="8.8" cy="6.6" r="0.9" fill="currentColor" stroke="none"/><path d="M11.8 9h2.3c2 0 3.4 1.6 3.4 3.5s-1.4 3.5-3.4 3.5h-2.3z" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
    '<a href="' + SOCIAL_LINKS.github + '" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="7" r="2.4"/><circle cx="17" cy="7" r="2.4"/><circle cx="12" cy="17" r="2.4"/><path d="M8.9 8.6 10.4 15.2 M15.1 8.6 13.6 15.2" stroke-linecap="round"/></svg></a>' +
    "</div>" +
    "</div>" +
    '<nav class="primary">\n        ' + navLinks + "\n      </nav>" +
    "</div>" +
    "</header>"
  );
}

function renderFooter() {
  return (
    '<div class="footer-inner">' +
    '<p class="footer-line">Email: <a href="mailto:aatamgajjar11@gmail.com">aatamgajjar11@gmail.com</a></p>' +
    '<p class="footer-line">Always glad to hear from researchers working on similar problems, feel free to reach out about collaborating.</p>' +
    '<p class="footer-disclaimer">Views and opinions on this site are my own and do not represent my employer, past or present.</p>' +
    '<p class="footer-meta">&copy; 2026 Aatam Gajjar &middot; <a href="' + BASE + 'blog/index.html">Blog</a></p>' +
    "</div>"
  );
}

var SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2.2M19.8 12H22M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" stroke-linecap="round"/></svg>';
var MOON_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// True dark state accounts for the OS/browser preference, not just an explicit override.
function isCurrentlyDark() {
  var explicit = document.documentElement.getAttribute("data-theme");
  if (explicit) return explicit === "dark";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function setThemeBtnIcon(btn, isDark) {
  // Icon shown is the mode a click switches TO (moon while light, sun while dark).
  btn.innerHTML = isDark ? SUN_ICON : MOON_ICON;
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function toggleTheme(btn) {
  var root = document.documentElement;
  var next = isCurrentlyDark() ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
  if (btn) setThemeBtnIcon(btn, next === "dark");
}

function toggleBio(btn) {
  var more = btn.closest("section").querySelector(".bio-more");
  var expanded = !more.hidden;
  more.hidden = expanded;
  btn.textContent = expanded ? "Read more" : "Read less";
}

// Draws the settling-curve path in once on load (Home page only). Skips entirely
// under prefers-reduced-motion, leaving the curve fully drawn and static.
function animateSettleCurve() {
  var path = document.getElementById("settle-curve-path");
  if (!path) return;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  var dot = document.getElementById("settle-curve-dot");
  var length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  if (dot) dot.style.opacity = "0";

  // Force a reflow so the browser registers the hidden state before transitioning.
  path.getBoundingClientRect();

  path.style.transition = "stroke-dashoffset 1.4s ease";
  path.style.strokeDashoffset = "0";

  window.setTimeout(function () {
    if (dot) {
      dot.style.transition = "opacity 0.4s ease";
      dot.style.opacity = "1";
    }
  }, 1300);
}

document.addEventListener("DOMContentLoaded", function () {
  var headerMount = document.getElementById("site-header");
  if (headerMount) {
    headerMount.innerHTML = renderHeader(headerMount.getAttribute("data-active"), headerMount.getAttribute("data-variant"));
  }

  var footerMount = document.getElementById("site-footer");
  if (footerMount) {
    footerMount.innerHTML = renderFooter();
  }

  var themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    setThemeBtnIcon(themeBtn, isCurrentlyDark());
  }

  animateSettleCurve();
});
