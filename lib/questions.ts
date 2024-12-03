import { Question } from './types';

export const questions: Question[] = [
  {
    id: '1',
    text: 'Quel est l’avantage de déployer des applications Microsoft 365 et Dynamics 365 dans le même locataire ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Utilisez Common Data Services pour vous connecter aux données d’application.', isCorrect: false },
      { id: 'b', text: 'Il vous suffit de configurer des groupes dans Microsoft 365 pour obtenir des autorisations sur toutes les données.', isCorrect: false },
      { id: 'c', text: 'Les utilisateurs peuvent accéder à la fois à Microsoft 365 et à Dynamics 365 à l’aide de l’authentification unique (SSO).', isCorrect: true },
    ],
  },
  {
    id: '2',
    text: 'Une entreprise utilise Dynamics 365 Supply Chain Management et Dynamics 365 Finance. Les données du compte utilisateur doivent être synchronisées entre les deux systèmes. Vous devez vous assurer que les données synchronisées sont stockées à un seul endroit. Que devriez-vous utiliser ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Azure IoT Central', isCorrect: false },
      { id: 'b', text: 'Azure Active Directory', isCorrect: false },
      { id: 'c', text: 'Serveur SQL', isCorrect: false },
      { id: 'd', text: 'Microsoft Dataverse', isCorrect: true },
    ],
  },
  {
    id: '3',
    text: 'Power Apps peut-il utiliser un lecteur d’écran sans nécessiter de connecteur ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Oui', isCorrect: true },
      { id: 'b', text: 'Non', isCorrect: false },
    ],
  },
  {
    id: '4',
    text: 'Pouvez-vous utiliser un vérificateur d’accessibilité pour les applications Power Apps afin de vérifier les violations d’accessibilité et fournir des conseils sur l’interface utilisateur ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Oui', isCorrect: true },
      { id: 'b', text: 'Non', isCorrect: false },
    ],
  },
  {
    id: '5',
    text: 'Associez les outils Power Apps avec leurs fonctions :',
    type: 'dragdrop',
    pairs: [
      { id: '1', statement: 'Common Data Service', answer: 'Helps jumpstart application development by leveraging business logic, security, and integrations.' },
      { id: '2', statement: 'Entities', answer: 'A set of records used to store data.' },
    ],
  },
  {
    id: '6',
    text: 'Quel est l’objectif principal d’AI Builder dans Power Platform ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Créer des applications pilotées par modèle', isCorrect: false },
      { id: 'b', text: 'Intégrer des fonctionnalités d’intelligence artificielle sans écrire de code', isCorrect: true },
      { id: 'c', text: 'Déployer des flux automatisés', isCorrect: false },
      { id: 'd', text: 'Gérer la sécurité des données dans Power Apps', isCorrect: false },
    ],
  },
  {
    id: '7',
    text: 'Associez les composants de Power BI avec leurs fonctions :',
    type: 'dragdrop',
    pairs: [
      { id: '1', statement: 'Power Query', answer: 'Nettoyer et transformer des données.' },
      { id: '2', statement: 'Modèle de données', answer: 'Créer des relations entre les tables.' },
    ],
  },
  {
    id: '8',
    text: 'Quels sont les principaux avantages de Power Automate ?',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Automatiser des flux de travail', isCorrect: true },
      { id: 'b', text: 'Créer des visualisations de données', isCorrect: false },
      { id: 'c', text: 'Gérer des flux planifiés', isCorrect: true },
      { id: 'd', text: 'Construire des portails Web', isCorrect: false },
    ],
  },
  {
    id: '9',
    text: 'Quelle est la principale différence entre Power BI Desktop et le service Power BI ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Power BI Desktop est basé sur le cloud, tandis que le service Power BI est local.', isCorrect: false },
      { id: 'b', text: 'Power BI Desktop est utilisé pour créer des rapports, tandis que le service Power BI est utilisé pour partager des rapports.', isCorrect: true },
      { id: 'c', text: 'Power BI Desktop est limité à des visualisations simples.', isCorrect: false },
    ],
  },
  {
    id: '10',
    text: 'Associez les éléments suivants à leur usage dans Power Automate :',
    type: 'dragdrop',
    pairs: [
      { id: '1', statement: 'Flux automatisé', answer: 'Déclenché par un événement.' },
      { id: '2', statement: 'Flux instantané', answer: 'Déclenché manuellement.' },
      { id: '3', statement: 'Flux planifié', answer: 'Déclenché à intervalles réguliers.' },
    ],
  },
  {
    id: '11',
    text: 'Quels types de connecteurs sont disponibles dans Power Platform ?',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Connecteurs standards', isCorrect: true },
      { id: 'b', text: 'Connecteurs premium', isCorrect: true },
      { id: 'c', text: 'Connecteurs personnalisés', isCorrect: true },
      { id: 'd', text: 'Connecteurs d’applications mobiles uniquement', isCorrect: false },
    ],
  },
  {
    id: '12',
    text: 'Quel est l’objectif principal des politiques DLP dans Power Platform ?',
    type: 'single',
    options: [
      { id: 'a', text: 'Restreindre les connexions entre connecteurs métier et non-métier.', isCorrect: true },
      { id: 'b', text: 'Créer des applications plus rapidement.', isCorrect: false },
      { id: 'c', text: 'Stocker des données sensibles dans le cloud.', isCorrect: false },
    ],
  },
  {
    id: '13',
    text: 'Associez les concepts suivants à leur description dans Dataverse :',
    type: 'dragdrop',
    pairs: [
      { id: '1', statement: 'Table', answer: 'Structure pour stocker des enregistrements.' },
      { id: '2', statement: 'Colonne', answer: 'Champ dans une table.' },
      { id: '3', statement: 'Relation', answer: 'Lien entre deux tables.' },
    ],
  },
  {
    id: '14',
    text: 'Quelles sont les fonctionnalités principales de Power Pages ?',
    type: 'multiple',
    options: [
      { id: 'a', text: 'Créer des portails externes.', isCorrect: true },
      { id: 'b', text: 'Analyser des données.', isCorrect: false },
      { id: 'c', text: 'Permettre des connexions avec les clients.', isCorrect: true },
      { id: 'd', text: 'Automatiser des flux de travail.', isCorrect: false },
    ],
  },
];
