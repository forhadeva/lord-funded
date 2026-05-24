import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
];

const translations = {
  en: {
    // Navbar
    about: 'About', features: 'Features', howItWorks: 'How it Works', challenges: 'Challenges',
    rules: 'Rules', faq: 'FAQ', affiliate: 'Affiliate', login: 'Login', getStarted: 'Get Started',

    // Hero
    heroTag: 'THE ULTIMATE PROPRIETARY TRADING FIRM',
    heroTitle1: 'Trade Our Capital.', heroTitle2: 'Keep Up To', heroTitle3: 'Profit.',
    heroDesc: 'Pass our simplified evaluation challenge and secure simulated trading accounts up to',
    heroDesc2: '. Trade with low limits, maximum leverage, and zero time pressure.',
    heroBtn1: 'Get Funded Now', heroBtn2: 'How It Works',
    heroBullet1: '100% Refundable Fee upon your first payout',
    heroBullet2: 'No Minimum trading days requirement',
    heroBullet3: 'News trading & Expert Advisors (EAs) fully allowed',

    // Features
    featuresTag: 'ELITE TRADING INFRASTRUCTURE',
    featuresTitle1: 'Designed by Traders,', featuresTitle2: 'For Traders',
    featuresDesc: 'We eliminate restrictive rules and slow payouts to give you a transparent, premium prop trading environment.',
    feat1Title: 'Bi-Weekly Payouts', feat1Desc: 'Request your simulated profit share every 14 days. Withdraw securely via multiple crypto networks or direct bank transfers.',
    feat2Title: 'Balance-Based Drawdown', feat2Desc: 'Daily drawdown limit is calculated based on starting daily balance rather than equity, preventing unfair rule violations.',
    feat3Title: 'No Time Limits', feat3Desc: 'Pass your evaluation at your own pace. Trade as conservatively or aggressively as your trading plan demands.',
    feat4Title: 'Refundable Registration Fees', feat4Desc: 'Receive 100% of your evaluation fee back on your very first payout. Zero final cost for skilled traders.',
    feat5Title: 'Up to 1:100 Leverage', feat5Desc: 'Trade major forex pairs, indices, metals, and crypto with high simulated leverage to optimize margin allocation.',
    feat6Title: 'Full Strategy Freedom', feat6Desc: 'Trade high-impact news events, run expert advisors (EAs), swing trade over weekends, and hedge positions freely.',

    // How It Works
    howItWorksTag: 'THE FUNDING ROADMAP',
    howItWorksTitle1: 'Three Steps To', howItWorksTitle2: 'Become Funded',
    howItWorksDesc: 'Our evaluations are simple, structured, and designed to filter for disciplined risk management.',
    step1Tag: 'STEP 1: BUILD PROFIT', step1Title: 'The Challenge',
    step1Desc: 'Choose your account size and start trading. Meet the 8% target (or 9% for 1-Step) while avoiding daily and overall drawdown violations.',
    step2Tag: 'STEP 2: CONFIRM SUCCESS', step2Title: 'The Verification',
    step2Desc: 'Verify your trading consistency in a low-stress phase. Hit a reduced 5% profit target under the exact same drawdown rules.',
    step3Tag: 'STEP 3: KEEP 90% PROFITS', step3Title: 'The Funded Lord',
    step3Desc: 'Become a Lord Funded partner. Trade simulated accounts up to $500K, scale up to $2M, and receive direct bi-weekly payout splits.',

    // Rules
    rulesTag: 'DISCIPLINE FRAMEWORK',
    rulesTitle1: 'Our Trading', rulesTitle2: 'Rules',
    rulesDesc: 'Fair, transparent, and designed to protect both trader and capital. No hidden conditions.',

    // Metrics
    metricsTraders: 'Funded Traders', metricsPayout: 'Total Payouts', metricsCountries: 'Countries', metricsAccounts: 'Active Accounts',

    // FAQ
    faqTag: 'SUPPORT CENTER', faqTitle1: 'Frequently Asked', faqTitle2: 'Questions',

    // CTA / Common
    ctaTitle1: 'Ready to Get', ctaTitle2: 'Funded',
    ctaDesc: 'Choose your challenge, prove your discipline, and trade with our capital.',
    ctaBtn: 'Start Your Challenge',
    viewAll: 'View All', learnMore: 'Learn More', contactSupport: 'Contact Support',
    searchQuestions: 'Search questions...', questionsFound: 'questions found',
    stillHaveQuestions: 'Still Have', supportAvailable: 'Our support team is available 24/7 to help you.',

    // Footer
    footerDesc: 'Empowering global traders with simulated trading capital. Prove your consistency, pass the challenges, and secure profit splits up to 90%.',
    footerChallenges: 'Challenges', footerInfo: 'Information', footerStayUpdated: 'Stay Updated',
    footerSubscribe: 'Subscribe to receive updates on leverage limits, promotions, and new challenge options.',
    footerEmail: 'Enter email address',
    footer1Step: '1-Step Evaluation', footer2Step: '2-Step Evaluation', footerFundingRules: 'Funding Rules', footerScaling: 'Scaling Plans',
    footerFeatures: 'Features', footerHowItWorks: 'How it Works', footerFAQ: 'FAQ Support', footerContact: 'Contact Us',
    footerDisclaimer: 'Lord Funded provides simulated trading environments for evaluation and educational purposes only. All accounts offered are simulated demo accounts, and all trading results are simulated rather than real market executions. We do not act as a custodian, broker-dealer, or investment advisor. Trading financial derivatives involves high risks, and simulated histories do not guarantee future success. By accessing our services, you acknowledge that no actual capital deposits or actual investments are being made.',
    quickLinks: 'Quick Links', legal: 'Legal', connect: 'Connect',
    privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', riskDisclosure: 'Risk Disclosure',
    allRightsReserved: 'All rights reserved.',
  },

  es: {
    about: 'Nosotros', features: 'Características', howItWorks: 'Cómo Funciona', challenges: 'Desafíos',
    rules: 'Reglas', faq: 'Preguntas', affiliate: 'Afiliados', login: 'Iniciar Sesión', getStarted: 'Comenzar',

    heroTag: 'LA FIRMA DE TRADING PROPIETARIA DEFINITIVA',
    heroTitle1: 'Opera con Nuestro Capital.', heroTitle2: 'Conserva Hasta el', heroTitle3: 'de Ganancias.',
    heroDesc: 'Supera nuestro desafío de evaluación simplificado y asegura cuentas de trading simuladas de hasta',
    heroDesc2: '. Opera con límites bajos, apalancamiento máximo y sin presión de tiempo.',
    heroBtn1: 'Obtén Financiamiento', heroBtn2: 'Cómo Funciona',
    heroBullet1: 'Tarifa 100% reembolsable en tu primer pago',
    heroBullet2: 'Sin requisito mínimo de días de trading',
    heroBullet3: 'Trading de noticias y EAs totalmente permitidos',

    featuresTag: 'INFRAESTRUCTURA DE TRADING ÉLITE',
    featuresTitle1: 'Diseñado por Traders,', featuresTitle2: 'Para Traders',
    featuresDesc: 'Eliminamos las reglas restrictivas y los pagos lentos para darte un entorno de trading transparente y premium.',
    feat1Title: 'Pagos Bi-Semanales', feat1Desc: 'Solicita tu parte de ganancias simuladas cada 14 días. Retira de forma segura a través de múltiples redes cripto o transferencias bancarias.',
    feat2Title: 'Drawdown Basado en Balance', feat2Desc: 'El límite de drawdown diario se calcula según el balance inicial del día en lugar de la equidad, evitando violaciones injustas.',
    feat3Title: 'Sin Límites de Tiempo', feat3Desc: 'Pasa tu evaluación a tu propio ritmo. Opera tan conservador o agresivo como lo exija tu plan de trading.',
    feat4Title: 'Tarifas de Registro Reembolsables', feat4Desc: 'Recibe el 100% de tu tarifa de evaluación en tu primer pago. Costo final cero para traders hábiles.',
    feat5Title: 'Apalancamiento Hasta 1:100', feat5Desc: 'Opera pares de forex principales, índices, metales y cripto con alto apalancamiento simulado.',
    feat6Title: 'Libertad Total de Estrategia', feat6Desc: 'Opera noticias de alto impacto, ejecuta EAs, mantén posiciones durante el fin de semana y haz cobertura libremente.',

    howItWorksTag: 'LA HOJA DE RUTA DEL FINANCIAMIENTO',
    howItWorksTitle1: 'Tres Pasos Para', howItWorksTitle2: 'Ser Financiado',
    howItWorksDesc: 'Nuestras evaluaciones son simples, estructuradas y diseñadas para filtrar la gestión disciplinada del riesgo.',
    step1Tag: 'PASO 1: GENERAR GANANCIAS', step1Title: 'El Desafío',
    step1Desc: 'Elige el tamaño de tu cuenta y comienza a operar. Alcanza el objetivo del 8% evitando las violaciones de drawdown.',
    step2Tag: 'PASO 2: CONFIRMAR ÉXITO', step2Title: 'La Verificación',
    step2Desc: 'Verifica tu consistencia en una fase de bajo estrés. Alcanza un objetivo de ganancias reducido del 5%.',
    step3Tag: 'PASO 3: CONSERVA 90% GANANCIAS', step3Title: 'El Lord Financiado',
    step3Desc: 'Conviértete en socio de Lord Funded. Opera cuentas simuladas de hasta $500K y recibe pagos bi-semanales.',

    rulesTag: 'MARCO DE DISCIPLINA',
    rulesTitle1: 'Nuestras Reglas', rulesTitle2: 'de Trading',
    rulesDesc: 'Justas, transparentes y diseñadas para proteger tanto al trader como al capital. Sin condiciones ocultas.',

    metricsTraders: 'Traders Financiados', metricsPayout: 'Pagos Totales', metricsCountries: 'Países', metricsAccounts: 'Cuentas Activas',

    faqTag: 'CENTRO DE SOPORTE', faqTitle1: 'Preguntas', faqTitle2: 'Frecuentes',

    ctaTitle1: '¿Listo Para', ctaTitle2: 'Ser Financiado',
    ctaDesc: 'Elige tu desafío, demuestra tu disciplina y opera con nuestro capital.',
    ctaBtn: 'Comienza Tu Desafío',
    viewAll: 'Ver Todo', learnMore: 'Saber Más', contactSupport: 'Contactar Soporte',
    searchQuestions: 'Buscar preguntas...', questionsFound: 'preguntas encontradas',
    stillHaveQuestions: '¿Aún Tienes', supportAvailable: 'Nuestro equipo de soporte está disponible 24/7 para ayudarte.',

    footerDesc: 'Empoderando a traders globales con capital de trading simulado. Demuestra tu consistencia, pasa los desafíos y asegura divisiones de ganancias de hasta el 90%.',
    footerChallenges: 'Desafíos', footerInfo: 'Información', footerStayUpdated: 'Mantente Actualizado',
    footerSubscribe: 'Suscríbete para recibir actualizaciones sobre límites de apalancamiento, promociones y nuevas opciones de desafíos.',
    footerEmail: 'Ingresa tu correo electrónico',
    footer1Step: 'Evaluación 1 Paso', footer2Step: 'Evaluación 2 Pasos', footerFundingRules: 'Reglas de Financiamiento', footerScaling: 'Planes de Escalamiento',
    footerFeatures: 'Características', footerHowItWorks: 'Cómo Funciona', footerFAQ: 'Soporte FAQ', footerContact: 'Contáctanos',
    footerDisclaimer: 'Lord Funded proporciona entornos de trading simulados con fines de evaluación y educación únicamente. Todas las cuentas ofrecidas son cuentas demo simuladas. No actuamos como custodio, corredor de bolsa ni asesor de inversiones.',
    quickLinks: 'Enlaces Rápidos', legal: 'Legal', connect: 'Conectar',
    privacyPolicy: 'Política de Privacidad', termsOfService: 'Términos de Servicio', riskDisclosure: 'Divulgación de Riesgos',
    allRightsReserved: 'Todos los derechos reservados.',
  },

  fr: {
    about: 'À Propos', features: 'Fonctionnalités', howItWorks: 'Comment ça Marche', challenges: 'Défis',
    rules: 'Règles', faq: 'FAQ', affiliate: 'Affiliation', login: 'Connexion', getStarted: 'Commencer',

    heroTag: 'LA FIRME DE TRADING PROPRIÉTAIRE ULTIME',
    heroTitle1: 'Tradez Notre Capital.', heroTitle2: 'Gardez Jusqu\'à', heroTitle3: 'de Profits.',
    heroDesc: 'Réussissez notre défi d\'évaluation simplifié et obtenez des comptes de trading simulés jusqu\'à',
    heroDesc2: '. Tradez avec des limites basses, un effet de levier maximum et sans pression temporelle.',
    heroBtn1: 'Obtenez un Financement', heroBtn2: 'Comment ça Marche',
    heroBullet1: 'Frais 100% remboursables lors de votre premier paiement',
    heroBullet2: 'Aucun nombre minimum de jours de trading requis',
    heroBullet3: 'Trading de nouvelles et EAs entièrement autorisés',

    featuresTag: 'INFRASTRUCTURE DE TRADING ÉLITE',
    featuresTitle1: 'Conçu par des Traders,', featuresTitle2: 'Pour les Traders',
    featuresDesc: 'Nous éliminons les règles restrictives et les paiements lents pour vous offrir un environnement de trading transparent et premium.',
    feat1Title: 'Paiements Bi-Hebdomadaires', feat1Desc: 'Demandez votre part de profits simulés tous les 14 jours. Retirez en toute sécurité via crypto ou virement bancaire.',
    feat2Title: 'Drawdown Basé sur le Solde', feat2Desc: 'La limite de drawdown quotidien est calculée sur le solde initial du jour plutôt que sur l\'équité.',
    feat3Title: 'Pas de Limite de Temps', feat3Desc: 'Passez votre évaluation à votre rythme. Tradez aussi prudemment ou agressivement que votre plan l\'exige.',
    feat4Title: 'Frais d\'Inscription Remboursables', feat4Desc: 'Recevez 100% de vos frais d\'évaluation dès votre premier paiement. Coût final nul pour les traders qualifiés.',
    feat5Title: 'Levier Jusqu\'à 1:100', feat5Desc: 'Tradez les principales paires forex, indices, métaux et crypto avec un effet de levier simulé élevé.',
    feat6Title: 'Liberté Totale de Stratégie', feat6Desc: 'Tradez les actualités, exécutez des EAs, gardez des positions le week-end et faites de la couverture librement.',

    howItWorksTag: 'LA FEUILLE DE ROUTE DU FINANCEMENT',
    howItWorksTitle1: 'Trois Étapes Pour', howItWorksTitle2: 'Être Financé',
    howItWorksDesc: 'Nos évaluations sont simples, structurées et conçues pour filtrer la gestion disciplinée des risques.',
    step1Tag: 'ÉTAPE 1: GÉNÉRER DES PROFITS', step1Title: 'Le Défi',
    step1Desc: 'Choisissez la taille de votre compte et commencez à trader. Atteignez l\'objectif de 8% en respectant les règles de drawdown.',
    step2Tag: 'ÉTAPE 2: CONFIRMER LE SUCCÈS', step2Title: 'La Vérification',
    step2Desc: 'Vérifiez votre régularité dans une phase détendue. Atteignez un objectif de profit réduit de 5%.',
    step3Tag: 'ÉTAPE 3: GARDEZ 90% DES PROFITS', step3Title: 'Le Lord Financé',
    step3Desc: 'Devenez partenaire Lord Funded. Tradez des comptes simulés jusqu\'à 500K$ et recevez des paiements bi-hebdomadaires.',

    rulesTag: 'CADRE DE DISCIPLINE',
    rulesTitle1: 'Nos Règles', rulesTitle2: 'de Trading',
    rulesDesc: 'Équitables, transparentes et conçues pour protéger le trader et le capital. Aucune condition cachée.',

    metricsTraders: 'Traders Financés', metricsPayout: 'Paiements Totaux', metricsCountries: 'Pays', metricsAccounts: 'Comptes Actifs',

    faqTag: 'CENTRE DE SUPPORT', faqTitle1: 'Questions', faqTitle2: 'Fréquentes',

    ctaTitle1: 'Prêt à Être', ctaTitle2: 'Financé',
    ctaDesc: 'Choisissez votre défi, prouvez votre discipline et tradez avec notre capital.',
    ctaBtn: 'Commencez Votre Défi',
    viewAll: 'Voir Tout', learnMore: 'En Savoir Plus', contactSupport: 'Contacter le Support',
    searchQuestions: 'Rechercher des questions...', questionsFound: 'questions trouvées',
    stillHaveQuestions: 'Encore des', supportAvailable: 'Notre équipe de support est disponible 24h/24 pour vous aider.',

    footerDesc: 'Donnant du pouvoir aux traders du monde entier avec du capital de trading simulé. Prouvez votre régularité, passez les défis et obtenez jusqu\'à 90% de partage des profits.',
    footerChallenges: 'Défis', footerInfo: 'Informations', footerStayUpdated: 'Restez Informé',
    footerSubscribe: 'Abonnez-vous pour recevoir des mises à jour sur les limites de levier, les promotions et les nouvelles options de défis.',
    footerEmail: 'Entrez votre adresse e-mail',
    footer1Step: 'Évaluation 1 Étape', footer2Step: 'Évaluation 2 Étapes', footerFundingRules: 'Règles de Financement', footerScaling: 'Plans de Croissance',
    footerFeatures: 'Fonctionnalités', footerHowItWorks: 'Comment ça Marche', footerFAQ: 'Support FAQ', footerContact: 'Contactez-nous',
    footerDisclaimer: 'Lord Funded fournit des environnements de trading simulés à des fins d\'évaluation et d\'éducation uniquement. Tous les comptes proposés sont des comptes de démonstration simulés. Nous n\'agissons pas en tant que dépositaire, courtier ou conseiller en investissement.',
    quickLinks: 'Liens Rapides', legal: 'Juridique', connect: 'Connecter',
    privacyPolicy: 'Politique de Confidentialité', termsOfService: 'Conditions de Service', riskDisclosure: 'Divulgation des Risques',
    allRightsReserved: 'Tous droits réservés.',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const currentLang = LANGUAGES.find(l => l.code === lang);
  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, currentLang, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
