/* ============================================================
   TAG 3 — 29.07.2026
   Quelle: Kursbuch S. 12 (B3d, B4 — Abschluss von Teil B), S. 13–14 (Teil C: C1, C2, C3)
           Arbeitsbuch S. 140–141 (B5d, B5e, B6 a–d, B7, B8), S. 142–143 (C1 a–b, C2 a–b, C3 a–d)
   Kernthemen: (1) Alternativen ausdrücken — anstatt dass / anstatt … zu / stattdessen / statt / anstelle
               (2) Angaben mit Präposition (wegen, trotz, aus + Genitiv/Dativ) ↔ Nebensatz
               (3) Hörstile: globales und selektives Hören
               (4) Wortbildung mit „Schrift“
   ABGRENZUNG zu Tag 2: dort waren weil/da/obwohl/deshalb/trotzdem (Grund & Gegengrund) das Thema.
   Hier NEU: die Alternative (anstatt) und die Präposition↔Nebensatz-Umformung.
   Nur die Wiederholungsaufgaben greifen bewusst auf Tag 2 zurück.
   ============================================================ */
KURS.seiten["tag-03"] = {
id: "tag-03", nr: 3, datum: "2026-07-29",
titel: "Mit der Hand schreiben — wozu?",
untertitel: "Alternativen ausdrücken: anstatt dass / anstatt … zu / stattdessen · Angaben mit Präposition und ihre Nebensätze · globales und selektives Hören · Wortbildung mit „Schrift“",
themen: ["konnektoren", "infinitiv-zu", "kasus", "hoerverstehen", "wortbildung"],

videos: [
  { titel: "Von ANSTATT DASS zu ANSTATT ZU — geht das immer?", kanal: "Rocking German Grammar", sprache: "Deutsch", warum: "Das Kernthema von heute inklusive der Subjektregel, bei der du im Unterricht den Fehler hattest.", url: "https://www.youtube.com/watch?v=V012Lo1rz3k" },
  { titel: "statt, anstatt oder stattdessen?", kanal: "lingoni GERMAN", sprache: "Deutsch", warum: "In unter einer Minute: Präposition statt/anstatt + Genitiv gegen das Adverb stattdessen.", url: "https://www.youtube.com/shorts/fGnNiavrGhc" },
  { titel: "„anstatt … dass“ und „ohne … dass“ richtig benutzen", kanal: "Lysann – Deutsch lernen", sprache: "Deutsch", warum: "Beide Konstruktionen als EIN Muster — spart dir später das Lernen von „ohne … zu“.", url: "https://www.youtube.com/watch?v=VgL3QWlCSzQ" },
  { titel: "OBWOHL / TROTZDEM / TROTZ — Konzessivangaben", kanal: "Frag Amalia", sprache: "Deutsch", warum: "Die Dreier-Verwechslung isoliert: Nebensatz, Adverb, Präposition + Genitiv. Direkt zu Arbeitsbuch B6/B7.", url: "https://www.youtube.com/watch?v=4ybe9OskzOs" },
  { titel: "B1 — Lesson 16 | anstatt … zu | anstatt dass", kanal: "Learn German", sprache: "Englisch erklärt", warum: "Falls die Regel auf Deutsch nicht klickt: dieselbe Sache ruhig auf Englisch erklärt.", url: "https://www.youtube.com/watch?v=DcWpmjmA-gU" }
],

konzepte: [
{
  titel: "① Alternativen ausdrücken — die vierte Konnektoren-Familie",
  thema: "konnektoren",
  de: "<p>An Tag 2 hattest du <b>Grund</b> (weil, deshalb) und <b>Gegengrund</b> (obwohl, trotzdem). " +
      "Heute kommt die dritte Bedeutung dazu: die <b>Alternative</b>. " +
      "Man sagt, was <b>nicht</b> passiert — und was <b>stattdessen</b> passiert.</p>" +
      "<p>Wie immer gibt es dieselbe Aussage in drei Bauformen. Genau das prüft telc.</p>",
  tabelle: {
    kopf: ["Bauform", "Wort", "Beispiel aus dem Kursbuch"],
    zeilen: [
      ["<b>Nebensatz</b> (Verb ans Ende)", "anstatt dass", "<b>Anstatt dass</b> man in Hefte <b>schreibt</b>, werden immer häufiger Tablets verwendet."],
      ["<b>Infinitiv</b> mit zu", "anstatt … zu", "<b>Anstatt</b> mit viel Mühe die Schreibschrift <b>zu üben</b>, sollten die Schüler nur die Druckschrift lernen."],
      ["<b>Verbindungsadverb</b> (Verb Position 2)", "stattdessen", "Die eine Gruppe schrieb mit dem Laptop, die andere Gruppe schrieb <b>stattdessen</b> mit der Hand."],
      ["<b>Präposition</b> + Genitiv", "statt / anstelle", "Es wäre ein Fehler, <b>anstelle der</b> Handschrift nur das Tippen zu lehren."]
    ]
  },
  regel: "Merke die Richtung: „anstatt“ und „statt/anstelle“ stehen bei dem, was NICHT stattfindet. „stattdessen“ steht bei der Alternative, die WIRKLICH stattfindet. Genau danach fragt Arbeitsbuch C3.",
  beispiele: [
    "Was nicht passiert: <b>Anstatt</b> mit der Hand zu schreiben, … <span class='en'>(Handschrift findet NICHT statt)</span>",
    "Was passiert: …, <b>stattdessen</b> tippen sie. <span class='en'>(Tippen findet statt)</span>",
    "Für dich: <b>Anstatt</b> abends Serien <b>zu schauen</b>, mache ich jetzt zehn Fundament-Aufgaben."
  ],
  en: "The third connector family after cause and concession: the alternative. Same statement, four grammatical shapes. Direction matters: anstatt / statt / anstelle mark what does NOT happen; stattdessen marks the alternative that DOES happen."
},
{
  titel: "② Die wichtigste Regel des Tages: „anstatt dass“ oder „anstatt … zu“?",
  thema: "infinitiv-zu",
  de: "<p>Das ist die Regel aus Arbeitsbuch C3a — und genau hier hast du im Unterricht einen Fehler gemacht. " +
      "Es hängt <b>nur</b> davon ab, ob beide Sätze dasselbe Subjekt haben.</p>",
  tabelle: {
    kopf: ["Subjekte", "erlaubt", "Beispiel"],
    zeilen: [
      ["<b>gleich</b> (beide Male „man“)", "beides: „anstatt … zu“ <i>oder</i> „anstatt dass“", "<b>Anstatt</b> in Hefte <b>zu schreiben</b>, verwendet <u>man</u> Tablets."],
      ["<b>verschieden</b> (die Kinder / man)", "<b>nur</b> „anstatt dass“", "<u>Die Kinder</u> schreiben in Druckschrift, <b>anstatt dass</b> <u>man</u> ihnen mehr Zeit gibt."]
    ]
  },
  regel: "Bei „anstatt … zu“ wird das Subjekt NICHT genannt — es ist automatisch dasselbe wie im Hauptsatz. Wenn du es trotzdem hinschreibst, ist der Satz falsch.",
  beispiele: [
    "✅ <b>Anstatt</b> die Schreibschrift <b>zu verwenden</b>, schreiben viele Erwachsene in Druckschrift.",
    "❌ <b>Anstatt</b> <u>Erwachsene</u> Schreibschrift zu verwenden, … <span class='en'>— dein Fehler im Unterricht: bei „anstatt … zu“ darf kein Subjekt stehen.</span>",
    "✅ Mit verschiedenen Subjekten: <b>Anstatt dass</b> <u>der Lehrer</u> erklärt, lesen <u>die Schüler</u> selbst."
  ],
  en: "The rule from workbook C3a, and the exact mistake you made in class: with anstatt … zu the subject is implicit — it is automatically the same as the main clause, so you must NOT name it. Only when the two subjects differ do you need anstatt dass."
},
{
  titel: "③ Angaben mit Präposition ↔ Nebensatz",
  thema: "kasus",
  de: "<p>Dieselbe Information, einmal <b>kurz</b> mit Präposition + Nomen, einmal <b>lang</b> als Nebensatz. " +
      "In telc-Sprachbausteinen wird ständig zwischen beiden Formen umgeschaltet.</p>",
  tabelle: {
    kopf: ["Bedeutung", "Präposition + Nomen", "Nebensatz"],
    zeilen: [
      ["Grund", "<b>wegen</b> + Genitiv", "<b>weil</b> / <b>da</b> …"],
      ["Grund (Gefühl, abstrakt)", "<b>aus</b> + Dativ (ohne Artikel!)", "<b>weil</b> …"],
      ["Gegengrund", "<b>trotz</b> + Genitiv", "<b>obwohl</b> …"],
      ["Alternative", "<b>statt / anstelle</b> + Genitiv", "<b>anstatt dass</b> / <b>anstatt … zu</b>"]
    ]
  },
  regel: "„aus“ + Dativ steht bei abstrakten Nomen OHNE Artikel: aus Zeitmangel, aus Langeweile, aus Angst, aus Freude. Das ist die Tipp-Box im Arbeitsbuch S. 140.",
  beispiele: [
    "<b>Wegen ihrer Krankheit</b> konnte Paula sich nicht vorbereiten. → <b>Weil sie krank war</b>, konnte sie sich nicht vorbereiten.",
    "<b>Trotz zahlreicher Ratgeber</b> lernen viele nicht effizient. → <b>Obwohl es zahlreiche Ratgeber gibt</b>, lernen viele nicht effizient.",
    "<b>Aus Zeitmangel</b> hat Nia nicht alle Aufgaben geschafft. → <b>Weil sie zu wenig Zeit hatte</b>, …",
    "Stellung: Die Angabe steht am <b>Satzanfang</b> („Trotz zahlreicher Ratgeber lernen viele …“) oder in der <b>Satzmitte</b> („Viele lernen trotz zahlreicher Ratgeber nicht effizient.“)."
  ],
  en: "The same information in short form (preposition + noun) or long form (subordinate clause). telc constantly switches between them. Note aus + dative for abstract nouns without an article: aus Zeitmangel, aus Angst."
},
{
  titel: "④ Genitivendungen — hier verlierst du Punkte",
  thema: "kasus",
  de: "<p>„wegen“ und „trotz“ verlangen den <b>Genitiv</b>. Im Unterricht hattest du „wegen ihr<u>en</u> Krankheit“ " +
      "geschrieben — richtig ist „wegen ihr<b>er</b> Krankheit“. Diese Tabelle ist Arbeitsbuch B6b.</p>",
  tabelle: {
    kopf: ["", "Maskulinum", "Neutrum", "Femininum", "Plural"],
    zeilen: [
      ["Endung", "-es / -en", "-es / -en", "<b>-er</b>", "<b>-er</b>"],
      ["Beispiel", "wegen d<b>es</b> Professor<b>s</b>", "wegen d<b>es</b> Studium<b>s</b>", "wegen d<b>er</b> Vorlesung", "wegen d<b>er</b> Noten"],
      ["mit Possessiv", "trotz sein<b>es</b> Job<b>s</b>", "trotz ihr<b>es</b> Seminar<b>s</b>", "trotz unser<b>er</b> Prüfung", "trotz ihr<b>er</b> Probleme"]
    ]
  },
  regel: "Faustregel: Maskulinum und Neutrum bekommen -es (und das Nomen zusätzlich ein -s). Femininum und Plural bekommen -er, das Nomen bleibt unverändert.",
  beispiele: [
    "Ohne Artikel bleibt nur die Adjektivendung: trotz <b>zahlreicher</b> Ratgeber, trotz <b>gegenteiliger</b> Behauptungen.",
    "Merke fürs Schreiben: „<b>aufgrund</b>“ (+ Genitiv) klingt im formellen Brief besser als „wegen“."
  ],
  en: "wegen and trotz take the genitive — this is where you lost points in class. Masculine and neuter take -es (and the noun adds -s); feminine and plural take -er."
},
{
  titel: "⑤ Hörstile: global und selektiv (telc Hörverstehen)",
  thema: "hoerverstehen",
  de: "<p>Parallel zu den Lesestilen von Tag 2 gibt es zwei <b>Hörstile</b>. Im Unterricht ging es um " +
      "ein Radiointerview aus der Reihe „Neurowissenschaft und Lernen“.</p>",
  tabelle: {
    kopf: ["Hörstil", "Was mache ich?", "Typische Aufgabe"],
    zeilen: [
      ["<b>Globales Hören</b>", "Nur auf allgemeine Informationen zum Thema achten, nicht auf Details.", "„Was ist das <b>Hauptthema</b>?“"],
      ["<b>Selektives Hören</b>", "Auf bestimmte Ausdrücke konzentrieren, die mit der Frage zu tun haben.", "Aussagen als richtig/falsch markieren."]
    ]
  },
  regel: "Beim globalen Hören ist das Hauptthema immer der ÜBERGEORDNETE Rahmen — nie ein einzelnes Detail aus dem Text. Ein Detail kann richtig sein und trotzdem nicht das Hauptthema.",
  beispiele: [
    "Wie beim selektiven Lesen gilt: du hörst meist <b>nicht dasselbe Wort</b>, sondern einen ähnlichen Begriff (Synonym).",
    "Strategie: <b>vor</b> dem Hören die Aussagen lesen und die Schlüsselwörter markieren — genau das ist Aufgabe 1c und 1e im Kursbuch.",
    "Zeit im Kurs laut deiner Notiz: <b>7 Minuten Hören</b> — in der Prüfung hast du ähnlich wenig Zeit. Deshalb vorher lesen."
  ],
  en: "Two listening styles matching the reading styles from Day 2. Global = the umbrella topic, never a single detail. Selective = hunt for specific info, and expect synonyms rather than the exact words. Always read the questions before listening."
},
{
  titel: "⑥ Wortbildung: alles mit „Schrift“",
  thema: "wortbildung",
  de: "<p>Wie „Lern-“ an Tag 2, aber diesmal mit <b>Schrift</b> — einmal als Grundwort, einmal mit Vorsilbe.</p>",
  tabelle: {
    kopf: ["Nomen + Schrift", "Bedeutung", "Schrift + Nomen / Vorsilbe + Schrift"],
    zeilen: [
      ["die <b>Druck</b>schrift", "Schrift sieht aus wie gedruckt", "das <b>Schriftzeichen</b> — graphisches Zeichen"],
      ["die <b>Hand</b>schrift", "wenn man mit der Hand schreibt", "der <b>Schriftexperte</b> — Fachmann für Schriften"],
      ["die <b>Zeit</b>schrift", "regelmäßig erscheinendes Druckerzeugnis", "die <b>Schriftprobe</b> — kurzer Beispieltext"],
      ["die <b>Noten</b>schrift", "System von Zeichen für Musiknoten", "der <b>Schrifttyp</b> — Schriftart"],
      ["die <b>Über</b>schrift", "steht über einem Text", "die <b>Unter</b>schrift — Name unter einem Schreiben"],
      ["die <b>Mit</b>schrift", "das Protokoll", "die <b>An</b>schrift — die Adresse"],
      ["die <b>Vor</b>schrift", "Anweisung, die für alle gilt", "die <b>Schreib</b>schrift — verbundene Handschrift"]
    ]
  },
  regel: "„die Schrift“ ist feminin — deshalb sind ALLE Wörter, die auf -schrift enden, feminin: die Handschrift, die Überschrift, die Vorschrift. Aber: Schrift+Nomen nimmt den Artikel des zweiten Wortes: der Schrifttyp, der Schriftexperte, das Schriftzeichen.",
  beispiele: [
    "Im Unterricht hattest du „<u>den</u> Schriftexperte“ und „<u>dere</u> Schrifttyp“ geschrieben — richtig: <b>der</b> Schriftexperte, <b>der</b> Schrifttyp.",
    "Nützlich für Formulare: „Bitte in <b>Druckschrift</b> ausfüllen.“ · „Ihre <b>Unterschrift</b>, bitte.“ · „Ihre <b>Anschrift</b>?“"
  ],
  en: "Compounds again, this time with Schrift. Everything ending in -schrift is feminine because die Schrift is. But Schrift + noun takes the gender of the second word: der Schrifttyp, das Schriftzeichen."
}
],

bloecke: [

/* ---------------- 1. Alternativen erkennen ---------------- */
{
titel: "Alternativen erkennen — welche Bauform?",
telc: "Sprachbausteine Teil 1",
hinweis: "Kursbuch C2a/2b (S. 14). Alle Sätze stammen aus dem Radiointerview.",
items: [
  { typ:"mc", thema:"konnektoren",
    frage:"„<b>Anstatt dass</b> man in Hefte schreibt, werden immer häufiger Tablets verwendet.“",
    optionen:["Nebensatzkonnektor","Verbindungsadverb","Präposition"], richtig:0,
    regel:"„anstatt dass“ leitet einen Nebensatz ein → Verb („schreibt“) am Ende.",
    en:"anstatt dass = subordinating, verb final." },
  { typ:"mc", thema:"konnektoren",
    frage:"„Die eine Gruppe schrieb mit dem Laptop, die andere Gruppe schrieb <b>stattdessen</b> mit der Hand.“",
    optionen:["Nebensatzkonnektor","Verbindungsadverb","Präposition"], richtig:1,
    regel:"„stattdessen“ ist ein Verbindungsadverb — es verbindet zwei Hauptsätze, das Verb bleibt an Position 2.",
    en:"stattdessen is an adverb, so verb stays in position 2." },
  { typ:"mc", thema:"konnektoren",
    frage:"„Es wäre ein großer Fehler, <b>anstelle der</b> Handschrift nur noch das Schreiben auf der Tastatur zu lehren.“",
    optionen:["Nebensatzkonnektor","Verbindungsadverb","Präposition"], richtig:2,
    regel:"„anstelle“ ist eine Präposition mit Genitiv: anstelle <b>der</b> Handschrift.",
    en:"anstelle = preposition + genitive." },
  { typ:"mc", thema:"konnektoren",
    frage:"Welcher Satzteil beschreibt, was <b>nicht</b> stattfindet? „Anstatt mit der Hand zu schreiben, lernen viele Kinder nur noch zu tippen.“",
    optionen:["„mit der Hand schreiben“","„nur noch zu tippen“"], richtig:0,
    regel:"Nach „anstatt“ steht immer das, was NICHT passiert. Die Alternative, die wirklich passiert, steht im Hauptsatz.",
    en:"anstatt marks what does not happen." },
  { typ:"mc", thema:"konnektoren",
    frage:"Und bei „stattdessen“? „Man benutzt keinen Notizblock. <b>Stattdessen</b> kommt der Laptop zum Einsatz.“",
    optionen:["„stattdessen“ zeigt, was nicht stattfindet","„stattdessen“ zeigt die Alternative, die stattfindet"], richtig:1,
    regel:"Genau umgekehrt zu „anstatt“: „stattdessen“ steht bei der Alternative, die WIRKLICH stattfindet. (Arbeitsbuch C3, Regel 2)",
    en:"stattdessen marks the alternative that DOES happen." },
  { typ:"zuordnen", thema:"konnektoren",
    frage:"Ordne jede Bauform ihrem Wort zu.",
    paare:[
      ["Nebensatz (Verb am Ende)","anstatt dass"],
      ["Infinitivkonstruktion","anstatt … zu"],
      ["Verbindungsadverb","stattdessen"],
      ["Präposition + Genitiv","statt / anstelle"]
    ],
    regel:"Kursbuch C2b — die Tabelle, die du im Unterricht ausgefüllt hast." , en:"<b>anstatt dass</b> takes a full clause with the verb last, <b>anstatt ... zu</b> an infinitive, <b>stattdessen</b> links two main clauses." }
]},

/* ---------------- 2. Die Subjektregel ---------------- */
{
titel: "„anstatt dass“ oder „anstatt … zu“? — die Subjektregel",
telc: "Sprachbausteine Teil 1",
hinweis: "Arbeitsbuch C3a–d (S. 143). Genau hier war dein Fehler im Unterricht — bitte langsam lesen.",
items: [
  { typ:"mc", thema:"infinitiv-zu",
    frage:"Wenn die Subjekte in Haupt- und Nebensatz <b>nicht identisch</b> sind, kann man …",
    optionen:["„anstatt (…) zu“ oder „anstatt dass“ verwenden","nur „anstatt dass“ verwenden"], richtig:1,
    regel:"Verschiedene Subjekte → nur „anstatt dass“, weil man das zweite Subjekt nennen muss.",
    en:"Different subjects → only anstatt dass." },
  { typ:"mc", thema:"infinitiv-zu",
    frage:"Wenn die Subjekte <b>identisch</b> sind, kann man …",
    optionen:["„anstatt (…) zu“ oder „anstatt dass“ verwenden","nur „anstatt dass“ verwenden"], richtig:0,
    regel:"Gleiches Subjekt → beides möglich. Die Infinitivform klingt eleganter und ist B2-typisch.",
    en:"Same subject → both work; the infinitive sounds more advanced." },
  { typ:"mc", thema:"infinitiv-zu",
    frage:"Welcher Satz ist korrekt? (Beide Sätze meinen dasselbe.)",
    optionen:[
      "Anstatt Erwachsene die Schreibschrift zu verwenden, schreiben viele in Druckschrift.",
      "Anstatt die Schreibschrift zu verwenden, schreiben viele Erwachsene in Druckschrift."
    ], richtig:1,
    regel:"Bei „anstatt … zu“ darf das Subjekt NICHT im anstatt-Teil stehen — es ist implizit dasselbe wie im Hauptsatz.",
    gegenbeispiel:"Das war genau dein Fehler bei Arbeitsbuch C3c Nr. 3.",
    en:"With anstatt … zu the subject must not appear in the anstatt-part." },
  { typ:"luecke", thema:"infinitiv-zu",
    frage:"Umformen (Arbeitsbuch C3c Nr. 2): „Viele Studenten machen keine handschriftlichen Notizen mehr, sondern benutzen nur noch den Laptop.“",
    satz:"Anstatt handschriftliche Notizen ___ ___, benutzen viele Studenten nur noch den Laptop.",
    loesung:["zu","machen"],
    regel:"„anstatt … zu“ + Infinitiv am Ende. Kein Subjekt im anstatt-Teil, weil beide Male „viele Studenten“ gemeint ist.",
    en:"anstatt + object + zu + infinitive." },
  { typ:"luecke", thema:"infinitiv-zu",
    frage:"Arbeitsbuch C3c Nr. 4: „Viele Menschen lesen keine Zeitungen und Bücher, sondern informieren sich nur noch im Internet.“",
    satz:"Anstatt Zeitungen und Bücher ___ ___, informieren sich viele Menschen nur noch im Internet.",
    loesung:["zu","lesen"],
    regel:"Objekt zuerst, dann „zu“ + Infinitiv." , en:"The object comes first, then <b>zu</b> plus the infinitive at the very end of the anstatt-phrase." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Arbeitsbuch C3b Nr. 1 — verschiedene Subjekte (Lucky / seine Freunde):",
    satz:"___ ___ Lucky seinen Lernplan alleine erstellt, helfen ihm seine Freunde.",
    loesung:["Anstatt","dass"],
    regel:"Zwei verschiedene Subjekte → nur „anstatt dass“ möglich. Verb „erstellt“ ans Ende." , en:"The two clauses have different subjects (Lucky vs his friends), so only <b>anstatt dass</b> works, verb last." },
  { typ:"mc", thema:"infinitiv-zu",
    frage:"Arbeitsbuch C3d: Welcher dieser Sätze lässt sich mit „anstatt … zu“ umformulieren?",
    optionen:[
      "Anstatt dass Lucky alles auf einmal lernt, teilt er den Stoff in Portionen auf.",
      "Anstatt dass Lucky seinen Lernplan alleine erstellt, helfen ihm seine Freunde."
    ], richtig:0,
    regel:"Nur bei gleichem Subjekt. Satz 1: Lucky/er → geht („Anstatt alles auf einmal zu lernen, teilt Lucky …“). Satz 2: Lucky/seine Freunde → geht nicht.",
    en:"Only when both clauses share a subject." },
  { typ:"ordnen", thema:"infinitiv-zu",
    frage:"Bau den Satz mit Infinitivkonstruktion (Arbeitsbuch C3c Nr. 1).",
    woerter:["Anstatt","mit","der","Hand","zu","schreiben,","lernen","immer","mehr","Kinder","nur","noch","zu","tippen."],
    loesung:"Anstatt mit der Hand zu schreiben, lernen immer mehr Kinder nur noch zu tippen.",
    regel:"Der anstatt-Teil steht vorne → der Hauptsatz beginnt mit dem Verb „lernen“." , en:"A fronted anstatt-clause fills position one, so the main clause has to start with its verb <b>lernen</b>." }
]},

/* ---------------- 3. Präposition ↔ Nebensatz ---------------- */
{
titel: "Angaben mit Präposition ↔ Nebensatz",
telc: "Sprachbausteine Teil 1",
hinweis: "Arbeitsbuch B6 und B7 (S. 140–141). Die Umformung in beide Richtungen — telc-Lieblingsaufgabe.",
items: [
  { typ:"mc", thema:"konnektoren",
    frage:"„<b>Wegen ihrer Krankheit</b> konnte Paula sich nicht gut vorbereiten.“ — Was drückt der Satz aus?",
    optionen:["Grund + logische Folge","Gegengrund + nicht erwartete Folge"], richtig:0,
    regel:"„wegen“ nennt einen Grund. Die Folge ist logisch: krank → keine Vorbereitung. (Arbeitsbuch B6a, Satz 1)" , en:"<b>wegen</b> gives a cause, and the result follows logically from it, no contrast involved." },
  { typ:"mc", thema:"konnektoren",
    frage:"„Paula hat die Prüfung <b>trotz ihrer Krankheit</b> bestanden.“",
    optionen:["Grund + logische Folge","Gegengrund + nicht erwartete Folge"], richtig:1,
    regel:"„trotz“ nennt einen Gegengrund — man erwartet: krank → durchgefallen. Aber sie hat bestanden." , en:"<b>trotz</b> gives a counter-reason: you expect failure, and the opposite happens." },
  { typ:"luecke", thema:"kasus",
    frage:"Genitivendungen (Arbeitsbuch B6b) — Maskulinum:",
    satz:"wegen d___ Professor___", loesung:["es","s"],
    regel:"Maskulinum Genitiv: der → des, und das Nomen bekommt zusätzlich ein -s: wegen des Professors." , en:"Masculine genitive is <b>des</b>, and the noun itself also takes an -s ending." },
  { typ:"luecke", thema:"kasus",
    frage:"Femininum:", satz:"wegen d___ Vorlesung", loesung:["er"],
    regel:"Femininum Genitiv: die → der. Das Nomen bleibt unverändert.",
    gegenbeispiel:"Dein Fehler im Unterricht: „wegen ihr<u>en</u> Krankheit“ → richtig „wegen ihr<b>er</b> Krankheit“." , en:"Feminine genitive is <b>der</b> for articles and possessives, and the noun stays unchanged." },
  { typ:"luecke", thema:"kasus",
    frage:"Possessivartikel im Genitiv, Plural:", satz:"trotz ihr___ Probleme", loesung:["er"],
    regel:"Plural Genitiv: -er, wie beim Femininum." , en:"Genitive plural endings match the feminine pattern: -er, so <b>ihrer</b> Probleme." },
  { typ:"luecke", thema:"kasus",
    frage:"Neutrum:", satz:"trotz ihr___ Seminar___", loesung:["es","s"],
    regel:"Neutrum wie Maskulinum: -es + Nomen mit -s." , en:"Neuter behaves like masculine here: -es on the article plus -s on the noun." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Arbeitsbuch B7 Nr. 1 — Präposition → Nebensatz: „<b>Aus Angst vor der Prüfung</b> beginne ich früh mit dem Lernen.“",
    satz:"Weil ___ Angst vor der Prüfung ___, beginne ich früh mit dem Lernen.",
    loesung:["ich","habe"],
    regel:"„aus Angst“ → „weil ich Angst habe“. Das Verb steht im Nebensatz am Ende." , en:"The noun phrase <b>aus Angst</b> unpacks into a weil-clause, and the verb <b>habe</b> lands at the end." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Arbeitsbuch B7 Nr. 2: „<b>Trotz zahlreicher Studien</b> hat man die optimale Lernmethode nicht gefunden.“",
    satz:"Obwohl es zahlreich___ Studien ___, hat man die optimale Lernmethode noch nicht gefunden.",
    loesung:["e","gibt"],
    regel:"„es gibt“ + Akkusativ Plural ohne Artikel → starke Endung -e: zahlreich<b>e</b> Studien.",
    gegenbeispiel:"Im Unterricht hattest du „zahlreichen“ geschrieben — das wäre Dativ." , en:"After <b>es gibt</b> you get accusative plural with no article, so the adjective takes the strong ending -e." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Arbeitsbuch B7 Nr. 3 — jetzt umgekehrt, Nebensatz → Präposition: „<b>Obwohl man es kritisiert</b>, finde ich das Hervorheben nützlich.“",
    satz:"Trotz ___ ___ finde ich das Hervorheben von Informationen sehr nützlich.",
    loesung:[["der"],["Kritik","kritik"]],
    regel:"<b>die</b> Kritik → Genitiv feminin: trotz <b>der</b> Kritik.",
    gegenbeispiel:"Dein Fehler: „den Kritik / Kritike“. „Kritik“ ist feminin und hat hier keinen Plural." , en:"Going the other way, the clause becomes a genitive noun: <b>die</b> Kritik gives <b>der</b> Kritik." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Arbeitsbuch B7 Nr. 4: „<b>Weil ich mich mit diesen Fragen beschäftige</b>, fällt mir der Einstieg leichter.“",
    satz:"Wegen ___ ___ mit diesen Fragen fällt mir der Einstieg in das Thema leichter.",
    loesung:[["der"],["Beschäftigung","beschäftigung"]],
    regel:"<b>die</b> Beschäftigung → wegen <b>der</b> Beschäftigung. Nomen von „sich beschäftigen“, immer feminin (Endung -ung ist IMMER feminin).",
    gegenbeispiel:"Merke die Regel: Alle Nomen auf <b>-ung</b> sind feminin. Das löst hunderte Artikelfragen auf einmal." , en:"Nouns ending in <b>-ung</b> are always feminine, so the genitive is <b>der</b> Beschäftigung." },
  { typ:"luecke", thema:"kasus",
    frage:"„aus“ + abstraktes Nomen (Tipp-Box, Arbeitsbuch S. 140):",
    satz:"___ Zeitmangel hat Nia nicht alle Aufgaben geschafft.", loesung:[["Aus","aus"]],
    regel:"„aus“ + Dativ, bei abstrakten Nomen OHNE Artikel: aus Zeitmangel, aus Langeweile, aus Angst, aus Freude." , en:"<b>aus</b> plus an abstract noun drops the article completely: aus Zeitmangel, aus Langeweile." },
  { typ:"ordnen", thema:"kasus",
    frage:"Arbeitsbuch B6d — die Angabe in die Satzmitte stellen.",
    woerter:["Viele","lernen","trotz","zahlreicher","Ratgeber","nicht","effizient."],
    loesung:"Viele lernen trotz zahlreicher Ratgeber nicht effizient.",
    regel:"Angaben mit Präposition stehen am Satzanfang ODER in der Satzmitte. In der Mitte: nach dem Verb, vor der Negation." , en:"A prepositional phrase can sit mid-sentence: right after the verb and before <b>nicht</b>." }
]},

/* ---------------- 4. Hörverstehen (Transkript-Simulation) ---------------- */
{
titel: "Hörverstehen — globales und selektives Hören",
telc: "Hörverstehen Teil 1 & 2",
hinweis: "Das Radiointerview „Neurowissenschaft und Lernen“ aus Kursbuch C1. Ich kann kein Audio abspielen — " +
         "deshalb arbeitest du hier mit den Aussagen. <b>Lies zuerst alle Aussagen, dann entscheide.</b>",
items: [
  { typ:"mc", thema:"hoerverstehen",
    frage:"<b>Globales Hören</b> (Kursbuch C1b): Was ist das Hauptthema von Teil 1 des Interviews?",
    optionen:[
      "Das Hauptthema ist, dass Kinder nicht mehr flüssig mit der Hand schreiben können.",
      "Das Hauptthema ist, welche Rolle das Schreiben mit der Hand im digitalen Zeitalter spielt."
    ], richtig:1,
    regel:"Beim globalen Hören suchst du den ÜBERGEORDNETEN Rahmen. Dass Kinder nicht mehr flüssig schreiben, ist ein <b>Detail</b> innerhalb dieses Themas — es kommt im Text vor, ist aber nicht das Thema selbst.",
    gegenbeispiel:"Prüfe es an Aussage 1c/1: „In Schule und Forschung beschäftigt man sich mit der Zukunft der Handschrift“ — das ist richtig, und es passt nur zu Antwort b.",
    en:"Global listening asks for the umbrella topic. A true detail from the text is still not the main topic — a classic exam trap." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"<b>Selektiv</b> (C1c/1): „In Schule und Forschung beschäftigt man sich mit der Zukunft der Handschrift.“",
    optionen:["richtig","falsch"], richtig:0,
    regel:"Richtig — das ist der Rahmen des ganzen Interviews." , en:"Selective listening: this statement just restates the interview's overall topic, so it is true." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1c/3): „In der Schule wird nur noch die Druckschrift unterrichtet und nicht die Schreibschrift.“",
    optionen:["richtig","falsch"], richtig:1,
    regel:"Falsch. Es wird <b>diskutiert</b>, ob man nur noch Druckschrift lehren sollte — beschlossen ist das nicht. Achte auf solche Übertreibungen („nur noch“, „immer“, „nie“): sie sind in telc fast immer falsch.",
    en:"Watch for absolutes like nur noch / immer / nie — in telc they are usually the false ones." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1e/1): „Tippen ist immer effektiver, als mit der Hand zu schreiben.“",
    optionen:["richtig","falsch"], richtig:1,
    regel:"Falsch — „immer“ ist die Übertreibung. Das Interview sagt das Gegenteil: Handschrift aktiviert mehr Gehirnbereiche." , en:"The absolute word <b>immer</b> is the trap; the interview claims handwriting activates more brain regions." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1e/3): „Beim Schreiben mit der Hand werden viele Bereiche des Gehirns aktiviert.“",
    optionen:["richtig","falsch"], richtig:0,
    regel:"Richtig — das ist das zentrale Argument der Neurowissenschaft im Interview." , en:"True, and it is the core neuroscience point the interview builds its argument on." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1e/4): „Mit dem Laptop kann man schneller mehr Informationen notieren, deshalb lernt man besser.“",
    optionen:["richtig","falsch"], richtig:1,
    regel:"Falsch — der erste Teil stimmt, aber die Schlussfolgerung nicht. <b>Typische telc-Falle:</b> halb richtig ist falsch. Lies immer den ganzen Satz.",
    en:"Classic telc trap: half true is false. Read the whole statement." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1e/5): „Wenn man Notizen mit der Hand macht, verarbeitet man gleichzeitig die Informationen.“",
    optionen:["richtig","falsch"], richtig:0,
    regel:"Richtig — Handschrift zwingt zum Zusammenfassen, dadurch verarbeitet man den Inhalt." , en:"True: writing by hand forces you to condense, and that processing happens as you write." },
  { typ:"mc", thema:"hoerverstehen",
    frage:"(C1e/6): „Man sollte Notizen nur handschriftlich machen.“",
    optionen:["richtig","falsch"], richtig:1,
    regel:"Falsch — wieder „nur“. Das Interview empfiehlt keine Extremposition." , en:"The word <b>nur</b> makes it too absolute; the interview never takes an all-or-nothing position." }
]},

