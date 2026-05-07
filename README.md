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

Wie können brasilianische Essens-Liebhaber das nötige Wissen, ein passendes Rezept und die richtigen Produkte finden, um brasilianisches Essen zu Hause selbst zu machen?

- **Problem:** Viele brasilianische Rezepte sind zwar online auffindbar, aber oft unübersichtlich, schlecht strukturiert oder nicht auf deutschsprachige Nutzerinnen und Nutzer zugeschnitten. Dadurch ist es schwierig, schnell ein passendes Rezept zu finden, die Zutaten zu verstehen und das Gericht zu Hause wirklich nachzukochen. Zusätzlich fehlt häufig eine einfache Möglichkeit, Rezepte zu speichern oder neue Rezeptideen zu sammeln.
- **Ziele:**
  - Eine einfache und verständliche Rezeptplattform für brasilianische Gerichte.
  - Rezepte übersichtlich darstellen und durchsuchen.
  - Nutzerinnen und Nutzern ermöglichen, Rezepte als Favoriten zu speichern.
  - Rezeptvorschläge erfassen, damit die Plattform erweitert werden kann.
  - Die wichtigsten Workflows klar und ohne unnötige Komplexität umsetzen.
- **Primäre Zielgruppe:** Personen, die sich für brasilianisches Essen interessieren und Rezepte zu Hause nachkochen möchten.
- **Weitere Stakeholder:** Hobbyköche, spontante Kocherinnen und Kocher sowie Personen aus dem persönlichen Umfeld, die brasilianische Gerichte ausprobieren möchten.

## 2. Lösungsidee

Die Website BR Rezepte ist eine Rezeptplattform für brasilianische Gerichte. Sie soll Nutzenden ermöglichen, Rezepte zu entdecken, zu filtern, zu speichern und eigene Rezeptideen vorzuschlagen.

- **Kernfunktionalität:**  
  - Startseite mit Überblick über die Plattform.
  - Rezeptübersicht mit Suche, Filter und Sortierung.
  - Detailansicht eines Rezepts mit Zutaten, Zubereitung, Angaben und Favoritenfunktion.
  - Login- und Registrierungsbereich für Nutzende.
  - Formular für Rezeptvorschläge mit serverseitiger Validierung und Speicherung in MongoDB.
  - Favoritenfunktion, damit eingeloggte Nutzer Rezepte markieren und wiederfinden können.
- **Annahmen [Optional]:**
  - Nutzende möchten Rezepte schnell finden statt lange zu suchen.
  - Eine klare Struktur und einfache Filter reichen für den Mindestumfang aus.
  - Eingeloggte Nutzerinnen und Nutzer profitieren von Favoriten und Rezeptvorschlägen.
- **Abgrenzung [Optional]:**
  - Kein vollumfängliches Koch- oder Ernährungsportal.
  - Keine komplexe Rollenverwaltung wie Admin- und Redaktionssystem.
  - Kein Einkaufslisten- oder Warenkorb-System.
  - Keine externe API-Integration für Produktdaten.

## 3. Vorgehen & Artefakte

Die Durchführung erfolgte phasenbasiert entlang der vorgegebenen Methodik. Die wichtigsten Ergebnisse je Phase sind dokumentiert.

### 3.1 Understand & Define

- **Zielgruppenverständnis:**  
  Die Zielgruppe besteht aus Personen, die brasilianische Küche ausprobieren möchten, aber oft nur wenig Vorwissen haben. Deshalb muss die Website einfach verständlich sein und Inhalte klar erklären. Wichtige Nutzungssituationen sind: ein Rezept schnell finden, Zutaten verstehen, ein Rezept merken und eine neue Idee vorschlagen.
- **Wesentliche Erkenntnisse:**  
  - Die Navigation muss einfach und klar sein.
  - Rezepte sollen übersichtlich und gut lesbar dargestellt werden.
  - Nutzer brauchen sichtbares Feedback bei Aktionen wie Favoriten speichern oder Formular absenden.
  - Eine klare Datenstruktur ist wichtig, damit Rezepte und Vorschläge sauber verwaltet werden können.
  - Der Hauptworkflow soll ohne unnötige Zwischenschritte funktionieren.

### 3.2 Sketch

