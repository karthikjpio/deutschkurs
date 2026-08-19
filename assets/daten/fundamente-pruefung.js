/* ============================================================
   FUNDAMENTE · PRÜFUNGSTEIL
   Hängt die telc-B1-Formate an den Kurs „B2-Fundamente" an.

   Vorher lagen diese Aufgaben als Phase ④ in JEDER Tagesseite und
   rotierten nach Wochentag durch, dadurch war das B1-Training über
   40 Seiten verstreut und nirgends vollständig oder abhakbar.
   Jetzt steht alles, was die B1-Prüfung verlangt, an einem Ort.

   Muss NACH fundament.js, pruefung.js und schreiben.js geladen werden.
   ============================================================ */
(function () {
  var seite = KURS.seiten && KURS.seiten["b1-fundament"];
  if (!seite) return;

  var bloecke = [];

  /* KURS.pruefung[k] ist ein Objekt mit titel/hinweis/items, nicht die Liste selbst. */
  function ausTeil(schluessel, kuerzel) {
    var q = KURS.pruefung && KURS.pruefung[schluessel];
    if (!q || !q.items || !q.items.length) return;
    bloecke.push({
      titel: q.titel,
      telc: q.teil,
      hinweis: q.hinweis,
      items: q.items.map(function (it, i) {
        var c = Object.assign({}, it);
        if (!c.id) c.id = "fund-" + kuerzel + "-" + i;
        return c;
      })
    });
  }

  ausTeil("b1-sprachbausteine", "sb");
  ausTeil("b1-lesen", "lv");

  /* Die zehn B1-Briefe. `frei`-Aufgaben zählen nicht in die Punktwertung
     (max = 0), stehen aber mit Musterlösung und Bewertungskriterien da. */
  var briefe = KURS.schreibAufgaben && KURS.schreibAufgaben.b1;
  if (briefe && briefe.length) {
    bloecke.push({
      titel: "telc B1 · Schriftliche Kommunikation",
      telc: "Schreiben",
      hinweis: "Zehn Briefe mit je vier Leitpunkten. telc zieht Punkte ab, wenn ein Leitpunkt fehlt, " +
               "nimm dir 30 Minuten pro Brief. Muster und Bewertungskriterien stehen unter jeder Aufgabe.",
      items: briefe.map(function (a, i) {
        var c = Object.assign({}, a);
        c.typ = "frei";
        if (!c.id) c.id = "fund-brief-" + i;
        if (!c.thema) c.thema = "schreiben";
        return c;
      })
    });
  }

  if (!bloecke.length) return;
  seite.bloecke = (seite.bloecke || []).concat(bloecke);
})();
