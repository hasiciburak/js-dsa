// Language functionality is now in language.js
// Access via window.Language
// Tooltip functionality is also handled in language.js

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const codeBlock = btn.closest('.code-block');
    const pre = codeBlock.querySelector('pre');
    const text = pre.textContent;
    const t = window.Language.translations[window.Language.currentLanguage];

    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = t.buttons.copied;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = t.buttons.copy;
        btn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      btn.textContent = t.buttons.failed;
      setTimeout(() => (btn.textContent = t.buttons.copy), 2000);
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Popup functionality
const helpBtn = document.getElementById('helpBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

function openPopup() {
  popupOverlay.classList.add('show');
  popupOverlay.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  popupOverlay.classList.remove('show');
  popupOverlay.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

helpBtn.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

// Close popup when clicking outside
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popupOverlay.classList.contains('show')) {
    closePopup();
  }
});

// Mobile Menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileMenuBtn || !mobileMenuOverlay) {
    console.warn('Mobile menu elements not found');
    return;
  }

  function openMobileMenu() {
    mobileMenuOverlay.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Expose closeMobileMenu for language.js
  window.closeMobileMenu = closeMobileMenu;

  // Toggle menu on button click
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu when clicking overlay (outside menu)
  mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });

  // Close menu when clicking a navigation link
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
      // Update active state
      const sectionId = link.getAttribute('href').substring(1);
      mobileNavLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Close menu with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuOverlay.getAttribute('aria-hidden') === 'false') {
      closeMobileMenu();
    }
  });
}

// Initialize mobile menu when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
  initMobileMenu();
}

// Update active state for mobile nav links on scroll
function updateActiveMobileNav() {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      mobileNavLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveMobileNav);
updateActiveMobileNav();

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', toggleBackToTop);
toggleBackToTop();

// Theme Management
function getSystemPreference() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function getStoredTheme() {
  return localStorage.getItem('theme');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  const icon = theme === 'light' ? '🌙' : '☀️';
  
  if (themeIcon) {
    themeIcon.textContent = icon;
  }
  if (mobileThemeIcon) {
    mobileThemeIcon.textContent = icon;
  }
  
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  const ariaLabel = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-label', ariaLabel);
    themeToggleBtn.setAttribute('title', ariaLabel);
  }
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.setAttribute('aria-label', ariaLabel);
  }
}

function initTheme() {
  const storedTheme = getStoredTheme();
  const theme = storedTheme || getSystemPreference();
  setTheme(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Initialize theme
initTheme();

// Theme toggle button event listeners
const themeToggleBtn = document.getElementById('themeToggleBtn');
const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

if (mobileThemeToggleBtn) {
  mobileThemeToggleBtn.addEventListener('click', () => {
    toggleTheme();
    // Optionally close mobile menu after theme toggle
    // if (typeof window.closeMobileMenu === 'function') {
    //   window.closeMobileMenu();
    // }
  });
}

// Scroll Progress Bar
const scrollProgressBar = document.querySelector('.scroll-progress-bar');
let ticking = false;

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  
  if (scrollProgressBar) {
    scrollProgressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
  }
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollProgress);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);
updateScrollProgress(); // Initial update

// Language selector functionality is now in language.js
