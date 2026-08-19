/* ============================================================
   EINSTUFUNGSTEST, wo stehst du wirklich?
   ~40 Items über die klassischen B1→B2-Stolperstellen.
   Das Ergebnis füllt den Schwachstellen-Tracker auf index.html.
   ============================================================ */
KURS.seiten["einstufung"] = {
id: "einstufung", nr: 0, datum: "",
titel: "Einstufungstest",
untertitel: "Wo stehst du zwischen B1 und B2? Etwa 25 Minuten, keine Hilfsmittel, nicht nachschlagen.",
themen: ["kasus", "adjektivendungen", "nebensatz", "konnektoren", "passiv", "konjunktiv2"],

konzepte: [
{
  titel: "So funktioniert der Test",
  einfach: {
    kern: "Ein kurzer Test, der zeigt, welche Themen dein Kurs zuerst braucht.",
    paare: [
      { satz: "Du beantwortest etwa 40 Aufgaben zu Kasus, Adjektivendungen, Nebensätzen, Passiv und Konjunktiv II.",
        notiz: "Genau da klemmt es zwischen B1 und B2 bei fast allen. Du brauchst ungefähr 25 Minuten." },
      { satz: "Du weißt eine Antwort nicht? Rate ehrlich und geh weiter, aber schlag nichts nach.",
        notiz: "Nachschlagen macht das Ergebnis wertlos. Eine falsche Antwort sagt mir mehr als eine abgeschriebene richtige." },
      { satz: "Am Ende klickst du auf <b>Auswertung</b> und siehst dein Profil nach Themen.",
        notiz: "Deine schwächsten Themen landen automatisch auf der Übersichtsseite und kommen als Übungen zurück." },
      { satz: "12 von 40 Punkten heißt nicht „durchgefallen“, sondern: hier fangen wir an.",
        notiz: "Der Test ist keine Prüfung. Du kannst ihn jederzeit wiederholen, und die Seite vergleicht deine Versuche." }
    ],
    merk: "Je ehrlicher du hier bist, desto genauer passt der Kurs zu dir. Ein niedriges Ergebnis ist eine Information, kein Urteil."
  },
  de: "<p>40 Aufgaben zu den Themen, an denen fast alle zwischen B1 und B2 scheitern. " +
      "<b>Nicht nachschlagen</b>, falsche Antworten sind hier wertvoller als richtige, " +
      "weil sie mir zeigen, worauf ich den Kurs ausrichten muss.</p>" +
      "<p>Am Ende auf <b>Auswertung</b> klicken. Dann siehst du dein Profil nach Themen, " +
      "und die Übersichtsseite zeigt deine Top-Schwachstellen.</p>" +
      "<p>Du kannst den Test später jederzeit wiederholen, dann vergleicht die Seite automatisch die Versuche.</p>",
  regel: "Ehrlich raten ist erlaubt, aber schreib nichts ab. Der Test ist für mich, nicht für dich.",
  en: "40 items on the classic B1→B2 problem areas. Don't look anything up, wrong answers are more useful to me than right ones. Retake it any time; the page compares your attempts."
}
],

bloecke: [
{
titel: "Teil 1 · Kasus und Artikel",
telc: "Sprachbausteine Teil 1",
items: [
  { typ:"luecke", thema:"kasus", frage:"Dativ nach Präposition:", satz:"Ich fahre mit ___ Bus zur Arbeit.", loesung:["dem"],
    regel:"„mit“ verlangt immer Dativ. der Bus → dem Bus.", en:"mit always takes the dative." },
  { typ:"luecke", thema:"kasus", frage:"Akkusativ oder Dativ?", satz:"Er hat sein___ Bruder das Buch gegeben.", loesung:["em"],
    regel:"„geben“ hat zwei Objekte: wem? (Dativ) was? (Akkusativ). Der Bruder ist der Empfänger → Dativ: seinem Bruder.",
    en:"Indirect object (recipient) takes dative." },
  { typ:"luecke", thema:"wechselpraepositionen", frage:"Wohin? Wechselpräposition:", satz:"Stell die Tasse bitte auf d___ Tisch.", loesung:["en"],
    regel:"„stellen“ = Bewegung, wohin? → Akkusativ: auf den Tisch.", en:"Movement → accusative." },
  { typ:"luecke", thema:"wechselpraepositionen", frage:"Wo?", satz:"Die Tasse steht auf d___ Tisch.", loesung:["em"],
    regel:"„stehen“ = Position, wo? → Dativ: auf dem Tisch.", en:"Position → dative." },
  { typ:"mc", thema:"kasus", frage:"Welcher Satz ist richtig?",
    optionen:["Wegen dem Regen bleiben wir zu Hause.","Wegen des Regens bleiben wir zu Hause."], richtig:1,
    regel:"„wegen“ verlangt in der Standardsprache den Genitiv: wegen des Regens. (Umgangssprachlich hört man auch Dativ.)",
    en:"wegen governs the genitive in standard written German." },
  { typ:"luecke", thema:"n-deklination", frage:"n-Deklination:", satz:"Ich habe mit dem Student___ gesprochen.", loesung:["en"],
    regel:"„der Student“ ist ein schwaches Nomen (n-Deklination): den/dem/des Studenten. Ebenso: Kollege, Kunde, Mensch, Nachbar.",
    en:"Weak masculine nouns add -(e)n in every case except nominative singular." }
]},

{
titel: "Teil 2 · Adjektivendungen",
telc: "Sprachbausteine Teil 1",
hinweis: "Der häufigste Fehler bei B2-Kandidaten. Frag dich: Zeigt der Artikel schon Kasus und Genus?",
items: [
  { typ:"luecke", thema:"adjektivendungen", frage:"Nach bestimmtem Artikel:", satz:"Der neu___ Kollege kommt aus Spanien.", loesung:["e"],
    regel:"Nominativ maskulin nach „der“ → schwache Endung -e.", en:"After der (nom. masc.) → -e." },
  { typ:"luecke", thema:"adjektivendungen", frage:"Nach unbestimmtem Artikel:", satz:"Das ist ein interessant___ Buch.", loesung:["es"],
    regel:"Nominativ neutrum nach „ein“ → -es, weil „ein“ das Neutrum nicht zeigt.",
    en:"ein doesn't mark neuter, so the adjective takes -es." },
  { typ:"luecke", thema:"adjektivendungen", frage:"Ohne Artikel:", satz:"Ich trinke gern kalt___ Wasser.", loesung:["es"],
    regel:"Kein Artikel → das Adjektiv übernimmt die starke Endung: Akkusativ neutrum -es.",
    en:"No article → adjective takes the strong ending." },
  { typ:"luecke", thema:"adjektivendungen", frage:"Dativ:", satz:"Ich helfe mein___ klein___ Schwester.", loesung:["er","en"],
    regel:"„helfen“ + Dativ, feminin: meiner. Danach schwache Endung -en: meiner kleinen Schwester.",
    en:"helfen takes dative; feminine dative = meiner + -en." },
  { typ:"luecke", thema:"adjektivendungen", frage:"Plural:", satz:"Wir suchen erfahren___ Mitarbeiter.", loesung:["e"],
    regel:"Akkusativ Plural ohne Artikel → starke Endung -e.", en:"Plural, no article, accusative → -e." },
  { typ:"mc", thema:"adjektivendungen", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich habe einen guten Freund.","Ich habe einen gut Freund.","Ich habe ein guter Freund."], richtig:0,
    regel:"Akkusativ maskulin: einen guten Freund.", en:"Accusative masculine: einen guten." }
]},

{
titel: "Teil 3 · Wortstellung und Nebensätze",
telc: "Sprachbausteine Teil 1",
items: [
  { typ:"luecke", thema:"nebensatz", frage:"Verb im Nebensatz:", satz:"Ich weiß, dass er morgen nach Berlin ___.", loesung:[["fährt"]],
    regel:"Nach „dass“ steht das konjugierte Verb am Ende.", en:"Verb-final after dass." },
  { typ:"luecke", thema:"nebensatz", frage:"Perfekt im Nebensatz:", satz:"Er sagt, dass er den Film schon ___ ___.", loesung:["gesehen","hat"],
    regel:"Im Nebensatz steht das Hilfsverb ganz am Ende, nach dem Partizip: „… gesehen hat“.",
    en:"In a subordinate clause the auxiliary comes last, after the participle." },
  { typ:"ordnen", thema:"nebensatz", frage:"Bau den Satz:",
    woerter:["Als","ich","klein","war,","habe","ich","viel","gelesen."],
    loesung:"Als ich klein war, habe ich viel gelesen.",
    regel:"Nebensatz vorne → Hauptsatz beginnt mit dem Verb „habe“.", en:"Fronted clause → main verb immediately after the comma." },
  { typ:"mc", thema:"konnektoren", frage:"Welcher Satz ist korrekt?",
    optionen:["Es regnet, deshalb ich bleibe zu Hause.","Es regnet, deshalb bleibe ich zu Hause."], richtig:1,
    regel:"„deshalb“ ist ein Verbindungsadverb auf Position 1 → das Verb kommt sofort danach.",
    en:"deshalb takes slot 1, so the verb must be second." },
  { typ:"mc", thema:"konnektoren", frage:"Welcher Satz ist korrekt?",
    optionen:["Ich bleibe zu Hause, denn es regnet.","Ich bleibe zu Hause, denn es regnet es."], richtig:0,
    regel:"„denn“ verbindet zwei Hauptsätze und ändert die Wortstellung nicht.",
    en:"denn joins two main clauses without changing word order." },
  { typ:"luecke", thema:"nebensatz", frage:"Indirekte Frage:", satz:"Weißt du, wann der Zug ___?", loesung:[["abfährt","ankommt","kommt","fährt"]],
    regel:"Indirekte Frage = Nebensatz → Verb ans Ende. Trennbares Verb wieder zusammen: abfährt.",
    en:"Indirect questions are subordinate clauses: verb final." }
]},

{
titel: "Teil 4 · Relativsätze",
telc: "Sprachbausteine Teil 1",
items: [
  { typ:"luecke", thema:"relativsatz", frage:"Nominativ:", satz:"Das ist der Mann, ___ nebenan wohnt.", loesung:["der"],
    regel:"Bezugswort maskulin, im Relativsatz Subjekt → der.", en:"Masculine antecedent, subject role → der." },
  { typ:"luecke", thema:"relativsatz", frage:"Akkusativ:", satz:"Das ist der Film, ___ ich gestern gesehen habe.", loesung:["den"],
    regel:"Maskulin + Objekt von „sehen“ → Akkusativ: den.", en:"Object of sehen → accusative den." },
  { typ:"luecke", thema:"relativsatz", frage:"Dativ:", satz:"Die Kollegin, ___ ich geholfen habe, ist sehr nett.", loesung:["der"],
    regel:"„helfen“ + Dativ, feminin → der.", en:"helfen takes dative; feminine dative = der." },
  { typ:"luecke", thema:"relativsatz", frage:"Mit Präposition:", satz:"Das ist das Thema, über ___ wir gesprochen haben.", loesung:["das"],
    regel:"„sprechen über“ + Akkusativ, neutrum → über das.", en:"sprechen über + accusative; neuter → das." }
]},

{
titel: "Teil 5 · Verben mit Präposition",
telc: "Sprachbausteine Teil 2",
hinweis: "Diese Verbindungen kann man nicht logisch herleiten, nur auswendig lernen.",
items: [
  { typ:"luecke", thema:"verben-mit-praep", frage:"", satz:"Ich interessiere mich sehr ___ Technik.", loesung:[["für"]],
    regel:"sich interessieren für + Akkusativ.", en:"sich interessieren für + acc." },
  { typ:"luecke", thema:"verben-mit-praep", frage:"", satz:"Wir freuen uns ___ das Wochenende.", loesung:[["auf"]],
    regel:"sich freuen auf + Akkusativ = Vorfreude (Zukunft). sich freuen über = Freude über etwas Vergangenes.",
    en:"freuen auf = look forward to; freuen über = be pleased about." },
  { typ:"luecke", thema:"verben-mit-praep", frage:"", satz:"Sie hat lange ___ ihre Prüfung gearbeitet, nein, sie hat sich ___ die Prüfung vorbereitet.", loesung:[["an"],["auf"]],
    regel:"arbeiten an + Dativ, sich vorbereiten auf + Akkusativ.", en:"arbeiten an + dat; sich vorbereiten auf + acc." },
  { typ:"luecke", thema:"verben-mit-praep", frage:"", satz:"Er denkt oft ___ seine Familie.", loesung:[["an"]],
    regel:"denken an + Akkusativ.", en:"denken an + acc." },
  { typ:"luecke", thema:"verben-mit-praep", frage:"", satz:"Das hängt ___ dem Wetter ab.", loesung:[["von"]],
    regel:"abhängen von + Dativ.", en:"abhängen von + dat." }
]},

{
titel: "Teil 6 · Zeiten, Passiv, Konjunktiv II",
telc: "Sprachbausteine Teil 1",
items: [
  { typ:"luecke", thema:"perfekt-praeteritum", frage:"Perfekt mit „sein“ oder „haben“?", satz:"Gestern ___ ich nach Köln gefahren.", loesung:[["bin"]],
    regel:"Bewegungsverben (fahren, gehen, fliegen) bilden das Perfekt mit „sein“.",
    en:"Verbs of motion take sein in the perfect." },
  { typ:"luecke", thema:"perfekt-praeteritum", frage:"Präteritum von „werden“:", satz:"Er ___ Ingenieur, nachdem er studiert hatte.", loesung:[["wurde"]],
    regel:"werden → wurde (Präteritum). Nach „nachdem“ steht Plusquamperfekt: hatte studiert.",
    en:"nachdem + past perfect, main clause simple past." },
  { typ:"luecke", thema:"passiv", frage:"Passiv Präsens:", satz:"Das Formular ___ vom Chef unterschrieben.", loesung:[["wird"]],
    regel:"Passiv = werden + Partizip II. Der Handelnde steht mit „von“ + Dativ.",
    en:"Passive = werden + past participle; agent with von + dative." },
  { typ:"luecke", thema:"passiv", frage:"Passiv Perfekt:", satz:"Der Vertrag ist gestern unterschrieben ___.", loesung:[["worden"]],
    regel:"Im Passiv Perfekt heißt das Partizip von „werden“ nicht „geworden“, sondern <b>worden</b>.",
    en:"In the passive perfect, werden's participle is worden, not geworden." },
  { typ:"luecke", thema:"passiv", frage:"Passiv mit Modalverb:", satz:"Das Problem muss sofort gelöst ___.", loesung:[["werden"]],
    regel:"Modalverb + Partizip II + werden (Infinitiv).", en:"Modal + participle + werden." },
  { typ:"luecke", thema:"konjunktiv2", frage:"Höfliche Bitte:", satz:"___ Sie mir bitte helfen?", loesung:[["Könnten","könnten","Würden","würden"]],
    regel:"Konjunktiv II macht Bitten höflich: Könnten Sie …? / Würden Sie …?",
    en:"Konjunktiv II makes requests polite." },
  { typ:"luecke", thema:"konjunktiv2", frage:"Irreale Bedingung:", satz:"Wenn ich mehr Zeit ___, würde ich mehr lesen.", loesung:[["hätte"]],
    regel:"Irreal → Konjunktiv II: hätte. Nicht „habe“.", en:"Unreal condition → hätte." },
  { typ:"luecke", thema:"konjunktiv2", frage:"Vergangenheit irreal:", satz:"Wenn ich das gewusst ___, wäre ich früher gekommen.", loesung:[["hätte"]],
    regel:"Konjunktiv II der Vergangenheit: hätte/wäre + Partizip II.",
    en:"Past unreal: hätte/wäre + participle." }
]},

{
titel: "Teil 7 · Reflexive Verben und Wortschatz",
telc: "Sprachbausteine Teil 2",
items: [
  { typ:"luecke", thema:"reflexiv", frage:"Reflexivpronomen im Dativ:", satz:"Ich kann ___ die Namen einfach nicht merken.", loesung:[["mir"]],
    regel:"„sich etwas merken“ das Reflexivpronomen steht im Dativ, weil „die Namen“ schon Akkusativ ist.",
    en:"sich (dat.) etwas merken, the reflexive is dative when there is a direct object." },
  { typ:"luecke", thema:"reflexiv", frage:"Akkusativ:", satz:"Wir treffen ___ um acht vor dem Kino.", loesung:[["uns"]],
    regel:"sich treffen + Akkusativ: wir treffen uns.", en:"sich treffen takes the accusative reflexive." },
  { typ:"mc", thema:"wortschatz", frage:"Was bedeutet „<b>zahlreich</b>“?",
    optionen:["sehr viele","sehr teuer","sehr selten"], richtig:0,
    regel:"zahlreich = in großer Zahl, sehr viele.", en:"zahlreich = numerous." },
  { typ:"mc", thema:"wortschatz", frage:"Was bedeutet „<b>etwas in Kauf nehmen</b>“?",
    optionen:["etwas kaufen","einen Nachteil akzeptieren","etwas bestellen"], richtig:1,
    regel:"„in Kauf nehmen“ = einen Nachteil bewusst akzeptieren. Typisches B2-Idiom.",
    en:"To accept a downside deliberately." },
  { typ:"mc", thema:"wortschatz", frage:"Welches Wort passt: „Er hat den Termin ___.“",
    optionen:["verschoben","verschieden","verschwunden"], richtig:0,
    regel:"verschieben = zeitlich nach hinten legen. Partizip: verschoben.",
    en:"verschieben = to postpone." }
]},

{
titel: "Teil 8 · Sprachbausteine im telc-Format",
telc: "Sprachbausteine Teil 1",
items: [
  { typ:"cloze", thema:"sprachbausteine", frage:"Ergänze die E-Mail.",
    text:"Sehr geehrte Damen und Herren,<br><br>___ Ihrer Anzeige vom 12. Mai interessiere ich mich für die Stelle als Projektmanager. " +
         "___ ich bereits vier Jahre Erfahrung in der IT-Beratung habe, kenne ich die Anforderungen sehr gut. " +
         "Meine jetzige Position gefällt mir zwar, ___ möchte ich mich beruflich weiterentwickeln. " +
         "Über eine Einladung zu einem Gespräch ___ ich mich sehr.<br><br>Mit freundlichen Grüßen",
    luecken:[
      { optionen:["Aufgrund","Obwohl","Trotzdem"], richtig:0, regel:"Vor einem Nomen („Ihrer Anzeige“) braucht man eine Präposition, keinen Konnektor. „Aufgrund“ + Genitiv." },
      { optionen:["Deshalb","Da","Trotzdem"], richtig:1, regel:"„habe“ steht am Ende → Nebensatz. Der Grund ist kausal: Da ich … habe, kenne ich …" },
      { optionen:["deshalb","weil","trotzdem"], richtig:2, regel:"„zwar … trotzdem“: die Folge widerspricht der Erwartung, und das Verb steht direkt danach („möchte ich“)." },
      { optionen:["freue","würde","werde"], richtig:0, regel:"Feste Wendung: sich über etwas freuen. „Über … freue ich mich sehr.“" }
    ],
    en:"Read the whole sentence first, then decide: preposition or connector? verb final or verb second?" }
]},

{
titel: "Teil 9 · Schreiben",
telc: "Schriftlicher Ausdruck",
items: [
  { typ:"frei", thema:"schreiben",
    frage:"Schreib ca. 70 Wörter: <b>Warum lernst du Deutsch und was ist dein Ziel?</b> Benutze mindestens zwei Nebensätze und ein Verbindungsadverb.",
    mindestWorte:70,
    hinweise:["weil / da","obwohl","deshalb / trotzdem","Mein Ziel ist es, … zu …","Außerdem"],
    muster:"Ich lerne Deutsch, <b>weil</b> ich in Nordrhein-Westfalen lebe und hier beruflich weiterkommen möchte. " +
      "In meinem Bereich, Technologie und Beratung, sind Englischkenntnisse zwar Standard, <b>trotzdem</b> öffnet Deutsch die wichtigeren Türen. " +
      "<b>Obwohl</b> ich schon viel verstehe, fällt mir das freie Sprechen noch schwer. " +
      "<b>Deshalb</b> ist mein Ziel, die telc-B2-Prüfung zu bestehen und danach Bewerbungsgespräche sicher auf Deutsch zu führen.",
    kriterien:"telc bewertet: Aufgabengerechtheit (beide Fragen beantwortet?), kommunikative Gestaltung (Aufbau, Übergänge) und formale Richtigkeit (Wortstellung, Kasus, Verbformen)." , en:"Answer both questions, and check the form: two Nebensätze plus one Verbindungsadverb like <b>trotzdem</b>, which keeps the verb second." }
]}
],

wortschatz: [],
zusammenfassung: "<p>Nach der Auswertung siehst du dein Profil nach Themen. " +
  "Die schwächsten Themen erscheinen automatisch auf der <a href='index.html'>Übersichtsseite</a> " +
  "und ich baue sie als Wiederholungsaufgaben in die kommenden Tage ein.</p>" +
  "<p>Exportiere danach deinen Fortschritt und leg die Datei in den Ordner <b>_Fortschritt</b>.</p>",
dialog: null
};
