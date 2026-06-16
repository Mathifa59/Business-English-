import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nosotros — Business English Academy',
  description:
    'Conoce al equipo detrás de Business English Academy. Más de 8 años formando profesionales listos para el mercado global.',
};

const CREDENTIALS = ['credential1', 'credential2', 'credential3', 'credential4'] as const;
const PILLARS = ['p1', 'p2', 'p3'] as const;

function NosotrosContent() {
  const t = useTranslations('about');

  return (
    <>
      {/* ── Hero ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* ── Director ── */}
      <section className={`section ${styles.sectionWhite}`}>
        <div className="container">
          <div className={styles.directorGrid}>
            <AnimateOnScroll className={styles.directorImgWrap}>
              <div className={styles.directorImg}>
                <span className={styles.directorImgLabel}>{t('director_name')}</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={120} className={styles.directorInfo}>
              <span className={styles.eyebrow}>{t('director_eyebrow')}</span>
              <h2 className={styles.directorName}>{t('director_name')}</h2>
              <p className={styles.directorBio}>{t('director_bio')}</p>

              <ul className={styles.credentials}>
                {CREDENTIALS.map((key) => (
                  <li key={key} className={styles.credential}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-secondary-light">{t('meet_team')}</button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <AnimateOnScroll>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>{t('mission_title')}</h3>
                <p className={styles.mvText}>{t('mission_text')}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={120}>
              <div className={styles.mvCard}>
                <div className={styles.mvIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>{t('vision_title')}</h3>
                <p className={styles.mvText}>{t('vision_text')}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className={`section ${styles.sectionWhite}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('pillars_title')}</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((key, i) => (
              <AnimateOnScroll key={key} delay={i * 120}>
                <div className={styles.pillar}>
                  <span className={styles.pillarNumber}>0{i + 1}</span>
                  <h3 className={styles.pillarTitle}>{t(`${key}_title` as any)}</h3>
                  <p className={styles.pillarDesc}>{t(`${key}_desc` as any)}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function NosotrosPage() {
  return <NosotrosContent />;
}
