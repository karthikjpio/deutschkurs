/* ============================================================
   TELC DEUTSCH B1 (ZERTIFIKAT DEUTSCH), PRÜFUNGSTRAINING
   Format geprüft an telc Übungstest 1 (shop.telc.net):
   Leseverstehen Teil 1 Globalverstehen (5 Items, Überschriften zuordnen),
   Teil 2 Detailverstehen (5 Items, MC a/b/c), Teil 3 Selektives Verstehen
   (10 Items, Anzeigen zuordnen). Sprachbausteine Teil 1 (10 Items, MC a/b/c,
   Grammatik) und Teil 2 (10 Items, Wortbank a–o, Wortschatz/Redemittel).
   Leseverstehen und Sprachbausteine zusammen: 90 Minuten.
   Inhalte hier: Alltag und Beruf eines IT-Menschen in Aachen/NRW.
   ============================================================ */
KURS.pruefung = {

"b1-sprachbausteine": {
titel: "telc B1 · Sprachbausteine",
niveau: "b1",
teil: "Sprachbausteine",
kurz: "Grammatik und Redemittel im Textzusammenhang",
hinweis: "telc B1, Sprachbausteine Teil 1 (Grammatik) und Teil 2 (Wortschatz). In der echten Prüfung sind es 2 x 10 Lücken; Leseverstehen und Sprachbausteine zusammen dauern 90 Minuten. Plan: höchstens 20 Minuten für die Sprachbausteine, der Rest gehört dem Lesen.",
items: [

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze die E-Mail an die Personalabteilung. (Sprachbausteine Teil 1, Grammatik)",
  text:"Sehr geehrte Frau Berger, ___ Ihre schnelle Rückmeldung möchte ich mich herzlich bedanken. Gern nehme ich den Termin ___ 14. Oktober um 10 Uhr wahr. Ich arbeite seit vier Jahren ___ Softwareentwickler und interessiere mich besonders für Ihre Projekte im Bereich KI. ___ ich zurzeit einen Intensivkurs besuche, kann ich Vormittagstermine nur mit etwas Vorlauf einrichten. Bitte sagen Sie mir kurz Bescheid, ___ ich noch weitere Unterlagen mitbringen soll. Mit freundlichen Grüßen, Karthik Prasad",
  luecken:[
    { optionen:["Für","Über","Auf"], richtig:0, regel:"sich bedanken <b>für</b> + Akkusativ. „Über“ passt zu <b>sich freuen über</b>." },
    { optionen:["am","im","um"], richtig:0, regel:"Datum mit Tag: <b>am</b> 14. Oktober. „im“ steht vor Monaten und Jahreszeiten, „um“ vor Uhrzeiten." },
    { optionen:["als","wie","für"], richtig:0, regel:"Beruf oder Funktion: arbeiten <b>als</b> Softwareentwickler. „wie“ vergleicht nur." },
    { optionen:["Da","Denn","Trotzdem"], richtig:0, regel:"<b>Da</b> leitet einen Nebensatz ein, das Verb steht am Ende (…besuche). „Denn“ verlangt Hauptsatzstellung." },
    { optionen:["ob","dass","wenn"], richtig:0, regel:"Indirekte Ja/Nein-Frage nach „Bescheid sagen“ → <b>ob</b>." }
  ],
  regel:"Klassische telc-Mischung: Präposition mit festem Verb, Datumspräposition, „als“ beim Beruf, Konnektor mit Verbendstellung und indirekte Frage mit „ob“.",
  en:"A formal reply email drilling fixed prepositions, date forms, als for jobs, da word order and indirect questions." },

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze die Bewerbung um eine Wohnung. (Sprachbausteine Teil 1, Grammatik)",
  text:"Sehr geehrter Herr Lehmann, mit großem Interesse habe ich Ihre Anzeige für die 2-Zimmer-Wohnung in der Jülicher Straße gelesen. Ich bin 31 Jahre alt, arbeite ___ einem IT-Unternehmen in Aachen und suche eine ruhige Wohnung in der Nähe ___ Innenstadt. Die Wohnung, ___ Sie anbieten, wäre ideal für mich, weil ich mein Büro in zehn Minuten zu Fuß erreichen ___. Über eine Einladung zu einem Besichtigungstermin würde ich mich sehr ___. Mit freundlichen Grüßen, Karthik Prasad",
  luecken:[
    { optionen:["bei","zu","von"], richtig:0, regel:"Arbeitgeber: arbeiten <b>bei</b> + Dativ (bei einem Unternehmen, bei Siemens)." },
    { optionen:["der","die","dem"], richtig:0, regel:"„in der Nähe“ verlangt Genitiv: in der Nähe <b>der</b> Innenstadt." },
    { optionen:["die","der","dem"], richtig:0, regel:"Relativpronomen richtet sich nach dem Bezugswort (die Wohnung, feminin) und nach dem Kasus im Relativsatz: anbieten + Akkusativ → <b>die</b>." },
    { optionen:["kann","könnte","können"], richtig:0, regel:"Im weil-Satz steht das konjugierte Verb ganz am Ende: …erreichen <b>kann</b>. „können“ wäre nicht konjugiert." },
    { optionen:["freuen","gefreut","freue"], richtig:0, regel:"Nach „würde“ steht der Infinitiv: würde ich mich <b>freuen</b>." }
  ],
  regel:"Wohnungsbewerbung mit vier Dauerbrennern: bei + Dativ, Genitiv nach „in der Nähe“ Relativpronomen im Akkusativ und Verbendstellung im Nebensatz.",
  en:"An apartment enquiry testing bei plus dative, genitive after in der Nähe, relative pronouns and subordinate word order." },

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze die Anfrage an die Krankenkasse. (Sprachbausteine Teil 1, Grammatik)",
  text:"Sehr geehrte Damen und Herren, ich bin seit Januar bei Ihnen versichert und habe letzte Woche eine Rechnung ___ meinem Zahnarzt erhalten. Leider ___ mir bis heute nicht mitgeteilt, ob die Behandlung vollständig übernommen wird. Die Unterlagen habe ich bereits am 3. Mai ___ und zusätzlich im Kundenportal hochgeladen. Könnten Sie mir bitte ___, wie lange die Bearbeitung normalerweise dauert? ___ Sie mir bitte auch, welche Nachweise noch fehlen. Mit freundlichen Grüßen, Karthik Prasad",
  luecken:[
    { optionen:["von","aus","bei"], richtig:0, regel:"Herkunft von einer Person: eine Rechnung <b>von</b> meinem Zahnarzt." },
    { optionen:["wurde","würde","hat"], richtig:0, regel:"Passiv Präteritum: mir <b>wurde</b> nicht mitgeteilt. „würde“ wäre Konjunktiv, „hat“ passt nicht zum Partizip ohne Subjekt." },
    { optionen:["eingereicht","einreichen","einreicht"], richtig:0, regel:"Perfekt mit „habe“ verlangt das Partizip II: habe … <b>eingereicht</b>." },
    { optionen:["mitteilen","mitgeteilt","teilen mit"], richtig:0, regel:"Nach dem Modalverb „könnten“ steht der Infinitiv am Satzende: <b>mitteilen</b> (nicht getrennt)." },
    { optionen:["Sagen","Sagt","Sag"], richtig:0, regel:"Höflicher Imperativ mit Sie: <b>Sagen</b> Sie mir bitte …" }
  ],
  regel:"Behördenbrief mit Passiv (wurde … mitgeteilt), Perfekt-Partizip, Modalverb plus Infinitiv und Sie-Imperativ.",
  en:"An insurance enquiry covering passive voice, past participles, modal plus infinitive and the polite Sie imperative." },

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze den Aushang der Volkshochschule. (Sprachbausteine Teil 2, Wortschatz)",
  text:"Deutsch am Abend: neue Kurse ab September. Die Volkshochschule Aachen ___ ab dem 15. September wieder Abendkurse auf den Stufen B1 und B2 an. Der Unterricht ___ zweimal pro Woche statt, jeweils von 18 bis 21 Uhr. Voraussetzung ist ein Einstufungstest; er ist ___ und dauert etwa 30 Minuten. Die Kursgebühr ___ 180 Euro, ermäßigt 120 Euro. Eine Anmeldung ist nur online möglich, die Zahl der Plätze ist ___.",
  luecken:[
    { optionen:["bietet","gibt","macht"], richtig:0, regel:"Feste Verbindung: einen Kurs <b>anbieten</b>, die Vorsilbe „an“ steht am Satzende." },
    { optionen:["findet","gibt","nimmt"], richtig:0, regel:"<b>stattfinden</b>: Der Unterricht findet … statt. „es gibt“ hätte kein „statt“." },
    { optionen:["kostenlos","günstig","preiswert"], richtig:0, regel:"<b>kostenlos</b> = gratis. „günstig“ und „preiswert“ heißen nur billig, also trotzdem mit Kosten." },
    { optionen:["beträgt","kostet","zahlt"], richtig:0, regel:"Eine Gebühr <b>beträgt</b> einen Betrag. „kosten“ steht bei Waren oder Leistungen, nicht bei der Gebühr selbst." },
    { optionen:["begrenzt","geschlossen","besetzt"], richtig:0, regel:"Die Zahl der Plätze ist <b>begrenzt</b> = es gibt nur wenige. „besetzt“ sagt man von einzelnen Plätzen." }
  ],
  regel:"Teil 2 prüft Wortschatz im Kontext: Kollokationen wie „einen Kurs anbieten“, „der Kurs findet statt“, „die Gebühr beträgt“.",
  en:"A course notice practising collocations German uses for offers, schedules, fees and limited places." },

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze den Forumsbeitrag. (Sprachbausteine Teil 2, Wortschatz und Redemittel)",
  text:"Hallo zusammen, ich suche seit drei Monaten eine Stelle als Data Engineer im Raum Aachen und Köln. Auf zwölf Bewerbungen habe ich bisher nur zwei ___ bekommen, beide leider negativ. Ein Bekannter hat mir ___, mich direkt bei kleineren Firmen zu melden, statt nur über Jobportale zu suchen. Inzwischen ___ ich auch an einem Netzwerktreffen der IHK teilgenommen. Hat jemand ___ damit, wie wichtig ein deutsches Zertifikat wirklich ist? Vielen Dank ___!",
  luecken:[
    { optionen:["Rückmeldungen","Absagen","Meinungen"], richtig:0, regel:"„beide leider negativ“ zeigt: das Wort selbst ist noch neutral. <b>Rückmeldung</b> ist neutral, „Absage“ wäre schon negativ." },
    { optionen:["geraten","gefragt","gefallen"], richtig:0, regel:"jemandem <b>raten</b>, etwas zu tun, Partizip: geraten. „fragen“ steht mit Akkusativ und ohne zu-Infinitiv." },
    { optionen:["habe","bin","werde"], richtig:0, regel:"<b>teilnehmen</b> bildet das Perfekt mit „haben“: ich habe teilgenommen." },
    { optionen:["Erfahrung","Erlebnis","Kenntnis"], richtig:0, regel:"Feste Verbindung: <b>Erfahrung</b> mit etwas haben." },
    { optionen:["im Voraus","vorher","in Zukunft"], richtig:0, regel:"Standardformel am Briefende: Vielen Dank <b>im Voraus</b>." }
  ],
  regel:"Redemittel aus der Jobsuche: Rückmeldung bekommen, jemandem raten, an etwas teilnehmen, Erfahrung mit etwas haben, danke im Voraus.",
  en:"A job-hunting forum post practising everyday phrases for replies, advice, participation and thanking in advance." },

