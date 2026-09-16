/* ============================================================
   루톤(ROOTON) 공통 스크립트
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ---------- 모바일 메뉴 토글 ----------
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      const isOpen = nav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // 메뉴 링크 클릭 시 닫기
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- 스크롤 애니메이션 (Intersection Observer) ----------
  const fadeEls = document.querySelectorAll('.fade-in-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---------- FAQ 아코디언 ----------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        // 하나만 열리도록
        faqItems.forEach(function (i) {
          i.classList.remove('active');
        });
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ---------- FAQ 카테고리 필터 ----------
  const faqCats = document.querySelectorAll('.faq-cat');
  if (faqCats.length) {
    faqCats.forEach(function (cat) {
      cat.addEventListener('click', function () {
        const category = cat.getAttribute('data-cat');
        // 활성 카테고리 표시
        faqCats.forEach(function (c) {
          c.classList.remove('active');
        });
        cat.classList.add('active');
        // 아이템 필터링
        faqItems.forEach(function (item) {
          const itemCat = item.getAttribute('data-cat');
          if (category === 'all' || itemCat === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
            item.classList.remove('active');
          }
        });
      });
    });
  }

  // ---------- 문의 폼 (데모 - 실제 전송 없음) ----------
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.textContent = '전송되었습니다 ✓';
        submitBtn.disabled = true;
        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }
    });
  }
});