# Projektdokumentation - BR Rezepte

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Ausgangslage

Wie können brasilianische Essensliebhaber das nötige Wissen, ein passendes Rezept und die richtigen Zutaten finden, um brasilianische Gerichte zu Hause selbst zuzubereiten?

**Problem:** Viele brasilianische Rezepte sind online zwar vorhanden, aber oft unübersichtlich, schlecht strukturiert oder nicht auf deutschsprachige Nutzende ausgerichtet. Dadurch ist es schwierig, schnell ein passendes Rezept zu finden, die Zutaten zu verstehen und das Gericht zu Hause zuverlässig nachzukochen. Zusätzlich fehlt häufig eine einfache Möglichkeit, Rezepte zu speichern oder neue Rezeptideen zu sammeln.

**Ziele:**
  - Eine einfache und verständliche Rezeptplattform für brasilianische Gerichte bereitstellen.
  - Rezepte übersichtlich darstellen und durchsuchen können.
  - Nutzenden ermöglichen, Rezepte als Favoriten zu speichern.
  - Rezeptvorschläge erfassen, damit die Plattform erweitert werden kann.
  - Die wichtigsten Workflows klar und ohne unnötige Komplexität umsetzen.

**Primäre Zielgruppe:** Personen, die sich für brasilianische Küche interessieren und Rezepte zu Hause nachkochen möchten.

**Weitere Stakeholder:** Hobbyköche, spontane Kocherinnen und Kocher sowie Personen aus dem persönlichen Umfeld, die brasilianische Gerichte ausprobieren möchten.

## 2. Lösungsidee

BR Rezepte ist eine Rezeptplattform für brasilianische Gerichte. Sie soll Nutzenden ermöglichen, Rezepte zu entdecken, zu filtern, zu speichern und eigene Rezeptideen vorzuschlagen.

**Kernfunktionalität:**  
  - Startseite mit Überblick über die Plattform.
  - Rezeptübersicht mit Suche, Filter und Sortierung.
  - Rezeptdetailseite mit Zutaten, Zubereitung, Angaben und Favoritenfunktion.
  - Login- und Registrierungsbereich für Nutzende.
  - Formular für Rezeptvorschläge mit serverseitiger Validierung und Speicherung in MongoDB.
  - Favoritenfunktion, damit eingeloggte Nutzende Rezepte markieren und wiederfinden können.

**Annahmen:**
  - Nutzende möchten Rezepte schnell finden statt lange zu suchen.
  - Eine klare Struktur und einfache Filter reichen für den Mindestumfang aus.
  - Eingeloggte Nutzende profitieren besonders von Favoriten und Rezeptvorschlägen.

**Abgrenzung:**
  - Kein vollumfängliches Koch- oder Ernährungsportal.
  - Keine komplexe Rollenverwaltung wie ein Admin- oder Redaktionssystem.
  - Kein Einkaufslisten- oder Warenkorb-System.
  - Keine externe API-Integration für Produktdaten.

## 3. Vorgehen & Artefakte

Die Durchführung erfolgte phasenbasiert entlang der vorgegebenen Methodik. Die wichtigsten Ergebnisse je Phase sind dokumentiert.

### 3.1 Understand & Define

**Zielgruppenverständnis:**  
  Die Zielgruppe besteht aus Personen, die brasilianische Küche ausprobieren möchten, aber oft nur wenig Vorwissen haben. Deshalb muss die Website einfach verständlich sein und Inhalte klar erklären. Wichtige Nutzungssituationen sind, dass Rezepte schnell gefunden werden können, Zutaten verständlich dargestellt werden und Rezepte gespeichert werden können. Zudem soll die Möglichkeit bestehen, neue Rezeptideen vorzuschlagen.