{ typ:"cloze", thema:"sprachbausteine",
  frage:"Ergänze die Mail ans Team. (Sprachbausteine Teil 2, Wortschatz und Redemittel)",
  text:"Hallo Team, leider muss ich unser Sprint-Review von Donnerstag auf Freitag ___. Der Kunde hat kurzfristig einen anderen Termin vorgeschlagen, und wir wollen ihm gern ___. Bitte ___ mir kurz Bescheid, ob Freitag um 14 Uhr bei euch passt. Die Unterlagen ___ ich euch bis morgen Abend zur Verfügung. Falls jemand an dem Tag Urlaub hat, ___ das kein Problem, ich schicke danach ein Protokoll. Viele Grüße, Karthik",
  luecken:[
    { optionen:["verschieben","verspäten","verzögern"], richtig:0, regel:"Einen Termin <b>verschieben</b> = auf einen anderen Tag legen. „sich verspäten“ macht man selbst, „verzögern“ passt zu Prozessen." },
    { optionen:["entgegenkommen","nachfragen","aushelfen"], richtig:0, regel:"jemandem <b>entgegenkommen</b> = sich nach seinen Wünschen richten." },
    { optionen:["gebt","geben","gibt"], richtig:0, regel:"Imperativ für „ihr“: <b>gebt</b> mir Bescheid." },
    { optionen:["stelle","setze","lege"], richtig:0, regel:"Feste Verbindung: etwas zur Verfügung <b>stellen</b>." },
    { optionen:["ist","seid","sind"], richtig:0, regel:"Subjekt ist „das“ (Singular) → <b>ist</b>." }
  ],
  regel:"Bürowortschatz: einen Termin verschieben, jemandem entgegenkommen, Bescheid geben, etwas zur Verfügung stellen.",
  en:"A workplace email drilling the standard office verbs for rescheduling, accommodating, informing and providing documents." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"Ich freue mich ___ das Vorstellungsgespräch nächste Woche.",
  optionen:["auf","über","für"], richtig:0,
  regel:"<b>sich freuen auf</b> + Akkusativ = Vorfreude auf etwas Zukünftiges. „sich freuen über“ bezieht sich auf etwas, das schon passiert ist.",
  en:"Use freuen auf for something still ahead and freuen über for something that has already happened." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"___ ich meinen Aufenthaltstitel verlängern kann, brauche ich eine Bescheinigung vom Arbeitgeber.",
  optionen:["Damit","Um","Weil"], richtig:0,
  regel:"<b>Damit</b> leitet einen Finalsatz mit eigenem Subjekt und konjugiertem Verb ein. „Um“ verlangt „zu“ + Infinitiv und dasselbe Subjekt.",
  en:"Damit introduces a purpose clause with a full verb, whereas um needs zu plus infinitive." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"Der Kollege, ___ ich das Ticket zugewiesen habe, ist heute krank.",
  optionen:["dem","den","der"], richtig:0,
  regel:"„zuweisen“ hat ein Dativobjekt (wem?), deshalb maskulin Dativ: <b>dem</b>.",
  en:"The relative pronoun takes the case its own clause demands, here dative after zuweisen." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"Die Wohnung wurde letztes Jahr komplett ___.",
  optionen:["renoviert","renovieren","zu renovieren"], richtig:0,
  regel:"Passiv Präteritum: wurde + <b>Partizip II</b>. Wer renoviert hat, ist unwichtig.",
  en:"Passive past uses wurde plus the past participle; the agent stays unmentioned." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"Wenn ich mehr Zeit hätte, ___ ich jeden Tag zwei Stunden Deutsch lernen.",
  optionen:["würde","werde","wäre"], richtig:0,
  regel:"Irreale Bedingung: hätte im Nebensatz, <b>würde</b> + Infinitiv im Hauptsatz.",
  en:"Unreal conditions pair hätte in the if-clause with würde plus infinitive in the main clause." },

