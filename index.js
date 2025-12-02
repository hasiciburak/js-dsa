// Language functionality is now in language.js
// Access via window.Language

// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

let tooltipTimeout = null;
let hideTooltipTimeout = null;
let currentElement = null;

// Function to get method name from element
function getMethodName(element) {
  const text = element.textContent.trim();

  // Get the parent pre element to check context
  const pre = element.closest('pre');
  if (!pre) return text;

  // Get all text up to this element
  const range = document.createRange();
  range.setStart(pre, 0);
  range.setEnd(element, 0);
  const beforeText = range.toString();

  // Check for Object., Math., Number., Array. prefixes
  const match = beforeText.match(/(Object|Math|Number|Array)\.\s*$/);
  if (match) {
    return match[1] + '.' + text;
  }

  // Check for "new Map" or "new Set"
  if (text === 'Map' || text === 'Set') {
    const newMatch = beforeText.match(/new\s+$/);
    if (newMatch) {
      return text;
    }
  }

  return text;
}

// Function to show tooltip
function showTooltip(element, methodName) {
  const methodDocs = window.currentMethodDocs || window.Language.getMethodDocs('en');
  const doc = methodDocs[methodName];
  if (!doc) return;

  const t = window.Language.translations[window.Language.currentLanguage];
  const mdnText = window.Language.currentLanguage === 'tr' ? "MDN'de Görüntüle" : 'View on MDN';

  const rect = element.getBoundingClientRect();
  tooltip.innerHTML = `
        <div class="tooltip-title">${methodName}()</div>
        <div class="tooltip-desc">${doc.desc}</div>
        <a href="${doc.mdn}" target="_blank" rel="noopener noreferrer" class="tooltip-link">${mdnText}</a>
      `;

  // Position tooltip with smaller gap for easier mouse movement
  const tooltipRect = tooltip.getBoundingClientRect();
  let top = rect.top - tooltipRect.height - 4;
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

  // Adjust if tooltip goes off screen
  if (top < 0) {
    top = rect.bottom + 4;
  }
  if (left < 0) {
    left = 8;
  } else if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 8;
  }

  tooltip.style.top = `${top + window.scrollY}px`;
  tooltip.style.left = `${left}px`;
  tooltip.classList.add('show');
}

// Function to hide tooltip with delay
function hideTooltip(delay = 100) {
  if (hideTooltipTimeout) {
    clearTimeout(hideTooltipTimeout);
  }
  hideTooltipTimeout = setTimeout(() => {
    tooltip.classList.remove('show');
    currentElement = null;
  }, delay);
}

// Keep tooltip visible when hovering over it
tooltip.addEventListener('mouseenter', () => {
  if (hideTooltipTimeout) {
    clearTimeout(hideTooltipTimeout);
    hideTooltipTimeout = null;
  }
});

tooltip.addEventListener('mouseleave', () => {
  hideTooltip(100);
});

// Add event listeners to function and property elements
document.querySelectorAll('.function, .property').forEach((el) => {
  const methodName = getMethodName(el);
  const methodDocs = window.currentMethodDocs || window.Language.getMethodDocs('en');

  if (methodDocs[methodName]) {
    el.addEventListener('mouseenter', (e) => {
      // Don't show tooltip if hovering over copy button
      if (e.target.closest('.copy-btn')) return;

      // Clear any existing timeouts
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
      }
      if (hideTooltipTimeout) {
        clearTimeout(hideTooltipTimeout);
        hideTooltipTimeout = null;
      }

      currentElement = el;

      // Show tooltip after a short delay
      tooltipTimeout = setTimeout(() => {
        showTooltip(el, methodName);
      }, 300);
    });

    el.addEventListener('mouseleave', () => {
      if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = null;
      }
      // Don't hide immediately - give time to move to tooltip
      hideTooltip(150);
    });

    el.addEventListener('mousemove', (e) => {
      // Don't update tooltip if hovering over copy button
      if (e.target.closest('.copy-btn')) {
        if (tooltipTimeout) {
          clearTimeout(tooltipTimeout);
          tooltipTimeout = null;
        }
        hideTooltip(0);
        return;
      }

      // Update position on mouse move for better UX
      if (tooltip.classList.contains('show')) {
        const rect = el.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = rect.top - tooltipRect.height - 4;
        let left = rect.left + rect.width / 2 - tooltipRect.width / 2;

        if (top < 0) {
          top = rect.bottom + 4;
        }
        if (left < 0) {
          left = 8;
        } else if (left + tooltipRect.width > window.innerWidth) {
          left = window.innerWidth - tooltipRect.width - 8;
        }

        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left}px`;
      }
    });
  }
});

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

// Language selector functionality is now in language.js
