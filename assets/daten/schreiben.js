/* ============================================================
   SCHREIBEN — telc-Prüfungstraining Schriftliche Kommunikation
   b1: telc Deutsch B1, Schriftliche Kommunikation. Ein Brief oder
       eine E-Mail, Situation plus vier Leitpunkte, 30 Minuten.
       Bewertet werden Inhalt/Aufgabengerechtheit (alle vier
       Leitpunkte), Kommunikative Gestaltung (Anrede, Aufbau,
       Register, Gruß) und Formale Richtigkeit — je 5 Punkte,
       mal 3 gerechnet = 45 Punkte, 15 % der Gesamtprüfung.
   b2: telc Deutsch B2, Schriftlicher Ausdruck. Eine von zwei
       Aufgaben, halbformelle E-Mail, Leserbrief oder Forums-
       beitrag, mindestens 150 Wörter, 30 Minuten, 45 Punkte.
   ============================================================ */

KURS.schreibAufgaben = {

b1: [

/* ---------------------------------------------------------- 1 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie möchten Ihr Deutsch verbessern und haben die Kurse der Volkshochschule Aachen im Internet gefunden. " +
    "Schreiben Sie eine E-Mail an die VHS. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· warum Sie einen Deutschkurs besuchen möchten<br>" +
    "· welche Vorkenntnisse Sie haben<br>" +
    "· wann Sie Zeit haben (Beruf!)<br>" +
    "· fragen Sie nach den Kosten und nach dem Prüfungstermin",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Damen und Herren,",
    "auf Ihrer Internetseite habe ich gelesen, dass …",
    "Ich interessiere mich für …",
    "Könnten Sie mir bitte mitteilen, ob …",
    "Über eine baldige Antwort würde ich mich sehr freuen."],
  muster:"<b>Sehr geehrte Damen und Herren,</b><br><br>" +
    "<b>auf Ihrer Internetseite habe ich gelesen, dass</b> Sie Abendkurse für Deutsch anbieten. " +
    "<b>Ich interessiere mich für</b> einen Kurs auf dem Niveau B2.<br><br>" +
    "Ich arbeite seit zwei Jahren als Softwareentwickler in Aachen. Im Büro sprechen wir meistens Englisch, " +
    "aber ich möchte mich auch auf Deutsch sicher ausdrücken können, weil ich mich bald auf andere Stellen bewerben will. " +
    "Zurzeit besuche ich einen Intensivkurs und habe das Niveau B1 bereits abgeschlossen. " +
    "Leider kann ich nur abends ab 18 Uhr oder am Samstag lernen, da ich Vollzeit arbeite.<br><br>" +
    "<b>Könnten Sie mir bitte mitteilen, ob</b> ein Abendkurs im Herbst startet, was er kostet und " +
    "wann die nächste telc-Prüfung stattfindet?<br><br>" +
    "<b>Über eine baldige Antwort würde ich mich sehr freuen.</b><br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Alle vier Leitpunkte müssen erkennbar vorkommen — telc zieht pro fehlendem Punkt Inhaltspunkte ab. " +
    "Die sicheren Punkte liegen in der Kommunikativen Gestaltung: „Sehr geehrte Damen und Herren,“ mit Komma, " +
    "danach klein weiter, ein Absatz pro Leitpunkt und „Mit freundlichen Grüßen“ ohne Komma am Ende.",
  regel:"Formelle E-Mail: Anrede mit Komma, dann kleingeschrieben weiter. Bitten stehen im Konjunktiv II (könnten Sie …), das ist höflicher als eine direkte Frage.",
  en:"Tests whether you can open a formal enquiry, state your situation and ask two concrete questions politely." },

/* ---------------------------------------------------------- 2 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie haben nächste Woche einen Termin bei der Ausländerbehörde Aachen, können aber nicht kommen. " +
    "Schreiben Sie eine E-Mail an die Behörde. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· nennen Sie Ihren Termin (Datum und Uhrzeit)<br>" +
    "· erklären Sie, warum Sie nicht kommen können<br>" +
    "· bitten Sie um einen neuen Termin und machen Sie einen Vorschlag<br>" +
    "· fragen Sie, welche Unterlagen Sie mitbringen müssen",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Damen und Herren,",
    "ich habe am … um … Uhr einen Termin bei Ihnen.",
    "Leider kann ich diesen Termin nicht wahrnehmen, da …",
    "Wäre es möglich, den Termin auf … zu verschieben?",
    "Vielen Dank im Voraus für Ihre Mühe."],
  muster:"<b>Sehr geehrte Damen und Herren,</b><br><br>" +
    "<b>ich habe am</b> 12. November <b>um</b> 9.30 <b>Uhr einen Termin bei Ihnen</b> zur Verlängerung meiner Blauen Karte. " +
    "Mein Aktenzeichen lautet AC-2026-4471.<br><br>" +
    "<b>Leider kann ich diesen Termin nicht wahrnehmen, da</b> mein Arbeitgeber mich für diese Woche zu einem Projekt " +
    "nach München geschickt hat. Der Einsatz wurde erst gestern kurzfristig entschieden, deshalb melde ich mich sofort bei Ihnen.<br><br>" +
    "<b>Wäre es möglich, den Termin auf</b> die Woche ab dem 18. November <b>zu verschieben?</b> " +
    "Am Montag und am Mittwoch bin ich den ganzen Tag in Aachen und könnte jederzeit kommen. " +
    "Außerdem wüsste ich gern, welche Unterlagen ich mitbringen soll — reichen Arbeitsvertrag, " +
    "Gehaltsabrechnungen und Meldebescheinigung aus?<br><br>" +
    "<b>Vielen Dank im Voraus für Ihre Mühe.</b><br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"telc achtet hier besonders auf den Adressatenbezug: eine Behörde ist immer „Sie“. " +
    "Die konkrete Angabe von Datum und Uhrzeit ist ein eigener Leitpunkt — vergisst man sie, fehlt ein Viertel des Inhalts. " +
    "Ein Terminvorschlag zählt nur, wenn er wirklich einen Tag nennt.",
  regel:"Bei Terminabsagen gilt: erst der alte Termin, dann der Grund mit „da“ oder „weil“, dann der neue Vorschlag als Frage im Konjunktiv II.",
  en:"Tests rescheduling: naming the existing appointment, giving a reason and proposing a concrete alternative." },

/* ---------------------------------------------------------- 3 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie haben vor drei Wochen online einen Laptop bestellt. Das Gerät ist beschädigt angekommen. " +
    "Schreiben Sie eine E-Mail an den Kundenservice. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· was Sie wann bestellt haben<br>" +
    "· welches Problem es gibt<br>" +
    "· was Sie schon versucht haben<br>" +
    "· was Sie jetzt vom Shop erwarten (Frist nennen)",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Damen und Herren,",
    "am … habe ich bei Ihnen … bestellt (Bestellnummer …).",
    "Leider musste ich feststellen, dass …",
    "Ich habe bereits versucht, … , leider ohne Erfolg.",
    "Ich bitte Sie daher, … bis zum … ."],
  muster:"<b>Sehr geehrte Damen und Herren,</b><br><br>" +
    "<b>am</b> 3. Oktober <b>habe ich bei Ihnen</b> einen Laptop des Typs ProBook 14 <b>bestellt (Bestellnummer</b> 88-204519<b>).</b> " +
    "Das Paket kam am 8. Oktober bei mir an.<br><br>" +
    "<b>Leider musste ich feststellen, dass</b> der Bildschirm einen Riss in der linken Ecke hat und das Gehäuse verbogen ist. " +
    "Auch der Karton war beim Empfang schon eingedrückt. Fotos habe ich dieser E-Mail angehängt.<br><br>" +
    "<b>Ich habe bereits versucht,</b> Ihre Hotline anzurufen, <b>leider ohne Erfolg:</b> " +
    "Ich habe dreimal über zwanzig Minuten gewartet und niemanden erreicht. Über das Kontaktformular " +
    "habe ich ebenfalls geschrieben, aber keine Antwort bekommen.<br><br>" +
    "<b>Ich bitte Sie daher,</b> mir bis zum 30. Oktober ein einwandfreies Gerät zu schicken oder mir den Kaufpreis " +
    "zurückzuerstatten. Bitte teilen Sie mir mit, wie ich den beschädigten Laptop zurücksenden kann.<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Eine Beschwerde bewertet telc als sachlich, nicht als emotional: keine Ausrufezeichen, keine Vorwürfe. " +
    "Sichere Punkte gibt es für Bestellnummer und Datum (Aufgabengerechtheit) und für eine klare Forderung mit Frist am Schluss.",
  regel:"Die Beschwerde folgt vier Schritten: Fakten, Problem, bisherige Versuche, Forderung mit Frist. Bleib sachlich — „Leider musste ich feststellen“ statt „Das ist eine Frechheit“.",
  en:"Tests a written complaint: facts first, problem second, then a clear demand with a deadline." },

/* ---------------------------------------------------------- 4 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie haben eine Anzeige für eine Zweizimmerwohnung in Aachen-Burtscheid gelesen und möchten sie besichtigen. " +
    "Schreiben Sie eine E-Mail an den Vermieter, Herrn Berger. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· woher Sie die Anzeige haben<br>" +
    "· wer Sie sind und was Sie beruflich machen<br>" +
    "· wann Sie die Wohnung besichtigen könnten<br>" +
    "· fragen Sie nach den Nebenkosten und der Kaution",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrter Herr Berger,",
    "mit großem Interesse habe ich Ihre Anzeige auf … gelesen.",
    "Ich bin … von Beruf und arbeite seit … bei … .",
    "Für eine Besichtigung stehe ich Ihnen … zur Verfügung.",
    "Darf ich außerdem fragen, wie hoch … ist?"],
  muster:"<b>Sehr geehrter Herr Berger,</b><br><br>" +
    "<b>mit großem Interesse habe ich Ihre Anzeige auf</b> ImmoScout <b>gelesen.</b> " +
    "Sie bieten eine Zweizimmerwohnung in Aachen-Burtscheid an, und diese Wohnung passt sehr gut zu mir.<br><br>" +
    "<b>Ich bin</b> Softwareentwickler <b>von Beruf und arbeite seit</b> zwei Jahren <b>bei</b> einem IT-Unternehmen in Aachen. " +
    "Mein Arbeitsvertrag ist unbefristet, ein Gehaltsnachweis und eine Schufa-Auskunft liegen bereit. " +
    "Ich wohne allein, rauche nicht und habe keine Haustiere.<br><br>" +
    "<b>Für eine Besichtigung stehe ich Ihnen</b> ab nächster Woche gern <b>zur Verfügung</b>, am liebsten " +
    "am späten Nachmittag oder am Samstag.<br><br>" +
    "<b>Darf ich außerdem fragen, wie hoch</b> die Nebenkosten monatlich sind und wie viele Monatsmieten " +
    "als Kaution verlangt werden?<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Wenn der Name genannt wird, erwartet telc die persönliche Anrede „Sehr geehrter Herr Berger,“ — " +
    "„Sehr geehrte Damen und Herren“ kostet Punkte in der Kommunikativen Gestaltung. " +
    "Beide Fragen (Nebenkosten und Kaution) sind ein einziger Leitpunkt, aber beide müssen vorkommen.",
  regel:"Anrede mit Namen: „Sehr geehrter Herr Berger,“ / „Sehr geehrte Frau Berger,“. Bei einer Wohnungsanfrage nennt man immer Beruf und Einkommenssicherheit — das erwartet der deutsche Vermieter.",
  en:"Tests a flat-viewing enquiry: where you saw the ad, who you are, when you can come, what you still need to know." },

/* ---------------------------------------------------------- 5 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie möchten künftig zwei Tage pro Woche im Homeoffice arbeiten. " +
    "Schreiben Sie eine E-Mail an Ihre Vorgesetzte, Frau Dr. Weber. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· was Sie sich wünschen<br>" +
    "· warum (nennen Sie zwei Gründe)<br>" +
    "· wie Sie die Zusammenarbeit im Team sichern wollen<br>" +
    "· bitten Sie um ein kurzes Gespräch",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Frau Dr. Weber,",
    "ich möchte Sie um … bitten.",
    "Der Grund dafür ist, dass …",
    "Selbstverständlich würde ich weiterhin …",
    "Hätten Sie in den nächsten Tagen Zeit für ein kurzes Gespräch?"],
  muster:"<b>Sehr geehrte Frau Dr. Weber,</b><br><br>" +
    "<b>ich möchte Sie um</b> eine Änderung meiner Arbeitszeitregelung <b>bitten.</b> " +
    "Ich würde gern ab Dezember zwei Tage pro Woche von zu Hause aus arbeiten, am liebsten dienstags und donnerstags.<br><br>" +
    "<b>Der Grund dafür ist, dass</b> ich abends einen Deutschkurs besuche und die Fahrzeit zum Büro dafür nutzen könnte. " +
    "Außerdem kann ich mich zu Hause besser konzentrieren, wenn ich an größeren Aufgaben wie Code-Reviews " +
    "oder Dokumentation arbeite.<br><br>" +
    "<b>Selbstverständlich würde ich weiterhin</b> an allen Team-Meetings teilnehmen und an den Präsenztagen " +
    "für Absprachen zur Verfügung stehen. Im Homeoffice bin ich zu den üblichen Zeiten erreichbar.<br><br>" +
    "<b>Hätten Sie in den nächsten Tagen Zeit für ein kurzes Gespräch?</b> Gern richte ich mich nach Ihrem Kalender.<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Der Leitpunkt „zwei Gründe“ muss wirklich zwei Gründe enthalten — telc zählt hier nach. " +
    "Punkte in der Kommunikativen Gestaltung gibt es für das höfliche Register gegenüber der Vorgesetzten: " +
    "„ich möchte Sie um … bitten“ statt „ich will“.",
  regel:"Eine Bitte an Vorgesetzte steht im Konjunktiv II (würde, könnte, hätte). Wer eine Sonderregelung will, bietet im selben Brief an, was er dafür sicherstellt.",
  en:"Tests a workplace request: what you want, two reasons, a reassurance, and a proposal to talk." },

/* ---------------------------------------------------------- 6 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Ihr Fahrrad wurde vor dem Aachener Hauptbahnhof gestohlen. Sie haben eine Hausratversicherung. " +
    "Schreiben Sie eine E-Mail an Ihre Versicherung. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· was passiert ist (wann und wo)<br>" +
    "· wie teuer das Fahrrad war<br>" +
    "· was Sie bereits unternommen haben<br>" +
    "· fragen Sie, wie es weitergeht",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Damen und Herren,",
    "hiermit möchte ich einen Schaden melden.",
    "Am … gegen … Uhr wurde mir … gestohlen.",
    "Bei der Polizei habe ich bereits Anzeige erstattet.",
    "Könnten Sie mir bitte mitteilen, welche Unterlagen Sie benötigen?"],
  muster:"<b>Sehr geehrte Damen und Herren,</b><br><br>" +
    "<b>hiermit möchte ich einen Schaden melden.</b> Meine Versicherungsnummer lautet HR-7739204.<br><br>" +
    "<b>Am</b> 14. Oktober <b>gegen</b> 19 <b>Uhr wurde mir</b> mein Fahrrad vor dem Aachener Hauptbahnhof <b>gestohlen.</b> " +
    "Ich hatte es dort morgens mit einem Bügelschloss an einem Fahrradständer angeschlossen. " +
    "Als ich abends zurückkam, waren Rad und Schloss verschwunden.<br><br>" +
    "Es handelt sich um ein Trekkingrad der Marke Cube, das ich im März 2025 für 890 Euro gekauft habe. " +
    "Die Rechnung des Händlers und ein Foto des Rades habe ich angehängt.<br><br>" +
    "<b>Bei der Polizei habe ich bereits Anzeige erstattet</b>, das Aktenzeichen lautet AC/2026/11832.<br><br>" +
    "<b>Könnten Sie mir bitte mitteilen, welche Unterlagen Sie benötigen</b> und wie lange die Bearbeitung dauert?<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Bei Schadensmeldungen bewertet telc die Präzision der Angaben: Datum, Uhrzeit, Ort, Wert. " +
    "Fehlt der Preis, fehlt ein Leitpunkt. Die Schlussfrage sichert Punkte, weil sie den Brief als echte Kommunikation abschließt.",
  regel:"Schadensmeldung: Passiv oder unpersönliche Formulierung („wurde mir gestohlen“) klingt sachlicher als „jemand hat mein Fahrrad geklaut“. Zahlen und Nummern immer nennen.",
  en:"Tests an insurance claim: precise facts, the value of the loss, steps already taken, and a follow-up question." },

/* ---------------------------------------------------------- 7 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Ihr Freund Ravi wohnt in Berlin und möchte Sie im Winter in Aachen besuchen. " +
    "Schreiben Sie ihm eine E-Mail. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· freuen Sie sich über seinen Besuch<br>" +
    "· schlagen Sie einen Termin vor<br>" +
    "· sagen Sie, was ihr zusammen machen könnt<br>" +
    "· sagen Sie ihm, was er mitbringen soll",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Lieber Ravi,",
    "ich habe mich riesig über deine Nachricht gefreut.",
    "Wie wäre es, wenn du … kommst?",
    "Wir könnten zusammen …",
    "Denk bitte daran, … mitzubringen."],
  muster:"<b>Lieber Ravi,</b><br><br>" +
    "<b>ich habe mich riesig über deine Nachricht gefreut.</b> Natürlich kannst du kommen — " +
    "das Gästezimmer ist frei und wir haben uns viel zu erzählen.<br><br>" +
    "<b>Wie wäre es, wenn du</b> das zweite Dezemberwochenende <b>kommst?</b> " +
    "Da habe ich Urlaub und muss nicht in den Sprachkurs. Wenn dir das zu früh ist, geht auch das Wochenende danach.<br><br>" +
    "<b>Wir könnten zusammen</b> über den Weihnachtsmarkt am Dom laufen, dort gibt es die berühmten Aachener Printen. " +
    "Am Samstag schlage ich einen Ausflug in die Therme vor, und abends koche ich für dich indisch. " +
    "Wenn du Lust hast, fahren wir sonntags kurz nach Maastricht, das ist nur eine halbe Stunde entfernt.<br><br>" +
    "<b>Denk bitte daran,</b> warme Kleidung und deine Badesachen <b>mitzubringen</b> — hier ist es im Dezember richtig kalt.<br><br>" +
    "Ich freue mich auf dich!<br>Viele Grüße<br>Karthik",
  kriterien:"Im informellen Brief prüft telc das Register: durchgehend „du“, „dein“, „dir“ — ein einziges „Sie“ zerstört die Kommunikative Gestaltung. " +
    "Anrede „Lieber Ravi,“ und ein persönlicher Gruß wie „Viele Grüße“ sind sichere Punkte.",
  regel:"Informeller Brief: „Lieber/Liebe“ + Vorname, Komma, klein weiter. Gruß ohne Komma: „Viele Grüße“ oder „Liebe Grüße“. Du-Formen im ganzen Text konsequent klein.",
  en:"Tests the informal register: an invitation with a date, a plan, and a practical request." },

/* ---------------------------------------------------------- 8 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Ihre Freundin Anna hat Sie gebeten, ihr am Samstag beim Umzug zu helfen. Sie können aber nicht. " +
    "Schreiben Sie ihr eine E-Mail. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· danken Sie für die Nachricht<br>" +
    "· sagen Sie ab und erklären Sie warum<br>" +
    "· machen Sie einen anderen Vorschlag<br>" +
    "· bieten Sie ihr eine andere Hilfe an",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Liebe Anna,",
    "danke für deine Nachricht.",
    "Leider muss ich dir absagen, weil …",
    "Stattdessen könnte ich …",
    "Sag mir einfach Bescheid, wenn …"],
  muster:"<b>Liebe Anna,</b><br><br>" +
    "<b>danke für deine Nachricht.</b> Schön, dass du endlich die Wohnung in der Nähe des Parks bekommen hast!<br><br>" +
    "<b>Leider muss ich dir absagen, weil</b> ich am Samstag den ganzen Tag in meinem Deutschkurs bin. " +
    "Wir haben Prüfungssimulation, und im November schreibe ich die telc-Prüfung — den Termin kann ich " +
    "wirklich nicht verschieben. Das tut mir sehr leid, denn ich hätte dir gern geholfen.<br><br>" +
    "<b>Stattdessen könnte ich</b> am Sonntag kommen. Wenn ihr am Samstag die Möbel transportiert, " +
    "helfe ich dir sonntags beim Auspacken und beim Aufbauen der Regale. Werkzeug bringe ich mit.<br><br>" +
    "Außerdem kenne ich jemanden mit einem großen Transporter. <b>Sag mir einfach Bescheid, wenn</b> " +
    "du seine Nummer haben möchtest, dann frage ich ihn für dich.<br><br>" +
    "Viel Erfolg beim Umzug und bis bald!<br>Liebe Grüße<br>Karthik",
  kriterien:"Absagen sind eine typische telc-Aufgabe: Ohne Entschuldigung und Alternative wirkt der Text unhöflich " +
    "und verliert Punkte in der Kommunikativen Gestaltung. Vorschlag und zusätzliche Hilfe sind zwei getrennte Leitpunkte — " +
    "beide müssen sichtbar sein.",
  regel:"Eine Absage hat immer drei Teile: Bedauern, Grund, Alternative. „Leider“ und „Das tut mir leid“ sind die Signalwörter, die der Prüfer sucht.",
  en:"Tests declining politely: regret, a reason, an alternative and an extra offer of help." },

/* ---------------------------------------------------------- 9 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Ihr Freund Mehdi lernt auch Deutsch und fragt Sie, wie es Ihnen in Ihrem Intensivkurs geht. " +
    "Schreiben Sie ihm eine E-Mail. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· erzählen Sie, wie der Kurs abläuft<br>" +
    "· sagen Sie, was Ihnen leichtfällt und was schwer ist<br>" +
    "· berichten Sie, wie Sie neben der Arbeit lernen<br>" +
    "· fragen Sie ihn nach seinen Tipps",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Hallo Mehdi,",
    "entschuldige, dass ich mich so lange nicht gemeldet habe.",
    "Am schwersten fällt mir …",
    "Was mir dagegen leichtfällt, ist …",
    "Wie machst du das eigentlich mit …?"],
  muster:"<b>Hallo Mehdi,</b><br><br>" +
    "<b>entschuldige, dass ich mich so lange nicht gemeldet habe</b> — zwischen Arbeit und Kurs bleibt kaum Zeit.<br><br>" +
    "Mein Intensivkurs läuft seit August, viermal pro Woche von 18 bis 21 Uhr. Wir sind zwölf Leute aus acht Ländern, " +
    "und die Lehrerin lässt uns sehr viel sprechen. Jede Woche schreiben wir außerdem einen Brief oder eine Stellungnahme.<br><br>" +
    "<b>Am schwersten fällt mir</b> immer noch der Konjunktiv II und die Wortstellung in langen Nebensätzen. " +
    "<b>Was mir dagegen leichtfällt, ist</b> der Wortschatz, weil ich im Büro täglich deutsche Mails lese.<br><br>" +
    "Neben der Arbeit lerne ich morgens in der Bahn mit Karteikarten und höre auf dem Rückweg einen Podcast. " +
    "Am Sonntag mache ich immer einen kompletten Übungstest.<br><br>" +
    "<b>Wie machst du das eigentlich mit</b> dem Sprechen? Hast du einen Tandempartner gefunden?<br><br>" +
    "Melde dich bald!<br>Viele Grüße<br>Karthik",
  kriterien:"Der vierte Leitpunkt ist eine Frage an den Adressaten — genau daran erkennt telc echte Kommunikation. " +
    "Wer nur über sich schreibt, verliert Punkte. „Hallo“ ist als Anrede unter Freunden zulässig, der Gruß am Ende bleibt trotzdem Pflicht.",
  regel:"Im persönlichen Brief nutzt man Verbindungswörter wie „dagegen“, „außerdem“, „trotzdem“, damit die vier Punkte nicht wie eine Liste wirken.",
  en:"Tests narrating your own learning situation and turning the letter back to the reader with a question." },

/* --------------------------------------------------------- 10 */
{ typ:"frei", thema:"schreiben", niveau:"b1",
  frage:"Sie haben sich vor vier Wochen bei der Firma Novatech als Softwareentwickler beworben und noch keine Antwort erhalten. " +
    "Schreiben Sie eine E-Mail an Frau Kaufmann aus der Personalabteilung. Schreiben Sie etwas zu <b>allen vier Punkten</b>:<br>" +
    "· nennen Sie die Stelle und das Datum Ihrer Bewerbung<br>" +
    "· fragen Sie höflich nach dem Stand des Verfahrens<br>" +
    "· nennen Sie kurz einen Grund, warum Sie passen<br>" +
    "· bieten Sie weitere Unterlagen oder ein Gespräch an",
  mindestWorte:80,
  zeit:"30 Minuten",
  hinweise:[
    "Sehr geehrte Frau Kaufmann,",
    "am … habe ich mich bei Ihnen um die Stelle als … beworben.",
    "Da ich bisher keine Rückmeldung erhalten habe, möchte ich höflich nachfragen, …",
    "Nach wie vor bin ich sehr an der Position interessiert, weil …",
    "Gern sende ich Ihnen weitere Unterlagen zu."],
  muster:"<b>Sehr geehrte Frau Kaufmann,</b><br><br>" +
    "<b>am</b> 22. September <b>habe ich mich bei Ihnen um die Stelle als</b> Softwareentwickler im Bereich " +
    "Datenplattformen <b>beworben</b> (Referenznummer NT-2026-114).<br><br>" +
    "<b>Da ich bisher keine Rückmeldung erhalten habe, möchte ich höflich nachfragen,</b> wie der Stand " +
    "des Auswahlverfahrens ist und wann mit einer Entscheidung zu rechnen ist.<br><br>" +
    "<b>Nach wie vor bin ich sehr an der Position interessiert, weil</b> ich seit vier Jahren mit genau " +
    "den Technologien arbeite, die in Ihrer Anzeige genannt werden, und zuletzt eine Datenpipeline " +
    "für ein Team von fünfzehn Personen aufgebaut habe.<br><br>" +
    "<b>Gern sende ich Ihnen weitere Unterlagen zu</b>, zum Beispiel Arbeitsproben oder Zeugnisse. " +
    "Für ein Gespräch stehe ich kurzfristig zur Verfügung, auch abends oder online.<br><br>" +
    "Vielen Dank für Ihre Mühe.<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"telc bewertet hier vor allem das Register: nachfragen ohne zu drängen. " +
    "Formulierungen wie „möchte ich höflich nachfragen“ sichern die Kommunikative Gestaltung, " +
    "während „Warum antworten Sie nicht?“ Punkte kostet. Referenznummer und Datum sind der erste Leitpunkt.",
  regel:"Nachfassen: erst Fakten (Stelle, Datum, Referenz), dann die höfliche Frage, dann ein kurzes Argument, dann ein Angebot. Nie mahnen, immer anbieten.",
  en:"Tests a job application follow-up: staying polite while asking for a status update and re-selling yourself briefly." }

],

b2: [

/* ---------------------------------------------------------- 1 */
{ typ:"frei", thema:"schreiben", niveau:"b2",
  frage:"In einem Online-Forum für Berufstätige lesen Sie den Beitrag: <b>„Homeoffice macht Teams kaputt — zurück ins Büro!“</b> " +
    "Der Autor behauptet, dass im Homeoffice die Kommunikation leidet, neue Kolleginnen und Kollegen nicht integriert werden " +
    "und die Produktivität sinke. Schreiben Sie einen <b>Forumsbeitrag</b> von mindestens 150 Wörtern. " +
    "Gehen Sie darauf ein, worum es in dem Beitrag geht, nennen Sie Ihre eigene Meinung mit mindestens zwei Argumenten, " +
    "beziehen Sie sich auf Ihre persönliche Erfahrung und schließen Sie mit einem konkreten Vorschlag.",
  mindestWorte:150,
  zeit:"30 Minuten",
  hinweise:[
    "In dem Beitrag geht es um die Frage, ob …",
    "Dem Argument, dass …, kann ich nur teilweise zustimmen.",
    "Aus meiner eigenen Erfahrung als … weiß ich, dass …",
    "Hinzu kommt, dass …",
    "Abschließend möchte ich vorschlagen, dass …"],
  muster:"<b>In dem Beitrag geht es um die Frage, ob</b> Homeoffice der Zusammenarbeit im Team schadet. " +
    "Der Autor vertritt die Ansicht, dass Kommunikation und Produktivität darunter leiden.<br><br>" +
    "<b>Dem Argument, dass</b> neue Kolleginnen und Kollegen schlechter integriert werden, <b>kann ich nur teilweise zustimmen.</b> " +
    "Richtig ist, dass man im Büro vieles nebenbei lernt, was in einer Videokonferenz nie zur Sprache käme. " +
    "Falsch ist jedoch der Schluss, deshalb müssten alle wieder täglich erscheinen. Das eigentliche Problem " +
    "ist nicht der Ort, sondern die fehlende Struktur.<br><br>" +
    "<b>Aus meiner eigenen Erfahrung als</b> Softwareentwickler <b>weiß ich, dass</b> konzentrierte Arbeit zu Hause " +
    "deutlich besser gelingt. In unserem Team wurde die Zahl der Meetings halbiert, seit wir hybrid arbeiten, " +
    "und trotzdem liefern wir schneller als vorher. <b>Hinzu kommt, dass</b> viele Fachkräfte einen Arbeitgeber " +
    "gar nicht mehr in Betracht ziehen, der keine Flexibilität bietet.<br><br>" +
    "<b>Abschließend möchte ich vorschlagen, dass</b> jedes Team zwei feste Bürotage festlegt und diese Tage " +
    "bewusst für Austausch, Einarbeitung und Planung nutzt. So bleibt der Zusammenhalt erhalten, " +
    "ohne dass man auf die Vorteile des Homeoffice verzichten muss.",
  kriterien:"Bei B2 zählt nicht mehr nur, ob die Punkte vorkommen, sondern wie sie verbunden sind. " +
    "telc bewertet Berücksichtigung der Leitpunkte, Kommunikative Gestaltung und Formale Richtigkeit. " +
    "Sichere Punkte: eine klare These im ersten Absatz, mindestens ein Konzessiv-Zug („Richtig ist … Falsch ist jedoch …“) " +
    "und ein Schluss, der einen echten Vorschlag enthält statt einer Zusammenfassung.",
  regel:"Ein Forumsbeitrag auf B2 folgt dem Muster These — Gegenargument entkräften — eigene Argumente — Vorschlag. Absätze sind Pflicht, ein Textblock wirkt ungegliedert.",
  en:"Tests argumentative writing: restating a position, conceding partly, adding your own evidence and proposing a solution." },

/* ---------------------------------------------------------- 2 */
{ typ:"frei", thema:"schreiben", niveau:"b2",
  frage:"In einer überregionalen Zeitung erschien der Artikel <b>„Künstliche Intelligenz ersetzt bald jeden zweiten Büroarbeitsplatz“</b>. " +
    "Der Autor warnt vor massiver Arbeitslosigkeit und fordert, den Einsatz von KI in Unternehmen gesetzlich stark zu begrenzen. " +
    "Schreiben Sie einen <b>Leserbrief</b> von mindestens 150 Wörtern an die Redaktion. " +
    "Nehmen Sie Bezug auf den Artikel, äußern Sie Ihre Meinung zur geforderten Begrenzung, " +
    "belegen Sie Ihre Position mit Beispielen aus Ihrem Berufsfeld und formulieren Sie am Ende eine Forderung.",
  mindestWorte:150,
  zeit:"30 Minuten",
  hinweise:[
    "mit großem Interesse habe ich Ihren Artikel vom … gelesen.",
    "Der Autor vertritt die Auffassung, dass …",
    "Diese Einschätzung halte ich für zu pauschal, denn …",
    "Ein Beispiel aus meinem Berufsalltag verdeutlicht das:",
    "Statt … zu verbieten, sollte man vielmehr … ."],
  muster:"Sehr geehrte Damen und Herren,<br><br>" +
    "<b>mit großem Interesse habe ich Ihren Artikel vom</b> 12. Oktober über künstliche Intelligenz " +
    "am Arbeitsplatz <b>gelesen.</b> <b>Der Autor vertritt die Auffassung, dass</b> KI jeden zweiten Büroarbeitsplatz " +
    "vernichten werde und der Gesetzgeber ihren Einsatz deshalb stark einschränken müsse.<br><br>" +
    "<b>Diese Einschätzung halte ich für zu pauschal, denn</b> sie verwechselt einzelne Tätigkeiten mit ganzen Berufen. " +
    "Verschwinden werden Aufgaben, nicht zwangsläufig Stellen. <b>Ein Beispiel aus meinem Berufsalltag verdeutlicht das:</b> " +
    "In meinem Team schreibt ein Sprachmodell inzwischen einen Teil der Testfälle. Die Arbeit ist dadurch nicht " +
    "weniger geworden, sie hat sich verschoben — wir prüfen, bewerten und tragen weiterhin die Verantwortung.<br><br>" +
    "Bedenklich finde ich allerdings, dass Weiterbildung bislang Privatsache bleibt. Wer sich nicht selbst " +
    "qualifiziert, gerät tatsächlich unter Druck, und das trifft ältere Beschäftigte besonders hart.<br><br>" +
    "<b>Statt</b> Technologie <b>zu verbieten, sollte man vielmehr</b> Unternehmen verpflichten, ihre Mitarbeitenden " +
    "während der Arbeitszeit weiterzubilden. Ein Verbot schützt keinen einzigen Arbeitsplatz, Qualifikation dagegen schon.<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Der Leserbrief braucht formell Anrede und Gruß — anders als der Forumsbeitrag. " +
    "telc erwartet einen klaren Bezug auf den Artikel im ersten Satz (Datum, Titel oder Thema). " +
    "Punkte in der Kommunikativen Gestaltung holt man mit einer Position, die differenziert bleibt: " +
    "erst widersprechen, dann ein Zugeständnis, dann die Forderung.",
  regel:"Leserbrief: förmliche Anrede, Bezug auf den Artikel, eigene Position, Beleg, Forderung, formeller Gruß. Die Forderung steht immer am Schluss, damit sie hängen bleibt.",
  en:"Tests a letter to the editor: referencing a source text, disagreeing in a differentiated way and ending with a demand." },

/* ---------------------------------------------------------- 3 */
{ typ:"frei", thema:"schreiben", niveau:"b2",
  frage:"Sie haben bei einem Anbieter für 890 Euro eine achtwöchige Online-Weiterbildung <b>„Data Engineering für Berufstätige“</b> gebucht. " +
    "Zwei Dozenten fielen aus, die versprochene Projektbetreuung fand nie statt, und das Zertifikat haben Sie bis heute nicht erhalten. " +
    "Schreiben Sie eine <b>Beschwerde-E-Mail</b> von mindestens 150 Wörtern an den Anbieter. " +
    "Schildern Sie den Sachverhalt, benennen Sie die Mängel im Einzelnen, begründen Sie, warum das für Sie ein Problem ist, " +
    "und stellen Sie eine konkrete Forderung mit Frist.",
  mindestWorte:150,
  zeit:"30 Minuten",
  hinweise:[
    "hiermit möchte ich mich über … beschweren.",
    "Im Einzelnen handelt es sich um folgende Mängel:",
    "Besonders schwer wiegt aus meiner Sicht, dass …",
    "Da die vereinbarte Leistung nicht erbracht wurde, fordere ich Sie auf, … .",
    "Sollte ich bis zum … keine Antwort erhalten, behalte ich mir weitere Schritte vor."],
  muster:"Sehr geehrte Damen und Herren,<br><br>" +
    "<b>hiermit möchte ich mich über</b> den Online-Kurs „Data Engineering für Berufstätige“ (Buchungsnummer DE-4408) " +
    "<b>beschweren</b>, den ich am 1. September für 890 Euro gebucht habe.<br><br>" +
    "<b>Im Einzelnen handelt es sich um folgende Mängel:</b> In Woche drei und Woche sechs fiel der Unterricht " +
    "ersatzlos aus, weil kein Dozent zur Verfügung stand. Die in der Kursbeschreibung zugesagte individuelle " +
    "Projektbetreuung hat zu keinem Zeitpunkt stattgefunden. Auf meine drei E-Mails an die Kursleitung " +
    "erhielt ich lediglich eine automatische Empfangsbestätigung. Das Abschlusszertifikat, das laut Vertrag " +
    "vierzehn Tage nach Kursende vorliegen sollte, fehlt bis heute.<br><br>" +
    "<b>Besonders schwer wiegt aus meiner Sicht, dass</b> ich das Zertifikat für laufende Bewerbungen benötige. " +
    "Ich habe Urlaubstage investiert und mein Arbeitgeber hat einen Teil der Gebühr übernommen.<br><br>" +
    "<b>Da die vereinbarte Leistung nicht erbracht wurde, fordere ich Sie auf,</b> mir das Zertifikat " +
    "unverzüglich auszustellen und ein Viertel der Kursgebühr zu erstatten. " +
    "<b>Sollte ich bis zum</b> 15. Dezember <b>keine Antwort erhalten, behalte ich mir weitere Schritte vor.</b><br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Auf B2 erwartet telc eine gegliederte Beschwerde: Sachverhalt, Mängelliste, Begründung des Schadens, Forderung mit Frist. " +
    "Sichere Punkte liegen im sachlichen Ton und in den Präzisionssignalen — Buchungsnummer, Daten, Beträge. " +
    "Die Formale Richtigkeit wird hier oft im Passiv und im Konjunktiv geprüft („zugesagt worden war“, „sollte vorliegen“).",
  regel:"Formelle Beschwerde: nummerierbare Mängel statt allgemeiner Kritik, jede Behauptung mit Datum oder Zahl belegt, am Schluss eine Frist. Drohungen bleiben angedeutet, nie ausgesprochen.",
  en:"Tests a formal complaint at length: itemising defects, justifying the damage and demanding redress by a deadline." },

/* ---------------------------------------------------------- 4 */
{ typ:"frei", thema:"schreiben", niveau:"b2",
  frage:"In einem Forum für Zugewanderte fragt ein Nutzer: <b>„Lohnt sich ein Sprachkurs neben dem Vollzeitjob überhaupt, " +
    "oder lernt man die Sprache sowieso nur bei der Arbeit?“</b> " +
    "Schreiben Sie einen <b>Forumsbeitrag</b> von mindestens 150 Wörtern. " +
    "Beschreiben Sie kurz Ihre Situation, nehmen Sie klar Stellung zu der Frage, " +
    "nennen Sie Vor- und Nachteile aus eigener Erfahrung und geben Sie dem Nutzer einen konkreten Rat.",
  mindestWorte:150,
  zeit:"30 Minuten",
  hinweise:[
    "Ich befinde mich in einer ganz ähnlichen Situation:",
    "Meiner Erfahrung nach ist beides notwendig, allerdings aus unterschiedlichen Gründen.",
    "Der entscheidende Vorteil eines Kurses besteht darin, dass …",
    "Nicht verschweigen möchte ich, dass …",
    "Mein Rat an dich wäre daher: …"],
  muster:"<b>Ich befinde mich in einer ganz ähnlichen Situation:</b> Ich arbeite Vollzeit als Softwareentwickler " +
    "in Aachen und besuche seit einem halben Jahr abends einen Intensivkurs.<br><br>" +
    "<b>Meiner Erfahrung nach ist beides notwendig, allerdings aus unterschiedlichen Gründen.</b> " +
    "Bei der Arbeit lernt man den Wortschatz, den man täglich hört, und gewöhnt sich an das Tempo. " +
    "Was man dort nicht lernt, sind die Strukturen: Wer nie korrigiert wird, wiederholt seine Fehler jahrelang. " +
    "<b>Der entscheidende Vorteil eines Kurses besteht darin, dass</b> jemand einem systematisch zeigt, " +
    "warum ein Satz falsch klingt — im Büro sagt das niemand, weil alle höflich sind.<br><br>" +
    "<b>Nicht verschweigen möchte ich, dass</b> die Doppelbelastung erheblich ist. Nach acht Stunden Arbeit " +
    "noch drei Stunden Unterricht zu haben, kostet Kraft, und am Wochenende bleibt wenig Freizeit. " +
    "Wer das unterschätzt, bricht nach wenigen Wochen ab.<br><br>" +
    "<b>Mein Rat an dich wäre daher:</b> Melde dich für einen Abendkurs an, aber setze dir ein festes Ziel, " +
    "zum Beispiel ein Zertifikat in sechs Monaten. Ein Datum diszipliniert mehr als jeder Vorsatz, " +
    "und danach kannst du in Ruhe entscheiden, wie es weitergeht.",
  kriterien:"telc prüft auf B2 die Fähigkeit, abzuwägen. Ein Text, der nur Vorteile nennt, verliert Punkte bei der " +
    "Berücksichtigung der Leitpunkte, weil der Nachteil-Leitpunkt fehlt. " +
    "Der direkte Rat am Ende („Mein Rat wäre …“) sichert den Adressatenbezug, den die Kommunikative Gestaltung verlangt.",
  regel:"Im Forum duzt man in der Regel. Abwägende Texte brauchen Signalwörter: „allerdings“, „dagegen“, „nicht verschweigen möchte ich“ — sie zeigen dem Prüfer die Struktur.",
  en:"Tests balanced argumentation in an informal register: pros, cons and personal advice to another user." },

/* ---------------------------------------------------------- 5 */
{ typ:"frei", thema:"schreiben", niveau:"b2",
  frage:"Ihre Lokalzeitung berichtet, dass in der Region hunderte Stellen für IT-Fachkräfte unbesetzt bleiben, " +
    "während qualifizierte Zugewanderte monatelang auf die Anerkennung ihrer Abschlüsse warten. " +
    "Der Kommentar schließt mit dem Satz: <b>„Wer hier arbeiten will, muss eben Geduld mitbringen.“</b> " +
    "Schreiben Sie einen <b>Leserbrief</b> von mindestens 150 Wörtern. " +
    "Beziehen Sie sich auf den Kommentar, widersprechen Sie dem Schlusssatz, " +
    "schildern Sie die Folgen für Betroffene und Unternehmen und schlagen Sie zwei Maßnahmen vor.",
  mindestWorte:150,
  zeit:"30 Minuten",
  hinweise:[
    "Ihr Kommentar vom … hat mich als Betroffenen sehr beschäftigt.",
    "Dem Schlusssatz, … , muss ich entschieden widersprechen.",
    "Die Folgen sind für beide Seiten spürbar:",
    "Konkret schlage ich zwei Maßnahmen vor:",
    "Es liegt im Interesse aller Beteiligten, dass …"],
  muster:"Sehr geehrte Redaktion,<br><br>" +
    "<b>Ihr Kommentar vom</b> 20. Oktober über unbesetzte IT-Stellen <b>hat mich als Betroffenen sehr beschäftigt.</b> " +
    "Die Zahlen, die Sie nennen, decken sich vollständig mit dem, was ich in meinem Umfeld erlebe.<br><br>" +
    "<b>Dem Schlusssatz,</b> wer hier arbeiten wolle, müsse eben Geduld mitbringen, <b>muss ich entschieden widersprechen.</b> " +
    "Geduld ist keine Verwaltungsleistung. Ich habe selbst neun Monate auf die Bewertung meines Abschlusses gewartet, " +
    "obwohl mein Arbeitgeber die Stelle sofort besetzen wollte.<br><br>" +
    "<b>Die Folgen sind für beide Seiten spürbar:</b> Qualifizierte Fachkräfte arbeiten in dieser Zeit " +
    "unter ihrem Niveau oder wandern in Länder ab, in denen das Verfahren wenige Wochen dauert. " +
    "Unternehmen wiederum verschieben Projekte, obwohl geeignete Bewerber längst vor Ort sind.<br><br>" +
    "<b>Konkret schlage ich zwei Maßnahmen vor:</b> Erstens sollten die Anerkennungsstellen personell verstärkt " +
    "und die Verfahren digitalisiert werden, damit Unterlagen nicht mehrfach eingereicht werden müssen. " +
    "Zweitens brauchen wir eine befristete Arbeitserlaubnis, die schon während des laufenden Verfahrens gilt.<br><br>" +
    "<b>Es liegt im Interesse aller Beteiligten, dass</b> aus Wartezeit endlich Arbeitszeit wird.<br><br>" +
    "Mit freundlichen Grüßen<br>Karthik Jayaprakash",
  kriterien:"Die Aufgabe verlangt ausdrücklich zwei Maßnahmen — telc zählt sie einzeln. " +
    "„Erstens … Zweitens …“ macht dem Prüfer sichtbar, dass der Leitpunkt vollständig bearbeitet ist. " +
    "Für die Formale Richtigkeit lohnt sich die indirekte Rede beim Zitat des Kommentars („wer hier arbeiten wolle, müsse …“).",
  regel:"Beim Zitieren fremder Meinungen steht im Deutschen die indirekte Rede mit Konjunktiv I. Vorschläge werden nummeriert, damit kein Leitpunkt übersehen wird.",
  en:"Tests engaging with a source text: contradicting a claim, showing consequences and proposing two concrete measures." }

]

};
