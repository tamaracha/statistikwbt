# statistikwbt
Ein WBT (Web based Training)  über psychologische Statistik, primär für Lehramtsstudierende ausgerichtet.

## Installation
Es folgen die Komponenten, die du brauchst, um Inhalte für das WBT zu entwickeln. Falls du dich bei den technischeren Themen beteiligen willst, solltest du dir auch die Komponenten aus dem Abschnitt „Backend“ installieren.

### Voraussetzungen
#### git
Dieses Projekt wird mit der Versionskontrolle [Git] verwaltet. Gerade im Umgang mit (Quell)texten bietet Git eine hohe Flexibilität und Stabilität im Vergleich zu einfachen Dateibasierten Backuplösungen. Der Master-Branch ist auf t-cook.de/statistikwbt online. Neue Beiträge kommen nicht sofort in den Master-Branch, sondern erst nach ausreichender lokaler Testung, damit immer eine stabile Version auf dem Server läuft.

Da wir jetzt ein paar mehr Leute sind, fände ich es sehr schön, wenn wir einen Workflow mit Git hinbekommen würden. Es erfordert allerdings etwas Einarbeitung. Um sich etwas über Git zu informieren, sei [dieses Handbuch][Pro Git] zur Vertiefung empfohlen.

#### ein Github-Account
um aktiv mitzuarbeiten, solltest du dich bei [github] anmelden. Dann kann ich dich als Kollaborator hinzufügen. [Github] hilft außerdem dabei, das Git-Thema etwas visueller und weniger nerdig zu machen.

### Repository klonen
Öffne eine Shell oder Eingabeaufforderung dort, wo der Ordner mit dem WBT hin soll. Dann führe folgendes aus:

```
git clone git@github.com/tamaracha/statistikwbt
```

## Inhalte
Die Lernkapitel liegen im Ordner „content“. Es sind Dateien mit der Endung „yml“. Andere Dateien werden ignoriert. In diesem Abschnitt werden alle Technologien vorgestellt, die für die Inhalte relevant sind.

### YAML
[YAML] ist ein Datenformat. Es ist also für sich gesehen keine Auszeichnungssprache wie die Wikisyntax, sondern es kann Datenstrukturen ausdrücken, die von Computern gelesen werden sollen. Als ein solches Austauschformat kann es für verschiedenste Zwecke eingesetzt werden, wo Datencontainer benötigt werden; Lernkapitel, aber z.B. auch Konfigurationsdateien. Es ist in erster Linie auf Lesbarkeit und Schreibbarkeit durch Menschen optimiert, eignet sich also besonders für Situationen, in denen Menschen die Daten direkt editieren oder betrachten können sollen. Da es sehr viele Features gibt, gebe ich hier eine kleine Einführung in die für das WBT wesentlichen Bestandteile. Die Fähigkeiten von [YAML] gehen weit über meine Einführung hinaus. In [dieser Spezifikation][yaml-1.2] kann man alles nachlesen, wobei Kapitel 2 besonders interessant sein dürfte.

Ein Lernkapitel ist sozusagen ein Datenobjekt, das einem bestimmten Schema entspricht. Der Link zu den Schematheorien aus der kognitiven Psychologie hilft vielleicht beim Verständnis. Ein Objekt in YAML verfügt über  Eigenschaften, die folgendermaßen notiert werden:

* eine Eigenschaft pro Zeile
* Name und Wert der Eigenschaft werden durch einen Doppelpunkt getrennt.

Die Werte können u.A. einem der folgenden Typen entsprechen:

* Text
* Zahl
* true/false oder on/off
* ein Unterobjekt, das wieder eigene Eigenschaften hat
* eine Liste, die Werte in Form von Text, Zahlen, True/False-Werten oder Unterobjekten enthalten kann

#### Die Scalar-Typen
Scalars sind keine Objekte, sondern einfach Werte. Hier ist ein Beispielobjekt, das die drei Scalar-Typen Text, (String) Zahl (Number) und True/False (Boolean) veranschaulicht. Man sieht hier sehr gut die Grundform von YAML-Strukturen. Die Eigenschaft „title“ ist ein Textwert, „position“ ist eine Zahl und „complete“ ist ein Boolean.

```
title: Deskriptive Statistik
position: 1
complete: true
```