- **Variantenüberblick:**  
  Es wurden unterschiedliche Layoutideen für die Plattform geprüft, insbesondere für die Startseite, die Rezeptübersicht und die Rezeptdetailseite. Im Fokus standen eine einfache, lesbare Darstellung und eine klare Trennung zwischen Übersicht, Detailansicht und Formularen.
- **Skizzen:**  
  - Variante mit sehr einfacher Startseite und direktem Einstieg in die Rezeptübersicht.
  - Variante mit stärkerer visueller Startseite und hervorgehobenem Rezeptbereich.
  - Variante mit Fokus auf Filter und Rezeptkarten für eine schnelle Orientierung.
  - Variante mit einem Vorschlagsformular als eigenständigem Workflow.

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

- **Informationsarchitektur:**  
  Die Website ist in klar getrennte Bereiche gegliedert: Startseite, Rezeptübersicht, Rezeptdetailseite, Rezeptvorschlag, Login, Registrierung und Favoriten. Die Navigation bleibt konstant sichtbar, damit Nutzende sich jederzeit orientieren können.
- **User Interface Design:**  
  Die Oberfläche verwendet Karten, Panels und klare Abschnittstrennung. Die Rezeptübersicht zeigt mehrere Rezepte in einer Grid-Struktur, die Detailseite arbeitet mit einer grossen Rezeptansicht und klar getrennten Inhaltsblöcken. Formulare sind bewusst einfach aufgebaut und geben direkt Feedback bei Fehlern oder Erfolg.
- **Designentscheidungen:**  
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

- **URL der getesteten Version:**  
  Die getestete Version ist die auf Netlify deployte Live-Version.
- **Ziele der Prüfung:**  
  - Funktioniert der Hauptworkflow von der Rezeptübersicht bis zur Detailansicht?
  - Können Nutzer Rezepte als Favoriten speichern?
  - Funktioniert das Vorschlagsformular mit Validierung und Speicherung?
  - Ist die Bedienung verständlich und nachvollziehbar?
- **Vorgehen:**  
  Die Validierung wurde über interne Tests und wiederholte Deployment-Prüfungen durchgeführt. Zusätzlich wurde die Anwendung aus Nutzersicht geprüft, um Fehler und Unklarheiten zu erkennen.
- **Stichprobe:**  
  Testpersonen waren zuerst ich selbst im Rahmen der Entwicklung sowie einzelne Personen aus dem Umfeld, die die Oberfläche und die Verständlichkeit beurteilen konnten.
- **Aufgaben/Szenarien:**  
  - Ein Rezept in der Übersicht finden.
  - Eine Rezeptdetailseite öffnen.
  - Einen Favoriten speichern.
  - Ein Rezept über das Vorschlagsformular erfassen.
  - Prüfen, ob Fehlermeldungen und Erfolgsmeldungen verständlich sind.
- **Kennzahlen & Beobachtungen:**  
  - Hauptworkflow funktionierte nach mehreren Korrekturen stabil.
  - Build-Fehler und Datenbankprobleme konnten durch Logs und Anpassungen behoben werden.
  - Das Vorschlagsformular bietet direktes Feedback bei fehlenden Eingaben.
  - Die Favoritenfunktion ist direkt in die Rezeptansicht integriert und leicht verständlich.
- **Zusammenfassung der Resultate:**  
  Die Validierung zeigte, dass die wichtigsten Kernfunktionen funktionieren und die Anwendung für Nutzende verständlich aufgebaut ist. Besonders positiv sind die klare Navigation, die Rezeptdetailseite und das Vorschlagsformular. Optimierungspotenzial besteht bei Feinschliff, Content-Ergänzungen und der Dokumentation der Evaluation.
- **Abgeleitete Verbesserungen:**  
  - Formulare weiter vereinheitlichen und fachlich schärfer benennen.
  - Zusätzliche Rezepte und Inhalte ergänzen.
  - Dokumentation und Evaluation mit klaren Beispielen ausbauen.
  - Kleine UI-Verbesserungen und responsive Feinschliffe weiter ausarbeiten.

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
  ChatGPT bzw. ein KI-Assistent zur Unterstützung bei Fehlersuche, Refactoring, Textentwürfen und Strukturierung der Dokumentation.
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