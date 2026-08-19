/* ============================================================
   EINHEITEN-MANIFEST, ersetzt den 40-Tage-Kalender aus kurs-liste.js
   Quelle: Kompass DaF B2.1, Inhaltsverzeichnis (gedruckte S. 4–5),
           gegengeprüft an den Lektions-Auftaktseiten.

   Wichtig: das Lehrwerk gibt den Lektionen KEINE Titel, nur Nummern.
   `thema` ist unsere Bezeichnung, `titel` je Modul ist wörtlich aus dem Buch.
   Jede Lektion hat vier Module A–D mit je einer zugewiesenen Fertigkeit, deshalb brauchen wir keine erfundenen Phasen mehr.

   `seite` verweist auf einen Schlüssel in KURS.seiten. null = noch nicht gebaut.
   ============================================================ */

KURS.FERTIGKEITEN = {
  lesen:     ["Lesen", "Reading"],
  hoeren:    ["Hören", "Listening"],
  schreiben: ["Schreiben", "Writing"],
  sprechen:  ["Sprechen", "Speaking"]
};

KURS.einheiten = [
  { nr: 1, thema: "Lernen & Sprache", band: "B2.1", kb: "6–17", ub: "70–81",
    grammatik: ["Wortstellung im Haupt- und Nebensatz", "Kausal- und Konzessivsätze", "Alternativsätze"],
    pruefung: "Kommunikation bei der Arbeit",
    module: [
      { m: "A", fertigkeit: "sprechen",  titel: "Zur Sprache kommen",             seite: "e1-a" },
      { m: "B", fertigkeit: "lesen",     titel: "Auf dem Weg zum Wissen",         seite: "e1-b" },
      { m: "C", fertigkeit: "hoeren",    titel: "Mit der Hand schreiben, wozu?", seite: "e1-c" },
      { m: "D", fertigkeit: "schreiben", titel: "In einer Lerngruppe oder allein?", seite: "e1-d" }
    ] },

  { nr: 2, thema: "Stadt & Leben", band: "B2.1", kb: "18–31", ub: "82–93",
    grammatik: ["Passiv in Gegenwart und Vergangenheit", "Passiv mit Modalverben"],
    pruefung: "Attraktionen in und um Hamburg", film: "Wohnen in der Stadt",
    module: [
      { m: "A", fertigkeit: "hoeren",    titel: "Leben in Großstädten",  seite: "e2-a" },
      { m: "B", fertigkeit: "lesen",     titel: "Städte werden grün",    seite: null },
      { m: "C", fertigkeit: "schreiben", titel: "Abreißen oder umbauen?", seite: null },
      { m: "D", fertigkeit: "sprechen",  titel: "Mein Kurzvortrag",      seite: null }
    ] },

  { nr: 3, thema: "Täuschung & Wahrheit", band: "B2.1", kb: "32–43", ub: "94–105",
    grammatik: ["Adversativsätze", "Finalsätze"],
    pruefung: "Täuschen mit Zahlen?",
    module: [
      { m: "A", fertigkeit: "lesen",     titel: "Lügen und betrügen",              seite: null },
      { m: "B", fertigkeit: "hoeren",    titel: "Täuschen und Tricksen im Tierreich", seite: null },
      { m: "C", fertigkeit: "schreiben", titel: "Vorsicht Täuschung!",             seite: null },
      { m: "D", fertigkeit: "sprechen",  titel: "Also mal ganz ehrlich!",          seite: null }
    ] },

  { nr: 4, thema: "Digitale Welten", band: "B2.1", kb: "44–57", ub: "106–117",
    grammatik: ["Relativsätze", "Relativsätze im Genitiv", "Relativsätze mit „was“ und „wo(r)“ + Präposition"],
    pruefung: "Musikrezeption früher und heute", film: "Das Smartphone und wir",
    module: [
      { m: "A", fertigkeit: "lesen",     titel: "Digitale Welten",                      seite: null },
      { m: "B", fertigkeit: "hoeren",    titel: "Jobmesse, Unternehmen stellen sich vor", seite: null },
      { m: "C", fertigkeit: "schreiben", titel: "Das digitalisierte Zuhause",           seite: null },
      { m: "D", fertigkeit: "sprechen",  titel: "Telemedizin, Für und Wider im Video", seite: null }
    ] },

  { nr: 5, thema: "Wetter & Klima", band: "B2.1", kb: "58–69", ub: "118–129",
    grammatik: ["Konditionalsätze", "Konsekutivsätze"],
    pruefung: "Wetter und Gesundheit",
    module: [
      { m: "A", fertigkeit: "schreiben", titel: "Alle reden über das Wetter", seite: null },
      { m: "B", fertigkeit: "hoeren",    titel: "Meteorologie",               seite: null },
      { m: "C", fertigkeit: "lesen",     titel: "Klimawandel",                seite: null },
      { m: "D", fertigkeit: "sprechen",  titel: "Folgen des Klimawandels",    seite: null }
    ] }
];

/* Lektion 6–10 stehen in B2.2. Sobald das PDF da ist, kommen sie als
   fünf weitere Einträge hierher, am Code ändert sich dafür nichts. */
KURS.einheitenOffen = 5;

/* Alle Module einer Einheit, die schon gebaut sind */
KURS.einheitFertig = function (e) {
  return (e.module || []).filter(function (m) { return m.seite && KURS.seiten[m.seite]; });
};

/* Nächstes offenes Modul über alle Einheiten, für „Weitermachen" */
KURS.naechstesModul = function () {
  for (var i = 0; i < KURS.einheiten.length; i++) {
    var e = KURS.einheiten[i];
    for (var j = 0; j < e.module.length; j++) {
      var m = e.module[j];
      if (!m.seite || !KURS.seiten[m.seite]) continue;
      var st = KURS.seitenStand(m.seite);
      if (!st || !st.versuche) return { einheit: e, modul: m };
    }
  }
  return null;
};

/* Zu welcher Einheit/Modul gehört eine Seiten-id? Für den Seitenkopf. */
KURS.einheitVon = function (seiteId) {
  for (var i = 0; i < KURS.einheiten.length; i++) {
    var e = KURS.einheiten[i];
    for (var j = 0; j < e.module.length; j++) {
      if (e.module[j].seite === seiteId) return { einheit: e, modul: e.module[j] };
    }
  }
  return null;
};
