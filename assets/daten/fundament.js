/* ============================================================
   B1-FUNDAMENT — der Aufgabenvorrat
   Sechs Themen, die im Einstufungstest vom 29.07.2026 auf 0–20 % lagen.
   Aus diesem Pool zieht sich jede Tag-Seite ihren täglichen 10er-Block:
     3 × Verben mit Präposition (jeden Tag) + 7 × Thema des Tages.
   ============================================================ */

KURS.fundament = {

/* ---------------------------------------------------------- */
"verben-mit-praep": {
titel: "Verben mit Präposition",
kurz: "Einstufung: 0/6 — reines Auswendiglernen, kommt jeden Tag zurück",
konzept: {
  titel: "Verben mit fester Präposition",
  de: "<p>Manche Verben haben eine <b>feste</b> Präposition. Die kann man <b>nicht</b> logisch herleiten — " +
      "man muss das Paar als Einheit lernen: nicht „warten“, sondern „<b>warten auf</b> + Akkusativ“.</p>" +
      "<p>Lerne immer <b>drei</b> Dinge zusammen: Verb + Präposition + Kasus.</p>",
  tabelle: {
    kopf: ["mit Akkusativ", "mit Dativ"],
    zeilen: [
      ["sich interessieren <b>für</b>", "sich beschäftigen <b>mit</b>"],
      ["sich freuen <b>auf</b> (Zukunft)", "abhängen <b>von</b>"],
      ["sich freuen <b>über</b> (Vergangenheit)", "arbeiten <b>an</b>"],
      ["denken <b>an</b>", "Angst haben <b>vor</b>"],
      ["sich erinnern <b>an</b>", "sich treffen <b>mit</b>"],
      ["warten <b>auf</b>", "teilnehmen <b>an</b>"],
      ["sich vorbereiten <b>auf</b>", "sprechen <b>mit</b> (jemandem)"],
      ["sich bewerben <b>um</b> (eine Stelle)", "sich bewerben <b>bei</b> (einer Firma)"],
      ["achten <b>auf</b>", "gehören <b>zu</b>"],
      ["sprechen <b>über</b> (ein Thema)", "sich bedanken <b>für</b> (Akk.!)"]
    ]
  },
  regel: "Merktrick: „an“ und „auf“ und „über“ sind meistens Akkusativ. „mit“, „von“, „bei“, „zu“ sind IMMER Dativ — das sind reine Dativpräpositionen.",
  beispiele: [
    "Ich freue mich <b>auf</b> das Wochenende. <span class='en'>(es kommt noch → Vorfreude)</span>",
    "Ich freue mich <b>über</b> dein Geschenk. <span class='en'>(ist schon passiert)</span>",
    "Ich bewerbe mich <b>um</b> die Stelle <b>bei</b> Siemens. <span class='en'>(zwei verschiedene Präpositionen!)</span>"
  ],
  en: "Some verbs are welded to one preposition, and you cannot derive which one — you memorise the pair. Always learn three things together: verb + preposition + case. Note that mit, von, bei and zu are dative prepositions in every context, so those are free points."
},
items: [
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich interessiere mich sehr ___ Technik.", loesung:[["für"]],
    frage:"", regel:"sich interessieren <b>für</b> + Akkusativ.", en:"interested in" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Wir freuen uns ___ das nächste Wochenende.", loesung:[["auf"]],
    frage:"Etwas liegt in der Zukunft:", regel:"sich freuen <b>auf</b> + Akkusativ = Vorfreude auf etwas Kommendes.",
    gegenbeispiel:"sich freuen <b>über</b> = Freude über etwas, das schon passiert ist.", en:"look forward to" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich habe mich sehr ___ deine Nachricht gefreut.", loesung:[["über"]],
    frage:"Etwas ist schon passiert:", regel:"sich freuen <b>über</b> + Akkusativ = Freude über etwas Vergangenes.", en:"be pleased about" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Er denkt oft ___ seine Familie in Indien.", loesung:[["an"]],
    frage:"", regel:"denken <b>an</b> + Akkusativ.", en:"think of/about" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Das hängt ___ dem Wetter ab.", loesung:[["von"]],
    frage:"Achtung: das Verb ist trennbar — „abhängen“.",
    regel:"abhängen <b>von</b> + Dativ. Das „ab“ am Satzende gehört zum Verb, die Lücke braucht die Präposition.",
    gegenbeispiel:"Nicht „hängt ab ab“ — die Präposition ist <b>von</b>.", en:"depend on" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich bereite mich gerade ___ die Prüfung vor.", loesung:[["auf"]],
    frage:"", regel:"sich vorbereiten <b>auf</b> + Akkusativ.", en:"prepare for" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Sie arbeitet seit Wochen ___ diesem Projekt.", loesung:[["an"]],
    frage:"", regel:"arbeiten <b>an</b> + Dativ. „diesem“ zeigt dir schon den Dativ.", en:"work on" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Viele Studierende haben Angst ___ der mündlichen Prüfung.", loesung:[["vor"]],
    frage:"", regel:"Angst haben <b>vor</b> + Dativ.", en:"be afraid of" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich beschäftige mich beruflich ___ künstlicher Intelligenz.", loesung:[["mit"]],
    frage:"", regel:"sich beschäftigen <b>mit</b> + Dativ.", en:"deal with, work on" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Erinnerst du dich noch ___ unseren ersten Kurstag?", loesung:[["an"]],
    frage:"", regel:"sich erinnern <b>an</b> + Akkusativ — „unseren“ zeigt den Akkusativ.", en:"remember" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich warte schon eine Stunde ___ den Bus.", loesung:[["auf"]],
    frage:"", regel:"warten <b>auf</b> + Akkusativ.", en:"wait for" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Er nimmt regelmäßig ___ Online-Kursen teil.", loesung:[["an"]],
    frage:"Trennbares Verb: „teilnehmen“.", regel:"teilnehmen <b>an</b> + Dativ.", en:"take part in" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich bewerbe mich ___ eine Stelle ___ einem Beratungsunternehmen.", loesung:[["um"],["bei"]],
    frage:"Zwei Lücken — Achtung, zwei verschiedene Präpositionen:",
    regel:"sich bewerben <b>um</b> + Akkusativ (die Stelle) / sich bewerben <b>bei</b> + Dativ (die Firma).",
    en:"apply for a position at a company" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Wir haben lange ___ dieses Thema gesprochen.", loesung:[["über"]],
    frage:"", regel:"sprechen <b>über</b> + Akkusativ (ein Thema). Aber: sprechen <b>mit</b> + Dativ (einer Person).",
    en:"talk about a topic / talk to a person" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Achte bitte ___ die Adjektivendungen!", loesung:[["auf"]],
    frage:"", regel:"achten <b>auf</b> + Akkusativ.", en:"pay attention to" },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Ich bedanke mich herzlich ___ Ihre schnelle Antwort.", loesung:[["für"]],
    frage:"Formeller Brief:", regel:"sich bedanken <b>für</b> + Akkusativ. Wichtig für den Schriftlichen Ausdruck!", en:"thank someone for" },
  { typ:"zuordnen", thema:"verben-mit-praep",
    frage:"Ordne Verb und Präposition zu.",
    paare:[["sich interessieren","für"],["abhängen","von"],["teilnehmen","an"],["sich bewerben (Firma)","bei"]],
    regel:"für/an = Akkusativ · von/bei = immer Dativ." , en:"Each verb locks in its own preposition; für and an take Akkusativ, von and bei always Dativ." },
  { typ:"mc", thema:"verben-mit-praep",
    frage:"Welcher Satz ist richtig?",
    optionen:["Ich freue mich über das Konzert nächste Woche.","Ich freue mich auf das Konzert nächste Woche."],
    richtig:1, regel:"„nächste Woche“ = Zukunft → sich freuen <b>auf</b>.", en:"Future event → auf." }
]},

/* ---------------------------------------------------------- */
"relativsatz": {
titel: "Relativsätze",
kurz: "Einstufung: 0/4 — eine Tabelle mit zwölf Feldern, an einem Abend machbar",
konzept: {
  titel: "Relativpronomen — die ganze Tabelle",
  de: "<p>Ein Relativsatz beschreibt ein Nomen genauer. Das Relativpronomen sieht fast aus wie der bestimmte Artikel " +
      "(der, die, das) — nur zwei Formen sind anders (Dativ Plural und Genitiv).</p>" +
      "<p>Zwei Fragen entscheiden über die Form:<br>" +
      "<b>1. Genus/Numerus</b> kommt vom <b>Bezugswort</b> davor.<br>" +
      "<b>2. Kasus</b> kommt von der <b>Rolle im Relativsatz</b> — nicht vom Hauptsatz!</p>",
  tabelle: {
    kopf: ["Kasus", "maskulin", "feminin", "neutrum", "Plural"],
    zeilen: [
      ["Nominativ (wer?)", "<b>der</b>", "<b>die</b>", "<b>das</b>", "<b>die</b>"],
      ["Akkusativ (wen?)", "<b>den</b>", "<b>die</b>", "<b>das</b>", "<b>die</b>"],
      ["Dativ (wem?)", "<b>dem</b>", "<b>der</b>", "<b>dem</b>", "<b>denen</b> ⚠"],
      ["Genitiv (wessen?)", "<b>dessen</b> ⚠", "<b>deren</b> ⚠", "<b>dessen</b> ⚠", "<b>deren</b> ⚠"]
    ]
  },
  regel: "Das Verb steht im Relativsatz IMMER am Ende — es ist ein Nebensatz. Und es steht immer ein Komma davor.",
  beispiele: [
    "Das ist der Mann, <b>der</b> nebenan wohnt. <span class='en'>(maskulin + Subjekt → Nominativ)</span>",
    "Das ist der Film, <b>den</b> ich gesehen habe. <span class='en'>(maskulin + Objekt → Akkusativ)</span>",
    "Die Kollegin, <b>der</b> ich geholfen habe, … <span class='en'>(„helfen“ verlangt Dativ → der)</span>",
    "Das Thema, <b>über das</b> wir gesprochen haben, … <span class='en'>(Präposition steht VOR dem Pronomen)</span>"
  ],
  en: "Relative pronouns look like the definite article. Gender and number come from the noun before the comma; the CASE comes from the role inside the relative clause. Only four forms differ from the article: denen (dative plural) and dessen/deren (genitive). The verb always goes to the end."
},
items: [
  { typ:"luecke", thema:"relativsatz", satz:"Das ist der Kollege, ___ mir immer hilft.", loesung:["der"],
    frage:"Maskulin, Subjekt im Relativsatz:", regel:"„der Kollege“ + Subjekt (wer hilft?) → Nominativ maskulin = <b>der</b>." , en:"The relative pronoun copies gender from <b>Kollege</b> and takes its case from its job: subject, so der." },
  { typ:"luecke", thema:"relativsatz", satz:"Das ist das Buch, ___ ich gestern gekauft habe.", loesung:["das"],
    frage:"Neutrum, Objekt:", regel:"„das Buch“ + Objekt (was habe ich gekauft?) → Akkusativ neutrum = <b>das</b>." , en:"Neuter accusative looks the same as nominative, so <b>das</b> stays das even when it is the object." },
  { typ:"luecke", thema:"relativsatz", satz:"Der Film, ___ wir gesehen haben, war sehr gut.", loesung:["den"],
    frage:"Maskulin, Objekt — Achtung:", regel:"„der Film“ + Objekt → Akkusativ maskulin = <b>den</b>. Nur im Maskulinum ändert sich die Form!",
    gegenbeispiel:"Nominativ wäre „der Film, <b>der</b> gut war“." , en:"Masculine is the only gender whose accusative changes shape, so the object form is <b>den</b>, not der." },
  { typ:"luecke", thema:"relativsatz", satz:"Die Frau, ___ ich das Paket gegeben habe, war meine Nachbarin.", loesung:["der"],
    frage:"Feminin, Dativ:", regel:"„geben“ + wem? → Dativ. Feminin Dativ = <b>der</b>." , en:"<b>geben</b> hands something to somebody, so the pronoun is Dativ, and feminine Dativ is der, not die." },
  { typ:"luecke", thema:"relativsatz", satz:"Das sind die Studenten, ___ ich geholfen habe.", loesung:["denen"],
    frage:"Plural, Dativ — die Sonderform:", regel:"„helfen“ + Dativ, Plural → <b>denen</b>. Das ist die einzige Dativform, die vom Artikel abweicht." , en:"<b>helfen</b> always takes Dativ, and the plural Dativ adds -en, giving denen instead of die." },
  { typ:"luecke", thema:"relativsatz", satz:"Das ist das Projekt, an ___ ich gerade arbeite.", loesung:["dem"],
    frage:"Mit Präposition:", regel:"„arbeiten an“ + Dativ, neutrum → an <b>dem</b>. Die Präposition steht VOR dem Relativpronomen." , en:"<b>arbeiten an</b> takes Dativ, and the preposition moves in front of the relative pronoun." },
  { typ:"luecke", thema:"relativsatz", satz:"Die Firma, bei ___ ich mich beworben habe, hat geantwortet.", loesung:["der"],
    frage:"Mit Präposition, feminin:", regel:"„sich bewerben bei“ + Dativ, feminin → bei <b>der</b>." , en:"<b>sich bewerben bei</b> takes Dativ, so feminine der follows bei at the start of the clause." },
  { typ:"luecke", thema:"relativsatz", satz:"Das ist der Grund, ___ ich nicht kommen kann.", loesung:[["weshalb","warum","aus dem"]],
    frage:"Hier passt kein normales Relativpronomen:", regel:"Bei „der Grund“ nimmt man meist <b>weshalb</b> oder <b>warum</b>." , en:"<b>der Grund</b> names a reason, so German prefers weshalb or warum over a plain relative pronoun." },
  { typ:"ordnen", thema:"relativsatz",
    frage:"Bau den Relativsatz. Achte auf das Verb am Ende!",
    woerter:["Ich","kenne","einen","Lehrer,","der","sehr","gut","erklären","kann."],
    loesung:"Ich kenne einen Lehrer, der sehr gut erklären kann.",
    regel:"Im Relativsatz steht das konjugierte Verb („kann“) ganz am Ende, nach dem Infinitiv." , en:"In a relative clause the conjugated verb goes last, after the infinitive: erklären kann, not kann erklären." },
  { typ:"ordnen", thema:"relativsatz",
    frage:"Bau den Satz mit Akkusativ-Relativpronomen.",
    woerter:["Das","ist","der","Kurs,","den","ich","seit","Montag","besuche."],
    loesung:"Das ist der Kurs, den ich seit Montag besuche.",
    regel:"„der Kurs“ ist Objekt von „besuchen“ → Akkusativ maskulin = den. Verb ans Ende." , en:"<b>der Kurs</b> is what you attend, so accusative den, and the verb besuche closes the clause." },
  { typ:"mc", thema:"relativsatz", frage:"Welcher Satz ist korrekt?",
    optionen:["Das ist die Frau, die ich gestern getroffen habe.","Das ist die Frau, der ich gestern getroffen habe."],
    richtig:0, regel:"„treffen“ verlangt Akkusativ. Feminin Akkusativ = <b>die</b> (gleich wie Nominativ)." , en:"<b>treffen</b> takes Akkusativ, and the feminine accusative form die is identical to the nominative." },
  { typ:"mc", thema:"relativsatz", frage:"Welcher Satz ist korrekt?",
    optionen:["Der Mann, dessen Auto kaputt ist, wartet draußen.","Der Mann, deren Auto kaputt ist, wartet draußen."],
    richtig:0, regel:"Genitiv maskulin = <b>dessen</b>. „deren“ ist feminin und Plural." , en:"Genitive masculine is <b>dessen</b>; deren belongs to feminine owners and to plural owners." },
  { typ:"luecke", thema:"relativsatz", satz:"Meine Schwester, ___ in Köln wohnt, besucht mich am Wochenende.", loesung:["die"],
    frage:"Feminin, Subjekt:", regel:"„meine Schwester“ + Subjekt → Nominativ feminin = <b>die</b>." , en:"Feminine subject in the relative clause, so the pronoun is <b>die</b>, same form as the article." }
]},