Das Angenehme an YAML ist hier, dass man diese Unterschiede beim Schreiben eigentlich kaum bemerkt, sondern einfach frei heraus schreiben kann und der Computer versteht es trotzdem. Bei anderen Formaten müsste man die Textwerte z.B. in Anführungszeichen setzen oder andere nervige dinge beachten, damit der Computer das Objekt richtig versteht. YAML verlangt dem Computer etwas mehr quasiintelligenz (Rechenleistung) ab, weshalb es im WBT auch nur zum Einlesen der redaktionell von Menschen erstellten Inhalte genutzt wird. Intern als Austauschformat für Computer-zu-Computer-Kommunikation wird das geläufigere JSON-Format genutzt.

#### Compounds
Compounds sind dadurch von Scalars zu unterscheiden, dass sie keine Einfachen Werte mehr sind, sondern Objekte mit Eigenschaften und Werten. Eigenschaften müssen auch nicht unbedingt Scalars als Werte haben, sondern können auch Objekte als Werte haben. Ein Auto oder Haus könnte so z.B. ein Elternobjekt sein und verschiedene Teile haben, die man als Kindobjekte beschreiben kann. So wird die Schachtelung ermöglicht.

Schachtelungen werden in YAML mit Einrückungen ausgedrückt. Eine Einrückung entspricht immer zwei Leerzeichen, bitte keine Tabulatorzeichen o.Ä. verwenden. Es gibt Texteditoren wie z.B. Notepad++, die einem bei Einrückungen helfen. Hier ein fiktives Beispiel mit Unterobjekt:

```
Titel: Der Schwarm
Autor: Frank Schätzing
Formate:
  Hardcover: true
  Taschenbuch: false
  Hörbuch: false
  Hörspiel: true
Erscheinungsjahr: 1999
```

Während die Eigenschaften „Titel“, „Erscheinungsjahr“  und „Autor“ Scalars sind, ist „Formate“ ein Compound bzw. Unterobjekt. Will man ein Unterobjekt einleiten, steht rechts vom Doppelpunkt nichts, wo bei Primitiven der Wert stehen würde. Stattdessen fügt man gleich nach dem Doppelpunkt den Zeilenschalter und eine Einrückung ein. Nun kann man die Eigenschaften des Unterobjektes aufführen. Um wieder auszuleiten, rückt man die entsprechende Zeile wieder aus und ist wieder im Elternobjekt.

#### Listen (sequences)
Listen sind ebenfalls Compounds und bestehen aus einer Sequenz von Werten. Eine Liste sollte nur Werte des selben Typs enthalten. Man kennzeichnet einen Listeneintrag durch ein „- “ vor dem Wert, also Bindestrich und ein Leerzeichen. Hier ein paar Fibonacci-zahlen:

```
- 1
- 2
- 3
- 5
- 8
- 13
```

Eine Liste kann ebenfalls auch ein Unterobjekt sein, also der Wert einer Eigenschaft des Elternobjektes:

```
Thema: Psychologische Statistik
Betreuer: Prof. Ulrich Glowalla
Teammitglieder:
  - Miles
  - Franz
  - Johannes
  - Christian
  - Tamara
Produkt: WBT
```

Die Einrückung funktioniert hier auch wieder wie bei den Objekten.

Eine Liste kann natürlich auch aus Compounds bestehen und ist nicht auf Scalars beschränkt. Wichtig ist hier die Einrückung. Die Eigenschaften eines Listeneintragsobjektes müssen gleich weit eingerückt sein. Die Bindestriche zeigen, wann ein neuer Listenpunkt beginnt und innerhalb eines Listenpunktes müssen die Objekteigenschaften genau untereinander stehen. Hier eine Liste, die Objekte enthält:

```
- title: Deskriptive Statistik
  subtitle: beschreiben und zusammenfassen
  position: 1
- title: Häufigkeitsverteilungen
  subtitle: grafische Darstellung von Daten
  position: 3
- title: Korrelation und Regression
  subtitle: Zusammenhänge
  position: 5
```

#### Die Struktur eines Lernkapitels
Zum Schluss ein verkürztes Lernkapitel, das Listen enthält, die Wert einer Kapiteleigenschaft sind und selbst Objekte enthalten. Es zeigt die Eigenschaften, aus denen ein Kapitel besteht. Die Subkapitel „topics“ sind eine Liste, ein Subkapitel wiederum ist ein Objekt. Testaufgaben (tests) ist ebenfalls eine Liste, eine Testaufgabe ist ein Objekt und enthält Antwortoptionen, die wiederum eine Liste sind.  Wenn man Zeilenumbrüche in einem Textwert haben möchte, muss man dort, wo man normalerweise den Text hinschreiben würde, einen Slash (|) setzen, einen Zeilenschalter und eine Einrückung einfügen. Dann kann man Text mit Zeilenumbrüchen schreiben und braucht nur wieder einmal auszurücken um wieder im normalen Objektmodus zu sein.

