// ============================================================
//  Blog Renderer — you don't need to edit this file.
//  All your content goes in posts.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Header ──────────────────────────────────────────────────
  document.title = BLOG_CONFIG.blogTitle;
  document.getElementById('blog-title').textContent    = BLOG_CONFIG.blogTitle;
  document.getElementById('blog-subtitle').textContent = BLOG_CONFIG.blogSubtitle;

  const profileEl = document.getElementById('header-profile');
  if (BLOG_CONFIG.profilePhoto) {
    const img = document.createElement('img');
    img.src = BLOG_CONFIG.profilePhoto;
    img.alt = BLOG_CONFIG.authorName;
    img.className = 'header-profile';
    img.onerror = () => img.replaceWith(makePlaceholder());
    profileEl.replaceWith(img);
  } else {
    profileEl.replaceWith(makePlaceholder());
  }

  function makePlaceholder() {
    const div = document.createElement('div');
    div.className = 'header-profile-placeholder';
    div.textContent = '✦';
    return div;
  }

  // ── Posts ────────────────────────────────────────────────────
  const feed = document.getElementById('post-feed');

  if (!posts || posts.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        <p>No posts yet — check back soon! ✦</p>
      </div>`;
    return;
  }

  posts.forEach(post => {
    const card = document.createElement('article');
    card.className = 'post-card';

    // Meta row
    let metaHtml = `<div class="post-meta">
      <span class="post-date">${post.date || ''}</span>
      ${post.location ? `<span class="post-location">📍 ${post.location}</span>` : ''}
    </div>`;

    // Photos
    let photosHtml = '';
    if (post.photos && post.photos.length > 0) {
      const count = post.photos.length;
      const cls = count === 1 ? 'count-1'
                : count === 2 ? 'count-2'
                : count === 3 ? 'count-3'
                : 'count-many';

      const items = post.photos.map((p, i) => `
        <div class="photo-item" data-src="${p.file}" data-caption="${p.caption || ''}">
          <img src="${p.file}" alt="${p.caption || 'Photo'}" loading="lazy"
               onerror="this.closest('.photo-item').style.display='none'">
          ${p.caption ? `<span class="photo-caption">${p.caption}</span>` : ''}
        </div>
      `).join('');

      photosHtml = `<div class="photo-grid ${cls}">${items}</div>`;
    }

    card.innerHTML = `
      ${metaHtml}
      <h2 class="post-title">${post.title || 'Untitled'}</h2>
      <div class="post-body">${post.body || ''}</div>
      ${photosHtml}
    `;

    feed.appendChild(card);
  });

  // ── Lightbox ─────────────────────────────────────────────────
  const lightbox     = document.getElementById('lightbox');
  const lbImg        = document.getElementById('lightbox-img');
  const lbCaption    = document.getElementById('lightbox-caption');
  const lbClose      = document.getElementById('lightbox-close');

  document.addEventListener('click', e => {
    const item = e.target.closest('.photo-item');
    if (item) {
      lbImg.src          = item.dataset.src;
      lbCaption.textContent = item.dataset.caption || '';
      lightbox.classList.add('open');
    }
  });

  const closeLightbox = () => lightbox.classList.remove('open');
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ── Footer year ──────────────────────────────────────────────
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = BLOG_CONFIG.authorName;
});
