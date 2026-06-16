import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import CourseCard from '@/components/ui/CourseCard';
import StatCard from '@/components/ui/StatCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Business English Academy — Habla inglés con confianza',
  description:
    'Domina el inglés de negocios con docentes nativos, metodología acelerada y certificación internacional. Cursos online y presenciales en Lima.',
  openGraph: {
    title: 'Business English Academy — Habla inglés con confianza',
    description: 'Formamos profesionales listos para el mercado global con Business English.',
  },
};

function HeroTitle() {
  const t = useTranslations('home');
  const title = t('title');
  const highlight = t('title_highlight');
  const idx = title.indexOf(highlight);

  if (idx === -1) {
    return (
      <h1 className={styles.heroTitle}>
        {title} {t('title_second')}
      </h1>
    );
  }

  return (
    <h1 className={styles.heroTitle}>
      {title.slice(0, idx)}
      <span className={styles.heroHighlight}>{highlight}</span>
      {title.slice(idx + highlight.length)}
      {' '}{t('title_second')}
    </h1>
  );
}

const WHY_CARDS = [
  {
    key: 'card1',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    key: 'card2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    key: 'card3',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    key: 'card4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
] as const;

const HOME_COURSES = [
  { level: 'A1-A2', title: 'Business English Básico', modality: 'Online · Presencial', duration: '3 meses · 36 horas', price: 'S/. 590', spotsUsed: 14, spotsTotal: 20 },
  { level: 'B1', title: 'Business English Intermedio', modality: 'Online · Híbrido', duration: '3 meses · 48 horas', price: 'S/. 690', spotsUsed: 10, spotsTotal: 18 },
  { level: 'C1', title: 'Business English Avanzado', modality: 'Online', duration: '4 meses · 60 horas', price: 'S/. 790', spotsUsed: 8, spotsTotal: 15 },
];

const TESTIMONIALS = [
  {
    name: 'María Fernández',
    role: 'Gerente de Proyectos · Minera Andina',
    text: 'Gracias a Business English Academy obtuve la promoción que esperaba. Ahora lidero reuniones con clientes internacionales sin ningún problema.',
  },
  {
    name: 'Carlos Herrera',
    role: 'Analista Financiero · Banco Continental',
    text: 'El método acelerado es increíble. En 3 meses pasé de nivel básico a presentar reportes en inglés ante directivos de Estados Unidos.',
  },
  {
    name: 'Lucía Torres',
    role: 'Ejecutiva de Ventas · Tech Startup',
    text: 'Los docentes nativos hacen toda la diferencia. Sus correcciones en tiempo real y el enfoque en negocios reales me prepararon perfectamente para el mercado global.',
  },
];

function HomeContent() {
  const t = useTranslations('home');
  const tCourses = useTranslations('courses');

  return (
    <>
      {/* ── HERO ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>{t('badge')}</div>

            <HeroTitle />

            <p className={styles.heroSubtitle}>{t('subtitle')}</p>

            <div className={styles.heroActions}>
              <Link href="/inscripciones" className="btn-primary">
                {t('cta_primary')}
              </Link>
              <Link href="/cursos" className="btn-secondary-outline">
                {t('cta_secondary')}
              </Link>
            </div>

            <div className={styles.heroStats}>
              <span>{t('stats.students')}</span>
              <span className={styles.heroStatDivider} />
              <span>{t('stats.approval')}</span>
              <span className={styles.heroStatDivider} />
              <span>{t('stats.cert')}</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.heroImgPlaceholder}>
              <span className={styles.heroImgLabel}>{t('hero_image_label')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={`section ${styles.sectionWhite}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('why.title')}</h2>
            <p>{t('why.subtitle')}</p>
          </div>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map(({ key, icon }, i) => (
              <AnimateOnScroll key={key} delay={i * 80}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{icon}</div>
                  <h3 className={styles.whyCardTitle}>{t(`why.${key}_title` as any)}</h3>
                  <p className={styles.whyCardDesc}>{t(`why.${key}_desc` as any)}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('courses_section.title')}</h2>
            <p>{t('courses_section.subtitle')}</p>
          </div>
          <div className={styles.coursesGrid}>
            {HOME_COURSES.map((course, i) => (
              <AnimateOnScroll key={course.title} delay={i * 100}>
                <CourseCard
                  {...course}
                  spotsLabel={tCourses('spots')}
                  moreInfoLabel={tCourses('more_info')}
                />
              </AnimateOnScroll>
            ))}
          </div>
          <div className={styles.seeAll}>
            <Link href="/cursos" className="btn-secondary-light">
              {t('courses_section.see_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS (dark) ── */}
      <section className={`section ${styles.sectionDark}`}>
        <div className="container">
          <div className={`section-header section-header--dark ${styles.statsHeader}`}>
            <h2>{t('stats_section.title')}</h2>
          </div>
          <div className={styles.statsGrid}>
            <StatCard
              number={parseInt(t('stats_section.s1_number'))}
              suffix={t('stats_section.s1_suffix')}
              label={t('stats_section.s1_label')}
            />
            <StatCard
              number={parseInt(t('stats_section.s2_number'))}
              suffix={t('stats_section.s2_suffix')}
              label={t('stats_section.s2_label')}
            />
            <StatCard
              number={parseInt(t('stats_section.s3_number'))}
              suffix={t('stats_section.s3_suffix')}
              label={t('stats_section.s3_label')}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`section ${styles.sectionWhite}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('testimonials.title')}</h2>
            <p>{t('testimonials.subtitle')}</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t2, i) => (
              <AnimateOnScroll key={t2.name} delay={i * 80}>
                <TestimonialCard {...t2} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return <HomeContent />;
}
