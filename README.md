# ⚓ Projekt: Mazurska Przystań - System Rezerwacji


Witajcie w zespole deweloperskim! Waszym zadaniem jest stworzenie aplikacji typu "Kalkulator Rezerwacji" dla wypożyczalni sprzętu wodnego na Mazurach.

## 🛠️ Stack Techniczny
- **Framework:** React.js
- **Stylizacja:** CSS (Flexbox - wymóg konieczny!)
- **Workflow:** Git (GitHub) + Discord Webhooks

## 📋 Lista Issues dla Kanbanu (Vite & Template Edition)
Możecie skopiować te zadania bezpośrednio do swoich Issues na GitHubie:

`Issue #1`: Repository & Environment Setup ⚙️
Opis: Przygotowanie stanowiska pracy na bazie template.

Zadania:
- [ ] Stworzenie własnego repozytorium z Twojego template'u.
- [ ] Zaproszenie partnera i konfiguracja Discord Webhook.
- [ ] Odpalenie projektu komendą npm run dev.
- [ ] Sprawdzenie, czy documentation.md i README.md są gotowe do edycji.


`Issue #2`: UI: Form Structure & Flexbox 🎨
Opis: Budowa "szkieletu" formularza w App.jsx.

Zadania:
- [ ] Dodanie pól: Name (input), Boat (select), Hours (range), Extras (checkbox), Payment (radio).
- [ ] Stylowanie kontenera w App.css (lub index.css) przy użyciu Flexbox.
- [ ] Ustawienie responsywności (np. max-width dla formularza, żeby nie był na cały ekran).


`Issue #3`: Logic: State & Live Price 🧙‍♂️
Opis: Ożywienie formularza za pomocą React Hooks.

Zadania:
- [ ] Inicjalizacja useState dla wszystkich pól formularza.
- [ ] Podpięcie zdarzeń onChange (pamiętajcie o e.target.value i e.target.checked!).
- [ ] Implementacja funkcji liczącej cenę (Kajak 20/h, Rower 35/h, Omega 150/h).
- [ ] Wyświetlenie komunikatu o patencie przy wyborze "Omegi".


`Issue #4`: Logic: Validation & Final Polish ✅
Opis: Bezpieczeństwo i UX.

Zadania:
- [ ] Walidacja przycisku "Rezerwuję" (musi być disabled, gdy brak imienia lub regulaminu).
- [ ] Dodanie prostego "Alertu" lub podziękowania po kliknięciu w przycisk.
- [ ] Usunięcie niepotrzebnych plików/komentarzy z template'u.


`Issue #5`: Documentation & SDLC Wrap-up 📖
Opis: Podsumowanie prac w pliku documentation.md.

Zadania:
- [ ] Uzupełnienie tabeli stanów i opisanie algorytmu ceny.
- [ ] Krótka analiza w sekcji "Wnioski".
- [ ] Zamknięcie tablicy Kanban i sprawdzenie historii commitów.

## 🚀 Zasady pracy (SDLC)
- Nie wypychamy kodu bezpośrednio do gałęzi `main`.
- Tworzymy gałęzie dla każdego inżyniera.
- Każdy kod musi przejść przez **Pull Request**, który zatwierdza druga osoba z pary.
- Po każdym `git push` sprawdźcie, czy na Discordzie (kanał #feed-github) pojawiło się powiadomienie.
--------------

