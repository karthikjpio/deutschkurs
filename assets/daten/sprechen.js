/* ============================================================
   SPRECHBLATT — Vorlage für einen KI-Sprechpartner
   Karthik hat keinen menschlichen Partner, sondern lässt eine
   Sprach-KI die telc-B1-Prüfung mit ihm durchspielen.
   Deshalb ist das hier KEIN Gesprächsthema-Zettel, sondern eine
   Anweisung an den Sprechpartner — mit seinen echten Fehlern drin.

   Format geprüft: telc Deutsch B1, mündliche Prüfung, Paarprüfung,
   20 Min Vorbereitung, ca. 15 Min Prüfung, 75 von 300 Punkten.
     Teil 1  Kontaktaufnahme            2–3 Min
     Teil 2  Gespräch über ein Thema    5–6 Min
     Teil 3  Gemeinsam etwas planen     5–6 Min
   Quelle: germanup.org/blog/en/oral-exam-speaking + telc Übungstest 1
   ============================================================ */

/* Teil 2 — ein Thema pro Kurstag, aus dem Stoff des Tages.
   Fällt auf den Seitentitel zurück, wenn ein Tag hier noch fehlt. */
KURS.sprechThemen = {
  1: { thema: "Wie lernst du am besten?",
       frage: "Erzählen Sie: Wie lernen Sie am liebsten — allein oder in der Gruppe? Und warum?",
       stichpunkte: ["Ihre eigene Lernmethode", "Was bei Ihnen nicht funktioniert",
                     "Lernen in Indien und Lernen in Deutschland", "Ihr Tipp für andere"] },
  2: { thema: "Lerntechniken — was bringt wirklich etwas?",
       frage: "Manche sagen, Markieren und Unterstreichen bringt nichts. Was meinen Sie?",
       stichpunkte: ["Welche Technik nutzen Sie?", "Ein Beispiel aus Ihrem Alltag",
                     "Ein Grund dafür (weil / da)", "Ein Gegenargument (obwohl / trotzdem)"] },
  3: { thema: "Mit der Hand schreiben oder tippen?",
       frage: "Schreiben Sie lieber mit der Hand oder tippen Sie? Was sind die Vorteile?",
       stichpunkte: ["Ihre eigene Gewohnheit", "Im Beruf: was benutzen Sie?",
                     "Ein Nachteil vom Tippen", "Was würden Sie Kindern empfehlen?"] },
  4: { thema: "Leben in der Großstadt oder auf dem Land?",
       frage: "Sie kennen Chennai und Aachen. Wo lebt man besser — und warum?",
       stichpunkte: ["Vergleich der beiden Städte", "Vorteile der Großstadt",
                     "Stressfaktoren", "Wo wollen Sie in zehn Jahren leben?"] }
};

/* Teil 3 — gemeinsam etwas planen. Echte telc-B1-Szenarien, rotierend. */
KURS.planAufgaben = [
  { titel: "Ein Willkommensabend für einen neuen Kollegen",
    punkte: ["Wann und wo?", "Wer kommt mit?", "Essen und Getränke", "Wer organisiert was?"] },
  { titel: "Ein Wochenendausflug in der Nähe von Aachen",
    punkte: ["Wohin?", "Wie kommen Sie hin?", "Was nehmen Sie mit?", "Wie viel darf es kosten?"] },
  { titel: "Eine Abschlussfeier für den Deutschkurs",
    punkte: ["Datum und Uhrzeit", "Ort", "Was bringt jeder mit?", "Wen laden Sie ein?"] },
  { titel: "Ein Geburtstagsgeschenk für eine Kollegin",
    punkte: ["Was schenken Sie?", "Wie viel Geld?", "Wer kauft es?", "Wann übergeben Sie es?"] },
  { titel: "Ein Umzug in eine neue Wohnung",
    punkte: ["Wann ziehen Sie um?", "Wer hilft?", "Transporter oder Auto?", "Was machen Sie danach?"] },
  { titel: "Ein Sprachcafé an der VHS organisieren",
    punkte: ["Wie oft?", "Für welches Niveau?", "Wo treffen Sie sich?", "Wie machen Sie Werbung?"] },
  { titel: "Gemeinsam zu einer Jobmesse in Köln fahren",
    punkte: ["Welcher Tag?", "Zug oder Auto?", "Was ziehen Sie an?", "Welche Unterlagen nehmen Sie mit?"] },
  { titel: "Ein Abendessen für Freunde kochen",
    punkte: ["Was kochen Sie?", "Wer kauft ein?", "Wie viele Gäste?", "Wann fangen Sie an?"] },
  { titel: "Einen Fahrradausflug entlang der Rur planen",
    punkte: ["Startpunkt und Strecke", "Wie lange?", "Pause wo?", "Was bei Regen?"] },
  { titel: "Zusammen einen Nebenjob suchen",
    punkte: ["Welche Art Job?", "Wo suchen Sie?", "Wie viele Stunden?", "Wer fragt wen?"] }
];

