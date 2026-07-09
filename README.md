
#  Cedric Enzo  KOUOKAM KAMHOUA   

## **Data Scientist & IA** · Master Data Science & B.I à Epitech

💼 [LinkedIn](https://www.linkedin.com/in/enzo-kamhoua/) · 🖥️ [GitHub](https://github.com/kenzo-kouokam) · 📧 [Email](mailto:cedric-enzo.kouokam-kamhoua@epitech.eu)

> *Disponible en alternance (1j/4j) dès septembre 2026*

---

## 🎯 Profil

Parcours hybride **Génie Logiciel → Data Science & IA**, je maîtrise l'ensemble de la chaîne data : de la collecte et du nettoyage jusqu'à la modélisation ML, la restitution en dashboard — et l'**automatisation de bout en bout** via des agents IA et workflows no-code.  
Je construis des solutions à forte valeur métier — des pipelines ML sur datasets réels aux recommandations business concrètes, jusqu'aux systèmes autonomes qui éliminent les tâches répétitives à zéro intervention humaine.

---

## 🚀 Projets Data Science

### 📊 Projet 1 — Prédiction de la gravité des accidents de vélo
> `Python` · `scikit-learn` · `XGBoost` · `SMOTE` · `Matplotlib` · `Seaborn` · `data.gouv.fr`

**Contexte :** Avec l'essor du vélo en ville, prédire la gravité des accidents est un enjeu de sécurité publique majeur.

**Ce que j'ai fait :**
- Analysé un dataset de **80 022 accidents cyclistes** (France 2005–2023) — EDA complète, gestion des NaN, détection d'anomalies
- Construit **11 variables métier** issues de l'EDA : `nuit_sans_eclairage` (63% de graves), `hors_agglo_nuit`, `heure_pointe`
- Géré le **déséquilibre des classes via SMOTE** (+23% d'observations synthétiques) pour maximiser le recall sur les accidents graves
- Comparé 4 modèles de classification — évaluation sur **Recall, F1-score, ROC AUC**
- Identifié les facteurs de risque principaux : type de route (Chi²=2569), hors-agglomération (Chi²=2335), motif de trajet (Chi²=1671)

**Stack technique :** `pandas` · `scikit-learn` · `XGBoost` · `imbalanced-learn (SMOTE)` · `scipy.stats`

---

### 🏦 Projet 2 — Modélisation prédictive — Campagne marketing bancaire
> `Python` · `scikit-learn` · `XGBoost` · `K-Means` · `Matplotlib`

**Contexte :** Optimiser le ciblage d'une campagne téléphonique bancaire pour maximiser le taux de conversion.

**Ce que j'ai fait :**
- Traité et analysé un dataset bancaire de **45 211 clients** — nettoyage, feature engineering, encodage
- Entraîné et comparé 4 modèles (Logistic Regression, Random Forest, XGBoost) → **meilleur AUC : 0,76**
- Segmenté les clients via **K-Means** : cluster prioritaire à **19% de conversion** (×2 la moyenne)
- Traduit les résultats en recommandations business concrètes pour optimiser le ROI des campagnes

**Stack technique :** `pandas` · `scikit-learn` · `XGBoost` · `K-Means` · `Matplotlib` · `Seaborn`

---

### 🛋️ Projet 3 — Détection de label noise & recatégorisation produits e-commerce
> `Python` · `NLP` · `Regex` · `scikit-learn` · `Classification multi-classes`

**Contexte :** Marketplace ameublement multi-vendeurs — des milliers de produits mal étiquetés dégradent la visibilité SEO et l'expérience client.

**Ce que j'ai fait :**
- Développé un pipeline **NLP de détection de label noise** pour identifier les produits mal catégorisés
- Construit un **algorithme de recatégorisation automatique** dans la taxonomie existante (univers → nature) sans créer de nouvelle catégorie
- Développé un **extracteur automatique de dimensions et couleurs** depuis les descriptions produit
  *(ex : `"Matelas mousse 140x190 cm"` → `140*190`)*
- Pipeline de validation cohérence taxonomique : catégorie macro → sous-catégorie

**Stack technique :** `pandas` · `re (Regex)` · `scikit-learn` · `NLP` · `classification supervisée`

---

## 🤖 Projets IA & Automatisation

### ⚡ Jobster — Agent IA de recherche d'emploi · [Demo](https://jobster-psi.vercel.app) · [Code](https://github.com/kenzo-kouokam/jobster)
> `FastAPI` · `Ollama / Qwen3` · `React` · `Playwright` · `SQLite`

- Backend FastAPI **16 endpoints** · LLM local Qwen3 via Ollama pour routing d'intention
- **Reverse-engineering** La Bonne Boîte + Mes Événements Emploi (Playwright + interception réseau)
- 8 outils IA orchestrés : recherche offres temps réel, scoring CV, génération lettres .docx, suivi candidatures
- **98 entreprises + 372 événements** intégrés en production · projet équipe Epitech, déployé en solo

---

### 🌐 NeoTravel — Automatisation IA cycle commercial · [Demo](https://neotravel-projet.vercel.app/) · [Code](https://github.com/kenzo-kouokam/neotravel)
> `n8n` · `GPT-4o-mini` · `Next.js` · `Airtable` · `Nodemailer`

- Pipeline IA end-to-end : chatbot qualificatif → devis auto < 5 min → email PDF → relances J+3/J+7
- 4 workflows n8n · 7 tables Airtable · **~0,01 €/devis IA** · coût total 25–35 €/mois
- **Rôle P5 (Enzo)** : 4 templates HTML email, Gmail SMTP + Nodemailer, idempotence anti-doublon
- ROI estimé : 17 617 €/mois marge additionnelle · break-even à 1 prestation (217 € marge nette)

---

## 📊 Data Engineering & BI

### ✈️ Satisfaction Client Airline — Dashboard BI · [Dashboard live](https://satisfaction-client-airline.streamlit.app/) · [Code](https://github.com/kenzo-kouokam/airline-satisfaction-ml)
> `scikit-learn` · `KNN` · `Streamlit` · `Plotly` · `Python`

**Mission de consulting BI** (cadre académique Epitech) pour une compagnie aérienne fictive :

- Pipeline ML complet sur **129 880 passagers** — EDA (Chi², Mann-Whitney), feature engineering, 2 modèles comparés
- **KNN retenu** (k=11, distance) : **93.1% accuracy · AUC 0.98** · variable star : `loyal_business` (corrélation 0.56)
- **Dashboard Streamlit 5 pages** déployé sur Streamlit Cloud :
  - Vue d'ensemble · Facteurs de satisfaction · Performance des modèles · Simulateur de risque · Recommandations
- Livrables consulting : notebook bilingue (FR/EN), rapport 10 pages, présentation 14 slides

---

### 🏭 Pipeline PME — Scraping → CRM automatisé · [Code](https://github.com/kenzo-kouokam/pme-candidature-pipeline)
> `Python` · `Scraping multi-sources` · `Notion API` · `ETL` · `Pandas`

- Pipeline data engineering end-to-end : scraping → enrichissement → scoring → génération → CRM
- **656 PMEs scrapées** sur 5 verticaux et 12 codes NAF, dédupliquées et scorées
- **211 lettres de motivation personnalisées** générées automatiquement avec LLM
- Résultats versés dans un **CRM Notion** via API — zéro intervention manuelle

---

## 💼 Expériences Professionnelles

### 🇺🇸 eZdia Inc. (USA, Fremont CA) — Contributeur Data & ML
**Freelance | Juin 2020 – Juin 2022**

- Annoté et recatégorisé des milliers de **fiches produits Amazon** via CrewMachine, selon taxonomies strictes
- Développé des **modèles ML de détection d'anomalies** (pipeline correction L1 + contrôle qualité L2 sur 20% d'échantillon)
- Contribué au **ré-entraînement itératif** des modèles de classification

---

### 📊 CORTEXPO — Data & Performance Marketing Analyst
**Janvier 2024 – Décembre 2024**

- Analysé les **données de performance marketing** de 5 marques sur Google Ads, Meta Ads et SEO
- Produit des dashboards de suivi en temps réel pour ajustement continu des campagnes

---

### 📈 MYBOSA — Spécialiste Data & Growth Digital
**Septembre 2022 – Décembre 2023**

- Mis en place et suivi des **KPIs de croissance** → **+213% communauté, ×20 engagement**
- Coordonné une **équipe internationale de 20 personnes** (Maghreb / Afrique subsaharienne)

---

### 💻 Freelance — Développeur & Consultant Data Digital
**Septembre 2023 – Décembre 2025**

- Conçu et déployé des **tableaux de bord de performance** (KPIs, taux de conversion, ROI) pour 3 clients
- 3 missions intégrant collecte, traitement et restitution de données de performance digitale

---

### ⚙️ SOLVEIL — Développeur Frontend & Data Integration
**Mars 2022 – Août 2022**

- Conçu un **SIG** (équipe de 5) avec intégration API REST (Laravel) + interface Angular

---

## 🛠️ Compétences Techniques (9 domaines)

| Domaine | Compétences |
|---|---|
| **Machine Learning** | scikit-learn, XGBoost, Random Forest, KNN, SVM, K-Means, SMOTE, LR, Feature Engineering, GridSearchCV, Optimisation seuil, Cross-validation, cleanlab |
| **NLP & Analyse texte** | TF-IDF, Label Noise Detection, Classification textuelle, Regex, Extraction d'entités, Pipeline NLP, Génération LM personnalisée, Scoring qualité texte |
| **IA & Automatisation** | Agents IA, LLM (Claude·GPT·Qwen3), Groq·Ollama, n8n, Make·Zapier, Prompt Engineering, Reverse Engineering API, Playwright, Scraping web, CRM automation |
| **Analyse de données** | EDA, KPI, Feature Engineering, Segmentation clients, Analyse de satisfaction, Chi²·Mann-Whitney, AUC/ROC·F1·Recall |
| **BI & Visualisation** | Power BI, DAX, Tableau, Streamlit, Plotly, Dashboards déployés, Matplotlib, Seaborn, Google Analytics, Excel·VBA, SAS |
| **Bases de données** | SQL (MySQL·Oracle·SQLite), NoSQL (MongoDB), Notion API, Modélisation, Airtable |
| **Data Engineering** | ETL, Web scraping multi-sources, Enrichissement données, Déduplication, Scoring & filtrage, Automatisation, Contrôle qualité |
| **Dev & Outils** | Python, JS·TS, React·Next.js, FastAPI, Streamlit, HTML·CSS, Angular, Git·GitHub, Jupyter·VS Code·Cursor, Agile/Scrum |
| **Consulting & Communication** | Rapports de consulting, Recommandations business, Présentation orale, Docs de passation, Vulgarisation Data, Formation équipes |

---

## 🎓 Formation

| Période | Diplôme | Établissement |
|---|---|---|
| 2025 – 2027 | **Master Data Science & Business Intelligence** — RNCP Niv.7 | Epitech France |
| 2021 – 2022 | Licence Professionnelle Génie Logiciel | ESTEM Maroc |
| 2018 – 2020 | BTS Développement Informatique | OFPPT (ISTA) Maroc |

---

## 📜 Certifications

| Certification | Organisme | Date |
|---|---|---|
| 🏅 **Python for Data Science, AI & Development** | IBM | Mai 2026 |
| 🏅 **Google Data Analytics** | Google | Mai 2026 |
| 🏅 **Data Visualization** | Kaggle | Mai 2026 |
| 🏅 **Python** | Kaggle | Mai 2026 |

---

## 📋 Contact & Liens

📧 [cedric-enzo.kouokam-kamhoua@epitech.eu](mailto:cedric-enzo.kouokam-kamhoua@epitech.eu)

💼 [linkedin.com/in/enzo-kamhoua](https://www.linkedin.com/in/enzo-kamhoua/)

🖥️ [github.com/kenzo-kouokam](https://github.com/kenzo-kouokam)

📍 France   ·  🚘 Permis B · Disponible en alternance (1j/4j) dès septembre 2026

---

<div align="center">
<em>Portfolio Data Science & IA — Enzo KOUOKAM · 2026</em>
</div>
