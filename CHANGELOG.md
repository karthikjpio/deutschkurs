# Änderungsprotokoll — Deutsch-B2-Kurs

Hier steht, was ich an der Website geändert habe und warum. Basis: Karthiks Feedback,
seine 🚩-Markierungen und die Fehler aus den exportierten Fortschrittsdateien.

---

## 2026-08-19 · Engine 2.0.1 — Vom Kalender zu Einheiten (Schritt 1: Gerüst)

**Karthiks Rückmeldung:** „Zu unübersichtlich, zu viel gleichzeitig. Ich weiß nicht, wo ich
hin soll. Es gibt eine einfache und eine ausführliche Version — ich will die ausführliche."

**Der Befund.** Das Tagesmodell war längst zusammengebrochen: 4 von 40 Kurstagen hatten
Inhalt, 36 Seiten sagten „Noch kein Material". Die Startseite war 14 692 px hoch. Es gab
**drei verschiedene Navigationsleisten** — `KURS.kopf()` für die Tagesseiten, eine von Hand
kopierte in `index.html`/`b1-fundament`/`berufsdeutsch`, und eine dritte in `sprechen.html`,
der der Test-Link fehlte. Auf Handybreite war die Navigation fünf unbeschriftete Emoji.

**Die neue Struktur.** Statt 40 Kurstagen jetzt zwei Kurse:
① **B2-Fundamente (B1)** — die 15 Grammatikthemen der Lehrerin, die telc-B1-Formate und die
B1-Briefe an einem Ort. Kompakt, zuerst durchzuziehen.
② **B2 · Lektion 1–10** — die Einheiten aus Kompass DaF. Jede Lektion hat im Buch vier Module
A–D mit je einer Fertigkeit (Lesen/Hören/Schreiben/Sprechen) plus „Auf dem Weg zur Prüfung".
Diese Struktur übernimmt die App, statt eigene Phasen zu erfinden. B2.1 = Lektion 1–5 liegt
vor, B2.2 = Lektion 6–10 folgt.

**Gebaut**

- `assets/daten/einheiten.js` — Einheiten-Manifest aus dem Inhaltsverzeichnis von B2.1,
  Seite für Seite geprüft. Ersetzt den 40-Tage-Kalender als Rückgrat.
- `seite.html?id=…` — **eine** Seite für jeden Inhalt. Ersetzt 40 fast identische
  `tag-NN.html` (rund 1 500 Zeilen), die jeweils ihre eigene Script-Liste pflegen mussten
  und dabei auseinanderliefen.
- `index.html` neu — nur noch drei Dinge: Weitermachen, Kurs ①, Kurs ②.
  Von elf Blöcken auf drei, von 14 692 px auf 2 659 px.
- `fortschritt.html` — Kennzahlen, Schwachstellen, Entwicklung, Prüfungsteile, Export
  und Feedback. Alles, was vorher die Startseite verstopft hat.
- `nachschlagen.html` — ein Ziel für Grammatik, Merkkarte, Berufsdeutsch und Sprechen.

**Entfernt**

- **Die Kurzversion.** Sie war ein reiner CSS-Schalter ohne Speicher — und zählte falsch:
  ausgeblendete Aufgaben blieben wertbar, „kurz" verkleinerte nur den Nenner der
  Aufgabenzahl, nie den der Punkte. Mit dem Wegfall verschwindet der Widerspruch.
- **Der Kalender** — 40 Termine, Wochenband, „Deine Zeit", „Material fehlt"-Warnungen.
  Fortschritt zählt jetzt pro Modul.
- **Zwei doppelte Navigationsleisten**; alle Seiten nutzen jetzt `KURS.kopf(ziel)`.
- **Toter Code:** `alleFehler`, `PHASEN`, `ring` (hatte nie CSS), `dosisPruefen`,
  `weiterUeben`, `dosisItems` — zusammen 118 Zeilen ohne einen einzigen Aufrufer.
- „Wortschatz gesamt" auf der Startseite — der Vokabeltrainer kann das besser und ist
  bereits nach Lektionen organisiert.

