// Minimal interactivity: year fill, mobile menu, case-study modal
document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){ nav.hidden = false; }
      else { nav.hidden = true; }
    });
  }

  // modal case studies
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.querySelector('.modal-close');

  function openModal(html){
    modalContent.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalContent.innerHTML = '';
  }
  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      // Simple demo content per project - replace with real copy/screenshots
      const html = {
        '1': `<h3>Project One — Mobile-first e-commerce</h3>
              <p>Challenge: Long checkout flows and low mobile conversion.</p>
              <p>Solution: Simplified checkout, prioritized product discovery, introduced contextual microcopy and progressive disclosure.</p>
              <p><img style="max-width:100%;border-radius:8px" src="https://via.placeholder.com/1000x560.png?text=Project+1+Detail" alt="Project 1 detail" /></p>`,
        '2': `<h3>Project Two — SaaS dashboard</h3>
              <p>Challenge: Overloaded interface for power users.</p>
              <p>Solution: Introduced a modular design system, improved information hierarchy and keyboard accessibility.</p>
              <p><img style="max-width:100%;border-radius:8px" src="https://via.placeholder.com/1000x560.png?text=Project+2+Detail" alt="Project 2 detail" /></p>`,
        '3': `<h3>Project Three — Brand & landing</h3>
              <p>Challenge: Low demo signups from marketing channels.</p>
              <p>Solution: Visual refresh, tailored messaging and experimentation on CTA placement.</p>
              <p><img style="max-width:100%;border-radius:8px" src="https://via.placeholder.com/1000x560.png?text=Project+3+Detail" alt="Project 3 detail" /></p>`
      }[id] || `<p>Case study coming soon.</p>`;
      openModal(html);
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeModal);
  modal && modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeModal(); });
});