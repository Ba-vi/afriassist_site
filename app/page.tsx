'use client';
import { useEffect } from 'react';
import styles from './page.module.css';
import ThemeToggle from './themetoggle';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.reveal')
      .forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(24px)';
        htmlEl.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>Afri<span>Assist</span></div>
        <ul className={styles.navLinks}>
          <li><a href="#problem">The Gap</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#demo">Demo</a></li>
          <li><a href="#advantages">Why it matters</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#cta" className={styles.navCta}>Try it</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>2G meets AI &nbsp;·&nbsp; Africa 🇺🇬</div>
            <h1>
              No internet<br />
              shouldn&apos;t mean<br />
              <em>no knowledge.</em>
            </h1>
            <p className={styles.heroSub}>
              AfriAssist delivers AI-powered learning and farming advice to every phone —
              no data, no Wi-Fi, no barrier. Just send an SMS or dial a code.
            </p>
            <div className={styles.heroActions}>
              <a href="#demo" className={styles.btnPrimary}>See it in action →</a>
              <a href="#how" className={styles.btnGhost}>How it works</a>
            </div>
          </div>

          {/* Village boy photo */}
          <div className={styles.heroVisual}>
            <div className={styles.villageScene}>
              <div className={styles.sceneGlow} />

              <div className={styles.photoWrap}>
                <img
                  src="/images/hero-boy.jpg"
                  alt="Boy using AfriAssist via SMS"
                  className={styles.heroPhoto}
                />

                {/* Notification badge on the phone */}
                <div className={styles.notifBadge}>1</div>

                {/* Bubble 1 */}
                <div className={`${styles.chatBubble} ${styles.bubble1}`}>
                  <span className={styles.bubbleLabel}>LEARN food?</span>
                </div>

                {/* Bubble 2 */}
                <div className={`${styles.chatBubble} ${styles.bubble2}`}>
                  <span className={styles.bubbleLabel}>AI: Food is something...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          {[
            { num: '600M+', label: 'Africans without internet' },
            { num: '90%',   label: 'Mobile penetration in Africa' },
            { num: '2',     label: 'Keywords. LEARN & FARM' },
            { num: '0MB',   label: 'Data required to use' },
          ].map((s) => (
            <div key={s.label} className={`${styles.statItem} reveal`}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <section className={styles.section} id="problem">
        <div className={styles.sectionInner}>
          <div className={styles.sectionTag}>The access divide</div>
          <h2 className={styles.sectionTitle}>Millions learn in silence<br/>because of a signal bar.</h2>
          <p className={styles.sectionBody}>In rural Africa, knowledge stops where the internet ends. AfriAssist bridges that gap.</p>
          <div className={styles.problemGrid}>
            {[
              { icon: '📡', title: 'No internet, no access', body: 'Millions of students have never used Google. A question about photosynthesis goes unanswered for days.' },
              { icon: '🌾', title: 'Farmers guess instead of knowing', body: 'A farmer sees yellow leaves on their maize. Without expert advice, they guess. AfriAssist delivers an agricultural expert in seconds.' },
              { icon: '📱', title: 'Feature phones still dominate', body: 'Over 60% of mobile users in rural Africa have basic feature phones. That\'s the infrastructure AfriAssist runs on — deliberately.' },
              { icon: '🏫', title: 'Overburdened classrooms', body: 'One teacher for 80 students is common. AfriAssist becomes the always-available teaching assistant — patient, instant, and accessible.' },
            ].map((c) => (
              <div key={c.title} className={`${styles.problemCard} reveal`}>
                <div className={styles.problemIcon}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={`${styles.section} ${styles.howSection}`} id="how">
        <div className={styles.sectionInner}>
          <div className={styles.sectionTag}>How it works</div>
          <h2 className={styles.sectionTitle}>Four steps. Any phone.<br/>Any question.</h2>
          <div className={styles.flowSteps}>
            {[
              { n: '1', title: 'Send an SMS or dial USSD', body: 'Type LEARN or FARM + your question. Or dial *384# for a guided menu. No app, no data.' },
              { n: '2', title: "Africa's Talking routes it", body: "Africa's Talking delivers the message to our Django backend in under a second." },
              { n: '3', title: 'AI reads and replies', body: 'Our backend picks the right AI prompt — teacher mode or agricultural officer mode — and gets a concise answer.' },
              { n: '4', title: 'Answer arrives on your phone', body: 'Within seconds, a plain SMS reply lands. No internet, no app store, no barrier.' },
            ].map((s) => (
              <div key={s.n} className={`${styles.step} reveal`}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className={styles.missionSection}>
        <div className={styles.missionBg}>
          <img
            src="/images/impact-children.jpg"
            alt="Children in rural African areas"
            className={styles.missionPhoto}
          />
          <div className={styles.missionOverlay} />
        </div>
        <div className={styles.missionContent}>
          <p className={styles.missionQuote}>
            &ldquo; <em> No internet </em> access  should never mean <em>denial of knowledge.</em>&rdquo;
          </p>
          <p className={styles.missionSub}>
            AfriAssist closes the gap between the child in Kampala with a smartphone and the child in a rural village with a basic phone and a burning curiosity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} id="cta">
        <div className={styles.ctaBox}>
          <h2>Start learning today.</h2>
          <p>Send your first message from any phone, anywhere in Africa.</p>
          <div className={styles.ctaButtons}>
            <a href="#demo" className={styles.btnPrimary}>See the demo →</a>
            <a href="#how" className={styles.btnGhost}>How it works</a>
          </div>
          <div className={styles.ctaFootnote}>
            SMS: Send <strong>LEARN</strong>  + your question &nbsp;·&nbsp; USSD: Dial <strong>*384#</strong>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>AfriAssist</div>
        <div className={styles.footerNote}>2G Meets AI · Africa 2026</div>
        <div>🇺🇬</div>
      </footer>
    </>
  );
}