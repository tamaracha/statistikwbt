# entweder Leerzeichen für die Einrückung verwenden oder Tabsize im Editor auf 2 stellen, damit die Einrückungen optisch stimmen
_id: # Titel ohne Leerzeichen, wird für die UrL und als interne Referenz genutzt
title: # Name der Einheit, erscheint im Titelbereich und in Menüpunkten
subtitle: # optionaler Untertitel, wird durch einen Doppelpunkt vom Titel getrennt angezeigt
description: # Kurzbeschreibung der Einheit, die das Thema vorstellen soll, darf html enthalten
requires: # optionale Liste der Voraussetzungen, die _id-Felder der entsprechenden Einheiten sind zu verwenden
	- BeispielEinheit # Diese Einheit hat BeispielEinheit als Voraussetzung
topics:# Liste der Themen in dieser Einheit, eigene Unterobjekte, deshalb auf die Einrückungen achten
	- _id: # id dieses Themas, für URL und interne Referenzen
		title: # Name dieses Themas
		subtitle: # optionaler Untertitel des themas
		body: # Kerntext, darf html enthalten
		examples: # Liste der Beispiele in diesem Thema
			- _id: # id dieses Beispiels
				title: # Titel dieses Beispiels
				subtitle: # optionaler Untertitel dieses Beispiels
				body: # Text des Beispiels, darf html enthalten
			- _id: # id des zweiten Beispiels
				title: # Titel des zweiten Beispiels
		extras: # Liste der Extras dieses Themas
			- _id: # id dieses Extras
				title: # Titel dieses Extras
				subtitle: # optionaler Untertitel
				body: # Text des Extras, darf html enthalten
		tests: # Liste der Übungs- und Testaufgaben dieses Themas, _id-Felder der Aufgaben werden verwendet, die Aufgaben werden woanders editiert
			- Beispielaufgabe # BeispielAufgabe ist eine in diesem Thema verwendete Aufgabe
	- _id: # id des zweiten Themas