**Wesentliche Erkenntnisse:**  
  - Die Navigation muss einfach und klar sein.
  - Rezepte sollen übersichtlich und gut lesbar dargestellt werden.
  - Nutzer brauchen sichtbares Feedback bei Aktionen wie Favoriten speichern oder Formular absenden.
  - Eine klare Datenstruktur ist wichtig, damit Rezepte und Vorschläge sauber verwaltet werden können.
  - Der Hauptworkflow soll ohne unnötige Zwischenschritte funktionieren.

### 3.2 Sketch

 **Variantenüberblick:**  
  Es wurden unterschiedliche Layoutideen für die Plattform geprüft, insbesondere für die Startseite, die Rezeptübersicht und die Rezeptdetailseite. Im Fokus standen eine einfache, lesbare Darstellung und eine klare Trennung zwischen Übersicht, Detailansicht und Formularen.

 **Skizze:** 
Die Skizze bzw. das Mockup wurde mit Figma erstellt. Unter dem Link gelangt man zum Figma:https://www.figma.com/proto/VxaFwKLmULf5bE1EHsp0CW/Rezepte-Brazil?node-id=8762-5&p=f&t=V0Dt1GQB6898xfBu-0&scaling=contain&content-scaling=fixed&page-id=1%3A840.

### 3.3 Decide

- **Gewählte Variante & Begründung:**  
  Gewählt wurde eine klare und reduzierte Lösung mit Startseite, Rezeptübersicht, Detailseite, Favoriten und Vorschlagsformular. Diese Variante ist übersichtlich, gut erweiterbar und passt zum Ziel, brasilianische Rezepte einfach zugänglich zu machen. Entscheidende Kriterien waren Verständlichkeit, Umsetzbarkeit im Rahmen des Projekts und ein klarer End-to-End-Workflow.
- **End-to-End-Ablauf:**  
  Ein Nutzer gelangt von der Startseite zur Rezeptübersicht, filtert oder sucht ein Rezept, öffnet die Detailansicht, liest Zutaten und Zubereitung, speichert bei Bedarf einen Favoriten und kann später über das Vorschlagsformular ein eigenes Rezept einreichen. Damit wird der komplette Ablauf vom Entdecken bis zum Erfassen neuer Inhalte abgedeckt.
- **Mockup:**  
  Das Mockup wurde als Grundlage für die visuelle Ausarbeitung genutzt und dient als Orientierung für Struktur, Inhalte und Bedienlogik. Die finale Oberfläche wurde im Verlauf der Umsetzung leicht angepasst, wenn dies für die technische Umsetzung oder bessere Benutzerführung sinnvoll war.

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)

Beschreibt die Gestaltung und Interaktion.

> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.

**Informationsarchitektur:**  
  Die Website ist in klar getrennte Bereiche gegliedert: Startseite, Rezeptübersicht, Rezeptdetailseite, Rezeptvorschlag, Login, Registrierung und Favoriten. Die Navigation bleibt konstant sichtbar, damit Nutzende sich jederzeit orientieren können.

**User Interface Design:**  
  Die Oberfläche verwendet Karten, Panels und klare Abschnittstrennung. Die Rezeptübersicht zeigt mehrere Rezepte in einer Grid-Struktur, die Detailseite arbeitet mit einer grossen Rezeptansicht und klar getrennten Inhaltsblöcken. Formulare sind bewusst einfach aufgebaut und geben direkt Feedback bei Fehlern oder Erfolg.

**Designentscheidungen:**  
  - Fokus auf gute Lesbarkeit statt auf überladene Gestaltung.
  - Klare Formulare mit sichtbaren Fehlermeldungen.
  - Favoritenfunktion als schneller Interaktionspunkt direkt auf der Rezeptseite.
  - Rezeptvorschläge als eigener Workflow, damit die Plattform wachsen kann.
  - Reduzierte, strukturierte Darstellung passend zum Inhalt.

#### 3.4.2. Umsetzung (Technik)

Fasst die technische Realisierung zusammen.

- **Technologie-Stack:**  
  SvelteKit, JavaScript, HTML, CSS und MongoDB.
