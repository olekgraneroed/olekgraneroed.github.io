# Boksmak

Boksmak er en app for å finne din neste bok på norsk ved å prøve den. Du beskriver hva du har lyst på, får tre forslag og kan høre eller lese et ekte utdrag før du velger. Katalogen består av norske bøker og bøker som finnes i norsk oversettelse.

## Slik fungerer det

1. Skriv hva du har lyst på, for eksempel «noe kort og vemodig om kjærlighet».
2. Boksmak matcher beskrivelsen mot stemning, sjanger og stikkord i katalogen og viser tre forslag. «Tre nye forslag» blar videre.
3. Les utdraget, eller få det lest høyt med nettleserens innebygde talesyntese (norsk stemme når den finnes).
4. Legg bøker du vil lese på «Min liste». Listen lagres i nettleseren.

## Filer

- `index.html`: hele appen (HTML, CSS og JavaScript, uten avhengigheter).
- `katalog.js`: bokkatalogen. Legg til bøker her.

## Utdrag og rettigheter

- Utdrag vises bare fra verk som er falt i det fri (forfatteren døde for mer enn 70 år siden): Hamsun, Undset og Ibsen.
- **Ordlyden i utdragene må kontrolleres mot Nasjonalbibliotekets digitale utgaver (nb.no) før lansering.**
- Vernede bøker og oversettelser har `utdrag: null`. Appen lenker da til Nasjonalbiblioteket. For ekte utdrag av nyere bøker trengs avtale med forlag eller lydbokleverandør.

## Kjøre lokalt

Åpne `index.html` i en nettleser, eller:

```bash
python3 -m http.server
```
