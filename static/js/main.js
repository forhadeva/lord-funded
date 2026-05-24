// --- TESTIMONIALS DATA ---
const testimonials = [
  {
    name: "Mohammed Al-Rashid",
    country: "UAE",
    initials: "M",
    color: "#d4af37",
    payout: "$8,400",
    account: "$100K Account",
    text: '"LordFunded changed my trading career. I passed Phase 1 in 12 days and got funded with $100K. The process is transparent and the support team is incredible."',
    stars: 5
  },
  {
    name: "Sarah Chen",
    country: "Singapore",
    initials: "S",
    color: "#10b981",
    payout: "$14,250",
    account: "$200K Account",
    text: '"I\'ve tried 4 different prop firms before LordFunded. The static drawdown rule is a game changer — no more losing accounts due to trailing stops. Got my first payout in 3 weeks."',
    stars: 5
  },
  {
    name: "Carlos Mendoza",
    country: "Mexico",
    initials: "C",
    color: "#8b5cf6",
    payout: "$6,750",
    account: "$50K Account",
    text: '"The Throne HFT account was perfect for my EA strategy. No minimum trading days, passed in one session. Lord Funded actually pays — received my withdrawal within 24 hours."',
    stars: 5
  },
  {
    name: "Aisha Kamara",
    country: "Nigeria",
    initials: "A",
    color: "#f59e0b",
    payout: "$3,200",
    account: "$25K Account",
    text: '"As a part-time swing trader, the no time limit rule was everything. I took my time, passed both stages, and now I\'m scaling up. The 90% profit split feels like a dream."',
    stars: 5
  },
  {
    name: "Dmitri Volkov",
    country: "Russia",
    initials: "D",
    color: "#ef4444",
    payout: "$22,800",
    account: "$200K Account",
    text: '"Started with a $50K Quest account, scaled up to $200K after 3 payouts. The scaling plan is real and fair. Best prop firm I have worked with in 6 years of trading."',
    stars: 5
  },
  {
    name: "James Okonkwo",
    country: "UK",
    initials: "J",
    color: "#3b82f6",
    payout: "$11,000",
    account: "$100K Account",
    text: '"The Lord Instant account is perfect for experienced traders. No challenge, no waiting — KYC approved, live capital in 24 hours. Withdrew $11K on my second month."',
    stars: 5
  },
  {
    name: "Lena Fischer",
    country: "Germany",
    initials: "L",
    color: "#d4af37",
    payout: "$5,600",
    account: "$50K Account",
    text: '"News trading allowed? Hedging allowed? No trailing drawdown? LordFunded gives you every advantage to succeed. The faith-inspired mission shows in how they treat traders."',
    stars: 5
  }
];