```
title: Skalenniveaus
subtitle: Was kann man mit welchen Daten machen?
description: |
  ganz viel Text mit Umbrüchen…
  noch mehr Text…
  und noch mehr Text…
  gleich ist der Text vorbei, auf der nächsten zeile geht das Objekt weiter.
topics:
  - title: Nominalskala
    body: ich bin richtig eingerückt
  - title: Ordinalskala
    body: |
      Ich habe wieder Umbrüche,
      
      und sogar einen Absatz, wo auch auf der scheinbar leeren Zeile Leerzeichen sein müssen, damit der zweite Zeilenschalter auf meiner Ebene ist
      Und ich bin richtig eingerückt, weil ich zur body-Eigenschaft gehöre.
      Gleich bin ich zuende und brauche jeweils eine Ausrückung für diesen Text, für das Subkapitel und die Liste der Subkapitel.
tests:
  - text: Aufgabenstamm
    type: multiple
    options:
      - text: antwort 1
        correct: false
        feedback: Feedback auf diese Antwort
      - text: antwort 2
        correct: true
        feedback: Feedback auf diese Antwort
```

### Markdown
Markdown ist eine Auszeichnungssprache, erfüllt also einen ähnlichen Zweck wie die Wikisyntax. Die Texte der Subkapitel (body-Eigenschaft) und die Beschreibung eines Kapitels (description) werden mit Markdown formatiert. Falls gewünscht, kann dies auch für die Testaufgaben übernommen werden. Generell bietet sich die Slash-Variante mit den Zeilenumbrüchen gut an, weil man so auf der richtigen Einrückungsebene einfach in Markdown losschreiben kann. *Nochmal: unbedingt einen Texteditor besorgen, der sich um die Einrückungen kümmert.*