/* ---------------------------------------------------------- */
"nebensatz": {
titel: "Nebensatz-Wortstellung",
kurz: "Einstufung: 1/5 — B2 lebt von komplexen Sätzen",
konzept: {
  titel: "Wo steht das Verb im Nebensatz?",
  de: "<p>Ein Nebensatz beginnt mit einem Konnektor (dass, weil, obwohl, wenn, als, ob, damit, während …) " +
      "oder einem Fragewort. Danach gilt <b>eine</b> Regel: das konjugierte Verb geht ganz <b>ans Ende</b>.</p>" +
      "<p>Bei zusammengesetzten Zeiten wird es interessant — das <b>Hilfsverb</b> steht ganz hinten, " +
      "nach dem Partizip oder Infinitiv.</p>",
  tabelle: {
    kopf: ["Form", "Hauptsatz", "Nebensatz"],
    zeilen: [
      ["Präsens", "Er <b>fährt</b> nach Berlin.", "…, dass er nach Berlin <b>fährt</b>."],
      ["Perfekt", "Er <b>hat</b> den Film <b>gesehen</b>.", "…, dass er den Film <b>gesehen hat</b>."],
      ["Modalverb", "Er <b>muss</b> heute <b>arbeiten</b>.", "…, dass er heute <b>arbeiten muss</b>."],
      ["Trennbares Verb", "Er <b>schiebt</b> es <b>auf</b>.", "…, dass er es <b>aufschiebt</b>. (wieder zusammen!)"],
      ["Passiv", "Es <b>wird</b> heute <b>gemacht</b>.", "…, dass es heute <b>gemacht wird</b>."]
    ]
  },
  regel: "Das Hilfsverb (hat, ist, wird, muss, kann) ist der Chef — im Nebensatz steht der Chef ganz hinten.",
  beispiele: [
    "Ich weiß, dass du gestern <b>gekommen bist</b>. <span class='en'>(Partizip vor Hilfsverb)</span>",
    "Weißt du, wann der Zug <b>abfährt</b>? <span class='en'>(indirekte Frage = Nebensatz)</span>",
    "<b>Als ich klein war, habe</b> ich viel gelesen. <span class='en'>(Nebensatz vorne → Verb sofort nach dem Komma)</span>"
  ],
  en: "In a subordinate clause the conjugated verb goes last. With compound tenses the auxiliary (hat / ist / wird / muss) goes at the very end, after the participle or infinitive. If the subordinate clause comes first in the sentence, it fills position 1, so the main clause verb must come immediately after the comma."
},
items: [
  { typ:"luecke", thema:"nebensatz", satz:"Ich weiß, dass er morgen nach Berlin ___.", loesung:[["fährt"]],
    frage:"Präsens:", regel:"Nach „dass“ steht das konjugierte Verb am Ende: fährt." , en:"<b>dass</b> sends the conjugated verb to the very end, so fährt closes the whole clause." },
  { typ:"luecke", thema:"nebensatz", satz:"Er sagt, dass er den Film schon ___ ___.", loesung:["gesehen","hat"],
    frage:"Perfekt — zwei Lücken, richtige Reihenfolge:", regel:"Partizip zuerst, dann das Hilfsverb ganz am Ende: „gesehen hat“.",
    gegenbeispiel:"Falsch: „…, dass er den Film schon hat gesehen.“" , en:"In a subordinate clause the participle comes first and the auxiliary <b>hat</b> lands at the very end." },
  { typ:"luecke", thema:"nebensatz", satz:"Ich glaube, dass sie heute länger ___ ___.", loesung:["arbeiten","muss"],
    frage:"Modalverb:", regel:"Infinitiv zuerst, dann das Modalverb: „arbeiten muss“." , en:"The infinitive comes first and the modal <b>muss</b> takes the final slot in the dass clause." },
  { typ:"luecke", thema:"nebensatz", satz:"Weißt du, wann der Zug ___?", loesung:[["abfährt","ankommt"]],
    frage:"Indirekte Frage, trennbares Verb:", regel:"Indirekte Frage = Nebensatz. Trennbares Verb wird wieder zusammengeschrieben: abfährt." , en:"An indirect question is a subordinate clause, so the separable prefix rejoins the verb: <b>abfährt</b>." },
  { typ:"luecke", thema:"nebensatz", satz:"Als ich klein war, ___ ich viel gelesen.", loesung:["habe"],
    frage:"Nebensatz steht vorne — was passiert im Hauptsatz?",
    regel:"Der Nebensatz besetzt Position 1, also muss das Verb des Hauptsatzes direkt nach dem Komma stehen: „…, habe ich …“.",
    gegenbeispiel:"Falsch: „Als ich klein war, ich habe viel gelesen.“" , en:"The subordinate clause fills position one, so the main clause verb comes directly after the comma." },
  { typ:"luecke", thema:"nebensatz", satz:"Er fragt, ob wir am Freitag Zeit ___.", loesung:[["haben"]],
    frage:"Ja/Nein-Frage indirekt:", regel:"„ob“ = indirekte Ja/Nein-Frage → Nebensatz, Verb ans Ende." , en:"<b>ob</b> turns a yes-no question into a subordinate clause, which pushes haben to the end." },
  { typ:"luecke", thema:"nebensatz", satz:"Ich lerne jeden Tag, damit ich die Prüfung ___ ___.", loesung:["bestehen","kann"],
    frage:"Zweck mit „damit“:", regel:"„damit“ leitet einen Nebensatz ein: Infinitiv, dann Modalverb ans Ende." , en:"<b>damit</b> expresses purpose and opens a subordinate clause: infinitive first, modal verb last." },
  { typ:"ordnen", thema:"nebensatz",
    frage:"Bau den Satz. Perfekt im Nebensatz!",
    woerter:["Ich","freue","mich,","dass","du","gekommen","bist."],
    loesung:"Ich freue mich, dass du gekommen bist.",
    regel:"Partizip „gekommen“, dann das Hilfsverb „bist“ ganz am Ende." , en:"The participle <b>gekommen</b> comes first and the auxiliary bist finishes the dass clause." },
  { typ:"ordnen", thema:"nebensatz",
    frage:"Nebensatz zuerst — achte auf den Hauptsatz.",
    woerter:["Wenn","ich","Zeit","habe,","gehe","ich","joggen."],
    loesung:"Wenn ich Zeit habe, gehe ich joggen.",
    regel:"Nebensatz = Position 1 → Hauptsatz beginnt mit dem Verb „gehe“, dann das Subjekt." , en:"With the wenn clause in position one, the main clause starts with the verb <b>gehe</b>, then the subject." },
  { typ:"mc", thema:"nebensatz", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich hoffe, dass du bald kommen kannst.","Ich hoffe, dass du kannst bald kommen."],
    richtig:0, regel:"Modalverb ganz ans Ende: „kommen kannst“." , en:"The modal goes last, after the infinitive: <b>kommen kannst</b>, never kannst bald kommen." },
  { typ:"mc", thema:"nebensatz", frage:"Welcher Satz ist korrekt?",
    optionen:["Obwohl es regnet, wir gehen spazieren.","Obwohl es regnet, gehen wir spazieren."],
    richtig:1, regel:"Der Nebensatz steht vorne → das Verb des Hauptsatzes muss direkt nach dem Komma stehen." , en:"<b>obwohl</b> opens a subordinate clause in position one, so the main clause inverts to gehen wir." },
  { typ:"luecke", thema:"nebensatz", satz:"Ich bin sicher, dass das Formular heute noch ___ ___.", loesung:["unterschrieben","wird"],
    frage:"Passiv im Nebensatz:", regel:"Partizip zuerst, dann „wird“ ganz am Ende." , en:"In a subordinate clause the passive stacks up: participle first, then <b>wird</b> right at the end." }
]},

/* ---------------------------------------------------------- */
"passiv": {
titel: "Passiv",
kurz: "Einstufung: 0/3 — Standard in jedem Sachtext und Geschäftsbrief",
konzept: {
  titel: "Passiv — wenn die Handlung wichtiger ist als die Person",
  de: "<p>Aktiv: <i>Der Chef unterschreibt den Vertrag.</i> → Wer handelt, ist wichtig.<br>" +
      "Passiv: <i>Der Vertrag <b>wird</b> unterschrieben.</i> → Was passiert, ist wichtig.</p>" +
      "<p>Die Formel ist immer gleich: <b>werden</b> + <b>Partizip II</b>. " +
      "Nur „werden“ wird konjugiert und ändert die Zeit.</p>",
  tabelle: {
    kopf: ["Zeit", "Formel", "Beispiel"],
    zeilen: [
      ["Präsens", "wird + Partizip II", "Der Vertrag <b>wird</b> unterschrieben."],
      ["Präteritum", "wurde + Partizip II", "Der Vertrag <b>wurde</b> unterschrieben."],
      ["Perfekt", "ist + Partizip II + <b>worden</b> ⚠", "Der Vertrag ist unterschrieben <b>worden</b>."],
      ["mit Modalverb", "muss + Partizip II + <b>werden</b>", "Das Problem muss gelöst <b>werden</b>."],
      ["im Nebensatz", "… Partizip II + wird", "…, dass der Vertrag unterschrieben <b>wird</b>."]
    ]
  },
  regel: "Die häufigste Falle: im Passiv Perfekt heißt das Partizip von „werden“ nicht „geworden“, sondern ⚠ WORDEN. Ohne „ge-“.",
  beispiele: [
    "Wer handelt? Mit <b>von</b> + Dativ: Der Vertrag wird <b>vom Chef</b> unterschrieben.",
    "Womit? Mit <b>durch</b> + Akkusativ: Die Stadt wurde <b>durch ein Erdbeben</b> zerstört.",
    "Sehr häufig im Brief: „Ihre Anfrage <b>wird</b> bearbeitet.“ <span class='en'>(neutral, höflich, unpersönlich)</span>"
  ],
  en: "Passive = werden + past participle. Only werden changes to mark tense. The classic trap: in the perfect passive, werden's participle is worden (no ge-), not geworden. The agent, if mentioned, takes von + dative."
},
items: [
  { typ:"luecke", thema:"passiv", satz:"Das Formular ___ vom Chef unterschrieben.", loesung:[["wird"]],
    frage:"Passiv Präsens:", regel:"werden + Partizip II. Präsens Singular: wird." , en:"Passive is werden plus Partizip II, and a singular subject in the present takes <b>wird</b>." },
  { typ:"luecke", thema:"passiv", satz:"Die Ergebnisse ___ nächste Woche veröffentlicht.", loesung:[["werden"]],
    frage:"Passiv Präsens, Plural:", regel:"„Die Ergebnisse“ ist Plural → werden." , en:"<b>Die Ergebnisse</b> is plural, so the passive auxiliary agrees with it and becomes werden." },
  { typ:"luecke", thema:"passiv", satz:"Der Vertrag ist gestern unterschrieben ___.", loesung:[["worden"]],
    frage:"Passiv Perfekt — die klassische Falle:",
    regel:"Im Passiv Perfekt heißt das Partizip von „werden“ <b>worden</b>, nicht „geworden“.",
    gegenbeispiel:"„geworden“ nur im Aktiv: „Er ist Ingenieur geworden.“" , en:"In the passive perfect the participle of werden drops its ge- and becomes <b>worden</b>." },
  { typ:"luecke", thema:"passiv", satz:"Das Problem muss sofort gelöst ___.", loesung:[["werden"]],
    frage:"Passiv mit Modalverb:", regel:"Modalverb + Partizip II + <b>werden</b> (Infinitiv) am Ende." , en:"After a modal verb the passive ends with the infinitive <b>werden</b>, placed after the Partizip II." },
  { typ:"luecke", thema:"passiv", satz:"Das Haus ___ 1950 gebaut.", loesung:[["wurde"]],
    frage:"Passiv Präteritum:", regel:"Präteritum von werden = wurde. In geschriebenen Texten die übliche Vergangenheitsform." , en:"Passive Präteritum uses <b>wurde</b>, the normal past form for written German reports and descriptions." },
  { typ:"luecke", thema:"passiv", satz:"Der Brief wurde ___ meiner Kollegin geschrieben.", loesung:[["von"]],
    frage:"Wer hat gehandelt?", regel:"Die handelnde Person steht mit <b>von</b> + Dativ." , en:"The person who acts is marked by <b>von</b> plus Dativ, never by für or durch." },
  { typ:"luecke", thema:"passiv", satz:"Aktiv: „Man repariert die Maschine.“ → Passiv: Die Maschine ___ repariert.", loesung:[["wird"]],
    frage:"Umformen — „man“ verschwindet im Passiv:", regel:"Das Akkusativobjekt des Aktivsatzes wird im Passiv zum Subjekt. „man“ fällt weg." , en:"The accusative object of the active sentence becomes the passive subject, and <b>man</b> simply disappears." },
  { typ:"mc", thema:"passiv", frage:"Welcher Satz ist korrekt?",
    optionen:["Die E-Mail ist schon gesendet geworden.","Die E-Mail ist schon gesendet worden."],
    richtig:1, regel:"Passiv Perfekt → <b>worden</b>, immer ohne „ge-“." , en:"Passive perfect always uses <b>worden</b> without ge-; geworden only appears in active sentences." },
  { typ:"mc", thema:"passiv", frage:"Welcher Satz ist korrekt?",
    optionen:["Das Problem kann heute noch gelöst werden.","Das Problem kann heute noch gelöst wird."],
    richtig:0, regel:"Nach einem Modalverb steht der Infinitiv „werden“, nie eine konjugierte Form." , en:"After the modal kann the passive needs the infinitive <b>werden</b>; a conjugated wird cannot follow a modal." },
  { typ:"ordnen", thema:"passiv",
    frage:"Bau den Passivsatz.",
    woerter:["Ihre","Bewerbung","wird","von","unserem","Team","sorgfältig","geprüft."],
    loesung:"Ihre Bewerbung wird von unserem Team sorgfältig geprüft.",
    regel:"wird auf Position 2, Partizip „geprüft“ ganz am Ende. Der Handelnde mit „von“ + Dativ." , en:"<b>wird</b> sits in position two and the participle geprüft closes the sentence, with von marking the agent." },
  { typ:"luecke", thema:"passiv", satz:"Ich habe gehört, dass die Stelle schon besetzt ___ ___.", loesung:["worden","ist"],
    frage:"Passiv Perfekt im Nebensatz — zwei Lücken:",
    regel:"Im Nebensatz steht das Hilfsverb ganz hinten: „besetzt worden ist“." , en:"In a subordinate clause the auxiliary moves behind the participles: besetzt <b>worden ist</b>." },
  { typ:"luecke", thema:"passiv", satz:"In diesem Büro ___ nur Deutsch gesprochen.", loesung:[["wird"]],
    frage:"Unpersönliches Passiv:", regel:"Ohne echtes Subjekt: „wird gesprochen“ — sehr häufig auf Schildern und in Regeln." , en:"Impersonal passive has no real subject; German just says <b>wird gesprochen</b>, common on signs and rules." }
]},

