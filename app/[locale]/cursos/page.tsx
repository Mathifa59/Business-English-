'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import CourseCard from '@/components/ui/CourseCard';
import styles from './page.module.css';

const ALL_COURSES = [
  { level: 'A1-A2', filter: 'básico',       title: 'Business English A1-A2',               modality: 'Online · Presencial', duration: '3 meses · 36 horas', price: 'S/. 590', spotsUsed: 14, spotsTotal: 20 },
  { level: 'B1',    filter: 'intermedio',    title: 'Business English B1 Intermedio',        modality: 'Online · Híbrido',    duration: '3 meses · 48 horas', price: 'S/. 690', spotsUsed: 10, spotsTotal: 18 },
  { level: 'B2',    filter: 'intermedio',    title: 'Business English B2 Upper-Intermediate', modality: 'Online',             duration: '4 meses · 56 horas', price: 'S/. 740', spotsUsed: 7,  spotsTotal: 16 },
  { level: 'C1',    filter: 'avanzado',      title: 'C1 Advanced Business English',          modality: 'Online · Híbrido',    duration: '4 meses · 60 horas', price: 'S/. 790', spotsUsed: 8,  spotsTotal: 15 },
  { level: 'Especial', filter: 'ejecutivo',  title: 'Inglés para entrevistas de trabajo',    modality: 'Online',             duration: '6 semanas · 24 horas', price: 'S/. 450', spotsUsed: 5, spotsTotal: 12 },
  { level: 'Especial', filter: 'ejecutivo',  title: 'Presentaciones en inglés',              modality: 'Online · Presencial', duration: '6 semanas · 24 horas', price: 'S/. 450', spotsUsed: 4, spotsTotal: 12 },
];

const FILTERS = ['todos', 'básico', 'intermedio', 'avanzado', 'ejecutivo'] as const;

export default function CursosPage() {
  const t = useTranslations('courses');
  const [active, setActive] = useState<string>('todos');

  const filterLabels: Record<string, string> = {
    todos: t('filter_all'),
    básico: t('filter_basic'),
    intermedio: t('filter_intermediate'),
    avanzado: t('filter_advanced'),
    ejecutivo: t('filter_executive'),
  };

  const visible = ALL_COURSES.filter(
    (c) => active === 'todos' || c.filter === active
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* ── Courses grid ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          {/* Filters */}
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterPill} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {visible.map((course, i) => (
              <AnimateOnScroll key={course.title} delay={i * 80}>
                <CourseCard
                  {...course}
                  spotsLabel={t('spots')}
                  moreInfoLabel={t('more_info')}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
