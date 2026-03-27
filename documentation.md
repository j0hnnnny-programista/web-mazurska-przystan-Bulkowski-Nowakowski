# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Jan Bułkowski & Michał Nowakowski
**Klasa:** 3 Technikum
**Data:** 03-27-2026

---
## 1. Wymagania klienta
* Formularz pobiera dane od klienta:
  * Imię klienta
  * Wybór sprzętu: Kajak (20zł/h), Rower wodny (35zł/h), Omega (150zł/h)
  * Liczba godzin wypożyczenia (1-8)
  * Opcja kapoka dla dziecka (+5zł)
  * Opcja instruktora (+50zł/h)
  * Wybór płatności (Karta lub BLIK)
  * Akceptacja regulaminu
* Po wybraniu łodzi Omega pojawia się informacja o wymaganym patencie żeglarskim.
* Cena jest obliczana automatycznie na podstawie aktualnych wyborów użytkownika.
* Po prawej stronie formularza wyświetlane jest bieżące podsumowanie rejsu.
* Przycisk "Rezerwuję" jest aktywny dopiero po podaniu imienia i zaakceptowaniu regulaminu.

---
## 2. Architektura rozwiązania
Architektura i logika strony znajduje się w `App.tsx`, a wygląd w `App.css`.

`App.tsx` jest podzielony w następujący sposób:

* Na początku zdefiniowane są stany `useState` dla wszystkich pól formularza.
* Następnie zdefiniowane są metody i funkcje aplikacji:
  * `calculatePrice()` - wylicza cenę końcową na podstawie wybranego sprzętu, godzin i dodatków.
  * `handleSubmit()` - zatrzymuje domyślne wysłanie formularza i pokazuje komunikat `alert`.
* Każde pole formularza jest kontrolowane przez React (`value`/`checked` + `onChange`).
* Widok aplikacji składa się z dwóch sekcji:
  * Lewa sekcja: formularz rezerwacji.
  * Prawa sekcja: podsumowanie danych wpisywanych przez użytkownika.

---
## 3. Zarządzanie stanem (`useState`)
| Nazwa zmiennej stanu | Typ danych | Za co odpowiada? |
|:---------------------|:-----------|:-----------------|
| name                 | string     | Przechowuje imię klienta |
| boat                 | string     | Przechowuje wybór łodzi (`kajak`, `waterbike`, `omega`) |
| hours                | number     | Przechowuje liczbę godzin wypożyczenia |
| kapok                | boolean    | Informuje, czy wybrano kapok dla dziecka |
| instructor           | boolean    | Informuje, czy wybrano opiekę instruktora |
| payment              | string     | Przechowuje metodę płatności (`card` lub `blik`) |
| regulamin            | boolean    | Informuje, czy zaakceptowano regulamin |

---
## 4. Algorytm obliczania ceny

* **Cena bazowa:** zależna od wybranego sprzętu:
  * Kajak: 20zł/h
  * Rower wodny: 35zł/h
  * Omega: 150zł/h
* **Wpływ godzin:** cena bazowa jest mnożona przez liczbę godzin.
* **Opcje dodatkowe:**
  * Instruktor: +50zł za każdą godzinę.
  * Kapok dla dziecka: stałe +5zł.
* **Wzór logiczny:**
  * `total = cena_lodzi * godziny`
  * `+ 5`, jeśli wybrano kapok
  * `+ 50 * godziny`, jeśli wybrano instruktora

---
## 5. Layout i Stylizacja (`Flexbox`)
W aplikacji wykorzystano głównie style z `App.css` do ułożenia formularza i podsumowania obok siebie oraz do nadania klimatu projektu.

1. `display: flex` (w `main`) - ustawia sekcję formularza i podsumowania w jednym rzędzie.
2. `max-width: 1000px` + `margin: 0 auto` (w `#root`) - centruje główny kontener na stronie.
3. `background-image`, `background-size: cover`, `background-position: center` (w `html`) - tworzy tło strony ze zdjęciem przystani.

---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?**
  * Michał: Zmiana ceny wraz z wyborami
  * Janek: Ustawienie w css aby ładnie wyglądało
* **Czego nowego się nauczyliście?**
  * Michał: Fajne sposoby do zastosowania useState
  * Janek: Jak ładnie ułożyć wygląd strony
* **Co byście zmienili, gdybyście mieli więcej czasu?**
  * Michał: "Interaktywność" strony, aby nie była taka statyczna bardzo
  * Janek: Upiększyłbym wygląd, dodał obrazki
---
## 7. Checklisty
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
