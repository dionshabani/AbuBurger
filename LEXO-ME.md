# Abu Burger — Udhëzuesi i publikimit

Faqe statike në HTML, CSS dhe JavaScript. Menyja është në shqip. Nuk nevojitet bazë të dhënash ose proces ndërtimi.

## Publikimi në Vercel
1. Krijo një repository në GitHub dhe ngarko përmbajtjen e kësaj dosjeje. `index.html` duhet të jetë në rrënjë të repository-t. Mos ngarko `node_modules`.
2. Hyr në https://vercel.com/new dhe importo repository-n.
3. Te Framework Preset zgjidh **Other**. Root Directory: rrënja e repository-t. Build Command: bosh. Output Directory: `.`. Nuk duhen variabla mjedisi.
4. Shtyp **Deploy**. Hap adresën publike që jep Vercel.
5. Kontrollo që adresa e prodhimit hapet nga telefoni pa hyrë në llogari. Nëse ka mbrojtje hyrjeje, kontrollo Deployment Protection në cilësimet e projektit.

Dokumentacioni zyrtar: https://vercel.com/docs/deployments/overview
Konfigurimi: https://vercel.com/docs/project-configuration/general-settings

## Kodi QR për printim
Pasi ta publikosh faqen në Vercel, dërgo adresën përfundimtare në këtë bisedë për të marrë kodin QR të gatshëm për printim. Kur përditëson menynë, mbaje të njëjtën adresë që kodi QR të vazhdojë të funksionojë.

## Ndryshimi i menysë
Redakto emrat dhe çmimet në `index.html`, pastaj ruaji në GitHub. Vercel publikon përditësimin automatikisht kur repository është lidhur. Logoja është në `assets/logo.png`. Përbërësit, adresa, orari dhe numri i telefonit nuk janë shpikur; mund të shtohen më vonë.

## Shikimi në kompjuter
Hap `index.html` direkt në shfletues, ose nga kjo dosje ekzekuto `npx serve .`. Fontet nga Google Fonts janë opsionale; faqja përdor fontet e sistemit nëse interneti nuk i ngarkon.

## Skedarët
- `index.html`, `style.css`, `menu.js`: menyja publike
- `assets/logo.png`: logoja e rikrijuar nga fotografia
- `vercel.json`: konfigurimi për Vercel

