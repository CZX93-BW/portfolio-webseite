import { Language } from '../models/language';
import { legalNoticeHtml, privacyPolicyHtml } from './legal-texts';

/**
 * Expected top-level shape for each language entry.
 *
 * Some nested values are intentionally typed as `unknown` because individual
 * components only consume their own translation subtree.
 */
type TranslationStructure = {
  header: Record<string, string>;
  hero: Record<string, unknown>;
  about: Record<string, unknown>;
  skills: Record<string, unknown>;
  projects: Record<string, unknown>;
  contact: Record<string, unknown>;
  impressum: Record<string, unknown>;
  privacyPolicy: Record<string, unknown>;
};

/**
 * Central translation dictionary for the portfolio.
 *
 * Components read labels, copy text and legal-page HTML from this object based
 * on the currently selected language.
 */
export const translations = {
  en: {
    header: {
      languageLabel: 'Language selection',
      navigationLabel: 'Main navigation',
      aboutMe: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      homepageLabel: 'Go to homepage',
    },
    hero: {
      role: 'Fullstack Developer',
      title: 'Bastian Wollny',
      workButton: 'Check my work',
      contactButton: 'Contact me',
      contactLinksLabel: 'Contact links',
      githubLabel: 'GitHub profile',
      linkedinLabel: 'LinkedIn profile',
      emailLabel: 'Write email',
      marqueeItems: [
        'Available for remote work',
        'Fullstack Developer',
        'Based in Bottrop',
        'Open to work',
      ],
    },
    about: {
      imageAlt: 'Man working on a laptop',
      label: 'Who I Am',
      title: 'About me',
      intro:
        "Hey there, I'm Bastian! I am a fullstack developer in training with a strong interest in clean frontend architecture, automation and practical AI-supported workflows. I enjoy turning structured ideas into usable digital products.",
      location:
        'I am based in Germany and open to remote work, hybrid setups and professional opportunities where I can keep growing.',
      mindset:
        'I am curious, open-minded and motivated to learn new technologies, improve my skills and understand how things work under the hood.',
      quality:
        'I approach problems with structure, persistence and creativity, always looking for solutions that are understandable, maintainable and efficient.',
    },
    skills: {
      label: 'Technologies',
      title: 'Skill Set',
      intro:
        'I work with modern frontend technologies and continuously expand my technical foundation in backend development, automation and deployment workflows.',
      questionStart: 'You need',
      questionHighlight: 'another skill?',
      contact: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      button: "Let's Talk",
      ariaLabel: 'Technology skills',
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      intro:
        'Explore a selection of my work here - Interact with projects to see my skills in action.',
      closeDialog: 'Close project dialog',
      aboutQuestion: 'What is this project about?',
      fallbackDescription: 'Project description will be added soon.',
      github: 'GitHub ↗',
      liveTest: 'Live Test ↗',
      nextProject: 'Next project',
    },
    testimonials: {
      title: 'What my colleagues say about me',
      carouselLabel: 'Testimonials carousel',
      controlsLabel: 'Carousel controls',
      previousLabel: 'Show previous testimonial',
      nextLabel: 'Show next testimonial',
      selectLabel: 'Show testimonial',
      items: [
        {
          id: 1,
          quote:
            'Basti approached the project highly professionally. He brings massive knowledge in JavaScript and frontend architecture. I particularly appreciated his calm personality. He always stays cool and gets precisely to the point. Working with him was incredibly fun and fostered a great, conflict-free team dynamic. Everyone’s ideas and feedback were valued, resulting in genuine, productive teamwork on equal footing.',
          author: 'Timo Böning',
          role: 'Project Partner',
        },
        {
          id: 2,
          quote: [
            'The collaboration with Bastian was very pleasant from the very beginning. He brought a clear and well-structured approach to the project and explained complex topics in a very understandable and comprehensive way.',
            'Bastian has an impressive amount of knowledge and thinks ahead, identifying potential issues early on. He finds solutions extremely quickly and fixes problems efficiently. Even in stressful situations, he remains calm and composed, creating a very reassuring and positive working atmosphere. Also his JavaScript skills are very high.',
            'All of these skills make Bastian an excellent team member. Thank you very much for the great collaboration!',
          ].join('\n\n'),
          author: 'Magdalena Laurisch',
          role: 'Project Partner',
        },
        {
          id: 3,
          quote: [
            'Working with Bastian during the JOIN project was fantastic. He significantly shaped the structural foundation of the project and always maintained a sharp focus on both quality and long-term vision.',
            'Due to his meticulous approach and strong grasp of logic, I could always rely on him to think tasks through thoroughly and implement them cleanly. I especially appreciate his thirst for knowledge, his focus, and the clear, efficient way we found solutions together. What stands out most in my memory are our long coding nights together, during which he demonstrated remarkable perseverance.',
          ].join('\n\n'),
          author: 'Nico Leiteritz',
          role: 'JOIN Project Partner',
        },
        {
          id: 4,
          quote:
            'Working with Bastian was a true asset, both technically and personally. With his deep backend expertise—especially around Supabase—and his excellent understanding of clean, scalable data structures, he served as the technical backbone of our development. Even when challenges grew complex, his tireless commitment (often working late into the night) ensured our foundation was rock solid. Without his foresight and reliability, the project would never have reached this level of quality. I would gladly work with Bastian again anytime!',
          author: 'Kevin Reinhold Triebe',
          role: 'JOIN Project Partner',
        },
      ],
    },
    contact: {
      label: 'Contact me',
      title: "Let's work together",
      problemTitle: 'Got a problem to solve?',
      intro:
        'Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.',
      needDeveloper: 'Need a Frontend developer?',
      talkLink: "Let's talk!",
      nameLabel: "What's your name?",
      namePlaceholder: 'Your name goes here',
      nameError: 'Please enter your name.',
      emailLabel: "What's your email?",
      emailPlaceholder: 'youremail@email.com',
      emailError: 'Please enter a valid email address.',
      messageLabel: 'How can I help you?',
      messagePlaceholder: 'Hello Bastian, I am interested in...',
      messageError: 'Please enter a message with at least 10 characters.',
      privacyStart: "I've read the",
      privacyLink: 'privacy policy',
      privacyEnd: 'and agree to the processing of my data as outlined.',
      privacyError: 'Please accept the privacy policy.',
      sending: 'Sending...',
      submit: 'Say Hello ;)',
      success: 'Your message has been sent successfully.',
      error: 'Something went wrong. Please try again later.',
    },
    footer: {
      homepageLabel: 'Back to homepage',
      role: 'Fullstack Developer',
      location: 'Bottrop Germany',
      copyright: '© Bastian Wollny 2026',
      navigationLabel: 'Footer navigation',
      links: {
        github: 'Github',
        linkedin: 'LinkedIn',
        email: 'Email',
        legalNotice: 'Legal Notice',
        privacyPolicy: 'Privacy Policy',
      },
    },
    legalNotice: {
      back: 'Back to main page',
      html: legalNoticeHtml.en,
    },
    privacyPolicy: {
      back: 'Back to main page',
      html: privacyPolicyHtml.en,
    },
  },
  de: {
    header: {
      languageLabel: 'Sprachauswahl',
      navigationLabel: 'Hauptnavigation',
      aboutMe: 'Über mich',
      skills: 'Skills',
      projects: 'Projekte',
      homepageLabel: 'Zur Startseite',
    },
    hero: {
      role: 'Fullstack Entwickler',
      title: 'Bastian Wollny',
      workButton: 'Meine Projekte',
      contactButton: 'Kontakt',
      contactLinksLabel: 'Kontaktlinks',
      githubLabel: 'GitHub Profil',
      linkedinLabel: 'LinkedIn Profil',
      emailLabel: 'E-Mail schreiben',
      marqueeItems: [
        'Verfügbar für Remote Work',
        'Fullstack Entwickler',
        'Aus Bottrop',
        'Offen für neue Möglichkeiten',
      ],
    },
    about: {
      imageAlt: 'Mann arbeitet an einem Laptop',
      label: 'Wer ich bin',
      title: 'Über mich',
      intro:
        'Hi, ich bin Bastian! Ich bin Fullstack Developer in Weiterbildung mit starkem Interesse an sauberer Frontend-Architektur, Automation und praxisnahen KI-unterstützten Workflows. Ich setze strukturierte Ideen gerne in nutzbare digitale Produkte um.',
      location:
        'Ich lebe in Deutschland und bin offen für Remote Work, hybride Modelle und berufliche Möglichkeiten, bei denen ich weiter wachsen kann.',
      mindset:
        'Ich bin neugierig, offen und motiviert, neue Technologien zu lernen, meine Fähigkeiten zu verbessern und Dinge wirklich zu verstehen.',
      quality:
        'Ich gehe Probleme strukturiert, ausdauernd und kreativ an und suche Lösungen, die verständlich, wartbar und effizient sind.',
    },
    skills: {
      label: 'Technologien',
      title: 'Skill Set',
      intro:
        'Ich arbeite mit modernen Frontend-Technologien und erweitere meine technische Grundlage stetig in Backend-Entwicklung, Automation und Deployment-Workflows.',
      questionStart: 'Du brauchst',
      questionHighlight: 'einen anderen Skill?',
      contact:
        'Kontaktiere mich gerne. Ich freue mich darauf, mein bisheriges Wissen weiter auszubauen.',
      button: 'Kontakt aufnehmen',
      ariaLabel: 'Technologie-Skills',
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      intro:
        'Entdecke hier eine Auswahl meiner Arbeiten und interagiere mit den Projekten, um meine Skills in Aktion zu sehen.',
      closeDialog: 'Projekt-Dialog schließen',
      aboutQuestion: 'Worum geht es in diesem Projekt?',
      fallbackDescription: 'Die Projektbeschreibung wird bald ergänzt.',
      github: 'GitHub ↗',
      liveTest: 'Live Test ↗',
      nextProject: 'Nächstes Projekt',
    },
    testimonials: {
      title: 'Was Kolleginnen und Kollegen über mich sagen',
      carouselLabel: 'Testimonial-Karussell',
      controlsLabel: 'Karussell-Steuerung',
      previousLabel: 'Vorheriges Testimonial anzeigen',
      nextLabel: 'Nächstes Testimonial anzeigen',
      selectLabel: 'Testimonial anzeigen',
      items: [
        {
          id: 1,
          quote:
            'Basti ging das Projekt äußerst professionell an. Er bringt enormes Wissen in JavaScript und Frontend-Architektur mit. Besonders geschätzt habe ich seine ruhige Art. Er bleibt immer gelassen und kommt präzise auf den Punkt. Die Zusammenarbeit mit ihm hat unglaublich viel Spaß gemacht und zu einer großartigen, konfliktfreien Teamdynamik beigetragen. Die Ideen und das Feedback aller wurden wertgeschätzt, sodass eine echte, produktive Zusammenarbeit auf Augenhöhe entstand.',
          author: 'Timo Böning',
          role: 'Projektpartner',
        },
        {
          id: 2,
          quote: [
            'Die Zusammenarbeit mit Bastian war von Anfang an sehr angenehm. Er brachte eine klare und gut strukturierte Vorgehensweise in das Projekt ein und erklärte komplexe Themen auf sehr verständliche und umfassende Weise.',
            'Bastian verfügt über beeindruckend viel Wissen und denkt voraus, sodass er potenzielle Probleme frühzeitig erkennt. Er findet äußerst schnell Lösungen und behebt Probleme effizient. Selbst in stressigen Situationen bleibt er ruhig und besonnen und sorgt damit für eine sehr beruhigende und positive Arbeitsatmosphäre. Auch seine JavaScript-Kenntnisse sind sehr ausgeprägt.',
            'All diese Fähigkeiten machen Bastian zu einem hervorragenden Teammitglied. Vielen Dank für die tolle Zusammenarbeit!',
          ].join('\n\n'),
          author: 'Magdalena Laurisch',
          role: 'Projektpartnerin',
        },
        {
          id: 3,
          quote: [
            'Die Zusammenarbeit mit Bastian während des JOIN-Projekts war fantastisch. Er hat die strukturelle Grundlage des Projekts maßgeblich mitgestaltet und dabei stets sowohl die Qualität als auch die langfristige Perspektive fest im Blick behalten.',
            'Dank seiner sorgfältigen Arbeitsweise und seines ausgeprägten logischen Verständnisses konnte ich mich immer darauf verlassen, dass er Aufgaben gründlich durchdenkt und sauber umsetzt. Besonders schätze ich seinen Wissensdurst, seine Konzentration und die klare, effiziente Art, wie wir gemeinsam Lösungen gefunden haben. Am stärksten in Erinnerung geblieben sind mir unsere langen gemeinsamen Coding-Nächte, in denen er bemerkenswerte Ausdauer bewiesen hat.',
          ].join('\n\n'),
          author: 'Nico Leiteritz',
          role: 'JOIN-Projektpartner',
        },
        {
          id: 4,
          quote:
            'Die Zusammenarbeit mit Bastian war sowohl fachlich als auch menschlich eine echte Bereicherung. Mit seinem fundierten Backend-Wissen – insbesondere rund um Supabase – und seinem hervorragenden Verständnis für saubere, skalierbare Datenstrukturen bildete er das technische Rückgrat unserer Entwicklung. Selbst als die Herausforderungen komplexer wurden, sorgte sein unermüdlicher Einsatz (oft bis spät in die Nacht) dafür, dass unser Fundament absolut solide war. Ohne seinen Weitblick und seine Zuverlässigkeit hätte das Projekt niemals dieses Qualitätsniveau erreicht. Ich würde jederzeit sehr gerne wieder mit Bastian zusammenarbeiten!',
          author: 'Kevin Reinhold Triebe',
          role: 'JOIN-Projektpartner',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title: 'Lass uns zusammenarbeiten',
      problemTitle: 'Gibt es ein Problem zu lösen?',
      intro:
        'Kontaktiere mich gerne, wenn du Unterstützung bei einem Projekt brauchst. Ich bringe Struktur, technisches Verständnis und eine lösungsorientierte Arbeitsweise mit.',
      needDeveloper: 'Du brauchst einen Frontend Developer?',
      talkLink: 'Lass uns sprechen!',
      nameLabel: 'Wie ist dein Name?',
      namePlaceholder: 'Dein Name',
      nameError: 'Bitte gib deinen Namen ein.',
      emailLabel: 'Wie ist deine E-Mail?',
      emailPlaceholder: 'deinemail@email.com',
      emailError: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      messageLabel: 'Wie kann ich dir helfen?',
      messagePlaceholder: 'Hallo Bastian, ich interessiere mich für...',
      messageError: 'Bitte gib eine Nachricht mit mindestens 10 Zeichen ein.',
      privacyStart: 'Ich habe die',
      privacyLink: 'Datenschutzerklärung',
      privacyEnd: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      privacyError: 'Bitte akzeptiere die Datenschutzerklärung.',
      sending: 'Wird gesendet...',
      submit: 'Nachricht senden',
      success: 'Deine Nachricht wurde erfolgreich gesendet.',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.',
    },
    footer: {
      homepageLabel: 'Zur Startseite',
      role: 'Fullstack Developer',
      location: 'Bottrop Deutschland',
      copyright: '© Bastian Wollny 2026',
      navigationLabel: 'Footer Navigation',
      links: {
        github: 'Github',
        linkedin: 'LinkedIn',
        email: 'E-Mail',
        legalNotice: 'Impressum',
        privacyPolicy: 'Datenschutz',
      },
    },

    legalNotice: {
      back: 'Zurück zur Hauptseite',
      html: legalNoticeHtml.de,
    },
    privacyPolicy: {
      back: 'Zurück zur Hauptseite',
      html: privacyPolicyHtml.de,
    },
  },
} as const satisfies Record<Language, object>;