- **Tooling:**  
  Visual Studio Code, Git, GitHub, Netlify für Deployment sowie KI-Unterstützung für Refactoring, Fehlersuche und Text- bzw. Codevorschläge. Den KI-Einsatz beschreibe ich zusätzlich im Kapitel KI-Deklaration.
- **Struktur & Komponenten:**  
  Die App ist in Routen und wiederverwendbare Komponenten aufgeteilt. Wichtige Seiten sind die Rezeptübersicht, Detailseite, Favoritenansicht, Login/Registrierung und das Rezeptvorschlagsformular. Wiederverwendbare Komponenten sind unter anderem RecipeCard, FavoriteButton und LoginPrompt.
- **Daten & Schnittstellen:**  
  Rezepte und Rezeptvorschläge werden in MongoDB gespeichert und serverseitig über SvelteKit-Ladefunktionen und Actions verarbeitet. Favoriten werden über eine API oder serverseitige Logik mit dem eingeloggten Nutzer verknüpft.
- **Deployment:**  
  Die App wurde auf Netlify deployed und ist online zugänglich.
- **Besondere Entscheidungen:**  
  - Serverseitige Validierung für das Vorschlagsformular.
  - Favoriten- und Login-Funktionen an den Nutzerstatus gekoppelt.
  - Rezeptdaten werden in der Übersicht und in der Detailansicht wiederverwendet.
  - Fehler wurden früh über Build-Logs und Test-Deployments identifiziert und behoben.

### 3.5 Validate

**URL der getesteten Version:**  
  Die getestete Version ist die auf Netlify deployte Live-Version. Die Version findet man unter folgender URL: https://6a0d6d371e8c370008c75c29--brasilianischerezepte.netlify.app/

**Ziele der Prüfung:**  
Ich habe mir folgende Fragestellungen gestellt, um herauszufinden, ob ich mit meinem Projekt zufrieden bin:

  - Ist meine Website logisch und simpel aufgebaut?
  - Kann man Rezepte favorisieren, aber nur mit einem Login?
  - Kann man Rezeptvorschläge erstellen, aber nur mit einem Login?
  - Kann man die Mengenangaben innerhalb eines Rezeptes anpassen, sodass die Rezepte für eine bestimmte Anzahl Personen zubereitet werden können?
  - Ist die Bedienung verständlich und nachvollziehbar?

**Vorgehen:**  
Zuerst habe ich die Deployment-Prüfung selbst durchgeführt, um zu überprüfen, ob alle Funktionen korrekt laufen. Anschliessend habe ich die Anwendung mit vier Testpersonen aus meinem Umfeld evaluiert. Jede Person besuchte die Website eigenständig auf dem persönlichem Laptop, während ich die Nutzung beobachtete. Die Testpersonen wurden gebeten, sich so zu verhalten, als wäre ich nicht anwesend.

  Ich habe den Testpersonen ein Testszenario sowie die dazugehörigen Testaufgaben gegeben. Diese wurden in einem Word-Dokument erfasst und den Testpersonen anschliessend übergeben. Während oder nach dem Test wurden unter anderem folgende Fragen gestellt:

  - Was war dein erster Eindruck, als du die Website gesehen hast?
  - Fandest du die Website simpel und logisch gestaltet?
  -	Hast du leicht herausgefunden, wie man ein Rezept favorisiert? Hast du Verbesserungsvorschläge?
  -	Hast du leicht herausgefunden, wie man einen Rezeptvorschlag erstellt? Hast du Verbesserungsvorschläge?

  Zusätzlich wurde die Anwendung am Schluss aus Sicht der Nutzer geprüft, um Fehler und Unklarheiten zu erkennen.

**Stichprobe:**  
  Die erste Testperson war ich selbst im Rahmen der Entwicklung. Danach habe ich eine Gruppe von vier Personen aus der Klasse befragt, wobei jedes Mitglied der Gruppe meine Website alleine besucht hat. Somit konnte sichergestellt werden, dass die Testpersonen auf sich selbst angewiesen waren, wie es auch in einem realen Anwendungsfall wäre.

