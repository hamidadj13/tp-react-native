# TP React Native

Ce projet est une application React Native qui permet de gérer des produits, de s'authentifier et de recevoir des notifications. L'inscription (register) ne fonctionne qu'avec des adresses e-mail pré-enregistrées dans l'API.

## Fonctionnalités

- **Authentification** : Connexion et déconnexion.
- **Inscription** : Fonctionne uniquement avec les adresses e-mail pré-enregistrées dans l'API.
- **Gestion des produits** : Ajout, suppression et affichage des produits.
- **Notifications** : Envoi de notifications push via Expo Notifications.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (installé globalement via `npm install -g expo-cli`)
- Un émulateur Android/iOS ou l'application [Expo Go](https://expo.dev/client) pour tester sur un appareil physique.

## Installation

1. **Cloner le dépôt**

   Ouvrez votre terminal et exécutez la commande suivante pour cloner le dépôt :

   ```bash
   git clone https://github.com/hamidadj13/tp-react-native.git
   cd tp-react-native


2.Installez toutes les dépendances nécessaires en exécutant :

   ```bash
   npm install
   ```

3.Démarrer le projet

Une fois les dépendances installées, démarrez le projet avec :

   ```bash
   npx expo start
   ```

Cela ouvrira une interface Expo dans votre navigateur. Vous pouvez ensuite :

Scanner le QR code avec l'application Expo Go (sur un appareil physique).

Ouvrir dans un émulateur en appuyant sur a (Android) ou i (iOS) dans le terminal.

4.Utilisation

*** Authentification

   Connexion : Utilisez les identifiants suivants pour vous connecter :

   Email : <eve.holt@reqres.in>

   Mot de passe : pistol

*** Inscription : L'inscription ne fonctionne qu'avec des adresses e-mail pré-enregistrées dans l'API. Par exemple :

   Email : <eve.holt@reqres.in>

   Mot de passe : pistol

 !!!Si vous essayez de vous inscrire avec une autre adresse e-mail, l'API renverra une erreur.!!!

*** Gestion des produits

- Ajouter un produit : Remplissez le formulaire pour ajouter un nouveau produit.

- Supprimer un produit : Cliquez sur le bouton de suppression à côté d'un produit pour le supprimer.

- Notifications

Envoyer une notification : Cliquez sur le bouton "Envoyer une notification" pour recevoir une notification de test.

5.Structure du projet

app/ : Contient les écrans et les composants de l'application.

auth/ : Gère l'authentification (connexion et inscription).

dashboard/ : Écran principal après la connexion.

products/ : Gestion des produits.

components/ : Composants réutilisables.

contexts/ : Contexte d'authentification.

services/ : Services API et notifications.

6.Technologies utilisées

React Native

Expo

React Navigation

React Native Paper

Axios (pour les requêtes API)

7.Contribuer

Si vous souhaitez contribuer à ce projet, suivez les étapes suivantes :

Forkez le dépôt : Cliquez sur le bouton "Fork" en haut à droite de la page du dépôt.

Clonez votre fork :

   ```bash
   git clone https://github.com/hamidadj13/tp-react-native.git
   cd tp-react-native
   ```

Créez une nouvelle branche :

   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```

Faites vos modifications et committez-les :

   ```bash
   git add .
   git commit -m "Ajouter une nouvelle fonctionnalité"
   ```

Pushez vers votre branche :

   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```

Ouvrez une Pull Request : Allez sur la page du dépôt original et cliquez sur "New Pull Request".