/* ---------------- 5. Wortschatz & Wortbildung ---------------- */
{
titel: "Wortschatz rund ums Schreiben",
telc: "Leseverstehen Teil 2 · Sprachbausteine Teil 2",
hinweis: "Arbeitsbuch C1 und C2 (S. 142).",
items: [
  { typ:"zuordnen", thema:"wortschatz",
    frage:"Arbeitsbuch C1a — was bedeuten die Wörter?",
    paare:[
      ["die Ausführungen (Pl.)","Erklärungen"],
      ["das Gedächtnis","Erinnerungsfähigkeit"],
      ["das Gehirnareal","Bereich im Gehirn"],
      ["die Verknüpfung","Verbindung"]
    ],
    regel:"Fachwortschatz aus dem Interview. „die Ausführungen“ heißt hier NICHT „execution“, sondern „Erklärungen“." , en:"False friend alert: <b>die Ausführungen</b> means explanations here, not execution." },
  { typ:"zuordnen", thema:"wortschatz",
    frage:"Zwei weitere Begriffe:",
    paare:[
      ["die Ergonomie","Anpassung zwischen Mensch und Arbeitsumgebung"],
      ["die Neurowissenschaft","Beschäftigung mit Struktur und Funktionen von Nervensystemen"]
    ],
    regel:"Beide sind internationale Wörter — nutze dein Englisch: ergonomics, neuroscience." , en:"Both are international words, so map them straight onto ergonomics and neuroscience." },
  { typ:"cloze", thema:"wortschatz",
    frage:"Arbeitsbuch C1b — welches Adjektiv passt?",
    text:"Früher wurde vieles handschriftlich geschrieben, heute wird so viel mit Tablets und Laptops gearbeitet, " +
         "dass auch Erwachsene bemerken, dass sie nicht mehr so ___ mit der Hand schreiben können. " +
         "„Welche Zukunft hat die Handschrift überhaupt noch im digitalen Zeitalter?“ Das ist eine Frage, die ___ diskutiert wird. " +
         "Die einen sagen: „Tippen ist doch viel ___.“ Die anderen argumentieren, dass z. B. Kinder den Stoff ___ verarbeiten, " +
         "wenn sie Wörter mit der Hand schreiben, weil beim Schreiben mit der Hand viele Bereiche des Gehirns ___ sind.",
    luecken:[
      { optionen:["flüssig","aktiv","kontrovers"], richtig:0, regel:"„flüssig schreiben“ = ohne Stocken, in einem Zug." },
      { optionen:["intensiver","kontrovers","effektiver"], richtig:1, regel:"„kontrovers diskutieren“ = mit gegensätzlichen Meinungen. Feste Verbindung!" },
      { optionen:["aktiver","effektiver","flüssiger"], richtig:1, regel:"Komparativ im Vergleich: Tippen ist effektiver (als Schreiben)." },
      { optionen:["intensiver","kontroverser","flüssiger"], richtig:0, regel:"„den Stoff intensiver verarbeiten“ = gründlicher." },
      { optionen:["effektiv","aktiv","flüssig"], richtig:1, regel:"„Bereiche des Gehirns sind aktiv“ — Standardkollokation." }
    ],
    en:"Note the fixed collocations: kontrovers diskutieren, flüssig schreiben, Bereiche sind aktiv." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Arbeitsbuch C2a — Nomen + „Schrift“ mit Artikel:",
    satz:"___ Zeitschrift = regelmäßig erscheinendes Druckerzeugnis", loesung:[["die"]],
    regel:"Alle Wörter auf -schrift sind feminin, weil „die Schrift“ feminin ist." , en:"In a compound the last part sets the gender, and <b>die Schrift</b> is feminine." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Aber Achtung — „Schrift“ am ANFANG:",
    satz:"___ Schriftexperte = Fachmann für Schriften", loesung:[["der"]],
    regel:"Hier steht „Schrift“ vorne, also entscheidet das zweite Wort: <b>der</b> Experte → <b>der</b> Schriftexperte.",
    gegenbeispiel:"Dein Fehler im Unterricht: „den Schriftexperte“." , en:"Here Schrift is the first part, so the gender comes from <b>der</b> Experte instead." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Genauso hier:", satz:"___ Schrifttyp = die Schriftart", loesung:[["der"]],
    regel:"der Typ → der Schrifttyp. (Im Unterricht: „dere Schrifttyp“ — Artikel prüfen!)" , en:"Same rule: the head noun is <b>der</b> Typ, so the compound is der Schrifttyp." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Und neutrum:", satz:"___ Schriftzeichen = graphisches Zeichen zum Schreiben", loesung:[["das"]],
    regel:"das Zeichen → das Schriftzeichen." , en:"The head noun is <b>das</b> Zeichen, which makes the whole compound neuter." },
  { typ:"zuordnen", thema:"wortbildung",
    frage:"Arbeitsbuch C2b — Vorsilbe + „Schrift“:",
    paare:[
      ["die Überschrift","steht über einem Text und kennzeichnet ihn"],
      ["die Unterschrift","Name unter einem Schreiben"],
      ["die Mitschrift","das Protokoll"],
      ["die Anschrift","die Adresse"],
      ["die Vorschrift","eine Anweisung, die für alle gilt"]
    ],
    regel:"Die Vorsilbe verrät die Bedeutung: über/unter/mit/an/vor. Alle fünf sind feminin." , en:"The prefix carries the meaning, and all five stay feminine because Schrift ends the word." }
]},

