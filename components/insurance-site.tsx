'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Clock3, Camera, MapPin, Menu, Phone, ShieldCheck, Sparkles, X } from 'lucide-react'

const services = [
  { n: '01', title: 'Two wheeler', detail: 'Keep every commute, weekend ride, and open road feeling worry-free.', icon: '✳', tag: 'BUILT FOR THE EVERYDAY' },
  { n: '02', title: 'Four wheeler', detail: 'Thoughtful cover for the car that takes you everywhere that matters.', icon: '◒', tag: 'YOUR CAR, COVERED' },
  { n: '03', title: 'Commercial', detail: 'Reliable protection that keeps your business and your fleet moving.', icon: '↗', tag: 'KEEP BUSINESS MOVING' },
  { n: '04', title: 'Comprehensive', detail: 'A wider safety net for the unexpected moments along the way.', icon: '✧', tag: 'GO A LITTLE FURTHER' },
  { n: '05', title: 'Third-party', detail: 'Meet the essentials with straightforward, dependable protection.', icon: '＋', tag: 'THE ESSENTIALS' },
  { n: '06', title: 'Renewals & claims', detail: 'A real person to help you through the details, start to finish.', icon: '↻', tag: 'HERE WHEN IT COUNTS' },
]
const moments = [
  { src: 'photo-1492144534655-ae79c964c9d7', alt: 'Classic car on a quiet road', label: 'The open road', cls: 'moment-tall' },
  { src: 'photo-1517245386807-bb43f82c33c4', alt: 'Team gathered around a table', label: 'Better, together', cls: '' },
  { src: 'photo-1551836022-d5d88e9218df', alt: 'Colleagues sharing a conversation', label: 'People first', cls: '' },
  { src: 'photo-1503376780353-7e6692767b70', alt: 'A beautiful car ready for a drive', label: 'Made for the journey', cls: 'moment-wide' },
]
const branches = [
  { name: 'City Centre', area: 'Your city, downtown', address: '123 Main Street, City Centre', phone: '+1 (555) 010-2040', hours: 'Mon–Fri, 9:00 am–5:30 pm' },
  { name: 'Northside', area: 'Here for the neighbourhood', address: '48 North Avenue, Northside', phone: '+1 (555) 010-2080', hours: 'Mon–Fri, 9:00 am–5:30 pm' },
]
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export function InsuranceSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedMoment, setSelectedMoment] = useState<number | null>(null)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])
  const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Branches', '#branches'], ['Moments', '#moments']]
  return (
    <main>
      <header className={`nav-wrap ${isScrolled ? 'nav-scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Waymark home"><span className="brand-icon"><ShieldCheck size={22} strokeWidth={2.4} /></span><span>waymark<span className="brand-dot">.</span><small>VEHICLE INSURANCE</small></span></a>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a></nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="home" className="hero">
        <div className="hero-grain" />
        <div className="hero-copy"><motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: .65 }}><div className="eyebrow light"><span className="eyebrow-line" /> HERE FOR THE WAY AHEAD</div><h1>Drive with<br />confidence.<br /><span>We&apos;ve got</span><br /><span className="hero-last">you covered<span className="yellow-period">.</span></span></h1><p className="hero-sub">Protection for the roads you know,<br />and the ones you haven&apos;t met yet.</p><div className="hero-actions"><a className="button-yellow" href="#contact">Find your cover <ArrowRight size={17} /></a><a className="text-link light-link" href="#about">Get to know us <ArrowDown size={15} /></a></div></motion.div>
          <div className="hero-proof"><div className="proof-check"><Check size={15} /></div><span><strong>A little more peace of mind.</strong><small>Good people. Straightforward cover.</small></span><span className="proof-index">01 — 03</span></div>
        </div>
        <div className="hero-visual"><div className="hero-photo" role="img" aria-label="Premium car on a scenic coastal road" /><div className="hero-photo-wash" /><div className="hero-image-note"><span>01 / THE OPEN ROAD</span><span>Wherever life takes you.</span></div><div className="hero-stamp"><span>GO</span><span>YOUR</span><span>OWN</span><span>WAY<span className="yellow-period">.</span></span><ArrowDown size={18} /></div><div className="hero-vertical">GOOD ROADS. GOOD PEOPLE. GOOD COVER.</div></div>
        <div className="hero-bottom"><span>INDEPENDENT THINKING. PERSONAL SERVICE.</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
      </section>

      <section className="trust-strip" aria-label="Our promise"><div><span>01</span> A real person when you need one</div><div><span>02</span> Cover that makes sense</div><div><span>03</span> Here for the whole journey</div><Sparkles className="trust-spark" size={22} /></section>

      <section id="about" className="about-section section-pad"><div className="about-top"><motion.div className="about-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} variants={fadeUp} transition={{ duration: .7 }}><div className="eyebrow"><span className="eyebrow-line" /> A DIFFERENT KIND OF COVER</div><h2>More than insurance.<br /><span>Your roadside</span><br />partner<span className="blue-period">.</span></h2></motion.div><div className="about-aside"><p>Life doesn&apos;t travel in a straight line. We&apos;re here to make sure a bump in the road stays just that—a bump.</p><a className="text-link" href="#contact">A little about us <ArrowRight size={16} /></a><div className="about-index">EST. FOR THE ROAD AHEAD <b>↘</b></div></div></div>
        <div className="about-visual"><div className="about-photo" role="img" aria-label="Car driving through a mountain road"/><div className="about-photo-shape"/><div className="about-caption"><span>THOUGHTFUL COVER.</span><span>HUMAN AT HEART.</span></div><div className="mission-card"><div className="mission-mark"><ShieldCheck size={20}/></div><span>OUR PROMISE</span><p>Make the complicated feel simple. And the unexpected feel manageable.</p></div><div className="about-roundel"><span>ALWAYS</span><b>in<br/>your<br/>corner</b><span>ON THE ROAD</span></div></div>
        <div className="stats-row">{[['12k+', 'Happy drivers'], ['18', 'Years on the road'], ['32k+', 'Policies protected'], ['08', 'Neighbourhoods']].map(([n, l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
        <div className="values-row"><div><span className="value-n">01 /</span><h3>Who we are</h3><p>People who care about people, with a thing for getting you where you need to go.</p></div><div><span className="value-n">02 /</span><h3>Why we&apos;re here</h3><p>To make vehicle insurance feel less like paperwork and more like a partnership.</p></div><div><span className="value-n">03 /</span><h3>Where we&apos;re headed</h3><p>A world where every driver feels understood, supported, and ready for what&apos;s next.</p></div></div>
      </section>

      <section id="services" className="services-section section-pad"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> COVER THAT MOVES WITH YOU</div><h2>Your road.<br /><span>Your kind of cover.</span></h2></div><div className="section-heading-aside"><p>Every journey is different. Your insurance should be, too.</p><a href="#contact" className="text-link">Let&apos;s find yours <ArrowRight size={16}/></a></div></div><div className="services-grid">{services.map((s, i) => <motion.a href="#contact" className={`service-card service-${i + 1}`} key={s.n} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={fadeUp} transition={{ duration: .5, delay: i * .06 }}><div className="service-card-top"><span className="service-number">{s.n} /</span><span className="service-symbol">{s.icon}</span><ArrowUpRight className="service-arrow" size={19}/></div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.detail}</p><div className="service-bottom"><span>EXPLORE COVER</span><ChevronRight size={16}/></div></motion.a>)}</div></section>

      <section id="branches" className="branches-section"><div className="branch-map" aria-label="Illustrative map showing branch locations"><div className="map-grid"/><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><div className="map-label label-one"><span/>CITY CENTRE</div><div className="map-label label-two"><span/>NORTHSIDE</div><span className="map-compass">N<br/>↑</span><div className="map-note">YOUR NEIGHBOURHOOD,<br/>A LITTLE CLOSER.</div></div><div className="branch-content"><div className="eyebrow light"><span className="eyebrow-line"/> COME SAY HELLO</div><h2>Good people.<br /><span>Close by.</span></h2><p className="branch-intro">A question, a coffee, a quick chat about cover. We&apos;re never far away.</p><div className="branch-list">{branches.map(b => <article className="branch-card" key={b.name}><div className="branch-title"><div><span className="branch-area">{b.area}</span><h3>{b.name}</h3></div><MapPin size={19}/></div><p>{b.address}</p><a href={`tel:${b.phone.replace(/[^+\d]/g, '')}`}>{b.phone}</a><div className="branch-hours"><Clock3 size={14}/>{b.hours}</div><a className="branch-directions" href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15}/></a></article>)}</div><p className="branch-placeholder">Branch details are editable placeholders. Replace with your locations.</p></div></section>

      <section id="moments" className="moments-section section-pad"><div className="moments-head"><div><div className="eyebrow"><span className="eyebrow-line"/> THE PEOPLE BEHIND THE PROMISE</div><h2>Moments that drive<br /><span>us forward.</span></h2></div><p>Little moments, long journeys, and all the good people we meet along the way.</p></div><div className="moments-grid">{moments.map((m, i) => <button className={`moment ${m.cls}`} key={m.label} onClick={() => setSelectedMoment(i)} aria-label={`View photo: ${m.label}`}><img src={`https://images.unsplash.com/${m.src}?auto=format&fit=crop&w=1000&q=80`} alt={m.alt} loading="lazy"/><span className="moment-label">{m.label}<ArrowUpRight size={17}/></span><span className="moment-number">0{i + 1}</span></button>)}</div><p className="gallery-note">A glimpse of the people and places that make Waymark. Replace these images with your own.</p></section>

      <section id="contact" className="contact-section"><div className="contact-photo"/><div className="contact-content"><div className="eyebrow light"><span className="eyebrow-line"/> THE NEXT MILE STARTS HERE</div><h2>Your journey deserves<br /><span>better protection.</span></h2><p>Good cover. Clear answers. A person in your corner. Let&apos;s get you moving.</p><div className="contact-actions"><a className="button-yellow" href="mailto:hello@waymark.example?subject=Vehicle%20insurance%20quote">Get a free quote <ArrowRight size={17}/></a><a className="contact-phone" href="tel:+15550102040"><Phone size={15}/> Or give us a call</a></div><span className="contact-note">NO PRESSURE. JUST A GOOD CONVERSATION.</span></div><div className="contact-side">WAYMARK / FOR THE WAY AHEAD</div></section>

      <footer className="footer"><div className="footer-top"><div className="footer-brand"><a className="brand footer-logo" href="#home"><span className="brand-icon"><ShieldCheck size={22}/></span><span>waymark<span className="brand-dot">.</span><small>VEHICLE INSURANCE</small></span></a><p>A little more peace of mind,<br/>for every road ahead.</p><a className="footer-email" href="mailto:hello@waymark.example">hello@waymark.example <ArrowUpRight size={14}/></a></div><div className="footer-col"><span className="footer-label">FIND YOUR WAY</span>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-col"><span className="footer-label">HOW WE HELP</span>{['Two wheeler', 'Four wheeler', 'Commercial', 'Claims & renewals'].map(v => <a href="#services" key={v}>{v}</a>)}</div><div className="footer-col footer-contact"><span className="footer-label">SAY HELLO</span><a href="tel:+15550102040">+1 (555) 010-2040</a><span>Mon–Fri, 9 am–5:30 pm</span><a className="social" href="https://instagram.com" aria-label="Instagram"><Camera size={17}/> Instagram <ArrowUpRight size={13}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Waymark Insurance. Drive safe out there.</span><span className="footer-placeholder">Brand name and contact details are placeholders.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
      <AnimatePresence>{selectedMoment !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedMoment(null)} role="dialog" aria-modal="true" aria-label={moments[selectedMoment].label}><button className="lightbox-close" onClick={() => setSelectedMoment(null)} aria-label="Close image"><X/></button><motion.img initial={{ scale: .94 }} animate={{ scale: 1 }} src={`https://images.unsplash.com/${moments[selectedMoment].src}?auto=format&fit=crop&w=1600&q=90`} alt={moments[selectedMoment].alt} onClick={e => e.stopPropagation()}/><span>{moments[selectedMoment].label}</span></motion.div>}</AnimatePresence>
    </main>
  )
}