/* ------------------------------------------------------------------
   Baut das komplette Blatt für einen Kurstag.
   Die Fehlerliste kommt aus dem echten Fortschritt — genau das kann
   ein menschlicher Partner nicht leisten, eine KI aber schon.
   ------------------------------------------------------------------ */
KURS.sprechblatt = function (tagNr) {
  var seite = KURS.seiten["tag-" + (tagNr < 10 ? "0" + tagNr : tagNr)] || {};
  var t2 = KURS.sprechThemen[tagNr] || {
    thema: seite.titel || "Ihr Alltag in Deutschland",
    frage: "Erzählen Sie etwas über dieses Thema und sagen Sie Ihre Meinung.",
    stichpunkte: ["Ihre Erfahrung", "Ein Beispiel", "Ein Vorteil", "Ein Nachteil"]
  };
  var t3 = KURS.planAufgaben[(tagNr - 1) % KURS.planAufgaben.length];

  /* Redemittel und Wortschatz des Tages — die soll er im Gespräch benutzen */
  var woerter = (seite.wortschatz || []).slice(0, 10).map(function (w) {
    return { de: w.de, en: w.en };
  });

  /* Seine echten Fehler: erst die häufigsten Themen, dann konkrete Sätze */
  var prio = [], saetze = [];
  try {
    var b = KURS.themenBilanz();
    prio = Object.keys(b).map(function (k) {
      return { thema: k, quote: b[k][1] ? Math.round(b[k][0] / b[k][1] * 100) : null,
               n: b[k][1] };
    }).filter(function (x) { return x.quote !== null && x.n >= 2 && x.quote < 60; })
      .sort(function (a, b2) { return a.quote - b2.quote; }).slice(0, 5);
  } catch (e) {}
  try {
    saetze = (KURS.fehlerListe(6) || []).map(function (f) {
      return { frage: f.frage, deine: f.deine, richtig: f.richtig, thema: f.thema };
    });
  } catch (e) {}

  return { tagNr: tagNr, datum: seite.datum || "", titel: seite.titel || "",
           teil2: t2, teil3: t3, woerter: woerter, prio: prio, fehler: saetze };
};

/* Die Anweisung, die er in die Sprach-KI kopiert. Bewusst hart formuliert:
   Sprach-KIs sind von Haus aus zu freundlich und verstehen auch falsches
   Deutsch — dann merkt er nie, wo er steht. */