/* ---------------- 6. Wiederholung Tag 2 ---------------- */
{
titel: "Wiederholung aus Tag 2",
telc: "Sprachbausteine Teil 1",
hinweis: "Deine Fehler von gestern kommen zurück — plus die Sätze aus Arbeitsbuch B5d/B5e, die du heute im Kurs gemacht hast.",
items: [
  { typ:"luecke", thema:"zweiteilige-konnektoren", wdh:true,
    frage:"Arbeitsbuch B5e Nr. 2 — mit „zwar …, aber“:",
    satz:"___ gibt es viele Lerntechniken, ___ oft wenden Lerner nur eine an.",
    loesung:["Zwar","aber"],
    regel:"„zwar“ auf Position 1 → Verb „gibt“ auf Position 2. Nach „aber“ ein normaler Hauptsatz.",
    gegenbeispiel:"Achte auf „der Lern<b>er</b>“ (die Person) — nicht „lernen“ (das Verb)." , en:"<b>zwar</b> occupies position one, so the verb <b>gibt</b> comes second; after aber the word order is normal." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", wdh:true,
    frage:"Arbeitsbuch B5e Nr. 3 — hier hattest du eine Präposition verwechselt:",
    satz:"Zwar hilft häufiges Wiederholen beim Lernen, aber viele lernen nur kurz ___ der Prüfung.",
    loesung:[["vor"]],
    regel:"„<b>vor</b> der Prüfung“ = zeitlich davor. Du hattest „von“ geschrieben — das heißt „from/of“.",
    en:"vor der Prüfung = before the exam; von = from/of." },
  { typ:"luecke", thema:"konnektoren", wdh:true,
    frage:"Grund mit Nebensatz (Tag 2):",
    satz:"Ich mache jeden Abend zehn Aufgaben, ___ ich die Prüfung bestehen ___.",
    loesung:[["weil","da"],["will","möchte","muss"]],
    regel:"weil/da → Verb ans Ende, beim Modalverb nach dem Infinitiv." , en:"<b>weil</b> and <b>da</b> push the verb to the end, and with a modal the modal follows the infinitive." },
  { typ:"luecke", thema:"konnektoren", wdh:true,
    frage:"Dieselbe Aussage mit Verbindungsadverb:",
    satz:"Ich möchte die Prüfung bestehen. ___ ___ ich jeden Abend zehn Aufgaben.",
    loesung:[["Deshalb","Deswegen","Daher"],["mache"]],
    regel:"Verbindungsadverb Position 1 → Verb Position 2 → dann das Subjekt. Das war dein häufigster Fehler im Chat." , en:"<b>Deshalb</b> sits in position one, so the verb comes second and the subject only after it." },
  { typ:"ordnen", thema:"nebensatz", wdh:true,
    frage:"Nebensatz vorne — was passiert mit dem Hauptsatz?",
    woerter:["Obwohl","der","Unterricht","schwer","war,","habe","ich","die","Übungen","richtig","gemacht."],
    loesung:"Obwohl der Unterricht schwer war, habe ich die Übungen richtig gemacht.",
    regel:"Genau dein Satz aus dem Chat, jetzt korrekt: „war“ ans Ende des obwohl-Satzes, „habe“ direkt nach dem Komma." , en:"The obwohl-clause fills position one, so <b>habe</b> follows immediately after the comma." }
]},