// --- CHALLENGE CALCULATOR DATA ---
const challengeData = {
  '1-step': {
    title: '1-Step Evaluation',
    steps: 1,
    sizes: [
      { size: '$10,000', fee: '$89', profit: '9%', dailyLoss: '5% ($500)', maxLoss: '8% ($800)' },
      { size: '$25,000', fee: '$179', profit: '9%', dailyLoss: '5% ($1,250)', maxLoss: '8% ($2,000)' },
      { size: '$50,000', fee: '$299', profit: '9%', dailyLoss: '5% ($2,500)', maxLoss: '8% ($4,000)' },
      { size: '$100,000', fee: '$499', profit: '9%', dailyLoss: '5% ($5,000)', maxLoss: '8% ($8,000)' },
      { size: '$200,000', fee: '$949', profit: '9%', dailyLoss: '5% ($10,000)', maxLoss: '8% ($16,000)' },
      { size: '$500,000', fee: '$2,199', profit: '9%', dailyLoss: '5% ($25,000)', maxLoss: '8% ($40,000)' }
    ],
  },
  '2-step': {
    title: '2-Step Evaluation',
    steps: 2,
    sizes: [
      { size: '$10,000', fee: '$99', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($500)', maxLoss: '10% ($1,000)' },
      { size: '$25,000', fee: '$189', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($1,250)', maxLoss: '10% ($2,500)' },
      { size: '$50,000', fee: '$289', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($2,500)', maxLoss: '10% ($5,000)' },
      { size: '$100,000', fee: '$479', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($5,000)', maxLoss: '10% ($10,000)' },
      { size: '$200,000', fee: '$899', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($10,000)', maxLoss: '10% ($20,000)' },
      { size: '$500,000', fee: '$1,999', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($25,000)', maxLoss: '10% ($50,000)' }
    ],
  },
};

// --- LANGUAGE STATE ---
const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' }
];

let currentLangCode = localStorage.getItem('lang') || 'en';

// --- TRANSLATION FUNCTION ---
function translatePage() {
  const dictionary = translations[currentLangCode] || translations.en;
  
  // Translate standard text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  // Translate elements with HTML inside
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dictionary[key]) {
      el.innerHTML = dictionary[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dictionary[key]) {
      el.setAttribute('placeholder', dictionary[key]);
    }
  });

  // Update selected language display in Navbar and Mobile drawer
  const activeLang = languages.find(l => l.code === currentLangCode) || languages[0];
  document.querySelectorAll('.active-lang-flag').forEach(el => el.textContent = activeLang.flag);
  document.querySelectorAll('.active-lang-label').forEach(el => el.textContent = activeLang.code.toUpperCase());

  // Mark active state in language dropdown list
  document.querySelectorAll('.lang-btn-option').forEach(btn => {
    const code = btn.getAttribute('data-lang-code');
    const checkEl = btn.querySelector('.lang-check');
    if (code === currentLangCode) {
      btn.style.background = 'rgba(212, 175, 55, 0.1)';
      btn.style.color = 'var(--gold-primary)';
      if (checkEl) checkEl.style.display = 'block';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-secondary)';
      if (checkEl) checkEl.style.display = 'none';
    }
  });
  if (typeof window.onLanguageChange === 'function') {
    window.onLanguageChange(currentLangCode);
  }
}

function setLanguage(code) {
  currentLangCode = code;
  localStorage.setItem('lang', code);
  translatePage();
}

// --- DOM READY SCRIPTS ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Translation
  translatePage();

  // 2. Language Switcher Dropdown Click Interactions
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');

  if (langToggleBtn && langDropdownMenu) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdownMenu.style.display === 'block';
      langDropdownMenu.style.display = isOpen ? 'none' : 'block';
      const chevron = langToggleBtn.querySelector('.chevron-icon');
      if (chevron) {
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });

    // Close language dropdown on outside clicks
    document.addEventListener('click', (e) => {
      if (!langToggleBtn.contains(e.target)) {
        langDropdownMenu.style.display = 'none';
        const chevron = langToggleBtn.querySelector('.chevron-icon');
        if (chevron) {
          chevron.style.transform = 'rotate(0deg)';
        }
      }
    });
  }

  // Setup Language Switcher Button Option Handlers
  document.querySelectorAll('.lang-btn-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang-code');
      setLanguage(code);
      if (langDropdownMenu) langDropdownMenu.style.display = 'none';
    });
  });

  // Mobile language toggle buttons (direct toggles inside drawers)
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-lang-code');
      setLanguage(code);
      
      // Update visual styles for mobile buttons
      document.querySelectorAll('.mobile-lang-btn').forEach(b => {
        const isActive = b.getAttribute('data-lang-code') === code;
        b.style.background = isActive ? 'rgba(212,175,55,0.1)' : 'rgba(14,13,10,0.5)';
        b.style.borderColor = isActive ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)';
        b.style.color = isActive ? 'var(--gold-primary)' : 'var(--text-secondary)';
      });
    });
  });

  // 3. Mobile Hamburger Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.style.display === 'flex';
      mobileDrawer.style.display = isOpen ? 'none' : 'flex';
      // Toggle menu / close icon inside toggle button
      mobileToggleBtn.innerHTML = isOpen 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    });

    // Close mobile drawer on navigation link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.style.display = 'none';
        mobileToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      });
    });
  }

  // 4. Scrolled Navbar header visual styles adjustment
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.style.background = 'rgba(5, 5, 6, 0.85)';
        navbar.style.backdropFilter = 'blur(16px)';
        navbar.style.webkitBackdropFilter = 'blur(16px)';
        navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.1)';
        navbar.style.padding = '16px 0';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.borderBottom = '1px solid transparent';
        navbar.style.padding = '24px 0';
      }
    });
  }

  // 5. TESTIMONIALS SLIDER INTERACTION (Runs on index.html)
  let activeTestimonialIdx = 0;
  let testimonialInterval = null;

  const testimonialCard = document.getElementById('testimonial-card');
  if (testimonialCard) {
    const dotsContainer = document.getElementById('testimonial-dots');

    function updateTestimonial() {
      const data = testimonials[activeTestimonialIdx];
      if (!data) return;

      // Update text review
      const textEl = testimonialCard.querySelector('.review-text');
      if (textEl) textEl.textContent = data.text;

      // Update author initials, name, country, and initials background color
      const initialsEl = testimonialCard.querySelector('.author-initials');
      if (initialsEl) {
        initialsEl.textContent = data.initials;
        initialsEl.style.background = data.color;
        initialsEl.style.boxShadow = `0 0 14px ${data.color}66`;
      }

      const nameEl = testimonialCard.querySelector('.author-name');
      if (nameEl) nameEl.textContent = data.name;

      const countryEl = testimonialCard.querySelector('.author-country');
      if (countryEl) countryEl.textContent = data.country;

      // Update payout and account size info
      const payoutEl = testimonialCard.querySelector('.payout-amount');
      if (payoutEl) payoutEl.textContent = data.payout;

      const accountEl = testimonialCard.querySelector('.account-size');
      if (accountEl) accountEl.textContent = data.account;

      // Update progress indicator dots state
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.dot-btn').forEach((dot, idx) => {
          if (idx === activeTestimonialIdx) {
            dot.style.width = '24px';
            dot.style.background = '#d4af37';
            dot.style.boxShadow = '0 0 8px rgba(212, 175, 55, 0.5)';
          } else {
            dot.style.width = '8px';
            dot.style.background = 'rgba(255, 255, 255, 0.15)';
            dot.style.boxShadow = 'none';
          }
        });
      }

      // Update index counter text
      const counterEl = document.getElementById('testimonial-counter');
      if (counterEl) {
        counterEl.textContent = `${activeTestimonialIdx + 1} / ${testimonials.length}`;
      }
    }

    function setTestimonial(idx) {
      // Fade out card layout
      testimonialCard.style.opacity = '0';
      testimonialCard.style.transform = 'translateY(8px)';
      
      setTimeout(() => {
        activeTestimonialIdx = (idx + testimonials.length) % testimonials.length;
        updateTestimonial();
        // Fade in card layout
        testimonialCard.style.opacity = '1';
        testimonialCard.style.transform = 'translateY(0)';
      }, 220);
    }

    // Set up dot buttons
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      testimonials.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'dot-btn';
        dot.style.height = '8px';
        dot.style.borderRadius = '4px';
        dot.style.border = 'none';
        dot.style.cursor = 'pointer';
        dot.style.transition = 'all 0.3s ease';
        dot.style.padding = '0';
        dot.addEventListener('click', () => {
          resetTestimonialTimer();
          setTestimonial(idx);
        });
        dotsContainer.appendChild(dot);
      });
    }

    // Prev / Next button listeners
    const prevBtn = document.getElementById('testimonial-prev-btn');
    const nextBtn = document.getElementById('testimonial-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        resetTestimonialTimer();
        setTestimonial(activeTestimonialIdx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        resetTestimonialTimer();
        setTestimonial(activeTestimonialIdx + 1);
      });
    }

    function startTestimonialTimer() {
      testimonialInterval = setInterval(() => {
        setTestimonial(activeTestimonialIdx + 1);
      }, 5000);
    }

    function resetTestimonialTimer() {
      if (testimonialInterval) clearInterval(testimonialInterval);
      startTestimonialTimer();
    }

    // Initialize testimonial values and start timer
    updateTestimonial();
    startTestimonialTimer();
  }

  // 6. CHALLENGE CALCULATOR INTERACTION (Runs on index.html)
  let activeCalculatorModel = '2-step';
  let activeSizeIndex = 3; // Defaults to $100,000

  const calculatorWidget = document.getElementById('challenges-widget');
  if (calculatorWidget) {
    const modelButtons = calculatorWidget.querySelectorAll('.calc-model-btn');
    const sizeButtonsContainer = document.getElementById('calc-sizes-container');

    function updateCalculator() {
      const currentModel = challengeData[activeCalculatorModel];
      const activePlan = currentModel.sizes[activeSizeIndex];

      // Update card values
      const titleEl = calculatorWidget.querySelector('.calc-plan-title');
      if (titleEl) titleEl.textContent = currentModel.title;

      const sizeEl = calculatorWidget.querySelector('.calc-plan-size');
      if (sizeEl) sizeEl.textContent = `${activePlan.size} Account`;

      const feeEl = calculatorWidget.querySelector('.calc-plan-fee');
      if (feeEl) feeEl.textContent = activePlan.fee;

      const targetEl = calculatorWidget.querySelector('.calc-rule-target');
      if (targetEl) targetEl.textContent = activePlan.profit;

      const dailyDrawdownEl = calculatorWidget.querySelector('.calc-rule-daily');
      if (dailyDrawdownEl) dailyDrawdownEl.textContent = activePlan.dailyLoss;

      const overallDrawdownEl = calculatorWidget.querySelector('.calc-rule-overall');
      if (overallDrawdownEl) overallDrawdownEl.textContent = activePlan.maxLoss;

      // Update size button selection state classes
      if (sizeButtonsContainer) {
        sizeButtonsContainer.querySelectorAll('.calc-size-btn').forEach((btn, idx) => {
          if (idx === activeSizeIndex) {
            btn.style.border = '2px solid var(--gold-primary)';
            btn.style.background = 'rgba(212, 175, 55, 0.1)';
            btn.style.color = 'var(--gold-primary)';
            btn.style.boxShadow = 'var(--gold-glow)';
          } else {
            btn.style.border = '1px solid var(--border-color)';
            btn.style.background = 'rgba(255, 255, 255, 0.02)';
            btn.style.color = 'var(--text-secondary)';
            btn.style.boxShadow = 'none';
          }
        });
      }
    }

    function selectModel(modelKey) {
      activeCalculatorModel = modelKey;
      
      // Update toggle buttons background active classes
      modelButtons.forEach(btn => {
        const key = btn.getAttribute('data-model-key');
        if (key === modelKey) {
          btn.style.background = 'var(--gold-gradient)';
          btn.style.color = '#000000';
        } else {
          btn.style.background = 'transparent';
          btn.style.color = 'var(--text-secondary)';
        }
      });

      // Update calculations
      updateCalculator();
    }

    // Set model selector button click listeners
    modelButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-model-key');
        selectModel(key);
      });
    });

    // Populate and initialize size buttons
    if (sizeButtonsContainer) {
      sizeButtonsContainer.innerHTML = '';
      challengeData['1-step'].sizes.forEach((plan, idx) => {
        const btn = document.createElement('button');
        btn.className = 'calc-size-btn';
        btn.style.padding = '16px 8px';
        btn.style.borderRadius = '12px';
        btn.style.cursor = 'pointer';
        btn.style.fontWeight = '700';
        btn.style.fontFamily = 'var(--font-heading)';
        btn.style.fontSize = '16px';
        btn.style.transition = 'all 0.2s ease';
        btn.textContent = plan.size;
        btn.addEventListener('click', () => {
          activeSizeIndex = idx;
          updateCalculator();
        });
        sizeButtonsContainer.appendChild(btn);
      });
    }

    // Initialize display values
    selectModel('2-step');
  }

  // 7. FAQ ACCORDION TOGGLE (Runs on index.html / faq.html)
  const faqAccordion = document.getElementById('faq-accordion-list');
  if (faqAccordion) {
    const faqCards = faqAccordion.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
      card.addEventListener('click', () => {
        const answerWrapper = card.querySelector('.faq-answer-wrapper');
        const chevron = card.querySelector('.chevron-icon');
        const icon = card.querySelector('.question-icon');
        const toggleIcon = card.querySelector('.faq-toggle-icon');
        const isOpen = card.classList.contains('active');

        // Close all other open FAQ cards first
        faqCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('active')) {
            otherCard.classList.remove('active');
            if (chevron) {
              otherCard.style.background = 'rgba(14, 13, 10, 0.6)';
              otherCard.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              otherCard.style.boxShadow = 'none';
            }

            const otherWrapper = otherCard.querySelector('.faq-answer-wrapper');
            if (otherWrapper) otherWrapper.style.maxHeight = '0px';

            const otherChevron = otherCard.querySelector('.chevron-icon');
            if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';

            const otherIcon = otherCard.querySelector('.question-icon');
            if (otherIcon) otherIcon.style.color = '#555';

            const otherToggle = otherCard.querySelector('.faq-toggle-icon');
            if (otherToggle) otherToggle.textContent = '+';
          }
        });

        if (isOpen) {
          card.classList.remove('active');
          if (chevron) {
            card.style.background = 'rgba(14, 13, 10, 0.6)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.06)';
            card.style.boxShadow = 'none';
          }
          if (answerWrapper) answerWrapper.style.maxHeight = '0px';
          if (chevron) chevron.style.transform = 'rotate(0deg)';
          if (icon) icon.style.color = '#555';
          if (toggleIcon) toggleIcon.textContent = '+';
        } else {
          card.classList.add('active');
          if (chevron) {
            card.style.background = 'rgba(212, 175, 55, 0.04)';
            card.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            card.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.08)';
          }
          if (answerWrapper) answerWrapper.style.maxHeight = `${answerWrapper.scrollHeight}px`;
          if (chevron) chevron.style.transform = 'rotate(180deg)';
          if (icon) icon.style.color = 'var(--gold-primary)';
          if (toggleIcon) toggleIcon.textContent = '−'; // unicode minus
        }
      });
    });
  }

  // 8. SCROLL REVEAL ANIMATIONS (Intersection Observer)
  const scrollElements = document.querySelectorAll('.scroll-trigger');
  
  if (scrollElements.length > 0) {
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          // Apply animation delay if specified
          const delay = el.getAttribute('data-delay');
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }
          
          // Trigger the animation
          el.classList.add('active');
          
          // Unobserve after animating once to prevent scroll lag/re-triggering
          observer.unobserve(el);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% visible
      rootMargin: '0px 0px -30px 0px'
    });
    
    scrollElements.forEach(el => scrollObserver.observe(el));
  }

  // 9. METRICS NUMBER COUNTING ANIMATION
  const counterValElements = document.querySelectorAll('.counter-val');
  
  if (counterValElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const isComma = el.getAttribute('data-format') === 'comma';
          const duration = 2000; // 2 seconds animation duration
          const startTime = performance.now();
          
          function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function - easeOutQuad
            const easeProgress = progress * (2 - progress);
            
            const currentValue = Math.floor(easeProgress * target);
            
            if (isComma) {
              el.textContent = currentValue.toLocaleString();
            } else {
              el.textContent = currentValue;
            }
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (isComma) {
                el.textContent = target.toLocaleString();
              } else {
                el.textContent = target;
              }
            }
          }
          
          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    
    counterValElements.forEach(el => counterObserver.observe(el));
  }
});
