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
Die Skizze bzw. das Mockup wurde mit Figma erstellt. Dabei wurde versucht, die Kernfunktionen korrekt abzubilden und die wesentlichen Erkenntnisse zu berücksichtigen. Über den folgenden Link gelangt man zum Figma-Prototypen:
https://www.figma.com/proto/VxaFwKLmULf5bE1EHsp0CW/Rezepte-Brazil?node-id=8762-5&p=f&t=V0Dt1GQB6898xfBu-0&scaling=contain&content-scaling=fixed&page-id=1%3A840.

### 3.3 Decide

**Gewählte Variante & Begründung:**  
  Gewählt wurde eine klare und reduzierte Lösung mit Startseite, Rezeptübersicht, Detailseite, Favoriten und Vorschlagsformular. Diese Variante ist übersichtlich, gut erweiterbar und passt zum Ziel, brasilianische Rezepte einfach zugänglich zu machen. Entscheidend waren Verständlichkeit, Umsetzbarkeit im Rahmen des Projekts und ein klarer Workflow von der Suche bis zum Speichern oder Vorschlagen von Rezepten.

**End-to-End-Ablauf:**  
  Ein Nutzer gelangt von der Startseite zur Rezeptübersicht, filtert oder sucht ein Rezept, öffnet die Detailansicht, liest Zutaten und Zubereitung, speichert bei Bedarf ein Rezept als Favorit und kann später über das Vorschlagsformular ein eigenes Rezept einreichen. Damit wird der komplette Ablauf vom Entdecken bis zum Erfassen neuer Inhalte abgedeckt.

**Mockup:**  
  Das Mockup wurde als Grundlage für die visuelle Ausarbeitung genutzt und dient als Orientierung für Struktur, Inhalte und Bedienlogik. Die finale Oberfläche wurde im Verlauf der Umsetzung angepasst, wenn dies für die technische Umsetzung oder eine bessere Benutzerführung sinnvoll war.

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Die Umsetzung der ersten Version des Prototyps basiert auf der zuvor festgelegten Lösung und wurde so gestaltet, dass die wichtigsten Teile des Workflows bereits einfach und nachvollziehbar genutzt werden können.

Die Website ist in klar getrennte Bereiche gegliedert: 
- Startseite
- Rezeptübersicht
- Rezeptdetailseite
- Rezeptvorschlag
- Login
- Registrierung
- Favoriten

Die Navigation bleibt konstant sichtbar, damit Nutzende sich jederzeit orientieren können.

Die Oberfläche verwendet Karten, Panels und klare Abschnittstrennung. Die Rezeptübersicht zeigt mehrere Rezepte in einer Grid-Struktur, die Detailseite arbeitet mit einer grossen Rezeptansicht und klar getrennten Inhaltsblöcken. Formulare sind bewusst einfach aufgebaut und geben Feedback bei Fehlern oder Erfolg.

**Designentscheidungen:**  
  - Fokus auf gute Lesbarkeit statt auf überladene Gestaltung.
  - Klare Formulare mit sichtbaren Fehlermeldungen.
  - Favoritenfunktion als schneller Interaktionspunkt direkt auf der Rezeptseite.
  - Rezeptvorschläge als eigener Workflow, damit die Plattform wachsen kann.
  - Reduzierte und strukturierte Darstellung passend zum Inhalt.

#### 3.4.2. Umsetzung (Technik)

- **Technologie-Stack:**  
  SvelteKit, JavaScript, HTML, CSS und MongoDB.
- **Tooling:**  
  Visual Studio Code, Git, GitHub, Netlify für Deployment sowie KI-Unterstützung für Refactoring, Fehlersuche und Text- bzw. Codevorschläge. Den KI-Einsatz beschreibe ich zusätzlich im Kapitel KI-Deklaration.
- **Struktur & Komponenten:**  
  Die App ist in Routen und wiederverwendbare Komponenten aufgeteilt. Wichtige Seiten sind die Rezeptübersicht, Detailseite, Favoritenansicht, Login- und Registrierungsbereich sowie das Rezeptvorschlagsformular. Wiederverwendbare Komponenten sind unter anderem RecipeCard, FavoriteButton und LoginPrompt.
- **Daten & Schnittstellen:**  
  Rezepte und Rezeptvorschläge werden in MongoDB gespeichert und in SvelteKit serverseitig geladen bzw. über Actions verarbeitet. Favoriten werden über eine API oder serverseitige Logik mit dem eingeloggten Nutzer verknüpft.
- **Deployment:**  
  Die App wurde auf Netlify deployed und ist online zugänglich.