**Behobene Fehler**

1. `geuebteTage` zählte **jede beantwortete Aufgabe** statt Tage und wuchs im Export
   unbegrenzt. Jetzt ein Flag.
2. Das „Mischen" in `hZuordnen` war keins: bei vier Paaren drehte es die Liste nur um,
   ab sieben Paaren tat es gar nichts. Nutzt jetzt denselben LCG-Fisher-Yates wie
   „Wörter ordnen" (neue gemeinsame Funktion `mischen`).
3. Navigation auf dem Handy: die Labels blieben ausgeblendet, übrig waren fünf Emoji.
   Jetzt weicht der Markenname, die drei Ziele bleiben beschriftet.
4. Zeilen in Kurs ① liefen auf 375 px über den Kartenrand — Grid-Kinder haben
   `min-width:auto`; jetzt `minmax(0,1fr)`.

**Technische Entscheidung**

- Alle Asset-Verweise tragen `?v=…`. Pythons `http.server` sendet kein `Cache-Control`,
  der Browser hielt kurs.js und kurs.css deshalb heuristisch für frisch und zeigte nach
  einem Update die alte Version. Die Version steht in `KURS.ENGINE` und in den HTML-Dateien.

**Bewusst noch offen (Schritt 2–6)**

- Die Modulseiten zeigen intern noch die alten vier Phasen (Aufwärmen/Heute/Fundament/
  Prüfung). Der Umbau auf die Buchmodule A–D ist Schritt 3.
