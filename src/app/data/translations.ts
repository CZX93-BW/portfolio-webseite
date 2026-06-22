import { Language } from '../models/language';

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
      contact:
        'Feel free to contact me. I look forward to expanding on my previous knowledge.',
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
            'Our project benefited enormously from Bastian’s efficient way of working.',
          author: 'T. Schulz',
          role: 'Frontend Developer',
        },
        {
          id: 2,
          quote:
            'Bastian has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
          author: 'H. Janisch',
          role: 'Team Partner',
        },
        {
          id: 3,
          quote:
            'I had the good fortune of working with Bastian in a group project. He stayed focused, supported the team and contributed reliable technical solutions.',
          author: 'M. Weber',
          role: 'Project Partner',
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
      title: 'Legal Notice',
      tmgTitle: 'Information according to § 5 TMG',
      tmgText: 'The final legal notice content will be added before deployment.',
      contactTitle: 'Contact',
      contactText: 'The final contact information will be added before deployment.',
      responsibleTitle: 'Responsible for content',
      responsibleText:
        'The final responsible person information will be added before deployment.',
    },
    privacyPolicy: {
      back: 'Back to main page',
      title: 'Privacy Policy',
      generalTitle: 'General information',
      generalText: 'The final privacy policy content will be added before deployment.',
      responsibleTitle: 'Responsible person',
      responsibleText:
        'The final responsible person information will be added before deployment.',
      contactFormTitle: 'Contact form',
      contactFormText:
        'The final information about contact form data processing will be added before deployment.',
      externalLinksTitle: 'External links',
      externalLinksText:
        'The final information about external profile and project links will be added before deployment.',
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
            'Unser Projekt hat stark von Bastians effizienter Arbeitsweise profitiert.',
          author: 'T. Schulz',
          role: 'Frontend Developer',
        },
        {
          id: 2,
          quote:
            'Bastian hat sich als zuverlässiger Gruppenpartner bewiesen. Seine technischen Fähigkeiten und seine proaktive Art waren wichtig für den Projekterfolg.',
          author: 'H. Janisch',
          role: 'Teampartner',
        },
        {
          id: 3,
          quote:
            'Ich hatte das Glück, mit Bastian in einem Gruppenprojekt zu arbeiten. Er blieb fokussiert, unterstützte das Team und brachte zuverlässige technische Lösungen ein.',
          author: 'M. Weber',
          role: 'Projektpartner',
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
      title: 'Impressum',
      tmgTitle: 'Angaben gemäß § 5 TMG',
      tmgText: 'Der finale Impressumsinhalt wird vor dem Deployment ergänzt.',
      contactTitle: 'Kontakt',
      contactText: 'Die finalen Kontaktinformationen werden vor dem Deployment ergänzt.',
      responsibleTitle: 'Verantwortlich für den Inhalt',
      responsibleText:
        'Die finalen Angaben zur verantwortlichen Person werden vor dem Deployment ergänzt.',
    },
    privacyPolicy: {
      back: 'Zurück zur Hauptseite',
      title: 'Datenschutzerklärung',
      generalTitle: 'Allgemeine Informationen',
      generalText:
        'Der finale Inhalt der Datenschutzerklärung wird vor dem Deployment ergänzt.',
      responsibleTitle: 'Verantwortliche Person',
      responsibleText:
        'Die finalen Angaben zur verantwortlichen Person werden vor dem Deployment ergänzt.',
      contactFormTitle: 'Kontaktformular',
      contactFormText:
        'Die finalen Informationen zur Verarbeitung der Kontaktformulardaten werden vor dem Deployment ergänzt.',
      externalLinksTitle: 'Externe Links',
      externalLinksText:
        'Die finalen Informationen zu externen Profil- und Projektlinks werden vor dem Deployment ergänzt.',
    },
  },
} as const satisfies Record<Language, object>;