/* ---------------------------------------------------------- */
"konjunktiv2": {
titel: "Konjunktiv II",
kurz: "Einstufung: 0/3 — aber du warst nah dran: „Können“ statt „Könnten“",
konzept: {
  titel: "Konjunktiv II — höflich sein und Irreales ausdrücken",
  de: "<p>Du brauchst ihn für <b>zwei</b> Dinge:</p>" +
      "<p><b>1. Höflichkeit</b> — im Brief, im Gespräch, in der Prüfung: <i>Könnten Sie …? / Ich hätte gern …</i><br>" +
      "<b>2. Irreales</b> — etwas, das nicht real ist: <i>Wenn ich Zeit hätte, würde ich …</i></p>" +
      "<p>Nur wenige Verben haben eine eigene Form. Alle anderen bauen mit <b>würde + Infinitiv</b>.</p>",
  tabelle: {
    kopf: ["Verb", "Konjunktiv II", "Beispiel"],
    zeilen: [
      ["haben", "<b>hätte</b>", "Wenn ich mehr Zeit <b>hätte</b>, …"],
      ["sein", "<b>wäre</b>", "Das <b>wäre</b> super."],
      ["können", "<b>könnte</b> ⚠", "<b>Könnten</b> Sie mir helfen?"],
      ["müssen", "<b>müsste</b>", "Ich <b>müsste</b> eigentlich lernen."],
      ["werden", "<b>würde</b>", "Ich <b>würde</b> gern kommen."],
      ["alle anderen", "würde + Infinitiv", "Ich <b>würde</b> mehr <b>lesen</b>."]
    ]
  },
  regel: "Der Unterschied zum Präsens ist oft nur ein Umlaut oder ein „-t“: kann → könnte, muss → müsste, hat → hätte, ist → wäre. Genau da hast du im Test die Punkte verloren.",
  beispiele: [
    "Vergangenheit irreal: <b>hätte / wäre + Partizip II</b> → Wenn ich das gewusst <b>hätte</b>, <b>wäre</b> ich früher gekommen.",
    "Höflich statt direkt: „Ich <b>will</b> einen Termin“ → „Ich <b>hätte gern</b> einen Termin.“ <span class='en'>(Prüfungsrelevant!)</span>",
    "Vorschlag: „Wir <b>könnten</b> uns am Freitag treffen.“"
  ],
  en: "Konjunktiv II does two jobs: politeness (Könnten Sie…? / Ich hätte gern…) and unreal situations (Wenn ich Zeit hätte…). Only a handful of verbs have their own form — hätte, wäre, könnte, müsste, würde. Everything else uses würde + infinitive. The difference from the present tense is often just an umlaut, which is exactly where you lost points."
},
items: [
  { typ:"luecke", thema:"konjunktiv2", satz:"___ Sie mir bitte kurz helfen?", loesung:[["Könnten","könnten","Würden","würden"]],
    frage:"Höfliche Bitte — nicht „Können“:",
    regel:"„Können Sie…?“ ist eine echte Frage nach Fähigkeit. „<b>Könnten</b> Sie…?“ ist die höfliche Bitte. Ein Umlaut plus „-t“.",
    gegenbeispiel:"Im Brief immer Konjunktiv II — das erwartet telc." , en:"Können Sie asks whether you are able; <b>Könnten</b> Sie is the polite request. Umlaut plus -t." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Wenn ich mehr Zeit ___, würde ich mehr lesen.", loesung:[["hätte"]],
    frage:"Irreale Bedingung:", regel:"„habe“ ist real, „<b>hätte</b>“ ist irreal. Die Bedingung ist nicht erfüllt." , en:"The wenn-clause sets an unreal condition, so it needs <b>hätte</b>, not the real form habe." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Das ___ wirklich super!", loesung:[["wäre"]],
    frage:"Von „sein“:", regel:"sein → <b>wäre</b>. „Das ist super“ = Tatsache; „Das wäre super“ = Vorstellung." , en:"sein becomes <b>wäre</b> in Konjunktiv II; it marks an imagined situation rather than a fact." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Wenn ich das gewusst ___, ___ ich früher gekommen.", loesung:["hätte","wäre"],
    frage:"Vergangenheit irreal — zwei Lücken:",
    regel:"Konjunktiv II der Vergangenheit = <b>hätte</b>/<b>wäre</b> + Partizip II. „kommen“ nimmt „wäre“ (Bewegungsverb)." , en:"Past Konjunktiv II is hätte or wäre plus Partizip II; kommen is a motion verb, so <b>wäre</b>." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Ich ___ gern einen Termin für nächste Woche.", loesung:[["hätte"]],
    frage:"Höflicher Wunsch:", regel:"„Ich hätte gern …“ — die höfliche Standardformel. Nie „Ich will …“ im formellen Kontext." , en:"<b>Ich hätte gern</b> is the fixed polite formula; Ich will sounds blunt in formal German." },
  { typ:"luecke", thema:"konjunktiv2", satz:"An deiner Stelle ___ ich mit dem Chef sprechen.", loesung:[["würde"]],
    frage:"Ratschlag geben:", regel:"„An deiner Stelle würde ich …“ = wenn ich du wäre. Standardformel für Ratschläge." , en:"An deiner Stelle plus <b>würde</b> is the standard advice pattern, meaning if I were you." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Ich ___ eigentlich mehr für die Prüfung lernen.", loesung:[["müsste","sollte"]],
    frage:"Etwas, das man tun sollte, aber nicht tut:", regel:"müssen → <b>müsste</b>, sollen → <b>sollte</b>." , en:"müssen and sollen become <b>müsste</b> and <b>sollte</b>, marking what you ought to do but do not." },
  { typ:"mc", thema:"konjunktiv2", frage:"Welcher Satz ist im formellen Brief richtig?",
    optionen:["Ich will einen früheren Termin.","Ich hätte gern einen früheren Termin.","Ich würde gern einen früheren Termin haben."],
    richtig:1, regel:"„Ich hätte gern“ ist am kürzesten und am höflichsten. Option 3 ist auch korrekt, aber umständlich.",
    gegenbeispiel:"„Ich will“ wirkt im Deutschen unhöflich — vermeide es im Brief komplett." , en:"<b>Ich hätte gern</b> is the shortest polite option; the würde version is correct but clumsy." },
  { typ:"mc", thema:"konjunktiv2", frage:"Welcher Satz ist korrekt?",
    optionen:["Wenn ich reich wäre, würde ich viel reisen.","Wenn ich reich wäre, würde ich viel reisen würde."],
    richtig:0, regel:"Nur einmal „würde“ pro Satzteil. Im wenn-Satz steht die eigene Form „wäre“." , en:"Use <b>würde</b> only once, in the main clause; the wenn-clause takes its own form <b>wäre</b>." },
  { typ:"konjugation", thema:"konjunktiv2",
    frage:"Ergänze die Konjunktiv-II-Formen.",
    kopf:["Verb (Präsens)","Konjunktiv II (ich-Form)"],
    zeilen:[["ich habe","hätte"],["ich bin",["wäre"]],["ich kann",["könnte"]],["ich muss",["müsste"]],["ich werde",["würde"]]],
    regel:"Fast immer: Umlaut plus „-e“. Diese fünf Formen decken 90 % des Bedarfs ab." , en:"Most Konjunktiv II forms are just umlaut plus -e: hätte, wäre, könnte, müsste, <b>würde</b>." },
  { typ:"ordnen", thema:"konjunktiv2",
    frage:"Bau die höfliche Bitte.",
    woerter:["Könnten","Sie","mir","bitte","die","Unterlagen","zuschicken?"],
    loesung:"Könnten Sie mir bitte die Unterlagen zuschicken?",
    regel:"Frage → Verb auf Position 1. „bitte“ steht meist nach dem Dativobjekt." , en:"In a question the verb comes first, and <b>bitte</b> normally follows the dative object mir." },
  { typ:"luecke", thema:"konjunktiv2", satz:"Wir ___ uns am Freitag treffen — passt dir das?", loesung:[["könnten"]],
    frage:"Vorschlag machen:", regel:"„Wir könnten …“ ist der freundliche Vorschlag. Prüfungsrelevant für die mündliche Prüfung." , en:"<b>Wir könnten</b> is the polite way to suggest something, and examiners listen for it in the oral exam." }
]},

/* ---------------------------------------------------------- */
"perfekt-praeteritum": {
titel: "Zeitformen",
kurz: "Lehrerliste Nr. 3 · Einstufung: 0/2 — Perfekt, Präteritum und Plusquamperfekt",
konzept: {
  titel: "Welche Vergangenheit wann?",
  de: "<p>Deutsch hat zwei Vergangenheitsformen mit fast gleicher Bedeutung — der Unterschied ist die <b>Textsorte</b>:</p>" +
      "<p><b>Perfekt</b> (ich habe gemacht) → gesprochene Sprache, E-Mails an Freunde, Erzählen im Gespräch.<br>" +
      "<b>Präteritum</b> (ich machte) → geschriebene Sprache: Zeitung, Bericht, Literatur, formeller Brief.</p>" +
      "<p><b>Ausnahme:</b> sein, haben und die Modalverben stehen fast <b>immer</b> im Präteritum — auch beim Sprechen: " +
      "<i>ich war, ich hatte, ich konnte, ich musste, ich wollte</i>.</p>",
  tabelle: {
    kopf: ["Verbtyp", "Perfekt mit", "Beispiel"],
    zeilen: [
      ["die meisten Verben", "<b>haben</b>", "Ich <b>habe</b> gearbeitet."],
      ["Bewegung (fahren, gehen, fliegen, kommen, laufen)", "<b>sein</b>", "Ich <b>bin</b> nach Köln gefahren."],
      ["Zustandsänderung (aufstehen, einschlafen, sterben, werden)", "<b>sein</b>", "Ich <b>bin</b> früh aufgestanden."],
      ["sein / bleiben / passieren", "<b>sein</b>", "Ich <b>bin</b> dort gewesen."]
    ]
  },
  regel: "Faustregel für „sein“: Bewegt sich etwas von A nach B, oder verändert sich ein Zustand? → sein. Sonst → haben.",
  beispiele: [
    "Gespräch: „Gestern <b>bin</b> ich nach Köln <b>gefahren</b>.“",
    "Bericht: „Der Psychologe <b>schaute</b> zahlreiche Praxistests <b>an</b>.“ <span class='en'>(Präteritum — Textsorte!)</span>",
    "Immer Präteritum: „Ich <b>war</b> müde und <b>hatte</b> keine Zeit.“ <span class='en'>(nicht: „bin gewesen“, „habe gehabt“)</span>"
  ],
  en: "Both tenses mean the same thing; the difference is register. Perfekt for speech and informal writing, Präteritum for written reports, news and literature. But sein, haben and the modal verbs use Präteritum almost always, even when speaking. For the perfect auxiliary: movement from A to B or a change of state takes sein, everything else takes haben."
},
items: [
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Gestern ___ ich nach Köln gefahren.", loesung:[["bin"]],
    frage:"Perfekt mit „sein“ oder „haben“?", regel:"„fahren“ ist ein Bewegungsverb → Perfekt mit <b>sein</b>." , en:"fahren is a verb of motion, so its Perfekt is built with <b>sein</b>, not haben." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Ich ___ den ganzen Tag am Projekt gearbeitet.", loesung:[["habe"]],
    frage:"", regel:"„arbeiten“ ist keine Bewegung und keine Zustandsänderung → <b>haben</b>." , en:"arbeiten involves no motion and no change of state, so the Perfekt takes <b>haben</b>." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Er ___ Ingenieur, nachdem er studiert hatte.", loesung:[["wurde"]],
    frage:"Präteritum von „werden“:", regel:"werden → <b>wurde</b>. Nach „nachdem“ steht Plusquamperfekt: „hatte studiert“." , en:"Präteritum of werden is <b>wurde</b>; nachdem pushes the earlier action into Plusquamperfekt, hatte studiert." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Heute Morgen ___ ich sehr früh aufgestanden.", loesung:[["bin"]],
    frage:"", regel:"„aufstehen“ ist eine Zustandsänderung → <b>sein</b>." , en:"aufstehen is a change of state, so it forms the Perfekt with <b>sein</b>." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Ich ___ gestern sehr müde und ___ keine Zeit zum Lernen.", loesung:[["war"],["hatte"]],
    frage:"Zwei Lücken — welche Form ist üblich?",
    regel:"„sein“ und „haben“ stehen fast immer im Präteritum: <b>war</b>, <b>hatte</b>. „bin gewesen“ und „habe gehabt“ klingen falsch.",
    gegenbeispiel:"Das gilt auch beim Sprechen — das ist die wichtigste Ausnahme." , en:"sein and haben stay in the Präteritum even when speaking: <b>war</b> and <b>hatte</b>, not bin gewesen." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Als Kind ___ ich sehr gern Fußball spielen.", loesung:[["wollte","konnte","durfte"]],
    frage:"Modalverb in der Vergangenheit:", regel:"Modalverben stehen fast immer im Präteritum: wollte, konnte, musste, durfte." , en:"Modal verbs almost always appear in the Präteritum: wollte, konnte, musste, <b>durfte</b>, not the Perfekt." },
  { typ:"mc", thema:"perfekt-praeteritum", frage:"Welche Form passt in einen <b>Zeitungsbericht</b>?",
    optionen:["Der Psychologe hat zahlreiche Praxistests angeschaut.","Der Psychologe schaute zahlreiche Praxistests an."],
    richtig:1, regel:"Geschriebene Texte (Zeitung, Bericht, Erzählung) nutzen Präteritum. Das erkennst du in telc Leseverstehen sofort." , en:"Written texts like news reports use the Präteritum, so <b>schaute an</b> fits here." },
  { typ:"mc", thema:"perfekt-praeteritum", frage:"Welche Form passt in ein <b>Gespräch mit Freunden</b>?",
    optionen:["Ich fuhr letztes Wochenende nach Düsseldorf.","Ich bin letztes Wochenende nach Düsseldorf gefahren."],
    richtig:1, regel:"Im Gespräch nimmt man Perfekt. „Ich fuhr“ klingt wie aus einem Roman." , en:"Spoken German uses the Perfekt; <b>ich fuhr</b> sounds like a line from a novel." },
  { typ:"mc", thema:"perfekt-praeteritum", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich habe gestern zu Hause geblieben.","Ich bin gestern zu Hause geblieben."],
    richtig:1, regel:"„bleiben“ nimmt immer <b>sein</b> — obwohl keine Bewegung stattfindet. Eine der Ausnahmen, die man lernen muss." , en:"<b>bleiben</b> takes sein in the Perfekt although nothing moves; it is an exception to memorise." },
  { typ:"konjugation", thema:"perfekt-praeteritum",
    frage:"Ergänze das Perfekt in der ich-Form (2 Wörter, z. B. „habe gemacht“).",
    kopf:["Verb","Perfekt (ich)"],
    zeilen:[["arbeiten","habe gearbeitet"],["fahren",["bin gefahren"]],["sehen",["habe gesehen"]],["aufstehen",["bin aufgestanden"]],["bleiben",["bin geblieben"]]],
    regel:"Bewegung oder Zustandsänderung → sein. Alles andere → haben." , en:"Motion or change of state takes sein, everything else haben. <b>bleiben</b> is the odd exception." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Nachdem ich die Hausaufgaben gemacht ___, sah ich fern.", loesung:[["hatte"]],
    frage:"Plusquamperfekt — die Vor-Vergangenheit:",
    regel:"Nach „nachdem“ steht das Plusquamperfekt: hatte/war + Partizip II. Es zeigt, was ZUERST passiert ist.",
    en:"nachdem forces the past perfect: the earlier event takes hatte/war + participle." },
  { typ:"luecke", thema:"perfekt-praeteritum", satz:"Nachdem sie angekommen ___, rief sie mich an.", loesung:[["war"]],
    frage:"Plusquamperfekt mit „sein“:",
    regel:"„ankommen“ ist Bewegung → Plusquamperfekt mit <b>war</b>: war angekommen.", en:"Movement verb → war + participle." },
  { typ:"mc", thema:"perfekt-praeteritum",
    frage:"Welche Kombination ist bei „nachdem“ richtig?",
    optionen:["nachdem + Plusquamperfekt, danach Präteritum/Perfekt","nachdem + Präsens, danach Plusquamperfekt"],
    richtig:0, regel:"Das frühere Ereignis (nachdem-Satz) steht eine Zeitstufe weiter zurück als das spätere.",
    en:"The nachdem-clause sits one tense step earlier than the main clause." }
]},

