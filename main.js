// AWT website — language switch (EN/PL) and contact form.
(() => {
  const EMAIL = "awt-barlinek@proton.me";

  // English lives in the HTML; only Polish is stored here.
  const PL = {
    "skip": "Przejdź do treści",
    "brand": "Systemy wbudowane",
    "nav.services": "Usługi",
    "nav.projects": "Realizacje",
    "nav.tech": "Technologie",
    "nav.process": "Współpraca",
    "nav.cta": "Zapytaj o wycenę",
    "hero.kicker": "Inżynieria systemów wbudowanych · Polska",
    "hero.title": "Projektowanie elektroniki, produkcja i wsparcie urządzeń w terenie — u jednego partnera.",
    "hero.lede": "AWT projektuje sprzęt i oprogramowanie wbudowane, produkuje i testuje je seryjnie oraz utrzymuje infrastrukturę, dzięki której urządzenia po wdrożeniu otrzymują aktualizacje i przesyłają dane.",
    "hero.cta": "Zapytaj o wycenę",
    "hero.cta2": "Nasze usługi",
    "lc.title": "Pełny cykl życia produktu",
    "lc.1": "Projekt",
    "lc.1d": "Sprzęt, firmware i sterowniki",
    "lc.2": "Produkcja",
    "lc.2d": "Montaż i serie produkcyjne",
    "lc.3": "Testy",
    "lc.3d": "Test końcowy każdego egzemplarza",
    "lc.4": "Aktualizacje",
    "lc.4d": "Hostowana dystrybucja firmware'u OTA",
    "lc.5": "Monitoring",
    "lc.5d": "Telemetria floty i alerty",
    "c1.h": "Pełne przeniesienie praw",
    "c1.p": "Kod źródłowy, schematy i pliki projektowe należą do klienta.",
    "c2.h": "Udokumentowane testy",
    "c2.p": "Każdy wyprodukowany egzemplarz jest testowany, a wynik zapisywany.",
    "c3.h": "Etapy w stałej cenie",
    "c3.p": "Pisemny zakres, etapy i koszt ustalone przed rozpoczęciem prac.",
    "c4.h": "Długoterminowe wsparcie",
    "c4.p": "Hosting, utrzymanie i aktualizacje firmware'u po dostawie.",
    "services.eyebrow": "Usługi",
    "services.title": "Inżynieria, produkcja i utrzymanie produktów elektronicznych.",
    "services.intro": "Każdą usługę można zamówić osobno lub połączyć, aby przeprowadzić produkt od koncepcji do utrzymywanej floty urządzeń w terenie.",
    "s1.title": "Systemy wbudowane",
    "s1.text": "Oprogramowanie na mikrokontrolery i embedded Linux, projektowanie elektroniki i uruchamianie płytek. Kompletny rozwój produktu od koncepcji do zweryfikowanego prototypu lub specjalistyczne wsparcie istniejącego zespołu.",
    "s1.t1": "Firmware w C, C++ i Rust",
    "s1.t2": "Zephyr, FreeRTOS, bare-metal",
    "s1.t3": "Projekt schematu i PCB",
    "s1.t4": "Uruchamianie płytek",
    "s1.t5": "BLE, CAN i interfejsy przewodowe",
    "s1.t6": "Embedded Linux (Buildroot)",
    "s6.title": "Sterowniki urządzeń",
    "s6.text": "Sterowniki do czujników, wyświetlaczy, modułów radiowych, pamięci i innych peryferiów — pisane na zamówienie pod Twój sprzęt i platformę lub pozyskiwane z istniejącej komercyjnej albo otwartej biblioteki sterowników i integrowane z Twoim projektem. W obu przypadkach otrzymujesz dokumentację, przykładową aplikację i testy wykonane na rzeczywistym sprzęcie.",
    "s6.o1": "Rozwój na zamówienie",
    "s6.o1d": "Nowy sterownik dla Twojego układu, magistrali i systemu RTOS, z pełnymi prawami do kodu źródłowego.",
    "s6.o2": "Z gotowej biblioteki",
    "s6.o2d": "Dobieramy, kupujemy i integrujemy sprawdzony gotowy sterownik — krótszy czas realizacji i niższy koszt.",
    "s6.t1": "Czujniki, wyświetlacze, pamięci, radio",
    "s6.t2": "I²C, SPI, UART, CAN, USB",
    "s6.t3": "Zephyr, FreeRTOS, bare-metal, Linux",
    "s6.t4": "Dokumentacja i przykładowy kod",
    "s6.t5": "Testy na rzeczywistym sprzęcie",
    "form.c6": "Sterowniki",
    "s5.title": "Montaż i serie produkcyjne",
    "s5.text": "Produkcja małych i średnich serii: zakup komponentów, montaż PCB, programowanie i testy. Egzemplarze dostarczane są jako gotowe, sprawdzone i przygotowane do końcowej integracji.",
    "s5.t1": "Zakup komponentów",
    "s5.t2": "Montaż PCB",
    "s5.t3": "Od prototypu do serii",
    "s5.t4": "Zaprogramowane, przetestowane egzemplarze",
    "s2.title": "Testowanie sprzętu i produkcji",
    "s2.text": "Testowanie płytek po produkcji — wykonanych przez AWT lub przez Twojego podwykonawcę. Dedykowane przyrządy i oprogramowanie programują każdy egzemplarz, sprawdzają jego wejścia, wyjścia i interfejsy oraz zapisują wynik testu.",
    "s2.t0": "Testy płytek po produkcji",
    "s2.t1": "Przyrządy z pinami sprężynowymi",
    "s2.t2": "Automatyczne oprogramowanie testowe",
    "s2.t3": "Programowanie na końcu linii",
    "s2.t4": "Walidacja i testy obciążeniowe",
    "s3.title": "Serwer aktualizacji (OTA)",
    "s3.text": "Infrastruktura dystrybucji firmware'u dla urządzeń w terenie wraz z bezpiecznym bootloaderem po stronie urządzenia. Wydania są podpisywane, wdrażane etapami i automatycznie wycofywane w razie nieudanej aktualizacji.",
    "s3.t1": "Podpisane obrazy (MCUboot)",
    "s3.t2": "Wdrażanie etapowe",
    "s3.t3": "Automatyczne wycofanie",
    "s3.t4": "Hosting i utrzymanie",
    "s4.title": "Hosting telemetrii",
    "s4.text": "Zbieranie, przechowywanie i wizualizacja danych z floty: odczyty czujników, stan urządzeń, logi i alerty. Dashboardy dla zespołu inżynierskiego, serwisu lub klientów końcowych.",
    "s4.t1": "Odbiór danych przez MQTT / HTTP",
    "s4.t2": "Baza szeregów czasowych",
    "s4.t3": "Dashboardy Grafana",
    "s4.t4": "Alerty",
    "work.eyebrow": "Wybrane realizacje",
    "work.title": "Zrealizowane projekty inżynierskie.",
    "f.scope": "Zakres",
    "f.tech": "Technologie",
    "p1.kind": "Produkt własny · Sprzęt testowy",
    "p1.title": "ETS — Embedded Testing Solution",
    "p1.text": "Stanowisko testowe z pinami sprężynowymi i oprogramowaniem desktopowym do tworzenia firmware'u sterowanego testami oraz testów produkcyjnych. Programuje testowaną płytkę, steruje jej wejściami i wyjściami, wykonuje skrypty testowe, zawiera 8-kanałowy analizator stanów logicznych i konsolę szeregową. Na tej platformie AWT realizuje usługi testów produkcyjnych.",
    "p1.scope": "Sprzęt, firmware, aplikacja desktopowa",
    "p2.kind": "Urządzenia noszone",
    "p2.title": "Czujnik ruchu BLE z aktualizacjami OTA",
    "p2.text": "Firmware zasilanego bateryjnie czujnika IMU z własnym protokołem BLE, podpisanymi aktualizacjami bezprzewodowymi i hubem na Linuksie do zbierania danych i wykresów.",
    "p3.kind": "Bezzałogowe statki powietrzne",
    "p3.title": "Kontroler lotu",
    "p3.text": "Nakładka sprzętowa na BeagleBone oraz własny obraz Linuksa z Buildroot uruchamiający ArduPilota na procesorze AM335x.",
    "p4.kind": "Pojazdy elektryczne",
    "p4.title": "Elektronika pojazdu",
    "p4.text": "Zarządzanie baterią, układy bezpieczeństwa, dystrybucja zasilania, deska rozdzielcza i moduły telemetrii bolidu elektrycznego — sprzęt i firmware STM32 w sieci CAN.",
    "p5.kind": "Automatyka przemysłowa",
    "p5.title": "Monitoring stanu maszyn",
    "p5.text": "Konteneryzowany system zbierający zużycie zasobów i logi z przemysłowych maszyn linuksowych, wykrywający usterki sprzętowe i weryfikujący zmiany przed wdrożeniem produkcyjnym.",
    "tech.eyebrow": "Technologie",
    "tech.title": "Platformy i narzędzia, z którymi pracujemy.",
    "tech.mcu": "Mikrokontrolery",
    "tech.mpu": "Procesory aplikacyjne",
    "tech.rtos": "Systemy operacyjne",
    "tech.lang": "Języki",
    "tech.bus": "Interfejsy",
    "tech.eda": "Projektowanie elektroniki",
    "tech.infra": "Infrastruktura",
    "process.eyebrow": "Współpraca",
    "process.title": "Określony proces od pierwszego kontaktu do przekazania.",
    "st1.title": "Konsultacja",
    "st1.text": "Bezpłatna rozmowa wstępna: wymagania, dotychczasowe prace i ograniczenia.",
    "st2.title": "Oferta",
    "st2.text": "Pisemny zakres z etapami, harmonogramem i kosztem — stała cena za etap lub rozliczenie godzinowe.",
    "st3.title": "Realizacja",
    "st3.text": "Regularne raporty postępu i działający, testowalny rezultat na każdym etapie.",
    "st4.title": "Przekazanie i wsparcie",
    "st4.text": "Pełne przekazanie kodu, plików projektowych i dokumentacji, z opcjonalnym hostingiem i utrzymaniem.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Zapytaj o wycenę.",
    "contact.text": "Opisz urządzenie, obecny etap projektu i zakres potrzebnego wsparcia. Odpowiadamy w ciągu dwóch dni roboczych.",
    "contact.email": "E-mail",
    "contact.phone": "Telefon",
    "contact.loc": "Lokalizacja",
    "contact.locv": "Barlinek, Polska · projekty w całej Europie",
    "contact.langs": "Języki",
    "contact.langsv": "polski, angielski",
    "form.name": "Imię i nazwisko",
    "form.company": "Firma",
    "form.email": "Służbowy e-mail",
    "form.need": "Interesujące usługi",
    "form.c1": "Rozwój",
    "form.c5": "Produkcja",
    "form.c2": "Testy",
    "form.c3": "Aktualizacje OTA",
    "form.c4": "Telemetria",
    "form.msg": "Opis projektu",
    "form.send": "Wyślij zapytanie",
    "footer.about": "Inżynieria systemów wbudowanych: rozwój, sterowniki, produkcja, testy, aktualizacje OTA i telemetria.",
    "footer.loc": "Barlinek, Polska",
    "footer.top": "Do góry",
  };

  const MSG = {
    en: { missing: "Please provide your name, a valid email address and a project description.",
          opened: "Your email app should open with the message ready. If it doesn't, write to " + EMAIL + ".",
          title: "AWT — Embedded Systems Engineering", dark: "Switch to dark mode", light: "Switch to light mode" },
    pl: { missing: "Podaj imię i nazwisko, poprawny adres e-mail oraz opis projektu.",
          opened: "Powinien otworzyć się program pocztowy z gotową wiadomością. Jeśli nie, napisz na " + EMAIL + ".",
          title: "AWT — Inżynieria systemów wbudowanych", dark: "Włącz tryb ciemny", light: "Włącz tryb jasny" },
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
