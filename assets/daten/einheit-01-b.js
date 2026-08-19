/* ============================================================
   TAG 2, 28.07.2026
   Quelle: Kursbuch S. 10–12 (B1, B2a/b, B3a/b/c) +
           Arbeitsbuch S. 137–139 (B1a/b/c, B2, B3a/b, B4a/b, B5a/b/c)
   Kernthema: Konnektoren, Grund & Gegengrund + Wortstellung
   ============================================================ */
KURS.seiten["e1-b"] = {
id: "e1-b",
modulTitel: "Modul B · Auf dem Weg zum Wissen", nr: 2, datum: "2026-07-28",
titel: "Auf dem Weg zum Wissen",
untertitel: "Konnektoren: Grund und Gegengrund · Wortstellung im Haupt- und Nebensatz · Lesestile · Wortbildung mit „Lern-“",
themen: ["konnektoren", "nebensatz", "leseverstehen", "wortbildung"],

videos: [
  { titel: "Die Konnektoren „obwohl“ und „trotzdem“ (B1–B2)", kanal: "Benjamin – Der Deutschlehrer", sprache: "Deutsch", warum: "Genau das Kernthema von Tag 2: obwohl schickt das Verb ans Ende, trotzdem erzwingt Inversion.", url: "https://www.youtube.com/watch?v=DOsTLqnbivo" },
  { titel: "Satzbau und Konnektoren: weil, obwohl, wegen, trotz, deshalb, trotzdem", kanal: "Learn German Today", sprache: "Deutsch", warum: "Stellt alle drei Bauformen nebeneinander: Nebensatz, Adverb und Präposition. Die Brücke zu Tag 3.", url: "https://www.youtube.com/watch?v=Pskb8dIVTpA" },
  { titel: "deshalb, deswegen, darum, daher, sodass, so … dass", kanal: "Learn German Today", sprache: "Deutsch", warum: "Die vier fast gleichen Adverbien sauber getrennt: damit du beim Sprechen variieren kannst statt immer „weil“.", url: "https://www.youtube.com/watch?v=3lIFhnnlIeg" }
],

konzepte: [
{
  titel: "① Zwei Familien von Konnektoren: der ganze Trick",
  thema: "konnektoren",
  einfach: {
    kern: "Zwei Wörter können dasselbe bedeuten, und trotzdem steht das Verb an einer ganz anderen Stelle.",
    paare: [
      { satz: "Ich bleibe zu Hause, <b>weil</b> es <b>regnet</b>.",
        notiz: "Nach „weil“ rutscht das Verb ganz ans Ende. Erst kommt alles andere, das Verb macht die Tür zu." },
      { satz: "Es regnet. <b>Deshalb bleibe</b> ich zu Hause.",
        notiz: "Nach „deshalb“ kommt das Verb sofort. Es klebt am Wort davor." }
    ],
    merk: "Beide Sätze heißen dasselbe. Frag dich immer nur: <b>Wo steht das Verb?</b> Ans Ende bei <i>weil, da, obwohl</i>. Sofort dahinter bei <i>deshalb, darum, trotzdem</i>."
  },
  de: "<p>Heute geht es um <b>Konnektoren</b>. Ein Konnektor verbindet zwei Aussagen. " +
      "Für die Prüfung ist nur <b>eine</b> Frage wichtig: <b>Wo steht das Verb?</b></p>" +
      "<p>Es gibt zwei Familien. Sie haben fast die gleiche Bedeutung, aber eine <b>ganz andere Wortstellung</b>.</p>",
  tabelle: {
    kopf: ["Familie", "Wörter", "Wortstellung", "Beispiel"],
    zeilen: [
      ["<b>Nebensatz&shy;konnektor</b><br><span class='en'>subjunction</span>",
       "weil, da, obwohl",
       "Verb ganz <b>ans Ende</b>",
       "Ich lerne besser, <b>weil</b> ich Pausen <b>mache</b>."],
      ["<b>Verbindungs&shy;adverb</b><br><span class='en'>conjunctional adverb</span>",
       "deshalb, deswegen, daher,<br>trotzdem, dennoch",
       "Verb auf <b>Position 2</b><br>(direkt nach dem Konnektor)",
       "Ich mache Pausen, <b>deshalb lerne</b> ich besser."]
    ]
  },
  regel: "Nebensatzkonnektor → Verb ans Ende. Verbindungsadverb → Verb sofort danach (Position 2). Das ist der häufigste Fehler in Sprachbausteine Teil 1.",
  beispiele: [
    "<b>Weil</b> Lucky nach jeder Lernportion eine Pause <b>macht</b>, fühlt er sich nicht so gestresst. <span class='en'>(Verb am Ende)</span>",
    "Lucky macht nach jeder Lernportion eine Pause. <b>Deshalb fühlt</b> er sich nicht so gestresst. <span class='en'>(Verb Position 2)</span>",
    "Er fühlt sich <b>deshalb</b> nicht so gestresst. <span class='en'>Verbindungsadverben dürfen auch in der Satzmitte stehen.</span>"
  ],
  en: "German has two ways to say <b>because</b> and <b>although</b>. Subjunctions (weil, da, obwohl) push the verb to the very end of their clause. Conjunctional adverbs (deshalb, trotzdem…) are adverbs, so they take position 1 and the verb comes right after them, verb second. Same meaning, completely different word order. This is the single most tested point in telc Sprachbausteine."
},
{
  titel: "② Grund nennen: kausal",
  thema: "nebensatz",
  einfach: {
    kern: "Du willst sagen, <b>warum</b> etwas so ist. Dafür gibt es drei Bauarten. Such dir eine aus.",
    paare: [
      { satz: "Ich lerne mit Karten, <b>weil</b> das besser <b>funktioniert</b>.",
        notiz: "„weil“: Verb ganz nach hinten. Das ist die häufigste Art." },
      { satz: "Karten funktionieren besser. <b>Deshalb lerne</b> ich damit.",
        notiz: "„deshalb“: Verb sofort danach. Erst der Grund, dann die Folge." },
      { satz: "Ich lerne mit Karten, <b>denn</b> das <b>funktioniert</b> besser.",
        notiz: "„denn“ ändert gar nichts. Der Satz dahinter bleibt ein normaler Satz." }
    ],
    merk: "„denn“ ist die bequemste Variante: du musst nichts umstellen. Aber im Test wird meistens „weil“ und „deshalb“ abgefragt."
  },
  de: "<p>Ein <b>Grund</b> erklärt eine <b>logische Folge</b>. Warum? → Deshalb!</p>",
  tabelle: {
    kopf: ["Konnektor", "Typ", "Satzbau", "Beispiel"],
    zeilen: [
      ["<b>weil</b>", "Nebensatz", "Verb am Ende", "Bär testet sich selbst, <b>weil</b> Lerntests effektiv <b>sind</b>."],
      ["<b>da</b>", "Nebensatz", "Verb am Ende", "<b>Da</b> man beim Erklären über den Stoff <b>nachdenkt</b>, ist ein Lernpartner gut."],
      ["<b>deshalb / deswegen / daher</b>", "Verbindungsadverb", "Verb Position 2", "Lerntests sind effektiv, <b>deswegen testet</b> Bär sich selbst."],
      ["<b>denn</b>", "Hauptsatz + Hauptsatz", "normaler Satzbau!", "Ich mache Pausen, <b>denn</b> ich <b>bin</b> müde."]
    ]
  },
  regel: "„da“ benutzt man, wenn der Grund schon bekannt ist. Es steht meistens am Satzanfang: „Da Sie ja schon wissen …“. „weil“ nennt einen neuen Grund und steht oft hinten.",
  beispiele: [
    "<b>deshalb = deswegen = daher</b>, die drei sind Synonyme. <span class='en'>All three mean “therefore”.</span>",
    "Der Grund steht <b>immer vor</b> dem Satz mit dem Verbindungsadverb.",
    "Achtung bei <b>denn</b>: kein Nebensatz! Das Verb bleibt an Position 2: „…, denn <b>ich</b> <b>bin</b> müde.“"
  ],
  en: "Causal connectors give a reason and a logical result. weil / da = subordinating (verb final). deshalb / deswegen / daher = adverbs (verb second). denn is different again: it joins two main clauses and changes nothing about word order."
},
{
  titel: "③ Gegengrund nennen: konzessiv",
  thema: "konnektoren",
  einfach: {
    kern: "Du erwartest ein Ergebnis, und dann kommt genau das Gegenteil.",
    paare: [
      { satz: "Ich habe zwei Stunden gelernt. <b>Trotzdem habe</b> ich am nächsten Tag alles vergessen.",
        notiz: "Normal wäre: viel lernen, viel behalten. Hier passiert das Gegenteil. Nach „trotzdem“ kommt sofort das Verb." },
      { satz: "<b>Obwohl</b> ich zwei Stunden <b>gelernt habe</b>, habe ich am nächsten Tag alles vergessen.",
        notiz: "Gleiche Aussage, anderes Wort. Nach „obwohl“ rutscht das Verb ganz ans Ende." },
      { satz: "<b>Zwar</b> ist mein Deutsch viel besser geworden, <b>aber</b> im Meeting sage ich immer noch nichts.",
        notiz: "„zwar … aber“ kommt immer als Paar. Beide Teile sind ganz normale Sätze." }
    ],
    merk: "Frag dich: passt die Folge zum Grund? Ja, dann <i>weil / deshalb</i>. Nein, dann <i>obwohl / trotzdem</i>."
  },
  de: "<p>Ein <b>Gegengrund</b> nennt eine Ausgangssituation und eine <b>nicht erwartete</b> Folge. " +
      "Man erwartet A, aber es passiert B.</p>",
  tabelle: {
    kopf: ["Konnektor", "Typ", "Beispiel"],
    zeilen: [
      ["<b>obwohl</b>", "Nebensatz (Verb am Ende)", "<b>Obwohl</b> Clara den Wortschatz regelmäßig <b>wiederholt</b>, merkt sie sich viele Wörter nicht."],
      ["<b>trotzdem / dennoch</b>", "Verbindungsadverb (Verb Position 2)", "Clara wiederholt regelmäßig, <b>trotzdem merkt</b> sie sich viele Wörter nicht."],
      ["<b>zwar … aber</b>", "zweiteilig, beide Hauptsätze", "<b>Zwar</b> helfen Übungen, <b>aber</b> man sollte die Sprache auch frei anwenden."]
    ]
  },
  regel: "Vergleiche: „Weil Clara wiederholt, merkt sie sich Wörter gut.“ (logische Folge) ↔ „Obwohl Clara wiederholt, merkt sie sich Wörter nicht.“ (nicht erwartete Folge).",
  beispiele: [
    "<b>trotzdem = dennoch</b>, Synonyme. <span class='en'>Both mean “nevertheless”.</span>",
    "„<b>zwar</b>“ betont den Gegengrund, „<b>aber</b>“ die nicht erwartete Folge.",
    "Enzo spricht schon sehr gut, <b>trotzdem hat</b> er Angst zu sprechen."
  ],
  en: "Concessive connectors set up an expectation and then break it. obwohl = although (verb final). trotzdem / dennoch = nevertheless (verb second). zwar … aber is a two-part frame across two main clauses."
},
{
  titel: "④ Wortstellung: die Tabelle zum Auswendiglernen",
  thema: "leseverstehen",
  einfach: {
    kern: "Wenn der Nebensatz vorne steht, kommt danach sofort das Verb.",
    paare: [
      { satz: "Ich nehme heute den Bus, <b>weil</b> mein Fahrrad kaputt <b>ist</b>.",
        notiz: "Die normale Reihenfolge. Erst dein Satz, dann der Grund." },
      { satz: "<b>Weil</b> mein Fahrrad kaputt <b>ist</b>, <b>nehme</b> ich heute den Bus.",
        notiz: "Jetzt steht der Grund vorne. Direkt nach dem Komma kommt „nehme“, und erst danach „ich“." }
    ],
    merk: "Achte auf das Muster Verb, Komma, Verb. „Weil mein Fahrrad kaputt ist, ich nehme den Bus“ ist der Klassiker unter den Fehlern."
  },
  de: "<p>So sortiert das Kursbuch (Aufgabe 3b) die Sätze:</p>",
  tabelle: {
    kopf: ["Muster", "Teil 1", "Teil 2"],
    zeilen: [
      ["Hauptsatz + Verbindungsadverb",
       "Diese Methoden sind sehr beliebt,",
       "<b>trotzdem schnitten</b> sie am schlechtesten ab."],
      ["Hauptsatz + Nebensatz",
       "Die Methode ist sinnvoll,",
       "<b>weil</b> man dabei über den Stoff <b>nachdenkt</b>."],
      ["Nebensatz zuerst → dann Hauptsatz",
       "<b>Weil</b> er Lerntechniken überprüfen <b>wollte</b>,",
       "<b>hat</b> der Psychologe Praxistests angeschaut."]
    ]
  },
  regel: "Steht der Nebensatz vorne, rutscht das Verb des Hauptsatzes direkt hinter das Komma: „Weil …, hat der Psychologe …“ Nebensatz = Position 1, Verb = Position 2.",
  en: "If the subordinate clause comes first, it occupies position 1 of the whole sentence, so the main clause verb must come immediately after the comma. Verb-comma-verb is a good visual check."
},
{
  titel: "⑤ Lesestile: global und selektiv (telc Leseverstehen)",
  thema: "adjektivendungen",
  einfach: {
    kern: "Es gibt zwei Arten zu lesen. Du entscheidest vorher, welche du brauchst.",
    paare: [
      { satz: "Du bekommst eine Wohnungsanzeige und schaust <b>20 Sekunden</b> drauf: Wohnung, Aachen, zu teuer.",
        notiz: "Das ist <b>globales</b> Lesen. Du willst nur wissen, worum es überhaupt geht." },
      { satz: "Jetzt willst du nur eins wissen: <b>Wie hoch ist die Miete?</b> Den Rest überspringst du.",
        notiz: "Das ist <b>selektives</b> Lesen. Du hast eine Frage und suchst genau diese eine Antwort." },
      { satz: "Frage: „Die Person fängt spät mit dem Lernen an.“ Im Text steht: „Ich <b>schiebe</b> das Lernen gern <b>auf</b>.“",
        notiz: "Dasselbe Wort steht fast nie im Text. Du suchst ein Wort mit der gleichen Bedeutung."
      }
    ],
    merk: "In der Prüfung immer zuerst die Fragen lesen, dann den Text. Und such nach Synonymen, nicht nach demselben Wort."
  },
  de: "<p>Zwei Techniken aus dem Kursbuch. In der telc-Prüfung entscheidet die Technik über die Zeit.</p>",
  tabelle: {
    kopf: ["Lesestil", "Was mache ich?", "Wofür?"],
    zeilen: [
      ["<b>Globales Lesen</b>", "Den Text schnell ganz überfliegen, nicht auf jedes Wort achten. Überschriften, Fettdruck, Unterüberschriften beachten.", "Einen kurzen Eindruck vom Inhalt bekommen, z. B. eine Überschrift wählen."],
      ["<b>Selektives Lesen</b>", "Nur bestimmte Informationen suchen. Ausdrücke, die ähnlich sind (Synonyme!), nicht wörtlich gleich.", "Aussagen einem Text zuordnen, telc Leseverstehen Teil 3."]
    ]
  },
  regel: "Beim selektiven Lesen findest du fast nie das gleiche Wort. Du findest ein Synonym. Deshalb: erst die Aufgabe lesen, dann den Text.",
  beispiele: [
    "Aufgabe: „Die Person braucht oft lange, bis sie anfängt zu lernen.“ → Text: „<b>schiebe ich das Lernen gern auf</b>“ (Lucky)",
    "Aufgabe: „Lernen durch Lehren“ → Text: „am besten mit einem Lernpartner“",
    "<b>Nie das ganze Wörterbuch benutzen</b>, Wörter aus dem Kontext erschließen."
  ],
  en: "Global reading = skim for the gist (choose a headline). Selective reading = hunt for one specific piece of information. In telc you will almost never find the exact word from the question in the text, you find a synonym. Read the questions first."
},
{
  titel: "⑥ Wortbildung: Komposita mit „Lern-“ und Adjektive auf -iv / -al",
  thema: "perfekt-praeteritum",
  einfach: {
    kern: "Zwei Nomen werden ein Wort. Den Artikel gibt immer das letzte Wort.",
    paare: [
      { satz: "die Gruppe → <b>die</b> Lerngruppe. Am Dienstag treffe ich meine Lerngruppe im Café.",
        notiz: "„Gruppe“ steht hinten, also bleibt „die“. „Lern“ sagt nur, was für eine Gruppe es ist." },
      { satz: "der Plan → <b>der</b> Lernplan. Mein Lernplan hängt am Kühlschrank.",
        notiz: "Hinten steht „Plan“, also „der“. Das vordere Wort ändert am Artikel nie etwas." }
    ],
    merk: "Nicht alles lässt sich kombinieren: „Lernprüfung“, „Lernstudent“ und „Lernsinnesorgan“ gibt es nicht. Und Adjektive aus Fremdwörtern enden meist auf -iv oder -al: aktiv, effektiv, optimal."
  },
  de: "<p><b>Nomen + Nomen = ein neues Nomen.</b> Der Artikel kommt immer vom <b>letzten</b> Wort.</p>",
  tabelle: {
    kopf: ["Kompositum", "Artikel + Plural", "Bedeutung"],
    zeilen: [
      ["Lern + Tipp", "<b>der</b> Lerntipp, -s", "learning tip"],
      ["Lern + Gruppe", "<b>die</b> Lerngruppe, -n", "study group"],
      ["Lern + Partner", "<b>der</b> Lernpartner, – / die Lernpartnerin, -nen", "study partner"],
      ["Lern + Prozess", "<b>der</b> Lernprozess, -e", "learning process"],
      ["Lern + Stil", "<b>der</b> Lernstil, -e", "learning style"],
      ["Lern + Technik", "<b>die</b> Lerntechnik, -en", "learning technique"],
      ["Lern + Typ", "<b>der</b> Lerntyp, -en", "learner type"],
      ["Lern + Methode", "<b>die</b> Lernmethode, -n", "learning method"],
      ["Lern + Plan", "<b>der</b> Lernplan, ¨-e", "study plan"],
      ["Lern + Erfahrung", "<b>die</b> Lernerfahrung, -en", "learning experience"]
    ]
  },
  regel: "Aus dem Arbeitsbuch (B1b) passen NICHT: Prüfung, Student, Sinnesorgan. „Lernprüfung“, „Lernstudent“, „Lernsinnesorgan“ gibt es nicht.",
  beispiele: [
    "Adjektive von Fremdwörtern enden oft auf <b>-iv</b> oder <b>-al</b>: akt<b>iv</b>, effekt<b>iv</b>, selekt<b>iv</b>, audit<b>iv</b> · optim<b>al</b>, glob<b>al</b>",
    "Achtung Endung: „Das ist eine sehr <b>effektive</b> Methode.“ (schwache Adjektivendung nach „eine“)"
  ],
  en: "German compounds take their gender from the LAST noun. Adjectives borrowed from Latin/Greek usually end in -iv or -al in German (aktiv, effektiv, optimal, global). Three nouns in the workbook list do not combine with Lern-: Prüfung, Student, Sinnesorgan."
}
],

bloecke: [

/* ---------------- 1. Konnektor erkennen ---------------- */
{
titel: "Konnektoren erkennen: Grund oder Gegengrund?",
telc: "Sprachbausteine Teil 1",
hinweis: "Aus Kursbuch 3a und 3c. Kausal = Grund und logische Folge. Konzessiv = Gegengrund und nicht erwartete Folge.",
items: [
  { typ:"mc", thema:"konnektoren",
    frage:"<b>Weil</b> er verschiedene Lerntechniken überprüfen wollte, hat der Psychologe zahlreiche Praxistests angeschaut.",
    optionen:["Grund (kausal)","Gegengrund (konzessiv)"], richtig:0,
    regel:"„weil“ nennt immer einen Grund. Die Folge ist logisch: Er wollte prüfen → also hat er geschaut.",
    en:"weil is always causal." },
  { typ:"mc", thema:"konnektoren",
    frage:"Diese Methoden sind sehr beliebt, <b>trotzdem</b> schnitten sie am schlechtesten ab.",
    optionen:["Grund (kausal)","Gegengrund (konzessiv)"], richtig:1,
    regel:"„trotzdem“ ist konzessiv. Man erwartet: beliebt → gut. Aber die Folge ist anders.",
    en:"trotzdem = nevertheless; the result contradicts the expectation." },
  { typ:"mc", thema:"konnektoren",
    frage:"<b>Obwohl</b> „Hervorheben von Informationen“ schlecht abgeschnitten hat, finde ich die Methode sehr nützlich.",
    optionen:["Grund (kausal)","Gegengrund (konzessiv)"], richtig:1,
    regel:"„obwohl“ ist der klassische konzessive Nebensatzkonnektor.",
    en:"obwohl = although." },
  { typ:"mc", thema:"konnektoren",
    frage:"Es gibt ja immer so viel Stoff! <b>Deshalb</b> mache ich zuerst einen Lernplan.",
    optionen:["Grund (kausal)","Gegengrund (konzessiv)"], richtig:0,
    regel:"„deshalb“ ist kausal, es zeigt die logische Folge aus dem Grund davor.",
    en:"deshalb = therefore, causal." },
  { typ:"mc", thema:"konnektoren",
    frage:"Welches Wort ist KEIN Synonym von „deshalb“?",
    optionen:["deswegen","daher","dennoch"], richtig:2,
    regel:"deshalb = deswegen = daher (kausal). „dennoch“ ist konzessiv und gehört zu „trotzdem“.",
    gegenbeispiel:"Er lernt viel, <b>dennoch</b> besteht er die Prüfung nicht. (Gegengrund!)",
    en:"dennoch belongs to the concessive family (= trotzdem)." },
  { typ:"mc", thema:"konnektoren",
    frage:"Wann benutzt man „<b>da</b>“ statt „weil“?",
    optionen:["Wenn der Grund schon bekannt ist, meist am Satzanfang.","Wenn der Grund neu und wichtig ist.","Wenn man einen Gegengrund nennt."],
    richtig:0,
    regel:"Tipp aus dem Arbeitsbuch: „da“ verwendet man, wenn der Grund schon bekannt ist. Es steht meist am Satzanfang: „Da Sie ja schon wissen …“",
    en:"da introduces a reason the listener already knows; it usually starts the sentence." }
]},

/* ---------------- 2. Wortstellung: Verb an die richtige Stelle ---------------- */
{
titel: "Wortstellung: wohin mit dem Verb?",
telc: "Sprachbausteine Teil 1",
hinweis: "Schreib nur das fehlende Wort in die Lücke. Achte genau darauf, ob ein Nebensatz oder ein Hauptsatz folgt.",
items: [
  { typ:"luecke", thema:"nebensatz",
    frage:"Verb ans Ende!",
    satz:"Die Methode ist sinnvoll, weil man dabei über den Stoff ___.",
    loesung:["nachdenkt"],
    regel:"Nach „weil“ steht das konjugierte Verb ganz am Ende. Trennbare Verben werden dabei wieder zusammengeschrieben: nach|denken → nachdenkt.",
    en:"After weil the conjugated verb goes last; separable verbs re-join." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Nebensatz zuerst, was passiert mit dem Hauptsatz?",
    satz:"Weil er verschiedene Lerntechniken überprüfen wollte, ___ der Psychologe zahlreiche Praxistests angeschaut.",
    loesung:["hat"],
    regel:"Der Nebensatz ist Position 1. Also muss das Verb des Hauptsatzes direkt nach dem Komma stehen: Verb – Komma – Verb.",
    gegenbeispiel:"Falsch: „Weil er … wollte, der Psychologe hat …“",
    en:"A fronted subordinate clause fills slot 1, so the main verb comes immediately after the comma." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Verbindungsadverb, Verb auf Position 2.",
    satz:"Es gibt ja immer so viel Stoff! Deshalb ___ ich zuerst einen Lernplan.",
    loesung:["mache"],
    regel:"„Deshalb“ steht auf Position 1, also kommt das Verb sofort danach auf Position 2, und erst dann das Subjekt „ich“.",
    en:"deshalb occupies slot 1, so the verb is slot 2 and the subject follows." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Ergänze das passende Verbindungsadverb (kausal).",
    satz:"Lucky macht nach jeder Lernportion eine Pause. ___ fühlt er sich nicht so gestresst.",
    loesung:[["deshalb","deswegen","daher"]],
    regel:"Alle drei sind richtig: deshalb / deswegen / daher. Der Grund steht vorher, die Folge danach.",
    en:"deshalb, deswegen and daher are interchangeable here." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Aus zwei Sätzen einen machen (Arbeitsbuch B3a, Satz 2, mit „weil“).",
    satz:"Kira räumt immer vor dem Lernen auf, weil Ordnung hilfreich ___.",
    loesung:["ist"],
    regel:"„sein“ ist hier das konjugierte Verb und wandert im Nebensatz ans Ende.",
    en:"The copula ist moves to the end of the weil-clause." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Arbeitsbuch B3a, Satz 4, mit „da“.",
    satz:"Da es keine optimale Lernmethode ___, ist ein Methodenmix am allerbesten.",
    loesung:["gibt"],
    regel:"„es gibt“ → im Nebensatz: „da es … gibt“. Danach folgt der Hauptsatz mit Verb an Position 2: „ist“.",
    en:"es gibt becomes ...da es ... gibt, then the main clause starts with its verb." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Arbeitsbuch B3b, den Nebensatz nach vorne stellen.",
    satz:"Obwohl das ihre Angst vergrößert, ___ viele das Lernen gerne auf.",
    loesung:["schieben"],
    regel:"Trennbares Verb „aufschieben“: der Stamm steht auf Position 2, das Präfix „auf“ bleibt am Satzende.",
    gegenbeispiel:"Ganzer Satz: „Viele schieben das Lernen gerne auf, obwohl das ihre Angst vergrößert.“",
    en:"aufschieben splits: schieben in slot 2, auf at the end." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Zwei Lücken: Verbindungsadverb + Verb. (Arbeitsbuch B3a, Satz 3)",
    satz:"Lucky teilt den Stoff in kleine Portionen, ___ ___ er viele Erfolgserlebnisse.",
    loesung:[["deswegen","deshalb","daher"], "hat"],
    regel:"Nach dem Verbindungsadverb kommt sofort das Verb, dann das Subjekt: deswegen – hat – er.",
    en:"adverb, then verb, then subject." }
]},

/* ---------------- 3. Sätze bauen ---------------- */
{
titel: "Sätze bauen: Wörter in die richtige Reihenfolge klicken",
telc: "Schriftlicher Ausdruck",
hinweis: "Klick die Wörter in der richtigen Reihenfolge an. Nochmal klicken schickt ein Wort zurück.",
items: [
  { typ:"ordnen", thema:"nebensatz",
    frage:"Bilde einen Nebensatz mit „obwohl“.",
    woerter:["Obwohl","Lucky","vor","dem","Lernen","aufräumen","sollte,","tut","er","es","nicht."],
    loesung:"Obwohl Lucky vor dem Lernen aufräumen sollte, tut er es nicht.",
    regel:"Modalverb „sollte“ ganz ans Ende des Nebensatzes. Danach Hauptsatz mit Verb sofort nach dem Komma: „tut er“.",
    en:"The modal goes last in the obwohl-clause; the main clause then starts with its verb." },
  { typ:"ordnen", thema:"konnektoren",
    frage:"Bilde denselben Inhalt mit „trotzdem“.",
    woerter:["Lucky","sollte","vor","dem","Lernen","aufräumen,","trotzdem","tut","er","es","nicht."],
    loesung:"Lucky sollte vor dem Lernen aufräumen, trotzdem tut er es nicht.",
    regel:"Mit „trotzdem“ sind es zwei Hauptsätze. Verb an Position 2 in beiden Teilen.",
    en:"With trotzdem you have two main clauses; verb second in both." },
  { typ:"ordnen", thema:"nebensatz",
    frage:"„da“-Satz am Satzanfang (Arbeitsbuch B4a, Satz 4).",
    woerter:["Da","man","beim","Erklären","über","den","Stoff","nachdenkt,","ist","es","gut,","mit","einem","Lernpartner","zu","arbeiten."],
    loesung:"Da man beim Erklären über den Stoff nachdenkt, ist es gut, mit einem Lernpartner zu arbeiten.",
    regel:"„Da“-Satz vorne → Hauptsatz beginnt mit dem Verb „ist“.",
    en:"Fronted da-clause, so the main clause starts with ist." },
  { typ:"ordnen", thema:"konnektoren",
    frage:"Zweiteiliger Konnektor „zwar … aber“.",
    woerter:["Zwar","helfen","Übungen","beim","Sprachenlernen,","aber","man","sollte","die","Sprache","auch","frei","anwenden."],
    loesung:"Zwar helfen Übungen beim Sprachenlernen, aber man sollte die Sprache auch frei anwenden.",
    regel:"„Zwar“ steht auf Position 1 → Verb auf Position 2 („helfen“). Nach „aber“ folgt ein normaler Hauptsatz.",
    en:"zwar takes slot 1 so the verb is second; aber then introduces a normal main clause." }
]},

/* ---------------- 4. Umformen ---------------- */
{
titel: "Umformen: gleicher Sinn, andere Struktur",
telc: "Sprachbausteine Teil 1",
hinweis: "Genau das prüft telc am liebsten: denselben Inhalt einmal mit Nebensatz und einmal mit Verbindungsadverb.",
items: [
  { typ:"luecke", thema:"konnektoren",
    frage:"Original: „Bär testet sich regelmäßig selbst, <b>weil</b> Lerntests eine effektive Lerntechnik sind.“ → Jetzt mit Verbindungsadverb:",
    satz:"Lerntests sind eine effektive Lerntechnik, ___ testet Bär sich regelmäßig selbst.",
    loesung:[["deswegen","deshalb","daher"]],
    regel:"Beim Umformen dreht sich die Reihenfolge: Der Grund kommt nach vorne, die Folge nach hinten.",
    en:"When you switch to an adverb, the reason must come first." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Original: „<b>Obwohl</b> es ihr nicht leicht fällt, hat Susannah viel Spaß beim Fremdsprachenlernen.“ → mit Verbindungsadverb:",
    satz:"Es fällt Susannah nicht leicht, ___ hat sie viel Spaß beim Fremdsprachenlernen.",
    loesung:[["trotzdem","dennoch"]],
    regel:"„trotzdem“ und „dennoch“ sind hier beide richtig. Danach sofort das Verb: „hat sie“.",
    en:"trotzdem or dennoch, then verb-subject." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Umgekehrt: „Enzo spricht schon sehr gut, <b>trotzdem</b> hat er Angst.“ → mit Nebensatzkonnektor:",
    satz:"___ Enzo schon sehr gut ___, hat er Angst Deutsch zu sprechen.",
    loesung:["obwohl","spricht"],
    regel:"„obwohl“ + Verb ans Ende des Nebensatzes. Der Hauptsatz beginnt danach mit „hat“.",
    en:"obwohl plus verb-final; the main clause then starts with its verb." },
  { typ:"luecke", thema:"nebensatz",
    frage:"Kausal umformen: „Kira wiederholt täglich den Lernstoff, weil er durch Wiederholung besser ins Langzeitgedächtnis kommt.“",
    satz:"Der Lernstoff kommt durch Wiederholung besser ins Langzeitgedächtnis, ___ ___ Kira ihn täglich.",
    loesung:[["deshalb","deswegen","daher"], "wiederholt"],
    regel:"Adverb auf Position 1 → Verb Position 2 → dann das Subjekt „Kira“.",
    en:"adverb, verb, subject." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Kursbuch 3d, aus einer Präposition einen Nebensatz machen. „<b>Aus Angst</b> vor dem großen Berg schiebe ich das Lernen gern auf.“",
    satz:"___ ich Angst vor dem großen Berg ___, schiebe ich das Lernen gern auf.",
    loesung:[["weil","da"], "habe"],
    regel:"Präposition + Nomen wird zum Nebensatz: aus Angst → weil ich Angst habe. Das Verb steht am Ende.",
    en:"Turn the prepositional phrase into a clause: aus Angst → weil ich Angst habe.",
    tipp:"„Angst haben“ ist die Verbindung, die im Buch in Klammern steht." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Kursbuch 3d, „<b>Wegen</b> der Beschäftigung mit diesen Fragen fällt es mir leichter, in das Thema einzusteigen.“",
    satz:"___ ich mich mit diesen Fragen ___, fällt es mir leichter, in das Thema einzusteigen.",
    loesung:[["da","weil"], "beschäftige"],
    regel:"„wegen“ (Grund) → „da“ oder „weil“. Reflexives Verb: sich beschäftigen mit + Dativ.",
    en:"wegen signals a reason, so use da or weil; note the reflexive sich beschäftigen mit." },
  { typ:"luecke", thema:"konnektoren",
    frage:"Kursbuch 3d, „<b>Trotz</b> gegenteiliger Behauptungen existiert keine optimale Lernmethode.“",
    satz:"___ das Gegenteil behauptet ___, existiert keine optimale Lernmethode.",
    loesung:["obwohl","wird"],
    regel:"„trotz“ (Gegengrund) → „obwohl“. Hier im Passiv: „das Gegenteil wird behauptet“ → im Nebensatz ans Ende.",
    en:"trotz → obwohl; passive wird behauptet goes to the end.",
    tipp:"Das Buch gibt „(das Gegenteil wird behauptet)“ vor, Passiv Präsens." }
]},

/* ---------------- 5. Sprachbausteine Cloze ---------------- */
{
titel: "Lückentext im telc-Format",
telc: "Sprachbausteine Teil 1",
hinweis: "Wähle für jede Lücke die richtige Option. Nur eine passt grammatisch UND inhaltlich.",
text: "<b>Aus einem Forum zum Thema Lernen</b>",
items: [
  { typ:"cloze", thema:"sprachbausteine",
    frage:"Ergänze den Forumsbeitrag.",
    text:"Hallo zusammen! ___ ich früher immer alles am Abend vor der Prüfung gelernt habe, war ich ständig gestresst. " +
         "Heute mache ich einen Lernplan, ___ fühle ich mich viel ruhiger. " +
         "Ein Methodenmix ist übrigens am besten, ___ es keine optimale Lernmethode gibt. " +
         "Viele schieben das Lernen trotzdem gern auf, ___ das ihre Angst nur vergrößert.",
    luecken:[
      { optionen:["Weil","Deshalb","Trotzdem"], richtig:0,
        regel:"Nebensatz mit Verb am Ende („gelernt habe“) → nur ein Nebensatzkonnektor passt. Der Grund ist logisch: spät lernen → Stress." },
      { optionen:["obwohl","deshalb","weil"], richtig:1,
        regel:"Nach dem Komma steht sofort das Verb „fühle“ → das ist ein Verbindungsadverb, kein Nebensatzkonnektor." },
      { optionen:["da","deswegen","dennoch"], richtig:0,
        regel:"„gibt“ steht am Ende → Nebensatz. Der Grund ist allgemein bekannt, also passt „da“." },
      { optionen:["deshalb","obwohl","denn"], richtig:1,
        regel:"„vergrößert“ steht am Ende → Nebensatz. Und der Sinn ist konzessiv: sie schieben auf, obwohl es schadet." }
    ],
    en:"Check two things for every gap: where is the verb, and is the logic causal or concessive?" }
]},

/* ---------------- 6. Wortschatz & Wortbildung ---------------- */
{
titel: "Wortbildung: Komposita mit „Lern-“",
telc: "Sprachbausteine Teil 2",
hinweis: "Arbeitsbuch B1b. Schreib Artikel + Wort, z. B. „der Lerntipp“.",
items: [
  { typ:"luecke", thema:"wortbildung",
    frage:"Gruppe → Menschen, die zusammen lernen:",
    satz:"___ Lerngruppe (Plural: die Lerngruppen)",
    loesung:[["die"]],
    regel:"Der Artikel kommt vom letzten Wort: die Gruppe → die Lerngruppe.",
    en:"Compound gender comes from the final noun." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Prozess → wie Lernen abläuft:",
    satz:"___ Lernprozess (Plural: die Lernprozess___)",
    loesung:[["der"], ["e"]],
    regel:"der Prozess → der Lernprozess, Plural: die Lernprozesse.",
    en:"der Prozess → der Lernprozess, plural -e." },
  { typ:"luecke", thema:"wortbildung",
    frage:"Technik → eine Methode zum Lernen:",
    satz:"___ Lerntechnik (Plural: die Lerntechnik___)",
    loesung:[["die"], ["en"]],
    regel:"die Technik → die Lerntechnik, Plural: die Lerntechniken.",
    en:"Feminine nouns in -ik take -en in the plural." },
  { typ:"mc", thema:"wortbildung",
    frage:"Welches Wort kann man NICHT mit „Lern-“ kombinieren? (Arbeitsbuch B1b: drei Nomen passen nicht)",
    optionen:["Stil","Sinnesorgan","Erfahrung"], richtig:1,
    regel:"„Lernsinnesorgan“ gibt es nicht. Ebenso nicht: Lernprüfung, Lernstudent. Aber: der Lernstil, die Lernerfahrung.",
    en:"Sinnesorgan, Prüfung and Student are the three that do not combine." },
  { typ:"zuordnen", thema:"wortschatz",
    frage:"Arbeitsbuch B1a, welches Verb passt zu welchem Ausdruck?",
    paare:[
      ["Informationen hervorheben","markieren / unterstreichen"],
      ["Inhalte wiedergeben","zusammenfassen / erklären"],
      ["in ein Thema einsteigen","Vorwissen aktivieren"],
      ["eine Lernmethode verwenden","ausprobieren / anwenden"]
    ],
    regel:"Aus B1a. Nicht passend waren dort: „wiederholen“ (bei hervorheben), „abfragen“ (bei Wörter schreiben), „abhaken“ (bei Methode verwenden)." , en:"Match each learning step to its verb: hervorheben means marking text, wiedergeben means restating content in your words." },
  { typ:"cloze", thema:"wortbildung",
    frage:"Arbeitsbuch B1c, Adjektive auf -iv und -al ergänzen.",
    text:"Da ich eher der ___ Typ bin, lerne ich sehr gut durch Hören. Aber am besten behalte ich Stoff, wenn ich ihn wiedergebe, " +
         "also ___ etwas damit mache. Das ist eine sehr ___ Methode; für mich ist sie ___. " +
         "Wenn man einen Text liest, sollte man ihn zuerst ___ lesen, d. h. man sollte als Erstes einen Überblick über den Text gewinnen. " +
         "Erst dann sollte man ___ lesen, um die Informationen zu erhalten, die einen besonders interessieren.",
    luecken:[
      { optionen:["auditive","aktive","globale"], richtig:0, regel:"„durch Hören“ → auditiv (audio = hören). Endung -e nach „der“." },
      { optionen:["selektiv","aktiv","optimal"], richtig:1, regel:"Selbst etwas damit machen = aktiv." },
      { optionen:["effektive","globale","selektive"], richtig:0, regel:"effektiv = es funktioniert gut. Nach „eine“ die Endung -e." },
      { optionen:["global","optimal","auditiv"], richtig:1, regel:"optimal = das Beste für mich." },
      { optionen:["selektiv","global","aktiv"], richtig:1, regel:"Überblick über den ganzen Text = globales Lesen." },
      { optionen:["selektiv","auditiv","optimal"], richtig:0, regel:"Nur bestimmte Informationen suchen = selektives Lesen." }
    ],
    en:"Adjectives from foreign roots end in -iv or -al. Watch the adjective ending after der/eine." }
]},

/* ---------------- 7. Wortbedeutung im Kontext ---------------- */
{
titel: "Wortbedeutung im Textzusammenhang",
telc: "Leseverstehen Teil 2",
hinweis: "Arbeitsbuch B2. Was bedeutet das Wort HIER im Text? Nicht: was bedeutet es allgemein?",
items: [
  { typ:"mc", thema:"leseverstehen",
    frage:"„Aber am besten <b>behalte</b> ich neuen Stoff, wenn ich ihn wiedergebe.“ (Smart)",
    optionen:["festhalten","sich erinnern","sammeln"], richtig:1,
    regel:"„behalten“ heißt hier: im Gedächtnis bleiben, sich erinnern können. Nicht: etwas physisch festhalten.",
    en:"behalten here = to retain in memory." },
  { typ:"mc", thema:"leseverstehen",
    frage:"„… wenn ich ihn <b>wiedergebe</b>.“ (Smart)",
    optionen:["darstellen","abbilden","vorlesen"], richtig:0,
    regel:"„wiedergeben“ = den Inhalt selbst noch einmal darstellen, mit eigenen Worten. „Vorlesen“ wäre nur ablesen, „abbilden“ ist ein Bild machen.",
    gegenbeispiel:"Merke: Inhalte wiedergeben = zusammenfassen, erklären, darstellen (siehe B1a).",
    en:"wiedergeben = to reproduce/present the content yourself, not to read aloud." },
  { typ:"mc", thema:"leseverstehen",
    frage:"„Ich <b>hake</b> das Thema dann <b>ab</b>.“ (Lucky)",
    optionen:["ankreuzen","kennzeichnen","für sich abschließen"], richtig:2,
    regel:"„abhaken“ heißt im Kontext: fertig sein, das Thema für sich beenden.",
    en:"abhaken = to be done with something, tick it off mentally." },
  { typ:"mc", thema:"leseverstehen",
    frage:"„… wie ich Wissen <b>aufnehme</b>.“ (Tim)",
    optionen:["anfangen","Unterkunft geben","erfassen"], richtig:2,
    regel:"„aufnehmen“ hat viele Bedeutungen. Hier: Informationen erfassen, ins Gehirn bekommen.",
    en:"aufnehmen here = to take in / absorb information." },
  { typ:"mc", thema:"leseverstehen",
    frage:"„… etwas mit einem Thema <b>verknüpfen</b>.“ (Bär)",
    optionen:["zusammenbinden","verbinden","aufeinander abstimmen"], richtig:1,
    regel:"„verknüpfen“ = gedanklich verbinden. „Zusammenbinden“ wäre wörtlich mit einer Schnur.",
    en:"verknüpfen = to link mentally." }
]},

/* ---------------- 8. B1-Check ---------------- */
{
titel: "B1-Check: Grundlagen, die bei B2 wehtun",
hinweis: "Diese Themen kommen aus B1, aber telc B2 setzt sie voraus. Fehler hier kosten in jeder Prüfungsteil Punkte.",
items: [
  { typ:"luecke", thema:"adjektivendungen", b1:true,
    frage:"Adjektivendungen nach unbestimmtem Artikel:",
    satz:"Das ist eine sehr effektiv___ Lernmethode.",
    loesung:["e"],
    regel:"Nach „eine“ (Nominativ feminin) bekommt das Adjektiv die Endung -e. Der Artikel zeigt schon das Geschlecht.",
    en:"After eine (nom. fem.) the adjective ends in -e." },
  { typ:"luecke", thema:"adjektivendungen", b1:true,
    frage:"Adjektivendungen nach bestimmtem Artikel, Dativ:",
    satz:"Ich lerne am liebsten mit ein___ gut___ Lernpartner.",
    loesung:["em","en"],
    regel:"„mit“ + Dativ → einem. Nach „einem“ folgt die schwache Endung -en: mit einem guten Lernpartner.",
    en:"mit takes dative: einem guten Lernpartner." },
  { typ:"luecke", thema:"verben-mit-praep", b1:true,
    frage:"Verb mit fester Präposition:",
    satz:"Ich beschäftige mich intensiv ___ diesen Fragen.",
    loesung:[["mit"]],
    regel:"sich beschäftigen <b>mit</b> + Dativ. Diese Verbindungen muss man auswendig lernen, telc prüft sie in Sprachbausteine Teil 2.",
    en:"sich beschäftigen mit + dative, memorise verb+preposition pairs." },
  { typ:"luecke", thema:"verben-mit-praep", b1:true,
    frage:"Noch eine feste Verbindung:",
    satz:"Viele Studierende haben Angst ___ der Prüfung.",
    loesung:[["vor"]],
    regel:"Angst haben <b>vor</b> + Dativ. Vergleiche: sich interessieren für, sich freuen auf, denken an.",
    en:"Angst haben vor + dative." },
  { typ:"mc", thema:"perfekt-praeteritum", b1:true,
    frage:"Welche Form ist im geschriebenen Bericht (telc Leseverstehen) üblich?",
    optionen:["Der Psychologe hat zahlreiche Praxistests angeschaut.","Der Psychologe schaute zahlreiche Praxistests an."],
    richtig:1,
    regel:"In geschriebenen Texten (Zeitung, Bericht, Erzählung) steht meist Präteritum. Im Gespräch benutzt man Perfekt.",
    en:"Written reports use Präteritum; spoken German prefers Perfekt." },
  { typ:"konjugation", thema:"verbformen", b1:true,
    frage:"Konjugiere „aufschieben“ im Präsens (trennbar!).",
    kopf:["Person","Form (2 Wörter, z. B. „schiebe auf“)"],
    zeilen:[
      ["ich","schiebe auf"],
      ["du",["schiebst auf"]],
      ["er/sie/es",["schiebt auf"]],
      ["wir",["schieben auf"]]
    ],
    regel:"Trennbare Verben im Hauptsatz: Stamm auf Position 2, Präfix ganz am Ende. Im Nebensatz wieder zusammen: „…, weil ich es aufschiebe.“",
    en:"Separable verbs split in main clauses and rejoin in subordinate clauses." }
]},

/* ---------------- 9. Schreiben ---------------- */
{
titel: "Schriftlicher Ausdruck: dein Forumsbeitrag",
telc: "Schriftlicher Ausdruck",
hinweis: "Kursbuch Aufgabe 4. Antworte auf Nias Frage im Forum: Welche Lernmethode funktioniert für dich?",
items: [
  { typ:"frei", thema:"schreiben",
    frage:"Schreib einen kurzen Forumsbeitrag (ca. 80 Wörter). <b>Pflicht:</b> mindestens ein „weil“ oder „da“, ein „obwohl“ und ein „deshalb“ oder „trotzdem“.",
    mindestWorte:80,
    hinweise:["Ich behalte neuen Stoff am besten, wenn ich …","Daher finde ich den Vorschlag von … sehr gut.","Meiner Erfahrung nach …","Das funktioniert bei mir, weil …","Obwohl … , finde ich …"],
    muster:"Hallo Nia,<br><br>ich behalte neuen Stoff am besten, wenn ich ihn jemandem erkläre. " +
      "<b>Da</b> ich im Beruf viel mit KI-Themen arbeite, muss ich ständig komplizierte Inhalte einfach ausdrücken, " +
      "und genau das ist auch beim Lernen die beste Methode. <b>Deshalb</b> suche ich mir immer einen Lernpartner.<br><br>" +
      "<b>Obwohl</b> „Hervorheben von Informationen“ im Test schlecht abgeschnitten hat, markiere ich trotzdem wichtige Stellen. " +
      "Für mich ist das nur der erste Schritt; danach fasse ich alles mit eigenen Worten zusammen.<br><br>" +
      "Den Vorschlag von Lucky finde ich auch sehr gut, <b>weil</b> kleine Portionen wirklich Erfolgserlebnisse bringen.",
    kriterien:"telc bewertet drei Dinge: <b>Aufgabengerechtheit</b> (hast du auf Nias Frage geantwortet und deine Meinung begründet?), " +
      "<b>kommunikative Gestaltung</b> (Anrede, Gliederung, Übergänge) und <b>formale Richtigkeit</b> (Konnektoren, Wortstellung, Kasus). " +
      "Mit drei korrekt gebauten Konnektorensätzen sicherst du dir hier Punkte." , en:"Forum posts want opinion plus reason: use weil or da, obwohl for the concession, deshalb for the consequence." }
]}

],

wortschatz: [
  { de:"aufschieben (schiebt auf, schob auf, hat aufgeschoben)", en:"to put off, procrastinate", bsp:"Aus Angst vor dem großen Berg schiebe ich das Lernen gern auf." },
  { de:"der Gegengrund, ¨-e", en:"counter-reason (concessive)", bsp:"„Obwohl“ nennt einen Gegengrund." },
  { de:"hervorheben (hebt hervor)", en:"to highlight, emphasise", bsp:"Informationen hervorheben heißt markieren oder unterstreichen." },
  { de:"wiedergeben (gibt wieder)", en:"to reproduce, render", bsp:"Am besten behalte ich Stoff, wenn ich ihn wiedergebe." },
  { de:"abhaken (hakt ab)", en:"to tick off, be done with", bsp:"Danach hake ich das Thema für mich ab." },
  { de:"verknüpfen (mit + Dativ)", en:"to link, connect", bsp:"Ich verknüpfe neue Inhalte mit meinem Vorwissen." },
  { de:"das Vorwissen (nur Singular)", en:"prior knowledge", bsp:"Vor dem Lesen aktiviere ich mein Vorwissen." },
  { de:"das Langzeitgedächtnis", en:"long-term memory", bsp:"Durch Wiederholung kommt der Stoff ins Langzeitgedächtnis." },
  { de:"das Erfolgserlebnis, -se", en:"sense of achievement", bsp:"Kleine Portionen bringen viele Erfolgserlebnisse." },
  { de:"veraltet", en:"outdated", bsp:"Das Konzept „Lerntyp“ gilt heute als veraltet." },
  { de:"überfliegen (überfliegt, überflog)", en:"to skim (a text)", bsp:"Beim globalen Lesen überfliegt man den Text zuerst ganz." },
  { de:"sich beschäftigen mit + Dativ", en:"to occupy oneself with", bsp:"Da ich mich mit diesen Fragen beschäftige, fällt mir der Einstieg leichter." },
  { de:"der Einstieg, -e (in + Akkusativ)", en:"the start, way in", bsp:"Der Einstieg in das Thema fällt mir leichter." },
  { de:"zahlreich", en:"numerous", bsp:"Der Psychologe hat zahlreiche Praxistests angeschaut." },
  { de:"abschneiden (schneidet ab)", en:"to perform, do (in a test)", bsp:"Diese Methoden schnitten am schlechtesten ab." },
  { de:"der Methodenmix", en:"mix of methods", bsp:"Da es keine optimale Lernmethode gibt, ist ein Methodenmix am besten." }
],

zusammenfassung:
  "<ul class='bsp'>" +
  "<li><b>Nebensatzkonnektoren</b> (weil, da, obwohl) → Verb ganz ans <b>Ende</b>.</li>" +
  "<li><b>Verbindungsadverben</b> (deshalb, deswegen, daher / trotzdem, dennoch) → Verb auf <b>Position 2</b>, dann das Subjekt.</li>" +
  "<li><b>kausal</b> = Grund + logische Folge. <b>konzessiv</b> = Gegengrund + <i>nicht erwartete</i> Folge.</li>" +
  "<li>Steht der Nebensatz vorne, folgt sofort das Verb des Hauptsatzes: <i>Weil …, hat der Psychologe …</i></li>" +
  "<li><b>denn</b> ist kein Nebensatzkonnektor, Wortstellung bleibt normal.</li>" +
  "<li>Lesen: erst <b>global</b> (Überblick), dann <b>selektiv</b> (gezielt suchen, über Synonyme).</li>" +
  "<li>Komposita nehmen den Artikel vom <b>letzten</b> Wort: die Gruppe → <b>die</b> Lerngruppe.</li>" +
  "</ul>",

dialog:
  "<p>Antworte mir im Chat auf Deutsch, ich korrigiere jeden Satz:</p>" +
  "<p><b>1.</b> Warum lernst du gerade Deutsch? Antworte mit <b>weil</b> <i>und</i> noch einmal mit <b>deshalb</b>.<br>" +
  "<b>2.</b> Was am Deutschlernen fällt dir schwer, obwohl du es oft übst? Benutze <b>obwohl</b> und <b>trotzdem</b>.<br>" +
  "<b>3.</b> Erkläre mir in 3 Sätzen den Unterschied zwischen globalem und selektivem Lesen, auf Deutsch.</p>" +
  "<p class='en'>Answer in German in the chat. I will quote each sentence, correct it, and name the rule.</p>"
};