**Aufgaben/Szenarien:**
  - *Testszenario:* Du bist ein leidenschaftlicher Hobbykoch und suchst nach Rezepten. Zufälligerweise bist du auf meine Website gestossen und hast Lust bekommen, brasilianische Rezepte selbst zu machen.

  - *Testaufgabe 1:* Dieses Wochenende erhältst du Besuch (4 Personen) und suchst noch nach einem Dessertrezept. Damit du es am Wochenende nachmachen kannst, musst du es noch speichern.
  
  - *Testaufgabe 2:* Am Wochenende nach dem Essen hat dir ein Freund gesagt, dass du einmal das Gericht «Bolinhas de Cacau» machen solltest. Du findest dieses Dessert jedoch nicht auf der Website, würdest es aber gerne dort sehen.

  Zudem soll zusätzlich auf Fehler- und Erfolgsmeldungen geachtet werden.

**Kennzahlen & Beobachtungen:**  
  Alle Testpersonen hatten einen guten ersten Eindruck der Website. Ihnen gefiel insbesondere die Farbwahl mit den brasilianischen Farben. Ebenfalls positiv bewertet wurden die klare Struktur und der logische Aufbau der Seite. Die Slides mit den meistangeklickten Rezepten kamen ebenfalls gut an. Zudem fanden die Testpersonen es sinnvoll, dass man zuerst ein Login erstellen muss, um die speziellen Funktionen nutzen zu können.

Die Testpersonen fanden sich bei den Aufgaben schnell zurecht. Dabei konnte ich jedoch auch kleinere Punkte erkennen, die verbessert werden könnten. Beispielsweise sollte beim Speichern eines Rezeptes auch die aktuell ausgewählte Anzahl Personen mitgespeichert werden.

Es gab ausserdem einige Verbesserungsvorschläge und Anmerkungen. Die Rezepte ganz unten auf der Hauptseite sollen entfernt werden. Zusätzlich wurde vorgeschlagen, Informationen zur Geschichte sowie zur Herkunft oder Region eines Gerichtes anzuzeigen. Dadurch würde die Website mehr Informationen bieten. Ebenfalls wurde die Idee eingebracht, ein eigenes Website-Logo hinzuzufügen.

Auf der Rezepteseite soll die Anzeige der Personenanzahl auf den Karten entfernt werden, da diese eher für Verwirrung sorgt. Zudem soll es möglich sein, die Personenanzahl innerhalb eines Rezeptes anzupassen, beispielsweise von zwei auf vier Personen, und das Rezept anschliessend mit dieser angepassten Menge zu speichern. Aktuell wird das Rezept immer mit der Standardanzahl gespeichert.

Auf der Favoritenseite muss die Darstellung der Favoriten verbessert werden. Zurzeit beeinflusst die Anzahl der Seiten die Darstellung der Ansicht, obwohl dies nicht der Fall sein sollte.

Beim Ausfüllen eines Rezeptvorschlags sollte der Name nicht mehr abgefragt werden. Dieser sollte entweder weggelassen oder automatisch mit dem eingeloggten Benutzer übernommen werden. Zudem ist es aktuell etwas unübersichtlich, wenn im Formular Fehler auftreten oder Pflichtfelder nicht ausgefüllt wurden. Dies sollte mit einer klaren Warnmeldung oder durch ein automatisches Zurückspringen zum Anfang der Seite verbessert werden, damit die Nutzer sofort erkennen, dass ein Problem vorliegt.

**Zusammenfassung der Resultate:**  
Die Validierung zeigte, dass die wichtigsten Kernfunktionen funktionieren und die Anwendung für die Nutzenden verständlich aufgebaut ist. Besonders positiv bewertet wurden die klare Navigation, die Rezeptdetailseite sowie das Vorschlagsformular.