/* ---------------------------------------------------------- */
"infinitiv-zu": {
titel: "Infinitiv mit „zu“",
kurz: "Lehrerliste Nr. 2 — wann „zu“ vor den Infinitiv gehört und wann nicht",
konzept: {
  titel: "Infinitiv mit „zu“ — die Regel und die drei Ausnahmen",
  de: "<p>Nach vielen Verben und Ausdrücken folgt ein Infinitiv mit <b>zu</b>: " +
      "<i>Ich versuche, jeden Tag <b>zu lernen</b>.</i></p>" +
      "<p><b>Kein „zu“</b> nach: <b>Modalverben</b> (ich muss lernen), " +
      "<b>Wahrnehmungsverben</b> (ich sehe/höre ihn kommen), " +
      "<b>gehen/fahren/lassen/bleiben</b> (ich gehe einkaufen) und beim <b>Futur</b> (ich werde lernen).</p>",
  tabelle: {
    kopf: ["Auslöser", "Beispiel"],
    zeilen: [
      ["Verben: versuchen, vorhaben, anfangen, aufhören, vergessen, hoffen, empfehlen", "Ich habe vor, die B2-Prüfung <b>zu machen</b>."],
      ["es ist + Adjektiv: wichtig, leicht, schwer, möglich", "Es ist wichtig, regelmäßig <b>zu üben</b>."],
      ["Nomen + haben: Lust, Zeit, Angst, die Möglichkeit", "Ich habe keine Zeit, lange <b>zu warten</b>."],
      ["Trennbares Verb ⚠", "Es ist schwer, früh <b>aufzustehen</b>. (zu in der Mitte!)"],
      ["um … zu (Ziel)", "Ich lerne Deutsch, <b>um</b> hier <b>zu arbeiten</b>."],
      ["ohne … zu / (an)statt … zu", "Er ging, <b>ohne</b> sich <b>zu verabschieden</b>."]
    ]
  },
  regel: "Bei trennbaren Verben wandert „zu“ ZWISCHEN Präfix und Stamm: aufstehen → aufZUstehen, anrufen → anZUrufen. Ein Wort, kein Leerzeichen.",
  beispiele: [
    "Ich hoffe, dich bald <b>wiederzusehen</b>.",
    "Vergiss nicht, die Übung <b>zu exportieren</b>!",
    "Er lernt jeden Abend, <b>um</b> die Prüfung <b>zu bestehen</b>."
  ],
  en: "Many verbs and expressions take zu + infinitive at the clause end. No zu after modal verbs, perception verbs (sehen/hören), gehen/lassen, or the future werde. With separable verbs, zu goes inside the verb: aufzustehen, anzurufen — written as one word."
},
items: [
  { typ:"luecke", thema:"infinitiv-zu", satz:"Ich habe keine Zeit, jeden Tag drei Stunden ___ lernen.", loesung:[["zu"]],
    frage:"", regel:"Nomen + haben (keine Zeit) → Infinitiv mit „zu“ am Satzende." , en:"A noun plus haben, like keine Zeit haben, triggers an infinitive with <b>zu</b> at the end." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"Es ist wichtig, jeden Morgen früh ___.", loesung:[["aufzustehen"]],
    frage:"Trennbares Verb — ein Wort:",
    regel:"„zu“ wandert zwischen Präfix und Stamm: auf + zu + stehen = <b>aufzustehen</b>.",
    gegenbeispiel:"Falsch: „zu aufstehen“ oder „auf zu stehen“." , en:"With separable verbs <b>zu</b> sits between prefix and stem, written as one word: aufzustehen." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"Vergiss nicht, mich morgen ___! (anrufen)", loesung:[["anzurufen"]],
    frage:"Noch ein trennbares Verb:", regel:"anrufen → an<b>zu</b>rufen. Ein Wort." , en:"anrufen splits around zu and stays one word: <b>anzurufen</b>, never zu anrufen." },
  { typ:"mc", thema:"infinitiv-zu", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich muss heute noch lernen.","Ich muss heute noch zu lernen."],
    richtig:0, regel:"Nach Modalverben steht NIE „zu“. Der Infinitiv steht nackt am Ende.",
    en:"Modal verbs never take zu." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"Ich lerne Deutsch, ___ in NRW arbeiten ___ können.", loesung:["um","zu"],
    frage:"Ziel/Absicht — zwei Lücken:",
    regel:"„um … zu“ drückt ein Ziel aus. „um“ direkt nach dem Komma, „zu“ vor dem Infinitiv.",
    en:"um…zu expresses purpose (in order to)." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"Er hat endlich aufgehört ___ rauchen.", loesung:[["zu"]],
    frage:"", regel:"aufhören + zu-Infinitiv: aufhören zu rauchen." , en:"aufhören takes a zu-infinitive, so <b>zu</b> stands before rauchen at the end." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"___ zu üben, schaut er den ganzen Abend Serien.", loesung:[["Statt","Anstatt"]],
    frage:"Alternative ausdrücken:", regel:"„(an)statt … zu“ = etwas anderes tun als erwartet.",
    en:"statt…zu = instead of doing." },
  { typ:"mc", thema:"infinitiv-zu", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich sehe ihn jeden Morgen zur Arbeit gehen.","Ich sehe ihn jeden Morgen zur Arbeit zu gehen."],
    richtig:0, regel:"Nach Wahrnehmungsverben (sehen, hören) steht der Infinitiv OHNE „zu“.",
    en:"Perception verbs take a bare infinitive." },
  { typ:"ordnen", thema:"infinitiv-zu",
    frage:"Bau den Satz.",
    woerter:["Es","ist","nicht","leicht,","alle","Endungen","richtig","zu","lernen."],
    loesung:"Es ist nicht leicht, alle Endungen richtig zu lernen.",
    regel:"„zu + Infinitiv“ steht ganz am Ende des Satzteils." , en:"The zu-infinitive closes the clause, so <b>zu lernen</b> stands right at the end." },
  { typ:"mc", thema:"infinitiv-zu", frage:"Er ging nach Hause, ohne sich ___ verabschieden. — Was fehlt?",
    optionen:["zu","—  (nichts)","für"], richtig:0,
    regel:"„ohne … zu“ + Infinitiv: ohne sich zu verabschieden.", en:"ohne…zu = without doing." },
  { typ:"luecke", thema:"infinitiv-zu", satz:"Ich habe vor, nächstes Jahr die telc-Prüfung ___ machen.", loesung:[["zu"]],
    frage:"", regel:"vorhaben + zu-Infinitiv. Der zu-Satz wird fast immer mit Komma abgetrennt." , en:"<b>vorhaben</b> is one of the verbs that needs a zu-infinitive, and the clause takes a comma." }
]},

/* ---------------------------------------------------------- */
"zweiteilige-konnektoren": {
titel: "Zweiteilige Konnektoren",
kurz: "Lehrerliste Nr. 4 — sowohl…als auch, weder…noch, je…desto & Co.",
konzept: {
  titel: "Zweiteilige Konnektoren — Paare, die zusammengehören",
  de: "<p>Diese Konnektoren kommen immer als <b>Paar</b>. telc liebt sie in den Sprachbausteinen: " +
      "meist steht ein Teil im Text und du musst den Partner finden.</p>",
  tabelle: {
    kopf: ["Paar", "Bedeutung", "Beispiel"],
    zeilen: [
      ["sowohl … als auch", "beides ✓✓", "Er spricht <b>sowohl</b> Englisch <b>als auch</b> Deutsch."],
      ["nicht nur … sondern auch", "beides, mit Steigerung", "Sie lernt <b>nicht nur</b> Grammatik, <b>sondern auch</b> Wortschatz."],
      ["weder … noch", "beides NICHT ✗✗", "Ich habe <b>weder</b> Zeit <b>noch</b> Lust."],
      ["entweder … oder", "eins von beiden", "<b>Entweder</b> lernst du jetzt, <b>oder</b> du fällst durch."],
      ["zwar … aber", "Zugeständnis + Einwand", "Der Kurs ist <b>zwar</b> anstrengend, <b>aber</b> er lohnt sich."],
      ["einerseits … andererseits", "zwei Seiten abwägen", "<b>Einerseits</b> will ich sparen, <b>andererseits</b> brauche ich Bücher."],
      ["je … desto/umso ⚠", "Vergleich: mehr X → mehr Y", "<b>Je</b> mehr ich übe, <b>desto</b> besser werde ich."]
    ]
  },
  regel: "„je … desto“ hat eine Sonder-Wortstellung: je + Komparativ + NEBENSATZ (Verb am Ende), Komma, desto + Komparativ + Verb + Subjekt. → Je mehr ich ÜBE, desto besser WERDE ich.",
  beispiele: [
    "„weder … noch“ ist schon negativ — <b>kein</b> zusätzliches „nicht“! → Ich habe weder Zeit noch Lust.",
    "Je länger du <b>wartest</b>, desto schwerer <b>wird</b> es.",
    "Merke: „einerseits … andererseits“ ist perfekt für die mündliche Prüfung (Vor- und Nachteile abwägen)."
  ],
  en: "These connectors always come in pairs — telc loves testing the missing partner. Special word order with je…desto: the je-part is a subordinate clause (verb final), the desto-part inverts (verb before subject). And weder…noch already contains the negation — never add nicht."
},
items: [
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"Er spricht ___ Englisch ___ auch Deutsch.", loesung:["sowohl","als"],
    frage:"Beides trifft zu:", regel:"sowohl … als auch. Die drei Wörter „als auch“ bleiben immer zusammen." , en:"Both parts apply, so use <b>sowohl</b> ... <b>als auch</b>; the pair <b>als auch</b> never splits." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"Ich habe heute ___ Zeit ___ Lust auf Hausaufgaben.", loesung:["weder","noch"],
    frage:"Beides trifft NICHT zu:",
    regel:"weder … noch — die doppelte Verneinung. Kein zusätzliches „nicht“!",
    gegenbeispiel:"Falsch: „Ich habe nicht weder Zeit noch Lust.“" , en:"<b>weder</b> ... <b>noch</b> already carries the negation, so an extra nicht would negate twice and is wrong." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"___ lernst du jeden Tag ein bisschen, ___ du machst am Ende einen Nacht-Marathon.", loesung:["Entweder","oder"],
    frage:"Eins von beiden:", regel:"entweder … oder. Nach „entweder“ am Satzanfang folgt oft das Verb: „Entweder lernst du …“." , en:"<b>Entweder</b> in first position pushes the verb straight after it; <b>oder</b> then opens a normal main clause." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"Je mehr ich übe, ___ besser werde ich.", loesung:[["desto","umso"]],
    frage:"", regel:"je … desto (oder: je … umso — beides richtig)." , en:"After the je clause the second half starts with <b>desto</b> or <b>umso</b>; both are equally correct." },
  { typ:"ordnen", thema:"zweiteilige-konnektoren",
    frage:"Bau den je-desto-Satz. Achte auf die Verbposition in beiden Teilen!",
    woerter:["Je","mehr","du","liest,","desto","größer","wird","dein","Wortschatz."],
    loesung:"Je mehr du liest, desto größer wird dein Wortschatz.",
    regel:"je-Teil: Verb am Ende („liest“). desto-Teil: Komparativ, dann sofort das Verb („wird“)." , en:"The je clause sends its verb to the end; after <b>desto</b> comes the comparative, then immediately the verb." },
  { typ:"mc", thema:"zweiteilige-konnektoren", frage:"Welcher Satz ist korrekt?",
    optionen:["Je öfter ich wiederhole, desto sicherer werde ich.","Je öfter ich wiederhole, desto ich werde sicherer."],
    richtig:0, regel:"Nach „desto + Komparativ“ kommt SOFORT das Verb, dann das Subjekt.",
    en:"desto + comparative + verb + subject." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"Sie lernt nicht nur Grammatik, ___ ___ viele Redemittel.", loesung:["sondern","auch"],
    frage:"", regel:"nicht nur … sondern auch. Vor „sondern“ steht immer ein Komma." , en:"<b>nicht nur</b> pairs with <b>sondern auch</b>, and a comma always stands before <b>sondern</b>." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"___ ist der Kurs anstrengend, ___ er macht wirklich Spaß.", loesung:["Zwar","aber"],
    frage:"Zugeständnis + Einwand:", regel:"zwar … aber — der konzessive Klassiker aus Tag 2." , en:"<b>Zwar</b> concedes the point and <b>aber</b> brings the objection; both halves stay main clauses." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"___ möchte ich mehr Sport machen, ___ fehlt mir abends die Energie.", loesung:["Einerseits","andererseits"],
    frage:"Zwei Seiten abwägen:", regel:"einerseits … andererseits — Gold wert in der mündlichen Prüfung (Vor-/Nachteile)." , en:"Weighing two sides: <b>einerseits</b> opens the first view, <b>andererseits</b> the opposing one." },
  { typ:"luecke", thema:"zweiteilige-konnektoren", satz:"Je ___ ich schlafe, desto müder bin ich am nächsten Tag.", loesung:[["weniger"]],
    frage:"Komparativ einsetzen:", regel:"Nach „je“ steht immer ein Komparativ: je weniger, je mehr, je öfter." , en:"<b>je</b> always takes a comparative, so it must be <b>weniger</b> and never plain wenig." },
  { typ:"mc", thema:"zweiteilige-konnektoren", frage:"„Ich mag weder Kaffee noch Tee.“ — Was bedeutet das?",
    optionen:["Ich mag beides nicht.","Ich mag eins von beiden.","Ich mag beides."],
    richtig:0, regel:"weder … noch verneint BEIDE Teile.", en:"weder…noch negates both items." }
]},

