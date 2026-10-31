// AWT website — language switch (EN/PL) and contact form.
(() => {
  const EMAIL = "awt-barlinek@proton.me";

  // English lives in the HTML; only Polish is stored here.
  const PL = {
    "skip": "Przejdź do treści",
    "brand": "Urządzenia elektroniczne",
    "nav.why": "Dlaczego AWT",
    "nav.services": "Usługi",
    "nav.projects": "Realizacje",
    "nav.process": "Współpraca",
    "nav.faq": "Pytania",
    "nav.cta": "Zapytaj o wycenę",
    "hero.kicker": "Tworzenie urządzeń elektronicznych · Polska",
    "hero.title": "Od Twojego problemu do działającego produktu — i wsparcie długo po jego wdrożeniu.",
    "hero.lede": "AWT prowadzi Twoje urządzenie od początku do końca. Zaczynamy od zrozumienia problemu, który chcesz rozwiązać, potem projektujemy, rozwijamy, testujemy i produkujemy urządzenie, a gdy trafi do Twoich klientów — dbamy o jego aktualizacje i monitoring. Jeden partner na całej drodze, dzięki czemu skupiasz się na biznesie, a nie na koordynowaniu dostawców.",
    "hero.cta": "Porozmawiajmy o projekcie",
    "hero.cta2": "Zobacz, jak pomagamy",
    "lc.title": "Jeden partner, od początku do końca",
    "lc.1": "Twój problem",
    "lc.1d": "Słuchamy i pomagamy określić potrzeby",
    "lc.2": "Projekt",
    "lc.2d": "Jasny plan urządzenia i jego elektroniki",
    "lc.3": "Rozwój",
    "lc.3d": "Działający prototyp do wypróbowania",
    "lc.4": "Testy",
    "lc.4d": "Każdy egzemplarz sprawdzony przed wysyłką",
    "lc.5": "Produkcja",
    "lc.5d": "Gotowe egzemplarze do użycia",
    "lc.6": "Utrzymanie",
    "lc.6d": "Zdalne aktualizacje i monitoring w terenie",
    "c1.h": "Wszystko należy do Ciebie",
    "c1.p": "Cały kod i pliki projektowe są Twoją własnością.",
    "c2.h": "Bez niespodzianek w kosztach",
    "c2.p": "Cena ustalona na piśmie przed rozpoczęciem prac.",
    "c3.h": "Jakość, którą da się udowodnić",
    "c3.p": "Każdy egzemplarz przetestowany, każdy wynik zapisany.",
    "c4.h": "Zostajemy po wdrożeniu",
    "c4.p": "Aktualizacje, hosting i utrzymanie na życzenie.",
    "trusted.h": "Zaufali nam",
    "why.eyebrow": "Dlaczego AWT",
    "why.title": "Stworzenie urządzenia jest trudne. My to upraszczamy.",
    "why.intro": "Większość firm z pomysłem na urządzenie trafia na te same problemy. Oto jak je rozwiązujemy.",
    "w1.h": "„Mam pomysł, ale nie mam zespołu inżynierów.”",
    "w1.p": "Przeprowadzimy go od ogólnego opisu do działającego urządzenia. Nie potrzebujesz specyfikacji technicznej — pomożemy ją przygotować.",
    "w2.h": "„Koordynuję projektantów, fabryki i dostawców IT.”",
    "w2.p": "Projekt, rozwój, testy, produkcja i wsparcie u jednego partnera. Jedna osoba kontaktowa, bez przerzucania odpowiedzialności między dostawcami.",
    "w3.h": "„Boję się, że wadliwe egzemplarze trafią do klientów.”",
    "w3.p": "Każdy egzemplarz jest sprawdzany przed wysyłką, a wynik zapisywany — wiesz dokładnie, co dostarczasz.",
    "w4.h": "„Poprawka błędu oznacza wycofanie urządzeń.”",
    "w4.p": "Dzięki zdalnym aktualizacjom poprawiasz i rozwijasz urządzenia, które są już u klientów — bezpiecznie i bez wizyt serwisowych.",
    "w5.h": "„Nie wiem, jak moje urządzenia działają w terenie.”",
    "w5.p": "Dane na żywo i alerty pozwalają wychwycić problem, zanim zadzwoni klient.",
    "w6.h": "„Nie chcę uzależnić się od jednego dostawcy.”",
    "w6.p": "Wszystkie projekty i kod są Ci przekazywane. Możesz je w każdej chwili przenieść, gdzie chcesz.",
    "services.eyebrow": "Usługi",
    "services.title": "Co możemy dla Ciebie zrobić.",
    "services.intro": "Skorzystaj z nas na całej drodze albo tylko na potrzebnym etapie. Każda usługa działa samodzielnie, a razem prowadzą Twój produkt od pomysłu do urządzeń w rękach klientów.",
    "s1.title": "Projekt i rozwój",
    "s1.pitch": "Zamień pomysł w działające urządzenie.",
    "s1.text": "Projektujemy elektronikę i oprogramowanie, które w niej działa, oraz budujemy prototypy, które możesz przetestować, pokazać inwestorom lub klientom. Masz już własny zespół? Dołączymy do niego przy najtrudniejszych zadaniach.",
    "s1.t1": "Od ogólnego pomysłu do działającego prototypu",
    "s1.t2": "Projekt elektroniki i płytek drukowanych",
    "s1.t3": "Oprogramowanie działające w urządzeniu",
    "s1.t4": "Łączność bezprzewodowa i przewodowa, np. Bluetooth",
    "s1.t5": "Wsparcie dla Twojego zespołu",
    "s6.title": "Sterowniki urządzeń",
    "s6.pitch": "Spraw, by wszystkie podzespoły urządzenia ze sobą współpracowały.",
    "s6.text": "Każdy układ w urządzeniu — czujnik, ekran, moduł radiowy — potrzebuje kawałka oprogramowania, by porozumieć się z resztą systemu. Napiszemy go dla Ciebie albo znajdziemy sprawdzone gotowe rozwiązanie — zależnie od tego, co oszczędzi Ci więcej czasu i pieniędzy.",
    "s6.o1": "Pisany na zamówienie",
    "s6.o1d": "Dopasowany dokładnie do Twojego sprzętu, a kod w całości należy do Ciebie.",
    "s6.o2": "Gotowy i sprawdzony",
    "s6.o2d": "Dobieramy, kupujemy i wdrażamy istniejące rozwiązanie — szybciej i taniej.",
    "s6.t1": "Czujniki, ekrany, pamięci, moduły radiowe",
    "s6.t2": "Dokumentacja i przykłady w zestawie",
    "s6.t3": "Sprawdzone na rzeczywistym sprzęcie",
    "s2.title": "Testy",
    "s2.pitch": "Wyłap usterki, zanim zrobią to Twoi klienci.",
    "s2.text": "Niezależnie od tego, czy płytki wyprodukowaliśmy my, czy inna fabryka, sprawdzamy każdą z nich na stanowisku testowym zaprojektowanym pod Twój produkt. Każdy egzemplarz ma zapisany wynik testu, więc wiesz dokładnie, co wysyłasz.",
    "s2.t1": "Każdy egzemplarz sprawdzony",
    "s2.t2": "Stanowisko testowe pod Twój produkt",
    "s2.t3": "Płytki od dowolnego producenta",
    "s2.t4": "Zapisany wynik dla każdego egzemplarza",
    "s2.t5": "Testy wytrzymałościowe",
    "s5.title": "Produkcja",
    "s5.pitch": "Od pierwszego prototypu do pełnej serii.",
    "s5.text": "Małe i średnie serie: kupujemy komponenty, montujemy płytki, wgrywamy oprogramowanie i wszystko testujemy. Otrzymujesz gotowe egzemplarze, które od razu trafiają do Twojego produktu.",
    "s5.t1": "Zakup wszystkich komponentów",
    "s5.t2": "Montaż i programowanie",
    "s5.t3": "Małe i średnie serie",
    "s5.t4": "Dostawa gotowa do użycia",
    "s3.title": "Zdalne aktualizacje",
    "s3.pitch": "Ulepszaj urządzenia także po ich wysyłce.",
    "s3.text": "Poprawiaj błędy i dodawaj funkcje w urządzeniach, które są już u Twoich klientów — bez wycofywania sprzętu i wizyt serwisowych. Aktualizacje są chronione przed podrobieniem, wdrażane stopniowo i automatycznie cofane, jeśli coś pójdzie nie tak. System hostujemy i utrzymujemy za Ciebie.",
    "s3.t1": "Bez wycofań i wizyt serwisowych",
    "s3.t2": "Ochrona przed podrobionymi aktualizacjami",
    "s3.t3": "Stopniowe wdrażanie ogranicza ryzyko",
    "s3.t4": "Automatyczne cofnięcie nieudanej aktualizacji",
    "s3.t5": "Hosting i utrzymanie po naszej stronie",
    "s4.title": "Monitoring urządzeń",
    "s4.pitch": "Wiedz, jak radzą sobie Twoje urządzenia.",
    "s4.text": "Odczyty, stan techniczny i problemy ze wszystkich urządzeń w jednym miejscu, z alertami, gdy coś wymaga uwagi. Panele możemy przygotować dla inżynierów, serwisu lub Twoich klientów.",
    "s4.t1": "Wszystkie urządzenia w jednym widoku",
    "s4.t2": "Alerty, zanim zauważy to klient",
    "s4.t3": "Panele dla zespołu lub klientów",
    "s4.t4": "Hosting i utrzymanie po naszej stronie",
    "work.eyebrow": "Wybrane realizacje",
    "work.title": "Urządzenia, które już zbudowaliśmy.",
    "f.scope": "Zakres",
    "f.use": "Dla Ciebie",
    "p1.kind": "Produkt własny · Sprzęt testowy",
    "p1.title": "ETS — nasze stanowisko testowe",
    "p1.text": "Stanowisko, które automatycznie sprawdza elektronikę: wgrywa oprogramowanie na każdą płytkę, przeprowadza zaplanowaną serię testów i raportuje wynik. Używamy go w testach produkcyjnych dla klientów, a przy tym przyspiesza tworzenie i sprawdzanie oprogramowania urządzeń.",
    "p1.scope": "Sprzęt, oprogramowanie urządzenia, aplikacja na komputer",
    "p1.use": "Szybkie, powtarzalne testy Twoich płytek",
    "p2.kind": "Urządzenia noszone",
    "p2.title": "Bezprzewodowy czujnik ruchu",
    "p2.text": "Mały czujnik zasilany z baterii, który rejestruje ruch i przesyła dane przez Bluetooth do centralki, gdzie są zbierane i przedstawiane na wykresach. Jego oprogramowanie można bezpiecznie aktualizować bezprzewodowo.",
    "p3.kind": "Drony",
    "p3.title": "Kontroler lotu drona",
    "p3.text": "Własna płytka elektroniczna i system operacyjny, na którym działa popularne otwarte oprogramowanie autopilota.",
    "p4.kind": "Pojazdy elektryczne",
    "p4.title": "Elektronika bolidu elektrycznego",
    "p4.text": "Zarządzanie baterią, układy bezpieczeństwa, rozdział zasilania, deska rozdzielcza i moduły przesyłu danych na żywo — elektronika i oprogramowanie, połączone jedną siecią w pojeździe.",
    "p5.kind": "Automatyka przemysłowa",
    "p5.title": "Monitoring stanu maszyn",
    "p5.text": "System, który obserwuje maszyny przemysłowe, zbiera ich logi i dane o pracy, wcześnie wykrywa usterki sprzętu i sprawdza zmiany w oprogramowaniu, zanim trafią na halę produkcyjną.",
    "tech.summary": "Dla inżynierów: platformy i narzędzia, z którymi pracujemy",
    "tech.mcu": "Mikrokontrolery",
    "tech.mpu": "Procesory aplikacyjne",
    "tech.rtos": "Systemy operacyjne",
    "tech.lang": "Języki",
    "tech.bus": "Interfejsy",
    "tech.eda": "Projektowanie elektroniki",
    "tech.infra": "Infrastruktura",
    "process.eyebrow": "Współpraca",
    "process.title": "Prosta współpraca — od pierwszej rozmowy do wdrożenia i dalej.",
    "st1.title": "Bezpłatna rozmowa",
    "st1.text": "Opowiedz, jaki problem chcesz rozwiązać. Specyfikacja techniczna nie jest potrzebna — zadamy właściwe pytania.",
    "st2.title": "Jasna oferta",
    "st2.text": "Pisemny plan z etapami, harmonogramem i ceną. Znasz koszt, zanim zaczniemy pracę.",
    "st3.title": "Widoczne postępy",
    "st3.text": "Regularne informacje o postępach i coś działającego do wypróbowania po każdym etapie.",
    "st4.title": "Przekazanie i wsparcie",
    "st4.text": "Otrzymujesz wszystkie projekty, kod i dokumentację. Możemy dalej hostować, utrzymywać i aktualizować Twoje urządzenia.",
    "faq.eyebrow": "Pytania",
    "faq.title": "Częste pytania.",
    "q1": "Mam tylko pomysł. Czy to wystarczy?",
    "a1": "Tak. Wiele projektów zaczyna się od szkicu albo krótkiego opisu. Pomożemy zamienić go w jasne wymagania i plan, zanim cokolwiek powstanie.",
    "q2": "Czy możecie pomóc przy projekcie, który już trwa?",
    "a2": "Tak. Możemy wesprzeć Twój zespół przy konkretnych zadaniach albo przejąć pozostałe prace.",
    "q3": "Do kogo należy efekt pracy?",
    "a3": "Do Ciebie. Cały kod źródłowy, schematy i pliki projektowe są Ci przekazywane.",
    "q4": "Jak ustalana jest cena?",
    "a4": "Po pierwszej rozmowie otrzymujesz pisemną ofertę: stałą cenę za każdy etap albo rozliczenie za czas pracy, jeśli zakres jest jeszcze otwarty.",
    "q5": "Co dzieje się po wprowadzeniu produktu na rynek?",
    "a5": "Możemy hostować i utrzymywać system aktualizacji i monitoringu oraz dalej rozwijać oprogramowanie Twojego urządzenia.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Opowiedz nam o swoim projekcie.",
    "contact.text": "Opisz problem lub produkt i etap, na którym jesteś — wystarczy ogólny opis. Odpowiadamy w ciągu dwóch dni roboczych, a pierwsza rozmowa jest bezpłatna.",
    "contact.email": "E-mail",
    "contact.phone": "Telefon",
    "contact.loc": "Lokalizacja",
    "contact.locv": "Barlinek, Polska · projekty w całej Europie",
    "contact.langs": "Języki",
    "contact.langsv": "polski, angielski",
    "form.name": "Imię i nazwisko",
    "form.company": "Firma",
    "form.email": "E-mail",
    "form.need": "W czym możemy pomóc?",
    "form.c0": "Wszystko, od początku do końca",
    "form.c1": "Projekt i rozwój",
    "form.c6": "Sterowniki",
    "form.c2": "Testy",
    "form.c5": "Produkcja",
    "form.c3": "Zdalne aktualizacje",
    "form.c4": "Monitoring",
    "form.msg": "Jaki problem chcesz rozwiązać?",
    "form.send": "Wyślij zapytanie",
    "footer.about": "Urządzenia elektroniczne od początku do końca — od zrozumienia Twojego problemu po sprzęt niezawodnie działający w terenie.",
    "footer.loc": "Barlinek, Polska",
    "footer.top": "Do góry",
    "footer.privacy": "Polityka prywatności",
  };

  const MSG = {
    en: { missing: "Please provide your name, a valid email address and a project description.",
          opened: "Your email app should open with the message ready. If it doesn't, write to " + EMAIL + ".",
          title: "AWT — Electronic Product Development", dark: "Switch to dark mode", light: "Switch to light mode" },
    pl: { missing: "Podaj imię i nazwisko, poprawny adres e-mail oraz opis projektu.",
          opened: "Powinien otworzyć się program pocztowy z gotową wiadomością. Jeśli nie, napisz na " + EMAIL + ".",
          title: "AWT — Tworzenie urządzeń elektronicznych", dark: "Włącz tryb ciemny", light: "Włącz tryb jasny" },
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const EN = {};
  nodes.forEach((n) => { EN[n.dataset.i18n] ??= n.textContent; });

  let lang = "en";
  function setLang(next) {
    lang = next === "pl" ? "pl" : "en";
    const dict = lang === "pl" ? PL : EN;
    nodes.forEach((n) => {
      const k = n.dataset.i18n;
      if (dict[k] != null) n.textContent = dict[k];
    });
    document.documentElement.lang = lang;
    document.title = MSG[lang].title;
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("awt-lang", lang); } catch {}
    note.textContent = "";
    updateThemeLabel();
  }

  const note = document.getElementById("form-note");

  // Theme: light / dark. Initial value is set inline in <head>; follows the OS until the user picks one.
  const root = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  function updateThemeLabel() {
    const dark = root.dataset.theme === "dark";
    themeBtn.setAttribute("aria-label", dark ? MSG[lang].light : MSG[lang].dark);
    themeBtn.title = themeBtn.getAttribute("aria-label");
  }
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("awt-theme", root.dataset.theme); } catch {}
    updateThemeLabel();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    let saved = null;
    try { saved = localStorage.getItem("awt-theme"); } catch {}
    if (!saved) { root.dataset.theme = e.matches ? "dark" : "light"; updateThemeLabel(); }
  });
  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));

  let initial = "en";
  try { initial = localStorage.getItem("awt-lang") || ""; } catch {}
  if (!initial) initial = (navigator.language || "").toLowerCase().startsWith("pl") ? "pl" : "en";
  setLang(initial);

  document.getElementById("year").textContent = new Date().getFullYear();

  // Contact form → opens the visitor's mail client with a prefilled message.
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const message = (fd.get("message") || "").toString().trim();
    const company = (fd.get("company") || "").toString().trim();
    const needs = fd.getAll("need").join(", ");

    const checks = [
      ["f-name", name.length > 0],
      ["f-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)],
      ["f-msg", message.length > 0],
    ];
    let ok = true;
    checks.forEach(([id, valid]) => {
      document.getElementById(id).closest(".field").classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { note.textContent = MSG[lang].missing; return; }

    const subject = `Quote request — ${company || name}${needs ? " (" + needs + ")" : ""}`;
    const body = `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nServices: ${needs || "-"}\n\n${message}\n`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = MSG[lang].opened;
  });
})();
