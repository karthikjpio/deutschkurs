/* ============================================================
   BERUFSDEUTSCH, Deutsch, das direkt bei der Jobsuche hilft
   Karthiks Hauptziel ist nicht das Zertifikat, sondern der Job.
   Jede Tagesseite bekommt fünf Aufgaben aus diesem Modul, rotierend.
   Die Themen überschneiden sich bewusst mit telc: Redemittel,
   Konnektoren und Konjunktiv II sind im Bewerbungsgespräch dieselben.
   ============================================================ */

KURS.beruf = {

/* ---------------------------------------------------------- */
"beruf-bewerbung": {
titel: "Bewerbung & Anschreiben",
kurz: "Die Formeln, ohne die kein deutsches Anschreiben auskommt",
konzept: {
  titel: "Das deutsche Anschreiben: vier Bausteine",
  einfach: {
    kern: "Ein deutsches Anschreiben ist eine Seite mit vier festen Absätzen.",
    paare: [
      { satz: "<b>Mit großem Interesse</b> habe ich Ihre Stellenanzeige gelesen und <b>bewerbe mich um</b> die Stelle als Softwareentwickler.",
        notiz: "So fängt fast jedes Anschreiben an. „sich bewerben um“ steht immer mit Akkusativ: um <b>die</b> Stelle." },
      { satz: "<b>In meiner jetzigen Position als</b> Softwareentwickler <b>bin ich für</b> unsere Backend-Services <b>verantwortlich</b>.",
        notiz: "Absatz zwei sagt nur, was du heute machst. „verantwortlich für“ plus Akkusativ, immer in dieser Reihenfolge." },
      { satz: "<b>Besonders reizt mich an Ihrem Unternehmen</b>, dass Sie stark auf Cloud-Technologie setzen.",
        notiz: "Absatz drei zeigt, dass du die Firma wirklich angeschaut hast. Nach „dass“ rutscht das Verb ans Ende." },
      { satz: "<b>Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.</b>",
        notiz: "Der Schlusssatz. „würde“ macht ihn höflich, „Ich freue mich“ klingt daneben fast fordernd." }
    ],
    merk: "Nach „Sehr geehrte Damen und Herren,“ geht es <b>klein</b> weiter: „mit großem Interesse …“. Das ist der Fehler, den fast alle machen."
  },
  de: "<p>Ein deutsches Anschreiben ist <b>formelhaft</b>. Das ist gut für dich: " +
      "Man muss nicht kreativ sein, sondern die richtigen Bausteine kennen. Eine Seite, vier Absätze.</p>",
  tabelle: {
    kopf: ["Absatz", "Aufgabe", "Redemittel"],
    zeilen: [
      ["1 · Einstieg", "Woher kennst du die Stelle? Was bewirbst du dich?",
       "<b>Mit großem Interesse</b> habe ich Ihre Stellenanzeige gelesen. · <b>Hiermit bewerbe ich mich um</b> die Stelle als …"],
      ["2 · Was du kannst", "Erfahrung + Beleg",
       "<b>In meiner jetzigen Position als</b> … <b>bin ich für</b> … <b>verantwortlich</b>. · <b>Dabei konnte ich</b> … <b>Erfahrung sammeln</b>."],
      ["3 · Warum diese Firma", "Bezug zum Unternehmen",
       "<b>Besonders reizt mich an Ihrem Unternehmen</b>, dass … · <b>Ihre Ausrichtung auf</b> … <b>entspricht genau</b> meinen Interessen."],
      ["4 · Abschluss", "Höflicher Wunsch nach Gespräch",
       "<b>Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.</b> · <b>Gerne stehe ich Ihnen für Rückfragen zur Verfügung.</b>"]
    ]
  },
  regel: "Anrede: „Sehr geehrte Frau Müller,“ (mit Namen, wenn er in der Anzeige steht) oder „Sehr geehrte Damen und Herren,“ danach KLEIN weiterschreiben. Schluss: „Mit freundlichen Grüßen“ ohne Komma.",
  beispiele: [
    "Beachte den Konjunktiv II: „Ich <b>würde mich freuen</b>“ ist höflich, „Ich freue mich“ wirkt fordernd.",
    "„<b>verantwortlich sein für</b>“ + Akkusativ, eines deiner 0/6-Themen, hier direkt beruflich.",
    "Für dich: „In meiner jetzigen Position als Berater bin ich für die Einführung von KI-Lösungen verantwortlich.“"
  ],
  en: "German cover letters are formulaic, that helps you. One page, four paragraphs, fixed phrases. Note that the politeness comes from Konjunktiv II (würde mich freuen), which is also one of your placement-test gaps."
},
items: [
  { typ:"luecke", thema:"beruf-bewerbung", frage:"Einstiegsformel:",
    satz:"Mit großem Interesse habe ich Ihre Stellenanzeige ___ der Website gelesen.", loesung:[["auf"]],
    regel:"„auf der Website“ Wechselpräposition, hier Dativ (wo?).", en:"on your website" },
  { typ:"luecke", thema:"beruf-bewerbung", frage:"Die Standardformel für die Bewerbung selbst:",
    satz:"Hiermit bewerbe ich mich ___ die Stelle als Data Analyst.", loesung:[["um"]],
    regel:"sich bewerben <b>um</b> + Akkusativ (die Stelle) · sich bewerben <b>bei</b> + Dativ (die Firma)." , en:"The verb takes <b>um</b> plus accusative for the position, and <b>bei</b> plus dative for the company." },
  { typ:"luecke", thema:"beruf-bewerbung", frage:"Verantwortung beschreiben:",
    satz:"In meiner jetzigen Position bin ich ___ die Betreuung von Kunden verantwortlich.", loesung:[["für"]],
    regel:"verantwortlich sein <b>für</b> + Akkusativ. Kernformel im Lebenslauf und im Gespräch." , en:"The adjective <b>verantwortlich</b> always takes <b>für</b> plus accusative; it is the standard way to state your duties." },
  { typ:"luecke", thema:"beruf-bewerbung", frage:"Erfahrung beschreiben:",
    satz:"Dabei konnte ich viel Erfahrung ___ dem Bereich Projektmanagement sammeln.", loesung:[["in"]],
    regel:"Erfahrung sammeln <b>in</b> + Dativ. „Erfahrung <b>mit</b>“ geht auch: Erfahrung mit agilen Methoden." , en:"You gather experience <b>in</b> a field, dative case. <b>Erfahrung mit</b> works for tools and methods." },
  { typ:"mc", thema:"beruf-bewerbung", frage:"Welcher Schlusssatz ist im Anschreiben richtig?",
    optionen:[
      "Ich freue mich auf Ihre Antwort.",
      "Über eine Einladung zu einem persönlichen Gespräch würde ich mich sehr freuen.",
      "Ich will bald ein Gespräch."
    ], richtig:1,
    regel:"Konjunktiv II macht den Wunsch höflich. Option 1 ist nicht falsch, aber schwächer; Option 3 wirkt fordernd.",
    en:"Konjunktiv II is the politeness marker in formal German letters." },
  { typ:"mc", thema:"beruf-bewerbung", frage:"Nach „Sehr geehrte Damen und Herren,“ wie geht es weiter?",
    optionen:["Mit großem Interesse …","mit großem Interesse …"], richtig:1,
    regel:"Nach dem Komma der Anrede wird <b>klein</b> weitergeschrieben. Häufiger Fehler bei Nicht-Muttersprachlern.",
    en:"After the comma of the salutation, German continues in lowercase." },
  { typ:"ordnen", thema:"beruf-bewerbung",
    frage:"Bau den Satz über deine Motivation.",
    woerter:["Besonders","reizt","mich","an","Ihrem","Unternehmen,","dass","Sie","stark","auf","KI","setzen."],
    loesung:"Besonders reizt mich an Ihrem Unternehmen, dass Sie stark auf KI setzen.",
    regel:"„Besonders“ auf Position 1 → Verb „reizt“ auf Position 2. Im dass-Satz das Verb „setzen“ ans Ende." , en:"Fronting <b>Besonders</b> pushes the verb <b>reizt</b> into second place, and the dass-clause sends <b>setzen</b> to the end." },
  { typ:"luecke", thema:"beruf-bewerbung", frage:"Verfügbarkeit angeben:",
    satz:"Gerne stehe ich Ihnen für Rückfragen ___ Verfügung.", loesung:[["zur"]],
    regel:"Feste Wendung: „zur Verfügung stehen“ (zu + der Verfügung). Auswendig lernen." , en:"Fixed formal closing phrase offering yourself for questions; <b>zur</b> is zu plus der and never changes." },
  { typ:"frei", thema:"beruf-bewerbung",
    frage:"Schreib den <b>zweiten Absatz</b> deines Anschreibens (ca. 50 Wörter): Was machst du jetzt, und welche Erfahrung bringst du mit?",
    mindestWorte:50,
    hinweise:["In meiner jetzigen Position als … bin ich für … verantwortlich.","Dabei konnte ich … Erfahrung sammeln.","Darüber hinaus …","Zu meinen Aufgaben gehört/gehören …"],
    muster:"<b>In meiner jetzigen Position als</b> Berater im Bereich Technologie <b>bin ich für</b> die Analyse von Geschäftsprozessen " +
      "und die Einführung von KI-Lösungen <b>verantwortlich</b>. <b>Dabei konnte ich</b> umfangreiche <b>Erfahrung</b> in der Zusammenarbeit " +
      "mit internationalen Teams <b>sammeln</b>. <b>Darüber hinaus</b> habe ich gelernt, komplexe technische Inhalte so zu erklären, " +
      "dass auch Kolleginnen ohne technischen Hintergrund sie verstehen.",
    kriterien:"Prüfe drei Dinge: steht „verantwortlich für“ mit Akkusativ? Ist mindestens ein Nebensatz dabei? Ist der Ton sachlich statt werbend? " +
      "Deutsche Anschreiben sind nüchterner als englische, keine Superlative über sich selbst." , en:"Paragraph two of a German cover letter is your current role and what you bring, in plain factual sentences." }
]},

/* ---------------------------------------------------------- */
"beruf-gespraech": {
titel: "Vorstellungsgespräch",
kurz: "Die fünf Fragen, die immer kommen: und wie du sie beantwortest",
konzept: {
  titel: "Das Vorstellungsgespräch: Struktur und Redemittel",
  einfach: {
    kern: "Im deutschen Vorstellungsgespräch kommen fast immer dieselben fünf Fragen.",
    paare: [
      { satz: "<b>Ich bin seit</b> sechs <b>Jahren im Bereich</b> Softwareentwicklung <b>tätig</b>. Zurzeit arbeite ich als Backend-Entwickler.",
        notiz: "Das ist deine Antwort auf „Erzählen Sie etwas über sich.“ Bleib beruflich, zwei Minuten reichen." },
      { satz: "<b>Zu meinen Stärken zählt</b>, dass ich komplexe technische Themen einfach <b>erklären kann</b>.",
        notiz: "Nenne eine Stärke und sofort ein Beispiel dazu. Im dass-Satz steht das Verb ganz hinten: „erklären kann“." },
      { satz: "<b>Könnten Sie</b> die Frage bitte <b>wiederholen?</b>",
        notiz: "„Könnten Sie …?“ ist höflich. „Können Sie …?“ ist nicht falsch, klingt im Gespräch aber schroffer." },
      { satz: "Mein Deutsch ist noch nicht perfekt, <b>aber</b> ich besuche gerade einen B2-Kurs und mache schnelle Fortschritte.",
        notiz: "Sag nie „Mein Deutsch ist schlecht“. Nenne dein Niveau ehrlich und sag dazu, was du dafür tust." }
    ],
    merk: "Am Ende fragt man dich: „Haben Sie noch Fragen?“ Sag nie Nein, sondern bring zwei eigene Fragen mit."
  },
  de: "<p>Deutsche Vorstellungsgespräche laufen erstaunlich vorhersehbar ab. " +
      "Fünf Fragen kommen fast immer. Wenn du die auf Deutsch flüssig beantworten kannst, " +
      "bist du weiter als die meisten Bewerber mit besserem Deutsch aber ohne Vorbereitung.</p>",
  tabelle: {
    kopf: ["Frage", "Was sie wirklich wollen", "Dein Einstieg"],
    zeilen: [
      ["<b>Erzählen Sie etwas über sich.</b>", "Ein 2-Minuten-Überblick, beruflich, nicht privat.",
       "„Ich bin seit … Jahren im Bereich … tätig. Zurzeit arbeite ich als … bei …“"],
      ["<b>Warum haben Sie sich bei uns beworben?</b>", "Hast du dich informiert?",
       "„Mich reizt besonders, dass … Außerdem passt … gut zu meiner Erfahrung mit …“"],
      ["<b>Was sind Ihre Stärken / Schwächen?</b>", "Selbsteinschätzung mit Beispiel.",
       "„Zu meinen Stärken zählt … Ein Beispiel dafür ist …“ · „Ich neige dazu, … Daran arbeite ich, indem ich …“"],
      ["<b>Warum wollen Sie wechseln?</b>", "Kein Schlechtreden des alten Jobs!",
       "„Ich suche eine Aufgabe, bei der ich … kann.“ · „Ich möchte mich beruflich weiterentwickeln.“"],
      ["<b>Haben Sie noch Fragen?</b>", "IMMER ja. Zwei Fragen vorbereiten.",
       "„Wie sieht ein typischer Arbeitstag in dieser Position aus?“ · „Wie ist das Team aufgestellt?“"]
    ]
  },
  regel: "Sprich über deine Sprache: „Mein Deutsch ist noch nicht perfekt, aber ich lerne intensiv und arbeite täglich daran.“ Das ist stark, nicht schwach, es zeigt Selbsteinschätzung.",
  beispiele: [
    "Zeit gewinnen statt schweigen: „<b>Das ist eine gute Frage.</b> Lassen Sie mich kurz überlegen …“",
    "Nachfragen ist erlaubt: „<b>Könnten Sie die Frage bitte wiederholen?</b>“ · „<b>Habe ich Sie richtig verstanden, dass …?</b>“",
    "Nie: „Mein Deutsch ist schlecht.“ Immer: „Ich lerne gerade B2 und mache schnelle Fortschritte.“"
  ],
  en: "German interviews are predictable, five questions come up almost every time. Prepare those five in German and you are ahead of most candidates. Never badmouth a previous employer, and always have two questions ready at the end."
},
items: [
  { typ:"luecke", thema:"beruf-gespraech", frage:"Über deine Berufserfahrung:",
    satz:"Ich bin seit fünf Jahren ___ Bereich Technologieberatung tätig.", loesung:[["im"]],
    regel:"„im Bereich …“ = in + dem. Feste Wendung für Branchenangaben." , en:"<b>Im Bereich</b> is the set phrase for naming your industry or field, from in plus dem." },
  { typ:"luecke", thema:"beruf-gespraech", frage:"Zeit gewinnen, wenn du eine Frage nicht verstanden hast:",
    satz:"___ Sie die Frage bitte wiederholen?", loesung:[["Könnten","Würden"]],
    regel:"Konjunktiv II für die höfliche Bitte. „Können Sie …?“ klingt im Gespräch schroffer.",
    en:"Politeness in an interview runs on Konjunktiv II." },
  { typ:"luecke", thema:"beruf-gespraech", frage:"Rückversichern:",
    satz:"Habe ich Sie richtig ___, dass die Stelle auch Reisen ___?", loesung:[["verstanden"],["beinhaltet","umfasst"]],
    regel:"„Habe ich Sie richtig verstanden, dass …“ rettet dich in jedem Gespräch. Verb im dass-Satz ans Ende." , en:"Polite checking formula that buys you time in any interview; the dass-clause puts <b>beinhaltet</b> last." },
  { typ:"mc", thema:"beruf-gespraech", frage:"„Warum möchten Sie wechseln?“ welche Antwort ist besser?",
    optionen:[
      "Mein jetziger Chef ist unfair und die Firma ist schlecht organisiert.",
      "Ich suche eine Aufgabe, bei der ich stärker mit Kunden arbeiten kann."
    ], richtig:1,
    regel:"Nie den alten Arbeitgeber schlechtreden, das gilt in Deutschland als unprofessionell. Immer nach vorne formulieren.",
    en:"Never badmouth a former employer in a German interview." },
  { typ:"mc", thema:"beruf-gespraech", frage:"Wie sprichst du dein Deutschniveau an?",
    optionen:[
      "Entschuldigung, mein Deutsch ist sehr schlecht.",
      "Mein Deutsch ist noch nicht perfekt, aber ich besuche gerade einen B2-Intensivkurs und mache schnelle Fortschritte."
    ], richtig:1,
    regel:"Realistische Selbsteinschätzung plus konkrete Maßnahme. Das ist eine Stärke, keine Entschuldigung." , en:"Name your level honestly and add what you are doing about it; that reads as initiative." },
  { typ:"ordnen", thema:"beruf-gespraech",
    frage:"Bau den Satz über deine Stärken.",
    woerter:["Zu","meinen","Stärken","zählt,","dass","ich","komplexe","Themen","einfach","erklären","kann."],
    loesung:"Zu meinen Stärken zählt, dass ich komplexe Themen einfach erklären kann.",
    regel:"„Zu meinen Stärken zählt/gehört, dass …“ im dass-Satz Infinitiv + Modalverb ganz ans Ende." , en:"Standard way to present a strength; in the dass-clause the infinitive stands before the modal <b>kann</b> at the end." },
  { typ:"luecke", thema:"beruf-gespraech", frage:"Eigene Frage am Ende:",
    satz:"Wie ___ ein typischer Arbeitstag in dieser Position ___?", loesung:[["sieht"],["aus"]],
    regel:"aus|sehen ist trennbar: „sieht … aus“. Immer zwei eigene Fragen vorbereiten." , en:"Separable verb <b>aussehen</b> splits in a main clause: <b>sieht</b> in second place, <b>aus</b> at the end." },
  { typ:"frei", thema:"beruf-gespraech",
    frage:"<b>„Erzählen Sie etwas über sich.“</b> Schreib deine Antwort (ca. 90 Wörter), als würdest du sie sprechen.",
    mindestWorte:90,
    hinweise:["Ich bin seit … Jahren im Bereich … tätig.","Zurzeit arbeite ich als … bei …","Zu meinen Aufgaben gehört …","Besonders interessiert mich …","Deshalb bewerbe ich mich …"],
    muster:"Gerne. <b>Ich bin seit</b> etwa sechs <b>Jahren im Bereich</b> Technologie und Beratung <b>tätig</b>. " +
      "<b>Zurzeit arbeite ich als</b> Berater und <b>bin für</b> die Einführung von KI-Lösungen <b>verantwortlich</b>. " +
      "<b>Zu meinen Aufgaben gehört</b> es, Geschäftsprozesse zu analysieren und technische Lösungen so zu erklären, " +
      "dass auch Kolleginnen ohne technischen Hintergrund sie verstehen. " +
      "<b>Besonders interessiert mich</b> die Schnittstelle zwischen Technik und Menschen. " +
      "Seit ich in Deutschland lebe, lerne ich intensiv Deutsch, zurzeit im B2-Intensivkurs. " +
      "<b>Deshalb bewerbe ich mich</b> jetzt auf eine Stelle, bei der ich beides einbringen kann.",
    kriterien:"Zwei Minuten sprechen entspricht etwa 200 Wörtern. Struktur: heute → Aufgaben → Stärke mit Beleg → warum diese Stelle. " +
      "Beruflich bleiben, nicht privat. Und: <b>laut sprechen üben</b>, nicht nur schreiben." , en:"Answer this in about ninety seconds: current role, main tasks, what interests you, why this job." }
]},

/* ---------------------------------------------------------- */
"beruf-email": {
titel: "Geschäftliche E-Mails",
kurz: "Formell schreiben: dieselben Kriterien wie telc Schriftlicher Ausdruck",
konzept: {
  titel: "Die formelle E-Mail: Gerüst und Register",
  einfach: {
    kern: "Eine formelle E-Mail ist ein Baukasten: Anrede, Bezug, Bitte, freundlicher Schluss.",
    paare: [
      { satz: "<b>Bezugnehmend auf</b> Ihre E-Mail vom 12. Mai sende ich Ihnen den Testbericht.",
        notiz: "So beziehst du dich auf eine frühere Mail. Etwas lockerer und auch gut: „Vielen Dank für Ihre E-Mail vom 12. Mai.“" },
      { satz: "<b>Könnten Sie mir bitte</b> den Zugang zum Repository <b>freischalten?</b>",
        notiz: "Formell ist die Bitte eine höfliche Frage. Im Team mit „du“ genügt: „<b>Kannst du</b> mir bitte den Zugang freischalten?“" },
      { satz: "<b>Aufgrund</b> eines wichtigen Termins kann ich leider nicht am Meeting teilnehmen.",
        notiz: "„aufgrund“ steht mit Genitiv: aufgrund <b>eines</b> Termins. Es ersetzt einen ganzen weil-Satz und klingt sofort formeller." },
      { satz: "<b>Anbei finden Sie</b> meine Unterlagen. <b>Vielen Dank im Voraus.</b>",
        notiz: "Zwei feste Formeln: Anhang ankündigen und sich vorab bedanken. Danach „Mit freundlichen Grüßen“, ohne Komma." }
    ],
    merk: "Drei Dinge machen den Ton formell: <b>Sie</b> statt du, <b>könnten</b> statt Befehl, und <b>aufgrund</b> statt „weil“."
  },
  de: "<p>Gute Nachricht: Die telc-Schreibaufgabe <b>ist</b> eine formelle E-Mail. " +
      "Was du hier lernst, bringt dir gleichzeitig Prüfungspunkte und einen professionellen Eindruck im Job.</p>",
  tabelle: {
    kopf: ["Funktion", "Formell (Job, Prüfung)", "Zu locker, vermeiden"],
    zeilen: [
      ["Anrede", "Sehr geehrte Frau Klein,", "Hallo Frau Klein, <span class='en'>(ok bei Kollegen)</span>"],
      ["Bezug", "<b>Bezugnehmend auf</b> Ihre E-Mail vom 12. Mai …", "Wegen deiner Mail …"],
      ["Bitte", "<b>Könnten Sie mir bitte</b> … <b>zusenden?</b>", "Schick mir mal …"],
      ["Grund", "<b>Aufgrund</b> eines Termins … <span class='en'>(+ Genitiv)</span>", "Weil ich einen Termin hab …"],
      ["Vorschlag", "<b>Ich schlage vor, dass wir</b> … / <b>Wie wäre es mit</b> …?", "Lass uns mal …"],
      ["Schluss", "<b>Vielen Dank im Voraus.</b> Mit freundlichen Grüßen", "Danke! LG"]
    ]
  },
  regel: "Der Registerwechsel liegt fast nur an drei Dingen: Sie statt du, Konjunktiv II statt Imperativ, und Nominalstil (aufgrund, bezüglich) statt Nebensatz. Genau das prüft telc unter „kommunikative Gestaltung“.",
  beispiele: [
    "Absage höflich: „<b>Leider muss ich Ihnen mitteilen, dass</b> ich den Termin nicht wahrnehmen kann.“",
    "Nachfassen: „<b>Ich erlaube mir, noch einmal nachzufragen</b>, ob meine Bewerbung angekommen ist.“",
    "Anhang: „<b>Anbei finden Sie</b> meine Unterlagen.“ · „<b>Im Anhang</b> sende ich Ihnen …“"
  ],
  en: "The telc writing task IS a formal email, so this module earns exam points and workplace credibility at the same time. Register comes down to three things: Sie, Konjunktiv II instead of imperatives, and nominal style."
},
items: [
  { typ:"luecke", thema:"beruf-email", frage:"Bezug auf eine frühere Mail:",
    satz:"___ auf Ihre E-Mail vom 12. Mai sende ich Ihnen die Unterlagen.", loesung:[["Bezugnehmend"]],
    regel:"„Bezugnehmend auf“ + Akkusativ. Alternative: „Mit Bezug auf …“ oder „Vielen Dank für Ihre E-Mail vom …“." , en:"Very formal opener referring back to an earlier mail; <b>bezugnehmend auf</b> takes the accusative." },
  { typ:"luecke", thema:"beruf-email", frage:"Höfliche Bitte:",
    satz:"___ Sie mir bitte die Vertragsunterlagen zusenden?", loesung:[["Könnten","Würden"]],
    regel:"Konjunktiv II. Im Imperativ („Senden Sie mir …!“) wirkt es wie ein Befehl." , en:"Konjunktiv II turns the request into a polite question; the plain imperative would sound like an order." },
  { typ:"luecke", thema:"beruf-email", frage:"Grund im Nominalstil (formeller als „weil“):",
    satz:"___ eines wichtigen Termins kann ich leider nicht teilnehmen.", loesung:[["Aufgrund","Wegen"]],
    regel:"„aufgrund“ / „wegen“ + Genitiv. Im Brief klingt „aufgrund“ eine Spur formeller." , en:"Both take the genitive and replace a <b>weil</b> clause; <b>aufgrund</b> sounds a shade more formal in letters." },
  { typ:"luecke", thema:"beruf-email", frage:"Anhang ankündigen:",
    satz:"___ finden Sie meinen aktuellen Lebenslauf.", loesung:[["Anbei"]],
    regel:"„Anbei finden Sie …“ ist die Standardformel. Ebenfalls gut: „Im Anhang sende ich Ihnen …“." , en:"<b>Anbei finden Sie</b> is the standard formal way to announce an attachment in business mail." },
  { typ:"luecke", thema:"beruf-email", frage:"Schlechte Nachricht höflich verpacken:",
    satz:"Leider muss ich Ihnen mitteilen, ___ ich den Termin nicht wahrnehmen ___.", loesung:[["dass"],["kann"]],
    regel:"„Leider muss ich Ihnen mitteilen, dass …“ im dass-Satz Verb ans Ende." , en:"Formal cushion for bad news; <b>dass</b> opens the clause and the modal <b>kann</b> goes to the end." },
  { typ:"mc", thema:"beruf-email", frage:"Welche Anrede passt an eine unbekannte Personalabteilung?",
    optionen:["Hallo zusammen,","Sehr geehrte Damen und Herren,","Liebe Kollegen,"], richtig:1,
    regel:"Unbekannter Empfänger → „Sehr geehrte Damen und Herren,“. Namen bekannt → „Sehr geehrte Frau X,“." , en:"With no name for the recipient you use <b>Sehr geehrte Damen und Herren</b>; with a name, use it." },
  { typ:"cloze", thema:"beruf-email", frage:"Ergänze die Nachfass-E-Mail zu deiner Bewerbung.",
    text:"Sehr geehrte Frau Klein,<br><br>___ auf meine Bewerbung vom 3. Juni erlaube ich mir, noch einmal nachzufragen. " +
         "___ ich sehr an der Stelle interessiert bin, würde ich mich über eine kurze Rückmeldung freuen. " +
         "___ Sie mir mitteilen, bis wann mit einer Entscheidung zu rechnen ist? " +
         "Vielen Dank ___ Voraus.<br><br>Mit freundlichen Grüßen",
    luecken:[
      { optionen:["Bezugnehmend","Wegen","Trotz"], richtig:0, regel:"„Bezugnehmend auf“ ist die Standard-Bezugsformel." },
      { optionen:["Obwohl","Da","Trotzdem"], richtig:1, regel:"„gerade weil“ → „Da ich sehr interessiert bin“. Das Verb steht am Ende, also Nebensatzkonnektor." },
      { optionen:["Können","Könnten","Konnten"], richtig:1, regel:"Konjunktiv II für die höfliche Bitte." },
      { optionen:["im","in","zum"], richtig:0, regel:"Feste Wendung: „Vielen Dank im Voraus.“" }
    ],
    en:"A follow-up email after a job application, one of the most useful texts you can own." },
  { typ:"frei", thema:"beruf-email",
    frage:"Schreib eine kurze formelle E-Mail (ca. 70 Wörter): Du kannst einen vereinbarten Gesprächstermin nicht wahrnehmen und schlägst einen neuen vor.",
    mindestWorte:70,
    hinweise:["Sehr geehrte Frau …,","Leider muss ich Ihnen mitteilen, dass …","Aufgrund + Genitiv","Ich schlage vor, dass …","Wäre Ihnen … recht?","Vielen Dank für Ihr Verständnis."],
    muster:"Sehr geehrte Frau Klein,<br><br>vielen Dank für die Einladung zum Gespräch am 14. August. " +
      "<b>Leider muss ich Ihnen mitteilen, dass</b> ich diesen Termin <b>aufgrund</b> einer beruflichen Verpflichtung nicht wahrnehmen kann. " +
      "<b>Ich schlage vor, dass</b> wir das Gespräch auf die folgende Woche verschieben. " +
      "<b>Wäre Ihnen</b> der 18. oder 19. August <b>recht?</b> " +
      "Selbstverständlich richte ich mich nach Ihrer Verfügbarkeit.<br><br>" +
      "<b>Vielen Dank für Ihr Verständnis.</b><br><br>Mit freundlichen Grüßen<br>Karthik",
    kriterien:"telc-Kriterien und Job-Kriterien sind hier identisch: Anrede korrekt, Anlass genannt, Bitte höflich (Konjunktiv II), " +
      "konkreter Vorschlag, freundlicher Schluss. Alle vier Punkte = volle Punktzahl." , en:"Formal cancellation e-mail: apologise, give a reason, propose a new date, thank them for understanding." }
]},

/* ---------------------------------------------------------- */
"beruf-buero": {
titel: "Büro, Meetings & Small Talk",
kurz: "Die Sätze für den Arbeitsalltag: und das Du/Sie-Problem",
konzept: {
  titel: "Im Meeting mitreden: ohne perfektes Deutsch",
  einfach: {
    kern: "Im Meeting brauchst du kein perfektes Deutsch, sondern ein paar feste Sätze.",
    paare: [
      { satz: "<b>Darf ich kurz etwas ergänzen?</b> Wir hatten das Problem im letzten Sprint schon einmal.",
        notiz: "So kommst du höflich ins Gespräch. Erst kurz fragen, dann sofort deinen Punkt sagen." },
      { satz: "<b>Habe ich das richtig verstanden, dass</b> wir bis Freitag <b>liefern müssen?</b>",
        notiz: "Der nützlichste Satz im Job: er verhindert teure Missverständnisse. Nach „dass“ steht das Verb ganz am Ende." },
      { satz: "<b>Da bin ich anderer Meinung</b>, weil der Aufwand für das Team zu hoch <b>ist</b>.",
        notiz: "So widersprichst du, ohne unhöflich zu wirken: erst deine Meinung, dann der Grund mit „weil“." },
      { satz: "<b>Könnten Sie</b> das bitte noch einmal erklären? / <b>Kannst du</b> das bitte noch einmal erklären?",
        notiz: "Gleicher Satz, zwei Register. Bei Kunden und im Erstkontakt „Sie“, im Entwicklerteam meistens „du“." }
    ],
    merk: "Das „Du“ wird angeboten, nie genommen. Warte ab, wie man dich anspricht, und mach es genauso."
  },
  de: "<p>Im Job musst du nicht fehlerfrei sprechen. Du musst <b>eingreifen</b> können: " +
      "nachfragen, widersprechen, um Wiederholung bitten. Dafür reichen zwölf Sätze.</p>",
  tabelle: {
    kopf: ["Situation", "Redemittel"],
    zeilen: [
      ["Wortmeldung", "<b>Darf ich kurz etwas ergänzen?</b> · <b>Dazu hätte ich eine Anmerkung.</b>"],
      ["Nicht verstanden", "<b>Entschuldigung, könnten Sie das bitte noch einmal erklären?</b> · <b>Wie meinen Sie das genau?</b>"],
      ["Zeit gewinnen", "<b>Das ist eine gute Frage.</b> · <b>Lassen Sie mich kurz überlegen.</b>"],
      ["Zustimmen", "<b>Da stimme ich Ihnen zu.</b> · <b>Das sehe ich genauso.</b>"],
      ["Höflich widersprechen", "<b>Da bin ich anderer Meinung, weil …</b> · <b>Ich sehe das etwas anders.</b>"],
      ["Vorschlagen", "<b>Ich würde vorschlagen, dass wir …</b> · <b>Wie wäre es, wenn wir …?</b>"],
      ["Absichern", "<b>Habe ich das richtig verstanden, dass …?</b>"],
      ["Zusammenfassen", "<b>Wenn ich das kurz zusammenfassen darf: …</b>"]
    ]
  },
  regel: "Du/Sie: In der IT- und Startup-Welt ist „du“ oft Standard, in Behörden, Beratung und bei Kunden bleibt „Sie“. Faustregel: Warte ab, wie man DICH anspricht, und spiegle es. Das „Du“ wird angeboten, nie genommen.",
  beispiele: [
    "Small Talk funktioniert über drei Themen: Wetter, Anfahrt, Wochenende. Politik und Gehalt gehören nicht dazu.",
    "„Wie war Ihr Wochenende?“ kurze Antwort, dann zurückfragen: „<b>Und bei Ihnen?</b>“",
    "Am Telefon: „<b>Karthik Jayaprakash, guten Tag.</b>“ in Deutschland nennt man beim Abheben den Nachnamen."
  ],
  en: "At work you don't need flawless German, you need to be able to intervene: ask for repetition, check understanding, disagree politely. Twelve phrases cover it. Note the du/Sie rule: du is offered, never taken."
},
items: [
  { typ:"luecke", thema:"beruf-buero", frage:"Höflich ins Gespräch einsteigen:",
    satz:"___ ich kurz etwas ergänzen?", loesung:[["Darf","Dürfte","Könnte"]],
    regel:"„Darf ich kurz …?“ ist die Standard-Wortmeldung im Meeting." , en:"Standard polite way to take the floor in a meeting; <b>Dürfte</b> sounds one shade softer." },
  { typ:"luecke", thema:"beruf-buero", frage:"Um Wiederholung bitten:",
    satz:"Entschuldigung, ___ Sie das bitte noch einmal erklären?", loesung:[["könnten","würden"]],
    regel:"Konjunktiv II. Diesen Satz solltest du blind können, er rettet jede Situation." , en:"Konjunktiv II for asking someone to repeat something. Learn this one by heart for calls and meetings." },
  { typ:"luecke", thema:"beruf-buero", frage:"Verständnis absichern:",
    satz:"Habe ich das richtig verstanden, ___ wir bis Freitag liefern ___?", loesung:[["dass"],["müssen","sollen"]],
    regel:"dass-Satz, Verb ans Ende. Vermeidet teure Missverständnisse." , en:"Confirming what was agreed; <b>dass</b> sends the modal <b>müssen</b> to the very end of the clause." },
  { typ:"luecke", thema:"beruf-buero", frage:"Höflich widersprechen:",
    satz:"Da bin ich ___ Meinung, weil die Kosten zu hoch ___.", loesung:[["anderer"],["sind","wären"]],
    regel:"„anderer Meinung sein“ Genitiv-artige feste Wendung. Danach Begründung mit „weil“ (Verb ans Ende)." , en:"<b>Anderer Meinung sein</b> is the polite way to disagree, then <b>weil</b> puts your reason with the verb last." },
  { typ:"luecke", thema:"beruf-buero", frage:"Vorschlag machen:",
    satz:"Ich ___ vorschlagen, dass wir das nächste Woche besprechen.", loesung:[["würde"]],
    regel:"„Ich würde vorschlagen, dass …“ ist weicher als „Ich schlage vor“ im Meeting oft besser." , en:"<b>Ich würde vorschlagen</b> softens a proposal; <b>Ich schlage vor</b> can sound like the decision is made." },
  { typ:"mc", thema:"beruf-buero", frage:"Neue Kollegin, Beratungsfirma, erstes Treffen, wie sprichst du sie an?",
    optionen:["Du, mit Vornamen","Sie, mit Nachnamen, bis sie das Du anbietet"], richtig:1,
    regel:"Das „Du“ wird angeboten, nie genommen. In der IT geht es oft schnell, aber der erste Zug liegt bei der anderen Person.",
    en:"Du is offered, never taken." },
  { typ:"mc", thema:"beruf-buero", frage:"Du meldest dich am Telefon im Büro. Was sagst du?",
    optionen:["Hallo?","Karthik Jayaprakash, guten Tag.","Wer ist da?"], richtig:1,
    regel:"In Deutschland nennt man beim Abheben den eigenen Namen, meist den Nachnamen. „Hallo?“ wirkt privat." , en:"In German offices you answer with your own name, usually the surname; <b>Hallo</b> sounds private." },
  { typ:"zuordnen", thema:"beruf-buero",
    frage:"Meeting-Redemittel: ordne jede Wendung ihrer Funktion zu.",
    paare:[
      ["Das sehe ich genauso.","zustimmen"],
      ["Ich sehe das etwas anders.","höflich widersprechen"],
      ["Wenn ich das kurz zusammenfassen darf: …","zusammenfassen"],
      ["Lassen Sie mich kurz überlegen.","Zeit gewinnen"]
    ],
    regel:"Diese vier decken 80 % aller Meeting-Situationen ab." , en:"Four core meeting moves: agreeing, disagreeing softly, summarising, and buying yourself a moment to think." },
  { typ:"frei", thema:"beruf-buero",
    frage:"Small Talk üben: Eine Kollegin fragt dich am Montagmorgen „<b>Und, wie war Ihr Wochenende?</b>“ antworte in 3–4 Sätzen und stell eine Rückfrage.",
    mindestWorte:35,
    hinweise:["Danke, es war …","Ich war/habe …","Und bei Ihnen?","Haben Sie etwas Schönes gemacht?"],
    muster:"Danke, es war <b>ganz entspannt</b>. Am Samstag war ich im Fitnessstudio und danach habe ich Deutsch gelernt, " +
      "ich bereite mich gerade auf eine Prüfung vor. Am Sonntag habe ich mit meiner Familie telefoniert. " +
      "<b>Und bei Ihnen?</b> Haben Sie etwas Schönes gemacht?",
    kriterien:"Small Talk hat eine Regel: kurz antworten, dann zurückfragen. Wer nur antwortet, wirkt desinteressiert; " +
      "wer zu lang erzählt, auch. Drei Sätze plus Rückfrage ist genau richtig." , en:"Monday small talk is short and friendly, and you always hand the question back with <b>Und bei Ihnen?</b>" }
]}

};