/* ---------------------------------------------------------- */
"temporalsaetze": {
titel: "Temporalsätze",
kurz: "Lehrerliste Nr. 5 — bevor, nachdem, während, seit, bis, als/wenn",
konzept: {
  titel: "Temporalsätze — wann passiert was?",
  de: "<p>Alle Temporalkonnektoren leiten <b>Nebensätze</b> ein → Verb ans Ende. " +
      "Die Kunst ist, den richtigen zu wählen:</p>",
  tabelle: {
    kopf: ["Konnektor", "Bedeutung", "Beispiel"],
    zeilen: [
      ["<b>bevor</b>", "vorher", "Ich frühstücke, <b>bevor</b> ich zur Arbeit gehe."],
      ["<b>nachdem</b> ⚠", "danach (+ Plusquamperfekt!)", "<b>Nachdem</b> ich gegessen hatte, ging ich los."],
      ["<b>während</b>", "gleichzeitig", "<b>Während</b> ich koche, höre ich Podcasts."],
      ["<b>seit / seitdem</b>", "von damals bis jetzt", "<b>Seit</b> ich in NRW wohne, lerne ich Deutsch."],
      ["<b>bis</b>", "bis zu einem Zeitpunkt", "Ich warte, <b>bis</b> der Kurs beginnt."],
      ["<b>als</b> ⚠", "EINMAL in der Vergangenheit", "<b>Als</b> ich ein Kind war, …"],
      ["<b>wenn</b>", "wiederholt oder Zukunft", "Immer <b>wenn</b> ich Zeit habe, … / <b>Wenn</b> der Kurs endet, …"]
    ]
  },
  regel: "als vs. wenn — der ewige Fehler: „als“ nur für EINMALIGE Ereignisse in der Vergangenheit. Alles Wiederholte („immer wenn“) und alles in Gegenwart/Zukunft nimmt „wenn“.",
  beispiele: [
    "<b>Als</b> ich 2024 nach Deutschland kam, konnte ich kein Deutsch. <span class='en'>(einmalig, Vergangenheit)</span>",
    "<b>Wenn</b> ich Vokabeln lerne, benutze ich Karteikarten. <span class='en'>(jedes Mal)</span>",
    "„seit“ + Präsens: Seit ich hier <b>wohne</b>, … — das Deutsche bleibt im Präsens, anders als Englisch!"
  ],
  en: "All of these start subordinate clauses (verb final). The classic trap is als vs. wenn: als only for one-time past events; wenn for repeated events and the future. And after seit, German uses the present tense where English uses the perfect: Seit ich hier wohne = since I have been living here."
},
items: [
  { typ:"mc", thema:"temporalsaetze", frage:"___ ich ein Kind war, habe ich viel Cricket gespielt.",
    optionen:["Als","Wenn","Während"], richtig:0,
    regel:"Einmalige Phase in der Vergangenheit → „als“. „Wenn“ wäre hier der klassische Fehler.",
    en:"One-time past → als." },
  { typ:"luecke", thema:"temporalsaetze", satz:"Immer ___ ich eine Übung schaffe, exportiere ich den Fortschritt.", loesung:[["wenn"]],
    frage:"Wiederholt:", regel:"„immer wenn“ = jedes Mal → wenn, nie als." , en:"Repeated events take <b>wenn</b>; <b>als</b> only fits one single completed event in the past." },
  { typ:"luecke", thema:"temporalsaetze", satz:"___ ich in Deutschland wohne, lerne ich Deutsch.", loesung:[["Seit","Seitdem"]],
    frage:"Von damals bis heute:",
    regel:"seit/seitdem + Präsens! „Seit ich hier wohne“ — nicht „gewohnt habe“.",
    gegenbeispiel:"Englisch sagt „since I have lived“, Deutsch bleibt im Präsens." , en:"Something running from the past into now stays in Präsens after <b>seit</b>, unlike the English present perfect." },
  { typ:"luecke", thema:"temporalsaetze", satz:"Ich bleibe im Kursraum, ___ der Lehrer alle Fragen beantwortet hat.", loesung:[["bis"]],
    frage:"", regel:"„bis“ = bis zu diesem Zeitpunkt." , en:"<b>bis</b> names the end point of the waiting, and its clause keeps the verb at the end." },
  { typ:"luecke", thema:"temporalsaetze", satz:"Nachdem er die B1-Prüfung bestanden ___, begann er mit B2.", loesung:[["hatte"]],
    frage:"Achtung Zeitform:", regel:"nachdem + Plusquamperfekt: hatte bestanden. Das frühere Ereignis steht eine Zeitstufe zurück." , en:"<b>nachdem</b> shifts the earlier event one tense back, so Plusquamperfekt <b>hatte bestanden</b> is needed." },
  { typ:"luecke", thema:"temporalsaetze", satz:"___ ich koche, höre ich deutsche Podcasts.", loesung:[["Während"]],
    frage:"Gleichzeitig:", regel:"„während“ = zwei Dinge passieren zur selben Zeit." , en:"<b>während</b> means both actions run at the same time; the fronted clause puts <b>höre</b> after the comma." },
  { typ:"luecke", thema:"temporalsaetze", satz:"Wiederhole die Vokabeln, ___ du schlafen gehst.", loesung:[["bevor"]],
    frage:"Vorher:", regel:"„bevor“ + Präsens. Kein „zu“, kein Infinitiv — ein normaler Nebensatz." , en:"<b>bevor</b> is an ordinary subordinating conjunction with Präsens, not the English before plus -ing or zu." },
  { typ:"ordnen", thema:"temporalsaetze",
    frage:"Bau den Satz — Nebensatz zuerst!",
    woerter:["Bevor","ich","zur","Arbeit","gehe,","trinke","ich","einen","Kaffee."],
    loesung:"Bevor ich zur Arbeit gehe, trinke ich einen Kaffee.",
    regel:"Nebensatz vorne → Hauptsatz beginnt mit dem Verb „trinke“." , en:"The sub-clause fills position one, so the main clause starts with the verb <b>trinke</b>, then the subject." },
  { typ:"mc", thema:"temporalsaetze", frage:"Ich lerne ___ zwei Jahren Deutsch. — Was passt?",
    optionen:["seit","vor","bis"], richtig:0,
    regel:"„seit“ = es läuft noch. „vor zwei Jahren“ wäre ein Zeitpunkt in der Vergangenheit (abgeschlossen).",
    en:"seit = ongoing; vor = ago (finished)." },
  { typ:"mc", thema:"temporalsaetze", frage:"Welcher Satz ist korrekt?",
    optionen:["Wenn ich gestern ankam, war es dunkel.","Als ich gestern ankam, war es dunkel."],
    richtig:1, regel:"Gestern angekommen = einmalig + Vergangenheit → als.", en:"One-time past event → als." }
]},

/* ---------------------------------------------------------- */
"modalverben": {
titel: "Modalverben",
kurz: "Lehrerliste Nr. 6 — Bedeutungen, Verneinung und Vergangenheit",
konzept: {
  titel: "Modalverben — sechs Verben, die alles steuern",
  de: "<p>Das Modalverb steht auf Position 2, der Infinitiv ganz am <b>Ende</b>. " +
      "Die Formen kennst du — die Prüfung testet die <b>Bedeutungen</b>:</p>",
  tabelle: {
    kopf: ["Verb", "Bedeutung", "Präteritum (üblich!)"],
    zeilen: [
      ["müssen", "Pflicht, Notwendigkeit", "musste"],
      ["sollen", "Auftrag/Empfehlung von außen", "sollte"],
      ["dürfen", "Erlaubnis", "durfte"],
      ["können", "Fähigkeit, Möglichkeit", "konnte"],
      ["wollen", "eigener starker Wille", "wollte"],
      ["mögen / möchten", "gern haben / höflicher Wunsch", "mochte (möchten hat kein Präteritum → wollte)"]
    ]
  },
  regel: "Die Verneinungs-Falle: „nicht müssen“ = es ist NICHT NÖTIG (aber erlaubt). „nicht dürfen“ = es ist VERBOTEN. Das sind völlig verschiedene Dinge!",
  beispiele: [
    "Du <b>musst nicht</b> kommen. = Du kannst, aber es ist keine Pflicht. <span class='en'>(don't have to)</span>",
    "Du <b>darfst nicht</b> rauchen. = Verbot. <span class='en'>(must not)</span>",
    "Der Arzt sagt, ich <b>soll</b> mehr schlafen. <span class='en'>(Empfehlung von außen)</span>",
    "Im Nebensatz: …, dass ich morgen arbeiten <b>muss</b>. <span class='en'>(Modalverb ganz am Ende)</span>"
  ],
  en: "Modal verb in position 2, infinitive at the end. The exam tests meanings, especially the negation trap: nicht müssen = don't have to (it's optional), but nicht dürfen = must not (it's forbidden). English speakers mix these up constantly because \"must not\" looks like \"muss nicht\"."
},
items: [
  { typ:"luecke", thema:"modalverben", satz:"Hier ___ man nicht rauchen — das ist verboten.", loesung:[["darf"]],
    frage:"Verbot:", regel:"Verbot = nicht dürfen. „muss nicht“ hieße nur: es ist nicht nötig.",
    gegenbeispiel:"Englisch „must not“ ≠ deutsch „muss nicht“! Falscher Freund Nummer eins." , en:"Prohibition is <b>nicht dürfen</b>; <b>muss nicht</b> would only mean it is not necessary." },
  { typ:"luecke", thema:"modalverben", satz:"Du ___ nicht kommen, wenn du keine Zeit hast — es ist freiwillig.", loesung:[["musst"]],
    frage:"Keine Pflicht:", regel:"nicht müssen = nicht nötig. Die Sache ist erlaubt, aber optional." , en:"<b>nicht müssen</b> means no obligation: coming is still allowed, it is simply optional." },
  { typ:"luecke", thema:"modalverben", satz:"Als Kind ___ ich immer um acht ins Bett gehen.", loesung:[["musste"]],
    frage:"Vergangenheit:", regel:"Modalverben stehen in der Vergangenheit fast immer im Präteritum: musste." , en:"Modal verbs use Präteritum for the past, so <b>musste</b> rather than habe gemusst." },
  { typ:"luecke", thema:"modalverben", satz:"Der Arzt sagt, ich ___ mehr Sport machen.", loesung:[["soll","sollte"]],
    frage:"Empfehlung von außen:", regel:"„sollen“ = jemand anderes will es / empfiehlt es. Der eigene Wille wäre „wollen“." , en:"<b>sollen</b> reports someone else's advice or wish; your own intention would be <b>wollen</b>." },
  { typ:"luecke", thema:"modalverben", satz:"In der Bibliothek ___ man leise sprechen — es ist erlaubt, aber nur leise.", loesung:[["darf"]],
    frage:"Erlaubnis:", regel:"dürfen = Erlaubnis haben." , en:"<b>dürfen</b> marks permission: speaking is allowed here, only the volume is restricted." },
  { typ:"ordnen", thema:"modalverben",
    frage:"Bau den Satz — wohin mit dem Infinitiv?",
    woerter:["Ich","muss","heute","noch","viele","Vokabeln","lernen."],
    loesung:"Ich muss heute noch viele Vokabeln lernen.",
    regel:"Modalverb Position 2, Infinitiv „lernen“ ganz am Ende." , en:"The modal verb sits in position two and the infinitive <b>lernen</b> waits at the very end." },
  { typ:"luecke", thema:"modalverben", satz:"Er sagt, dass er morgen länger arbeiten ___.", loesung:[["muss"]],
    frage:"Modalverb im Nebensatz:", regel:"Im Nebensatz: Infinitiv + Modalverb ganz am Ende → „arbeiten muss“." , en:"In a Nebensatz the conjugated modal goes behind the infinitive, giving the ending <b>arbeiten muss</b>." },
  { typ:"mc", thema:"modalverben", frage:"Was ist höflicher im Restaurant?",
    optionen:["Ich will einen Kaffee.","Ich möchte einen Kaffee."],
    richtig:1, regel:"„möchten“ ist der höfliche Wunsch. „wollen“ klingt fordernd — im Service-Kontext unhöflich.",
    en:"möchten is the polite want." },
  { typ:"mc", thema:"modalverben", frage:"„Sie kann sehr gut Deutsch.“ — Was drückt „können“ hier aus?",
    optionen:["Fähigkeit","Erlaubnis","Pflicht"], richtig:0,
    regel:"können = Fähigkeit. (Der Infinitiv „sprechen“ darf bei Sprachen sogar wegfallen.)" , en:"<b>können</b> here means ability, and with languages the infinitive <b>sprechen</b> can simply be left out." },
  { typ:"mc", thema:"modalverben", frage:"Welcher Satz ist im Perfekt korrekt?",
    optionen:["Ich habe gestern lange arbeiten müssen.","Ich habe gestern lange gemusst arbeiten."],
    richtig:0, regel:"Modalverb im Perfekt = doppelter Infinitiv am Ende: „arbeiten müssen“. (Deshalb nimmt man lieber Präteritum: „ich musste arbeiten“.)",
    en:"Perfect of modals uses a double infinitive — which is why everyone prefers Präteritum." }
]},

/* ---------------------------------------------------------- */
"werden": {
titel: "„werden“ — drei Jobs, ein Verb",
kurz: "Lehrerliste Nr. 7 — Vollverb, Futur und Passiv auseinanderhalten",
konzept: {
  titel: "„werden“ — welcher Job liegt vor?",
  de: "<p>„werden“ hat drei völlig verschiedene Aufgaben. Schau ans <b>Satzende</b> — dort steht die Antwort:</p>",
  tabelle: {
    kopf: ["Job", "Am Satzende steht …", "Beispiel"],
    zeilen: [
      ["<b>Vollverb</b> = „to become“", "Nomen oder Adjektiv", "Er wird <b>Ingenieur</b>. / Es wird <b>kalt</b>."],
      ["<b>Futur I</b>", "Infinitiv", "Ich werde dich morgen <b>anrufen</b>."],
      ["<b>Passiv</b>", "Partizip II", "Der Brief wird gerade <b>geschrieben</b>."]
    ]
  },
  regel: "Merksatz: Nomen/Adjektiv → become. Infinitiv → Zukunft. Partizip II → Passiv. Und im Perfekt: Vollverb = geworden, Passiv = worden.",
  beispiele: [
    "Sie ist Lehrerin <b>geworden</b>. <span class='en'>(Vollverb → geworden)</span>",
    "Die E-Mail ist gesendet <b>worden</b>. <span class='en'>(Passiv → worden, ohne ge-)</span>",
    "Futur als Vermutung: Er <b>wird wohl</b> im Stau <b>stehen</b>. <span class='en'>(= probably)</span>"
  ],
  en: "werden does three jobs. Look at the end of the sentence: a noun or adjective → to become; an infinitive → future tense; a past participle → passive. In the perfect, the full verb takes geworden but the passive takes worden. werden + wohl expresses probability."
},
items: [
  { typ:"mc", thema:"werden", frage:"„Sie wird nächstes Jahr nach Berlin ziehen.“ — Welcher Job?",
    optionen:["Futur (Zukunft)","Passiv","Vollverb (become)"], richtig:0,
    regel:"Am Ende steht der Infinitiv „ziehen“ → Futur I." , en:"An infinitive <b>ziehen</b> at the end after <b>wird</b> signals Futur I, not passive." },
  { typ:"mc", thema:"werden", frage:"„Der Vertrag wird gerade geprüft.“ — Welcher Job?",
    optionen:["Futur","Passiv","Vollverb"], richtig:1,
    regel:"Am Ende steht das Partizip II „geprüft“ → Passiv." , en:"<b>wird</b> plus the Partizip II <b>geprüft</b> is passive: someone is checking the contract now." },
  { typ:"mc", thema:"werden", frage:"„Es wird langsam dunkel.“ — Welcher Job?",
    optionen:["Futur","Passiv","Vollverb (become)"], richtig:2,
    regel:"Am Ende steht ein Adjektiv → werden als Vollverb: etwas verändert sich." , en:"<b>wird</b> plus an adjective is the full verb become; nothing is done to it, it changes." },
  { typ:"luecke", thema:"werden", satz:"Ich ___ dich morgen nach dem Kurs anrufen.", loesung:[["werde"]],
    frage:"Futur I:", regel:"werden + Infinitiv am Ende. Bei klarer Zukunft ginge auch Präsens + Zeitangabe." , en:"Futur I puts <b>werde</b> in position two and the infinitive <b>anrufen</b> at the end." },
  { typ:"luecke", thema:"werden", satz:"Mein Deutsch ___ jede Woche besser.", loesung:[["wird"]],
    frage:"Vollverb:", regel:"werden + Adjektiv (besser) = sich verändern. Kein Futur, keine Zukunft nötig!" , en:"With an adjective <b>werden</b> means become and describes a change now, not future time." },
  { typ:"luecke", thema:"werden", satz:"Er ___ 1995 in Chennai geboren.", loesung:[["wurde"]],
    frage:"Präteritum:", regel:"„geboren werden“ ist Passiv → Präteritum: wurde geboren." , en:"<b>geboren werden</b> is passive, and for past events German takes the Präteritum <b>wurde</b>." },
  { typ:"mc", thema:"werden", frage:"Sie ist nach dem Studium Beraterin ___. — Was fehlt?",
    optionen:["geworden","worden"], richtig:0,
    regel:"Vollverb (become) → <b>geworden</b>. Nur das Passiv nimmt „worden“.",
    gegenbeispiel:"Passiv: „Der Bericht ist geschrieben worden.“" , en:"The full verb become gives <b>geworden</b>; only the passive perfect uses the short form <b>worden</b>." },
  { typ:"luecke", thema:"werden", satz:"Er antwortet nicht — er ___ wohl noch im Meeting sein.", loesung:[["wird"]],
    frage:"Vermutung:", regel:"werden + wohl + Infinitiv = Vermutung („wahrscheinlich“). Sehr nützlich fürs Sprechen auf B2-Niveau." , en:"<b>wird</b> plus <b>wohl</b> plus infinitive expresses a guess about right now, not a future plan." },
  { typ:"mc", thema:"werden", frage:"Welcher Satz sagt: „Das Büro putzt jemand jeden Freitag“ — im Passiv?",
    optionen:["Das Büro wird jeden Freitag geputzt.","Das Büro wird jeden Freitag putzen."],
    richtig:0, regel:"Passiv braucht das Partizip II: geputzt. Mit Infinitiv („putzen“) wäre es Futur — das Büro würde selbst putzen!" , en:"Passive needs the participle <b>geputzt</b>; with the infinitive putzen the sentence becomes future instead." }
]},

