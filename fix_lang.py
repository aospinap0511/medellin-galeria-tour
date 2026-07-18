import os
import glob

# HTML chunks to replace
nav_old = """      <div style="display: flex; align-items: center; gap: 16px;">
        <button id="drawer-open" class="mobile-toggle" aria-label="Menu" aria-expanded="false" aria-controls="drawer">
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>"""

nav_new = """      <div style="display: flex; align-items: center; gap: 16px;">
        <div class="lang-switcher">
          <button class="lang-btn active" data-lang="es">ES</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
        <button id="drawer-open" class="mobile-toggle" style="display: block; background: transparent; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-dark);" aria-label="Menu" aria-expanded="false" aria-controls="drawer">
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>"""

drawer_old = """        <ul class="drawer-links">
          <li><a href="/index.html#tours">Experiencias</a></li>
          <li><a href="/about.html">La Historia</a></li>
          <li><a href="/gallery.html">Galería Real</a></li>
          <li><a href="/reviews.html">Reseñas</a></li>
          <li><a href="/index.html#booking">Contacto</a></li>
        </ul>"""

drawer_new = """        <ul class="drawer-links">
          <li><a href="/index.html#tours" data-i18n="navTours">Experiencias</a></li>
          <li><a href="/about.html" data-i18n="navAbout">La Historia</a></li>
          <li><a href="/gallery.html" data-i18n="navGallery">Galería Real</a></li>
          <li><a href="/reviews.html" data-i18n="navReviews">Reseñas</a></li>
          <li><a href="/index.html#booking" data-i18n="navContact">Contacto</a></li>
        </ul>"""

footer_old = """  <footer class="site-footer">
    <div class="footer-bottom">
      <p>&copy; 2026 Medellín Galería Tour. Todos los derechos reservados.</p>
    </div>
  </footer>"""

footer_new = """  <footer class="site-footer">
    <div class="footer-bottom">
      <p data-i18n="footerCopy">&copy; 2026 Medellín Galería Tour. Todos los derechos reservados.</p>
    </div>
  </footer>"""

for file in glob.glob("*.html"):
    if file == "index.html": continue
    with open(file, "r") as f:
        content = f.read()
    
    content = content.replace(nav_old, nav_new)
    content = content.replace(drawer_old, drawer_new)
    content = content.replace(footer_old, footer_new)
    
    with open(file, "w") as f:
        f.write(content)
        print(f"Updated {file}")
