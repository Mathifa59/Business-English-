import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import BlogCard from '@/components/ui/BlogCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog — Business English Academy',
  description:
    'Recursos, consejos y estrategias para dominar el inglés de negocios. Vocabulario, entrevistas, certificaciones y más.',
};

const ARTICLES = [
  { key: 'article1' },
  { key: 'article2' },
  { key: 'article3' },
] as const;

function BlogContent() {
  const t = useTranslations('blog');

  return (
    <>
      {/* ── Hero ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className={styles.grid}>
            {ARTICLES.map(({ key }, i) => (
              <AnimateOnScroll key={key} delay={i * 100}>
                <BlogCard
                  title={t(`${key}_title` as any)}
                  excerpt={t(`${key}_excerpt` as any)}
                  category={t(`${key}_category` as any)}
                  date={t(`${key}_date` as any)}
                  readTime={t(`${key}_read` as any)}
                  readLabel={t('read_more')}
                />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return <BlogContent />;
}
