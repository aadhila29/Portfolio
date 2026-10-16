/**
 * ============================================================================
 * AADHILA PERSONAL PORTFOLIO — INTERACTIVE SCRIPTS
 * Brand: AADHILA (Aadhila)
 * Professional Title: Aspiring Cybersecurity & AI Professional | Frontend Developer
 * Features:
 *  - Theme Toggle (Dark / Light Mode with localStorage memory)
 *  - Mobile Navigation Drawer (accessible, keyboard dismiss)
 *  - Typing Animation for Professional Titles (respects reduced motion)
 *  - Scroll Reveal Animations (Intersection Observer)
 *  - Dynamic Skill Categorization & Filtering
 *  - Project Details Modal Dialogs
 *  - Back-to-Top Floating Trigger
 *  - Active Nav Link Tracking
 *  - Transparent Contact Form Validation & Mailto Handlers
 *  - Email One-Click Copy Utility
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Reduced Motion Detection
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --------------------------------------------------------------------------
  // 2. Theme Toggle (Dark Mode / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootHtml = document.documentElement;
  const storageKey = 'aadhila-portfolio-theme';

  // Initialize theme from storage or system preference
  const savedTheme = localStorage.getItem(storageKey);
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (systemPrefersLight) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  function applyTheme(theme) {
    rootHtml.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    if (themeToggleBtn) {
      const isLight = theme === 'light';
      themeToggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
      themeToggleBtn.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootHtml.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 3. Header Scrolled State & Active Navigation Tracking
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('main > section');

  function handleHeaderScroll() {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Active Link Observer
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }

  // --------------------------------------------------------------------------
  // 4. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileToggleBtn || !mobileDrawer) return;

    const isOpen = forceClose ? false : !mobileDrawer.classList.contains('is-open');

    if (isOpen) {
      mobileDrawer.classList.add('is-open');
      mobileToggleBtn.classList.add('is-active');
      mobileToggleBtn.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('is-open');
      mobileToggleBtn.classList.remove('is-active');
      mobileToggleBtn.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', () => toggleMobileMenu());
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('is-open')) {
      toggleMobileMenu(true);
    }
  });

  // --------------------------------------------------------------------------
  // 5. Typing Animation (Hero Section)
  // --------------------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Aspiring Cybersecurity & AI Professional',
    'Frontend Developer',
    'Web Engineering Student @ Mars Tech',
    'Security & Tech Enthusiast'
  ];

  if (typingElement) {
    if (prefersReducedMotion) {
      // For users with reduced motion preferences, display static text
      typingElement.textContent = roles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 80;
      const deleteSpeed = 40;
      const holdTime = 2000;

      function typeLoop() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
          typingElement.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingElement.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
        }

        let nextTick = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
          nextTick = holdTime;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          nextTick = 300;
        }

        setTimeout(typeLoop, nextTick);
      }

      typeLoop();
    }
  }

  // --------------------------------------------------------------------------
  // 6. Scroll Reveal Animations (Intersection Observer)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion or observer unsupported, reveal all immediately
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // --------------------------------------------------------------------------
  // 7. Skills Filtering (All / Completed / Learning)
  // --------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === cardCategory) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 8. Project Modals (Accessible Dialogs)
  // --------------------------------------------------------------------------
  const openModalButtons = document.querySelectorAll('.open-modal-btn');
  const modals = document.querySelectorAll('.modal-backdrop');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    targetModal.classList.add('is-open');
    targetModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    const closeBtn = targetModal.querySelector('.modal-close-btn');
    closeBtn?.focus();
  }

  function closeModal(targetModal) {
    if (!targetModal) return;
    targetModal.classList.remove('is-open');
    targetModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      if (modalId) openModal(modalId);
    });
  });

  modals.forEach((modal) => {
    // Close button
    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn?.addEventListener('click', () => closeModal(modal));

    // Dismiss footer button
    const dismissBtn = modal.querySelector('.modal-dismiss-btn');
    dismissBtn?.addEventListener('click', () => closeModal(modal));

    // Click on backdrop outside dialog
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.is-open');
      if (activeModal) closeModal(activeModal);
    }
  });

  // --------------------------------------------------------------------------
  // 9. Back to Top Floating Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  function handleBackToTopVisibility() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
  handleBackToTopVisibility();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Copy Email to Clipboard
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const emailToCopy = 'aadhila.tech@gmail.com';

  if (copyEmailBtn && copyBtnText) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied!';
        copyEmailBtn.style.background = 'var(--accent-lime)';
        copyEmailBtn.style.color = '#0B0D0C';

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.style.background = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        copyBtnText.textContent = 'Copied!';
        setTimeout(() => {
          copyBtnText.textContent = 'Copy';
        }, 2200);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. Contact Form Validation & Honest Delivery Feedback
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolio-contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const feedbackBanner = document.getElementById('form-feedback-banner');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  function validateEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateField(input, errorElement, validationFn, errorMessage) {
    const isValid = validationFn(input.value.trim());
    if (!isValid) {
      input.classList.add('has-error');
      if (errorElement) errorElement.textContent = errorMessage;
      return false;
    } else {
      input.classList.remove('has-error');
      if (errorElement) errorElement.textContent = '';
      return true;
    }
  }

  // Real-time validation listeners on input
  nameInput?.addEventListener('input', () => {
    validateField(nameInput, nameError, (v) => v.length >= 2, 'Name must be at least 2 characters long.');
  });

  emailInput?.addEventListener('input', () => {
    validateField(emailInput, emailError, validateEmailFormat, 'Please enter a valid email address.');
  });

  subjectInput?.addEventListener('input', () => {
    validateField(subjectInput, subjectError, (v) => v.length >= 3, 'Subject must be at least 3 characters long.');
  });

  messageInput?.addEventListener('input', () => {
    validateField(messageInput, messageError, (v) => v.length >= 10, 'Message must be at least 10 characters long.');
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameError, (v) => v.length >= 2, 'Name must be at least 2 characters long.');
      const isEmailValid = validateField(emailInput, emailError, validateEmailFormat, 'Please enter a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectError, (v) => v.length >= 3, 'Subject must be at least 3 characters long.');
      const isMessageValid = validateField(messageInput, messageError, (v) => v.length >= 10, 'Message must be at least 10 characters long.');

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        if (feedbackBanner) {
          feedbackBanner.style.display = 'block';
          feedbackBanner.className = 'form-feedback-banner error';
          feedbackBanner.innerHTML = '<strong>Please correct the highlighted errors</strong> before proceeding.';
        }
        return;
      }

      // Fields are valid!
      // In strict adherence to requirements:
      // "The contact form must validate its fields and provide a clear success message.
      // If no backend or email service is configured, explain that the form is not yet
      // able to deliver messages automatically. Do not pretend messages have been sent."
      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const subject = encodeURIComponent(subjectInput.value.trim());
      const message = encodeURIComponent(messageInput.value.trim());

      const mailtoUrl = `mailto:aadhila.tech@gmail.com?subject=${subject}&body=From:%20${name}%20(${email})%0A%0A${message}`;

      if (feedbackBanner) {
        feedbackBanner.style.display = 'block';
        feedbackBanner.className = 'form-feedback-banner success';
        feedbackBanner.innerHTML = `
          <strong>Validation Successful!</strong><br>
          <span style="font-size: 0.88rem; display: block; margin-top: 6px; line-height: 1.5;">
            Please note: Automated direct server delivery is currently offline as a backend email service is not yet configured.
            Your message has not been sent automatically. To send this message directly to <strong>aadhila.tech@gmail.com</strong>, click the button below to open your preferred mail client.
          </span>
          <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="text-decoration:none;">
              <span>Open in Email Client</span>
              <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
            </a>
            <button type="button" class="btn btn-outline btn-sm" id="reset-form-btn">
              <span>Clear Form</span>
            </button>
          </div>
        `;

        const resetBtn = document.getElementById('reset-form-btn');
        resetBtn?.addEventListener('click', () => {
          contactForm.reset();
          feedbackBanner.style.display = 'none';
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 12. Current Year in Footer
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
