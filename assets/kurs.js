/* ============================================================
   Deutsch B2, Kurs-Engine
   Ein gemeinsamer Motor für alle Seiten. Verbesserungen hier
   wirken rückwirkend auf jeden Tag.

   Storage-Vertrag (NICHT brechen):
     localStorage["deutschB2.v1"] = { version, seiten: {...} }
   Jede Änderung am Schema muss durch migriere() laufen,
   damit Karthiks Versuchsverlauf niemals verloren geht.
   ============================================================ */
(function () {
"use strict";

var KURS = window.KURS = window.KURS || {};
KURS.seiten = KURS.seiten || {};
KURS.SCHLUESSEL = "deutschB2.v1";
KURS.ENGINE = "2.3.0";

/* ---------- Themen-Register: Anzeigenamen für Schwachstellen ---------- */
KURS.THEMEN = {
  "adjektivendungen":     ["Adjektivendungen", "adjective endings"],
  "kasus":                ["Kasus (N/A/D/G)", "cases"],
  "wechselpraepositionen":["Wechselpräpositionen", "two-way prepositions"],
  "verben-mit-praep":     ["Verben mit Präposition", "verbs with prepositions"],
  "nebensatz":            ["Nebensatz-Wortstellung", "subordinate clause order"],
  "konnektoren":          ["Konnektoren", "connectors"],
  "relativsatz":          ["Relativsätze", "relative clauses"],
  "perfekt-praeteritum":  ["Zeitformen", "tenses"],
  "infinitiv-zu":         ["Infinitiv mit „zu“", "infinitive with zu"],
  "zweiteilige-konnektoren": ["Zweiteilige Konnektoren", "two-part connectors"],
  "temporalsaetze":       ["Temporalsätze", "temporal clauses"],
  "modalverben":          ["Modalverben", "modal verbs"],
  "werden":               ["„werden“ (Futur/Passiv/Vollverb)", "uses of werden"],
  "adjektive-als-nomen":  ["Adjektive als Nomen", "nominalised adjectives"],
  "artikelwoerter":       ["Artikelwörter", "determiners"],
  "passiv":               ["Passiv", "passive voice"],
  "konjunktiv2":          ["Konjunktiv II", "subjunctive II"],
  "reflexiv":             ["Reflexive Verben", "reflexive verbs"],
  "n-deklination":        ["n-Deklination", "weak nouns"],
  "wortschatz":           ["Wortschatz", "vocabulary"],
  "redemittel":           ["Redemittel", "set phrases"],
  "leseverstehen":        ["Leseverstehen", "reading"],
  "sprachbausteine":      ["Sprachbausteine", "grammar in context"],
  "hoerverstehen":        ["Hörverstehen", "listening"],
  "schreiben":            ["Schriftlicher Ausdruck", "writing"],
  "sprechen":             ["Mündlicher Ausdruck", "speaking"],
  "wortbildung":          ["Wortbildung", "word formation"],
  "verbformen":           ["Verbformen", "verb forms"],
  "beruf-bewerbung":      ["Bewerbung & Anschreiben", "job applications"],
  "beruf-gespraech":      ["Vorstellungsgespräch", "job interviews"],
  "beruf-buero":          ["Büro & Meetings", "workplace communication"],
  "beruf-email":          ["Geschäftliche E-Mails", "business email"],
  "stellungnahme":        ["Stellungnahme", "opinion writing"],
  "vergleichen":          ["Vergleichen", "comparing"]
};

/* Statusband + Pflicht-Icon. Farbe steht nie allein. */
KURS.band = function (pz) {
  if (pz === null || pz === undefined) return { k: "", i: "○", t: "keine Daten" };
  if (pz >= 80) return { k: "ok",  i: "●", t: "sitzt" };
  if (pz >= 60) return { k: "mid", i: "◐", t: "wackelig" };
  if (pz >= 40) return { k: "ser", i: "◑", t: "schwach" };
  return { k: "bad", i: "▲", t: "kritisch" };
};
KURS.statusHtml = function (pz) {
  var b = KURS.band(pz);
  return '<span class="st ' + b.k + '" title="' + b.t + '"><span class="st-i">' + b.i + '</span>' +
         (pz === null || pz === undefined ? "" : pz + " %") + '</span>';
};

KURS.themaName = function (t) { return (KURS.THEMEN[t] || [t, ""])[0]; };
KURS.themaEn   = function (t) { return (KURS.THEMEN[t] || [t, ""])[1]; };

/* ============================================================
   0b. SPRACHMODUS, „de" | „beide" | „en"
   Standard ist „beide": Deutsch zuerst, Englisch direkt darunter.
   Karthik schaltet Englisch selbst ab, wenn er es nicht mehr braucht, das ist der ehrlichste Fortschrittsmarker, den es gibt.
   ============================================================ */
KURS.SPRACHE_KEY = "deutschB2.sprache";
KURS.sprache = (function () {
  try { return localStorage.getItem(KURS.SPRACHE_KEY) || "beide"; } catch (e) { return "beide"; }
})();
try { document.documentElement.setAttribute("data-sprache", KURS.sprache); } catch (e) {}
KURS.zeigtDe = function () { return KURS.sprache !== "en"; };
KURS.zeigtEn = function () { return KURS.sprache !== "de"; };

KURS.spracheSetzen = function (m) {
  KURS.sprache = m;
  try { localStorage.setItem(KURS.SPRACHE_KEY, m); } catch (e) {}
  location.reload();
};

/* Zweisprachige Beschriftung: „Prüfen · Check", im Modus „de"/„en" nur eine Seite */
KURS.bl = function (de, en) {
  if (KURS.sprache === "de") return de;
  if (KURS.sprache === "en") return en;
  return de + ' <span class="bl-en">· ' + en + '</span>';
};

/* Englischer Erklärblock, nur wenn der Modus ihn zeigt */
KURS.enBlock = function (txt, klasse) {
  if (!txt || !KURS.zeigtEn()) return "";
  return '<div class="en-hilfe ' + (klasse || "") + '"><span class="en-flagge">EN</span>' + txt + '</div>';
};

KURS.spracheUmschalter = function () {
  var m = [["de", "DE"], ["beide", "DE + EN"], ["en", "EN"]];
  return '<span class="sprachwahl" role="group" aria-label="Sprache der Erklärungen">' +
    m.map(function (x) {
      return '<button class="sw' + (KURS.sprache === x[0] ? " an" : "") +
             '" onclick="KURS.spracheSetzen(\'' + x[0] + '\')" ' +
             'aria-pressed="' + (KURS.sprache === x[0]) + '" ' +
             'title="Erklärungen auf ' + (x[0] === "de" ? "Deutsch" : x[0] === "en" ? "Englisch" : "Deutsch und Englisch") + '">' +
             x[1] + '</button>';
    }).join("") + '</span>';
};

/* ============================================================
   1. SPEICHER  (mit Fallback, falls localStorage blockiert ist)
   ============================================================ */
var speicherOk = true, ramSpeicher = null;

function leer() { return { version: 1, engine: KURS.ENGINE, erstellt: heute(), seiten: {} }; }

function lies() {
  if (!speicherOk) return ramSpeicher || (ramSpeicher = leer());
  try {
    var roh = window.localStorage.getItem(KURS.SCHLUESSEL);
    if (!roh) return leer();
    return migriere(JSON.parse(roh));
  } catch (e) {
    speicherOk = false;
    return ramSpeicher || (ramSpeicher = leer());
  }
}

function schreib(d) {
  d.engine = KURS.ENGINE;
  if (!speicherOk) { ramSpeicher = d; return; }
  try { window.localStorage.setItem(KURS.SCHLUESSEL, JSON.stringify(d)); }
  catch (e) { speicherOk = false; ramSpeicher = d; warnbanner(); }
}

/* Schema-Migration: hier kommt jede künftige Änderung rein.
   Niemals Felder löschen, nur ergänzen. */
/* Umbau 08/2026: aus Kurstagen wurden Buchmodule. Alter Fortschritt darf
   dabei nicht verwaisen, deshalb wandern die Schlüssel einmalig mit. */
var UMBENANNT = { "tag-01": "e1-a", "tag-02": "e1-b", "tag-03": "e1-c", "tag-04": "e1-d" };

function migriere(d) {
  if (!d || typeof d !== "object") return leer();
  if (!d.version) d.version = 1;
  if (!d.seiten) d.seiten = {};

  Object.keys(UMBENANNT).forEach(function (alt) {
    var neu = UMBENANNT[alt];
    if (!d.seiten[alt]) return;
    if (d.seiten[neu]) {
      /* Beide vorhanden: Versuche zusammenführen, nichts überschreiben. */
      var z = d.seiten[neu];
      z.versuche = (z.versuche || []).concat(d.seiten[alt].versuche || [])
        .sort(function (a, b) { return a.datum < b.datum ? -1 : 1; });
    } else {
      d.seiten[neu] = d.seiten[alt];
    }
    delete d.seiten[alt];
    if (d.geuebteSeiten && d.geuebteSeiten[alt]) {
      d.geuebteSeiten[neu] = d.geuebteSeiten[neu] || d.geuebteSeiten[alt];
      delete d.geuebteSeiten[alt];
    }
  });

  Object.keys(d.seiten).forEach(function (k) {
    var s = d.seiten[k];
    if (!s.versuche) s.versuche = [];
    if (!s.frei) s.frei = {};
    if (!s.flags) s.flags = {};
    if (!s.feedback) s.feedback = [];
  });
  return d;
}

function seitenSatz(d, id) {
  if (!d.seiten[id]) d.seiten[id] = { versuche: [], frei: {}, flags: {}, feedback: [] };
  return d.seiten[id];
}

KURS.daten = lies;
KURS.speichern = schreib;

function warnbanner() {
  if (document.getElementById("kurs-warn")) return;
  var b = document.createElement("div");
  b.id = "kurs-warn";
  b.className = "hinweisbox";
  b.style.margin = "12px 18px";
  b.innerHTML = "<b>⚠️ Fortschritt kann nicht gespeichert werden</b>Dein Browser blockiert den Speicher für lokale Dateien. " +
    "Öffne die Seite bitte in <b>Chrome</b>, dort funktioniert das Tracking. " +
    "<span class='en'>Your browser blocks local storage. Use Chrome so progress is saved.</span>";
  document.body.insertBefore(b, document.body.firstChild);
}

function heute() { return new Date().toLocaleDateString("sv"); }  /* lokal, nicht UTC, sonst wechselt der Tag um 02:00 */
function jetzt()  { return new Date().toISOString(); }
function dtKurz(iso) { var t = iso.slice(0, 10).split("-"); return t[2] + "." + t[1] + "."; }

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
KURS.esc = esc;

/* 3 statt 3, 2.5 statt 2.5, aber nie 2.4999999 */
function pkt(n) { return Math.round(n * 2) / 2; }
KURS.pkt = pkt;

function norm(s) {
  return String(s == null ? "" : s).toLowerCase().trim()
    .replace(/[.,;:!?"'„“]/g, "").replace(/\s+/g, " ");
}

/* ============================================================
   2. AUSWERTUNGS-HELFER (auch von index.html genutzt)
   ============================================================ */

/* Letzter Versuch je Seite → Themenbilanz über den ganzen Kurs */
KURS.themenBilanz = function () {
  var d = lies(), bilanz = {};
  Object.keys(d.seiten).forEach(function (id) {
    var v = d.seiten[id].versuche;
    if (!v.length) return;
    var letzt = v[v.length - 1];
    Object.keys(letzt.proThema || {}).forEach(function (t) {
      if (!bilanz[t]) bilanz[t] = [0, 0];
      bilanz[t][0] += letzt.proThema[t][0];
      bilanz[t][1] += letzt.proThema[t][1];
    });
  });
  return bilanz;
};

KURS.schwachstellen = function (n) {
  var b = KURS.themenBilanz(), liste = [];
  Object.keys(b).forEach(function (t) {
    if (b[t][1] < 2) return;                       // zu wenig Daten
    liste.push({ thema: t, richtig: b[t][0], gesamt: b[t][1], prozent: Math.round(b[t][0] / b[t][1] * 100) });
  });
  liste.sort(function (a, c) { return a.prozent - c.prozent || c.gesamt - a.gesamt; });
  return n ? liste.slice(0, n) : liste;
};

KURS.seitenStand = function (id) {
  var d = lies(), s = d.seiten[id];
  if (!s || !s.versuche.length) return null;
  var v = s.versuche, letzt = v[v.length - 1], best = 0;
  v.forEach(function (x) { if (x.prozent > best) best = x.prozent; });
  return { versuche: v.length, letzt: letzt.prozent, best: best, datum: letzt.datum };
};

/* ============================================================
   2b. LERNSTAND, die Datenbasis für adaptives Lernen
   Aggregiert alle Versuche zu einem Bild pro Thema und pro Aufgabe.
   Neuere Versuche zählen mehr als alte (Halbwertszeit ~7 Tage).
   ============================================================ */
function tageSeit(iso) {
  if (!iso) return 999;
  var ms = new Date().getTime() - new Date(iso).getTime();
  return Math.max(0, Math.floor(ms / 86400000));
}
KURS.tageSeit = tageSeit;

KURS.lernstand = function () {
  var d = lies(), themen = {}, fehler = {};

  Object.keys(d.seiten).forEach(function (sid) {
    (d.seiten[sid].versuche || []).forEach(function (v) {
      var alter = tageSeit(v.datum);
      var gewicht = 1 / (1 + alter * 0.15);   /* frisch = 1, nach 7 Tagen ≈ 0.49 */

      Object.keys(v.proThema || {}).forEach(function (t) {
        if (!themen[t]) themen[t] = { r: 0, g: 0, wr: 0, wg: 0, zuletzt: null, versuche: 0, verlauf: [] };
        var x = themen[t];
        x.r += v.proThema[t][0];  x.g += v.proThema[t][1];
        x.wr += v.proThema[t][0] * gewicht;  x.wg += v.proThema[t][1] * gewicht;
        x.versuche++;
        x.verlauf.push({ datum: v.datum, quote: Math.round(v.proThema[t][0] / v.proThema[t][1] * 100) });
        if (!x.zuletzt || v.datum > x.zuletzt) x.zuletzt = v.datum;
      });

      (v.falsch || []).forEach(function (f) {
        var k = f.id || (f.thema + "|" + f.frage);
        if (!fehler[k]) fehler[k] = { anzahl: 0, thema: f.thema, frage: f.frage,
                                      richtig: f.richtig, deine: f.deine, seite: sid, zuletzt: v.datum };
        fehler[k].anzahl++;
        if (v.datum > fehler[k].zuletzt) { fehler[k].zuletzt = v.datum; fehler[k].deine = f.deine; }
      });
    });
  });

  Object.keys(themen).forEach(function (t) {
    var x = themen[t];
    x.quote = x.g ? Math.round(x.r / x.g * 100) : null;
    x.aktuell = x.wg ? Math.round(x.wr / x.wg * 100) : null;   /* gewichtet = „wie gut bist du JETZT" */
    x.tage = tageSeit(x.zuletzt);
    x.verlauf.sort(function (a, b) { return a.datum < b.datum ? -1 : 1; });
    x.erst = x.verlauf.length ? x.verlauf[0].quote : null;
    x.letzt = x.verlauf.length ? x.verlauf[x.verlauf.length - 1].quote : null;
  });

  return { themen: themen, fehler: fehler };
};

/* Prioritätsliste: welches Thema braucht heute Training?
   Lücke (70 %) + Fälligkeit (30 %). Nie geübt = mittlere Priorität. */
KURS.prioritaeten = function (kandidaten) {
  var st = KURS.lernstand().themen;
  var liste = (kandidaten || Object.keys(KURS.THEMEN)).map(function (t) {
    var x = st[t];
    var quote = x && x.aktuell !== null ? x.aktuell : null;
    var tage = x ? x.tage : 999;
    var luecke = quote === null ? 0.55 : (100 - quote) / 100;
    var faellig = Math.min(1, tage / 7);
    return {
      thema: t, quote: quote, tage: tage, versuche: x ? x.versuche : 0,
      prio: luecke * 0.7 + faellig * 0.3,
      grund: quote === null ? "noch nie geübt"
           : quote < 50 ? "zuletzt nur " + quote + " % richtig"
           : quote < 70 ? quote + " %, sitzt noch nicht"
           : tage >= 5 ? "seit " + tage + " Tagen nicht geübt"
           : quote + " %, kurze Auffrischung"
    };
  });
  liste.sort(function (a, b) { return b.prio - a.prio || a.thema.localeCompare(b.thema); });
  return liste;
};

/* Aufgaben, bei denen er zuletzt Fehler gemacht hat, Futter für Wiederholung */
KURS.fehlerListe = function (n) {
  var f = KURS.lernstand().fehler;
  var liste = Object.keys(f).map(function (k) { var x = f[k]; x.key = k; return x; });
  liste.sort(function (a, b) { return b.anzahl - a.anzahl || (a.zuletzt < b.zuletzt ? 1 : -1); });
  return n ? liste.slice(0, n) : liste;
};

/* ============================================================
   2b-bis. SPICKZETTEL, die Theorie direkt über den Aufgaben
   Karthik: „Meistens erinnere ich mich halb an das Konzept und liege dann
   falsch." Deshalb steht über jedem Aufgabenblock eine eingeklappte
   Kurzerklärung. Bei Themen unter 40 % klappt sie von selbst auf, dort ist Erst-Raten-dann-Lernen nur Frust ohne Nutzen.
   ============================================================ */
KURS.spickIndex = function () {
  if (KURS._spick) return KURS._spick;
  var idx = {};
  function ausTopf(topf, abdeckung) {
    if (!topf) return;
    Object.keys(topf).forEach(function (k) {
      var t = topf[k];
      if (!t || !t.konzept) return;
      var ziele = (abdeckung && abdeckung[k]) || [k];
      ziele.forEach(function (z) { if (!idx[z]) idx[z] = t.konzept; });
    });
  }
  ausTopf(KURS.fundament, KURS.fundamentAbdeckung);
  ausTopf(KURS.beruf, null);
  /* dazu die Konzeptkarten der Tagesseiten, sie tragen ein eigenes „thema" */
  Object.keys(KURS.seiten || {}).forEach(function (id) {
    ((KURS.seiten[id] || {}).konzepte || []).forEach(function (k) {
      if (k && k.thema && !idx[k.thema]) idx[k.thema] = k;
    });
  });
  KURS._spick = idx;
  return idx;
};

/* Wie sicher ist er in diesem Thema? null = keine Daten. */
KURS.themaQuote = function (thema) {
  var b = KURS.themenBilanz ? KURS.themenBilanz() : {};
  if (!b[thema] || !b[thema][1]) return null;
  return Math.round(b[thema][0] / b[thema][1] * 100);
};

/* ============================================================
   2c. DIE ABENDEINHEIT, 30 Minuten in vier Phasen
   Karthik hat 30 Minuten am Abend zugesagt. Die erste Fassung machte
   daraus 5 Pflichtaufgaben und klappte den Rest als „freiwillig" weg, und die fünf Aufgaben kamen nicht einmal aus dem Unterricht des Tages.
   Jetzt: vier sichtbare Phasen, ein Balken über die ganze Einheit.
     ① Aufwärmen, verteilte Wiederholung + eigene Fehler   ~5 Min
     ② Heute, der Stoff des Kurstages                  ~10 Min
     ③ Fundament, B1-Lücken, Regel zuerst wenn schwach     ~8 Min
     ④ Prüfung, telc B1 (Mo–Do), freitags B2             ~7 Min
   ============================================================ */
KURS.DOSIS = 5;          /* Umfang von Phase ① */
/* ---- Phase ①: verteilte Wiederholung ----------------------------
   Erst die eigenen Fehler, dann Aufgaben aus früheren Kurstagen.
   Deterministisch, damit Versuchsvergleiche gültig bleiben. */
KURS.warmup = function (tagNr, seiteId) {
  var out = [], gesehen = {};

  function nimm(it, quelle, wdh) {
    if (!it || out.length >= KURS.DOSIS) return;
    var txt = (it.satz || it.frage || "").slice(0, 60);
    if (!txt || gesehen[txt]) return;
    gesehen[txt] = 1;
    var c = {}; for (var f in it) c[f] = it[f];
    c.id = "wu" + tagNr + "-" + out.length;
    c.wdh = !!wdh; c.quelle = quelle;
    out.push(c);
  }

  /* 1. Eigene Fehler, die Aufgaben, die er zuletzt falsch hatte */
  var fehler = KURS.fehlerListe ? KURS.fehlerListe(20) : [];
  var fehlerThemen = {};
  fehler.forEach(function (f) { if (f.thema) fehlerThemen[f.thema] = (fehlerThemen[f.thema] || 0) + 1; });

  /* 2. Aufgaben aus den vorherigen Kurstagen, jüngster zuerst */
  var frueher = [];
  for (var n = tagNr - 1; n >= 1 && n >= tagNr - 5; n--) {
    var id = "tag-" + (n < 10 ? "0" + n : n);
    var seite = KURS.seiten[id];
    if (!seite || !seite.bloecke) continue;
    seite.bloecke.forEach(function (b) {
      if (b.phase === 3) return;                       /* Fundament/Beruf nicht doppelt */
      (b.items || []).forEach(function (it) {
        if (it.typ === "frei") return;
        frueher.push({ it: it, tag: n, schwach: !!fehlerThemen[it.thema] });
      });
    });
  }
  /* Themen, in denen er Fehler hatte, kommen zuerst */
  frueher.sort(function (a, b) { return (b.schwach - a.schwach) || (b.tag - a.tag); });
  /* höchstens zwei Aufgaben aus demselben Block, sonst ist das Aufwärmen
     nur ein Ausschnitt einer einzigen Übung von gestern */
  var proBlock = {};
  frueher.forEach(function (x) {
    var k = x.tag + "|" + (x.it.thema || "");
    if ((proBlock[k] || 0) >= 2) return;
    proBlock[k] = (proBlock[k] || 0) + 1;
    nimm(x.it, "Tag " + x.tag, true);
  });
  frueher.forEach(function (x) { nimm(x.it, "Tag " + x.tag, true); });

  /* 3. Notfalls mit dem Fundament auffüllen (nur an Tag 1 relevant) */
  if (out.length < KURS.DOSIS && KURS.fundamentIndex) {
    var keys = Object.keys(KURS.fundamentIndex);
    for (var i = 0; i < keys.length && out.length < KURS.DOSIS; i++) {
      nimm(KURS.fundamentIndex[keys[(i * 7 + tagNr) % keys.length]], "Fundament", true);
    }
  }
  return out;
};

/* Hat er die Tagesdosis an diesem Datum geschafft? */
KURS.dosisStand = function (seiteId) {
  var d = lies(), s = d.seiten[seiteId];
  var heuteStr = heute();
  if (!s || !s.dosis) return { erledigt: 0, fertig: false, datum: heuteStr };
  if (s.dosis.datum !== heuteStr) return { erledigt: 0, fertig: false, datum: heuteStr };
  return { erledigt: s.dosis.erledigt || 0, fertig: !!s.dosis.fertig, datum: s.dosis.datum };
};

KURS.dosisMerken = function (seiteId, erledigt, fertig) {
  var d = lies(), s = seitenSatz(d, seiteId);
  s.dosis = { datum: heute(), erledigt: erledigt, fertig: fertig };
  if (fertig) {
    if (!d.geuebteTage) d.geuebteTage = {};
    /* Flag, kein Zähler: der Wert wuchs vorher mit JEDER beantworteten Aufgabe
       unbegrenzt an und blähte den Export auf. Gelesen werden nur die Schlüssel. */
    d.geuebteTage[heute()] = 1;
    /* Zwei verschiedene Zähler, weil zwei verschiedene Fragen:
       geuebteTage   = an welchen ABENDEN habe ich geübt
       geuebteSeiten = welche EINHEITEN habe ich aufgearbeitet */
    if (!d.geuebteSeiten) d.geuebteSeiten = {};
    d.geuebteSeiten[seiteId] = heute();
  }
  schreib(d);
};

/* Alle Tage, an denen die Dosis geschafft wurde, Basis für Wochenband und Zähler */
KURS.geuebteTage = function () {
  var d = lies();
  return Object.keys(d.geuebteTage || {}).sort();
};

/* Aufgearbeitete Kurstage (tag-01, tag-02 …), kann nie über 40 steigen */
KURS.geuebteSeiten = function () {
  var d = lies();
  return Object.keys(d.geuebteSeiten || {}).sort();
};

/* ============================================================
   3. EXPORT / IMPORT
   ============================================================ */
KURS.exportieren = function () {
  var d = lies();
  var paket = {
    exportiert: jetzt(),
    engine: KURS.ENGINE,
    schueler: "Karthik",
    kurs: "telc Deutsch B2",
    zusammenfassung: {
      schwachstellen: KURS.schwachstellen(8),
      seiten: Object.keys(d.seiten).map(function (id) {
        var st = KURS.seitenStand(id);
        return st ? { seite: id, versuche: st.versuche, letzt: st.letzt, best: st.best, datum: st.datum } : null;
      }).filter(Boolean),
      offeneFragen: sammelFlags(d),
      feedback: sammelFeedback(d)
    },
    roh: d
  };
  var name = "fortschritt-" + heute() + ".json";
  ladeRunter(name, JSON.stringify(paket, null, 2));
  return name;
};

function sammelFlags(d) {
  var out = [];
  Object.keys(d.seiten).forEach(function (id) {
    Object.keys(d.seiten[id].flags || {}).forEach(function (iid) {
      if (d.seiten[id].flags[iid]) out.push({ seite: id, item: iid, frage: d.seiten[id].flags[iid].frage || "" });
    });
  });
  return out;
}
function sammelFeedback(d) {
  var out = [];
  Object.keys(d.seiten).forEach(function (id) {
    (d.seiten[id].feedback || []).forEach(function (f) { out.push({ seite: id, datum: f.datum, text: f.text }); });
  });
  return out.sort(function (a, b) { return a.datum < b.datum ? 1 : -1; });
}
KURS.alleFeedback = function () { return sammelFeedback(lies()); };

function ladeRunter(name, inhalt) {
  var blob = new Blob([inhalt], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 400);
}

KURS.importieren = function (datei, fertig) {
  var r = new FileReader();
  r.onload = function () {
    try {
      var p = JSON.parse(r.result);
      var d = p.roh && p.roh.seiten ? p.roh : p;
      schreib(migriere(d));
      fertig(true);
    } catch (e) { fertig(false); }
  };
  r.readAsText(datei);
};

/* ============================================================
   4. GEMEINSAME KOPFZEILE
   ============================================================ */
/* Eine Leiste für ALLE Seiten. Drei Ziele, immer beschriftet, auch auf dem Handy.
   Vorher: drei verschiedene, von Hand kopierte Varianten, daher „wo bin ich?".
   `ziel` ist eines von: lernen | nachschlagen | fortschritt */
KURS.ZIELE = [
  { id: "lernen",       href: "index.html",         txt: "Lernen" },
  { id: "nachschlagen", href: "nachschlagen.html",  txt: "Nachschlagen" },
  { id: "fortschritt",  href: "fortschritt.html",   txt: "Fortschritt" }
];

KURS.kopf = function (ziel) {
  var h = '<div class="topbar"><div class="topbar-in">' +
    '<a class="brand" href="index.html"><span class="dot"></span><span class="brand-t">Deutsch</span></a>' +
    '<nav class="hauptnav">' +
    KURS.ZIELE.map(function (z) {
      return '<a class="navbtn' + (z.id === ziel ? " ist-hier" : "") + '" href="' + z.href + '">' +
             z.txt + '</a>';
    }).join("") +
    '</nav>' +
    '<span class="spacer"></span>' +
    KURS.spracheUmschalter() +
    '<button class="navbtn nav-icon" onclick="KURS.themaWechseln()" title="Hell / Dunkel" aria-label="Hell oder Dunkel"><svg width="13" height="13" viewBox="0 0 12 12" aria-hidden="true" style="vertical-align:-1px"><circle cx="6" cy="6" r="5.1" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M6 .9a5.1 5.1 0 010 10.2z" fill="currentColor"/></svg></button>' +
    '</div></div>';
  document.write(h);
};

KURS.themaWechseln = function () {
  var el = document.documentElement;
  var neu = el.getAttribute("data-theme") === "dark" ? "light" : "dark";
  el.setAttribute("data-theme", neu);
  try { localStorage.setItem("deutschB2.thema", neu); } catch (e) {}
};
(function () {
  try {
    var t = localStorage.getItem("deutschB2.thema");
    if (!t && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) t = "dark";
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();

/* ============================================================
   5. ÜBUNGS-MOTOR
   ============================================================ */
function Uebung(seiteId, container) {
  this.seiteId = seiteId;
  this.el = container;
  this.items = [];          // {id, typ, thema, max, punkte, erledigt, frage, richtigTxt, deineTxt}
  this.nr = 0;
  this.abgeschlossen = false;
}

KURS.starte = function (seiteId, containerId) {
  var seite = KURS.seiten[seiteId];
  var box = document.getElementById(containerId || "kurs-app");
  if (!seite || !box) return;
  var u = new Uebung(seiteId, box);
  KURS.aktiv = u;
  u.render(seite);
  return u;
};

Uebung.prototype.render = function (seite) {
  var self = this, h = [];
  /* Modulseiten einer Einheit heißen e<Einheit>-<Modul>, z. B. e1-c.
     Nachschlagemodule (b1-fundament, beruf, einstufung) laufen über renderModul. */
  var istModul = /^e\d+-[a-z]$/.test(this.seiteId);

  if (!istModul) { return this.renderModul(seite); }

  var tagNr = seite.nr || 1;
  var phasen = this.baueEinheit(seite, tagNr);
  this.phasen = phasen;
  this._gesehen = {};   /* jedes Thema bekommt seinen Spickzettel genau einmal pro Seite */
  var gesamt = phasen.reduce(function (n, p) { return n + p.anzahl; }, 0);
  var minuten = phasen.reduce(function (n, p) { return n + p.min; }, 0);

  h.push('<section class="einheit" id="einheit">' +
    '<div class="eh-kopf">' +
      '<div class="eh-txt">' +
        '<span class="eh-t">' + esc(seite.modulTitel || KURS.bl("Dieses Modul", "This module")) + '</span>' +
        '<span class="eh-s" id="eh-status">' +
          KURS.bl(gesamt + " Aufgaben · etwa " + minuten + " Minuten",
                  gesamt + " exercises · about " + minuten + " minutes") + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="eh-bar"><i id="eh-bar-i" style="width:0%"></i></div>' +
    '<div class="eh-schritte" id="eh-schritte">' +
      phasen.map(function (p) {
        return '<a class="eh-schritt" href="#phase-' + p.nr + '" id="ehs-' + p.nr + '">' +
          '<span class="ehs-nr">' + "①②③④".charAt(p.nr - 1) + '</span>' +
          '<span class="ehs-t">' + esc(p.titel) + '</span>' +
          '<span class="ehs-n"><b id="ehs-c-' + p.nr + '">0</b>/' + p.anzahl + '</span></a>';
      }).join("") +
    '</div>' +
  '</section>');

  /* ---------- Die vier Phasen ---------- */
  phasen.forEach(function (p) {
    h.push('<section class="phase" id="phase-' + p.nr + '" data-phase="' + p.nr + '">' +
      '<div class="ph-kopf"><span class="ph-nr">' + "①②③④".charAt(p.nr - 1) + '</span>' +
        '<span class="ph-txt"><span class="ph-t">' + esc(p.titel) +
          ' <span class="bl-en">· ' + esc(p.en) + '</span></span>' +
          '<span class="ph-w">' + p.warum + '</span></span>' +
        '<span class="ph-zeit">' + p.min + ' Min · ' + p.anzahl + ' ' + KURS.bl("Aufgaben", "tasks") + '</span>' +
      '</div>');

    /* Konzepte gehören in Phase ②, vor die Aufgaben, nicht in einen eigenen Abschnitt */
    if (p.konzepte && p.konzepte.length) {
      p.konzepte.forEach(function (k) { h.push(konzeptHtml(k)); });
    }
    if (p.videos && p.videos.length) {
      h.push('<details class="card blockkarte"><summary><span class="bk-t">📺 ' +
        KURS.bl("Videos zu diesem Tag", "Videos for today") + '</span>' +
        '<span class="bk-n">' + p.videos.length + '</span></summary><div class="bk-body"><div class="videoliste">');
      p.videos.forEach(function (v) {
        h.push('<a class="videokarte" href="' + v.url + '" target="_blank" rel="noopener">' +
          '<span class="v-play">▶</span><span class="v-txt">' +
          '<span class="v-t">' + esc(v.titel) + '</span>' +
          '<span class="v-k">' + esc(v.kanal) + (v.sprache ? ' · ' + esc(v.sprache) : '') + '</span>' +
          (v.warum ? '<span class="v-w">' + esc(v.warum) + '</span>' : '') +
          '</span></a>');
      });
      h.push('</div></div></details>');
    }

    p.bloecke.forEach(function (b) {
      h.push('<div class="card phasenblock">');
      if (b.titel) h.push('<div class="card-title">' + esc(b.titel) +
        (b.telc ? ' <span class="chip accent">telc · ' + esc(b.telc) + '</span>' : '') + '</div>');
      if (b.hinweis) h.push('<p class="sub">' + b.hinweis + '</p>');
      if (b.text) h.push('<div class="regel" style="line-height:1.75">' + b.text + '</div>');
      h.push(spickHtml(b.items, self._gesehen));   /* Theorie zuerst, dann die Aufgaben */
      (b.items || []).forEach(function (it) { h.push(self.itemHtml(it)); });
      h.push('</div>');
    });

    h.push('<div class="ph-fertig" id="ph-fertig-' + p.nr + '" hidden>' +
      '<span class="pf-haken">✓</span><span>' +
      KURS.bl("Phase " + p.nr + " geschafft.", "Phase " + p.nr + " done.") + '</span></div>');
    h.push('</section>');
  });

  /* Zugabe: alles, was nicht in die 30 Minuten passt. Eingeklappt, zählt nicht mit. */
  var zug = this.zugabe || [];
  var zugN = zug.reduce(function (n, b) { return n + (b.items || []).length; }, 0);
  if (zugN) {
    h.push('<details class="card blockkarte zugabe"><summary>' +
      '<span class="bk-t">＋ ' + KURS.bl("Zugabe", "Extra practice") + '</span>' +
      '<span class="bk-n">' + zugN + ' ' + KURS.bl("Aufgaben", "exercises") + '</span></summary>' +
      '<div class="bk-body"><p class="sub">' +
      KURS.bl("Gehört nicht zu den 30 Minuten. Nur, wenn du an einem Abend richtig Lust hast.",
              "Not part of the 30 minutes. Only when you actually feel like it.") + '</p>');
    zug.forEach(function (b) {
      if (b.titel) h.push('<h3>' + esc(b.titel) + '</h3>');
      (b.items || []).forEach(function (it) { h.push(self.itemHtml(it)); });
    });
    h.push('</div></details>');
  }

  /* --- Auswertungsleiste --- */
  h.push('<div class="sticky-score" id="k-leiste">' +
    '<span class="pkt" id="k-punkte">0 / 0</span>' +
    '<span class="bar" style="flex:1"><i id="k-bar" style="width:0%"></i></span>' +
    '<button class="btn primary" id="k-fertig" onclick="KURS.aktiv.auswerten()">' + KURS.bl("Auswertung", "Results") + '</button>' +
    '<button class="btn" onclick="KURS.aktiv.nochmal()">' + KURS.bl("Nochmal üben", "Try again") + '</button>' +
    '</div>');
  h.push('<div id="k-ergebnis"></div>');

  /* --- Wortschatz --- */
  if (seite.wortschatz && seite.wortschatz.length) {
    h.push('<h2>' + KURS.bl("Wortschatz des Tages", "Today\'s vocabulary") + '</h2><div class="vok">');
    seite.wortschatz.forEach(function (v) {
      h.push('<div class="vokk" onclick="this.classList.toggle(\'auf\')">' +
        '<div class="de">' + esc(v.de) + '</div>' +
        '<div class="tipp">tippen zum Aufdecken</div>' +
        '<div class="rueckseite">' + esc(v.en) +
        (v.bsp ? '<span class="satz-bsp">' + esc(v.bsp) + '</span>' : '') + '</div></div>');
    });
    h.push('</div>');
  }

  /* --- Zusammenfassung --- */
  if (seite.zusammenfassung) {
    h.push('<h2>Mini-Zusammenfassung</h2><div class="card">' + seite.zusammenfassung + '</div>');
  }

  /* --- Dialog-Aufgabe --- */
  if (seite.dialog) {
    h.push('<h2>Für den Chat</h2><div class="hinweisbox info"><b>Wenn du magst: schreib mir das auf Deutsch</b>' +
      seite.dialog + '</div>');
  }

  /* --- Versuchsvergleich + Feedback --- */
  h.push('<h2>Mein Fortschritt <span class="en">· my progress</span></h2>');
  h.push('<div class="card" id="k-versuche"></div>');
  h.push(feedbackHtml(this.seiteId));

  this.el.innerHTML = h.join("");
  var leiste = document.getElementById("k-leiste");
  Array.prototype.forEach.call(this.el.querySelectorAll("details.blockkarte"), function (d) {
    d.addEventListener("toggle", function () {
      if (!d.open) return;
      self.bloeckeAuf = true;
      if (leiste) leiste.removeAttribute("hidden");
    });
  });
  this.stelleWiederHer();
  this.zeigeVersuche();
  this.aktualisiere();
};

/* ------------------------------------------------------------------
   Die Einheit zusammenbauen: welche Blöcke gehören in welche Phase?
   ------------------------------------------------------------------ */
Uebung.prototype.baueEinheit = function (seite, tagNr) {
  var alle = seite.bloecke || [];
  var heuteBl = alle.filter(function (b) { return b.phase !== 3 && b.phase !== 4; });
  var tiefBl  = alle.filter(function (b) { return b.phase === 3; });

  /* Phase ②: der Stoff des Tages, auf ~12 Aufgaben begrenzt.
     Schreibaufgaben (typ "frei") wandern nach hinten, sie kosten 20 Minuten. */
  var heuteItems = [], rest = [];
  heuteBl.forEach(function (b) {
    (b.items || []).forEach(function (it) {
      (it.typ === "frei" ? rest : heuteItems).push({ b: b, it: it });
    });
  });
  var genommen = heuteItems.slice(0, 12);
  var uebrig = heuteItems.slice(12).concat(rest);

  function grupp(liste) {
    var raus = [], letzte = null;
    liste.forEach(function (x) {
      if (!letzte || letzte.q !== x.b) {
        letzte = { q: x.b, titel: x.b.titel, telc: x.b.telc, hinweis: x.b.hinweis, text: x.b.text, items: [] };
        raus.push(letzte);
      }
      letzte.items.push(x.it);
    });
    return raus;
  }

  var warm = KURS.warmup ? KURS.warmup(tagNr, this.seiteId) : [];

  var phasen = [];
  function anzahl(bl) { return bl.reduce(function (n, b) { return n + (b.items || []).length; }, 0); }

  if (warm.length) {
    phasen.push({ nr: 1, titel: "Auffrischen", en: "Warm-up", min: 5,
      warum: "Verteilte Wiederholung: frühere Module und die Themen, in denen du Fehler hattest. " +
             "<span class='en'>Spaced repetition from earlier modules and your own mistakes.</span>",
      bloecke: [{ titel: "", items: warm }], anzahl: warm.length });
  }

  /* Das Modul selbst. Die B1-Anteile (Fundament, Berufsdeutsch, telc-B1-Prüfung)
     standen früher als Phase ③ und ④ in JEDER Tagesseite, sie leben jetzt
     geschlossen im Kurs „B2-Fundamente", damit ein Modul ein Modul bleibt. */
  var bl2 = grupp(genommen);
  phasen.push({ nr: 2, titel: seite.modulTitel || "Das Modul", en: "The module", min: 15,
    warum: "Der Stoff dieses Buchmoduls. Erst die Erklärungen, dann die Aufgaben. " +
           "<span class='en'>This unit module: concepts first, then practice.</span>",
    konzepte: seite.konzepte, videos: seite.videos,
    bloecke: bl2, anzahl: anzahl(bl2) });

  /* Falls eine Seite doch noch phase-3-Blöcke mitbringt, gehen sie in die Zugabe
     statt eine eigene Phase aufzumachen. */
  this.zugabe = tiefBl.concat(grupp(uebrig));
  return phasen;
};

/* Fortschritt je Phase + Gesamtbalken. Ersetzt die alte dosisPruefen(). */
Uebung.prototype.phasenPruefen = function () {
  if (!this.phasen || !this.phasen.length) return;
  var ids = {};
  this.phasen.forEach(function (p) {
    p.bloecke.forEach(function (b) { (b.items || []).forEach(function (it) { ids[it.id] = p.nr; }); });
  });
  var proPhase = {}, gesamt = 0, fertig = 0;
  this.items.forEach(function (e) {
    var nr = ids[e.id]; if (!nr) return;
    proPhase[nr] = proPhase[nr] || [0, 0];
    proPhase[nr][1]++; gesamt++;
    if (e.erledigt) { proPhase[nr][0]++; fertig++; }
  });
  this.phasen.forEach(function (p) {
    var z = proPhase[p.nr] || [0, 0];
    var c = document.getElementById("ehs-c-" + p.nr);
    if (c) c.textContent = z[0];
    var s = document.getElementById("ehs-" + p.nr);
    if (s) { s.classList.toggle("laeuft", z[0] > 0 && z[0] < z[1]); s.classList.toggle("fertig", z[1] > 0 && z[0] === z[1]); }
    var f = document.getElementById("ph-fertig-" + p.nr);
    if (f) { if (z[1] > 0 && z[0] === z[1]) f.removeAttribute("hidden"); else f.setAttribute("hidden", ""); }
  });
  var bar = document.getElementById("eh-bar-i");
  if (bar) bar.style.width = (gesamt ? Math.round(fertig / gesamt * 100) : 0) + "%";

  var alles = gesamt > 0 && fertig >= gesamt;
  var vorher = KURS.dosisStand(this.seiteId);
  /* Der Tag zählt, sobald Phase ① und ② durch sind, nicht erst nach 30 Minuten. */
  var kern = (proPhase[1] ? proPhase[1][0] === proPhase[1][1] : true) &&
             (proPhase[2] ? proPhase[2][0] === proPhase[2][1] : false);
  KURS.dosisMerken(this.seiteId, fertig, kern || alles || vorher.fertig);

  /* Eine Quelle für den Statustext: Umfang der aktuellen Ansicht + Stand */
  var st = document.getElementById("eh-status");
  if (st) {
    var sicht = this.phasen || [];
    var g = sicht.reduce(function (n, p) { return n + p.anzahl; }, 0);
    var m = sicht.reduce(function (n, p) { return n + p.min; }, 0);
    var umfang = KURS.bl(g + " Aufgaben · etwa " + m + " Minuten",
                         g + " exercises · about " + m + " minutes");
    st.innerHTML = alles
      ? KURS.bl("Ganze Einheit geschafft. Stark.", "Whole session done. Strong.")
      : kern
        ? KURS.bl("Der Tag zählt. Der Rest ist Zugabe. · " + umfang,
                  "This day counts, the rest is a bonus. · " + umfang)
        : umfang;
  }
};

/* Modulseiten (Fundament, Beruf, Einstufungstest) behalten den einfachen Aufbau. */
Uebung.prototype.renderModul = function (seite) {
  var self = this, h = [];
  this._gesehen = {};
  if (seite.konzepte && seite.konzepte.length) {
    h.push('<h2>' + KURS.bl("Erklärungen", "Explanations") + '</h2>');
    seite.konzepte.forEach(function (k) { h.push(konzeptHtml(k)); });
  }
  (seite.bloecke || []).forEach(function (b) {
    h.push('<details class="card blockkarte" open><summary>' +
      '<span class="bk-t">' + esc(b.titel) + '</span>' +
      (b.telc ? ' <span class="chip accent">telc · ' + esc(b.telc) + '</span>' : '') +
      '<span class="bk-n">' + (b.items || []).length + ' ' + KURS.bl("Aufgaben", "exercises") + '</span>' +
      '</summary><div class="bk-body">');
    if (b.hinweis) h.push('<p class="sub">' + b.hinweis + '</p>');
    if (b.text) h.push('<div class="regel" style="line-height:1.75">' + b.text + '</div>');
    h.push(spickHtml(b.items, self._gesehen));
    (b.items || []).forEach(function (it) { h.push(self.itemHtml(it)); });
    h.push('</div></details>');
  });
  h.push('<div class="sticky-score" id="k-leiste">' +
    '<span class="pkt" id="k-punkte">0 / 0</span>' +
    '<span class="bar" style="flex:1"><i id="k-bar" style="width:0%"></i></span>' +
    '<button class="btn primary" id="k-fertig" onclick="KURS.aktiv.auswerten()">' + KURS.bl("Auswertung", "Results") + '</button>' +
    '<button class="btn" onclick="KURS.aktiv.nochmal()">' + KURS.bl("Nochmal üben", "Try again") + '</button></div>' +
    '<div id="k-ergebnis"></div>');
  h.push('<h2>Mein Fortschritt <span class="en">· my progress</span></h2>');
  h.push('<div class="card" id="k-versuche"></div>');
  h.push(feedbackHtml(this.seiteId));
  this.el.innerHTML = h.join("");
  this.stelleWiederHer();
  this.zeigeVersuche();
  this.aktualisiere();
};

/* Der Spickzettel über einem Aufgabenblock.
   Kein Abklatsch der Lösungen, die allgemeine Regel, die Tabelle und zwei Beispiele. */
function spickHtml(items, gesehen) {
  var idx = KURS.spickIndex(), zaehl = {};
  (items || []).forEach(function (it) { if (it.thema) zaehl[it.thema] = (zaehl[it.thema] || 0) + 1; });
  var themen = Object.keys(zaehl)
      .filter(function (t) { return idx[t] && !(gesehen && gesehen[t]); })
      .sort(function (a, b) { return zaehl[b] - zaehl[a]; }).slice(0, 2);
  if (!themen.length) return "";
  themen.forEach(function (t) { if (gesehen) gesehen[t] = 1; });

  return themen.map(function (t) {
    var k = idx[t], q = KURS.themaQuote(t);
    var schwach = q === null || q < 40;
    var b = KURS.band(q);
    return '<details class="spick' + (schwach ? " schwach" : "") + '"' + (schwach ? " open" : "") + '>' +
      '<summary>' +
        '<span class="sp-icon">📖</span>' +
        '<span class="sp-t">' + esc(KURS.themaName(t)) + '<span class="sp-sub"> · ' +
          KURS.bl("kurz erklärt", "quick recap") + '</span></span>' +
        (q === null
          ? '<span class="sp-stand neu">' + KURS.bl("neu", "new") + '</span>'
          : '<span class="sp-stand ' + b.k + '"><span class="st-i">' + b.i + '</span>' + q + ' %</span>') +
        '<span class="sp-auf" aria-hidden="true"></span>' +
      '</summary>' +
      '<div class="sp-body">' +
        (schwach ? '<p class="sp-warum">' +
          (q === null
            ? KURS.bl("Neues Thema, lies das einmal, bevor du anfängst.",
                      "New topic, read this once before you start.")
            : KURS.bl("Hier lagst du zuletzt bei " + q + " %. Deshalb steht die Regel offen.",
                      "You were at " + q + " % here last time, so the rule opens by default.")) +
          '</p>' : '') +
        (k.regel && KURS.zeigtDe() ? '<div class="regel">📌 ' + k.regel + '</div>' : '') +
        (k.tabelle ? (function () {
          var h = ['<div class="tabellenbox"><table class="gr"><thead><tr>'];
          k.tabelle.kopf.forEach(function (c) { h.push('<th>' + c + '</th>'); });
          h.push('</tr></thead><tbody>');
          k.tabelle.zeilen.slice(0, 6).forEach(function (z) {
            h.push('<tr>'); z.forEach(function (c) { h.push('<td>' + c + '</td>'); }); h.push('</tr>');
          });
          return h.join("") + '</tbody></table></div>';
        })() : '') +
        (k.beispiele && k.beispiele.length && KURS.zeigtDe()
          ? '<ul class="bsp">' + k.beispiele.slice(0, 2).map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>'
          : '') +
        KURS.enBlock(k.en) +
        '<p class="sp-mehr"><a href="' + (/^beruf-/.test(t) ? "berufsdeutsch" : "b1-fundament") +
          '.html#' + t + '">' + KURS.bl("Ganze Erklärung", "Full explanation") + ' →</a></p>' +
      '</div></details>';
  }).join("");
}

/* Konzeptkarte: kurze Kernaussage sichtbar, Details einklappbar.
   Der lange Lesetext war einer der Gründe, warum die Seite abgeschreckt hat, sichtbar bleiben jetzt nur die Regel (DE) und ihre englische Fassung. */
/* „Einfach erklärt": ein Beispiel VOR jedem Fachwort.
   Vorher stand als Erstes „Nebensatzkonnektor → Verb ans Ende", wer den
   Begriff nicht kennt, ist beim ersten Wort raus, und die konkreten Sätze
   lagen eingeklappt darunter. Jetzt zuerst der Satz, dann der Name dafür. */
function einfachHtml(e) {
  if (!e) return "";
  var h = ['<div class="einfach"><div class="ef-kopf">Einfach erklärt' +
           (KURS.zeigtEn() ? ' <span class="bl-en">· in plain words</span>' : '') + '</div>'];
  if (e.kern) h.push('<p class="ef-kern">' + e.kern + '</p>');
  if (e.paare && e.paare.length) {
    h.push('<div class="ef-paare">');
    e.paare.forEach(function (p) {
      h.push('<div class="ef-p"><div class="ef-satz">' + p.satz + '</div>' +
             (p.notiz ? '<div class="ef-notiz">' + p.notiz + '</div>' : '') + '</div>');
    });
    h.push('</div>');
  }
  if (e.merk) h.push('<p class="ef-merk"><b>Merksatz:</b> ' + e.merk + '</p>');
  return h.join("") + '</div>';
}

function konzeptHtml(k) {
  var kern = k.regel || "";

  /* Karte mit „Einfach erklärt": Titel und einfache Fassung stehen AUSSERHALB
     des <details>. Sonst klappt jeder Klick auf einen Beispielsatz die Karte zu
     und man kann den Satz nicht einmal markieren. */
  if (k.einfach && KURS.zeigtDe()) {
    return '<div class="konzeptkarte card mit-einfach">' +
      '<div class="kk-kopf"><span class="kk-titel">' + esc(k.titel) + '</span></div>' +
      einfachHtml(k.einfach) +
      '<details class="kk-genauer"><summary>Genauer: Regel, Tabelle und mehr Beispiele' +
        (KURS.zeigtEn() ? ' <span class="bl-en">· the precise version</span>' : '') +
      '</summary><div class="kk-body">' + konzeptKoerper(k) + '</div></details>' +
    '</div>';
  }

  var h = ['<details class="konzeptkarte card" ' + (kern ? "" : "open") + '>',
           '<summary><span class="kk-titel">' + esc(k.titel) + '</span>'];
  if (kern) {
    h.push('<span class="kk-kern">' + (KURS.zeigtDe() ? kern : "") + '</span>');
    if (k.en && KURS.zeigtEn()) h.push('<span class="kk-kern-en"><b>EN</b> ' + k.en + '</span>');
  }
  h.push('<span class="kk-mehr">Erklärung, Tabelle und Beispiele öffnen' +
         (KURS.zeigtEn() ? ' <span class="bl-en">· open full explanation</span>' : '') + '</span>');
  h.push('</summary><div class="kk-body">');
  return h.join("") + konzeptKoerper(k) + '</div></details>';
}

/* Der ausführliche Teil, gemeinsam für beide Kartenformen. */
function konzeptKoerper(k) {
  var h = [];
  if (k.de && KURS.zeigtDe()) h.push('<div>' + k.de + '</div>');
  if (k.regel && KURS.zeigtDe()) h.push('<div class="regel">📌 ' + k.regel + '</div>');
  if (k.tabelle) {
    h.push('<div class="tabellenbox"><table class="gr"><thead><tr>');
    k.tabelle.kopf.forEach(function (c) { h.push('<th>' + c + '</th>'); });
    h.push('</tr></thead><tbody>');
    k.tabelle.zeilen.forEach(function (z) {
      h.push('<tr>'); z.forEach(function (c) { h.push('<td>' + c + '</td>'); }); h.push('</tr>');
    });
    h.push('</tbody></table></div>');
  }
  if (k.beispiele && k.beispiele.length) {
    h.push('<ul class="bsp">');
    k.beispiele.forEach(function (b) { h.push('<li>' + b + '</li>'); });
    h.push('</ul>');
  }
  h.push(KURS.enBlock(k.en, "gross"));
  return h.join("");
}

function feedbackHtml(seiteId) {
  return '<div class="card fb">' +
    '<div class="card-title">💬 Dein Feedback <span class="en">· what should I improve?</span></div>' +
    '<p class="sub">Was war unklar? Was fehlt? Was soll ich an dieser Seite ändern? ' +
    'Ich lese das vor der nächsten Einheit und verbessere den Kurs.</p>' +
    '<textarea class="frei" id="k-fb" placeholder="z. B. „Die Erklärung zu den Adjektivendungen war zu schnell" oder „Ich brauche mehr Übungen zu Nebensätzen"…"></textarea>' +
    '<div class="btnrow"><button class="btn" onclick="KURS.aktiv.feedbackSenden()">Feedback speichern</button>' +
    '<span id="k-fb-ok"></span></div><div class="fb-liste" id="k-fb-liste"></div></div>';
}

/* ---------- Einzelne Aufgaben ---------- */
Uebung.prototype.itemHtml = function (it) {
  this.nr++;
  var id = it.id || (this.seiteId + "-i" + this.nr);
  it.id = id;
  var eintrag = { id: id, typ: it.typ, thema: it.thema || "wortschatz", def: it,
                  max: 1, punkte: 0, erledigt: false, frage: rohText(it), deineTxt: "", richtigTxt: "" };

  var koerper = "";
  switch (it.typ) {
    case "luecke":      koerper = hLuecke(it, id);      eintrag.max = zaehleLuecken(it); break;
    case "mc":          koerper = hMc(it, id);          break;
    case "ordnen":      koerper = hOrdnen(it, id);      break;
    case "zuordnen":    koerper = hZuordnen(it, id);    eintrag.max = it.paare.length; break;
    case "cloze":       koerper = hCloze(it, id);       eintrag.max = it.luecken.length; break;
    case "konjugation": koerper = hKonjugation(it, id); eintrag.max = it.zeilen.length; break;
    case "frei":        koerper = hFrei(it, id);        eintrag.max = 0; break;
    default:            koerper = '<p class="sub">Unbekannter Aufgabentyp: ' + esc(it.typ) + '</p>';
  }
  this.items.push(eintrag);

  return '<div class="uebung" id="u-' + id + '">' +
    '<div class="u-head">' +
      '<span class="u-nr">' + this.nr + '</span>' +
      '<span class="u-frage">' + (it.frage ? it.frage : "") +
        (it.hinweis ? '<span class="hinweis">' + esc(it.hinweis) + '</span>' : '') +
        (it.wdh ? ' <span class="chip warn">↻ Wiederholung</span>' : '') +
        (it.b1 ? ' <span class="chip">B1-Check</span>' : '') + '</span>' +
      '<button class="u-flag" id="fl-' + id + '" title="Das war unklar" onclick="KURS.aktiv.flagge(\'' + id + '\')">🚩</button>' +
    '</div>' + koerper +
    '<div class="rueck" id="r-' + id + '" style="display:none"></div></div>';
};

function rohText(it) {
  /* Der Satz ist die Aufgabe; „frage" ist nur der Hinweis davor.
     In der Fehlerliste und im Export muss der Satz stehen, sonst ist der Fehler nicht nachvollziehbar. */
  var t = it.satz || it.text || it.frage || "";
  return String(t).replace(/<[^>]+>/g, "").slice(0, 200);
}
function zaehleLuecken(it) {
  return Array.isArray(it.loesung) ? it.loesung.length : 1;
}

/* -- Lückentext -- */
function hLuecke(it, id) {
  var loes = Array.isArray(it.loesung) ? it.loesung : [it.loesung];
  var n = -1;
  var satz = String(it.satz).replace(/___/g, function () {
    n++;
    return '<input class="luecke" id="in-' + id + '-' + n + '" data-i="' + n + '" autocomplete="off" ' +
           'onkeydown="if(event.key===\'Enter\'){KURS.aktiv.pruefe(\'' + id + '\')}">';
  });
  return '<div class="satz">' + satz + '</div>' +
    '<div class="btnrow"><button class="btn" onclick="KURS.aktiv.pruefe(\'' + id + '\')">' + KURS.bl("Prüfen", "Check") + '</button>' +
    (it.tipp ? '<details class="trans"><summary>💡 Tipp</summary><div>' + esc(it.tipp) + '</div></details>' : '') +
    '</div>';
}

/* -- Multiple Choice -- */
function hMc(it, id) {
  var h = ['<div class="opts">'];
  it.optionen.forEach(function (o, i) {
    h.push('<button class="opt" id="op-' + id + '-' + i + '" onclick="KURS.aktiv.mcWahl(\'' + id + '\',' + i + ')">' + esc(o) + '</button>');
  });
  return h.join("") + '</div>';
}

/* Deterministischer Fisher-Yates mit LCG: gleiche Reihenfolge bei jedem Laden,
   aber wirklich gemischt. Eine Quelle für „Wörter ordnen" UND „Zuordnen", das Zuordnen hatte vorher einen eigenen Ausdruck, der bei vier Paaren nur
   die Liste umdrehte und ab sieben Paaren gar nichts mehr tat. */
function mischen(arr, id) {
  var mix = arr.slice();
  var seed = 0; for (var q = 0; q < id.length; q++) seed = (seed * 31 + id.charCodeAt(q)) % 233280;
  for (var i = mix.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    var j = Math.floor(seed / 233280 * (i + 1));
    var t = mix[i]; mix[i] = mix[j]; mix[j] = t;
  }
  return mix;
}

/* -- Wörter ordnen -- */
function hOrdnen(it, id) {
  var mix = mischen(it.woerter, id);
  var h = ['<div class="wortpool ziel" id="zi-' + id + '"></div><div class="wortpool" id="po-' + id + '">'];
  mix.forEach(function (w, i) {
    h.push('<button class="wort" data-w="' + esc(w) + '" onclick="KURS.aktiv.wortKlick(\'' + id + '\',this,1)">' + esc(w) + '</button>');
  });
  h.push('</div><div class="btnrow"><button class="btn" onclick="KURS.aktiv.pruefe(\'' + id + '\')">' + KURS.bl("Prüfen", "Check") + '</button>' +
         '<button class="btn" onclick="KURS.aktiv.ordnenReset(\'' + id + '\')">' + KURS.bl("Zurücksetzen", "Reset") + '</button></div>');
  return h.join("");
}

/* -- Zuordnen -- */
function hZuordnen(it, id) {
  var links = it.paare.map(function (p, i) { return { t: p[0], i: i }; });
  var rechts = mischen(it.paare.map(function (p, i) { return { t: p[1], i: i }; }), id + "r");
  var h = ['<div class="paare"><div class="paar-sp">'];
  links.forEach(function (x) {
    h.push('<button class="paar" data-s="l" data-i="' + x.i + '" onclick="KURS.aktiv.paarKlick(\'' + id + '\',this)">' + esc(x.t) + '</button>');
  });
  h.push('</div><div class="paar-sp">');
  rechts.forEach(function (x) {
    h.push('<button class="paar" data-s="r" data-i="' + x.i + '" onclick="KURS.aktiv.paarKlick(\'' + id + '\',this)">' + esc(x.t) + '</button>');
  });
  return h.join("") + '</div></div>';
}

/* -- telc Sprachbausteine Cloze -- */
function hCloze(it, id) {
  var n = -1;
  var text = String(it.text).replace(/___/g, function () {
    n++;
    var l = it.luecken[n], o = ['<select class="luecke" style="width:auto" id="cl-' + id + '-' + n + '" data-i="' + n + '"><option value="-1"> wählen </option>'];
    l.optionen.forEach(function (x, i) { o.push('<option value="' + i + '">' + esc(x) + '</option>'); });
    return o.join("") + '</select>';
  });
  return '<div class="satz" style="line-height:2.4">' + text + '</div>' +
    '<div class="btnrow"><button class="btn" onclick="KURS.aktiv.pruefe(\'' + id + '\')">' + KURS.bl("Prüfen", "Check") + '</button></div>';
}

/* -- Konjugation / Deklination -- */
function hKonjugation(it, id) {
  var h = ['<div class="tabellenbox"><table class="gr"><thead><tr><th>' + esc(it.kopf ? it.kopf[0] : "Form") + '</th><th>' + esc(it.kopf ? it.kopf[1] : "Lösung") + '</th></tr></thead><tbody>'];
  it.zeilen.forEach(function (z, i) {
    h.push('<tr><td>' + esc(z[0]) + '</td><td><input class="luecke" id="kj-' + id + '-' + i + '" data-i="' + i + '" autocomplete="off"></td></tr>');
  });
  return h.join("") + '</tbody></table></div><div class="btnrow"><button class="btn" onclick="KURS.aktiv.pruefe(\'' + id + '\')">' + KURS.bl("Prüfen", "Check") + '</button></div>';
}

/* -- Freies Schreiben -- */
function hFrei(it, id) {
  return '<textarea class="frei" id="fr-' + id + '" placeholder="Schreib deine Antwort auf Deutsch…" ' +
    'oninput="KURS.aktiv.freiZaehlen(\'' + id + '\')"></textarea>' +
    '<div class="zaehler" id="zh-' + id + '">0 Wörter' + (it.mindestWorte ? " / " + it.mindestWorte + " Ziel" : "") + '</div>' +
    (it.hinweise ? '<div class="regel">Nutze: ' + it.hinweise.map(esc).join(" · ") + '</div>' : '') +
    '<div class="btnrow"><button class="btn" onclick="KURS.aktiv.musterZeigen(\'' + id + '\')">' + KURS.bl("Musterlösung zeigen", "Show model answer") + '</button></div>' +
    '<div id="mu-' + id + '"></div>';
}

/* ============================================================
   6. PRÜFLOGIK
   ============================================================ */
function findeItem(u, id) {
  for (var i = 0; i < u.items.length; i++) if (u.items[i].id === id) return u.items[i];
  return null;
}

Uebung.prototype.pruefe = function (id) {
  var e = findeItem(this, id); if (!e || e.erledigt) return;
  var it = e.def, ok = 0, deine = [], richtig = [], umlautHinweis = [];

  e.roh = [];   /* Rohantwort, damit ein Reload den Stand wiederherstellen kann */

  if (it.typ === "luecke") {
    var loes = Array.isArray(it.loesung) ? it.loesung : [it.loesung];
    loes.forEach(function (l, i) {
      var inp = document.getElementById("in-" + id + "-" + i); if (!inp) return;
      e.roh.push(inp.value);
      var val = inp.value, gut = passt(val, l, it.auch && it.auch[i]);
      var fast = gut ? null : fastPasst(val, l, it.auch && it.auch[i], it.nichtVerwechseln);
      if (fast) { gut = true; umlautHinweis.push(fast); }
      inp.classList.add(gut ? (fast ? "fast" : "richtig") : "falsch"); inp.disabled = true;
      if (!gut) inp.value = val ? val : "";
      else if (fast) inp.value = fast;
      if (gut) ok++;
      deine.push(val || ""); richtig.push(hauptLoesung(l));
    });
  } else if (it.typ === "ordnen") {
    var zi = document.getElementById("zi-" + id);
    var gebaut = [].map.call(zi.children, function (b) { return b.dataset.w; }).join(" ");
    e.roh = [].map.call(zi.children, function (b) { return b.dataset.w; });
    var soll = Array.isArray(it.loesung) ? it.loesung.join(" ") : it.loesung;
    var gut = norm(gebaut) === norm(soll);
    if (gut) ok = 1;
    [].forEach.call(zi.children, function (b) { b.classList.add(gut ? "richtig" : "falsch"); b.disabled = true; });
    [].forEach.call(document.getElementById("po-" + id).children, function (b) { b.disabled = true; });
    deine.push(gebaut || ""); richtig.push(soll);
  } else if (it.typ === "cloze") {
    it.luecken.forEach(function (l, i) {
      var sel = document.getElementById("cl-" + id + "-" + i); if (!sel) return;
      var w = parseInt(sel.value, 10), gut = w === l.richtig;
      e.roh.push(sel.value);
      sel.classList.add(gut ? "richtig" : "falsch"); sel.disabled = true;
      if (gut) ok++;
      deine.push(w > -1 ? l.optionen[w] : ""); richtig.push(l.optionen[l.richtig]);
    });
  } else if (it.typ === "konjugation") {
    it.zeilen.forEach(function (z, i) {
      var inp = document.getElementById("kj-" + id + "-" + i); if (!inp) return;
      var gut = passt(inp.value, z[1]);
      e.roh.push(inp.value);
      inp.classList.add(gut ? "richtig" : "falsch"); inp.disabled = true;
      if (gut) ok++;
      deine.push(inp.value || ""); richtig.push(hauptLoesung(z[1]));
    });
  }

  /* Fehlender Umlaut: halber Punkt. Voll wäre gelogen, „würde" ohne Punkte ist
     „wurde", ein anderes Wort. Null wäre entmutigend und falsch, denn das Wort saß.
     Der halbe Punkt hält außerdem die adaptive Auswahl ehrlich. */
  if (umlautHinweis.length) ok -= 0.5 * umlautHinweis.length;
  e.punkte = ok; e.erledigt = true;
  e.umlaut = umlautHinweis.length ? umlautHinweis : null;
  e.deineTxt = deine.join(" | "); e.richtigTxt = richtig.join(" | ");
  this.rueckmeldung(id, ok, e.max, it, richtig.join(" | "), e.umlaut);
  this.aktualisiere();
  this.merkeLauf();
};

function hauptLoesung(l) { return Array.isArray(l) ? l[0] : l; }

/* Umlaute ohne Punkte, reines Tastaturproblem, kein Deutschproblem.
   Karthik tippt auf einer englischen Tastatur; „ausdrucke" für „Ausdrücke"
   war das einzige echte Tippproblem in seinem ersten Lauf.
   ACHTUNG: nur akzeptiert, wenn KEINE andere Lösung dieser Aufgabe dadurch
   auch passen würde. Sonst wäre „wurde" für „würde" plötzlich richtig. */
function ohneUmlaut(s) {
  return norm(s).replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");
}
function passt(eingabe, loesung, extra) {
  var kandidaten = (Array.isArray(loesung) ? loesung : [loesung]).concat(extra || []);
  var e = norm(eingabe);
  if (!e) return false;
  for (var i = 0; i < kandidaten.length; i++) if (norm(kandidaten[i]) === e) return true;
  return false;
}

/* „richtig, aber die Umlautpunkte fehlen", gibt den Punkt und sagt es dazu */
function fastPasst(eingabe, loesung, extra, alleOptionen) {
  var kandidaten = (Array.isArray(loesung) ? loesung : [loesung]).concat(extra || []);
  var e = ohneUmlaut(eingabe);
  if (!e || e === norm(eingabe) && !/[äöüß]/i.test(kandidaten.join(""))) return null;
  for (var i = 0; i < kandidaten.length; i++) {
    var k = kandidaten[i];
    if (!/[äöüß]/i.test(k)) continue;              /* Lösung hat gar keinen Umlaut */
    if (ohneUmlaut(k) !== e) continue;
    if (norm(k) === norm(eingabe)) return null;    /* war schon exakt richtig */
    /* Gäbe es eine ANDERE gültige Form, die genauso aussieht? Dann nicht verzeihen. */
    var mehrdeutig = (alleOptionen || []).some(function (o) {
      return norm(o) !== norm(k) && norm(o) === norm(eingabe);
    });
    if (mehrdeutig) return null;
    return hauptLoesung(k);
  }
  return null;
}

Uebung.prototype.mcWahl = function (id, i) {
  var e = findeItem(this, id); if (!e || e.erledigt) return;
  var it = e.def, gut = i === it.richtig;
  it.optionen.forEach(function (o, k) {
    var b = document.getElementById("op-" + id + "-" + k);
    b.disabled = true;
    if (k === it.richtig) b.classList.add("richtig");
    if (k === i && !gut) b.classList.add("falsch");
  });
  e.punkte = gut ? 1 : 0; e.erledigt = true; e.roh = [String(i)];
  e.deineTxt = it.optionen[i]; e.richtigTxt = it.optionen[it.richtig];
  this.rueckmeldung(id, e.punkte, 1, it, it.optionen[it.richtig]);
  this.aktualisiere(); this.merkeLauf();
};

Uebung.prototype.wortKlick = function (id, btn, hin) {
  var e = findeItem(this, id); if (!e || e.erledigt) return;
  var ziel = document.getElementById("zi-" + id), pool = document.getElementById("po-" + id);
  if (btn.parentNode === pool) { ziel.appendChild(btn); } else { pool.appendChild(btn); }
};
Uebung.prototype.ordnenReset = function (id) {
  var e = findeItem(this, id); if (!e || e.erledigt) return;
  var ziel = document.getElementById("zi-" + id), pool = document.getElementById("po-" + id);
  while (ziel.firstChild) pool.appendChild(ziel.firstChild);
};

Uebung.prototype.paarKlick = function (id, btn) {
  var e = findeItem(this, id); if (!e || e.erledigt || btn.classList.contains("fest")) return;
  var box = document.getElementById("u-" + id);
  if (!this._paar) this._paar = {};
  var offen = this._paar[id];
  if (!offen) {
    [].forEach.call(box.querySelectorAll(".paar.aktiv"), function (x) { x.classList.remove("aktiv"); });
    btn.classList.add("aktiv"); this._paar[id] = btn; return;
  }
  if (offen === btn) { btn.classList.remove("aktiv"); this._paar[id] = null; return; }
  if (offen.dataset.s === btn.dataset.s) { offen.classList.remove("aktiv"); btn.classList.add("aktiv"); this._paar[id] = btn; return; }

  offen.classList.remove("aktiv");
  this._paar[id] = null;
  if (offen.dataset.i === btn.dataset.i) {
    offen.classList.add("fest"); btn.classList.add("fest");
    e.punkte++;
  } else {
    offen.classList.add("fehl"); btn.classList.add("fehl");
    setTimeout(function () { offen.classList.remove("fehl"); btn.classList.remove("fehl"); }, 320);
    e.fehlversuche = (e.fehlversuche || 0) + 1;
  }
  if (box.querySelectorAll(".paar.fest").length === e.max * 2) {
    e.erledigt = true;
    if (e.fehlversuche) e.punkte = Math.max(0, e.max - e.fehlversuche);
    e.deineTxt = e.fehlversuche ? (e.fehlversuche + " Fehlversuche") : "alle direkt richtig";
    e.richtigTxt = "alle Paare";
    this.rueckmeldung(id, e.punkte, e.max, e.def, "");
    this.aktualisiere(); this.merkeLauf();
  }
};

Uebung.prototype.freiZaehlen = function (id) {
  var t = document.getElementById("fr-" + id).value.trim();
  var n = t ? t.split(/\s+/).length : 0;
  var e = findeItem(this, id);
  var ziel = e && e.def.mindestWorte ? " / " + e.def.mindestWorte + " Ziel" : "";
  document.getElementById("zh-" + id).textContent = n + " Wörter" + ziel;
  if (e) { e.deineTxt = t; e.erledigt = n > 0; }
};

Uebung.prototype.musterZeigen = function (id) {
  var e = findeItem(this, id); if (!e) return;
  var box = document.getElementById("mu-" + id);
  box.innerHTML = '<div class="rueck ok"><b>Musterlösung</b><br>' + e.def.muster +
    (e.def.kriterien ? '<div class="warum"><span class="warum-t">Worauf telc achtet</span>' + e.def.kriterien + '</div>' : '') +
    '<span class="eng">Vergleiche Satzbau und Redemittel, nicht Wort für Wort.</span></div>';
  this.merkeLauf();
};

/* ---------- Rückmeldung mit Regel-Erklärung ---------- */
Uebung.prototype.rueckmeldung = function (id, ok, max, it, richtigTxt, umlaut) {
  var box = document.getElementById("r-" + id);
  var nurUmlaut = umlaut && umlaut.length && ok >= max - 0.5 * umlaut.length && ok > 0;
  var gut = ok === max;
  box.style.display = "block";
  box.className = "rueck " + (gut ? "ok" : nurUmlaut ? "fast" : "bad");
  var h = [];

  /* Dritter Zustand zwischen richtig und falsch: das Wort saß, der Umlaut fehlte. */
  if (!gut && nurUmlaut) {
    h.push('<b>' + KURS.bl("≈ Fast richtig.", "Almost.") + '</b> ' +
           KURS.bl("Das Wort saß, es fehlten nur die Umlautpunkte: ",
                   "You had the word, only the umlaut dots were missing: ") +
           '<b>' + umlaut.map(esc).join(", ") + '</b>. ' +
           KURS.bl(pkt(ok) + " von " + max + " Punkten.", pkt(ok) + " of " + max + " points."));
    if (KURS.zeigtDe() && it.regel) h.push('<div class="warum">' + it.regel + '</div>');
    if (it.en && KURS.zeigtEn()) h.push('<span class="eng"><b>EN</b> ' + it.en + '</span>');
    box.innerHTML = h.join("");
    return;
  }

  if (gut) {
    h.push('<b>' + KURS.bl("✓ Richtig.", "Correct.") + '</b> ' +
           (KURS.zeigtDe() && it.regel ? it.regel : ""));

  } else {
    h.push('<b>✗ ' + ok + " / " + max + '</b>, ' +
           KURS.bl("richtig ist:", "correct answer:") + ' <b>' + esc(richtigTxt) + '</b>');
    var warum = KURS.zeigtDe() ? (it.regel || "Vergleiche die Form genau.")
                                : (it.en || "Compare the form closely.");
    h.push('<div class="warum"><span class="warum-t">' + KURS.bl("Warum?", "Why?") + '</span>' + warum +
      (KURS.zeigtDe() && it.gegenbeispiel ? '<br>👉 ' + it.gegenbeispiel : '') + '</div>');
  }
  if (it.en && KURS.zeigtEn()) h.push('<span class="eng"><b>EN</b> ' + it.en + '</span>');
  box.innerHTML = h.join("");
};

Uebung.prototype.flagge = function (id) {
  var b = document.getElementById("fl-" + id);
  var d = lies(), s = seitenSatz(d, this.seiteId);
  if (s.flags[id]) { delete s.flags[id]; b.classList.remove("on"); }
  else { var e = findeItem(this, id); s.flags[id] = { frage: e ? e.frage : "", datum: jetzt() }; b.classList.add("on"); }
  schreib(d);
};

/* ============================================================
   7. PUNKTE, AUSWERTUNG, VERSUCHE
   ============================================================ */
Uebung.prototype.stand = function () {
  var p = 0, m = 0, mB = 0, fertig = 0, gesamt = 0;
  this.items.forEach(function (e) {
    if (e.max === 0) return;
    gesamt++; m += e.max; p += e.punkte;
    if (e.erledigt) { fertig++; mB += e.max; }
  });
  /* maxB = nur die tatsächlich bearbeiteten Aufgaben.
     Die Trefferquote wird daran gemessen, sonst würde eine halb bearbeitete
     Seite wie ein schlechtes Ergebnis aussehen. */
  return { punkte: p, max: m, maxB: mB, fertig: fertig, gesamt: gesamt,
           quote: mB ? Math.round(p / mB * 100) : 0 };
};

Uebung.prototype.aktualisiere = function () {
  var s = this.stand();
  var el = document.getElementById("k-punkte");
  if (el) {
    /* Auf Tagesseiten zählt die Einheit, nicht jede Aufgabe der Seite, „0/66" war genau die Zahl, die abschreckt. */
    var ges = s.gesamt;
    if (this.phasen && this.phasen.length) {
      ges = this.phasen.reduce(function (n, p) { return n + p.anzahl; }, 0);
    }
    el.textContent = pkt(s.punkte) + " / " + s.maxB + " Punkte · " + Math.min(s.fertig, ges) + "/" + ges + " Aufgaben";
  }
  var bar = document.getElementById("k-bar");
  if (bar) {
    bar.style.width = s.quote + "%";
    bar.parentNode.className = "bar " + (s.quote >= 80 ? "ok" : s.quote >= 60 ? "mid" : "bad");
  }
};

/* Zwischenstand sichern, damit nichts verloren geht */
Uebung.prototype.merkeLauf = function () {
  try { this.phasenPruefen(); } catch (e) {}
  var d = lies(), s = seitenSatz(d, this.seiteId);
  s.laufend = { datum: jetzt(), items: this.items.map(function (e) {
    return { id: e.id, punkte: e.punkte, max: e.max, erledigt: e.erledigt, thema: e.thema,
             frage: e.frage, deine: e.deineTxt, richtig: e.richtigTxt, roh: e.roh };
  }) };
  schreib(d);
};

Uebung.prototype.stelleWiederHer = function () {
  var d = lies(), s = d.seiten[this.seiteId];
  if (!s) return;
  Object.keys(s.flags || {}).forEach(function (id) {
    var b = document.getElementById("fl-" + id); if (b) b.classList.add("on");
  });
  this.spieleLaufAb(s.laufend);
  zeigeFeedbackListe(this.seiteId);
};

/* Ein unterbrochener Lauf wird nach dem Neuladen exakt wiederhergestellt.
   Ohne das war jede Antwort nach einem Reload weg, und der Tagesdosis-Ring
   sprang zurück, obwohl der Tag längst als geübt gespeichert war. */
Uebung.prototype.spieleLaufAb = function (lauf) {
  if (!lauf || !lauf.items) return;
  var self = this;
  lauf.items.forEach(function (g) {
    if (!g.erledigt || !g.roh) return;
    var e = findeItem(self, g.id); if (!e || e.erledigt) return;
    var it = e.def;
    try {
      if (it.typ === "mc") { self.mcWahl(g.id, parseInt(g.roh[0], 10)); return; }
      if (it.typ === "luecke" || it.typ === "konjugation") {
        var pre = it.typ === "luecke" ? "in-" : "kj-";
        g.roh.forEach(function (v, i) {
          var inp = document.getElementById(pre + g.id + "-" + i); if (inp) inp.value = v;
        });
      } else if (it.typ === "cloze") {
        g.roh.forEach(function (v, i) {
          var sel = document.getElementById("cl-" + g.id + "-" + i); if (sel) sel.value = v;
        });
      } else if (it.typ === "ordnen") {
        var ziel = document.getElementById("zi-" + g.id);
        var pool = document.getElementById("po-" + g.id);
        if (!ziel || !pool) return;
        g.roh.forEach(function (w) {
          var btn = pool.querySelector('.wort[data-w="' + String(w).replace(/"/g, '&quot;') + '"]');
          if (btn) ziel.appendChild(btn);
        });
      } else { return; }   /* frei/zuordnen: nicht wiederherstellbar, bleibt offen */
      self.pruefe(g.id);
    } catch (err) {}
  });
};

Uebung.prototype.auswerten = function () {
  var s = this.stand();
  if (!s.fertig) { alert("Bearbeite zuerst ein paar Aufgaben 🙂"); return; }

  var proThema = {}, falsch = [];
  this.items.forEach(function (e) {
    if (e.max === 0 || !e.erledigt) return;
    if (!proThema[e.thema]) proThema[e.thema] = [0, 0];
    proThema[e.thema][0] += e.punkte;
    proThema[e.thema][1] += e.max;
    if (e.punkte < e.max) falsch.push({ id: e.id, frage: e.frage, deine: e.deineTxt, richtig: e.richtigTxt, thema: e.thema });
  });

  var d = lies(), sp = seitenSatz(d, this.seiteId);
  var versuch = {
    nr: sp.versuche.length + 1, datum: jetzt(),
    punkte: s.punkte, max: s.maxB, maxGesamt: s.max, prozent: s.quote,
    bearbeitet: s.fertig, aufgaben: s.gesamt,
    proThema: proThema, falsch: falsch
  };
  sp.versuche.push(versuch);
  delete sp.laufend;
  schreib(d);
  this.abgeschlossen = true;
  this.zeigeErgebnis(versuch, sp.versuche);
  this.zeigeVersuche();
  var e = document.getElementById("k-ergebnis");
  if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
};

Uebung.prototype.zeigeErgebnis = function (v, alle) {
  var h = ['<div class="card"><div class="card-title">📊 Auswertung, Versuch ' + v.nr + '</div>'];
  var note = v.prozent >= 85 ? "Sehr gut. Das sitzt." :
             v.prozent >= 70 ? "Gut, aber telc B2 verlangt Genauigkeit. Schau dir die Fehler an." :
             v.prozent >= 50 ? "Ausbaufähig. Diese Themen brauchen Wiederholung." :
                               "Ehrlich: das reicht noch nicht für B2. Wir gehen das nochmal durch.";
  h.push('<p style="font-size:22px;font-weight:750;margin:4px 0">' + v.punkte + ' / ' + v.max + ' · ' + v.prozent + '%</p>');
  h.push('<p class="sub">' + note +
    (v.bearbeitet < v.aufgaben
      ? ' <b>Achtung:</b> Du hast nur ' + v.bearbeitet + ' von ' + v.aufgaben +
        ' Aufgaben bearbeitet, die Quote zählt nur die bearbeiteten.'
      : '') + '</p>');

  if (alle.length > 1) {
    var vor = alle[alle.length - 2], diff = v.prozent - vor.prozent;
    h.push('<div class="regel">Vorher ' + vor.prozent + '% → jetzt ' + v.prozent + '% ' +
      '<b class="delta ' + (diff >= 0 ? "up" : "down") + '">' + (diff >= 0 ? "+" : "") + diff + ' Punkte</b></div>');
  }

  h.push('<h3>Nach Thema</h3>');
  var themen = Object.keys(v.proThema).sort(function (a, b) {
    return (v.proThema[a][0] / v.proThema[a][1]) - (v.proThema[b][0] / v.proThema[b][1]);
  });
  themen.forEach(function (t) {
    var r = v.proThema[t], pz = Math.round(r[0] / r[1] * 100);
    h.push('<div class="themerow"><div class="nm">' + esc(KURS.themaName(t)) +
      '<small>' + esc(KURS.themaEn(t)) + ' · ' + r[0] + '/' + r[1] + '</small>' +
      '<span class="bar ' + (pz >= 80 ? "ok" : pz >= 60 ? "mid" : "bad") + '"><i style="width:' + pz + '%"></i></span></div>' +
      '<div class="pct">' + pz + '%</div></div>');
  });

  if (v.falsch.length) {
    h.push('<h3>Deine Fehler <span class="en">· review these</span></h3>');
    v.falsch.forEach(function (f) {
      h.push('<div class="fb-eintrag" style="border-left-color:var(--bad)"><span class="meta">' +
        esc(KURS.themaName(f.thema)) + '</span>' + esc(f.frage) +
        '<br><span style="color:var(--bad)">Du: ' + esc(f.deine) + '</span>' +
        ' → <span style="color:var(--ok)">Richtig: ' + esc(f.richtig) + '</span></div>');
    });
    var schwach = themen.filter(function (t) { return v.proThema[t][0] / v.proThema[t][1] < 0.7; });
    if (schwach.length) {
      h.push('<div class="hinweisbox"><b>Wiederholen</b>' +
        schwach.map(function (t) { return KURS.themaName(t); }).join(" · ") +
        ', diese Themen kommen in der nächsten Einheit als Wiederholungsaufgaben zurück.</div>');
    }
  } else {
    h.push('<div class="hinweisbox info"><b>Alles richtig 🎉</b>Sag mir Bescheid, dann mache ich die nächste Runde schwerer.</div>');
  }

  h.push('<div class="btnrow"><button class="btn primary" onclick="KURS.aktiv.nochmal()">' + KURS.bl("Nochmal üben", "Try again") + '</button>' +
    '<button class="btn" onclick="KURS.exportieren()">⬇︎ Fortschritt exportieren</button>' +
    '<a class="btn" href="index.html">Zur Übersicht</a></div>');
  h.push('<p class="sub">Leg die exportierte Datei in den Ordner <b>_Fortschritt</b>, dann sehe ich deine Fehler und baue die nächste Einheit darauf auf.</p>');
  h.push('</div>');
  document.getElementById("k-ergebnis").innerHTML = h.join("");
};

Uebung.prototype.zeigeVersuche = function () {
  var box = document.getElementById("k-versuche"); if (!box) return;
  var d = lies(), s = d.seiten[this.seiteId];
  if (!s || !s.versuche.length) {
    box.innerHTML = '<div class="card-title">Versuche</div><p class="sub">Noch kein abgeschlossener Versuch. ' +
      'Bearbeite die Übungen und klicke auf <b>Auswertung</b>, danach kannst du jederzeit „Nochmal üben" ' +
      'und siehst hier den direkten Vergleich.</p>';
    return;
  }
  var v = s.versuche, best = 0;
  v.forEach(function (x) { if (x.prozent > best) best = x.prozent; });
  var h = ['<div class="card-title">Versuche <span class="en">· attempt history</span></div><div class="versuche">'];
  v.forEach(function (x, i) {
    if (i) {
      var dif = x.prozent - v[i - 1].prozent;
      h.push('<span class="pfeil">→</span><span class="delta ' + (dif >= 0 ? "up" : "down") + '">' +
        (dif >= 0 ? "+" : "") + dif + '</span><span class="pfeil">→</span>');
    }
    h.push('<div class="versuch' + (x.prozent === best ? " best" : "") + '">' +
      '<span class="v-nr">Versuch ' + x.nr + '</span>' +
      '<span class="v-pz">' + x.prozent + '%</span>' +
      '<span class="v-dt">' + dtKurz(x.datum) + '</span></div>');
  });
  h.push('</div>');

  if (v.length > 1) {
    var erst = v[0], letzt = v[v.length - 1];
    h.push('<h3>Entwicklung nach Thema</h3>');
    var alleT = {};
    Object.keys(erst.proThema).forEach(function (t) { alleT[t] = 1; });
    Object.keys(letzt.proThema).forEach(function (t) { alleT[t] = 1; });
    Object.keys(alleT).forEach(function (t) {
      var a = erst.proThema[t], b = letzt.proThema[t];
      if (!a || !b) return;
      var pa = Math.round(a[0] / a[1] * 100), pb = Math.round(b[0] / b[1] * 100), df = pb - pa;
      h.push('<div class="themerow"><div class="nm">' + esc(KURS.themaName(t)) +
        '<small>Versuch 1: ' + pa + '% → jetzt: ' + pb + '%</small>' +
        '<span class="bar ' + (pb >= 80 ? "ok" : pb >= 60 ? "mid" : "bad") + '"><i style="width:' + pb + '%"></i></span></div>' +
        '<div class="pct"><span class="delta ' + (df >= 0 ? "up" : "down") + '">' + (df >= 0 ? "+" : "") + df + '</span></div></div>');
    });
  }
  h.push('<div class="btnrow"><button class="btn" onclick="KURS.exportieren()">⬇︎ Fortschritt exportieren</button></div>');
  box.innerHTML = h.join("");
};

Uebung.prototype.nochmal = function () {
  var s = this.stand();
  if (s.fertig && !this.abgeschlossen) {
    if (!confirm("Dieser Versuch ist noch nicht ausgewertet. Trotzdem neu starten?\n(Der Versuch geht dann verloren.)")) return;
  }
  var d = lies(); var sp = seitenSatz(d, this.seiteId); delete sp.laufend; schreib(d);
  this._paar = {};
  this.nr = 0; this.items = []; this.abgeschlossen = false;
  this.render(KURS.seiten[this.seiteId]);
  window.scrollTo({ top: document.getElementById("uebungen") ? document.getElementById("uebungen").offsetTop - 60 : 0, behavior: "smooth" });
};

/* ---------- Feedback ---------- */
Uebung.prototype.feedbackSenden = function () {
  var ta = document.getElementById("k-fb"), txt = ta.value.trim();
  if (!txt) return;
  var d = lies(), s = seitenSatz(d, this.seiteId);
  s.feedback.push({ datum: jetzt(), text: txt });
  schreib(d);
  ta.value = "";
  document.getElementById("k-fb-ok").innerHTML = '<span class="fb-gesendet">✓ Gespeichert, kommt in den nächsten Export</span>';
  zeigeFeedbackListe(this.seiteId);
};

function zeigeFeedbackListe(seiteId) {
  var box = document.getElementById("k-fb-liste"); if (!box) return;
  var d = lies(), s = d.seiten[seiteId];
  if (!s || !s.feedback.length) { box.innerHTML = ""; return; }
  box.innerHTML = s.feedback.slice().reverse().map(function (f) {
    return '<div class="fb-eintrag"><span class="meta">' + dtKurz(f.datum) + '</span>' + esc(f.text) + '</div>';
  }).join("");
}

/* ============================================================
   8. SEITENKOPF FÜR MODULSEITEN
   ============================================================ */
KURS.seitenkopf = function (seiteId) {
  var s = KURS.seiten[seiteId]; if (!s) return "";
  var st = KURS.seitenStand(seiteId);
  /* Eyebrow zeigt Einheit und Modul, kein Datum, der Kalender ist weg. */
  var e = KURS.einheitVon ? KURS.einheitVon(seiteId) : null;
  var oben = e ? 'Einheit ' + e.einheit.nr + ' · ' + e.einheit.thema +
                 ' · Modul ' + e.modul.m + ' · ' + KURS.FERTIGKEITEN[e.modul.fertigkeit][0]
               : (s.modulTitel || '');
  return '<div class="pagehead">' +
    (oben ? '<div class="eyebrow">' + esc(oben) + '</div>' : '') +
    '<h1>' + esc(s.titel) + '</h1>' +
    (s.untertitel ? '<p class="sub">' + esc(s.untertitel) + '</p>' : "") +
    (s.themen ? '<div class="btnrow">' + s.themen.map(function (t) {
      return '<span class="chip accent">' + esc(KURS.themaName(t)) + '</span>'; }).join("") + '</div>' : "") +
    (st ? '<p class="sub">Bisher ' + st.versuche + ' Versuch(e) · zuletzt ' + st.letzt + '% · bestes Ergebnis ' + st.best + '%</p>' : "") +
    '</div>';
};

/* Modul ohne Inhalt, kommt nur vor, wenn ein Manifest-Eintrag auf eine
   Datendatei zeigt, die es noch nicht gibt. */
KURS.leereSeite = function () {
  return '<div class="leerzustand"><div class="gross">📄</div>' +
    '<h2 style="margin:0 0 6px">Dieses Modul ist noch nicht gebaut</h2>' +
    '<p>Es steht im Einheiten-Manifest, hat aber noch keine Aufgaben.<br>' +
    '<a href="index.html">Zurück zu den Einheiten</a></p></div>';
};


})();