Markdown ist in vielen Anwendungsbereichen verbreitet, weil es auch als reiner Text noch passabel aussieht und schnell zu tippen ist. Aus Markdown können Webseiten (HTML) generiert werden, aber auch andere Dateiformate. So haben das WBT und die Downloadversionen die selbe Datenbasis. Mit der enormen Anwendungsvielfalt geht auch eine gewisse Dialektevielfalt einher. Ich verwende den Dialekt von [Pandoc], einem Format-Converter, der auch die Downloaddateien erzeugt. Wer sich über die verschiedenen Formatierungsmöglichkeiten in Markdown schlau machen möchte, kann sich [hier][Pandoc's Markdown] den Markdowndialekt von Pandoc anschauen. Weil er auch mit ausgewachsenen Dokumenten umgehen können soll, gibt es dort einige Features, die im WBT wahrscheinlich nicht benötigt werden.

### Mathematiksatz
Formeln, mathematische Ausdrücke und Variablen werden in der Syntax von [LaTeX] in den Text geschrieben. Um Ausdrücke im Fließtext einzuschieben, werden sie mit Dollarzeichen umschlossen: $2+2 = 4$. Doppelte Dollarzeichen erzeugen eine Formel auf einer eigenen Zeile: $$2+2 = 4$$. Diese Konvention sollte für das WBT unbedingt eingehalten werden, auch wenn es für „richtige“ Dokumente in [LaTeX] anders empfohlen wird. Es folgen ein paar interessante Befehle für die Formelkonstruktion. Viele sind einfach Symbole, es gibt aber auch Befehle, die z.B. Zahlen als Argumente in geschweiften Klammern aufnehmen.

#### Grundrechenarten
Es funktionieren die Zeichen +, -, * und /. Oft werden Multiplikationen aber nicht explizit gekennzeichnet (`$y = a + bx$`), oder es wird ein Malpunkt (`\cdot`) bevorzugt.

#### Subscript und Superscript
Ein Subscript wird mit dem _ (Unterstrich) ausgedrückt: `$x_i + y_i$`. Soll das Subscript mehr als ein Zeichen umfassen, muss man diese Zeichen mit geschweiften Klammern umschließen: `$x_{n-1}$`.

Ein Superscript wird mit dem ^ (Dach-Zeichen) erzeugt: `$x^2$`. Hier gilt ebenfalls: ohne Klammern nur ein Zeichen, mit Klammern die eingeklammerten Zeichen. Natürlich kann man auch eine runde Klammer quadrieren: `$(x_i - x_j)^2$`.

#### Quadratwurzel, Querstrich und Hut
Die Quadratwurzel ist der Befehl `\sqrt`, der eine Zahl akzeptiert: `$\sqrt{9} = 3$`.

Der Querstrich, wie er z.B. für das arithmetische Mittel verwendet wird, ist der Befehl `\overline` und akzeptiert einen Variablennamen: `$\overline{x}$`.

Der Hut für Schätzwerte wird mit dem Befehl `\hat` erzeugt, der einen Variablennamen akzeptiert: `$\hat{y}$`.

#### Bruch und Summe
Ein Bruch wird durch `\frac` erzeugt, das zwei Argumente akzeptiert (Zähler und Nenner), also zwei direkt aneinandergehängte geschweifte Klammerpaare: `$\frac{3}{4}$`.

Eine Summe beginnt mit dem Befehl `\sum` (ohne Argument), dann kommt die Laufvariable bzw. der Initialwert als Subscript, dann der Maximalwert als Superscript, und schließlich das, worüber summiert werden soll. So lautet z.B. die Formel für den Mittelwert, wobei die Summe der Zähler eines Bruchs ist:
`$$\overline{x} = \frac{\sum _{i=1} ^n x_i}{n}$$`

#### Griechische Buchstaben
Es gibt Befehle zum Erzeugen von griechischen Buchstaben, die jeweils so heißen wie der zu erzeugende Buchstabe: $\alpha \beta \gamma \sigma$.

## Frontend



## Backend
#### MongoDB
[MongoDB] ist ein Datenbanksystem, wie z.B. SQL. In einer MongoDB-Datenbank liegen die Lernkapitel, die Benutzerdaten und noch ein paar andere Details.

#### Node.JS
[node.js] ist sozusagen „JavaScript für den Server“. Man kann damit sehr fein ausgeklügelte Webanwendungen erschaffen, aber auch noch einiges mehr. Wenn man JavaScript gelernt hat, kommt man hier schon ziemlich weit, weil man den Server nicht konfiguriert, sondern eben in JavaScript programmiert. Sobald man nicht nur statische Dateien an den Browser ausliefern will, sondern auch dynamische Inhalte, ist es eine gute Wahl. Die Community ist aber auch ziemlich kreativ darin, es auch für andere Zwecke als Webanwendungen zu verwenden.

Mit Hilfe von [Node.JS] werden viele Teile des WBT entwickelt. Es etabliert die Kommunikation zwischen dem Benutzer/Browser und der Datenbank, regelt die Benutzeranmeldung usw. Für diese Aufgaben wird das Webframework [express.js] verwendet.

Es kompiliert aber auch die Frontend-Quelldateien zu komprimierten internetfreundlichen Dateien. So kann man ordentlich und strukturiert für das Frontend entwickeln und daraus mit einem automatisierten Vorgang eine Browserfreundliche Version bauen. Dieser Bauvorgang ist mit [gulp.js] umgesetzt.

[git]: http://git-scm.com
[Pro git]: http://git-scm.com/book/de/v1 "Pro Git Book auf Deutsch"
[github]: https://github.com
[Node.JS]: http://nodejs.org
[Express.JS]: http://expressjs.com
[MongoDB]: http://www.mongodb.org
[gulp.js]: http://gulpjs.com
[JWT]: http://jwt.io
[YAML]: http://www.yaml.org
[YAML-1.2]: http://yaml.org/spec/1.2/spec.html
[JS-YAML]: https://github.com/nodeca/js-yaml
[MathJax]: http://www.mathjax.org
[Pandoc]: http://johnmacfarlane.net/pandoc/
[Pandoc's Markdown]: http://johnmacfarlane.net/pandoc/demo/example9/pandocs-markdown.html
[LaTeX]: http://www.latex-project.org
[Angular.JS]: https://angularjs.org
[Jade]: http://jade-lang.com
[Bootstrap]: http://getbootstrap.com
[d3.js]: http://d3js.org
[vega]: http://trifacta.github.io/vega/
[opencpu]: https://www.opencpu.org