{ typ:"mc", thema:"sprachbausteine",
  frage:"Sehr geehrte Damen und Herren, hiermit ___ ich mich auf die Stelle als Softwareentwickler.",
  optionen:["bewerbe","melde","schreibe"], richtig:0,
  regel:"Feste Formel im Anschreiben: sich <b>bewerben auf</b> (oder um) eine Stelle.",
  en:"The standard cover-letter phrase is sich bewerben auf eine Stelle, not melden or schreiben." }

]},

"b1-lesen": {
titel: "telc B1 · Leseverstehen",
niveau: "b1",
teil: "Leseverstehen",
kurz: "Vier Texte aus Alltag und Beruf, je drei Aufgaben",
hinweis: "telc B1 Leseverstehen hat drei Teile: Überschriften zuordnen (5), Detailfragen mit a/b/c (5) und Anzeigen zuordnen (10). Hier trainierst du das Detailverstehen, einmal als Multiple Choice, einmal als richtig/falsch/steht nicht im Text. Der Lesetext steht jeweils bei der ersten Aufgabe der Gruppe, die beiden folgenden Aufgaben gehören zum selben Text.",
items: [

{ typ:"mc", thema:"leseverstehen",
  frage:"<div class='regel' style='line-height:1.8'><b>Text 1 · Stellenanzeige</b><br><br>" +
    "<b>Softwareentwickler (m/w/d), Backend, Python, Aachen</b><br>" +
    "Die Novatek Systems GmbH entwickelt Software für die Steuerung von Produktionsanlagen. Für unser Team in Aachen suchen wir zum nächstmöglichen Zeitpunkt eine Entwicklerin oder einen Entwickler in Vollzeit.<br>" +
    "<b>Ihre Aufgaben:</b> Sie entwickeln und testen Schnittstellen zwischen unseren Anlagen und der Cloud. Außerdem betreuen Sie zwei studentische Hilfskräfte.<br>" +
    "<b>Ihr Profil:</b> abgeschlossenes Studium der Informatik oder eine vergleichbare Ausbildung, mindestens drei Jahre Berufserfahrung mit Python, sehr gute Englischkenntnisse. Deutschkenntnisse auf Niveau B1 sind ausreichend; einen weiterführenden Sprachkurs bezahlen wir gern.<br>" +
    "<b>Wir bieten:</b> 30 Urlaubstage, zwei Tage mobiles Arbeiten pro Woche und ein Jobticket für den gesamten Verkehrsverbund. Die Stelle ist zunächst auf zwei Jahre befristet, eine Übernahme ist ausdrücklich gewünscht.<br>" +
    "Bitte senden Sie Ihre Unterlagen bis zum 30. September an bewerbung@novatek-aachen.de. Ein Anschreiben ist nicht nötig, wir bitten aber um einen Lebenslauf mit Zeugnissen.</div>" +
    "<b>Aufgabe 1:</b> Für die Stelle braucht man Deutschkenntnisse auf Niveau C1.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:1,
  regel:"Im Text steht: „Deutschkenntnisse auf Niveau B1 sind ausreichend“. Das ist eine klare Gegeninformation, also <b>falsch</b>, nicht „steht nicht im Text“.",
  en:"The ad explicitly says B1 is enough, so the C1 claim contradicts the text and is false." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 1 · Aufgabe 2:</b> Die Firma bezahlt ihren Mitarbeitenden ein Ticket für Bus und Bahn.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:0,
  regel:"„ein Jobticket für den gesamten Verkehrsverbund“ ist genau das: ein bezahltes Ticket für den Nahverkehr. Der Text sagt es mit anderen Wörtern.",
  en:"Jobticket für den Verkehrsverbund is a paraphrase of a paid public transport ticket, so this is true." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 1 · Aufgabe 3:</b> Das Unternehmen hat mehr als 200 Mitarbeiterinnen und Mitarbeiter.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:2,
  regel:"Die Anzeige nennt nur das Team in Aachen und zwei Hilfskräfte, aber keine Gesamtzahl. Weder bestätigt noch widerlegt → <b>steht nicht im Text</b>.",
  en:"The ad never gives a company headcount, so the statement is neither confirmed nor contradicted." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<div class='regel' style='line-height:1.8'><b>Text 2 · Ratgeberartikel</b><br><br>" +
    "<b>Anerkennung ausländischer Abschlüsse: Wer prüft eigentlich was?</b><br>" +
    "Wer mit einem Abschluss aus dem Ausland nach Deutschland kommt, hört schnell das Wort Anerkennung. Gemeint ist ein amtliches Verfahren, in dem geprüft wird, ob ein ausländischer Abschluss einem deutschen gleichwertig ist. Für die sogenannten reglementierten Berufe, etwa Ärztin, Krankenpfleger oder Lehrerin, ist dieses Verfahren Pflicht: Ohne Anerkennung darf man den Beruf in Deutschland nicht ausüben.<br>" +
    "In der IT ist es anders. Softwareentwicklung ist kein reglementierter Beruf. Wer programmiert, kann sich also auch ohne formale Anerkennung bewerben; die Firmen entscheiden selbst, welche Qualifikation sie akzeptieren. Trotzdem raten Beratungsstellen dazu, wenigstens eine Zeugnisbewertung der Zentralstelle für ausländisches Bildungswesen zu beantragen. Dieses Dokument kostet rund 200 Euro und erklärt, was der Abschluss in Deutschland wert ist. Viele Personalabteilungen und auch die Ausländerbehörde lesen es gern.<br>" +
    "In Nordrhein-Westfalen beraten die IQ-Anlaufstellen kostenlos zu allen Fragen rund um die Anerkennung. Ein Gespräch dauert etwa eine Stunde, eine Anmeldung per Telefon oder E-Mail ist nötig.</div>" +
    "<b>Aufgabe 4:</b> Was gilt für reglementierte Berufe?",
  optionen:["Ohne Anerkennung darf man sie in Deutschland nicht ausüben.","Für sie zahlt der Arbeitgeber die Zeugnisbewertung.","Sie werden nur in Nordrhein-Westfalen anerkannt."], richtig:0,
  regel:"Der zweite Satz des ersten Abschnitts sagt es wörtlich: bei reglementierten Berufen ist das Verfahren <b>Pflicht</b>.",
  en:"Paragraph one states the recognition procedure is compulsory for regulated professions like doctor or teacher." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 2 · Aufgabe 5:</b> Warum empfehlen Beratungsstellen auch IT-Fachleuten eine Zeugnisbewertung?",
  optionen:["Weil sie für IT-Berufe gesetzlich vorgeschrieben ist.","Weil Firmen und Behörden damit den Wert des Abschlusses besser einschätzen können.","Weil man dadurch einen kostenlosen Sprachkurs bekommt."], richtig:1,
  regel:"Der Text sagt: Das Dokument erklärt, was der Abschluss in Deutschland wert ist, und Personalabteilungen sowie die Ausländerbehörde lesen es gern. Vorgeschrieben ist es in der IT ausdrücklich <b>nicht</b>.",
  en:"The document is optional in IT but helps employers and authorities judge what the degree is worth." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 2 · Aufgabe 6:</b> Die Beratung der IQ-Anlaufstellen in NRW …",
  optionen:["ist kostenlos, man muss aber einen Termin vereinbaren.","kostet rund 200 Euro pro Gespräch.","ist nur für reglementierte Berufe da."], richtig:0,
  regel:"Letzter Abschnitt: Die Beratung ist <b>kostenlos</b>, eine Anmeldung per Telefon oder E-Mail ist nötig. Die 200 Euro gehören zur Zeugnisbewertung, nicht zur Beratung.",
  en:"The final paragraph says the advice is free but requires an appointment; the 200 euros belong elsewhere." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<div class='regel' style='line-height:1.8'><b>Text 3 · Rundmail im Unternehmen</b><br><br>" +
    "<b>Von:</b> Personalabteilung · <b>An:</b> alle Mitarbeitenden · <b>Betreff:</b> Neue Regelung zum mobilen Arbeiten ab 1. Oktober<br><br>" +
    "Liebe Kolleginnen und Kollegen,<br>" +
    "nach der Auswertung der Mitarbeiterbefragung haben sich Geschäftsführung und Betriebsrat auf eine neue Regelung geeinigt. Ab dem 1. Oktober können alle Beschäftigten bis zu drei Tage pro Woche mobil arbeiten. Bisher waren zwei Tage möglich.<br>" +
    "Wichtig: Dienstag ist Präsenztag. An diesem Tag finden Teamrunden und Kundentermine statt, deshalb bitten wir alle, ins Büro zu kommen. Wer dienstags aus wichtigen Gründen nicht kommen kann, spricht das bitte vorher mit der Teamleitung ab.<br>" +
    "Für das mobile Arbeiten im Ausland gelten weiterhin besondere Regeln. Aufenthalte von mehr als zehn Arbeitstagen außerhalb Deutschlands müssen mindestens vier Wochen vorher schriftlich beantragt werden.<br>" +
    "Die vollständige Betriebsvereinbarung findet ihr ab Montag im Intranet. Fragen beantwortet Frau Sander (Durchwahl 412).<br>" +
    "Viele Grüße, eure Personalabteilung</div>" +
    "<b>Aufgabe 7:</b> Bisher durften die Beschäftigten nur an einem Tag pro Woche mobil arbeiten.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:1,
  regel:"Im Text steht: „Bisher waren zwei Tage möglich.“ Die Zahl im Satz ist falsch, typische telc-Falle mit veränderten Zahlen.",
  en:"The mail says two days were possible before, so the claim of one day is false." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 3 · Aufgabe 8:</b> Wer länger als zehn Arbeitstage aus dem Ausland arbeiten möchte, muss das vorher schriftlich beantragen.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:0,
  regel:"Dritter Abschnitt, wörtlich: Aufenthalte von mehr als zehn Arbeitstagen müssen mindestens vier Wochen vorher <b>schriftlich beantragt</b> werden.",
  en:"The third paragraph states stays over ten working days abroad need a written application in advance." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 3 · Aufgabe 9:</b> In der Mitarbeiterbefragung hat sich die Mehrheit mehr Homeoffice gewünscht.",
  optionen:["richtig","falsch","steht nicht im Text"], richtig:2,
  regel:"Die Befragung wird erwähnt, ihr Ergebnis aber nicht. Man kann es vermuten, vermuten reicht bei telc nie. <b>Steht nicht im Text.</b>",
  en:"The survey is mentioned but its result never is, so the statement cannot be verified." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<div class='regel' style='line-height:1.8'><b>Text 4 · Verbraucherbeitrag</b><br><br>" +
    "<b>Kaution, Schufa, Übergabeprotokoll, worauf Mieterinnen und Mieter achten sollten</b><br>" +
    "Wer in einer Stadt wie Aachen eine Wohnung sucht, muss meist schnell entscheiden. Trotzdem lohnt es sich, vor der Unterschrift drei Dinge zu prüfen.<br>" +
    "Erstens die Kaution. Sie darf höchstens drei Nettokaltmieten betragen, und Mieter dürfen sie in drei gleichen Monatsraten zahlen. Wer den Betrag sofort komplett überweist, tut das freiwillig.<br>" +
    "Zweitens die Unterlagen. Viele Vermieter verlangen eine Schufa-Auskunft und die letzten drei Gehaltsabrechnungen. Wer neu in Deutschland ist und noch keine Schufa-Historie hat, kann stattdessen den Arbeitsvertrag und eine Bürgschaft des Arbeitgebers anbieten. Ein persönliches Gespräch hilft dabei oft mehr als eine perfekte Mappe.<br>" +
    "Drittens das Übergabeprotokoll. Bei der Schlüsselübergabe sollten alle Mängel schriftlich festgehalten und mit Fotos dokumentiert werden, auch Kleinigkeiten wie ein Fleck auf dem Teppich. Ohne Protokoll wird es beim Auszug schwierig, die Kaution vollständig zurückzubekommen.<br>" +
    "Der Mieterschutzbund berät seine Mitglieder für einen Jahresbeitrag von rund 90 Euro.</div>" +
    "<b>Aufgabe 10:</b> Wie hoch darf die Kaution höchstens sein?",
  optionen:["Drei Nettokaltmieten","Drei Warmmieten","Eine Monatsmiete plus 90 Euro"], richtig:0,
  regel:"Der Text sagt genau: höchstens drei <b>Nettokaltmieten</b>. Warmmiete wäre mehr, telc tauscht solche Wörter gern aus.",
  en:"The deposit is capped at three cold rents excluding utilities, not three warm rents." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 4 · Aufgabe 11:</b> Was empfiehlt der Text Menschen ohne Schufa-Historie?",
  optionen:["Auf die Wohnungssuche vorerst zu verzichten.","Den Arbeitsvertrag und eine Bürgschaft anzubieten.","Die Kaution sofort komplett zu überweisen."], richtig:1,
  regel:"Zweiter Punkt: Ohne Schufa-Historie kann man <b>Arbeitsvertrag und Bürgschaft</b> anbieten, ein Gespräch hilft oft mehr als die perfekte Mappe.",
  en:"Newcomers without a credit history can offer their work contract and a guarantee instead." },

{ typ:"mc", thema:"leseverstehen",
  frage:"<b>Text 4 · Aufgabe 12:</b> Warum ist das Übergabeprotokoll wichtig?",
  optionen:["Ohne Protokoll bekommt man keinen Mietvertrag.","Ohne Protokoll ist es schwer, beim Auszug die ganze Kaution zurückzubekommen.","Der Mieterschutzbund verlangt es von seinen Mitgliedern."], richtig:1,
  regel:"Letzter inhaltlicher Satz des dritten Punkts: Ohne Protokoll wird es beim Auszug schwierig, die Kaution <b>vollständig</b> zurückzubekommen.",
  en:"Without a handover record it becomes hard to get the full deposit back when moving out." }

]}

};
