# BrightVolt Electricals Demo

This demo contains the customer catalogue at `/` and the protected store console at `/admin`.

## Firebase setup

1. Create a Firebase project and register a Web App.
2. Enable Email/Password in Firebase Authentication.
3. Create Firestore Database and Storage.
4. Copy the Web App values into `firebase-config.js`.
5. Create the admin user in Firebase Authentication.
6. Set the user's custom claim `{ "admin": true }` with a trusted Admin SDK script or Cloud Function. Never set this claim from the browser.
7. Deploy rules and hosting:

```sh
firebase login
firebase use YOUR_PROJECT_ID
firebase deploy --only hosting,firestore:rules,firestore:indexes,storage
```

Run the site through Firebase Hosting or another local HTTP server. Firebase ES modules will not authenticate when the HTML is opened directly as `file://`.

## Firestore collections

The admin console manages `products`, `categories`, `enquiries`, `hero_slides`, `promo_banners`, and `store_settings/main`.

The public site reads active products, categories, hero slides, and `store_settings/main`. Public customers may create `enquiries`; only users with the Firebase `admin` custom claim can manage data.

## Admin claim example

Run this only in a trusted server environment with the Firebase Admin SDK, never in frontend code:

```js
await getAuth().setCustomUserClaims('AUTH_USER_UID', { admin: true });
```

The demo starts with placeholder Firebase values and a fallback sample catalogue. Replace the config to activate live data and admin authentication.
