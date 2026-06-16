import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contacto — Business English Academy',
  description:
    'Contáctanos para resolver tus dudas sobre nuestros cursos de Business English. Lima, Perú.',
};

function ContactContent() {
  const t = useTranslations('contact');

  return (
    <>
      {/* ── Hero ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: info */}
            <AnimateOnScroll className={styles.infoCol}>
              <div className={styles.infoWrap}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.infoLabel}>{t('address_title')}</h3>
                    <p className={styles.infoText}>{t('address')}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.infoLabel}>{t('phone_title')}</h3>
                    <a href="tel:+51999999999" className={styles.infoLink}>{t('phone')}</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.infoLabel}>{t('email_title')}</h3>
                    <a href="mailto:info@bienglish.pe" className={styles.infoLink}>{t('email')}</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.infoLabel}>{t('schedule_title')}</h3>
                    <p className={styles.infoText}>{t('schedule_weekdays')}</p>
                    <p className={styles.infoText}>{t('schedule_saturday')}</p>
                  </div>
                </div>

                <div className={styles.socialsSection}>
                  <h3 className={styles.socialsTitle}>{t('social_title')}</h3>
                  <div className={styles.socials}>
                    <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/51999999999" aria-label="WhatsApp" className={styles.socialIcon}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right: map placeholder */}
            <AnimateOnScroll delay={120} className={styles.mapCol}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapPin}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p className={styles.mapLabel}>{t('map_label')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactoPage() {
  return <ContactContent />;
}
