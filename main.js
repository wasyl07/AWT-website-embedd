// AWT website — language switch (EN/PL) and contact form.
(() => {
  const EMAIL = "awt-barlinek@proton.me";

  // English lives in the HTML; only Polish is stored here.
  const PL = {
    "skip": "Przejdź do treści",
    "brand": "Produkty elektroniczne",
    "nav.why": "Dlaczego AWT",
    "nav.services": "Usługi",
    "nav.projects": "Realizacje",
    "nav.process": "Jak pracujemy",
    "nav.faq": "FAQ",
    "nav.cta": "Zapytaj o wycenę",
    "hero.kicker": "Projektowanie i produkcja elektroniki · Polska",
    "hero.title": "Od pomysłu do gotowego urządzenia — z opieką także po wdrożeniu.",
    "hero.lede": "AWT realizuje projekty urządzeń elektronicznych kompleksowo. Zaczynamy od analizy potrzeb, następnie projektujemy, budujemy prototyp, testujemy i produkujemy, a po wprowadzeniu urządzenia na rynek zapewniamy jego aktualizacje i monitoring. Jeden partner na każdym etapie — bez konieczności koordynowania wielu dostawców.",
    "hero.cta": "Porozmawiajmy o projekcie",
    "hero.cta2": "Dowiedz się więcej",
    "lc.title": "Kompleksowa realizacja",
    "lc.1": "Analiza potrzeb",
    "lc.1d": "Wspólnie określamy wymagania",
    "lc.2": "Projekt",
    "lc.2d": "Koncepcja i założenia urządzenia",
    "lc.3": "Prototyp",
    "lc.3d": "Działający model do oceny",
    "lc.4": "Testy",
    "lc.4d": "Kontrola każdej sztuki przed wysyłką",
    "lc.5": "Produkcja",
    "lc.5d": "Gotowe urządzenia do wdrożenia",
    "lc.6": "Utrzymanie",
    "lc.6d": "Zdalne aktualizacje i monitoring",
    "c1.h": "Pełne prawa do projektu",
    "c1.p": "Kod źródłowy i dokumentacja przechodzą na własność klienta.",
    "c2.h": "Integracja wszystkich obszarów",
    "c2.p": "Elektronika, oprogramowanie, aplikacje i usługi online projektowane jako jeden spójny system.",
    "c3.h": "Udokumentowana jakość",
    "c3.p": "Każda sztuka przetestowana, każdy wynik zarejestrowany.",
    "c4.h": "Wsparcie po wdrożeniu",
    "c4.p": "Aktualizacje i utrzymanie dostępne jako usługa dodatkowa.",
    "trusted.h": "Zaufali nam",
    "why.eyebrow": "Dlaczego AWT",
    "why.title": "Budowa urządzenia to złożony proces. Upraszczamy go.",
    "why.intro": "Firmy planujące własne urządzenie najczęściej napotykają te same trudności. Oto jak je rozwiązujemy.",
    "w1.h": "„Mam pomysł, ale brakuje mi zespołu inżynierskiego.”",
    "w1.p": "Przeprowadzimy projekt od wstępnej koncepcji do działającego urządzenia. Specyfikacja techniczna nie jest wymagana — pomożemy ją opracować.",
    "w2.h": "„Muszę koordynować projektantów, producentów i dostawców IT.”",
    "w2.p": "Projekt, prototyp, testy, produkcję i wsparcie zapewnia jeden partner. Jedna osoba kontaktowa i jasna odpowiedzialność za całość.",
    "w3.h": "„Obawiam się, że wadliwe egzemplarze trafią do klientów.”",
    "w3.p": "Każda sztuka jest testowana przed wysyłką, a wynik archiwizowany — wiadomo dokładnie, co trafia do odbiorców.",
    "w4.h": "„Usunięcie błędu wymaga wycofania urządzeń z rynku.”",
    "w4.p": "Zdalne aktualizacje pozwalają usuwać błędy i dodawać funkcje w urządzeniach pracujących już u klientów — bezpiecznie i bez wizyt serwisowych.",
    "w5.h": "„Nie wiem, jak moje urządzenia sprawdzają się w eksploatacji.”",
    "w5.p": "Bieżące dane i powiadomienia pozwalają wykryć problem, zanim zgłosi go klient.",
    "w6.h": "„Nie chcę uzależniać się od jednego dostawcy.”",
    "w6.p": "Przekazujemy komplet dokumentacji i kodu źródłowego. Projekt można w każdej chwili kontynuować z innym wykonawcą.",
    "services.eyebrow": "Usługi",
    "services.title": "Zakres naszych usług.",
    "services.intro": "Oferujemy kompleksową realizację lub wsparcie na wybranym etapie. Każda usługa jest dostępna osobno, a razem obejmują całą drogę od pomysłu do urządzeń pracujących u klientów. Wszystkie obszary inżynierskie prowadzi jeden zespół, dlatego elektronika, oprogramowanie i usługi online od początku tworzą spójną całość.",
    "s1.title": "Projektowanie i rozwój",
    "s1.pitch": "Od pomysłu do działającego urządzenia.",
    "s1.text": "Projektujemy elektronikę wraz z oprogramowaniem urządzenia i budujemy prototypy do testów, prezentacji dla inwestorów lub pierwszych klientów. Mają Państwo własny zespół? Wesprzemy go w najbardziej wymagających zadaniach.",
    "s1.t1": "Od koncepcji do działającego prototypu",
    "s1.t2": "Projektowanie elektroniki",
    "s1.t3": "Oprogramowanie urządzenia",
    "s1.t4": "Łączność z telefonem, aplikacją i internetem",
    "s1.t5": "Wsparcie istniejącego zespołu",
    "s6.title": "Integracja podzespołów",
    "s6.pitch": "Wszystkie elementy urządzenia działające jako całość.",
    "s6.text": "Urządzenie składa się z wielu elementów — czujników, wyświetlaczy, modułów komunikacji bezprzewodowej. Zapewniamy ich bezproblemową współpracę: opracowujemy dedykowane rozwiązanie lub wdrażamy sprawdzone gotowe, w zależności od tego, co jest korzystniejsze pod względem czasu i kosztów.",
    "s6.o1": "Rozwiązanie dedykowane",
    "s6.o1d": "Dopasowane do konkretnego sprzętu, z pełnymi prawami do kodu po stronie klienta.",
    "s6.o2": "Sprawdzone rozwiązanie gotowe",
    "s6.o2d": "Dobieramy, nabywamy i wdrażamy istniejące rozwiązanie — szybciej i taniej.",
    "s6.t1": "Czujniki, wyświetlacze, komunikacja bezprzewodowa i inne",
    "s6.t2": "Kompletna dokumentacja",
    "s6.t3": "Weryfikacja na docelowym urządzeniu",
    "s2.title": "Testy",
    "s2.pitch": "Wykrywamy usterki, zanim zrobią to klienci.",
    "s2.text": "Testujemy każdą sztukę — niezależnie od tego, czy elektronikę wyprodukowaliśmy my, czy inny zakład — na stanowisku przygotowanym specjalnie dla danego produktu. Każdy egzemplarz otrzymuje zarejestrowany wynik, dzięki czemu wiadomo dokładnie, co trafia do wysyłki.",
    "s2.t1": "Kontrola każdej sztuki",
    "s2.t2": "Stanowisko testowe dla danego produktu",
    "s2.t3": "Elektronika od dowolnego producenta",
    "s2.t4": "Zarejestrowany wynik dla każdego egzemplarza",
    "s2.t5": "Testy trwałości",
    "s5.title": "Produkcja",
    "s5.pitch": "Od pierwszego prototypu do serii produkcyjnej.",
    "s5.text": "Realizujemy serie małe i średnie: zaopatrzenie w komponenty, montaż elektroniki, wgranie oprogramowania i testy końcowe. Klient otrzymuje gotowe urządzenia, przygotowane do montażu w produkcie końcowym.",
    "s5.t1": "Zaopatrzenie w komponenty",
    "s5.t2": "Montaż i wgranie oprogramowania",
    "s5.t3": "Serie małe i średnie",
    "s5.t4": "Dostawa gotowa do użycia",
    "s3.title": "Zdalne aktualizacje",
    "s3.pitch": "Rozwój urządzeń także po ich sprzedaży.",
    "s3.text": "Usuwanie błędów i dodawanie funkcji w urządzeniach pracujących już u klientów — bez wycofywania sprzętu i wizyt serwisowych. Aktualizacje są zabezpieczone, trafiają najpierw do ograniczonej grupy urządzeń, a w razie problemu są automatycznie wycofywane. Całą infrastrukturę obsługujemy po naszej stronie.",
    "s3.t1": "Bez wycofań z rynku i wizyt serwisowych",
    "s3.t2": "Zabezpieczone aktualizacje",
    "s3.t3": "Stopniowe wdrażanie",
    "s3.t4": "Automatyczne wycofanie nieudanej aktualizacji",
    "s3.t5": "Obsługa i utrzymanie po naszej stronie",
    "s4.title": "Monitoring urządzeń",
    "s4.pitch": "Pełny obraz pracy urządzeń.",
    "s4.text": "Stan wszystkich urządzeń w jednym miejscu, z powiadomieniami o sytuacjach wymagających reakcji. Widoki możemy przygotować dla działu technicznego, serwisu lub klientów końcowych.",
    "s4.t1": "Wszystkie urządzenia w jednym widoku",
    "s4.t2": "Powiadomienia, zanim problem zauważy klient",
    "s4.t3": "Widoki dla zespołu i klientów",
    "s4.t4": "Obsługa i utrzymanie po naszej stronie",
    "work.eyebrow": "Wybrane realizacje",
    "work.title": "Zrealizowane projekty.",
    "f.scope": "Zakres",
    "f.use": "Korzyść",
    "p1.kind": "Produkt własny · Stanowisko testowe",
    "p1.title": "ETS — autorskie stanowisko testowe",
    "p1.text": "Urządzenie do automatycznej kontroli elektroniki: przygotowuje każdą sztukę, przeprowadza sekwencję testów i raportuje wynik. Wykorzystujemy je w testach produkcyjnych dla klientów; skraca również czas opracowania i weryfikacji nowych urządzeń.",
    "p1.scope": "Elektronika, oprogramowanie, aplikacja komputerowa",
    "p1.use": "Szybkie i powtarzalne testy produktów",
    "p2.kind": "Urządzenia ubieralne",
    "p2.title": "Bezprzewodowy czujnik ruchu",
    "p2.text": "Miniaturowy czujnik z zasilaniem bateryjnym, który rejestruje ruch i przesyła dane bezprzewodowo do stacji bazowej, gdzie są prezentowane na wykresach. Obsługuje bezprzewodowe aktualizacje oprogramowania.",
    "p3.kind": "Drony",
    "p3.title": "Kontroler lotu drona",
    "p3.text": "Dedykowana elektronika i oprogramowanie umożliwiające autonomiczny lot i sterowanie dronem.",
    "p5.kind": "Automatyka przemysłowa",
    "p5.title": "Monitoring stanu maszyn",
    "p5.text": "System nadzorujący pracę maszyn przemysłowych, wcześnie wykrywający usterki i weryfikujący zmiany oprogramowania przed ich wdrożeniem na linii produkcyjnej.",
    "process.eyebrow": "Jak pracujemy",
    "process.title": "Przejrzysta współpraca na każdym etapie projektu.",
    "st1.title": "Bezpłatna konsultacja",
    "st1.text": "Wystarczy opis problemu, który chcą Państwo rozwiązać. Specyfikacja techniczna nie jest potrzebna — zadamy odpowiednie pytania.",
    "st2.title": "Konkretna oferta",
    "st2.text": "Pisemny plan z podziałem na etapy, harmonogramem i wyceną. Koszt jest znany przed rozpoczęciem prac.",
    "st3.title": "Przejrzysty postęp",
    "st3.text": "Regularne raporty i działający rezultat do oceny po każdym etapie.",
    "st4.title": "Przekazanie i wsparcie",
    "st4.text": "Przekazujemy komplet projektów, kodu źródłowego i dokumentacji. Możemy również przejąć dalsze utrzymanie i aktualizacje urządzeń.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Najczęściej zadawane pytania.",
    "q1": "Mam jedynie pomysł. Czy to wystarczy?",
    "a1": "Tak. Wiele projektów zaczyna się od szkicu lub krótkiego opisu. Pomagamy przekształcić go w jasne wymagania i plan działania, zanim rozpoczniemy prace.",
    "q2": "Czy możecie dołączyć do trwającego projektu?",
    "a2": "Tak. Możemy wesprzeć zespół w wybranych zadaniach lub przejąć pozostały zakres prac.",
    "q3": "Kto jest właścicielem wyników prac?",
    "a3": "Klient. Przekazujemy cały kod źródłowy, projekty i dokumentację.",
    "q4": "Jak ustalana jest cena?",
    "a4": "Po pierwszej rozmowie przygotowujemy pisemną ofertę: stałą cenę za każdy etap lub rozliczenie czasowe, jeśli zakres nie jest jeszcze w pełni określony.",
    "q5": "Co dzieje się po wprowadzeniu produktu na rynek?",
    "a5": "Możemy prowadzić system aktualizacji i monitoringu oraz dalej rozwijać oprogramowanie urządzenia.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Porozmawiajmy o Państwa projekcie.",
    "contact.text": "Prosimy o krótki opis problemu lub produktu oraz etapu, na którym znajduje się projekt — ogólny opis w zupełności wystarczy. Odpowiadamy w ciągu dwóch dni roboczych, a pierwsza konsultacja jest bezpłatna.",
    "contact.email": "E-mail",
    "contact.phone": "Telefon",
    "contact.loc": "Obszar działania",
    "contact.locv": "Cała Europa",
    "contact.langs": "Języki",
    "contact.langsv": "polski, angielski",
    "form.name": "Imię i nazwisko",
    "form.company": "Firma",
    "form.email": "E-mail",
    "form.need": "Zakres wsparcia",
    "form.c0": "Kompleksowa realizacja",
    "form.c1": "Projektowanie i rozwój",
    "form.c6": "Integracja podzespołów",
    "form.c2": "Testy",
    "form.c5": "Produkcja",
    "form.c3": "Zdalne aktualizacje",
    "form.c4": "Monitoring",
    "form.msg": "Jaki problem chcą Państwo rozwiązać?",
    "form.send": "Wyślij zapytanie",
    "footer.about": "Kompleksowa realizacja urządzeń elektronicznych — od analizy potrzeb po niezawodną pracę u klientów.",
    "footer.loc": "Cała Europa",
    "footer.top": "Do góry",
    "footer.privacy": "Polityka prywatności",
  };

  const MSG = {
    en: { missing: "Please provide your name, a valid email address and a project description.",
          opened: "Your email app should open with the message ready. If it doesn't, write to " + EMAIL + ".",
          title: "AWT — Electronic Product Development", dark: "Switch to dark mode", light: "Switch to light mode" },
    pl: { missing: "Prosimy podać imię i nazwisko, poprawny adres e-mail oraz opis projektu.",
          opened: "Program pocztowy powinien otworzyć się z gotową wiadomością. Jeśli tak się nie stało, prosimy o kontakt: " + EMAIL + ".",
          title: "AWT — Projektowanie urządzeń elektronicznych", dark: "Włącz tryb ciemny", light: "Włącz tryb jasny" },
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

  // Theme: light / dark. Light by default (set inline in <head>); dark only if the visitor picks it.
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
