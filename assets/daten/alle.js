/* ============================================================
   EINE LADELISTE FÜR ALLE SEITEN

   Vorher pflegte jede HTML-Datei ihre eigene <script>-Liste. Sie liefen
   auseinander: index.html lud pruefung.js nicht, b1-fundament.html kannte
   nur zwei Tagesdateien, sprechen.html wieder andere. Der kumulative
   Wortschatz zählte deshalb nur, was zufällig geladen war.

   Jede Seite bindet jetzt nur noch diese Datei ein. Reihenfolge zählt:
   fundamente-pruefung.js hängt sich an das Ergebnis von fundament.js,
   pruefung.js und schreiben.js an und muss danach kommen.
   ============================================================ */
(function () {
  var V = "2.3.0";
  var dateien = [
    "kurs-liste",
    "fundament",
    "beruf",
    "pruefung",
    "schreiben",
    "einstufung",

    /* Einheit 1, Kompass DaF B2.1, Lektion 1, Module A–D.
       einheit-01-d.js legt am Ende auch e2-a an (der Kurstag umfasste
       zwei Buchmodule). */
    "einheit-01-a",
    "einheit-01-b",
    "einheit-01-c",
    "einheit-01-d",

    "fundamente-pruefung",
    "einheiten"
  ];

  for (var i = 0; i < dateien.length; i++) {
    document.write('<script src="assets/daten/' + dateien[i] + '.js?v=' + V + '"><\/script>');
  }
})();