KURS.sprechPrompt = function (bl) {
  var z = [];
  z.push("Du bist Prüfer und Gesprächspartner in einer telc-Deutsch-B1-Prüfung.");
  z.push("Ich heiße Karthik, komme aus Indien, wohne in Aachen und arbeite in der IT.");
  z.push("Ich schreibe die telc-B1-Prüfung im November 2026.");
  z.push("");
  z.push("REGELN — halte dich strikt daran:");
  z.push("1. Sprich NUR Deutsch. Auch wenn ich Englisch spreche, antwortest du auf Deutsch.");
  z.push("   Nur wenn ich ausdrücklich sage „auf Englisch bitte\", erklärst du EINEN Satz auf Englisch.");
  z.push("2. Sprich in normalem Tempo, nicht langsamer. In der Prüfung spricht auch niemand langsam.");
  z.push("3. KORRIGIERE MICH. Nach jeder meiner Antworten nennst du GENAU EINEN Fehler,");
  z.push("   in dieser Form: „Kurz: nicht ___, sondern ___.\" Danach machst du sofort weiter.");
  z.push("   Korrigiere nicht alles — nur den wichtigsten Fehler. Aber lass keinen Durchgang aus.");
  z.push("4. Sei nicht zu freundlich. Sag nicht „sehr gut\", wenn es nicht sehr gut war.");
  z.push("   Wenn ich einen Satz baue, den ein Deutscher nicht sagen würde, sag mir das.");
  z.push("5. Wenn ich stocke, warte drei Sekunden. Hilf erst danach, und nur mit einem Wort.");
  z.push("6. Stell Rückfragen wie ein echter Prüfer: „Warum?\", „Können Sie ein Beispiel geben?\",");
  z.push("   „Und wie ist das in Indien?\" — ich soll längere Antworten geben, nicht nur einen Satz.");
  z.push("");
  z.push("ABLAUF — führe mich durch alle drei Teile, sag jeweils an, welcher Teil beginnt:");
  z.push("");
  z.push("TEIL 1 · Kontaktaufnahme (3 Minuten)");
  z.push("Stell mir Fragen zu Name, Wohnort, Arbeit, Sprachen, Familie, Hobbys, Tagesablauf.");
  z.push("Frag mindestens zweimal nach („Und warum?\", „Seit wann?\").");
  z.push("");
  z.push("TEIL 2 · Gespräch über ein Thema (6 Minuten)");
  z.push("Thema: " + bl.teil2.thema);
  z.push("Stell mir zuerst diese Frage: „" + bl.teil2.frage + "\"");
  z.push("Ich soll 1–2 Minuten am Stück sprechen. Unterbrich mich dabei nicht.");
  z.push("Danach diskutierst du mit mir und gehst auf diese Punkte ein:");
  bl.teil2.stichpunkte.forEach(function (p) { z.push("  - " + p); });
  z.push("");
  z.push("TEIL 3 · Gemeinsam etwas planen (6 Minuten)");
  z.push("Aufgabe: " + bl.teil3.titel);
  z.push("Wir planen das ZUSAMMEN. Du machst Vorschläge, ich mache Vorschläge,");
  z.push("wir sind uns auch mal uneinig und einigen uns am Ende. Klärt diese Punkte:");
  bl.teil3.punkte.forEach(function (p) { z.push("  - " + p); });
  z.push("Achte darauf, dass ich Vorschläge mache und nicht nur zustimme.");
  z.push("");

  if (bl.woerter.length) {
    z.push("WÖRTER, DIE ICH HEUTE BENUTZEN SOLL (aus meinem Unterricht):");
    z.push(bl.woerter.map(function (w) { return w.de; }).join(" · "));
    z.push("Wenn ich sie bis zum Ende nicht benutzt habe, frag am Schluss gezielt danach.");
    z.push("");
  }

  if (bl.prio.length) {
    z.push("MEINE SCHWACHSTELLEN — bau Fragen so, dass ich genau das benutzen MUSS:");
    bl.prio.forEach(function (p) {
      z.push("  - " + KURS.themaName(p.thema) + " (zurzeit " + p.quote + " % richtig)");
    });
    z.push("");
  }

  if (bl.fehler.length) {
    z.push("FEHLER, DIE ICH ZULETZT WIRKLICH GEMACHT HABE — achte besonders darauf:");
    bl.fehler.forEach(function (f) {
      z.push("  - ich sagte „" + f.deine + "\", richtig ist „" + f.richtig + "\"");
    });
    z.push("");
  }

  z.push("AM ENDE — gib mir genau diesen Block aus, damit ich ihn weitergeben kann:");
  z.push("");
  z.push("PROTOKOLL Tag " + bl.tagNr);
  z.push("1. Meine drei häufigsten Fehler (mit dem falschen und dem richtigen Satz)");
  z.push("2. Drei Redemittel, die mir gefehlt haben");
  z.push("3. Eine Note von 1 bis 5 für Aussprache, Wortschatz und Grammatik, mit je einem Satz Begründung");
  z.push("4. Ein Satz: Was soll ich bis zum nächsten Mal üben?");
  z.push("");
  z.push("Fang jetzt an mit Teil 1. Begrüße mich und stell die erste Frage.");
  return z.join("\n");
};
