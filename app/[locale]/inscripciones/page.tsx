'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import styles from './page.module.css';

type FormState = 'idle' | 'loading' | 'success';

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  level: string;
  modality: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  level?: string;
}

const COURSES = [
  'Business English A1-A2',
  'Business English B1 Intermedio',
  'Business English B2 Upper-Intermediate',
  'C1 Advanced Business English',
  'Inglés para entrevistas de trabajo',
  'Presentaciones en inglés',
];

const MAX_MSG = 300;

export default function InscripcionesPage() {
  const t = useTranslations('enrollment');

  const [formState, setFormState] = useState<FormState>('idle');
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    level: '',
    modality: 'online',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = t('error_name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = t('error_email');
    if (!/^9\d{2}[\s-]?\d{3}[\s-]?\d{3}$/.test(data.phone.replace(/\s/g, '')))
      e.phone = t('error_phone');
    if (!data.course) e.course = t('error_course');
    if (!data.level) e.level = t('error_level');
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  }

  function set(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const charsLeft = MAX_MSG - data.message.length;

  if (formState === 'success') {
    return (
      <>
        <section className={`hero-bg ${styles.hero}`}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
            <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
          </div>
        </section>
        <section className={`section ${styles.sectionSoft}`}>
          <div className="container">
            <div className={styles.successPanel}>
              <div className={styles.successCheck}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="var(--color-accent)" strokeWidth="4"/>
                  <polyline
                    points="18,33 27,42 46,22"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="60"
                    style={{ animation: 'checkDraw 0.6s ease 0.2s both' }}
                  />
                </svg>
              </div>
              <h2 className={styles.successTitle}>{t('success_title')}</h2>
              <p className={styles.successText}>{t('success_text')}</p>
              <Link href="/" className="btn-primary">
                {t('success_cta')}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className={`hero-bg ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className={`section ${styles.sectionSoft}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>{t('form_title')}</h2>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_name')} *</label>
                  <input
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={data.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_email')} *</label>
                  <input
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={data.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_phone')} *</label>
                  <input
                    type="tel"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    value={data.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="999 999 999"
                  />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                {/* Course */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_course')} *</label>
                  <select
                    className={`${styles.input} ${styles.select} ${errors.course ? styles.inputError : ''}`}
                    value={data.course}
                    onChange={(e) => set('course', e.target.value)}
                  >
                    <option value="">{t('select_course')}</option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.course && <span className={styles.error}>{errors.course}</span>}
                </div>

                {/* Level */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_level')} *</label>
                  <select
                    className={`${styles.input} ${styles.select} ${errors.level ? styles.inputError : ''}`}
                    value={data.level}
                    onChange={(e) => set('level', e.target.value)}
                  >
                    <option value="">{t('select_level')}</option>
                    <option value="beginner">{t('level_beginner')}</option>
                    <option value="basic">{t('level_basic')}</option>
                    <option value="intermediate">{t('level_intermediate')}</option>
                    <option value="advanced">{t('level_advanced')}</option>
                  </select>
                  {errors.level && <span className={styles.error}>{errors.level}</span>}
                </div>

                {/* Modality */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_modality')}</label>
                  <div className={styles.radioGroup}>
                    {(['online', 'in_person', 'hybrid'] as const).map((m) => (
                      <label key={m} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name="modality"
                          value={m}
                          checked={data.modality === m}
                          onChange={() => set('modality', m)}
                          className={styles.radioInput}
                        />
                        <span className={styles.radioCustom} />
                        {t(`modality_${m}` as any)}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label className={styles.label}>{t('field_message')}</label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    value={data.message}
                    onChange={(e) => set('message', e.target.value.slice(0, MAX_MSG))}
                    placeholder={t('field_message_placeholder')}
                    rows={4}
                  />
                  <span className={`${styles.charCount} ${charsLeft < 30 ? styles.charCountWarn : ''}`}>
                    {charsLeft} {t('chars_remaining')}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formState === 'loading'}
                  style={formState === 'loading' ? { opacity: 0.75, cursor: 'not-allowed' } : undefined}
                >
                  {formState === 'loading' ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={{ animation: 'rotate 0.8s linear infinite' }}
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      {t('sending')}
                    </>
                  ) : (
                    t('submit')
                  )}
                </button>
              </form>
            </div>

            {/* Info panel */}
            <div className={styles.infoPanel}>
              <div className={styles.infoPanelInner}>
                <h3 className={styles.infoTitle}>{t('info_title')}</h3>
                <ul className={styles.benefits}>
                  {(['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const).map((b) => (
                    <li key={b} className={styles.benefit}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>

                <hr className={styles.divider} />

                <h4 className={styles.contactQuickTitle}>{t('contact_title')}</h4>
                <div className={styles.contactQuick}>
                  <a href="https://wa.me/51999999999" className={styles.contactLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    {t('whatsapp')}
                  </a>
                  <a href="tel:+51999999999" className={styles.contactLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {t('phone')}
                  </a>
                  <a href="mailto:info@bienglish.pe" className={styles.contactLink}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {t('email')}
                  </a>
                </div>

                <hr className={styles.divider} />

                <h4 className={styles.contactQuickTitle}>{t('schedule_title')}</h4>
                <p className={styles.schedule}>{t('schedule')}</p>

                <div className={`${styles.limitedBadge} animate-pulse`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {t('limited_spots')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
