# cedric.kouokam
Portfolio Data Scientist

# 👋 Enzo (Cédric) KOUOKAM — Data Scientist Portfolio

<div align="center">

**Data Analyst · Data Scientist · Master Data Science & BI @ Epitech**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Enzo_Kouokam-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enzo-kamhoua/)
[![Email](https://img.shields.io/badge/Email-Contact_Me-01696f?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cedric-enzo.kouokam-kamhoua@epitech.eu)
[![GitHub](https://img.shields.io/badge/GitHub-kenzo--kouokam-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kenzo-kouokam)

> *Étudiant en Master Data Science & Business Intelligence à Epitech — Disponible en alternance (1j/4j) dès septembre 2026*

</div>

---

## 🎯 Profil

Parcours hybride **Génie Logiciel → Data Science**, je maîtrise Python, SQL et Power BI avec une expérience concrète en traitement, modélisation et visualisation de données.  
Je construis des solutions data à forte valeur métier : des pipelines ML sur des datasets réels aux dashboards de performance opérationnelle.

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

## 💼 Expériences Professionnelles

### 🇺🇸 eZdia Inc. (USA, Fremont CA) — Contributeur Data & ML
**Freelance | Juin 2020 – Juin 2022**

eZdia est une société spécialisée en **optimisation de contenu e-commerce et annotation de données** pour les grandes marketplaces (Amazon).

- Annoté et recatégorisé des milliers de **fiches produits Amazon** via la plateforme CrewMachine, selon des taxonomies de catégories strictes
- Développé des **modèles ML de détection d'anomalies** (articles mal référencés/catégorisés) intégrés dans un pipeline de correction à 2 niveaux (L1 + contrôle qualité L2 sur 20% d'échantillon journalier)
- Contribué au **ré-entraînement itératif des modèles** de classification pour améliorer la précision de détection
- Refonte des **critères descriptifs et bullet points produits** pour optimiser le SEO et la catégorisation macro marketplace

---

### 📊 CORTEXPO — Data & Performance Marketing Analyst
**Janvier 2024 – Décembre 2024**

- Analysé les **données de performance marketing** de 5 marques sur Google Ads, Meta Ads et SEO
- Produit des dashboards de suivi en temps réel pour ajustement continu des campagnes
- Collecté, nettoyé et structuré les données multi-plateformes pour des **reportings hebdomadaires**

---

### 📈 MYBOSA — Spécialiste Data & Growth Digital
**Septembre 2022 – Décembre 2023**

- Mis en place et suivi des **KPIs de croissance** multi-réseaux sociaux → **+213% croissance communauté, ×20 engagement**
- Structuré et coordonné une **équipe internationale de 20 personnes** (Maghreb / Afrique subsaharienne)
- Analysé les données d'engagement pour orienter la ligne éditoriale et maximiser la portée organique

---

### 💻 Freelance — Développeur & Consultant Data Digital
**Septembre 2023 – Décembre 2025**

- Conçu et déployé des **tableaux de bord de performance** (KPIs, taux de conversion, ROI) pour 3 clients
- Piloté l'analyse des données marketing multi-plateformes (Google Analytics, Meta Ads)
- Livré 3 missions intégrant collecte, traitement et restitution de données de performance digitale

---

### ⚙️ SOLVEIL — Développeur Frontend & Data Integration
**Mars 2022 – Août 2022**

- Conçu un **système d'information de gestion** (équipe de 5) avec intégration API REST (Laravel) + interface Angular
- Intégré des flux de données entre backend et UI pour automatiser l'affichage d'indicateurs métier

---

## 🛠️ Compétences Techniques

### Data Science & Machine Learning
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-0171BA?style=flat-square&logo=xgboost&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

| Domaine | Compétences |
|---|---|
| **Machine Learning** | Classification, Clustering (K-Means), Feature Engineering, SMOTE, Cross-validation |
| **Modèles** | XGBoost, Random Forest, Régression Logistique, SVM |
| **NLP** | Extraction d'entités, Regex, Classification textuelle, Label Noise Detection |
| **Visualisation** | Matplotlib, Seaborn, Power BI |
| **Stats** | Tests Chi², Mann-Whitney, Corrélations, AUC/ROC, F1-score, Recall |

### Data & BI
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=flat-square&logo=powerbi&logoColor=black)
![Google Analytics](https://img.shields.io/badge/Google_Analytics-E37400?style=flat-square&logo=googleanalytics&logoColor=white)

### Dev & Outils
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![Google Colab](https://img.shields.io/badge/Google_Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=black)

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

## 📬 Contact & Liens

<div align="center">

| 📧 Email | 💼 LinkedIn | 💻 GitHub |
|---|---|---|
| [cedric-enzo.kouokam-kamhoua@epitech.eu](mailto:cedric-enzo.kouokam-kamhoua@epitech.eu) | [linkedin.com/in/enzo-kamhoua](https://www.linkedin.com/in/enzo-kamhoua/) | [github.com/kenzo-kouokam](https://github.com/kenzo-kouokam) |

**📍 France · Permis B · Disponible en alternance (1j/4j) dès septembre 2026**

</div>

---

<div align="center">
<em>Portfolio Data Science — Enzo KOUOKAM · 2026</em>
</div>
