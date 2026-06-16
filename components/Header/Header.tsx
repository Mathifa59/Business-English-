'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter, Link } from '@/navigation';
import styles from './Header.module.css';

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'courses', href: '/cursos' },
  { key: 'about', href: '/nosotros' },
  { key: 'blog', href: '/blog' },
  { key: 'enrollment', href: '/inscripciones' },
  { key: 'contact', href: '/contacto' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const switchLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    router.replace(pathname, { locale: next });
  };

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>Academy</span>
          <span className={styles.logoLight}> English</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.localeSwitcher}
            onClick={switchLocale}
            aria-label="Switch language"
          >
            <span className={locale === 'es' ? styles.localeActive : ''}>ES</span>
            <span className={styles.localeDivider}>|</span>
            <span className={locale === 'en' ? styles.localeActive : ''}>EN</span>
          </button>

          <Link href="/inscripciones" className="btn-primary">
            {t('cta')}
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu} onClick={() => setMenuOpen(false)}>
          <div className={styles.mobileMenuInner} onClick={(e) => e.stopPropagation()}>
            <nav className={styles.mobileNav}>
              {NAV_LINKS.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className={`${styles.mobileNavLink} ${pathname === href ? styles.mobileActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
            <Link
              href="/inscripciones"
              className={`btn-primary ${styles.mobileCta}`}
              onClick={() => setMenuOpen(false)}
            >
              {t('cta')}
            </Link>
            <button className={styles.localeSwitcherMobile} onClick={switchLocale}>
              <span className={locale === 'es' ? styles.localeActive : ''}>ES</span>
              <span className={styles.localeDivider}>|</span>
              <span className={locale === 'en' ? styles.localeActive : ''}>EN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