- Tag 1–4 liegen noch als `tag-01`…`tag-04` vor und werden zu Einheit 1 A–D umsortiert.
- Hörverstehen fehlt weiter vollständig — 0 von 456 Aufgaben. Schritt 5.
- Die Seitenangaben im alten Material lösen sich nicht gegen diesen Teilband auf
  (zitiert „AB S. 136–137", dort steht der Grammatikanhang) und müssen neu hergeleitet werden.
- `sprechen.html` und der KI-Sprechpartner sind **archiviert, nicht gelöscht**.

## 2026-07-28 · Engine 1.0.0 — Erstaufbau

**Neu gebaut**

- `index.html` — Kursübersicht mit Kennzahlen, Schwachstellen-Tracker, telc-Prüfungsteil-Einschätzung,
  Inhaltsverzeichnis, kumulativem Wortschatz, Export/Import und Feedback-Box.
- `assets/kurs.js` (Engine) + `assets/kurs.css` (Design) — gemeinsam für alle Seiten.
  Eine Verbesserung hier wirkt rückwirkend auf jede Tag-Seite.
- Aufgabentypen: Lückentext, Multiple Choice, Wörter ordnen, Paare zuordnen,
  telc-Sprachbausteine-Cloze, Konjugationstabelle, freies Schreiben mit Musterlösung.
- Fortschritts-Tracking: jeder Durchgang wird als *Versuch* gespeichert
  (Datum, Punkte, Quote pro Thema, alle falschen Antworten). „Nochmal üben" startet Versuch N+1
  und zeigt den direkten Vergleich — gesamt und pro Thema.
- Feedback-Box auf jeder Seite plus 🚩-Markierung pro Aufgabe.
- Export nach `fortschritt-JJJJ-MM-TT.json` für den Ordner `_Fortschritt`.
- `einstufungstest.html` — 42 Aufgaben zu den klassischen B1→B2-Lücken.
- `tag-01.html` — Nachhol-Seite für den verpassten ersten Kurstag,
  rekonstruiert aus Arbeitsbuch S. 136–137 (Teil A).
- `tag-02.html` — 44 Aufgaben zu Konnektoren, Wortstellung, Lesestilen und Wortbildung.
  Quelle: Kursbuch S. 10–12 (B1, B2a/b, B3a/b/c) und Arbeitsbuch S. 137–139 (B1–B5).
- `tag-03.html` … `tag-10.html` — leere Sektionen, die auf Material warten.
- `b1-fundament.html` — Platzhalter für das B1-Wiederholungsmodul.

**Technische Entscheidungen**

- Kein CDN, keine externen Requests — die Seite funktioniert offline und per Doppelklick.
- Fortschritt liegt in `localStorage` unter dem Schlüssel `deutschB2.v1`.
  Jede spätere Schema-Änderung muss durch `migriere()` laufen; der Versuchsverlauf
  darf nie überschrieben werden.
- Tagesinhalte sind Daten (`assets/daten/tag-NN.js`), kein Code. Ein neuer Tag ist eine Datendatei.
- Die Trefferquote zählt nur *bearbeitete* Aufgaben, damit eine halb ausgefüllte Seite
  nicht wie ein schlechtes Ergebnis aussieht.

**Geprüft** (Headless Chromium, alle Tests grün)

- Alle sieben Aufgabentypen: Antwort → Rückmeldung → Punkte.
- Zwei Versuche hintereinander: Historie und Themenvergleich korrekt.
- Export enthält Versuche, falsche Antworten mit Frage und Lösung, Feedback und 🚩-Markierungen.
- 0 externe Requests, 0 Konsolenfehler, kein horizontaler Überlauf auf 390 px.

**Offen / bewusst nicht gebaut**

- Hörverstehen: kein Audio möglich. Wird später mit Transkripten unter Zeitdruck simuliert.
- `b1-fundament.html` bleibt ein Platzhalter, bis die Themenliste der Lehrkraft da ist.
- Tag 1 ist unvollständig — es fehlen die Kursbuchseiten 8–9.

## 2026-07-30 (spät) — Neun Bugs, und die Einheit neu gedacht

**Karthiks Rückmeldung:** „Es sind nur fünf Fragen, ich habe alles falsch, und egal
welchen Tag ich öffne — es sind immer dieselben." Beides stimmte.

**Der Inhaltsfehler.** Die Tagesdosis zog aus Fehlerhistorie + B1-Fundament. Ohne
Fehlerhistorie fiel sie jeden Tag auf denselben Notvorrat zurück: 2× Verben mit
Präposition, 2× Rotationsthema, 1× Beruf. **Kein einziger Satz kam aus dem Unterricht
des Tages.** Dazu kalt auf die zwei Themen mit 0 % aus dem Einstufungstest — daher
„alles falsch". Bewertung selbst war korrekt (mit richtigen Antworten geprüft: 5/5).

**Behobene Fehler (Playwright-Audit):**
1. Reload löschte jede Antwort — `s.laufend` wurde geschrieben, nie gelesen.
2. Dosis-Ring sprang nach dem Reload zurück (Folge von 1).
3. DE-Modus zeigte weiter Englisch — 14 Stellen; jetzt über `html[data-sprache]`.
4. Fehlerliste und Export zeigten den Hinweis statt des Aufgabensatzes.
5. EN-Modus: „Why?" war ein leerer Kasten (121 Fundament-Aufgaben).
6. „X von 40 Kurstagen" zählte Kalendertage statt Kurstage.
7. Tageswechsel um 02:00 statt Mitternacht (UTC statt lokal).
8. „Wörter ordnen" verschob nur drei Wörter — Lösung fast vorsortiert.
9. Zählerleiste zeigte „0/66 Aufgaben" statt des Umfangs der Einheit.

**Die neue Abendeinheit — 30 Minuten, vier sichtbare Phasen:**
- ① Aufwärmen (5 Aufg., 5 Min): aus den letzten Kurstagen, Fehlerthemen zuerst.
- ② Heute (12 Aufg., 10 Min): Konzepte + Aufgaben aus dem Unterricht des Tages.
- ③ Fundament (8 Aufg., 8 Min): adaptive B1-Lücken + Berufsdeutsch, hart gedeckelt.
- ④ Prüfungstraining (7 Min): telc B1 Sprachbausteine / Leseverstehen / Schreiben,
  freitags eine B2-Schreibaufgabe.
Gesamtbalken, Phasenleiste, Knopf „Kurzversion · 15 Min" (blendet ③ und ④ aus).
Der Kurstag zählt, sobald ① und ② durch sind. Rest steht als „Zugabe" eingeklappt.

**Neu:** `assets/daten/pruefung.js` (telc B1 Sprachbausteine + Leseverstehen, 24 Aufgaben)
und `assets/daten/schreiben.js` (10 B1-Briefe mit je vier Leitpunkten, 5 B2-Aufgaben) —
Format gegen die offiziellen telc-Übungstests geprüft.

Testsuiten test.js–test7.js, alle grün. 0 Konsolenfehler, 0 externe Requests.

## 2026-07-31 — Spickzettel über den Aufgaben + halber Punkt für fehlende Umlaute

**Karthiks Rückmeldung nach Tag 1 (42 %):** „Meistens erinnere ich mich halb an das
Konzept und liege dann falsch. Es wäre besser, wenn ich es einmal direkt vor der
Übung wiederhole." — Analyse seines Exports: 9 von 12 Fehlern waren echte
Wissenslücken (falsches Wort), nur 1 ein reines Tippproblem (Ausdrucke/Ausdrücke).

- **Spickzettel (`.spick`)** direkt über den Aufgaben jedes Blocks: Merkregel,
  Tabelle und zwei Beispiele zum Thema, plus Link auf die ganze Erklärung.
  Standard: eingeklappt. **Automatisch offen, wenn das Thema neu ist oder unter 40 %
  liegt** — dort ist Erst-Raten reine Frustration. Jedes Thema erscheint einmal pro Seite.
  Quelle: die vorhandenen Konzeptkarten aus fundament.js, beruf.js und den Tagesseiten
  (die bekamen dafür ein `thema`-Feld). Keine neuen Texte, keine Lösungen verraten.
- **Halber Punkt statt null, wenn nur die Umlautpunkte fehlen.** Eigener dritter
  Zustand „≈ Fast richtig" zwischen grün und rot, mit der korrekten Form.
  Bewusst NICHT der volle Punkt: „wurde" ist nicht „würde", und die adaptive Auswahl
  muss ehrlich bleiben. In seinem ersten Lauf hätte eine großzügigere Regel
  „war" für „wäre" durchgehen lassen — genau den Fehler, den die Aufgabe prüft.
- Neue Suite test8.js (Reihenfolge Theorie→Aufgabe, Auto-Öffnen bei schwachem Thema,
  keine Themen-Dopplung, Umlaut-Halbpunkt, DE-Modus, Mobil). test.js–test8.js grün.

## 2026-07-31 (später) — Sprechen: Vorlage für einen KI-Sprechpartner

Karthiks Idee: kein menschlicher Partner, sondern eine Sprach-KI, die er mit einem
Dokument brieft. Format geprüft (germanup.org + telc Übungstest 1): telc B1 mündlich
ist eine Paarprüfung, ca. 15 Min, 75 von 300 Punkten — Teil 1 Kontaktaufnahme (2–3 Min),
Teil 2 Gespräch über ein Thema (5–6 Min), Teil 3 Gemeinsam etwas planen (5–6 Min).

- Neue Seite `sprechen.html` + `assets/daten/sprechen.js`.
- Erzeugt einen kopierfertigen Anweisungsblock für die Sprach-KI: Rolle, Ablauf mit
  Zeiten, Thema und Wortschatz des Kurstags, zehn Redemittel — und **die echten
  Fehler aus seinem Fortschritt**, damit die KI gezielt danach fragt. Genau das kann
  ein menschlicher Partner nicht leisten.
- Harte Regeln gegen das Hauptproblem von Sprach-KIs: nur Deutsch, normales Tempo,
  GENAU EIN Korrekturhinweis pro Antwort, „sei nicht zu freundlich", drei Sekunden
  warten statt sofort helfen.
- Am Ende gibt die KI ein PROTOKOLL aus (3 Fehler, 3 fehlende Redemittel, Noten,
  ein Übungsauftrag) — das schließt die Schleife zurück in den Kurs.
- Redemittel-Tabelle für alle drei Teile, inkl. Rückfragen und Zeitgewinnen.
- Neue Suite test9.js. test.js–test9.js grün.
