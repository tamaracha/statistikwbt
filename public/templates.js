angular.module("wbt").run(["$templateCache",function(e){e.put("contact/contact.html",'<h2>Kontakt</h2><p>Anfragen zu inhaltlichen Themen, technischen Schwierigkeiten, Feedback/Kritik und Anregungen sind bitte an <a href="mailto:webmaster@t-cook.de">webmaster@t-cook.de </a>zu richten. Ich werde mich dann bald des Problems annehmen. Es kann den Vorgang beschleunigen, den Nutzernamen mit anzugeben oder die Anfrage mit der E-Mail-Adresse zu schicken, die im Profil angegeben wurde.</p>'),e.put("content/content.html",'<nav role="navigation"><ul class="nav nav-pills"><li data-ng-repeat="unit in ::content.units" data-ui-sref-active="active"><a data-ui-sref=".unit.description({unit: unit.title})" data-ng-bind="::unit.title"></a></li></ul></nav><section ui-view class="row"><div class="col-md-offset-3 col-md-6"><header><h2>So funktioniertt\'s</h2><alert type="warning" data-ng-hide="wbt.identity.authenticated()">Es wäre super, wenn du dich kurz <button type="button" data-ng-click="wbt.identity.login()" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-log-in"></span> anmelden</button> würdest, bevor du beginnst.</alert><alert type="info" data-ng-show="wbt.identity.authenticated&amp;&amp;wbt.identity.data().fsk.length===0">Willkommen! Wir können gleich anfangen. Doch vorher gib bitte noch eine <button type="button" data-ng-click="wbt.identity.fsk()" class="btn btn-primary">Selbsteinschätzung deiner Statistikvorkenntnisse</button> ab.</alert><alert type="success" data-ng-show="wbt.identity.authenticated&amp;&amp;wbt.identity.data().fsk.length&gt;0">Prima, wir können jetzt anfangen.</alert></header><p>Es gibt hier {{content.units.length}} Kapitel. Jedes von ihnen beschäftigt sich mit einem bestimmten statistischen Themengebiet. Es gibt keine festgelegte Reihenfolge bei der Bearbeitung und du brauchst nicht alles von Anfang bis Ende durchzulesen, was hier zu finden ist. Ein Kapitel besteht aus den Kernartikeln, die jeweils durch Zusätze ergänzt sind . Du kannst relativ flexibel entscheiden, welche Zusätze du lesen möchtest.</p><dl class="dl-horizontal"><dt>Aufgaben</dt><dd>Die Einheit ist abgeschlossen, wenn du alle Aufgaben bearbeitet hast.</dd><dt>Beispiele</dt><dd>Wenn du mehr Hilfestellung oder Veranschaulichung brauchst, kannst du dir die Beispiele ansehen.</dd><dt>Extras</dt><dd>theoretischere Hintergrundinformationen, für den Fall, dass du noch Luft hast und es genauer wissen möchtest</dd></dl><p>Du wirst nach Abschluss eines Tests gebeten, das Kapitel zu bewerten, kannst dies aber auch zu jedem anderen Zeitpunkt tun. Wenn du dich umentscheidest, ist das kein Problem, du kannst deine Bewertungen beliebig oft updaten. Großzügiger Gebrauch der Bewertungen ist sehr erwünscht.</p></div></section>'),e.put("download/download.html",'<h2>Download</h2><p>Falls du die Inhalte dieser Webseite gern als Textdokument archivieren möchtest, kannst du hier ein Dokument mit den von dir bearbeiteten Kapiteln herunterladen. Du kannst zwischen ein paar Formaten wählen und einstellen, welche Bestandteile du haben möchtest.</p><form name="downloadForm" novalidate method="get" action="/api/downloads" class="form-horizontal"><input type="hidden" name="token" ng-value="wbt.identity.token()"><div class="form-group"><label class="col-xs-2">Kapitel</label><div class="col-xs-10"><div data-ng-repeat="unit in download.units" class="checkbox"><label><input type="checkbox" name="units" data-ng-value="unit._id" checked> {{unit.title}}</label></div></div></div><div class="form-group"><label class="col-xs-2">Inhalte</label><div class="col-xs-10"><label class="checkbox-inline"><input type="checkbox" name="contents" value="body" checked> Kerntexte</label><label class="checkbox-inline"><input type="checkbox" name="contents" value="examples" checked> Beispiele</label><label class="checkbox-inline"><input type="checkbox" name="contents" value="extras" checked> Extras</label></div></div><div class="form-group"><label class="col-xs-2">Dateiformat</label><div class="col-xs-10"><label class="radio-inline"><input type="radio" name="format" value="rtf" data-ng-model="download.format"><span>RTF-Format</span></label><label class="radio-inline"><input type="radio" name="format" value="docx" data-ng-model="download.format"><span>MS Word</span></label><label class="radio-inline"><input type="radio" name="format" value="epub" data-ng-model="download.format"><span>EPub-Format</span></label><label class="radio-inline"><input type="radio" name="format" value="markdown" data-ng-model="download.format"><span>Markdown</span></label><label class="radio-inline"><input type="radio" name="format" value="latex" data-ng-model="download.format"><span>LaTex</span></label></div></div><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Download" data-ng-class="{\'btn-primary\': undefined.$valid,\'btn-danger\': undefined.$invalid}" class="btn"></div></div></form>'),e.put("home/home.html",'<div class="jumbo-tron"><h2>Willkommen!</h2><p>Dieses WBT (Einführung in die psychologische Statistik) wurde für Personen konzipiert, die durch ihr Studium, Ausbildung oder Beruf regelmäßig mit psychologischen Befunden und Theorien zu tun haben, aber wenig über die Entstehung solcher Befunde mittels Empirie und Statistik wissen.</p><p>Sie werden hier kurz in die empirische Vorgehensweise beim psychologischen Erkenntnisgewinn und die rolle der Statistik eingeführt und lernen anhand eines anschaulichen Beispiels die häufigsten statistischen Verfahren kennen und anzuwenden.</p><h3>Hilfsmittel zum Lösen der Aufgaben</h3><p>Die vorgestellte Statistik können Sie weitgehend mit MS Excel bearbeiten. Besitzen Sie Excel, können Sie hier auch gleich lernen, Statistik ohne unbezahlbare oder elitäre Statistiksoftware am PC einzusetzen, statt nur auf dem Papier. Falls Sie Excel zwar haben, aber eigentlich nicht recht wissen, wie es funktioniert, sehen Sie sich bitte den kurzen Excel-Überblick hier auf der Hilfe-Seite an. Falls Sie kein Excel haben, suchen Sie sich auf jeden Fall für Sie angenehme Methoden zum Rechnen (Papier/Stift, Taschenrechner usw.).</p><h3>Interaktive Anwendungen</h3><p>Die meisten Themen hier sind durch kleine interaktive Anwendungen ergänzt. Damit können Sie selbst ausprobieren, wie sich statistische Ergebnisse auf ihre grafische Darstellung auswirken, indem Sie sie selbst verändern können und die Grafik sich daraufhin mit verändert.</p><h3>Begriffsklärung</h3><p>Neben der Hilfe gibt es auch ein Glossar. Begriffe im Text, die Sie vielleicht nicht kennen und einen Glossareintrag haben, sind dunkelblau gekennzeichnet und können durch zeigen mit der Maus die Begriffsdefinition anzeigen. So können Sie die aktuelle Seite offen lassen und trotzdem schnell den Begriff klären.</p><p>Haben Sie viel Vergnügen und viele neue Erkenntnisse.</p></div>'),e.put("login/login.html",'<div class="modal-header"><h3>Anmelden</h3></div><div class="modal-body"><form novalidate name="loginForm" role="form" class="form-horizontal"><div data-ng-class="{\'has-success\': loginForm.email.$valid, \'has-error\': loginForm.email.$invalid&&loginForm.email.$touched}" class="form-group"><label class="col-xs-2 form-label">E-Mail-Adresse</label><div class="col-xs-10"><input type="text" name="email" class="form-control" placeholder="name@domain.com" data-ng-model="login.loginData.email" required maxlength="20" user-exists data-ng-model-options="{debounce: 500}"><span aria-live="assertive" ng-show="loginForm.email.$touched" class="help-block"><span ng-if="loginForm.email.$valid">Dieser User existiert.</span></span><span ng-show="loginForm.email.$touched" role="status" class="help-block"><span ng-if="loginForm.email.$pending">Prüfe Verfügbarkeit</span></span><span ng-messages="loginForm.email.$error" ng-show="loginForm.email.$touched" class="help-block"><span ng-message="userExists">Dieser User existiert nicht.</span></span></div></div><div data-ng-class="{\'has-success\': loginForm.password.$valid, \'has-error\': loginForm.password.$invalid&&loginForm.password.$touched}" class="form-group"><label class="col-xs-2 form-label">Passwort</label><div class="col-xs-10"><input type="password" name="password" class="form-control" ng-model="login.loginData.password" required minlength="8" placeholder="Passwort"></div></div></form></div><div class="modal-footer"><input type="button" data-ng-class="{\'btn-primary\': loginForm.$valid, \'btn-danger\': loginForm.$invalid}" value="anmelden" data-ng-click="login.login()" class="btn"><input type="button" value="abbrechen" data-ng-click="login.cancel()" class="btn btn-default"></div>'),e.put("register/register.html",'<h2>Registrieren</h2><form novalidate name="registerForm" ng-submit="register.register(register.registerData)" role="form" class="form-horizontal"><fieldset name="login"><legend>Logindaten</legend><div data-ng-class="{\'has-success\': registerForm.email.$valid, \'has-error\': registerForm.email.$invalid&&registerForm.email.$touched}" class="form-group"><label class="col-xs-2 form-label">E-Mail-Adresse</label><div class="col-xs-10"><input type="email" name="email" class="form-control" required maxlength="20" user-available data-ng-model="register.registerData.email" placeholder="name@domain.com" data-ng-model-options="{debounce: 500}"><span aria-live="assertive" data-ng-show="registerForm.email.$touched" class="help-block"><span ng-if="registerForm.email.$valid">Diese E-mail ist noch verfügbar.</span><span data-ng-if="registerForm.email.$pending">Prüfe Verfügbarkeit</span></span><span ng-messages="registerForm.email.$error" ng-if="registerForm.email.$touched" class="help-block"><span ng-message="required">Bitte gib eine E-Mail-Adresse an.</span><span ng-message="email">Das ist keine gültige E-mail-Adresse.</span><span ng-message="userAvailable">Diese E-Mail ist schon registriert</span></span></div></div><div data-ng-class="{\'has-success\': registerForm.password.$valid, \'has-error\': registerForm.password.$invalid&&registerForm.password.$touched}" class="form-group"><label class="col-xs-2 form-label">Passwort</label><div class="col-xs-10"><input type="{{register.showPassword ? \'text\' : \'password\'}}" name="password" class="form-control" required minlength="8" data-ng-model="register.registerData.password" placeholder="Passwort"><span ng-messages="registerForm.password.$error" data-ng-if="registerForm.password.$touched" class="help-block"><span ng-message="required">Bitte gib ein Passwort an.</span><span ng-message="minlength">Das Passwort sollte mindestens acht Zeichen lang sein.</span></span></div></div><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><div class="checkbox"><label><input type="checkbox" name="showpassword" ng-model="register.showPassword"><span>Eingegebenes Passwort einblenden</span></label></div></div></div></fieldset><fieldset name="person"><legend>Personenangaben</legend><div data-ng-class="{\'has-success\': registerForm.nickname.$valid, \'has-error\': registerForm.nickname.$invalid&&registerForm.nickname.$touched}" class="form-group"><label class="col-xs-2 form-label">Nickname (optional</label><div class="col-xs-10"><input type="text" name="nickname" class="form-control" data-ng-model="register.registerData.profile.nickname"></div></div><div data-ng-class="{\'has-success\': registerForm.age.$valid, \'has-error\': registerForm.age.$invalid&&registerForm.age.$touched}" class="form-group"><label class="col-xs-2 form-label">Alter in Jahren</label><div class="col-xs-10"><input type="number" name="age" class="form-control" required min="0" max="100" step="1" data-ng-model="register.registerData.profile.age"></div></div><div class="form-group"><label class="col-xs-2">Geschlecht</label><div class="col-xs-10"><label class="radio-inline"><input type="radio" name="sex" value="male" required data-ng-model="register.registerData.profile.sex"><span>männlich</span></label><label class="radio-inline"><input type="radio" name="sex" value="female" required data-ng-model="register.registerData.profile.sex"><span>weiblich</span></label></div></div><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><div class="checkbox"><label><input type="checkbox" name="study" data-ng-model="register.registerData.profile.study"><span>Ich studiere zur Zeit oder habe studiert.</span></label></div></div></div><div data-ng-if="register.registerData.profile.study" class="form-group"><label class="col-xs-2 control-label">Studienfach</label><div class="col-xs-10"><select required data-ng-options="subject.name as subject.label group by subject.group for subject in register.subjects" data-ng-model="register.registerData.profile.subject" class="form-control"></select></div></div><div class="form-group"><label class="col-xs-2">Was erwartest du dir hiervon?</label><div class="col-xs-10"><div class="checkbox"><label><input type="checkbox" name="reason1"><span>Mal gucken, was es hier so gibt</span></label></div><div class="ckeckbox"><label><input type="checkbox" name="reason-2"><span>Habe nach Statiker gesucht und bin bei Statistik gelandet.</span></label></div></div></div></fieldset><fieldset><legend>Datenschutz</legend><div class="form-group"><div class="col-xs-offset-2 col-xs-10"><div class="checkbox"><label><input type="checkbox" name="agree" data-ng-model="register.registerData.profile.agree"><span>Ich akzeptiere die<a data-ui-sref="contact">Datenschutzrichtlinien</a></span>und bin damit einverstanden, dass meine auf dieser Webseite getätigten Eingaben zu wissenschaftlichen Zwecken ausgewertet werden.</label></div></div></div><div class="form-group"><div class="col-xs-2-offset col-xs-10"><input type="submit" value="Registrieren" data-ng-class="{\'btn-primary\': registerForm.$valid,\'btn-danger\': registerForm.$invalid}" class="btn"></div></div></fieldset></form>'),e.put("software/software.html",'<h2>Statistiksoftware Excel</h2><p>Mit Excel lässt sich schon einiges an statistischen Auswertungen erreichen. Es folgen ein paar Grundlagen darüber, wie man mit Excel viel Rechnerei computergestützt durchführen kann. Es wird ein Excel 2013 zugrunde gelegt. Größtenteils sollte das hier Beschriebene aber auch in älteren Versionen verfügbar sein.</p><accordion><accordion-group is-open="true" heading="Formeln"><p>Formeln können die Grundrechenarten auf Zahlen anwenden und einer Zelle kann man eine Formel zuweisen, statt einfach direkt eine Zahl in die Zelle einzutragen. Eine Zelle mit Formel zeigt das berechnete Ergebnis als Wert an. Markiere die Zelle, in der das Ergebnis erscheinen soll und trage die Formel dort ein. Formeln beginnen mit einem Gleichheitszeichen und werden mit der Return- oder Tabtaste ausgeführt. Durch das Gleichheitszeichen weiß Excel, dass es die Eingabe als Formel interpretieren soll und nicht als normalen Wert. Mit den Grundrechenoperatoren (+, -, * und /) kann man nun Rechnungen auf Grundschulniveau konstruieren. Das ist sehr bequem, wenn das formulieren schneller geht als das Rechnen, z.B. bei der Anzahl von Sekunden: <kbd>=60*60*24*7</kbd> führt zu 604.800.</p></accordion-group><accordion-group heading="Referenzieren"><p>In Formeln kann man nicht nur die zu verrechnenden Zahlen direkt eingeben, sondern stattdessen auch die Koordinaten der Zellen, in denen die Zahlen stehen: =a1+b1*c1. Die Spalten werden von links nach rechts mit Buchstaben bezeichnet, Zeilen von oben nach unten mit Nummern. In einer Koordinate kommt zuerst die Spalte, dann die Zeile. Die Zelle in der dritten Spalte von links und der zweiten Zeile von oben heißt z.B. C2. Das Angenehme dabei ist: Ändert sich der Wert einer solchen referenzierten Zelle, wird die Formel neu berechnet und der Wert der mit Formel versehenen Zelle stimmt immer.</p></accordion-group><accordion-group heading="Zellbereiche ausfüllen"><p>Excel interpretiert die Koordinaten in einer Formel als relativ, bezogen auf die Formelzelle. Verschiebt man die Zelle mit der Formel z.B. um eine Spalte nach rechts, werden auch die Koordinaten in der Formel so geändert, als hätten sich die referenzierten Zellen mit verschoben. Um wirklich absolute Koordinaten zu erhalten, die an ihre Spalte bzw. Zeile fixiert sind, wird dem Buchstaben oder der Nummer ein Dollarzeichen vorangestellt. =$b$3 wäre vollständig fixiert, =$b3 hingegen nur auf der Spalte. Ein Vorzug der relativen Schreibweise ist, dass man die Formel kopieren und auf eine ganze Spalte oder Zeile anwenden kann.</p><p>Beispiel: Es gibt Spalte a und b, und 20 Zeilen. Man möchte eine Spalte c erstellen, indem man in jeder Zeile den Wert aus Spalte b von dem aus Spalte a subtrahiert. Hierzu schreibt man in Zelle c1: =a1-b1. Nun kopiert man Zelle c1, markiert Zellen c2—c20 und fügt die kopierte Zelle ein. Die Referenzen passen sich an die Zeilen an, in denen die Formeln stehen.</p></accordion-group><accordion-group heading="Funktionen"><p>Funktionen fassen komplexere Rechenoperationen unter einem Funktionsnamen zusammen. Sie werden mit Eingabewerten (Parametern) gefüttert und geben einen Ausgabewert zurück, der aufgrund der Parameter berechnet wird. Funktionen erscheinen in Formeln, können entweder deren einziger Bestandteil sein oder noch von Rechenoperatoren umgeben sein: =Funktionsname(Parameter1;Parameter2;…). Die Funktion zur Berechnung der Summe heißt naheliegenderweise Summe. Um die Summe aus C2 und C3 zu berechnen, lautet der Funktionsaufruf: summe(C2;C3). Diese Aufgabe wäre natürlich mit einem direkten Formelaufruf schneller erledigt; Funktionen entfalten ihr Potential erst bei komplexeren Berechnungen wie auch Statistik.</p></accordion-group><accordion-group heading="Bereiche referenzieren"><p>Um die Summenfunktion doch noch zu rehabilitieren, kann als Parameter statt einzelner Zellen ein Zellbereich übergeben werden. Bereiche werden notiert, indem die Zellbezüge für Anfangs- und Endzelle durch einen Doppelpunkt getrennt werden: =Summe(C3:C6) entspricht =summe(c3;c4;c5;c6). Bereiche können auch zweidimensional sein: c2:d4 entspricht C2, C3, C4, D2, D3 und D4. So kann man mit der Summenfunktion und Bereichsreferenzierung auch Summen über größere Bereiche bilden, was allein mit Formeln sehr viel Tipparbeit und fehleranfälliger wäre.</p></accordion-group><accordion-group heading="Funktionsbibliothek"><p>Im Menü unter Formeln > Funktionsbibliothek > Mehr Funktionen > Statistisch gibt es Funktionen speziell für statistische Berechnungen. Man muss die in Excel implementierten Funktionen also nicht auswendig eingeben, sondern kann sie aus dem Menü heraus auswählen.</p></accordion-group></accordion>'),e.put("user/user.html",'<div class="header"><h2 data-ng-bind="identity.data().email"></h2></div><ul class="nav nav-tabs"><li data-ui-sref-active="active"><a data-ui-sref=".profile">Profil</a></li><li data-ui-sref-active="active"><a data-ui-sref=".edit">Bearbeiten</a></li></ul><ui-view></ui-view>'),e.put("content/unit/unit.html",'<header class="col-sm-3"><h2><a data-ui-sref=".description" data-ng-bind="unit.unit.subtitle ? unit.unit.title+\': \'+unit.unit.subtitle : unit.unit.title"></a></h2><nav><ul class="nav nav-pills nav-stacked"><li data-ng-repeat="topic in unit.unit.topics" data-ui-sref-active="active"><a data-ui-sref=".topic({topic: topic.title})" data-ng-bind="topic.title"></a></li><li data-ui-sref-active="active"><a data-ui-sref=".test">Test</a></li></ul></nav></header><main data-ui-view class="col-sm-9"></main>'),e.put("user/fsk/fsk.html",'<div class="modal-header"><h3>Selbsteinschätzung deiner Statistikkenntnisse</h3></div><div class="modal-body"><form name="sesskoForm" novalidate data-ng-if="fsk.identity.data().fsk.length===0" class="form-horizontal"><div class="form-group"><label class="col-xs-3">Ich bin für Statistik …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> nicht begabt</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> sehr begabt</label></div></div><div class="form-group"><label class="col-xs-3">Neues zu lernen in Statistik, fällt mir …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leicht</label></div></div><div class="form-group"><label class="col-xs-3">Ich bin in Statistik …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> nicht intelligent</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> sehr inntelligent</label></div></div><div class="form-group"><label class="col-xs-3">Meine statistikbezogenen Fähigkeiten sind …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> niedrig</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> hoch</label></div></div><div class="form-group"><label class="col-xs-3">Statistische Aufgaben fallen mir …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwer</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leicht</label></div></div></form><form novalidate name="sesskoForm2" data-ng-if="fsk.identity.data().fsk.length&gt;0" class="form-horizontal"><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs halte ich meine Begabung für Statistik jetzt für …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="1" data-ng-model="fsk.sessko[0]"> geringer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'2\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'3\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'4\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value=\'5\' data-ng-model="fsk.sessko[0]"></label><label class="radio-inline"><input type="radio" name="sessko1" data-ng-value="6" data-ng-model="fsk.sessko[0]"> höher als zuvor</label></div></div><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs fällt mir das Lernen von neuen statistischen Inhalten jetzt …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="1" data-ng-model="fsk.sessko[1]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'2\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'3\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'4\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value=\'5\' data-ng-model="fsk.sessko[1]"></label><label class="radio-inline"><input type="radio" name="sessko2" data-ng-value="6" data-ng-model="fsk.sessko[1]"> leichter als zuvor</label></div></div><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs komme ich mit den Anforderungen in Statistik …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="1" data-ng-model="fsk.sessko[2]"> schlechter zurecht als zuvor</label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'2\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'3\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'4\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value=\'5\' data-ng-model="fsk.sessko[2]"></label><label class="radio-inline"><input type="radio" name="sessko3" data-ng-value="6" data-ng-model="fsk.sessko[2]"> besser zurecht als zuvor</label></div></div><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs bin ich jetzt …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="1" data-ng-model="fsk.sessko[3]"> schlechter in Statistik als zuvor</label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'2\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'3\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'4\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value=\'5\' data-ng-model="fsk.sessko[3]"></label><label class="radio-inline"><input type="radio" name="sessko4" data-ng-value="6" data-ng-model="fsk.sessko[3]"> besser in Statistik als zuvor</label></div></div><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs fallen mir jetzt die Aufgaben in Statistik …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="1" data-ng-model="fsk.sessko[4]"> schwerer als zuvor</label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'2\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'3\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'4\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value=\'5\' data-ng-model="fsk.sessko[4]"></label><label class="radio-inline"><input type="radio" name="sessko5" data-ng-value="6" data-ng-model="fsk.sessko[4]"> leichter als zuvor</label></div></div><div class="form-group"><label class="col-xs-3">Nach der Bearbeitung des WBTs halte ich meine statistikbezogenen Fähigkeiten für …</label><div class="col-xs-9"><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="1" data-ng-model="fsk.sessko[5]"> niedriger als zuvor</label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'2\' data-ng-model="fsk.sessko[5]"></label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'3\' data-ng-model="fsk.sessko[5]"></label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'4\' data-ng-model="fsk.sessko[5]"></label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value=\'5\' data-ng-model="fsk.sessko[5]"></label><label class="radio-inline"><input type="radio" name="sessko6" data-ng-value="6" data-ng-model="fsk.sessko[5]"> höher als zuvor</label></div></div></form></div><div class="modal-footer"><input type="button" data-ng-click="fsk.ok()" value="Abschicken" class="btn btn-primary"><input type="button" data-ng-click="fsk.cancel()" value="Abbrechen" class="btn btn-default"></div>'),e.put("content/unit/akzeptanz/akzeptanz.html",'<div class="modal-header"><h3 class="modal-title">Kapitel bewerten</h3></div><div class="modal-body"><p>Stufe die folgenden drei Aussagen mittels der Sternchen ein (1 Stern: trifft nicht auf mich zu, 5 Sterne: trifft voll auf mich zu). Du kannst deine Wertungen beliebig oft ändern.</p><form name="ratingForm" novalidate class="form-horizontal"><div class="form-group"><div id="rating-motivation" class="col-xs-10 control-label">Die Bearbeitung dieses Kapitels war für mich sehr motivierend, weiterzumachen viel mir leicht.</div><div class="col-xs-2"><rating aria-labelledby="rating-motivation" data-ng-model="akzeptanz.summary.motivation" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'motivation\',akzeptanz.summary.motivation)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.motivation]}}"></rating></div></div><div class="form-group"><div id="rating-success" class="col-xs-10 control-label">Ich habe das Gefühl, einiges über das thema dazugelernt zu haben.</div><div class="col-xs-2"><rating aria-labelledby="rating-success" data-ng-model="akzeptanz.summary.success" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'success\',akzeptanz.summary.success)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.success]}}"></rating></div></div><div class="form-group"><div id="rating-usability" class="col-xs-10 control-label">Die Webseite lässt sich gut bedienen und es ist klar, was ich als nächstes tun soll.</div><div class="col-xs-2"><rating aria-labelledby="rating-usability" data-ng-model="akzeptanz.summary.usability" data-ng-change="akzeptanz.content.rate(akzeptanz.unit._id,\'usability\',akzeptanz.summary.usability)" aria-valuetext="{{akzeptanz.labels[akzeptanz.summary.usability]}}"></rating></div></div><div class="form-group"><label for="comment" class="control-label">Kommentar</label><textarea id="comment" name="comment" class="form-control" data-ng-model="akzeptanz.summary.comment" placeholder="Ergänzungen, Kritik oder Anmerkungen, die du noch loswerden möchtest"></textarea></div></form></div><div class="modal-footer"><button type="button" data-ng-click="akzeptanz.cancel()" class="btn btn-default">abbrechen</button><button type="button" data-ng-click="akzeptanz.ok()" class="btn btn-primary">Kommentar abschicken</button></div>'),e.put("content/unit/description/description.html",'<h3>Beschreibung</h3><div md="unit.unit.description"></div><h3>Voraussetzungen</h3><p data-ng-if="!unit.unit.requires">Es gibt keine Voraussetzungen.</p><ul data-ng-if="unit.unit.requires" class="list-unstyled"><li data-ng-repeat="required in unit.unit.requires"><a data-ng-bind="required.title" data-ui-sref=".({unit: required._id})" data-ng-class="required._id|unitStatus:wbt.authService.user():content.units" class="btn"></a></li></ul>'),e.put("content/unit/test/test.html",'<h3>Test</h3><ng-switch on="test.state"><section ng-switch-when="intro"><p>Es folgen ein paar Testaufgaben, mit deren Hilfe du dein erworbenes Wissen über dieses Kapitel prüfen und festigen kannst. Es gibt mehrere Aufgabentypen:</p><dl class="dl-horizontal"><dt>Multiple-Choice</dt><dd>Eine der angebotenen Antwortmöglichkeiten ist korrekt. Für die korrekte Beantwortung bekommst du einen Punkt.</dd><dt>True/False-Aufgaben</dt><dd>Jede der angebotenen Aussagen ist entweder korrekt oder falsch und muss explizit mittels Kontrollkästchen beantwortet werden. Jede korrekt an- bzw. angewählte Aussage bringt dir einen Punkt, man kann also maximal so viele Punkte bekommen wie es Aussagen in einer Aufgabe gibt. Punktabzug bei Fehlern gibt es nicht.</dd><dt>Ausfüllen</dt><dd>Es gibt keine Antwortoptionen, sondern du musst eine kurze Lösung selbst generieren, z.B. eine Rechenaufgabe usw.</dd></dl><p>Nachdem du dir die Auflösung anzeigen lässt, bekommst du ein Feedback über deine Antwort. Bei Multiple-Choice-Aufgaben kannst du auch dann noch die anderen Antworten anwählen um deren Feedback zu sehen, dies wird dann aber nicht mehr als deine Antwort gewertet.</p><p><button type="button" data-ng-click="test.next()" class="btn btn-primary">Alles klar, jetzt anfangen</button></p></section><form novalidate data-ng-switch-when="item" data-ng-switch="test.item.type"><progressbar type="info" value="test.progress.done" title="Fortschritt" max="test.progress.max"></progressbar><div data-ng-switch-when="single" class="form-group"><label data-ng-bind="test.item.text"></label><div data-ng-repeat="choice in test.item.choices" class="radio"><label><input type="radio" name="{{test.item._id}}" data-ng-value="choice" data-ng-model="test.choice"> {{choice.text}}</label></div><p data-ng-class="test.choice.correct ? \'text-success\' : \'text-warning\'" data-ng-bind="test.choice.feedback" data-ng-show="test.guesses[test.item._id]"></p></div><div data-ng-switch-when="multiple" class="form-group"><label data-ng-bind="test.item.text"></label><div data-ng-repeat="choice in test.choice" class="checkbox"><label><input type="checkbox" name="{{test.item._id}}" data-ng-model="choice.selected"> {{choice.text}}</label><p data-ng-show="test.guesses[test.item._id]" data-ng-class="choice.correct===choice.selected ? \'text-success\' : \'text-warning\'" data-ng-bind="choice.correct===choice.selected ? choice.feedback.correct : choice.feedback.incorrect"></p></div></div><div class="form-group"><button type="button" data-ng-click="test.guesses[test.item._id] ? test.next() : test.solve()" data-ng-bind="test.guesses[test.item._id] ? \'Weiter\' : \'Auflösung\'" class="btn btn-primary"></button></div></form><section data-ng-switch-when="finished"><progressbar type="success" value="test.progress.points" max="test.progress.maxPoints" title="korrekt gelöst"></progressbar><p>Du hast alle Aufgaben für dieses Kapitel bearbeitet und {{test.progress.points}} von {{test.progress.maxPoints}} Punkten erzielt. Du kannst also Kapitel bearbeiten, die dieses Kapitel als Voraussetzung haben. Jetzt wäre eine gute Gelegenheit, die <button type="button" data-ng-click="wbt.identity.fsk()" class="btn btn-sm">Selbsteinschätzung deiner Statistikkenntnisse</button> aufzufrischen.</p></section></ng-switch>'),e.put("content/unit/topic/topic.html",'<h3 data-ng-bind="topic.topic.subtitle ? topic.topic.title+\': \'+topic.topic.subtitle : topic.topic.title"></h3><div md="topic.topic.body" mathjax></div><div role="toolbar" class="btn-toolbar"><div class="btn-group"><div dropdown is-open="status.examples" data-ng-if="topic.topic.examples.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Beispiele<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="example in topic.topic.examples"><a data-ui-sref=".example({example: example.title})" ng-bind="example.title" class="btn btn-default"></a></li></ul></div><div dropdown is-open="status.extras" data-ng-if="topic.topic.extras.length&gt;0" class="btn-group"><button type="button" dropdown-toggle class="btn btn-default dropdown-toggle">Extras<span class="caret"></span></button><ul class="dropdown-menu"><li data-ng-repeat="extra in topic.topic.extras"><a data-ui-sref=".extra({extra: extra.title})" data-ng-bind="extra.title" class="btn btn-default"></a></li></ul></div></div><div data-ng-if="wbt.identity.authenticated()" class="btn-group"><button type="button" ng-click="unit.content.akzeptanz(unit.unit)" class="btn btn-default">Kapitel bewerten</button><button type="button" data-ng-click="wbt.identity.fsk()" class="btn btn-default">Statistikkenntnisse einschätzen</button></div></div><section data-ui-view></section>')
}]);