/* ---------------------------------------------------------- */
"adjektive-als-nomen": {
titel: "Adjektive als Nomen",
kurz: "Lehrerliste Nr. 10 — der Angestellte, ein Angestellter, die Verlobte",
konzept: {
  titel: "Adjektive als Nomen — groß geschrieben, aber dekliniert wie Adjektive",
  de: "<p>Wörter wie <b>der Angestellte, die Verlobte, der Deutsche, der Erwachsene</b> sehen aus wie Nomen, " +
      "sind aber Adjektive. Sie werden <b>groß geschrieben</b>, behalten aber die <b>Adjektivendungen</b>:</p>",
  tabelle: {
    kopf: ["", "mit „der/die“", "mit „ein/eine“", "Plural"],
    zeilen: [
      ["maskulin", "der Angestellt<b>e</b>", "ein Angestellt<b>er</b> ⚠", "die Angestellt<b>en</b>"],
      ["feminin", "die Angestellt<b>e</b>", "eine Angestellt<b>e</b>", "viele Angestellt<b>e</b>"],
      ["Dativ", "mit dem Angestellt<b>en</b>", "mit einem Angestellt<b>en</b>", "mit den Angestellt<b>en</b>"]
    ]
  },
  regel: "Häufige Vertreter: der/die Angestellte, Verlobte, Bekannte, Verwandte, Deutsche, Erwachsene, Jugendliche, Arbeitslose, Kranke. Und: nach „etwas/nichts/viel“ wird das Adjektiv ein Nomen auf -es: etwas Neues, nichts Besonderes.",
  beispiele: [
    "Herr Weber ist <b>ein Angestellter</b> bei Bayer. <span class='en'>(ein + maskulin → -er!)</span>",
    "Ich habe <b>einen Bekannten</b> in Köln besucht. <span class='en'>(Akkusativ → -en)</span>",
    "Gibt es <b>etwas Neues</b>? — Nein, <b>nichts Besonderes</b>."
  ],
  en: "Nouns like der Angestellte are really adjectives wearing a capital letter — they keep full adjective declension. The trap: ein Angestellter (masculine after ein takes -er), but der Angestellte. After etwas/nichts/viel, adjectives become neuter nouns in -es: etwas Neues, nichts Besonderes."
},
items: [
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Herr Meier ist ein ___ bei Siemens. (angestellt)", loesung:[["Angestellter"]],
    frage:"Nach „ein“, maskulin:",
    regel:"ein + maskulin Nominativ → starke Endung -er: ein Angestellt<b>er</b>. Großschreibung nicht vergessen!",
    gegenbeispiel:"Mit „der“: der Angestellt<b>e</b>." , en:"After <b>ein</b> nothing marks the masculine nominative, so the noun-adjective takes -er: ein Angestellter." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Die ___ von Herrn Kumar heißt Priya. (verlobt)", loesung:[["Verlobte"]],
    frage:"Feminin:", regel:"die/eine Verlobt<b>e</b> — feminin Nominativ nimmt -e." , en:"Feminine nominative is -e after both <b>die</b> and <b>eine</b>, and the word stays capitalised." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Ich habe am Wochenende einen ___ in Köln besucht. (bekannt)", loesung:[["Bekannten"]],
    frage:"Akkusativ maskulin:", regel:"einen Bekannt<b>en</b> — Akkusativ maskulin → -en." , en:"Masculine is the only gender that changes in the accusative: einen Bekannten, not einen Bekannter." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Viele ___ suchen zurzeit eine neue Stelle. (arbeitslos)", loesung:[["Arbeitslose"]],
    frage:"Plural ohne Artikel:", regel:"Plural ohne Artikel → starke Endung -e: viele Arbeitslos<b>e</b>." , en:"With no article the adjective-noun carries the plural signal itself: strong -e, viele Arbeitslose." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Im Urlaub wohnen wir bei meinen ___. (verwandt)", loesung:[["Verwandten"]],
    frage:"Dativ Plural:", regel:"bei meinen Verwandt<b>en</b> — Dativ Plural nimmt immer -en." , en:"Dative plural ends in -en with no exceptions, whatever article word stands in front." },
  { typ:"mc", thema:"adjektive-als-nomen", frage:"Welcher Satz ist korrekt?",
    optionen:["Er ist Deutscher.","Er ist Deutsche.","Er ist ein Deutsch."],
    richtig:0, regel:"Maskulin ohne Artikel (Nationalität als Prädikat) → Deutscher. Sie ist Deutsche.",
    en:"He is German = Er ist Deutscher; she = Deutsche." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Gibt es heute etwas ___ im Kurs? (neu)", loesung:[["Neues"]],
    frage:"Nach „etwas“:", regel:"etwas/nichts/viel + Adjektiv als Nomen auf -es, groß: etwas Neu<b>es</b>." , en:"<b>etwas</b>, <b>nichts</b> and <b>viel</b> take a neuter -es form, written with a capital letter: etwas Neues." },
  { typ:"luecke", thema:"adjektive-als-nomen", satz:"Erwachsene zahlen 10 Euro, ___ nur 5. (jugendlich)", loesung:[["Jugendliche"]],
    frage:"", regel:"Plural ohne Artikel → Jugendlich<b>e</b>." , en:"Bare plural with no article takes strong -e, exactly like the article <b>die</b> would." },
  { typ:"mc", thema:"adjektive-als-nomen", frage:"„Das war wirklich nichts ___.“ — Was passt?",
    optionen:["Besonderes","Besondere","besonders"], richtig:0,
    regel:"nichts + Adjektiv als Nomen → -es und groß: nichts Besonder<b>es</b>." , en:"After nichts the adjective becomes a noun: capitalised and ending in -es, so nichts <b>Besonderes</b>." }
]},

/* ---------------------------------------------------------- */
"artikelwoerter": {
titel: "Artikelwörter",
kurz: "Lehrerliste Nr. 11 — Possessiv-, Demonstrativ- und Interrogativartikel",
konzept: {
  titel: "Artikelwörter — mein, dieser, welcher & Co.",
  de: "<p>Artikelwörter stehen <b>vor</b> dem Nomen und übernehmen die Artikel-Endungen. " +
      "Drei Familien:</p>",
  tabelle: {
    kopf: ["Familie", "Wörter", "dekliniert wie"],
    zeilen: [
      ["Possessiv", "mein, dein, sein, ihr, unser, euer ⚠, ihr, Ihr", "wie „ein/kein“"],
      ["Demonstrativ", "dieser, jener, derselbe", "wie „der/die/das“"],
      ["Interrogativ", "welcher? / was für ein?", "welcher wie „der“ · was für ein wie „ein“"],
      ["Indefinit", "jeder, mancher, alle, einige", "jeder wie „der“ (nur Singular)"]
    ]
  },
  regel: "„euer“ verliert beim Deklinieren das innere e: euer Buch, aber eure Bücher, mit eurem Auto. Und „Ihr“ (höflich) wird IMMER großgeschrieben — „ihr“ klein heißt „ihr/deren“ (sie).",
  beispiele: [
    "<b>Welchen</b> Kurs besuchst du? — <b>Diesen</b> hier. <span class='en'>(Akkusativ maskulin -en)</span>",
    "<b>Was für ein</b> Handy hast du? <span class='en'>(fragt nach der Art, nicht nach der Auswahl)</span>",
    "<b>Jeder</b> Teilnehmer bekommt ein Zertifikat. <span class='en'>(jeder = Singular!)</span>"
  ],
  en: "Determiners replace the article and carry its endings. Possessives decline like ein/kein; dieser and welcher decline like der. Two traps: euer drops its inner e when it takes an ending (eure, eurem), and capital-I Ihr is the polite your while lowercase ihr means her/their."
},
items: [
  { typ:"luecke", thema:"artikelwoerter", satz:"___ Bruder wohnt noch in Indien. (mein)", loesung:[["Mein"]],
    frage:"Nominativ maskulin:", regel:"Wie „ein“: keine Endung im Nominativ maskulin — Mein Bruder." , en:"<b>mein</b> follows <b>ein</b>, and <b>ein</b> has no ending in the masculine nominative." },
  { typ:"luecke", thema:"artikelwoerter", satz:"Ich helfe ___ Schwester bei den Hausaufgaben. (mein)", loesung:[["meiner"]],
    frage:"Dativ feminin:", regel:"helfen + Dativ, feminin → mein<b>er</b> Schwester." , en:"<b>helfen</b> always takes the dative, and feminine dative on an ein-word is -er." },
  { typ:"luecke", thema:"artikelwoerter", satz:"___ Kurs besuchst du — den am Morgen oder den am Abend? (welch-)", loesung:[["Welchen"]],
    frage:"Akkusativ maskulin:", regel:"welcher dekliniert wie „der“: Akkusativ maskulin → Welch<b>en</b> Kurs." , en:"<b>welch-</b> copies the der-endings, so masculine accusative gives Welchen, not Welcher." },
  { typ:"luecke", thema:"artikelwoerter", satz:"___ Wörterbuch gehört dir? (dies-)", loesung:[["Dieses"]],
    frage:"Nominativ neutrum:", regel:"dieser wie „der/das“: neutrum → Dies<b>es</b> Wörterbuch." , en:"<b>dies-</b> follows der/das, and neuter takes -es: Dieses Wörterbuch." },
  { typ:"luecke", thema:"artikelwoerter", satz:"Er fährt heute mit ___ neuen Auto. (sein)", loesung:[["seinem"]],
    frage:"Dativ neutrum:", regel:"mit + Dativ, neutrum → sein<b>em</b> Auto." , en:"<b>mit</b> forces the dative, and neuter dative on a possessive is -em." },
  { typ:"luecke", thema:"artikelwoerter", satz:"Sind das ___ Bücher, oder gehören sie dem Kurs? (euer)", loesung:[["eure"]],
    frage:"Die euer-Falle:",
    regel:"„euer“ verliert mit Endung das innere e: euer → eur<b>e</b> Bücher.",
    gegenbeispiel:"Falsch: „euere Bücher“." , en:"<b>euer</b> drops its inner e as soon as an ending is added: eure, never euere." },
  { typ:"luecke", thema:"artikelwoerter", satz:"Was für ___ Laptop benutzt du für die Übungen? (ein)", loesung:[["einen"]],
    frage:"„was für ein“ + Akkusativ:", regel:"„was für ein“ dekliniert wie „ein“: Akkusativ maskulin → was für ein<b>en</b> Laptop." , en:"In <b>was für ein</b> the ein still declines by its own role in the sentence, here accusative masculine." },
  { typ:"luecke", thema:"artikelwoerter", satz:"___ Teilnehmer bekommt am Ende ein Zertifikat. (jed-)", loesung:[["Jeder"]],
    frage:"", regel:"jeder wie „der“, nur Singular: Jed<b>er</b> Teilnehmer." , en:"<b>jed-</b> takes der-endings and exists only in the singular: Jeder Teilnehmer." },
  { typ:"mc", thema:"artikelwoerter", frage:"Im formellen Brief: „Vielen Dank für ___ Antwort.“",
    optionen:["Ihre","ihre"], richtig:0,
    regel:"Höfliches „Ihr“ wird IMMER großgeschrieben. Klein „ihre“ = die Antwort von ihr/ihnen.",
    en:"Polite Ihr is always capitalised." },
  { typ:"luecke", thema:"artikelwoerter", satz:"Ich habe leider ___ Zeit für Serien. (kein)", loesung:[["keine"]],
    frage:"Akkusativ feminin:", regel:"kein wie „ein“: feminin Akkusativ → kein<b>e</b> Zeit." , en:"<b>kein</b> declines exactly like ein, so feminine accusative gives keine Zeit." }
]},