- **Besondere Entscheidungen:**  
  - Serverseitige Validierung für das Vorschlagsformular.
  - Favoriten- und Login-Funktionen an den Nutzerstatus gekoppelt.
  - Rezeptdaten werden in der Übersicht und in der Detailansicht wiederverwendet.
  - Fehler wurden früh über Build-Logs und Test-Deployments identifiziert und behoben.

### 3.5 Validate

**URL der getesteten Version:**  
  Für das Testen wurde die damals auf Netlify deployte Live-Version verwendet. Die Version findet man unter folgender URL: https://6a0d6d371e8c370008c75c29--brasilianischerezepte.netlify.app/

**Ziele der Prüfung:**  
Ich habe mir folgende Fragestellungen gestellt, um herauszufinden, ob die Anwendung aus Nutzersicht verständlich und sinnvoll aufgebaut ist:

  - Ist die Website logisch und simpel aufgebaut?
  - Kann man Rezepte favorisieren, aber nur mit Login?
  - Kann man Rezeptvorschläge erstellen, aber nur mit Login?
  - Kann man die Mengenangaben innerhalb eines Rezepts anpassen, sodass die Rezepte für eine bestimmte Anzahl Personen zubereitet werden können?
  - Ist die Bedienung verständlich und nachvollziehbar?

**Vorgehen:**  
Zuerst habe ich die Deployment-Prüfung selbst durchgeführt, um zu überprüfen, ob alle Funktionen korrekt laufen. Anschliessend habe ich die Anwendung mit vier Testpersonen aus meinem Umfeld evaluiert. Jede Person besuchte die Website eigenständig auf dem persönlichem Laptop, während ich die Nutzung beobachtete. Die Testpersonen wurden gebeten, sich so zu verhalten, als wäre ich nicht anwesend.

Den Testpersonen wurden ein Testszenario sowie konkrete Testaufgaben gegeben. Diese wurden in einem Word-Dokument festgehalten und anschliessend verwendet. Während oder nach dem Test wurden unter anderem folgende Fragen gestellt:

  - Was war dein erster Eindruck, als du die Website gesehen hast?
  - Fandest du die Website simpel und logisch gestaltet?
  -	Hast du leicht herausgefunden, wie man ein Rezept favorisiert?
  -	Hast du leicht herausgefunden, wie man einen Rezeptvorschlag erstellt?
  - Welche Verbesserungsvorschläge hast du?

Zusätzlich wurde die Anwendung am Schluss aus Sicht der Nutzenden nochmals geprüft, um Fehler und Unklarheiten zu erkennen.

**Stichprobe:**  
Die erste Testperson war ich selbst im Rahmen der Entwicklung. Danach habe ich vier Personen aus meinem Umfeld einzeln testen lassen. Dadurch konnte sichergestellt werden, dass die Testpersonen die Website eigenständig benutzen und nicht von anderen beeinflusst werden.

**Aufgaben/Szenarien:**
  - *Testszenario:* Du bist ein leidenschaftlicher Hobbykoch und suchst nach Rezepten. Zufälligerweise bist du auf meine Website gestossen und hast Lust bekommen, brasilianische Rezepte selbst zu machen.

  - *Testaufgabe 1:* Dieses Wochenende erhältst du Besuch von vier Personen und suchst noch nach einem Dessertrezept. Damit du es am Wochenende nachmachen kannst, musst du es speichern.
  
  - *Testaufgabe 2:* Am Wochenende nach dem Essen hat dir ein Freund gesagt, dass du einmal das Gericht «Bolinhas de Cacau» machen solltest. Du findest dieses Dessert jedoch nicht auf der Website, würdest es aber gerne dort sehen.

  Zusätzlich wurde darauf geachtet, ob Fehler- und Erfolgsmeldungen klar verständlich sind.

**Kennzahlen & Beobachtungen:**  
Alle Testpersonen hatten einen guten ersten Eindruck von der Website. Ihnen gefielen insbesondere die Farbwahl, die klare Struktur und der logische Aufbau der Seite. Auch die Rezeptkarten und die Favoritenfunktion wurden positiv bewertet. Zudem fanden die Testpersonen es sinnvoll, dass man sich zuerst einloggen muss, um spezielle Funktionen zu nutzen.

Die Testpersonen fanden sich bei den Aufgaben schnell zurecht. Trotzdem konnten kleinere Punkte erkannt werden, die verbessert werden sollten. Beispielsweise sollte beim Speichern eines Rezepts auch die aktuell ausgewählte Anzahl Personen mitgespeichert werden.

Es gab ausserdem weitere Verbesserungsvorschläge. Die Rezepte ganz unten auf der Hauptseite sollen entfernt werden, da der Nutzen gering ist. Zusätzlich wurde vorgeschlagen, Informationen zur Geschichte sowie zur Herkunft oder Region eines Gerichts anzuzeigen. Dadurch würde die Website mehr inhaltliche Tiefe erhalten. Ebenfalls wurde die Idee eingebracht, ein eigenes Website-Logo zu erstellen und zu integrieren.