/* ---------------- 7. Schreiben ---------------- */
{
titel: "Schriftlicher Ausdruck — Forumsbeitrag ergänzen",
telc: "Schriftlicher Ausdruck",
hinweis: "Arbeitsbuch B8 (S. 141) — der Beitrag, den du im Kurs noch nicht fertig hattest.",
items: [
  { typ:"cloze", thema:"schreiben",
    frage:"Ergänze den Forumsbeitrag mit den passenden Wendungen.",
    text:"Ich behalte neuen Stoff am besten, wenn ich zuerst einen Lernplan mache. ___ den Vorschlag von Lucky auch sehr gut. " +
         "Ich ___ den Stoff auch in kleine Portionen auf und wiederhole ihn immer wieder. " +
         "Dann lerne ich mit einem Lernpartner und wir ___ gegenseitig ab. " +
         "Wenn man anderen Zusammenhänge ___, merkt man, ob man etwas richtig verstanden hat oder nicht. " +
         "Außerdem macht das Lernen zu zweit mehr Spaß und der Lernstoff ___ durch die aktive Beschäftigung besser im Gedächtnis.",
    luecken:[
      { optionen:["Daher finde ich","Trotzdem finde ich","Obwohl ich finde"], richtig:0,
        regel:"„Daher“ = deshalb (kausal). Verb sofort danach: „Daher finde ich“." },
      { optionen:["teile","teilt","geteilt"], richtig:0, regel:"ich teile … auf (trennbar: auf|teilen)." },
      { optionen:["fragen uns","fragt uns","gefragt"], richtig:0, regel:"wir fragen uns gegenseitig ab (ab|fragen, reflexiv-reziprok)." },
      { optionen:["erklärt","erklären","zu erklären"], richtig:0, regel:"„man“ ist Subjekt → 3. Person Singular: erklärt. Verb am Ende des wenn-Satzes." },
      { optionen:["bleibt","bleiben","geblieben"], richtig:0, regel:"der Lernstoff (Singular) bleibt … im Gedächtnis." }
    ],
    en:"Fill the forum post. Watch separable verbs (aufteilen, abfragen) and the verb-final rule in the wenn-clause." },
  { typ:"frei", thema:"schreiben",
    frage:"Schreib deinen eigenen Beitrag zum Thema <b>„Mit der Hand schreiben oder tippen?“</b> (ca. 80 Wörter). " +
      "<b>Pflicht:</b> je einmal „anstatt … zu“ ODER „anstatt dass“, „stattdessen“, und eine Angabe mit „trotz“ oder „wegen“.",
    mindestWorte:80,
    hinweise:["Anstatt … zu …","stattdessen","trotz + Genitiv","wegen + Genitiv","Meiner Erfahrung nach …","Aus diesem Grund …"],
    muster:"Ich arbeite jeden Tag am Laptop, <b>trotzdem</b> mache ich meine Notizen lieber mit der Hand. " +
      "<b>Anstatt</b> alles mitzutippen, schreibe ich nur Stichpunkte auf — <b>stattdessen</b> höre ich genauer zu. " +
      "<b>Wegen der aktiven Beschäftigung</b> mit dem Inhalt bleibt der Stoff bei mir besser im Gedächtnis. " +
      "<b>Trotz meiner schlechten Handschrift</b> ist das für mich effektiver. " +
      "Beim Deutschlernen schreibe ich neue Wörter deshalb immer handschriftlich auf, <b>anstatt</b> sie nur <b>zu lesen</b>.",
    kriterien:"telc bewertet Aufgabengerechtheit (beide Seiten genannt? eigene Meinung begründet?), kommunikative Gestaltung (Aufbau, Übergänge) " +
      "und formale Richtigkeit. Drei korrekt gebaute Konnektorensätze sichern hier Punkte." , en:"Use each connector once and watch the word order: anstatt ... zu drops the subject, stattdessen keeps normal main-clause order." }
]}
],