/* ---------------------------------------------------------- */
"adjektivdeklination": {
titel: "Adjektivdeklination",
kurz: "Lehrerliste Nr. 12 · Einstufung: 4/7 — das System dahinter statt Auswendiglernen",
konzept: {
  titel: "Adjektivdeklination — EIN Prinzip statt drei Tabellen",
  de: "<p>Vergiss drei Tabellen. Es gibt <b>ein Prinzip</b>: " +
      "<b>Irgendjemand muss den Kasus zeigen.</b></p>" +
      "<p><b>Zeigt der Artikel den Kasus?</b> (der, dem, den, dieses, jeder …) → Adjektiv nimmt die " +
      "<b>schwache</b> Endung: nur <b>-e</b> oder <b>-en</b>.<br>" +
      "<b>Zeigt ihn niemand?</b> (kein Artikel, oder „ein“ ohne Endung) → das Adjektiv übernimmt die " +
      "<b>starke</b> Endung (= die Endung von „der/das/dem“).</p>",
  tabelle: {
    kopf: ["Situation", "maskulin Nom.", "neutrum Nom./Akk.", "Beispiel"],
    zeilen: [
      ["der/das zeigt Kasus → schwach", "der nett<b>e</b>", "das klein<b>e</b>", "der nette Kollege"],
      ["„ein“ zeigt NICHTS → Adjektiv stark", "ein nett<b>er</b>", "ein klein<b>es</b>", "ein netter Kollege"],
      ["kein Artikel → Adjektiv stark", "nett<b>er</b>", "klein<b>es</b>", "guter Kaffee, kaltes Wasser"],
      ["Dativ/Genitiv mit Artikel → immer", "-en", "-en", "mit dem netten Kollegen"]
    ]
  },
  regel: "Die 80-%-Abkürzung: Nach der/die/das im Nominativ → -e. Nach JEDEM Artikel im Dativ, Genitiv oder Plural → -en. Nur wenn kein Signal da ist, denk nach.",
  beispiele: [
    "<b>Der</b> deutsche Kurs / <b>ein</b> deutsch<b>er</b> Kurs / deutsch<b>er</b> Wein",
    "Ich wünsche dir <b>einen schönen</b> Tag! <span class='en'>(feste Wendung — auswendig!)</span>",
    "<b>Bei schönem</b> Wetter joggen wir. <span class='en'>(kein Artikel, Dativ neutrum → -em)</span>"
  ],
  en: "One principle replaces three tables: somebody must show the case. If the article shows it (der, dem, diesen…), the adjective goes weak (-e/-en). If nothing shows it (no article, or bare ein), the adjective itself takes the strong ending — the one der/das/dem would have had. Shortcut: dative, genitive and plural with any article → always -en."
},
items: [
  { typ:"luecke", thema:"adjektivendungen", satz:"Das klein___ Kind spielt im Garten.", loesung:["e"],
    frage:"„das“ zeigt den Kasus:", regel:"Artikel zeigt Kasus → schwache Endung -e." , en:"<b>das</b> already shows the case, so the adjective only needs the weak -e." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Ein klein___ Kind spielt im Garten.", loesung:["es"],
    frage:"„ein“ zeigt nichts:", regel:"„ein“ verrät das Neutrum nicht → das Adjektiv zeigt es: -es (wie „das“)." , en:"<b>ein</b> gives no clue about neuter, so the adjective supplies it with -es." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Ich trinke morgens gern frisch___ Kaffee.", loesung:["en"],
    frage:"Kein Artikel, Akkusativ maskulin:", regel:"Kein Signal da → starke Endung: frisch<b>en</b> Kaffee (wie „den“)." , en:"With no article in front, the adjective takes over the der-signal: masculine accusative -en." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Ich war gestern mit einem alt___ Freund essen.", loesung:["en"],
    frage:"Dativ:", regel:"Dativ mit Artikel → immer -en. Die 80-%-Regel." , en:"After any article word the dative adjective is always -en, for every gender." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Gut___ Ideen sind immer willkommen.", loesung:["e"],
    frage:"Plural ohne Artikel:", regel:"Kein Artikel, Plural Nominativ → starke Endung -e (wie „die“)." , en:"Nothing marks the plural nominative here, so the adjective takes strong -e like <b>die</b>." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Trotz des schlecht___ Wetters sind wir gelaufen.", loesung:["en"],
    frage:"Genitiv:", regel:"Genitiv mit Artikel → immer -en." , en:"The genitive adjective after an article is always -en, regardless of gender." },
  { typ:"mc", thema:"adjektivendungen", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich suche eine neue Wohnung.","Ich suche eine neuen Wohnung."],
    richtig:0, regel:"„eine“ zeigt den Kasus (feminin Akkusativ) → schwache Endung -e." , en:"<b>eine</b> already signals feminine accusative, so the adjective stays weak: eine neue Wohnung." },
  { typ:"konjugation", thema:"adjektivendungen",
    frage:"„nett“ + maskulin Nominativ — ergänze die volle Form (z. B. „nette“):",
    kopf:["Kontext","Form von „nett“"],
    zeilen:[["der ___ Kollege","nette"],["ein ___ Kollege",["netter"]],["___ Kollegen (Plural, ohne Artikel)",["nette"]],["mit dem ___ Kollegen",["netten"]]],
    regel:"Gleicher Kasus, drei Situationen — das Signal entscheidet, nicht das Nomen." , en:"Same case throughout, but the ending shifts with the article: der nette, ein netter, mit dem netten." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Bei schön___ Wetter gehen wir am Rhein joggen.", loesung:["em"],
    frage:"Kein Artikel, Dativ neutrum:", regel:"Niemand zeigt den Dativ → das Adjektiv: schön<b>em</b> (wie „dem“)." , en:"No article marks this dative, so the adjective takes the dem-signal itself: schönem Wetter." },
  { typ:"luecke", thema:"adjektivendungen", satz:"Ich wünsche dir einen schön___ Tag!", loesung:["en"],
    frage:"Die Alltagsformel:", regel:"einen + Akkusativ maskulin → schwach -en. Als feste Wendung merken: „einen schönen Tag“." , en:"After einen the adjective takes the weak ending -en; learn <b>einen schönen Tag</b> as one fixed phrase." }
]},

/* ---------------------------------------------------------- */
"pronomen-praep": {
titel: "Pronomen & Präpositionen",
kurz: "Lehrerliste Nr. 13 — Personalpronomen im Kasus, da-/wo-Wörter, Präpositionsgruppen",
konzept: {
  titel: "Pronomen und Präpositionen — das Ordnungssystem",
  de: "<p><b>Personalpronomen</b> ändern sich mit dem Kasus:</p>",
  tabelle: {
    kopf: ["Nominativ", "Akkusativ", "Dativ"],
    zeilen: [
      ["ich", "mich", "mir"],
      ["du", "dich", "dir"],
      ["er / es / sie", "ihn / es / sie", "ihm / ihm / ihr"],
      ["wir / ihr", "uns / euch", "uns / euch"],
      ["sie / Sie", "sie / Sie", "ihnen / Ihnen"]
    ]
  },
  regel: "Präpositionsgruppen auswendig: IMMER Akkusativ: durch, für, gegen, ohne, um. IMMER Dativ: aus, bei, mit, nach, seit, von, zu. Der Rest sind Wechselpräpositionen (wo?→Dativ, wohin?→Akkusativ).",
  beispiele: [
    "Über <b>Sachen</b>: da-Wort → Interessierst du dich für Fußball? — Ja, ich interessiere mich <b>dafür</b>.",
    "Über <b>Personen</b>: Präposition + Pronomen → Wartest du auf Anna? — Ja, ich warte <b>auf sie</b>.",
    "Frage nach Sache: <b>Worauf</b> wartest du? · Frage nach Person: <b>Auf wen</b> wartest du?",
    "Pronomen-Reihenfolge: Ich gebe <b>es ihm</b>. <span class='en'>(zwei Pronomen: Akkusativ VOR Dativ)</span>"
  ],
  en: "Three systems in one: (1) personal pronouns by case — the table above; (2) preposition groups: durch/für/gegen/ohne/um always accusative, aus/bei/mit/nach/seit/von/zu always dative; (3) da-/wo-compounds for things (dafür, worauf) versus preposition + pronoun for people (auf sie, an wen). With two pronouns, accusative comes before dative: Ich gebe es ihm."
},
items: [
  { typ:"luecke", thema:"kasus", satz:"Hilfst du ___ morgen beim Umzug? (ich)", loesung:[["mir"]],
    frage:"", regel:"helfen + Dativ → mir." , en:"<b>helfen</b> takes a dative object even though English treats help as direct: mir, not mich." },
  { typ:"luecke", thema:"kasus", satz:"Ich habe ___ gestern im Kurs gesehen. (er)", loesung:[["ihn"]],
    frage:"", regel:"sehen + Akkusativ → ihn." , en:"<b>sehen</b> takes a plain accusative object, so the masculine pronoun is ihn." },
  { typ:"luecke", thema:"kasus", satz:"Gib ___ bitte das Wörterbuch zurück. (deine Schwester)", loesung:[["ihr"]],
    frage:"", regel:"geben + Dativ (wem?) → ihr." , en:"The recipient of <b>geben</b> is dative, and the feminine dative pronoun is ihr." },
  { typ:"mc", thema:"kasus", frage:"Zwei Pronomen — welche Reihenfolge ist richtig?",
    optionen:["Ich gebe es ihm.","Ich gebe ihm es."], richtig:0,
    regel:"Sind BEIDE Objekte Pronomen, steht Akkusativ vor Dativ: es ihm.",
    en:"Two pronouns: accusative before dative." },
  { typ:"luecke", thema:"kasus", satz:"Ohne ___ macht der Kurs keinen Spaß. (du)", loesung:[["dich"]],
    frage:"", regel:"„ohne“ gehört zu den reinen Akkusativpräpositionen (durch, für, gegen, ohne, um) → dich." , en:"<b>ohne</b> is always accusative: durch, für, gegen, ohne, um take no dative ever." },
  { typ:"luecke", thema:"kasus", satz:"Nach d___ Unterricht gehe ich ins Fitnessstudio.", loesung:["em"],
    frage:"", regel:"„nach“ ist reine Dativpräposition → nach dem Unterricht." , en:"<b>nach</b> is a fixed dative preposition, so the masculine article becomes dem." },
  { typ:"luecke", thema:"verben-mit-praep", satz:"Interessierst du dich für Fußball? — Ja, ich interessiere mich sehr ___.", loesung:[["dafür"]],
    frage:"Sache → da-Wort:", regel:"Bei Sachen: da(r) + Präposition = dafür, darauf, damit, darüber." , en:"For things you replace the preposition plus pronoun with da(r) + preposition: dafür, not für es." },
  { typ:"luecke", thema:"verben-mit-praep", satz:"___ wartest du? — Auf den Bus.", loesung:[["Worauf"]],
    frage:"Frage nach einer Sache:", regel:"wo(r) + Präposition: Worauf? Womit? Wovon? — nur für Sachen." , en:"Questions about things use wo(r) + preposition, so warten auf becomes Worauf, not Auf was." },
  { typ:"mc", thema:"verben-mit-praep", frage:"Du fragst nach einer PERSON: „___ denkst du gerade?“",
    optionen:["An wen","Woran"], richtig:0,
    regel:"Personen: Präposition + Fragewort (an wen, auf wen, mit wem). „Woran“ fragt nach Sachen.",
    en:"People take preposition + wen/wem; things take wo-compounds." },
  { typ:"mc", thema:"kasus", frage:"Welche Gruppe ist IMMER Dativ?",
    optionen:["aus, bei, mit, nach, seit, von, zu","durch, für, gegen, ohne, um","auf, in, an, über, unter"],
    richtig:0, regel:"aus/bei/mit/nach/seit/von/zu = immer Dativ. durch/für/gegen/ohne/um = immer Akkusativ. Der Rest wechselt.",
    en:"Memorise both fixed lists; everything else is two-way." },
  { typ:"luecke", thema:"wechselpraepositionen", satz:"Häng das Poster bitte ___ die Wand. (wohin?)", loesung:[["an"]],
    frage:"Wechselpräposition:", regel:"wohin? → Akkusativ: an die Wand. (wo? wäre: an der Wand)" , en:"Two-way prepositions take the accusative when there is movement to a place: wohin, an die Wand." }
]}

};

/* ------------------------------------------------------------------
   Rotation: welches Thema an welchem Kurstag vertieft wird.
   Verben mit Präposition kommen ZUSÄTZLICH an jedem einzelnen Tag.
   ------------------------------------------------------------------ */
/* 15 Themen: die Lehrerliste (13) + Nebensatz-Wortstellung und Passiv aus dem Einstufungstest.
   Die ersten sechs bleiben in der bekannten Reihenfolge (Mi=Nebensatz, Do=Passiv, Fr=Konjunktiv II),
   danach geht die Rotation durch den Rest — ein voller Zyklus dauert drei Kurswochen. */
KURS.fundamentPlan = [
  "verben-mit-praep",        // Lehrerliste 9  · Einstufung 0/6
  "relativsatz",             // Lehrerliste 1  · Einstufung 0/4
  "nebensatz",               //                 Einstufung 1/5
  "passiv",                  // Teil von Nr. 7 · Einstufung 0/3
  "konjunktiv2",             // Lehrerliste 8  · Einstufung 0/3
  "perfekt-praeteritum",     // Lehrerliste 3  · Einstufung 0/2
  "infinitiv-zu",            // Lehrerliste 2
  "zweiteilige-konnektoren", // Lehrerliste 4
  "temporalsaetze",          // Lehrerliste 5
  "modalverben",             // Lehrerliste 6
  "werden",                  // Lehrerliste 7
  "adjektive-als-nomen",     // Lehrerliste 10
  "artikelwoerter",          // Lehrerliste 11
  "adjektivdeklination",     // Lehrerliste 12 · Einstufung 4/7
  "pronomen-praep"           // Lehrerliste 13
];

/* ---------- Videos je Thema ----------
   Alle konkreten Video-URLs wurden per YouTube-oEmbed-API auf Existenz geprüft (29.07.2026).
   Themen ohne kuratiertes Video bekommen vorerst einen Suchlink. */
function yt(q) { return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q); }
KURS.fundamentVideos = {
  "verben-mit-praep": [{k:"lingoni GERMAN",t:"Verbs with Prepositions – Part 1 – B1 [with Jenny]",u:"https://www.youtube.com/watch?v=H0POnXo3TyY",s:"Englisch erklärt"}, {k:"lingoni GERMAN",t:"Da-Compounds – Part 1: dafür, damit, darauf – B1",u:"https://www.youtube.com/watch?v=_xr7zjYc3Ms",s:"Englisch erklärt"}, {k:"Easy German",t:"14 Verb + Preposition Combinations You Should Know (B1)",u:"https://www.youtube.com/watch?v=Hjiy_ogekcw",s:"Deutsch, Untertitel"}],
  "relativsatz": [{k:"lingoni GERMAN",t:"German Lesson (119) – Relativpronomen im Nominativ & Akkusativ – B1/B2",u:"https://www.youtube.com/watch?v=3pC1PzDKGck",s:"Deutsch"}, {k:"lingoni GERMAN",t:"German Lesson (123) – Relativpronomen im Dativ – B1/B2",u:"https://www.youtube.com/watch?v=IeE3atomrqk",s:"Deutsch"}],
  "nebensatz": [{k:"Learn German Today",t:"Satzbau und Konnektoren: weil, obwohl, wegen, trotz, deshalb, trotzdem (B1–B2)",u:"https://www.youtube.com/watch?v=Pskb8dIVTpA",s:"Deutsch"}, {k:"Benjamin – Der Deutschlehrer",t:"Die Konnektoren „obwohl“ und „trotzdem“ (B1–B2)",u:"https://www.youtube.com/watch?v=DOsTLqnbivo",s:"Deutsch"}],
  "passiv": [{k:"EasyDeutsch",t:"[93] Passiv – Vom Aktiv zum Passiv",u:"https://www.youtube.com/watch?v=qLtVzt4pzvY",s:"Deutsch"}, {k:"Easy German",t:"German Passive Explained | Super Easy German 193",u:"https://www.youtube.com/watch?v=5DcelIoemzA",s:"Deutsch, Untertitel"}, {k:"Sprakuko",t:"Zustandspassiv vs. Vorgangspassiv (B1–B2)",u:"https://www.youtube.com/watch?v=xy7w74iePgY",s:"Deutsch"}],
  "konjunktiv2": [{k:"Learn German with Herr Antrim",t:"Konjunktiv 2 with Modal Verbs | B1 German Grammar",u:"https://www.youtube.com/watch?v=CNbTMoBC_Io",s:"Englisch erklärt"}, {k:"Learn German",t:"B1 – Lesson 23 | Konjunktiv II | Verbkonjugation",u:"https://www.youtube.com/watch?v=wiuiJjz8dOA",s:"Englisch erklärt"}],
  "infinitiv-zu": [{k:"Rocking German Grammar",t:"Von ANSTATT DASS zu ANSTATT ZU – geht das immer? (B1/B2)",u:"https://www.youtube.com/watch?v=V012Lo1rz3k",s:"Deutsch"}, {k:"Learn German",t:"B1 – Lesson 16 | anstatt … zu | anstatt dass",u:"https://www.youtube.com/watch?v=DcWpmjmA-gU",s:"Englisch erklärt"}],
  "werden": [{k:"EasyDeutsch",t:"[84] Das Verb „werden“ – Hauptverb, Passiv und Zukunft",u:"https://www.youtube.com/watch?v=DswYF0ZRfFQ",s:"Deutsch"}, {k:"Deutsch für Euch",t:"The Vorgangspassiv (B1)",u:"https://www.youtube.com/watch?v=oY7B1poTU1g",s:"Englisch erklärt"}],
  "perfekt-praeteritum": [{k:"Learn German Today",t:"deshalb, deswegen, darum, daher, sodass, so … dass (B1–B2)",u:"https://www.youtube.com/watch?v=3lIFhnnlIeg",s:"Deutsch"}],
  "zweiteilige-konnektoren": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("zweiteilige Konnektoren Deutsch B2 sowohl als auch weder noch je desto"),s:"noch nicht kuratiert"}],
  "temporalsaetze": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("Temporalsätze Deutsch B1 bevor nachdem während als wenn erklärt"),s:"noch nicht kuratiert"}],
  "modalverben": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("Modalverben Deutsch B1 Bedeutung nicht müssen nicht dürfen erklärt"),s:"noch nicht kuratiert"}],
  "adjektive-als-nomen": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("nominalisierte Adjektive der Angestellte Deutsch B1 erklärt"),s:"noch nicht kuratiert"}],
  "artikelwoerter": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("Possessivartikel dieser welcher jeder Deutsch B1 Deklination erklärt"),s:"noch nicht kuratiert"}],
  "adjektivdeklination": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("Adjektivdeklination Deutsch B1 einfach erklärt System"),s:"noch nicht kuratiert"}],
  "pronomen-praep": [{k:"YouTube-Suche",t:"Erklärvideos zu diesem Thema",u:yt("Personalpronomen Akkusativ Dativ da-Wörter wo-Wörter Deutsch B1"),s:"noch nicht kuratiert"}]
};
KURS.videoLinks = function (id) {
  var v = KURS.fundamentVideos[id];
  if (!v) return "";
  return " · 📺 " + v.map(function (x) {
    return '<a href="' + x.u + '" target="_blank" rel="noopener">' + KURS.esc(x.k) + '</a>';
  }).join(" · ");
};
/* Vollständige Videokarten für die Modulseite */
KURS.videoKarten = function (id) {
  var v = KURS.fundamentVideos[id];
  if (!v) return [];
  return v.map(function (x) {
    return { titel: x.t, kanal: x.k, sprache: x.s, url: x.u };
  });
};