/* Rotation über die vier Berufsthemen, ein Thema pro Kurstag */
KURS.berufPlan = ["beruf-gespraech", "beruf-email", "beruf-buero", "beruf-bewerbung"];

KURS.berufBlock = function (tagNr) {
  var thema = KURS.berufPlan[(tagNr - 1) % KURS.berufPlan.length];
  var topf = KURS.beruf[thema];
  var pool = topf.items, out = [], off = (tagNr - 1) * 2;
  for (var i = 0; i < pool.length && out.length < 5; i++) {
    var it = pool[(off + i) % pool.length];
    if (out.indexOf(it) === -1) out.push(it);
  }
  return {
    titel: "Berufsdeutsch: " + topf.titel,
    telc: "Mündlicher & Schriftlicher Ausdruck",
    phase: 3,
    hinweis: "<b>Warum das hier steht:</b> Dein Hauptziel ist der Job, nicht das Zertifikat. " +
             "Diese Redemittel zahlen doppelt, im Bewerbungsgespräch und in der telc-Prüfung. " +
             topf.kurz + ". <a href='berufsdeutsch.html#" + thema + "'>Alle Erklärungen →</a>",
    items: out
  };
};

/* Modulseite berufsdeutsch.html */
(function () {
  var konzepte = [], bloecke = [];
  KURS.berufPlan.forEach(function (t) {
    var f = KURS.beruf[t];
    konzepte.push(f.konzept);
    bloecke.push({ titel: f.titel, telc: "Beruf", hinweis: f.kurz, items: f.items });
  });
  KURS.seiten["berufsdeutsch"] = {
    id: "berufsdeutsch", nr: 0, datum: "",
    titel: "Berufsdeutsch",
    untertitel: "Anschreiben, Vorstellungsgespräch, E-Mails und Meetings: die Sprache, die dir den Job bringt.",
    themen: KURS.berufPlan,
    konzepte: konzepte,
    bloecke: bloecke,
    wortschatz: [
      { de:"sich bewerben um + Akk. / bei + Dat.", en:"to apply for / at", bsp:"Ich bewerbe mich um die Stelle bei Ihrem Unternehmen." },
      { de:"verantwortlich sein für + Akk.", en:"to be responsible for", bsp:"Ich bin für die Kundenbetreuung verantwortlich." },
      { de:"Erfahrung sammeln (in + Dat.)", en:"to gain experience", bsp:"Dabei konnte ich viel Erfahrung im Projektmanagement sammeln." },
      { de:"zur Verfügung stehen", en:"to be available", bsp:"Gerne stehe ich Ihnen für Rückfragen zur Verfügung." },
      { de:"einen Termin wahrnehmen", en:"to attend an appointment", bsp:"Leider kann ich den Termin nicht wahrnehmen." },
      { de:"bezugnehmend auf + Akk.", en:"with reference to", bsp:"Bezugnehmend auf Ihre E-Mail vom 12. Mai …" },
      { de:"anbei", en:"attached, enclosed", bsp:"Anbei finden Sie meinen Lebenslauf." },
      { de:"die Stellenanzeige, -n", en:"job advertisement", bsp:"Mit großem Interesse habe ich Ihre Stellenanzeige gelesen." },
      { de:"der Lebenslauf, ¨-e", en:"CV, résumé", bsp:"Meinen Lebenslauf finden Sie im Anhang." },
      { de:"das Vorstellungsgespräch, -e", en:"job interview", bsp:"Ich freue mich auf ein persönliches Vorstellungsgespräch." },
      { de:"die Rückmeldung, -en", en:"feedback, reply", bsp:"Über eine kurze Rückmeldung würde ich mich freuen." },
      { de:"sich weiterentwickeln", en:"to develop further", bsp:"Ich möchte mich beruflich weiterentwickeln." },
      { de:"etwas ergänzen", en:"to add something", bsp:"Darf ich kurz etwas ergänzen?" },
      { de:"anderer Meinung sein", en:"to disagree", bsp:"Da bin ich anderer Meinung, weil …" },
      { de:"im Voraus", en:"in advance", bsp:"Vielen Dank im Voraus." }
    ],
    zusammenfassung:
      "<ul class='bsp'>" +
      "<li><b>Anschreiben:</b> vier Absätze, Einstieg, Erfahrung, warum diese Firma, höflicher Schluss. Nach der Anrede klein weiterschreiben.</li>" +
      "<li><b>Gespräch:</b> fünf Fragen kommen fast immer. Nie den alten Arbeitgeber schlechtreden. Zwei eigene Fragen mitbringen.</li>" +
      "<li><b>E-Mail:</b> Sie + Konjunktiv II + Nominalstil. Das ist gleichzeitig die telc-Schreibaufgabe.</li>" +
      "<li><b>Meeting:</b> „Könnten Sie das bitte noch einmal erklären?“ und „Habe ich das richtig verstanden, dass …?“ blind können.</li>" +
      "<li><b>Du/Sie:</b> Das Du wird angeboten, nie genommen.</li>" +
      "</ul>",
    dialog:
      "<p>Antworte mir im Chat auf Deutsch, <b>erst laut sprechen</b>:</p>" +
      "<p><b>1.</b> „Erzählen Sie etwas über sich.“ deine 90-Sekunden-Antwort.<br>" +
      "<b>2.</b> „Warum haben Sie sich bei uns beworben?“ such dir eine echte Stelle aus deinem JobSearch-Ordner aus.<br>" +
      "<b>3.</b> Eine Frage, die DU am Ende des Gesprächs stellen würdest.</p>"
  };
})();