Auf der Rezeptseite soll die Anzeige der Personenanzahl auf den Karten entfernt werden, da sie eher für Verwirrung sorgt. Zudem soll es möglich sein, die Personenanzahl innerhalb eines Rezepts anzupassen, beispielsweise von zwei auf vier Personen, und das Rezept anschliessend mit dieser angepassten Menge zu speichern. Aktuell wird das Rezept immer mit der Standardanzahl gespeichert.

Auf der Favoritenseite muss die Darstellung der Favoriten übersichtlicher werden. Zurzeit beeinflusst die Anzahl der Seiten die Darstellung der Ansicht, obwohl dies nicht der Fall sein sollte.

Beim Ausfüllen eines Rezeptvorschlags sollte der Name nicht mehr abgefragt werden. Dieser sollte entweder weggelassen oder automatisch mit dem eingeloggten Benutzer übernommen werden. Zudem ist es aktuell etwas unübersichtlich, wenn im Formular Fehler auftreten oder Pflichtfelder nicht ausgefüllt wurden. Dies sollte mit einer klaren Warnmeldung oder durch ein automatisches Zurückspringen zum Anfang der Seite verbessert werden, damit die Nutzenden sofort erkennen, dass ein Problem vorliegt.

**Zusammenfassung der Resultate:**  
Die Validierung zeigte, dass die wichtigsten Kernfunktionen funktionieren und die Anwendung für die Nutzenden verständlich aufgebaut ist. Besonders positiv bewertet wurden die klare Navigation, die Rezeptdetailseite sowie das Rezeptvorschlagsformular.

Optimierungspotenzial besteht jedoch noch beim Feinschliff, beispielsweise bei den Fehlermeldungen, beim Verhalten im Fehlerfall sowie bei der korrekten Darstellung einzelner Elemente.

**Abgeleitete Verbesserungen:**  
  Ich werde für die Verbesserungen wie folgt vorgehen:
* Ein Logo bzw. ein Favicon für die Hauptseite und den Browsertab wird erstellt und implementiert.
* Die Kästchen unten auf der Website werden nicht klickbar gemacht, da dies aus Nutzersicht wenig sinnvoll ist.
* Die weiteren Rezepte ganz unten auf der Hauptseite werden entfernt, da der Nutzen gering ist und die Seite dadurch weniger redundant wird.
* Die Geschichte bzw. die Region, aus der ein Rezept stammt, wäre ein interessantes Zusatzfeature, müsste aber ausserhalb des vorgesehenen Projektumfangs umgesetzt werden.
* Auf den RecipeCards wird die Anzahl Personen entfernt, da dies für Verwirrung sorgt, weil immer nur die Standardzahl angezeigt wird.
* Die Darstellung der Rezepte auf der Favoritenseite wird übersichtlicher gestaltet.
* Die Personenanzahl wird nach dem Speichern in der Favoritenliste sichtbar sein. Im Rezept selbst bleibt sie jedoch unverändert.
* Beim Ausfüllen eines Vorschlags wird nicht mehr nach dem Namen gefragt. Dieser wird neu automatisch aus dem Benutzerkonto übernommen.
* Neu wird zudem eine bessere Fehlermeldung angezeigt, wenn im Vorschlagsformular etwas falsch ausgefüllt wurde.
* Ausserdem soll die Bestätigung künftig als Pop-up angezeigt werden und nicht mehr wie bisher ganz oben im Formular, wo sie nur sichtbar ist, wenn man nach oben scrollt.
 

## 4. Erweiterungen [Optional]

### 4.1 Favoritenfunktion
- **Beschreibung & Nutzen:**  
  Eingeloggte Nutzende können Rezepte als Favoriten speichern und später schneller wiederfinden. Dadurch entsteht eine persönliche Merkliste mit Rezepten, die für später relevant sind.
- **Wo umgesetzt:**  
  - **Frontend:** FavoriteButton-Komponente sowie Anzeige in Rezeptkarten und in der Detailansicht.
  - **Backend:** API bzw. serverseitige Logik zum Speichern und Entfernen von Favoriten.
  - **Datenbank:** Speicherung der Favoritenbeziehungen im Benutzerkontext.
- **Referenz:**  
  Die Funktion ist in der Rezeptübersicht, in der Detailansicht und im Favoritenbereich sichtbar.
- **Aus Evaluation abgeleitet?:**  
  Ja, weil viele Nutzende Rezepte speichern möchten, um später schnell darauf zugreifen zu können.

### 4.2 Rezeptvorschläge
- **Beschreibung & Nutzen:**  
  Nutzende können eigene Rezeptideen einreichen. Dadurch wird die Plattform erweitert und um neue Inhalte ergänzt, ohne dass diese manuell durch die Plattform gepflegt werden müssen.