wortschatz: [
  { de:"anstatt … zu (+ Infinitiv)", en:"instead of doing", bsp:"Anstatt mit der Hand zu schreiben, tippen viele Kinder." },
  { de:"stattdessen", en:"instead (of that)", bsp:"Sie benutzt keinen Notizblock, stattdessen kommt der Laptop zum Einsatz." },
  { de:"anstelle + Genitiv", en:"in place of", bsp:"Anstelle der Handschrift lernen sie nur das Tippen." },
  { de:"die Handschrift, -en", en:"handwriting", bsp:"Welche Zukunft hat die Handschrift im digitalen Zeitalter?" },
  { de:"die Druckschrift / die Schreibschrift", en:"print / cursive script", bsp:"In der Schule wird zuerst die Druckschrift unterrichtet." },
  { de:"das Gedächtnis (nur Sg.)", en:"memory (faculty)", bsp:"Der Stoff bleibt besser im Gedächtnis." },
  { de:"das Gehirnareal, -e", en:"brain area", bsp:"Beim Schreiben mit der Hand werden viele Gehirnareale aktiviert." },
  { de:"die Verknüpfung, -en", en:"connection, link", bsp:"Das Gehirn bildet neue Verknüpfungen." },
  { de:"die Ausführungen (nur Pl.)", en:"remarks, explanations", bsp:"Die Ausführungen des Experten waren sehr klar." },
  { de:"die Ergonomie", en:"ergonomics", bsp:"Bei der Ergonomie geht es um Mensch und Arbeitsumgebung." },
  { de:"kontrovers diskutieren", en:"to debate controversially", bsp:"Diese Frage wird kontrovers diskutiert." },
  { de:"flüssig (schreiben/sprechen)", en:"fluent(ly), without hesitation", bsp:"Viele Kinder können nicht mehr flüssig schreiben." },
  { de:"verarbeiten", en:"to process", bsp:"Kinder verarbeiten den Stoff intensiver, wenn sie ihn aufschreiben." },
  { de:"die Abschaffung, -en", en:"abolition", bsp:"Die Abschaffung der Handschrift hätte negative Auswirkungen." },
  { de:"die Auswirkung, -en (auf + Akk.)", en:"effect, impact", bsp:"Das hätte negative Auswirkungen auf das Lernen." },
  { de:"der Zeitmangel (aus Zeitmangel)", en:"lack of time (due to lack of time)", bsp:"Aus Zeitmangel hat Nia nicht alle Aufgaben geschafft." },
  { de:"benötigen", en:"to need, require", bsp:"Manche argumentieren, dass man die Schreibschrift nicht mehr benötigt." },
  { de:"zum Einsatz kommen", en:"to be used, come into play", bsp:"In der Vorlesung kommt der Laptop zum Einsatz." }
],