Optimierungspotenzial besteht jedoch noch beim Feinschliff, beispielsweise bei den Fehlermeldungen, dem Verhalten der Anwendung im Fehlerfall sowie bei der korrekten Darstellung einzelner Elemente.

**Abgeleitete Verbesserungen:**  
  Ich werde für die Verbesserungen wie folgt vorgehen:
* Ein Logo bzw. ein Favicon für die Hauptseite und den Browsertab wird erstellt und implementiert.
* Die Kästchen unten auf der Website werden nicht klickbar gemacht, da ich nicht denke, dass dies deren Sinn ist.
* Die weiteren Rezepte ganz unten auf der Hauptseite werden entfernt, da der Nutzen nicht so gross ist und die Seite dadurch etwas weniger redundant wird.
* Die Geschichte bzw. die Region, aus der das Rezept stammt, wäre ein interessantes Feature. Dieses müsste jedoch ausserhalb des im Projektrahmen definierten Zeitaufwands umgesetzt werden.
* Auf den RecipeCards wird die Anzahl Personen entfernt, da dies für Verwirrung sorgt, weil immer eine fixe Zahl (die Standardzahl) angezeigt wird.
* Die Darstellung der Rezepte auf der Favoritenseite wird so angepasst, dass sie übersichtlicher ist.
* Die Personenanzahl wird nach der Speicherung in der Favoritenliste sichtbar sein. Im Rezept selbst bleibt sie jedoch unverändert.
* Beim Ausfüllen eines Vorschlags wird nicht mehr nach dem Namen gefragt. Dieser wird neu automatisch aus dem Benutzerkonto übernommen.
* Neu wird zudem eine bessere Fehlermeldung angezeigt, wenn im Vorschlagsformular etwas falsch ausgefüllt wurde.
* Ausserdem soll die Bestätigung künftig als Pop-up angezeigt werden und nicht mehr wie bisher ganz oben im Formular, wo sie nur sichtbar ist, wenn man nach oben scrollt.
 

## 4. Erweiterungen [Optional]

Dokumentiert Erweiterungen über den Mindestumfang hinaus.

> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### 4.1 Favoritenfunktion
- **Beschreibung & Nutzen:**  
  Eingeloggte Nutzende können Rezepte als Favoriten speichern und später schneller wiederfinden. Das erhöht den Nutzen der Plattform, weil persönliche Rezeptlisten möglich werden.
- **Wo umgesetzt:**  
  - **Frontend:** FavoriteButton-Komponente und Anzeige in Rezeptkarten bzw. Detailseite.
  - **Backend:** API bzw. serverseitige Logik zum Speichern und Entfernen von Favoriten.
  - **Datenbank:** Speicherung der Favoritenbeziehungen im Benutzerkontext.
- **Referenz:**  
  Favoriten sind in der Rezeptübersicht, Detailansicht und im Favoritenbereich sichtbar.
- **Aus Evaluation abgeleitet?:**  
  Ja, die Funktion entspricht dem Bedarf, Rezepte für später zu merken.

### 4.2 Rezeptvorschläge
- **Beschreibung & Nutzen:**  
  Nutzende können eigene Rezeptideen einreichen. Das erweitert die Plattform und schafft einen klaren Daten-Erfassungsworkflow.
- **Wo umgesetzt:**  
  - **Frontend:** Vorschlagsformular mit Validierung und Feedback.
  - **Backend:** SvelteKit Action für Validierung und Speicherung.
  - **Datenbank:** Collection für Rezeptvorschläge.
- **Referenz:**  
  Die Funktion ist auf der Seite /vorschlag umgesetzt.
- **Aus Evaluation abgeleitet?:**  
  Ja, weil ein eigener Workflow zur Erweiterung der Plattform sehr sinnvoll ist.