- **Wo umgesetzt:**  
  - **Frontend:** Vorschlagsformular mit Validierung und Feedback.
  - **Backend:** SvelteKit Action für Validierung und Speicherung.
  - **Datenbank:** Collection für Rezeptvorschläge.
- **Referenz:**  
  Die Funktion ist auf der Seite /vorschlag umgesetzt.
- **Aus Evaluation abgeleitet?:**  
  Ja, weil ein klarer Workflow zum Einreichen neuer Rezepte einen echten Mehrwert bietet.

### 4.3 Rezeptfilter und Suche
- **Beschreibung & Nutzen:**  
  Die Rezeptübersicht kann nach Suchbegriff, Menüart, Aufwand und Zeitaufwand gefiltert werden. Dadurch finden Nutzende passende Gerichte schneller und können die Auswahl besser eingrenzen.
- **Wo umgesetzt:**  
  - **Frontend:** Filterformular und Rezeptkartenansicht.
  - **Backend:** Filterlogik in der Rezeptübersicht.
  - **Datenbank:** Abfrage der passenden Rezeptdaten.
- **Referenz:**  
  Sichtbar auf der Seite /rezepte.
- **Aus Evaluation abgeleitet?:**  
  Teilweise, weil eine schnelle Orientierung ein zentrales Nutzerbedürfnis ist.

## 5. Projektorganisation [Optional]

- **Repository & Struktur:**  
  Das Projekt ist in GitHub versioniert und übersichtlich aufgebaut. Die Anwendung ist in SvelteKit-Routen, Komponenten, Serverlogik und statische Dateien getrennt, damit die Struktur nachvollziehbar bleibt.
- **Arbeitsweise:**  
  Fehler wurden laufend über lokale Tests überprüft und anschliessend behoben. So konnte das Projekt iterativ verbessert werden.
- **Issue-Management:**  
  Die Entwicklung wurde schrittweise umgesetzt. Fehler und offene Punkte wurden über Build-Logs, lokale Tests und direkte Korrekturen bearbeitet.
- **Commit-Praxis:**  
  Es wurden regelmässig Commits erstellt, um die Entwicklung nachvollziehbar zu halten und Änderungen sauber nachverfolgen zu können.

## 6. KI-Deklaration

### 6.1 KI-Tools
Die folgende Deklaration beschreibt den Einsatz von KI im Projekt transparent und nachvollziehbar.

- **Eingesetzte Tools:**  
  Perplexity wurde zur Unterstützung bei Fehlersuche, Refactoring, Textentwürfen und Strukturierung der Projektdokumentation verwendet. GitHub Copilot wurde zusätzlich für die Erstellung des Codes eingesetzt.
- **Zweck & Umfang:**  
  KI wurde verwendet, um Build-Fehler zu analysieren, SvelteKit- und MongoDB-Logik zu prüfen, Codebeispiele zu korrigieren und die Projektdokumentation sprachlich zu verbessern. Die endgültige Auswahl, Anpassung und Umsetzung lagen bei mir.
- **Eigene Leistung (Abgrenzung):**  
  Die Projektidee, die inhaltliche Ausrichtung, die Auswahl der Funktionen, die technische Umsetzung, die Debugging-Entscheide und die finale Integration wurden eigenständig erarbeitet und überarbeitet.

### 6.2 Prompt-Vorgehen
Ich habe KI vor allem für konkrete Einzelfragen, Codekorrekturen und Formulierungshilfen verwendet. Dabei wurden Fehlerlogs, einzelne Dateien oder Textbausteine als Grundlage gegeben, damit die Antworten gezielt auf das Projekt bezogen sind.

### 6.3 Reflexion
KI war hilfreich, um schneller Fehler zu finden, bessere Formulierungen zu erstellen und repetitive Aufgaben zu beschleunigen. Gleichzeitig bleibt die Verantwortung für fachliche Richtigkeit, Urheberrecht und Projektqualität bei mir.

Besonders wichtig war deshalb die kritische Kontrolle aller Vorschläge und die Anpassung an die konkrete Projektstruktur. So konnte KI als Unterstützung genutzt werden, ohne die eigene Verantwortung für das Resultat auszulagern.

## 7. Anhang [Optional]

- **Quellen:**  
  Moodle-Vorlagen, Vorlesungsunterlagen, eigene Screenshots, Projektcode und deployte Anwendung.
- **Testskript & Materialien:**  
  Testszenario, Testaufgaben und Leitfragen aus der Evaluation.
- **Rohdaten/Auswertung:**  
  Notizen aus der Validierung, Beobachtungen der Testpersonen, Build-Logs und Fehlerkorrekturen.