zusammenfassung:
  "<ul class='bsp'>" +
  "<li><b>Alternative ausdrücken</b> in vier Bauformen: <b>anstatt dass</b> (Nebensatz) · <b>anstatt … zu</b> (Infinitiv) · " +
  "<b>stattdessen</b> (Verb Position 2) · <b>statt / anstelle</b> + Genitiv.</li>" +
  "<li><b>Richtung merken:</b> „anstatt / statt / anstelle“ = was NICHT passiert · „stattdessen“ = die Alternative, die passiert.</li>" +
  "<li><b>Subjektregel:</b> gleiches Subjekt → „anstatt … zu“ (ohne Subjekt nennen!) · verschiedene Subjekte → nur „anstatt dass“.</li>" +
  "<li><b>Angaben mit Präposition:</b> wegen/trotz + Genitiv, aus + Dativ (abstrakt, ohne Artikel). Umformbar in weil / obwohl.</li>" +
  "<li><b>Genitiv:</b> Maskulinum/Neutrum → -es (+ Nomen mit -s) · Femininum/Plural → -er.</li>" +
  "<li><b>Alle Nomen auf -ung sind feminin</b> (die Beschäftigung, die Abschaffung, die Auswirkung).</li>" +
  "<li><b>Hören:</b> global = Hauptthema (nie ein Detail!) · selektiv = gezielte Info, meist als Synonym. Übertreibungen („nur“, „immer“) sind fast immer falsch.</li>" +
  "<li><b>-schrift</b> ist immer feminin · <b>Schrift-</b> + Nomen nimmt den Artikel des zweiten Wortes.</li>" +
  "</ul>",

dialog:
  "<p>Antworte mir im Chat auf Deutsch — <b>sprich jeden Satz zuerst laut</b>:</p>" +
  "<p><b>1.</b> Was machst du beim Deutschlernen, <b>anstatt</b> etwas anderes zu tun? Ein Satz mit „anstatt … zu“.<br>" +
  "<b>2.</b> Nenne etwas, das du <b>trotz</b> einer Schwierigkeit schaffst. Ein Satz mit „trotz“ + Genitiv.<br>" +
  "<b>3.</b> Schreibst du lieber mit der Hand oder tippst du? Begründe in zwei Sätzen und benutze einmal „stattdessen“.</p>"
};

/* Täglicher Fundament-Block (10 Aufgaben aus der Wiederholungsliste der Lehrerin) */
if (KURS.fundamentBlock) KURS.seiten["tag-03"].bloecke.push(KURS.fundamentBlock(3, "tag-03"));
/* Berufsdeutsch — 5 Aufgaben für das eigentliche Ziel: der Job */
if (KURS.berufBlock)     KURS.seiten["tag-03"].bloecke.push(KURS.berufBlock(3));