### 4.3 Rezeptfilter und Suche
- **Beschreibung & Nutzen:**  
  Die Rezeptübersicht kann nach Suchbegriff, Menüart, Aufwand und Zeitaufwand gefiltert werden. Dadurch finden Nutzende schneller passende Gerichte.
- **Wo umgesetzt:**  
  - **Frontend:** Filterformular und Rezeptkartenansicht.
  - **Backend:** Filterlogik in der Rezeptübersicht.
  - **Datenbank:** Abfrage der passenden Rezeptdaten.
- **Referenz:**  
  Sichtbar auf der Seite /rezepte.
- **Aus Evaluation abgeleitet?:**  
  Teilweise, weil eine schnelle Orientierung ein zentrales Nutzerbedürfnis ist.

## 5. Projektorganisation [Optional]

Beispiele:

- **Repository & Struktur:**  
  Das Projekt ist in GitHub versioniert und strukturiert aufgebaut. Die App besteht aus SvelteKit-Routen, Komponenten, Serverdateien und einer zentralen Datenbankanbindung.
- **Issue-Management:**  
  Die Entwicklung wurde schrittweise umgesetzt. Fehler und offene Punkte wurden über Build-Logs, lokale Tests und direkte Korrekturen bearbeitet.
- **Commit-Praxis:**  
  Es wurden regelmässig Commits erstellt, um die Entwicklung nachvollziehbar zu halten und Änderungen sauber nachverfolgen zu können.

## 6. KI-Deklaration

Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools

- **Eingesetzte Tools:**  
  Perplexity, ein KI-Assistent, wurde zur Unterstützung bei Fehlersuche, Refactoring, Textentwürfen und Strukturierung der Dokumentation. Das Grundgerüst wurde mittels Masterprompt mit GitHub Copilot erstellt.
- **Zweck & Umfang:**  
  KI wurde verwendet, um Build-Fehler zu analysieren, SvelteKit- und MongoDB-Logik zu bereinigen, Codebeispiele zu korrigieren und die Projektdokumentation sprachlich zu verbessern. Die eigentliche Umsetzung, Anpassung und finale Entscheidung lagen bei mir.
- **Eigene Leistung (Abgrenzung):**  
  Die Projektidee, die inhaltliche Ausrichtung, die Auswahl der Funktionen, die technische Umsetzung, die Debugging-Entscheide und die finale Integration wurden eigenständig erarbeitet und überarbeitet.

### 6.2 Prompt-Vorgehen

Ich habe KI vor allem für konkrete Einzelfragen und Codekorrekturen verwendet. Dabei wurden Fehlerlogs, einzelne Dateien oder Textbausteine als Grundlage gegeben, damit die Antworten gezielt auf das Projekt bezogen sind. Wichtige Inhalte wurden anschliessend selbst geprüft, angepasst und in den Code bzw. die Doku übernommen. Beim Prompting wurde darauf geachtet, keine fremden Inhalte ungeprüft zu übernehmen und die Resultate auf Korrektheit, Verständlichkeit und Passung zum Projekt zu prüfen.

### 6.3 Reflexion

KI war hilfreich, um schneller Fehler zu finden, bessere Formulierungen zu erstellen und repetitive Aufgaben zu beschleunigen. Gleichzeitig bleibt die Verantwortung für fachliche Richtigkeit, Urheberrecht und Projektqualität bei mir. Besonders wichtig war deshalb die Kontrolle aller Vorschläge und die Anpassung an die konkrete Projektstruktur.

## 7. Anhang [Optional]

Beispiele:
- **Quellen:**  
  Moodle-Vorlagen, Vorlesungsunterlagen, eigene Screenshots, Projektcode und deployte Anwendung.
- **Testskript & Materialien:**  
  Interne Testschritte für Login, Rezeptübersicht, Favoriten und Rezeptvorschlag.
- **Rohdaten/Auswertung:**  
  Notizen aus der Validierung, Build-Logs und Fehlerkorrekturen.