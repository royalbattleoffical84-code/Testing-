import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import '../landing.css'

export const Route = createFileRoute('/')({
  component: Home,
})

const INVITE = 'B1PFt8YHopxiYzg1'
const TG_LINK = `https://t.me/+${INVITE}`
const ALT_LINK = `https://telegram.me/joinchat/${INVITE}`
const APP_LINK = `tg://join?invite=${INVITE}`
const LOGO = '/.netlify/images?url=/images/sureshot-logo.jpg&w=480&fm=webp'

const FEATURES = [
  {
    title: 'Daily GROWTH 📈 Updates',
    text: 'Har din fresh updates seedha channel par.',
  },
  {
    title: 'Fast Announcements',
    text: 'Sabse pehle updates, notification on rakhein.',
  },
  {
    title: 'Official Community',
    text: 'SURESHOT BY RAM ke Telegram channel se judein.',
  },
]

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13 1.4 11.5c-1-.3-1.1-1 .2-1.5L20.5 2.8c.9-.3 1.7.2 1.4 1.5Z" />
    </svg>
  )
}

function Home() {
  const [toast, setToast] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  // On Android, open the Telegram app directly via an intent, falling back to the web link.
  function handleJoin(e: MouseEvent<HTMLAnchorElement>) {
    if (
      !/Android/i.test(navigator.userAgent) ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return
    e.preventDefault()
    window.location.assign(
      `intent://join?invite=${INVITE}#Intent;scheme=tg;S.browser_fallback_url=${encodeURIComponent(TG_LINK)};end`,
    )
  }

  async function copyLink() {
    let ok = false
    try {
      await navigator.clipboard.writeText(TG_LINK)
      ok = true
    } catch {
      const ta = document.createElement('textarea')
      ta.value = TG_LINK
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        ok = document.execCommand('copy')
      } catch {
        ok = false
      }
      ta.remove()
    }
    setToast(ok ? 'Link copied ✓' : `Copy this link: ${TG_LINK}`)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), ok ? 2000 : 8000)
  }

  return (
    <div className="landing">
      <main className="shell">
        <div className="sparks" aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => (
            <i
              key={i}
              style={{
                left: `${(i * 37 + 11) % 100}%`,
                animationDuration: `${7 + (i % 8)}s`,
                animationDelay: `${-i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div className="center">
          <div className="avatar reveal">
            <div className="ring" aria-hidden="true" />
            <img
              src={LOGO}
              alt="SURESHOT BY RAM — GROWTH 📈 logo"
              width={240}
              height={240}
              fetchPriority="high"
            />
          </div>
          <div className="badge reveal" style={{ animationDelay: '.1s' }}>
            <span className="dot" />
            OFFICIAL CHANNEL
          </div>
          <h1 className="reveal" style={{ animationDelay: '.18s' }}>
            <span className="h1-main">𝐒𝐔𝐑𝐄𝐒𝐇𝐎𝐓</span>{' '}
            <span className="h1-sub">𝐁𝐘 𝐑𝐀𝐌</span>
          </h1>
          <p className="lead reveal" style={{ animationDelay: '.3s' }}>
            Join the official Telegram channel for daily GROWTH 📈 updates,
            community news and announcements.
          </p>
          <a
            className="cta reveal"
            style={{ animationDelay: '.36s' }}
            href={TG_LINK}
            onClick={handleJoin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ico">
              <TelegramIcon />
            </span>
            Join Telegram
          </a>
        </div>

        <section
          className="card reveal"
          style={{ animationDelay: '.42s' }}
          aria-label="Official Telegram channel"
        >
          <div className="card-top">
            <span>BY RAM</span>
            <span className="live">
              <TelegramIcon />
              TELEGRAM
            </span>
          </div>
          <h2>
            𝐒𝐔𝐑𝐄𝐒𝐇𝐎𝐓 <span>𝐁𝐘 𝐑𝐀𝐌</span>
          </h2>
          <p className="tag">OFFICIAL TELEGRAM CHANNEL</p>
          <a
            className="join"
            href={TG_LINK}
            onClick={handleJoin}
            target="_blank"
            rel="noopener noreferrer"
          >
            TELEGRAM CHANNEL JOIN NOW →
          </a>
          <div className="bar" aria-hidden="true">
            <i />
          </div>
        </section>

        <p className="note">
          Android par <b>Join Telegram</b> se app kholne ki request aayegi.
          “Open Telegram” allow karein; app chooser aaye to apna Telegram
          chunein. Blank page aaye to <b>Copy Link</b> dabayein aur Telegram ke
          Saved Messages mein paste karke link kholein. Ya{' '}
          <a href={ALT_LINK} target="_blank" rel="noopener noreferrer">
            alternate Telegram link
          </a>{' '}
          kholein.
          <br />
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
            {TG_LINK}
          </a>
        </p>

        <div className="actions">
          <button className="btn" type="button" onClick={copyLink}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
            </svg>
            Copy Link
          </button>
          <a className="btn" href={APP_LINK}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
            </svg>
            Open in App
          </a>
        </div>


        <section className="features" aria-label="Channel highlights">
          {FEATURES.map((f, i) => (
            <div className="feat" key={f.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="stats">
          <div>
            <strong>JOIN</strong>
            <span>Community</span>
          </div>
          <div>
            <strong>DAILY</strong>
            <span>Updates</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Official</span>
          </div>
        </div>

        <footer>
          <b>𝐒𝐔𝐑𝐄𝐒𝐇𝐎𝐓 𝐁𝐘 𝐑𝐀𝐌</b>
          <br />
          18+ only. GROWTH 📈 involves financial risk — play responsibly.
          <br />© {new Date().getFullYear()} 𝐒𝐔𝐑𝐄𝐒𝐇𝐎𝐓 𝐁𝐘 𝐑𝐀𝐌 · All rights
          reserved
        </footer>
      </main>
      <div
        className={`toast${toast ? ' show' : ''}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  )
}
