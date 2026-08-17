# Nino Franci — Developer Drive

Interaktivni portfolio v obliki mini igre.

## Privzete nastavitve
- Jezik: slovenščina
- Tema: temna

Uporabnik lahko v zgornji vrstici preklopi:
- SL / EN
- temna / svetla tema

Izbira se shrani v `localStorage`, zato jo brskalnik ohrani ob naslednjem obisku.

## Avto
Projekt uporablja PNG sliko:

`assets/porsche-911-gt3-rs-top.png`

V `index.html` jo uporablja:

```html
<img class="car-image" src="assets/porsche-911-gt3-rs-top.png" ...>
```

## Upravljanje
- WASD ali puščice: vožnja
- E: odpri bližnjo sekcijo
- ESC: zapri sekcijo
- Na telefonu: smerni gumbi

## Zagon
Odpri `index.html` v brskalniku ali zaženi lokalni strežnik:

```bash
python -m http.server 8000
```
