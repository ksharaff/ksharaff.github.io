import ecommerceImg from '../assets/ecom.webp'
import chessImg from '../assets/chess.webp'
import sentimentImg from '../assets/sentiment.webp'
import automataImg from '../assets/automata.jpg'
import bankSystemImg from '../assets/mtbank.jpg'
import carRentalImg from '../assets/carRental.jpg'
import takeoverImg from '../assets/takeover.avif'
import phishingImg from '../assets/phishing.webp'

export const showcases = [
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'Four independently deployable Spring Boot services behind an API gateway, with an event-driven order, payment, and stock flow over Kafka.',
    image: ecommerceImg,
    href: 'https://github.com/ksharaff/ecommerce',
    stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
    category: 'Backend',
  },
  {
    title: 'Car Rental System',
    description:
      'A Spring Boot API for searching cars, managing reservations, and handling rental workflows.',
    image: carRentalImg,
    href: 'https://github.com/ksharaff/carRental',
    stack: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
    category: 'Backend',
  },
  {
    title: 'Multi-Threaded Bank System',
    description:
      'A C-based client-server banking system with epoll, thread pooling, and built-in stress testing.',
    image: bankSystemImg,
    href: 'https://github.com/ksharaff/Multi-Threaded-Bank-System',
    stack: ['C', 'POSIX Threads', 'epoll', 'Sockets'],
    category: 'OS',
  },
  {
    title: 'C+- Custom Chess Game',
    description:
      'A fully functioning chess game with custom game logic.',
    image: chessImg,
    href: 'https://github.com/kxredo/custom-chess',
    stack: ['Java', 'Java Swing'],
    category: 'Desktop',
  },
  {
    title: 'Sentiment Analysis',
    description:
      'Machine learning project using PyTorch to analyze Amazon products sentiment with NLP techniques',
    image: sentimentImg,
    href: 'https://github.com/ksharaff/sentiment-analysis',
    stack: ['Python', 'PyTorch', 'ML', 'NLP'],
    category: 'ML',
  },
  {
    title: 'Account Takeover KQL',
    description:
      'A SOC-focused KQL investigation project for identifying suspicious sign-in patterns and account takeover activity.',
    image: takeoverImg,
    href: 'https://github.com/ksharaff/soc-projects/tree/main/account-takeover-kql',
    stack: ['KQL', 'Microsoft Sentinel', 'Security', 'Detection'],
    category: 'Cybersecurity',
  },
  {
    title: 'Phishing Email Investigation',
    description:
      'An investigation workflow for analyzing phishing indicators, triaging suspicious email activity, and documenting the attack path.',
    image: phishingImg,
    href: 'https://github.com/ksharaff/soc-projects/tree/main/Phishing-Email-Investigation',
    stack: ['Email Security', 'Threat Hunting', 'KQL', 'SOC'],
    category: 'Cybersecurity',
  },
  {
    title: 'Automata Theory Program',
    description:
      'Contributed in enhancing the Automata Thoery program.',
    image: automataImg,
    href: 'https://github.com/ksharaff/Automata_Practice_and_Test',
    stack: ['Java', 'Swing'],
    category: 'Theory',
  },
]

export default showcases
