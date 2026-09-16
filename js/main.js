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

  // ---------- 루톤소개 탭 전환 ----------
  const aboutTabs = document.querySelectorAll('.about-tab');
  if (aboutTabs.length) {
    aboutTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const target = tab.getAttribute('data-tab');
        // 탭 활성화
        aboutTabs.forEach(function (t) {
          t.classList.remove('active');
        });
        tab.classList.add('active');
        // 콘텐츠 전환
        document.querySelectorAll('.about-tab-content').forEach(function (content) {
          content.classList.remove('active');
        });
        const targetContent = document.getElementById('tab-' + target);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // ---------- 상담/문의 탭 전환 (GROW ON TIP 방식) ----------
  const contactCats = document.querySelectorAll('.contact-cat');
  if (contactCats.length) {
    const contactContents = document.querySelectorAll('.contact-content');
    contactCats.forEach(function (cat) {
      cat.addEventListener('click', function () {
        const category = cat.getAttribute('data-cat');
        // 활성 카테고리 표시
        contactCats.forEach(function (c) {
          c.classList.remove('active');
        });
        cat.classList.add('active');
        // 콘텐츠 전환 (숨기기/보이기)
        contactContents.forEach(function (content) {
          const contentCat = content.getAttribute('data-cat');
          if (category === contentCat) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        });
      });
    });
  }

  // ---------- 성장ON정보 블로그 카테고리 필터 ----------
  const blogCats = document.querySelectorAll('.blog-cat');
  if (blogCats.length) {
    // 블로그 카드 (3열 그리드) 또는 블로그 아이템 (리스트)
    const blogItems = document.querySelectorAll('.blog-card, .blog-item');
    blogCats.forEach(function (cat) {
      cat.addEventListener('click', function () {
        const category = cat.getAttribute('data-cat');
        // 활성 카테고리 표시
        blogCats.forEach(function (c) {
          c.classList.remove('active');
        });
        cat.classList.add('active');
        // 아이템 필터링
        blogItems.forEach(function (item) {
          const itemCat = item.getAttribute('data-cat');
          if (category === 'all' || itemCat === category) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // ---------- 제품 페이지 카테고리 필터 ----------
  const productCats = document.querySelectorAll('.product-cat');
  if (productCats.length) {
    const productCards = document.querySelectorAll('.product-card');
    productCats.forEach(function (cat) {
      cat.addEventListener('click', function () {
        const category = cat.getAttribute('data-cat');
        // 활성 카테고리 표시
        productCats.forEach(function (c) {
          c.classList.remove('active');
        });
        cat.classList.add('active');
        // 아이템 필터링
        productCards.forEach(function (card) {
          const cardCat = card.getAttribute('data-cat');
          if (category === 'all' || cardCat === category) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
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