/* ==================================================================
   ADAPTIVE AUSWAHL
   Der Tagesblock ist NICHT fest. Er wird aus Karthiks echten Daten
   berechnet: schwache Themen zuerst, lange nicht Geübtes wird fällig,
   und die drei Wiederholungsaufgaben kommen aus seinen echten Fehlern.

   Zwei harte Regeln:
   - Der Plan wird pro Tag EINMAL berechnet und gespeichert. Sonst
     würde sich die Seite nach jedem Versuch ändern und der
     Versuchsvergleich wäre wertlos. Neuberechnen geht per Knopf.
   - Kein Math.random. Bei Gleichstand entscheidet die Tagesnummer.
   ================================================================== */

/* Flacher Index über alle Fundament-Aufgaben: "thema#3" -> item */
KURS.fundamentIndex = (function () {
  var idx = {};
  Object.keys(KURS.fundament).forEach(function (t) {
    KURS.fundament[t].items.forEach(function (it, i) { idx[t + "#" + i] = it; });
  });
  return idx;
})();
function schluessel(thema, i) { return thema + "#" + i; }

function rotiere(pool, anzahl, offset) {
  var out = [], n = pool.length;
  for (var i = 0; i < anzahl && i < n; i++) out.push(pool[(offset + i) % n]);
  return out;
}

/* Welche Fundament-Aufgaben hat er schon falsch gehabt? */
function fehlerSchluessel() {
  var treffer = {};
  if (!KURS.fehlerListe) return treffer;
  KURS.fehlerListe().forEach(function (f) {
    Object.keys(KURS.fundamentIndex).forEach(function (k) {
      var it = KURS.fundamentIndex[k];
      var txt = (it.satz || it.frage || "").replace(/<[^>]+>/g, "").slice(0, 40);
      if (txt && f.frage && f.frage.indexOf(txt.slice(0, 25)) > -1) treffer[k] = f.anzahl;
    });
  });
  return treffer;
}

/* Welche Item-Themen deckt ein Fundament-Thema tatsächlich ab?
   Wichtig: „adjektivdeklination" taggt seine Aufgaben als „adjektivendungen",
   „pronomen-praep" als „kasus"/„verben-mit-praep". Ohne diese Karte wäre der
   adaptive Motor für genau diese Themen blind. */
KURS.fundamentAbdeckung = (function () {
  var m = {};
  Object.keys(KURS.fundament).forEach(function (k) {
    var set = {};
    KURS.fundament[k].items.forEach(function (it) { if (it.thema) set[it.thema] = 1; });
    var l = Object.keys(set);
    m[k] = l.length ? l : [k];
  });
  return m;
})();

/* Priorität je Fundament-Thema — aggregiert über alle Themen, die es abdeckt */
KURS.fundamentPrio = function () {
  var st = KURS.lernstand().themen;
  var liste = KURS.fundamentPlan.map(function (k) {
    var wr = 0, wg = 0, zuletzt = null, versuche = 0;
    KURS.fundamentAbdeckung[k].forEach(function (t) {
      var x = st[t]; if (!x) return;
      wr += x.wr; wg += x.wg; versuche += x.versuche;
      if (!zuletzt || (x.zuletzt && x.zuletzt > zuletzt)) zuletzt = x.zuletzt;
    });
    var quote = wg ? Math.round(wr / wg * 100) : null;
    var tage = zuletzt ? KURS.tageSeit(zuletzt) : 999;
    var luecke = quote === null ? 0.55 : (100 - quote) / 100;
    var faellig = Math.min(1, tage / 7);
    return {
      thema: k, quote: quote, tage: tage, versuche: versuche,
      prio: luecke * 0.7 + faellig * 0.3,
      grund: quote === null ? "noch nie geübt"
           : quote < 50 ? "zuletzt nur " + quote + " % richtig"
           : quote < 70 ? quote + " % — sitzt noch nicht"
           : tage >= 5 ? "seit " + tage + " Tagen nicht geübt"
           : quote + " % — kurze Auffrischung"
    };
  });
  liste.sort(function (a, b) { return b.prio - a.prio || a.thema.localeCompare(b.thema); });
  return liste;
};

/* Plan für einen Tag berechnen (ohne ihn zu speichern) */
KURS.planBerechnen = function (tagNr) {
  var prio = KURS.fundamentPrio ? KURS.fundamentPrio() : [];
  var hatDaten = prio.some(function (p) { return p.quote !== null; });

  /* Ohne Daten: fester Rotationsplan, damit der erste Tag sinnvoll startet. */
  var thema = hatDaten ? prio[0].thema
                       : KURS.fundamentPlan[(tagNr - 1) % KURS.fundamentPlan.length];
  var grund = hatDaten ? prio[0].grund : "Startplan — noch keine Daten";

  var fehler = fehlerSchluessel();
  var wdhKeys = Object.keys(fehler).sort(function (a, b) { return fehler[b] - fehler[a]; }).slice(0, 3);

  /* Auffüllen aus den nächstschwächsten Themen, wenn zu wenig echte Fehler da sind */
  var i = 1;
  while (wdhKeys.length < 3) {
    var quelle = hatDaten && prio[i] ? prio[i].thema : "verben-mit-praep";
    var pool = KURS.fundament[quelle] ? KURS.fundament[quelle].items : [];
    var kand = rotiere(pool, 3, (tagNr - 1) * 3 + i);
    for (var j = 0; j < kand.length && wdhKeys.length < 3; j++) {
      var k = schluessel(quelle, pool.indexOf(kand[j]));
      if (wdhKeys.indexOf(k) === -1) wdhKeys.push(k);
    }
    i++;
    if (i > KURS.fundamentPlan.length + 1) break;
  }

  /* 7 Aufgaben zum Thema des Tages, ohne die Wiederholungen doppelt zu nehmen */
  var topfItems = KURS.fundament[thema].items;
  var haupt = [], off = (tagNr - 1) * 2;
  for (var n = 0; n < topfItems.length && haupt.length < 7; n++) {
    var idxN = (off + n) % topfItems.length;
    var kk = schluessel(thema, idxN);
    if (wdhKeys.indexOf(kk) === -1 && haupt.indexOf(kk) === -1) haupt.push(kk);
  }

  return { v: 2, datum: new Date().toISOString().slice(0, 10), tagNr: tagNr,
           thema: thema, grund: grund, wdh: wdhKeys, haupt: haupt,
           ausFehlern: Object.keys(fehler).length };
};

/* Plan holen (gespeichert oder neu) und in einen Übungsblock verwandeln */
KURS.fundamentBlock = function (tagNr, seiteId) {
  var id = seiteId || ("tag-" + (tagNr < 10 ? "0" + tagNr : tagNr));
  var d = KURS.daten(), s = d.seiten[id];
  if (!s) { s = d.seiten[id] = { versuche: [], frei: {}, flags: {}, feedback: [] }; }

  if (!s.plan || s.plan.v !== 2) { s.plan = KURS.planBerechnen(tagNr); KURS.speichern(d); }
  var plan = s.plan;
  var topf = KURS.fundament[plan.thema] || KURS.fundament[KURS.fundamentPlan[0]];

  function hol(k, alsWdh) {
    var it = KURS.fundamentIndex[k];
    if (!it) return null;
    var kopie = {}; for (var f in it) kopie[f] = it[f];   /* nie das Original mutieren */
    if (alsWdh) kopie.wdh = true;
    kopie.id = "fd" + tagNr + "-" + k.replace(/[^a-zA-Z0-9]/g, "");
    return kopie;
  }
  var items = plan.wdh.map(function (k) { return hol(k, true); })
              .concat(plan.haupt.map(function (k) { return hol(k, false); }))
              .filter(Boolean);

  var vk = KURS.videoKarten(plan.thema);
  var stand = KURS.fundamentPrio ? KURS.fundamentPrio().filter(function (x) { return x.thema === plan.thema; })[0] : null;

  return {
    titel: "Fundament — " + topf.titel,
    telc: "Sprachbausteine",
    adaptiv: true,
    phase: 3,
    hinweis:
      '<b>Warum heute dieses Thema?</b> ' + KURS.esc(plan.grund) +
      (plan.ausFehlern ? ' Die ersten drei Aufgaben kommen aus deinen eigenen Fehlern.' :
                         ' Die ersten drei Aufgaben sind verteilte Wiederholung.') +
      ' <span class="en">Chosen from your own results, not a fixed list.</span>' +
      (stand && stand.quote !== null ? '<br>Aktueller Stand in diesem Thema: ' + KURS.statusHtml(stand.quote) : '') +
      '<br><a href="b1-fundament.html#' + plan.thema + '">Erklärung nachschlagen →</a>' +
      (vk.length ? '<br>📺 ' + vk.map(function (v) {
        return '<a href="' + v.url + '" target="_blank" rel="noopener">' + KURS.esc(v.titel) +
               '</a> <span class="en">(' + KURS.esc(v.kanal) + ')</span>';
      }).join('<br>📺 ') : '') +
      '<br><button class="btn" style="margin-top:8px" onclick="KURS.planNeu(\'' + id + '\')">↻ Plan neu berechnen</button>',
    items: items
  };
};

/* Knopf: Plan verwerfen und aus dem aktuellen Lernstand neu bauen */
KURS.planNeu = function (seiteId) {
  var d = KURS.daten();
  if (d.seiten[seiteId]) { delete d.seiten[seiteId].plan; KURS.speichern(d); }
  location.reload();
};

/* ------------------------------------------------------------------
   Die Modulseite b1-fundament.html: alle Themen, alle Aufgaben.
   ------------------------------------------------------------------ */
(function () {
  var konzepte = [], bloecke = [];
  KURS.fundamentPlan.forEach(function (t) {
    var f = KURS.fundament[t];
    konzepte.push(f.konzept);
    var vk = KURS.videoKarten(t);
    bloecke.push({
      titel: f.titel,
      telc: "Sprachbausteine",
      hinweis: f.kurz +
        (vk.length ? '<br>📺 ' + vk.map(function (v) {
          return '<a href="' + v.url + '" target="_blank" rel="noopener">' +
                 KURS.esc(v.titel) + '</a> <span class="en">(' + KURS.esc(v.kanal) + ' · ' + KURS.esc(v.sprache) + ')</span>';
        }).join('<br>📺 ') : ''),
      items: f.items
    });
  });

  KURS.seiten["b1-fundament"] = {
    id: "b1-fundament", nr: 0, datum: "",
    titel: "B1-Fundament",
    untertitel: "Die offizielle Wiederholungsliste deiner Lehrerin (13 Themen) plus Nebensatz-Wortstellung und Passiv aus dem Einstufungstest — das Fundament, auf dem der B2-Kurs aufbaut.",
    themen: KURS.fundamentPlan,
    konzepte: konzepte,
    bloecke: bloecke,
    wortschatz: [],
    zusammenfassung:
      "<p class='sub'>Die wichtigsten Merksätze aus allen 15 Themen:</p>" +
      "<ul class='bsp'>" +
      "<li><b>Verben mit Präposition:</b> Verb + Präposition + Kasus immer zusammen lernen. mit/von/bei/zu = immer Dativ.</li>" +
      "<li><b>Relativpronomen:</b> Genus vom Bezugswort, Kasus von der Rolle im Relativsatz. Nur denen / dessen / deren weichen vom Artikel ab.</li>" +
      "<li><b>Nebensatz:</b> konjugiertes Verb ans Ende; bei zwei Verben steht das Hilfsverb ganz hinten.</li>" +
      "<li><b>Passiv:</b> werden + Partizip II. Im Perfekt heißt es <b>worden</b>, nie „geworden“.</li>" +
      "<li><b>Konjunktiv II:</b> hätte, wäre, könnte, müsste, würde — der Rest mit würde + Infinitiv.</li>" +
      "<li><b>Zeitformen:</b> Perfekt beim Sprechen, Präteritum beim Schreiben, nach „nachdem“ Plusquamperfekt. sein/haben/Modalverben immer Präteritum.</li>" +
      "<li><b>Infinitiv mit „zu“:</b> kein „zu“ nach Modal- und Wahrnehmungsverben. Trennbar: auf<b>zu</b>stehen — ein Wort.</li>" +
      "<li><b>Zweiteilige Konnektoren:</b> weder…noch ist schon negativ. je + Nebensatz, desto + Verb-Subjekt.</li>" +
      "<li><b>Temporalsätze:</b> „als“ nur einmalig in der Vergangenheit, sonst „wenn“. seit + Präsens.</li>" +
      "<li><b>Modalverben:</b> nicht müssen = nicht nötig, nicht dürfen = verboten.</li>" +
      "<li><b>„werden“:</b> + Nomen/Adjektiv = become · + Infinitiv = Futur · + Partizip II = Passiv.</li>" +
      "<li><b>Adjektive als Nomen:</b> groß schreiben, wie Adjektive deklinieren: der Angestellte, ein Angestellter.</li>" +
      "<li><b>Artikelwörter:</b> Possessive wie „ein“, dieser/welcher/jeder wie „der“. euer → eure.</li>" +
      "<li><b>Adjektivdeklination:</b> Zeigt der Artikel den Kasus → -e/-en. Zeigt ihn niemand → das Adjektiv übernimmt.</li>" +
      "<li><b>Pronomen &amp; Präpositionen:</b> Sachen → da-/wo-Wörter, Personen → Präposition + Pronomen.</li>" +
      "</ul>",
    dialog:
      "<p>Schreib mir im Chat drei Sätze auf Deutsch — je einen mit:</p>" +
      "<p><b>1.</b> einem Relativsatz über deine Arbeit<br>" +
      "<b>2.</b> einer höflichen Bitte im Konjunktiv II<br>" +
      "<b>3.</b> einem Passivsatz</p>" +
      "<p class='en'>Three sentences: one relative clause, one polite request, one passive. I correct every one.</p>"
  };
})();
