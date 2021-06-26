const pitanja = [
    {
        id: 1,
        pitanje: "Ako je u datoteci Startup.cs ASP.NET Core aplikacije u postupku Configure definirana sljedeća ruta: \n \n App.UseMvc(routes => { \n \t \t Routes.MapRoute{ \n \t \t \t Name:“default“, \n \t \t \t Template: „{controller=Home}/{action=Index}/{id}“); \n \t \t } \n }; \n Tada adresa /Mjesto/?page=7 odgovara:",
            
    
        odgovori: [
            {
                odgovor: "postupku public ActionResult Index(int page) u datoteci Controllers/MjestoControler.cs",
                tocan: true
            },
            {
                odgovor: "postupku private Index(int page) u datoteci Controllers/MjestoControler.cs",
                tocan: false
            },
            {
                odgovor: "postupku rute u datoteci Name",
                tocan: false
            },
            {
                odgovor: "postupku public ActionResult Index(float page) u datoteci rute",
                tocan: false
            },
            {
                odgovor: "postupku private Index(float page) u datoteci Controllers/MjestoControler.cs",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 2,
        pitanje: "Što je od navedenog istina za zahtjeve?",
        odgovori: [
            {
                odgovor: "Usmjeriti se na ono što je potrebno obaviti,a ne na način realizacije.",
                tocan: true
            },
            {
                odgovor: "Agilni razvojni proces",
                tocan: false
            },
            {
                odgovor: "String nije isto što i polje znakova(alias za char[]).",
                tocan: false
            },
            {
                odgovor: "Usmjeriti se na ono što se ne treba obaviti.",
                tocan: false
            },
            {
                odgovor: "Specifikacija zahtjeva",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 3,
        pitanje: "Ide neka petlja nisam uslikao \n {  i.Test(), \n ((B)i).Test(); \n B b = i; \n b.Test(); \n }}",
        odgovori: [
            {
                odgovor: "Pozdrav iz I \n Pozdrav iz B \n Pozdrav iz B",
                tocan: true
            },
            {
                odgovor: "Pozdrav iz B \n Pozdrav iz I \n Pozdrav iz B",
                tocan: false
            },
            {
                odgovor: "Pozdrav iz B \n Pozdrav iz B \n Pozdrav iz I",
                tocan: false
            },
            {
                odgovor: "Pozdrav iz B \n Pozdrav iz I \n Pozdrav iz I",
                tocan: false
            },
            {
                odgovor: "Pozdrav iz I \n Pozdrav iz B \n Pozdrav iz I",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 4,
        pitanje: "Prilikom upravljanja zahtjeva o usvajanju zahtjeva i postavljanju prioriteta i rokova odlučuje:",
        odgovori: [
            {
                odgovor: "Odbor za promjene(Change Control Board)",
                tocan: true
            },
            {
                odgovor: "Ofenzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Specifikacija zahtjeva",
                tocan: false
            },
            {
                odgovor: "Hibridna aplikacija",
                tocan: false
            },
            {
                odgovor: "ViewData i/ili ViewBag",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 5,
        pitanje: "Poredajte razine važnosti zapisa od najmanje prema najvećoj:",
        odgovori: [
            {
                odgovor: "Trace<Debug<Information<Warning<Error<Critical",
                tocan: true
            },
            {
                odgovor: "Information<Trace<Debug<Warning<Error<Critical",
                tocan: false
            },
            {
                odgovor: "Debug<Trace<Information<Warning<Error<Critical",
                tocan: false
            },
            {
                odgovor: "Debug<Information<Trace<Warning<Error<Critical",
                tocan: false
            },
            {
                odgovor: "Trace<Information<Warning<Debug<Error<Critical",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 6,
        pitanje: "Tehnika programiranja čija je ideja učiniti pogreške u fazi razvoja očitima da ih je nemoguće zanemariti,naziva se:",
        odgovori: [
            {
                odgovor: "Ofenzivno programiranje",
                tocan: true
            },
            {
                odgovor: "Specifikacija zahtjeva",
                tocan: false
            },
            {
                odgovor: "Defanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Planiranje",
                tocan: false
            },
            {
                odgovor: "Elaboracija",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 7,
        pitanje: "Fazno uvođenje novog sustava u primjenu ima:",
        odgovori: [
            {
                odgovor: "Srednji rizik, srednji trošak i dugo trajanje",
                tocan: true
            },
            {
                odgovor: "Velik rizik, visok trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "Nizak rizik, visok trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "Srednji rizik, visok trošak i kratko trajanje",
                tocan: false
            },
            {
                odgovor: "Srednji rizik, srednji trošak i kratko trajanje",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 8,
        pitanje: "Koja od navedenih tvrdnji nije istinita?",
        odgovori: [
            {
                odgovor: "String je isto što i polje znakova(alias za char[]).",
                tocan: true
            },
            {
                odgovor: "Sponzor projekta je osoba ili grupa koja osigurava resurse za projekt.",
                tocan: false
            },
            {
                odgovor: "Poslovni zahtjevi odgovaraju na pitanje zašto.",
                tocan: false
            },
            {
                odgovor: "Funkcionalni zahtjevi odgovaraju na pitanje što",
                tocan: false
            },
            {
                odgovor: " WSDL označava XML shemu za opis web servisa.",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 9,
        pitanje: "Verzija konfiguracije koja predstavlja alternativu originalnoj verziji i živi paralelno snjom naziva se:",
        odgovori: [
            {
                odgovor: "Varijanta",
                tocan: true
            },
            {
                odgovor: "Kovarijanta",
                tocan: false
            },
            {
                odgovor: "Elaboracija",
                tocan: false
            },
            {
                odgovor: "Prevencija",
                tocan: false
            },
            {
                odgovor: "Autentičnost",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 10,
        pitanje: "????vjv dobra petlja i odg nisam siguran za pitanje????? Ako je SifArtikla primarni ključ za tablicu Artikl te ako prije izvođenja programskog odsječka u tablici Artikl nije bilo artikala sa šiframa 0-5,izvođenjem sljedećeg programskog odsječka broj zapisa u tablici Artikl povećat će se za? \n \n For(int i=1; i<10; i++) \n { using(var context = new FirmaContext()) \n { \n \t Artikl artikl = new Artikl \n {		SifArtikla = i/2,  CijArtikla= 10m, \n \t \t JedMjere= „kom“,  NazArtikla= i.ToString() \n } \n Context.Artikl.Add(artikl); \n }; \n Context.SaveChanges(); \n } \n \n Broj zapisa u tablici Artikl povećat će se za",
        odgovori: [
            {
                odgovor: "0",
                tocan: true
            },
            {
                odgovor: "1",
                tocan: false
            },
            {
                odgovor: "10",
                tocan: false
            },
            {
                odgovor: "n/2",
                tocan: false
            },
            {
                odgovor: "1/2",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 11,
        pitanje: "U planu projekta vrijedi sljedeća formula",
        odgovori: [
            {
                odgovor: "Posao = Trajanje * Jedinice(Work=Duration*Units)",
                tocan: true
            },
            {
                odgovor: "Posao = Trajanje / Jedinice(Work=Duration/Units)",
                tocan: false
            },
            {
                odgovor: "Trajanje = Jedinice / Posao(Duration=Units/Work)",
                tocan: false
            },
            {
                odgovor: "Trajanje = Posao * Jedinice(Duration=Work*Units)",
                tocan: false
            },
            {
                odgovor: "Jedinice = Trajanje / Posao(Units=Duration/Work)",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 12,
        pitanje: "Ako WebApi(REST) servis uspješno obriše podatak korisniku će se vratiti statusna poruka čiji je statusni kod:",
        odgovori: [
            {
                odgovor: "204 NO CONTENT",
                tocan: true
            },
            {
                odgovor: "404 NOT FOUND",
                tocan: false
            },
            {
                odgovor: "410 GONE",
                tocan: false
            },
            {
                odgovor: "205 NO CONTENT",
                tocan: false
            },
            {
                odgovor: "301 MOVED PERMANENTLY",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 13,
        pitanje: "Neka petlja o osobi:",
        odgovori: [
            {
                odgovor: "public partial class Osoba{ \n ... \n Public Parner IdOsobeNavigation { get; set; } \n }",
                tocan: true
            },
            {
                odgovor: "private partial class Osoba{ \n ... \n Public Parner IdOsobeNavigation { get; set; } \n }",
                tocan: false
            },
            {
                odgovor: "public partial class Osoba{ \n ... \n Public Parner IdOsobeNavigation { get;} \n }",
                tocan: false
            },
            {
                odgovor: "public partial class Osoba{ \n ... \n Public Parner Id { get; set; } \n }",
                tocan: false
            },
            {
                odgovor: "public partial class Osoba{ \n ... \n Public Parner IdOsobeNavigation { null } \n }",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 14,
        pitanje: "Što od navedenog nije faza testiranja:",
        odgovori: [
            {
                odgovor: "Testiranje autentičnosti",
                tocan: true
            },
            {
                odgovor: "Integracijski testiranje",
                tocan: false
            },
            {
                odgovor: "Test prihvatljivosti",
                tocan: false
            },
            {
                odgovor: "Testiranje jedinica",
                tocan: false
            },
            {
                odgovor: "Test sustava",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 15,
        pitanje: "Koje vrste projektnih zadataka postoje?",
        odgovori: [
            {
                odgovor: "Primitivni, skupni i prekretnice",
                tocan: true
            },
            {
                odgovor: "Agilni, skupni i prekretnice",
                tocan: false
            },
            {
                odgovor: "Primitivni, agilni i skupni",
                tocan: false
            },
            {
                odgovor: "Agilni, defanzifni i primitivni",
                tocan: false
            },
            {
                odgovor: "Skupni, defazivni i prekretnice",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 16,
        pitanje: "Ekstremno programiranje je:",
        odgovori: [
            {
                odgovor: "Agilni razvojni proces",
                tocan: true
            },
            {
                odgovor: "Adaptivni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Defazivni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Ofanzivni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Primitivni razvojni proces",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 17,
        pitanje: "Nadjačanom članu Postupak() razreda roditelja pristupa se naredbom:",
        odgovori: [
            {
                odgovor: "base.Postupak();",
                tocan: true
            },
            {
                odgovor: "screen.Postupak()",
                tocan: false
            },
            {
                odgovor: "this.Postupak()",
                tocan: false
            },
            {
                odgovor: "get.Postupak()",
                tocan: false
            },
            {
                odgovor: "set.Postupak()",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 18,
        pitanje: "U koju vrstu održavanja spada poboljšanje perfomansi?",
        odgovori: [
            {
                odgovor: "Adaptivno",
                tocan: true
            },
            {
                odgovor: "Defanzivno",
                tocan: false
            },
            {
                odgovor: "Oblikovani",
                tocan: false
            },
            {
                odgovor: "Beta testiranje",
                tocan: false
            },
            {
                odgovor: "Using",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 19,
        pitanje: "U kojoj fazi životnog ciklusa programske potpore se razvija specifikacija zahtjeva?",
        odgovori: [
            {
                odgovor: "Analiza",
                tocan: true
            },
            {
                odgovor: "Testna faza",
                tocan: false
            },
            {
                odgovor: "Proces",
                tocan: false
            },
            {
                odgovor: "Eksperiment",
                tocan: false
            },
            {
                odgovor: "Autentifikacija",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 20,
        pitanje: "Razred StringBuilder predstavlja:",
        odgovori: [
            {
                odgovor: "Promijenjiv niz znakova",
                tocan: true
            },
            {
                odgovor: "Specifikaciju zahtjeva",
                tocan: false
            },
            {
                odgovor: "Query string",
                tocan: false
            },
            {
                odgovor: "Planiranje",
                tocan: false
            },
            {
                odgovor: "Strukturu",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 21,
        pitanje: "Strukturirani dokument s detaljnim opisom očekivanog ponašanja sustava namjenjen ugovarateljima i izvoditeljima razvoja a koji predstavlja nezavisan pogled na sustav se naziva:",
        odgovori: [
            {
                odgovor: "Specifikaciju zahtjeva",
                tocan: true
            },
            {
                odgovor: "Promijenjiv niz znakova",
                tocan: false
            },
            {
                odgovor: "Query string",
                tocan: false
            },
            {
                odgovor: "Planiranje",
                tocan: false
            },
            {
                odgovor: "Strukturu",
                tocan: false
            }
        ],
        kategorija: 1

    },
    {
        id: 22,
        pitanje: "U kojoj fazi životnog ciklusa programske potpore se modeliraju procesi?",
        odgovori: [
            {
                odgovor: "Analiza",
                tocan: true
            },
            {
                odgovor: "Testna faza",
                tocan: false
            },
            {
                odgovor: "Proces",
                tocan: false
            },
            {
                odgovor: "Eksperiment",
                tocan: false
            },
            {
                odgovor: "Autentifikacija",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 23,
        pitanje: "Parovi oblika naziv=vrijednost navedeni iza upitnika u adresi neke stranice npr. p=1&q=7&user=student u adresi  \n http://apps.zpr.fer.hr/myapp/run?p=1&q=7&user=student \n Tvore pojam koji se naziva: ",
        odgovori: [
            {
                odgovor: "Query string",
                tocan: true
            },
            {
                odgovor: "Link (poveznica)",
                tocan: false
            },
            {
                odgovor: "Struktua",
                tocan: false
            },
            {
                odgovor: "Defanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Autentičnost",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 24,
        pitanje: "Koja od navedenih formi omogućava prihvat datoteke",
        odgovori: [
            {
                odgovor: "<form asp-action=“Edit“ method=“post“ enctype=“multipart/form-data“>",
                tocan: true
            },
            {
                odgovor: "<form asp-action=“post“ method=“Edit“ enctype=“multipart/form-data“>",
                tocan: false
            },
            {
                odgovor: "<form asp-action=“multipart/form-data“ method=“post“ enctype=“Edit“>",
                tocan: false
            },
            {
                odgovor: "<form asp-action=“Edit“ method=“multipart/form-data“ enctype=“post“>",
                tocan: false
            },
            {
                odgovor: "<form asp-action=“multipart/form-data“ method=“post“ enctype=“Edit“>",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 25,
        pitanje: "Tehnika programiranja čija je ideja da će potprogram s neispravnim podacima „opstati“ i onda kada su pogreškom pozivajuće procedure predani neispravni argumenti,naziva se:",
        odgovori: [
            {
                odgovor: "Defanzivno programiranje",
                tocan: true
            },
            {
                odgovor: "Apstrakcija",
                tocan: false
            },
            {
                odgovor: "Ofanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Autentifikacija",
                tocan: false
            },
            {
                odgovor: "Nefunkcionalnost",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 26,
        pitanje: "Ako se unutar pogleda u MVC aplikaciji kao model koristi razred Mjesto koji ima svojstvo Naziv čija se vrijednost ispituje unutar pogleda,kako izgleda odsječak takvog pogleda?",
        odgovori: [
            {
                odgovor: "@model Mjesto... \n @Model Naziv",
                tocan: true
            },
            {
                odgovor: "@Mjesto... \n @Naziv",
                tocan: false
            },
            {
                odgovor: "@model Mjesto && @model Naziv",
                tocan: false
            },
            {
                odgovor: "@Mjesto... \n @Naziv",
                tocan: false
            },
            {
                odgovor: "@model Mjesto || @model Naziv",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 27,
        pitanje: "Što će ispasti izvođenjem sljedećeg programskog odsječka? \n \n Int a=0,b=0,c; \n Try{ \n \t Try{ \n \t Console.Write(„T1 “); \n \t c=b/a; \n } \n Finally{ \n \t Console.Write(„F1 “); \n } \n } \n Catch(Exception exc2){ \n Console.Write(„E2 “); \n } \n Finally{ \n Console.Write(„F2 “); \n }",
        odgovori: [
            {
                odgovor: "T1 F1 E2 F2",
                tocan: true
            },
            {
                odgovor: "F1 E2 F2 T1",
                tocan: false
            },
            {
                odgovor: "E2 F2 T1 F1",
                tocan: false
            },
            {
                odgovor: "F2 T1 F1 E2",
                tocan: false
            },
            {
                odgovor: "T1 E2 F1 F2",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 28,
        pitanje: "Ako u konfiguracijskoj datoteci za klijentske biblioteke(npr. bower.json ili packages.npm) želimo u budućnosti noviju verziju jQueryja sve dok ona oblika 3.minor.patch,a u trenutku postoji verzija 3.3.1 napisat cemo: ",
        odgovori: [
            {
                odgovor: "{ \n \t ... \n \t „jQuery“ : „^3.3.1“, \n \t ... \n }",
                tocan: true
            },
            {
                odgovor: "{ \n \t ... \n \t „jQuery“ > „^3.3.1“, \n \t ... \n }",
                tocan: false
            },
            {
                odgovor: "{ \n \t ... \n \t „jQuery -> ^3.3.1“, \n \t ... \n }",
                tocan: false
            },
            {
                odgovor: "{ \n \t ... \n \t „jQuery“ >> „^3.3.1“, \n \t ... \n }",
                tocan: false
            },
            {
                odgovor: "{ \n \t ... \n \t „jQuery : ^3.3.1“, \n \t ... \n }",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 29,
        pitanje: "Operator koji stvara novu instancu razreda je:",
        odgovori: [
            {
                odgovor: "new",
                tocan: true
            },
            {
                odgovor: "false",
                tocan: false
            },
            {
                odgovor: "base",
                tocan: false
            },
            {
                odgovor: "struct",
                tocan: false
            },
            {
                odgovor: "int",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 30,
        pitanje: "Koji je od navedenih tipova podataka vrijednosni tip(value-type)?",
        odgovori: [
            {
                odgovor: "struct",
                tocan: true
            },
            {
                odgovor: "base",
                tocan: false
            },
            {
                odgovor: "new",
                tocan: false
            },
            {
                odgovor: "set",
                tocan: false
            },
            {
                odgovor: "get",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 31,
        pitanje: "U kojoj fazi životnog ciklusa programske potpore se vrši analiza izvedivosti?",
        odgovori: [
            {
                odgovor: "Planiranje",
                tocan: true
            },
            {
                odgovor: "Procesiranje",
                tocan: false
            },
            {
                odgovor: "Razvijanje",
                tocan: false
            },
            {
                odgovor: "Elaboriranje",
                tocan: false
            },
            {
                odgovor: "Verificiranje",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 32,
        pitanje: "Ako forma izgleda nalik sljedećoj: \n \n <form action=“Edit“ method=“post“> \n \t <input name=“broj“ valuse=“1“/> \n \t <input name=“broj“ valuse=“2“/> \n \t <input name=“broj“ valuse=“3“/> \n </form> \n Tada za prihvat vrijednost 1,2 i 3 akcija na upravljaču treba biti definirana za sljedeći način: ",
        odgovori: [
            {
                odgovor: "public IActionResult Edit(string[] broj) {  ...  }",
                tocan: true
            },
            {
                odgovor: "getSelection(string[] broj) {  ...  }",
                tocan: false
            },
            {
                odgovor: "onClick(string[] broj) {  ...  }",
                tocan: false
            },
            {
                odgovor: "setInterval(string[] broj) {  ...  }",
                tocan: false
            },
            {
                odgovor: "public departFocus(string[] broj) {  ...  }",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 33,
        pitanje: "Što je od navedenog istina za zahtjeve?",
        odgovori: [
            {
                odgovor: "Usmjeriti se na ono što je potrebno obaviti,a ne na način realizacije.",
                tocan: true
            },
            {
                odgovor: "Usmjeriti se na ono što je potrebtno obaviti i na način realizacije.",
                tocan: false
            },
            {
                odgovor: "Usmjeriti se na način realizacije, a ne na ono što je potrebno obaviti.",
                tocan: false
            },
            {
                odgovor: "Nije potrebno nikakvo usmjeravanje u cilju obavljanja i realizacije",
                tocan: false
            },
            {
                odgovor: "Usmjeriti se na način realizacije i ako je nužno, na ono što je potrebno obaviti.",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 34,
        pitanje: "Ne znam točno pitanje ugl odgovor je:",
        odgovori: [
            {
                odgovor: "private static IserviceProvider serviceProvider; \n Public static void Main(string[] args){ \n serviceProvider = new ServiceCollection() \n \t .AddSingleton<IconnectionStringTool,ConnectionStringTool>() \n \t .AddTransient<FirmaContext, FirmaContext>() \n \t .BuildServiceProvider(); \n ... \n FirmaContext ctx = serviceProvider.GetService<FirmaContext>();",
                tocan: true
            },
            {
                odgovor: "private static Main serviceProvider; \n Public static void Main(string[] args){ \n serviceProvider = new ServiceCollection() \n \t .AddSingleton<IconnectionStringTool,ConnectionStringTool>() \n \t .AddTransient<FirmaContext, FirmaContext>() \n \t .BuildServiceProvider(); \n ... \n FirmaContext ctx = serviceProvider.GetService<FirmaContext>();",
                tocan: false
            },
            {
                odgovor: "public void IserviceProvider serviceProvider; \n Public static void Main(string[] args){ \n serviceProvider = new ServiceCollection() \n \t .AddSingleton<IconnectionStringTool,ConnectionStringTool>() \n \t .AddTransient<FirmaContext, FirmaContext>() \n \t .BuildServiceProvider(); \n ... \n FirmaContext ctx = serviceProvider.GetService<FirmaContext>();",
                tocan: false
            },
            {
                odgovor: "private int IserviceProvider serviceProvider; \n Public static void Main(string[] args){ \n serviceProvider = new ServiceCollection() \n \t .AddSingleton<IconnectionStringTool,ConnectionStringTool>() \n \t .AddTransient<FirmaContext, FirmaContext>() \n \t .BuildServiceProvider(); \n ... \n FirmaContext ctx = serviceProvider.GetService<FirmaContext>();",
                tocan: false
            },
            {
                odgovor: "private float IserviceProvider serviceProvider; \n Public static void Main(string[] args){ \n serviceProvider = new ServiceCollection() \n \t .AddSingleton<IconnectionStringTool,ConnectionStringTool>() \n \t .AddTransient<FirmaContext, FirmaContext>() \n \t .BuildServiceProvider(); \n ... \n FirmaContext ctx = serviceProvider.GetService<FirmaContext>();",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 35,
        pitanje: "Sponzor projekta je:",
        odgovori: [
            {
                odgovor: "osoba ili grupa koja osigurava resurse za projekt.",
                tocan: true
            },
            {
                odgovor: "osoba ili grupa koja ne osigurava ništa.",
                tocan: false
            },
            {
                odgovor: "Coca Cola",
                tocan: false
            },
            {
                odgovor: "osoba ili grupa koja se nalazi u svim fazama osim u fazi počinjanj",
                tocan: false
            },
            {
                odgovor: "osoba ili grupa koja planira ali ne financira projekt.",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 36,
        pitanje: "Testiranje se po RUP-u odvija:",
        odgovori: [
            {
                odgovor: "u svim fazama osim u fazi počinjanja",
                tocan: true
            },
            {
                odgovor: "paralelno sa elaboracijom",
                tocan: false
            },
            {
                odgovor: "po dogovoru sa klijentima",
                tocan: false
            },
            {
                odgovor: "petkom",
                tocan: false
            },
            {
                odgovor: "u razvojnom procesu ",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 37,
        pitanje: "Neka su definirane sljedeće hijerarhije: \nVozilo<- Automobil <-ElektričniAutomobil \nVozilo<- Motocikl \nOsoba<-Djelatnik<-Direktor \nI postupak Djelatnik ZaduzenZa(Automobil a) \nŠto je od navedenog ispravno?",
        odgovori: [
            {
                odgovor: "Func<ElektricniAutomobil, Osoba> func=ZaduzenZa;",
                tocan: true
            },
            {
                odgovor: "Func<Osoba> func=ZaduzenZa;",
                tocan: false
            },
            {
                odgovor: "Func<ElektricniAutomobil> func=ZaduzenZa;",
                tocan: false
            },
            {
                odgovor: "Func<'ElektricniAutomobil' + 'Osoba'> func=ZaduzenZa;",
                tocan: false
            },
            {
                odgovor: "Func<null> func=ZaduzenZa;",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 38,
        pitanje: "Planiranje s vrha prema dolje(Top-Down) je jedan od pristupa razvoju zadataka u fazi u kojem: ",
        odgovori: [
            {
                odgovor: "se identificiraju glavne faze i rezultati projekta prije dodavanja zadataka potrebnih za izvršetak tih faza.",
                tocan: true
            },
            {
                odgovor: "se identificiraju samo glavne faze, ali ne i rezultati projekta prije dodavanja zadataka potrebnih za izvršetak tih faza.",
                tocan: false
            },
            {
                odgovor: "se identificiraju glavne faze i rezultati projekta nakon dodavanja zadataka potrebnih za izvršetak tih faza.",
                tocan: false
            },
            {
                odgovor: "se identificiraju sporedne faze i rezultati projekta prije dodavanja zadataka potrebnih za izvršetak tih faza.",
                tocan: false
            },
            {
                odgovor: "se identificiraju sporedne faze i rezultati projekta nakon dodavanja zadataka potrebnih za izvršetak tih faza.",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 39,
        pitanje: "Prikupljanje detaljnih zahtjeva (80%) se kod RUP-a prikuplja u fazi:",
        odgovori: [
            {
                odgovor: "elaboracije",
                tocan: true
            },
            {
                odgovor: "autentičnosti",
                tocan: false
            },
            {
                odgovor: "procesa",
                tocan: false
            },
            {
                odgovor: "razvoja",
                tocan: false
            },
            {
                odgovor: "verifikacije",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 40,
        pitanje: "Za prijenos varijabilnog broja argumenata koristi se ključna riječ:",
        odgovori: [
            {
                odgovor: "params",
                tocan: true
            },
            {
                odgovor: "integer",
                tocan: false
            },
            {
                odgovor: "destrakcija",
                tocan: false
            },
            {
                odgovor: "prijenos",
                tocan: false
            },
            {
                odgovor: "transfer",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 41,
        pitanje: "U koju vrstu održavanja spada nadogradnja sustava da bi se riješili novi problemi?",
        odgovori: [
            {
                odgovor: "Perfektivno",
                tocan: true
            },
            {
                odgovor: "Adaptivno",
                tocan: false
            },
            {
                odgovor: "Kovarijntno",
                tocan: false
            },
            {
                odgovor: "Preventivno",
                tocan: false
            },
            {
                odgovor: "Hibridno",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 42,
        pitanje: "Postupak dokazivanja da je proizvod dobro napravljen,tj. Da odgovara specifikaciji zahtjeva naziva se: ",
        odgovori: [
            {
                odgovor: "verifikacija",
                tocan: true
            },
            {
                odgovor: "validacija",
                tocan: false
            },
            {
                odgovor: "jedinično testiranje",
                tocan: false
            },
            {
                odgovor: "logika drugog reda",
                tocan: false
            },
            {
                odgovor: "dokaz prihvatljivosti",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 43,
        pitanje: "Što znači da je razred parcijalan (partial class)?",
        odgovori: [
            {
                odgovor: "Da se pojedini dijelovi razreda mogu nalaziti u drugim datotekama.",
                tocan: true
            },
            {
                odgovor: "Da se pojedini dijelovi razreda mogu nalaziti samo u jednoj datoteci.",
                tocan: false
            },
            {
                odgovor: "Da pojedini dijelovi razreda prestaju raditi.",
                tocan: false
            },
            {
                odgovor: "Da se pojedini dijelovi razreda provode testiranje poslovnih zahtjeva. ",
                tocan: false
            },
            {
                odgovor: "Da pojedini dijelovi razreda imaju pristup ograničen na razred u kojem član nije definiran. ",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 44,
        pitanje: "Ako je REST servis firma oblikovan prema standardu Odata tada se artikl sa šifrom 8 nalazi na sljedećoj adresi:",
        odgovori: [
            {
                odgovor: "http://.../firma/artikl(8)",
                tocan: true
            },
            {
                odgovor: "http://.../firma/artikl?filterByPK(8)",
                tocan: false
            },
            {
                odgovor: "http://.../firma/artikl?SifArtikla=8",
                tocan: false
            },
            {
                odgovor: "http://.../firma/artikl/8",
                tocan: false
            },
            {
                odgovor: "http://.../firma/artikl?filter=8",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 45,
        pitanje: "Generičko sučelje definirano modifikatorom out,npr public interface IEnumerable<out T> je:",
        odgovori: [
            {
                odgovor: "kovarijantno",
                tocan: true
            },
            {
                odgovor: "generirano",
                tocan: false
            },
            {
                odgovor: "višefunkcionalno",
                tocan: false
            },
            {
                odgovor: "perfektivno",
                tocan: false
            },
            {
                odgovor: "preventivno",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 46,
        pitanje: "Koja razina važnosti zapisa se koristi za evidentiranje pogrešaka koje se ne mogu obraditi te predstavljaju kritičnu pogrešku za određeni postupak ali ne i za cijelu aplikaciju(npr. pogreška prilikom dodavanja podatka u bazu)?",
        odgovori: [
            {
                odgovor: "Error",
                tocan: true
            },
            {
                odgovor: "Int",
                tocan: false
            },
            {
                odgovor: "Verifikacija",
                tocan: false
            },
            {
                odgovor: "Trace",
                tocan: false
            },
            {
                odgovor: "Context",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 47,
        pitanje: "Prilikom upravljanja zahtjeva o usvajanju zahtjeva i postavljanju prioriteta i rokova odlučuje:",
        odgovori: [
            {
                odgovor: "Odbor za promjene(Change control board)",
                tocan: true
            },
            {
                odgovor: "Odbor za razmjenu podataka",
                tocan: false
            },
            {
                odgovor: "Odbor za brojeve koji određuju verziju assembly-a",
                tocan: false
            },
            {
                odgovor: "Odbor hibridne aplikacije",
                tocan: false
            },
            {
                odgovor: "Odbor za testiranje poslovnih zahtjeva",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 48,
        pitanje: "Ako je zadano: \nInt x; \nString s=“123“; \nVrijednost 123 ćemo pospremiti u x na sljedeći način: ",
        odgovori: [
            {
                odgovor: "x = int.Parse(s);",
                tocan: true
            },
            {
                odgovor: "x = float.Parse(s);",
                tocan: false
            },
            {
                odgovor: "x = float.Parse();",
                tocan: false
            },
            {
                odgovor: "x = int.Parse();",
                tocan: false
            },
            {
                odgovor: "x = Parse(s);",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 49,
        pitanje: "Semantic versioning kojeg,između ostalih koristi i .NET Core za označavanje verzije objektivne datoteke ima oblik:",
        odgovori: [
            {
                odgovor: "major.minor.patch-sufix",
                tocan: true
            },
            {
                odgovor: "minor.major.patch-sufix",
                tocan: false
            },
            {
                odgovor: "sufix.patch.major-minor",
                tocan: false
            },
            {
                odgovor: "major.sufix.patch-minor",
                tocan: false
            },
            {
                odgovor: "patch.sufix.major-minor",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 50,
        pitanje: "Koja razina važnosti zapisa se koristi za bilježenje malih koraka izvođenja programa i ispis informacija namjenjenih programeru u cilju lakšeg rješavanja problema?",
        odgovori: [
            {
                odgovor: "Trace",
                tocan: true
            },
            {
                odgovor: "Parse",
                tocan: false
            },
            {
                odgovor: "Major",
                tocan: false
            },
            {
                odgovor: "Context",
                tocan: false
            },
            {
                odgovor: "Array",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 51,
        pitanje: "Koji je od navedenih tipova podataka vrijednosni tip(value-type)?",
        odgovori: [
            {
                odgovor: "int",
                tocan: true
            },
            {
                odgovor: "class",
                tocan: false
            },
            {
                odgovor: "this",
                tocan: false
            },
            {
                odgovor: "import",
                tocan: false
            },
            {
                odgovor: "void",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 52,
        pitanje: "U koju vrstu održavanja spada zaštita od mogućih problema?",
        odgovori: [
            {
                odgovor: "Preventivno",
                tocan: true
            },
            {
                odgovor: "Perfektivno",
                tocan: false
            },
            {
                odgovor: "Planirano",
                tocan: false
            },
            {
                odgovor: "Skupno",
                tocan: false
            },
            {
                odgovor: "Primitivno",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 53,
        pitanje: "Major version,minor version,build numbers i revision su:",
        odgovori: [
            {
                odgovor: "brojevi koji određuju verziju assembly-a",
                tocan: true
            },
            {
                odgovor: "načini definiranje višefunkcionalnih komponenti",
                tocan: false
            },
            {
                odgovor: "primjeri anonimnog razreda sa određenim svojstvima",
                tocan: false
            },
            {
                odgovor: "metode određivanja programskog odsječka",
                tocan: false
            },
            {
                odgovor: "načini kreiranja Entity Framework modela",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 54,
        pitanje: "Koji od navedenih pojmova nije neka vrsta aplikacije?",
        odgovori: [
            {
                odgovor: "Hibridna aplikacija",
                tocan: true
            },
            {
                odgovor: "Testna aplikacija",
                tocan: false
            },
            {
                odgovor: "Scenska aplikacija",
                tocan: false
            },
            {
                odgovor: "Preventivna aplikacija",
                tocan: false
            },
            {
                odgovor: "Umetnuta aplikacija",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 55,
        pitanje: "U inženjerstvu zahtjeva neformalni opis zamišljene interakcije korisnika i sustava naziva se:",
        odgovori: [
            {
                odgovor: "scenarij",
                tocan: true
            },
            {
                odgovor: "prevencija",
                tocan: false
            },
            {
                odgovor: "barikada",
                tocan: false
            },
            {
                odgovor: "indekser",
                tocan: false
            },
            {
                odgovor: "revizija",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 56,
        pitanje: "Ako postoji barikada ,tvrdnje i obrada iznimki trebaju biti korištene na način da:",
        odgovori: [
            {
                odgovor: "se obrade iznimki nalaze u postpucima s vanjske strane barikade,a tvrdnje u postpucima s unutarnje strane barikade.",
                tocan: true
            },
            {
                odgovor: "se obrade iznimki nalaze u prijenosima s unutarnje strane barikade,a tvrdnje u postpucima s unutarnje strane barikade.",
                tocan: false
            },
            {
                odgovor: "se obrade iznimki nalaze u postpucima s unutarnje strane barikade,a tvrdnje u prijenosima s unutarnje strane barikade.",
                tocan: false
            },
            {
                odgovor: "se obrade iznimki nalaze u postpucima s vanjske strane barikade,a tvrdnje u postpucima s vanjske strane barikade.",
                tocan: false
            },
            {
                odgovor: "se obrade iznimki nalaze u postpucima s unutarnje strane barikade,a tvrdnje u postpucima s unutarnje strane barikade.",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 57,
        pitanje: "Što od navedenog nije korak konverzije sustava?",
        odgovori: [
            {
                odgovor: "Prestanak rada starog sustava",
                tocan: true
            },
            {
                odgovor: "Testiranje poslovnih zahtjeva",
                tocan: false
            },
            {
                odgovor: "Funkcionalno testiranje (black box testing)",
                tocan: false
            },
            {
                odgovor: "Agilni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Team buildig",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 58,
        pitanje: "Poslovni zahtjevi odgovaraju na pitanje:",
        odgovori: [
            {
                odgovor: "zašto",
                tocan: true
            },
            {
                odgovor: "kako",
                tocan: false
            },
            {
                odgovor: "gdje",
                tocan: false
            },
            {
                odgovor: "što",
                tocan: false
            },
            {
                odgovor: "kuda",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 59,
        pitanje: "Što od navedenog ne spada u integracijsko testiranje?",
        odgovori: [
            {
                odgovor: "Testiranje poslovnih zahtjeva",
                tocan: true
            },
            {
                odgovor: "Prestanak rada starog sustava",
                tocan: false
            },
            {
                odgovor: "Funkcionalno testiranje (black box testing)",
                tocan: false
            },
            {
                odgovor: "Agilni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Team buildig",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 60,
        pitanje: "Funkcionalni zahtjevi odgovaraju na pitanje:",
        odgovori: [
            {
                odgovor: "što",
                tocan: true
            },
            {
                odgovor: "zašto",
                tocan: false
            },
            {
                odgovor: "kako",
                tocan: false
            },
            {
                odgovor: "gdje",
                tocan: false
            },
            {
                odgovor: "kuda",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 61,
        pitanje: "Kojeg je tipa referenca x u sljedećem programskom odsječku? \n\nUsing(var context= new FirmaContext()){ \n\tVar x = context.Artikl \n\t\t.select(a=>new { \n\t\ta.SifArtikla,a.NazArtikla,a.CijArtikla, \n\t}) \n\t.First(); \n\t...",
        odgovori: [
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima NazArtikla,CijArtikla i SifArtikla.",
                tocan: true
            },
            {
                odgovor: "artikl kojem su popunjene vrijednosti SifArtikla, NazArtikla, CijArtikla, a ostale imaju pretpostavljene vrijednosti za svoje tipove",
                tocan: false
            },
            {
                odgovor: "IEnumerable<T>, gdje je T anonimni razred sa svojstvima NazArtikla, CijArtikla i SifArtikla",
                tocan: false
            },
            {
                odgovor: "artikl kojem su popunjene vrijednosti SifArtikla, NazArtikla, CijArtikla, a ostale su null",
                tocan: false
            },
            {
                odgovor: "IEnumerable",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 62,
        pitanje: "Uz predani model MVC pogledu se upravljača mogu prenijeti vrijednosti koristeći:",
        odgovori: [
            {
                odgovor: "ViewData i/ili ViewBag",
                tocan: true
            },
            {
                odgovor: "Team building",
                tocan: false
            },
            {
                odgovor: "Defanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Code First",
                tocan: false
            },
            {
                odgovor: "XML shemu",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 63,
        pitanje: "Testiranje u kojem se provjerava što cijelina radi,to jest zadovoljava li zahtjeve pri čemu se probni slučajevi izvode iz  specifikacija naziva se: ",
        odgovori: [
            {
                odgovor: "funkcionalno testiranje(black box testing)",
                tocan: true
            },
            {
                odgovor: "agilni razvojni proces",
                tocan: false
            },
            {
                odgovor: "Code First",
                tocan: false
            },
            {
                odgovor: "ViewData i/ili ViewBag",
                tocan: false
            },
            {
                odgovor: "array",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 64,
        pitanje: "Način kreiranja Entity Framework modela u kojem je model opisan kroz rulno napisane razrede(bez grafičkog sučelja),a baza podataka nastaje na osnovu modela naziva se: ",
        odgovori: [
            {
                odgovor: "Code First",
                tocan: true
            },
            {
                odgovor: "Ofanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Team building",
                tocan: false
            },
            {
                odgovor: "Objektno programiranje",
                tocan: false
            },
            {
                odgovor: "Defanzivno programiranje",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 65,
        pitanje: "Ekstremno programiranje je:",
        odgovori: [
            {
                odgovor: "agilni razvojni proces.",
                tocan: true
            },
            {
                odgovor: "tehnika programiranja koja se temelji na objektima koji komuniciraju porukama.",
                tocan: false
            },
            {
                odgovor: "primjerak anonimnog razreda sa određenim svojstvima.",
                tocan: false
            },
            {
                odgovor: "umetnuta aplikacija.",
                tocan: false
            },
            {
                odgovor: "programska cjelina.",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 66,
        pitanje: "U koju vrstu održavanja spada redovita izrada sigurnosnih kopija?",
        odgovori: [
            {
                odgovor: "Preventivno",
                tocan: true
            },
            {
                odgovor: "Trace",
                tocan: false
            },
            {
                odgovor: "Ekstremno",
                tocan: false
            },
            {
                odgovor: "Hibridno",
                tocan: false
            },
            {
                odgovor: "Kovarijantno",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 67,
        pitanje: "Koji je od navedenih tipova podataka tip reference(reference type)?",
        odgovori: [
            {
                odgovor: "array",
                tocan: true
            },
            {
                odgovor: "team building",
                tocan: false
            },
            {
                odgovor: "XML shema",
                tocan: false
            },
            {
                odgovor: "var",
                tocan: false
            },
            {
                odgovor: "context",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 68,
        pitanje: "U inženjerstvu zahtjeva,neformalni opis zamišljene interakcije korisnika i sustava naziva se:",
        odgovori: [
            {
                odgovor: "scenarij",
                tocan: true
            },
            {
                odgovor: "revizija",
                tocan: false
            },
            {
                odgovor: "promjena",
                tocan: false
            },
            {
                odgovor: "funkcija",
                tocan: false
            },
            {
                odgovor: "destrakcija",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 69,
        pitanje: "Što od navedenog nije način prikupljanja zahtjeva?",
        odgovori: [
            {
                odgovor: "Team building",
                tocan: true
            },
            {
                odgovor: "XML shema",
                tocan: false
            },
            {
                odgovor: "Dokumentacija",
                tocan: false
            },
            {
                odgovor: "Code First",
                tocan: false
            },
            {
                odgovor: ".NET",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 70,
        pitanje: "WSDL označava:",
        odgovori: [
            {
                odgovor: "XML shemu za opis web servisa.",
                tocan: true
            },
            {
                odgovor: "opis zamišljene interakcije korisnika i sustava",
                tocan: false
            },
            {
                odgovor: "izradu sigurnosnih kopija.",
                tocan: false
            },
            {
                odgovor: "model opisan kroz rulno napisane razrede",
                tocan: false
            },
            {
                odgovor: "postupke s vanjske strane barikade.",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 71,
        pitanje: "Koje vrste resursa postoje?",
        odgovori: [
            {
                odgovor: "Ljudski i materijalni",
                tocan: true
            },
            {
                odgovor: "Tehnološki i materijalni",
                tocan: false
            },
            {
                odgovor: "Tehnološki i objektni",
                tocan: false
            },
            {
                odgovor: "Promjenjivi i fiksni",
                tocan: false
            },
            {
                odgovor: "Fiksni i ljudski",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 72,
        pitanje: "Što ispisuje sljedeći programski odsječak? \n\nStatic void Main(string[] args){ \nAction<int, string, Funcc<char, string, int>> action =(i, s, f)=> Console.WriteLine(F(s[i],s)); \nAction(6,  „ispit iz RPPP-a,(x,s)=> \n{ \n\tInt suma = 0; \n\tForeach(var c in s) \n\t{ if(x == c) ++sum; \n} return sum; \n}); \n}",
        odgovori: [
            {
                odgovor: "3",
                tocan: true
            },
            {
                odgovor: "0",
                tocan: false
            },
            {
                odgovor: "NaN",
                tocan: false
            },
            {
                odgovor: "1",
                tocan: false
            },
            {
                odgovor: "2",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 73,
        pitanje: "Kako se zove tehnika programiranja koja se temelji na objektima koji komuniciraju porukama?",
        odgovori: [
            {
                odgovor: "Objektno programiranje",
                tocan: true
            },
            {
                odgovor: "Defanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Ofanzivno programiranje",
                tocan: false
            },
            {
                odgovor: "Hibridno programiranje",
                tocan: false
            },
            {
                odgovor: "Umetnuto programiranje",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 74,
        pitanje: "Ako Automobil i Motocikl nasljeđuju MotornoVozilo i ako je sučelje Icomparer definirano kao: \nPublic interface Ienumerable< out T> tada se postupku: \nVoid IspisiVozila(IEnumerable<MotornoVozilo> vozila) { \nFor(var vozilo in vozila) \n\tConsole-WriteLine(vozilo.Model); \n}\nKao argument može poslati objekt tipa",
        odgovori: [
            {
                odgovor: "List<Automobil>",
                tocan: true
            },
            {
                odgovor: "List<MotornoVozilo>",
                tocan: false
            },
            {
                odgovor: "List<vozilo>",
                tocan: false
            },
            {
                odgovor: "List<vozilo.model>",
                tocan: false
            },
            {
                odgovor: "List<Icomparer>",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 75,
        pitanje: "Koje su vrste zahtjeva?",
        odgovori: [
            {
                odgovor: "Poslovni, korisnički, funkcionalni, nefunkcionalni",
                tocan: true
            },
            {
                odgovor: "Poslovni, privatni, funkcionalni",
                tocan: false
            },
            {
                odgovor: "Privatni, trajni, prolazni, socijalni",
                tocan: false
            },
            {
                odgovor: "Funkcionalni, edukativni, adaptivni, korisnički",
                tocan: false
            },
            {
                odgovor: "Trajni, prolazni, socijalni, adaptivni",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 76,
        pitanje: "Kojeg je tipa referenca x u sljedećem programskom odsječku? \n\nusing(var context = new FirmaContext()){ \n\tvar x = context.Artikl \n\t\t.Select(a => new{ \n\t\ta.SifArtikla,a.NazArtikla,a.CijArtikla, \n}) \n.First(); \n}...",
        odgovori: [
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima NazArtikla,CijArtikla i SifArtikla.",
                tocan: true
            },
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima var contexta.",
                tocan: false
            },
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima FirmaContext().",
                tocan: false
            },
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima contect.Artikl.",
                tocan: false
            },
            {
                odgovor: "primjerak anonimnog razreda sa svojstvima First().",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 77,
        pitanje: "Paralelno uvođenje novog sustava u primjenu ima",
        odgovori: [
            {
                odgovor: "Nizak rizik,visok trošak i dugo trajanje",
                tocan: true
            },
            {
                odgovor: "Srednji rizik,srednji trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "Velik rizik, velik trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "Srednji rizik, visok trošak i kratko trajanje",
                tocan: false
            },
            {
                odgovor: "Srednji rizik, srednji trošak i kratko trajanje",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 78,
        pitanje: "Koncept definiranja dijelova softvera koji će rukovati prljavim podacima i drugih koji rukuju samo čistim podacima naziva se",
        odgovori: [
            {
                odgovor: "Barikada",
                tocan: true
            },
            {
                odgovor: "Prevencija",
                tocan: false
            },
            {
                odgovor: "Proces",
                tocan: false
            },
            {
                odgovor: "planiranje",
                tocan: false
            },
            {
                odgovor: "Pristup",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 79,
        pitanje: "Koja od navedenih pojmova nije vrsta aplikacije?",
        odgovori: [
            {
                odgovor: "Umetnuta aplikacija",
                tocan: true
            },
            {
                odgovor: "Hibridna aplikacija",
                tocan: false
            },
            {
                odgovor: "Preventivna aplikacija",
                tocan: false
            },
            {
                odgovor: "Testna aplikacija",
                tocan: false
            },
            {
                odgovor: "Scenska aplikacija",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 80,
        pitanje: "Koja od navedenih tvrdnji nije točna?",
        odgovori: [
            {
                odgovor: "Private varijable i postupci se nasljeđuju",
                tocan: true
            },
            {
                odgovor: "Barikada je koncept definiranja dijelova softvera",
                tocan: false
            },
            {
                odgovor: "Objektno programiranje se temelji na objektima",
                tocan: false
            },
            {
                odgovor: "WSDL označava XML shemu za opis web servisa",
                tocan: false
            },
            {
                odgovor: "Ekstremno programiranje je agilni razvojni proces",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 81,
        pitanje: "Specifikacija sustava izlaz je koje faze(životnog ciklusa)?",
        odgovori: [
            {
                odgovor: "Oblikovanja",
                tocan: true
            },
            {
                odgovor: "Procesa",
                tocan: false
            },
            {
                odgovor: "Testiranja",
                tocan: false
            },
            {
                odgovor: "Planirnaja",
                tocan: false
            },
            {
                odgovor: "Razvoja",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 82,
        pitanje: "Ako je u datoteci Startup.cs ASP.NET Core aplikacije u postupku Configure definirana sljedeća ruta: \n\nApp.UseMvc(routes => { \n\tRoutes.MapRoute{ \n\t\tName:“default“, \n\t\tTemplate: „{controller=Home}/{action=Index}/{id}“); \n\t} \n}; \n\nKako izgleda zadnji odsječak url adrese koja bi odgovarala sljedećem postupku iz datoteke MjestoController.cs \nPublic ActionResult Edit(int id, int page,  int sort)(....) \nPri čemu će vrijednosti id,page i sort treba poslati vrijednost 1,2 i 3",
        odgovori: [
            {
                odgovor: ".../Mjesto/Edit/1?page=2&sort=3",
                tocan: true
            },
            {
                odgovor: ".../Mjesto/Edit/3?sort=2&page=1",
                tocan: false
            },
            {
                odgovor: ".../Mjesto/Edit/2?page=3&sort=1",
                tocan: false
            },
            {
                odgovor: ".../Mjesto/Edit/1?sort=3&page=2",
                tocan: false
            },
            {
                odgovor: ".../Mjesto/Edit/2?sort=1&page=3",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 83,
        pitanje: "Koji od navedenih članova razreda mogu imati mehanizme get i set?",
        odgovori: [
            {
                odgovor: "Svojstva i indekseri",
                tocan: true
            },
            {
                odgovor: "Objekti i svojstva",
                tocan: false
            },
            {
                odgovor: "Svojstva i funkcije",
                tocan: false
            },
            {
                odgovor: "Objekti i indekseri",
                tocan: false
            },
            {
                odgovor: "Objektni i funkcije",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 84,
        pitanje: "U MVC aplikaciji atributi [HttpGet] i [HttpPost] iznad postupka u upravljaču služe:",
        odgovori: [
            {
                odgovor: "da bi razlikovali inicijalno otvaranje forme od naknadnog slanja podataka.",
                tocan: true
            },
            {
                odgovor: "da bi iznimke koristili samo u fazi razvoja.",
                tocan: false
            },
            {
                odgovor: "da bi dokument kojim pokretač projekta odobri projekt.",
                tocan: false
            },
            {
                odgovor: "za izravno uvođenje novog sustava u primjenu",
                tocan: false
            },
            {
                odgovor: "da bi private modifikator mogao pristupiti razredima i članovima razreda.",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 85,
        pitanje: "Što od navedenog nije preporuka za korištenje iznimki?",
        odgovori: [
            {
                odgovor: "Iznimke koristiti samo u fazi razvoja(tj. U debug verziji aplikacije)",
                tocan: true
            },
            {
                odgovor: "Iznimke koristiti u fazi životnog ciklusa",
                tocan: false
            },
            {
                odgovor: "Iznimke koristiti u MVC aplikaciji",
                tocan: false
            },
            {
                odgovor: "Iznimke koristiti samo u fazi testiranja",
                tocan: false
            },
            {
                odgovor: "Iznimke koristiti samo pri upotrebi aplikacije",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 86,
        pitanje: "U kojoj fazi životnog ciklusa programske potpore se vrši analiza izvedivosti?",
        odgovori: [
            {
                odgovor: "Planiranje",
                tocan: true
            },
            {
                odgovor: "Testiranje",
                tocan: false
            },
            {
                odgovor: "Procesiranje",
                tocan: false
            },
            {
                odgovor: "Razvijanje",
                tocan: false
            },
            {
                odgovor: "Beta testiranje",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 87,
        pitanje: "Probna uporaba koju provode korisnici kod sebe bez nazočnosti izvođaća naziva se:",
        odgovori: [
            {
                odgovor: "Beta testiranje",
                tocan: true
            },
            {
                odgovor: "Razvijanje",
                tocan: false
            },
            {
                odgovor: "Procesiranje",
                tocan: false
            },
            {
                odgovor: "Testiranje",
                tocan: false
            },
            {
                odgovor: "Planiranje",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 88,
        pitanje: "Što od navedenog nije jedno od 4 osnovna pravila servisno orijentirane arhitekture?",
        odgovori: [
            {
                odgovor: "Brzina i mala količina podataka",
                tocan: true
            },
            {
                odgovor: "Ugovor, a ne implementacija",
                tocan: false
            },
            {
                odgovor: "Jasno određene granice",
                tocan: false
            },
            {
                odgovor: "Neovisnost servisa",
                tocan: false
            },
            {
                odgovor: "Semantika, a ne samo sintaksa",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 89,
        pitanje: "Kojom se ključnom riječi u nekom projektu uključuje prostor imena?",
        odgovori: [
            {
                odgovor: "using",
                tocan: true
            },
            {
                odgovor: "get",
                tocan: false
            },
            {
                odgovor: "set",
                tocan: false
            },
            {
                odgovor: "console",
                tocan: false
            },
            {
                odgovor: "this",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 90,
        pitanje: "Koji tipovi pitanja postoje u intervjuu?",
        odgovori: [
            {
                odgovor: "otvorena, zatvorena, probna",
                tocan: true
            },
            {
                odgovor: "početna, završna, probna",
                tocan: false
            },
            {
                odgovor: "izravna, neizravna, neočekivana",
                tocan: false
            },
            {
                odgovor: "planirana, neplanirana, odgovorena",
                tocan: false
            },
            {
                odgovor: "kratka, duga, srednja",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 91,
        pitanje: "Povelja projekta je:",
        odgovori: [
            {
                odgovor: "Dokument kojim pokretač projekta ili sponzor odobrava projekt.",
                tocan: true
            },
            {
                odgovor: "Dokument kojim pokretač projekta ili sponzor analizira projekt.",
                tocan: false
            },
            {
                odgovor: "Dokument kojim pokretač projekta ili sponzor planira projekt.",
                tocan: false
            },
            {
                odgovor: "Dokument kojim pokretač projekta ili sponzor odbija projekt.",
                tocan: false
            },
            {
                odgovor: "Dokument kojim pokretač projekta ili sponzor pauziraju projekt.",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 92,
        pitanje: "Što od navedenog ne spada u verifikaciju zahtjeva?",
        odgovori: [
            {
                odgovor: "Komentiranje koda",
                tocan: true
            },
            {
                odgovor: "Potvrde točnosti",
                tocan: false
            },
            {
                odgovor: "Autentičnost",
                tocan: false
            },
            {
                odgovor: "Verificiranje",
                tocan: false
            },
            {
                odgovor: "Elaboriranje",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 93,
        pitanje: "10% najvažnijih zahtjeva se kod RUP-a prikuplja u fazi?",
        odgovori: [
            {
                odgovor: "Razvoja",
                tocan: true
            },
            {
                odgovor: "Procesa",
                tocan: false
            },
            {
                odgovor: "Testiranja",
                tocan: false
            },
            {
                odgovor: "Beta testiranja",
                tocan: false
            },
            {
                odgovor: "Planiranja",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 94,
        pitanje: "Izravno uvođenje novog sustava u primjenu ima?",
        odgovori: [
            {
                odgovor: "Visok rizik,nizak trošak(ako uspije) i kratko trajanje (ako uspije)",
                tocan: true
            },
            {
                odgovor: "Nizak rizik,nizak trošak(ako uspije) i kratko trajanje (ako uspije)",
                tocan: false
            },
            {
                odgovor: "Visok rizik,visok trošak(ako uspije) i dugo trajanje (ako uspije)",
                tocan: false
            },
            {
                odgovor: "Nizak rizik,nizak trošak(ako uspije) i kratko trajanje (ako uspije)",
                tocan: false
            },
            {
                odgovor: "Visok rizik,nizak trošak(ako uspije) i dugo trajanje (ako uspije)",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 95,
        pitanje: "Private modifikator pristupa razredima i članovima razreda označava:",
        odgovori: [
            {
                odgovor: "Pristup ograničen na razred u kojem je član definiran",
                tocan: true
            },
            {
                odgovor: "Pristup ograničen na klasu u kojoj je razred definiran",
                tocan: false
            },
            {
                odgovor: "Pristup ograničen na komponentu u kojem je član definiran",
                tocan: false
            },
            {
                odgovor: "Pristup ograničen na komponentu u kojem je razred definiran",
                tocan: false
            },
            {
                odgovor: "Pristup ograničen na klasu u kojoj je definirano više razreda",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 96,
        pitanje: "Što od navedenog nije moguće?",
        odgovori: [
            {
                odgovor: "var x;",
                tocan: true
            },
            {
                odgovor: "int x;",
                tocan: false
            },
            {
                odgovor: "float x;",
                tocan: false
            },
            {
                odgovor: "string x;",
                tocan: false
            },
            {
                odgovor: "double x;",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 97,
        pitanje: "Test kojeg provode nezavisne tvrtke ili odjeli za osiguranje kvalitete,a provodi se opcionalno kao potvrda da je sustav gotov i spreman za primjenu naziva se:",
        odgovori: [
            {
                odgovor: "Nadzorni test(audit test)",
                tocan: true
            },
            {
                odgovor: "Sigurnosni test(security test)",
                tocan: false
            },
            {
                odgovor: "Beta test",
                tocan: false
            },
            {
                odgovor: "Alfa test",
                tocan: false
            },
            {
                odgovor: "Test kvalitete(quality test)",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 98,
        pitanje: "Ako je u bazi podataka odnos među tablicama Drzava i Mjesto kao na sljedećoj slici tada razred Mjesto u Entitiy Frameworku modelu generiranom prema navedenoj BP izgleda nalik:",
        odgovori: [
            {
                odgovor: "public partial class Mjesto { \n\t... \n\tPublic string OznDrzave ( get; set; ) \n\t... \n\tPublic Drzava OznDrzaveNavigation ( get; set; )\n}",
                tocan: true
            },
            {
                odgovor: "public partial class OznDrzave { \n\t... \n\tPublic string OznDrzave ( get; set; ) \n\t... \n\tPublic Drzava OznDrzaveNavigation ()\n}",
                tocan: false
            },
            {
                odgovor: "public partial class Mjesto { \n\t... \n\tPublic string OznDrzave () \n\t... \n\tPublic Drzava OznDrzaveNavigation ( get; set; )\n}",
                tocan: false
            },
            {
                odgovor: "public partial class Drzava { \n\t... \n\tPublic string OznDrzave () \n\t... \n\tPublic Drzava OznDrzaveNavigation ( get; set; )\n}",
                tocan: false
            },
            {
                odgovor: "public partial class Mjesto { \n\t... \n\tPublic string OznDrzave ( get; set; ) \n\t... \n\tPublic Drzava OznDrzaveNavigation ()\n}",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 99,
        pitanje: "Verzija konfiguracije koja se koristi umjesto originalne verzije i podrazumijeva izmjene nastale kroz vrijeme naziva se?",
        odgovori: [
            {
                odgovor: "Revizija",
                tocan: true
            },
            {
                odgovor: "Elaboracija",
                tocan: false
            },
            {
                odgovor: "Verifikacija",
                tocan: false
            },
            {
                odgovor: "Programska cjelina",
                tocan: false
            },
            {
                odgovor: "Potprogram",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 100,
        pitanje: "Skup programskih naredbi koje obavljaju jedan zadatak ili jedan dio zadatka,npr. glavni program,potprogram,se zove:",
        odgovori: [
            {
                odgovor: "Programska cjelina",
                tocan: true
            },
            {
                odgovor: "Potprogram",
                tocan: false
            },
            {
                odgovor: "Verifikacija",
                tocan: false
            },
            {
                odgovor: "Elaboracija",
                tocan: false
            },
            {
                odgovor: "Revizija",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 101,
        pitanje: "U koju vrstu održavanja spada ugradnja novih mogućnosti?",
        odgovori: [
            {
                odgovor: "Perfektivno",
                tocan: true
            },
            {
                odgovor: "Plansko",
                tocan: false
            },
            {
                odgovor: "Razvojno",
                tocan: false
            },
            {
                odgovor: "Testno",
                tocan: false
            },
            {
                odgovor: "Programsko",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 102,
        pitanje: "U kojoj fazi ekstremnog programiranja korisnici bilježe svoje priče na kartice,a svaka kartica sadrži jednu mogućnost programa?",
        odgovori: [
            {
                odgovor: "U fazi istraživanja",
                tocan: true
            },
            {
                odgovor: "U fazi testiranja",
                tocan: false
            },
            {
                odgovor: "U fazi razvijanja",
                tocan: false
            },
            {
                odgovor: "U fazi verificiranja",
                tocan: false
            },
            {
                odgovor: "U fazi ekspanzije",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 103,
        pitanje: "Što je programsko inženjerstvo?",
        odgovori: [
            {
                odgovor: "Sistematičan,discipliniran i mjerljiv pristup razvoju,primjeni i održavanju softvera.",
                tocan: true
            },
            {
                odgovor: "Verzija konfiguracije koja se koristi umjesto originalne verzije.",
                tocan: false
            },
            {
                odgovor: "Skup programskih naredbi koje obavljaju jedan zadatak ili jedan dio zadatka.",
                tocan: false
            },
            {
                odgovor: "Inženjerstvo kojeg provode nezavisne tvrtke ili odjeli za osiguranje kvalitete.",
                tocan: false
            },
            {
                odgovor: "Koncept definiranja dijelova softvera koji će rukovati prljavim podacima.",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 104,
        pitanje: "Mogućnost poziva postupka istog imena na objektima različitih razreda naziva se:",
        odgovori: [
            {
                odgovor: "Višeobličje",
                tocan: true
            },
            {
                odgovor: "Višefunkcionalnost",
                tocan: false
            },
            {
                odgovor: "Destraktiranje",
                tocan: false
            },
            {
                odgovor: "Verifikacija",
                tocan: false
            },
            {
                odgovor: "Beta poziv",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 105,
        pitanje: "Što od navedenog nije točno za koncept Code First from existing database?",
        odgovori: [
            {
                odgovor: "Za Code First from existing database potrebno je koristiti grafičko sučelje",
                tocan: true
            },
            {
                odgovor: "Razredi se mogu stvoriti ručno ili nekim od generatora",
                tocan: false
            },
            {
                odgovor: "Baza podataka opisuje se razredima, ali ne uzrokuje stvaranje nove baze podataka",
                tocan: false
            },
            {
                odgovor: "Code First from existing database je sličan konceptu Code First, ali radi s postojećom bazom podataka",
                tocan: false
            },
            {
                odgovor: "Code First from existing database koristi tehniku reverznog inženjerstva",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 106,
        pitanje: "Koja tvrdnja ne vrijedi za klasični vodopadni model?",
        odgovori: [
            {
                odgovor: "Iterativan postupak razvoja",
                tocan: true
            },
            {
                odgovor: "Problemi u slučaju pogrešaka ili novih/promijenjenih zahtjeva",
                tocan: false
            },
            {
                odgovor: "Razvoj započinje tek kad su svi zahtjevi dobro dokumentirani",
                tocan: false
            },
            {
                odgovor: "Slijedno napredovanje iz faze u fazu",
                tocan: false
            },
            {
                odgovor: "Nisu dozvoljene naknadne promjene rezultata prethodnih faza",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 107,
        pitanje: "Koja od navedenih tvrdnji NIJE istinita?",
        odgovori: [
            {
                odgovor: "Isti naziv tipa ne smije se upotrijebiti u različitim prostorima imena.",
                tocan: true
            },
            {
                odgovor: "Prostor imena sadrži definicije razreda, struktura, sučelja, pobrojanih tipova, delegata i deklaraciju drugih prostora imena.",
                tocan: false
            },
            {
                odgovor: "C# program se može sastojati od više datoteka.",
                tocan: false
            },
            {
                odgovor: "Isti prostor imena može se protezati u više datoteka.",
                tocan: false
            },
            {
                odgovor: "Svaka datoteka sadrži jedan ili više prostora imena.",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 108,
        pitanje: "Zajednički sustav tipova podataka .NET Frameworka naziva se:",
        odgovori: [
            {
                odgovor: "Common Type System",
                tocan: true
            },
            {
                odgovor: "Assembly",
                tocan: false
            },
            {
                odgovor: "Common Language Runtime",
                tocan: false
            },
            {
                odgovor: "Base Class Library",
                tocan: false
            },
            {
                odgovor: "Intermediate Language",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 109,
        pitanje: "'Parser će brzo generirati izvješće o pogreškama HTML oznaka, koje omogućava brzi ispravak pogrešaka kada program koriste početnici u HTML-u.' Ovo je primjer:",
        odgovori: [
            {
                odgovor: "neodređenog zahtjeva",
                tocan: true
            },
            {
                odgovor: "nepotpunog zahtjeva",
                tocan: false
            },
            {
                odgovor: "zahtjeva krajnjih korisnika",
                tocan: false
            },
            {
                odgovor: "neostvarivog zahtjeva",
                tocan: false
            },
            {
                odgovor: "zahtjeva vlasnika sustava",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 110,
        pitanje: "Zahtjevi koji opisuju zadatke koje korisnik mora moći obaviti služeći se aplikacijama su:",
        odgovori: [
            {
                odgovor: "korisnički",
                tocan: true
            },
            {
                odgovor: "funkcionalni",
                tocan: false
            },
            {
                odgovor: "poslovni",
                tocan: false
            },
            {
                odgovor: "obvezni",
                tocan: false
            },
            {
                odgovor: "nefunkcionalni",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 111,
        pitanje: "Uz predani model MVC pogledu se iz upravljača mogu prenijeti vrijednosti koristeći",
        odgovori: [
            {
                odgovor: "ViewData i/ili ViewBag",
                tocan: true
            },
            {
                odgovor: "ModelData",
                tocan: false
            },
            {
                odgovor: "HtmlData i/ili HtmlCache",
                tocan: false
            },
            {
                odgovor: "CurrentContent i/ili PermanentContent",
                tocan: false
            },
            {
                odgovor: "Attributes",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 112,
        pitanje: "Ako se unutar pogleda u MVC aplikaciji kao model koristi razred Mjesto koji ima svojstvo Naziv čija se vrijednost ispisuje unutar pogleda, kako izgleda odsječak takvog pogleda?",
        odgovori: [
            {
                odgovor: "@model Mjesto ... \n@Model.Naziv",
                tocan: true
            },
            {
                odgovor: "@Model Mjesto ... \n@model.Naziv",
                tocan: false
            },
            {
                odgovor: "@model Mjesto ... \n@Naziv",
                tocan: false
            },
            {
                odgovor: "@Model Mjesto ... \n@Naziv",
                tocan: false
            },
            {
                odgovor: "@model Mjesto ... \n@Mjesto.Naziv",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 113,
        pitanje: "Parcijalni razred je razred",
        odgovori: [
            {
                odgovor: "čija definicija može biti napisana u više datoteka.",
                tocan: true
            },
            {
                odgovor: "koji sadrži samo popis postupaka.",
                tocan: false
            },
            {
                odgovor: "koji se ne može instancirati",
                tocan: false
            },
            {
                odgovor: "koji je napisan u nekoliko prostora imena",
                tocan: false
            },
            {
                odgovor: "koji nema implementirane sve postupke.",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 114,
        pitanje: "class Primjer \n{ \n\t private int index; \n\npublic int Index \n\t{ \n\t\tget { return index; } \n\t\tset { \n\t\t\t if (value <= 0) { this.index = 0; ) \n\t\t\telse if (value > 100) { this.index = 100; } \n\t\telse { this.index = value; } \n\t\t} \n\t} \n} \nProgramski odsječak je primjer ",
        odgovori: [
            {
                odgovor: "barikade",
                tocan: true
            },
            {
                odgovor: "tvrdnje",
                tocan: false
            },
            {
                odgovor: "indeksera",
                tocan: false
            },
            {
                odgovor: "iznimke",
                tocan: false
            },
            {
                odgovor: "ofenzivnog programiranja",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 115,
        pitanje: "try { \n\t... \n\tthrow new NullReferenceException \n} \ncatch (Exception exc){ \n\tConsole.WriteLine('EXC'); \n} \ncatch (NullReferenceException nre){ \n\tConsole.WriteLine('NRE'); \n} \nfinally { \nConsole.WriteLine('F'); \n} \nIzvršavanjem gornjeg odsječka na ekranu se ispisuje",
        odgovori: [
            {
                odgovor: "EXC \nF",
                tocan: true
            },
            {
                odgovor: "NRE",
                tocan: false
            },
            {
                odgovor: "NRE \nF",
                tocan: false
            },
            {
                odgovor: "EXC \nNRE \nF",
                tocan: false
            },
            {
                odgovor: "F",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 116,
        pitanje: "Ako Automobil i Motocikl nasljeđuju MotornoVozilo onda je u postupak IspisiVozilo moguće poslati i List<Automobil>, jer je sučelje IEnumerable<T> \n\nvoid IspisiVozila(IEnumerable<MotornoVozilo> vozila) { \n\tfor(var vozilo in vozila) \n\t\tConsole.WriteLine(vozilo.Model); \n}",
        odgovori: [
            {
                odgovor: "kovarijantno",
                tocan: true
            },
            {
                odgovor: "varijantno",
                tocan: false
            },
            {
                odgovor: "irelevantno",
                tocan: false
            },
            {
                odgovor: "kontravarijantno",
                tocan: false
            },
            {
                odgovor: "invarijantno",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 117,
        pitanje: "Izbacite uljeza",
        odgovori: [
            {
                odgovor: "hibridna aplikacija",
                tocan: true
            },
            {
                odgovor: "višeslojna aplikacija",
                tocan: false
            },
            {
                odgovor: "debeli klijent",
                tocan: false
            },
            {
                odgovor: "tanki klijent",
                tocan: false
            },
            {
                odgovor: "mobilna aplikacija",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 118,
        pitanje: "U kojoj fazi RUP-a se prikupljaju zahtjevi",
        odgovori: [
            {
                odgovor: "u svim osim u fazu prijelaza",
                tocan: true
            },
            {
                odgovor: "u fazi počinjanja",
                tocan: false
            },
            {
                odgovor: "u fazi konstrukcije",
                tocan: false
            },
            {
                odgovor: "u fazi prijelaza",
                tocan: false
            },
            {
                odgovor: "u fazi počinjanja i elaboracije",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 119,
        pitanje: "Hijerarhijska lista faza, zadataka i prekretnica se skraćenom naziva",
        odgovori: [
            {
                odgovor: "WBS",
                tocan: true
            },
            {
                odgovor: "Top-down",
                tocan: false
            },
            {
                odgovor: "PhaTaMi",
                tocan: false
            },
            {
                odgovor: "ABS",
                tocan: false
            },
            {
                odgovor: "PTM",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 120,
        pitanje: "Razred r1 = new Razred('A1'); \nusing (Razred r2 = new Razred('B2')) { \n\tRazred r3 = new Razred('C3'); \n\tr3 = null; \n\tthrow new Exception('Poruka'); \n} \nr1.Dispose(); \nAko je razred Razred implementiran tako da u postupku Dispose ispisuje parametar primljen u konstruktoru, gornji programski odsječak će ispisati",
        odgovori: [
            {
                odgovor: "B2",
                tocan: true
            },
            {
                odgovor: "C3",
                tocan: false
            },
            {
                odgovor: "B2 \nC3",
                tocan: false
            },
            {
                odgovor: "B2 \nA1",
                tocan: false
            },
            {
                odgovor: "B2 \nC3 \nA1",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 121,
        pitanje: "Što od navedenog nije vrijednosni tip",
        odgovori: [
            {
                odgovor: "string",
                tocan: true
            },
            {
                odgovor: "float",
                tocan: false
            },
            {
                odgovor: "Nullable",
                tocan: false
            },
            {
                odgovor: "System.Int32",
                tocan: false
            },
            {
                odgovor: "int?",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 122,
        pitanje: "Koja razina važnosti zapisa se koristi za evidentiranje pogrešaka i iznimki koje se ne mogu obraditi te predstavljaju kritičnu pogrešku za određeni postupak, ali ne i za cijelu aplikaciju (npr. pogreška prilikom dodavanja novog podatka u bazu)?",
        odgovori: [
            {
                odgovor: "Error",
                tocan: true
            },
            {
                odgovor: "Warning",
                tocan: false
            },
            {
                odgovor: "Information",
                tocan: false
            },
            {
                odgovor: "Debug",
                tocan: false
            },
            {
                odgovor: "Critical",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 123,
        pitanje: "Koja razina važnosti zapisa se koristi za informativne poruke u cilju otklanjanja pogrešaka te predstavlja kratkoročnu informaciju (ne nužno samo programeru)?",
        odgovori: [
            {
                odgovor: "Debug",
                tocan: true
            },
            {
                odgovor: "Warning",
                tocan: false
            },
            {
                odgovor: "Information",
                tocan: false
            },
            {
                odgovor: "Error",
                tocan: false
            },
            {
                odgovor: "Trace",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 124,
        pitanje: "Način kreiranja Entity Framework modela u kojem je model opisan kroz ručno napisane razrede (bez grafičkog sučelja), a baza podataka nastaje na osnovu modela naziva se",
        odgovori: [
            {
                odgovor: "Database First",
                tocan: true
            },
            {
                odgovor: "Forward Model",
                tocan: false
            },
            {
                odgovor: "Migration Model",
                tocan: false
            },
            {
                odgovor: "Model First",
                tocan: false
            },
            {
                odgovor: "Code First",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 125,
        pitanje: "Parovi oblika naziv=vrijednost navedeni iza upitnika u adresi neke stranice",
        odgovori: [
            {
                odgovor: "Query string",
                tocan: true
            },
            {
                odgovor: "URI string",
                tocan: false
            },
            {
                odgovor: "GET request",
                tocan: false
            },
            {
                odgovor: "POST request",
                tocan: false
            },
            {
                odgovor: "CGI parameter",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 126,
        pitanje: "U koju vrstu održavanja spada nadgradnja sustava da bi se riješili novi problemi",
        odgovori: [
            {
                odgovor: "perfektivno",
                tocan: true
            },
            {
                odgovor: "korektivno",
                tocan: false
            },
            {
                odgovor: "preventivno",
                tocan: false
            },
            {
                odgovor: "iterativno",
                tocan: false
            },
            {
                odgovor: "adaptivno",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 127,
        pitanje: "Modularno uvođenje novog sustava u primjenu ima",
        odgovori: [
            {
                odgovor: "srednji rizik, visok trošak i dugo trajanje",
                tocan: true
            },
            {
                odgovor: "nizak rizik, srednji trošak i kratko trajanje",
                tocan: false
            },
            {
                odgovor: "nizak rizik, nizak trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "srednji rizik, nizak trošak i dugo trajanje",
                tocan: false
            },
            {
                odgovor: "visok rizik, nizak trošak i dugo trajanje",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 128,
        pitanje: "Testiranje u kojem se provjerava kako cjelina radi, a probni slučajevi izvode se uvidom u programski kod naziva se",
        odgovori: [
            {
                odgovor: "strukturalno testiranje (white-box testing)",
                tocan: true
            },
            {
                odgovor: "kritično testiranje (red-box testing)",
                tocan: false
            },
            {
                odgovor: "testiranje autentičnosti (gray-box testing)",
                tocan: false
            },
            {
                odgovor: "funkcionalno testiranje (black-box testing)",
                tocan: false
            },
            {
                odgovor: "ekološko testiranje (green-box testing)",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 129,
        pitanje: "Testiranje jesu li zadovoljeni izvorni poslovni zahtjevi naziva se",
        odgovori: [
            {
                odgovor: "testiranje zahtjeva (requirements testing)",
                tocan: true
            },
            {
                odgovor: "funkcionalno testiranje (black-box testing)",
                tocan: false
            },
            {
                odgovor: "poslovno testiranje (business testing)",
                tocan: false
            },
            {
                odgovor: "strukturalno testiranje (white-box testing)",
                tocan: false
            },
            {
                odgovor: "testiranje autentičnosti (gray-box testing)",
                tocan: false
            }
        ],
        kategorija: 6

    },
    {
        id: 130,
        pitanje: "Za upit definiran s \n\n SELECT OznDrzave, NazDrzave FROM Drzava; \n\ni odgovarajuće instanciranje objekata tipa DbCommand i IDataReader za gore navedenu naredbu, što od navedenog NIJE ispravan način dohvata vrijednosti nekog retka u tablici Drzava?",
        odgovori: [
            {
                odgovor: "string oznaka = (string) reader.GetName('OznDrzave'); \nstring naziv = (string) reader.GetName('NazDrzave');",
                tocan: true
            },
            {
                odgovor: "string oznaka = reader[0].ToString(); \nstring naziv = reader[1].ToString();",
                tocan: false
            },
            {
                odgovor: "string oznaka = reader.GetString(0); \nstring naziv = reader.GetString(1);",
                tocan: false
            },
            {
                odgovor: "string oznaka = reader['OznDrzave'].ToString(); \nstring naziv = reader['NazDrzave].ToString();",
                tocan: false
            },
            {
                odgovor: "string oznaka = (string) reader['OznDrzave']; \nstring naziv = (string) reader['NazDrzave].;",
                tocan: false
            }
        ],
        kategorija: 5

    },
    {
        id: 131,
        pitanje: "Ako Automobil i Motocikl nasljeđuju MotornoVozilo onda je u postupak IspisiVozilo moguće poslati i List<Automobil>, jer je sučelje IEnumerable<T> \n void IspisiVozila(IEnumerable<MotornoVozilo> vozila) { \n\tfor(var vozilo in vozila) \n\t\tConsole.WriteLine(vozilo.Model); \n}",
        odgovori: [
            {
                odgovor: "kovarijantno",
                tocan: true
            },
            {
                odgovor: "kontravarijantno",
                tocan: false
            },
            {
                odgovor: "varijantno",
                tocan: false
            },
            {
                odgovor: "invarijantno",
                tocan: false
            },
            {
                odgovor: "irelevaltno",
                tocan: false
            }
        ],
        kategorija: 4

    },
    {
        id: 132,
        pitanje: "Dokazivanje da proizvod zadovoljava zahtjeve i uvjete preuzimanja naziva se",
        odgovori: [
            {
                odgovor: "provjera prihvatljivosti",
                tocan: true
            },
            {
                odgovor: "testiranje standarnosti",
                tocan: false
            },
            {
                odgovor: "testiranje performansi",
                tocan: false
            },
            {
                odgovor: "testiranje korisničkog sučelja",
                tocan: false
            },
            {
                odgovor: "testiranje dokumentacije",
                tocan: false
            }
        ],
        kategorija: 3

    },
    {
        id: 133,
        pitanje: "Ako je SifArtikla primarni ključ za tablicu Artikl te ako prije izvođenja programskog odsječka u tablici Artikl nije bilo artikala sa šiframa 0-5, izvođenjem sljedećeg programskog odsječka \n\nfor(int i=1; i<10; i++) \n{ \n\tusing (var context = new FirmaContext()) \n\t{ \n\t\tArtikl artikl = new Artikl \n\t\t{ \n\t\tSifArtikla = i/2, CijArtikla = 10m, \n\t\t\tJedMjere = 'kom', NazArtikla = i.ToString() \n\t\t} \n\t\tcontext.Artikl.Add(artikl); \n\t\tontext.SaveChanges(); \n\t}; \n} \n\n broj zapisa u tablici Artikl povećavt će se za",
        odgovori: [
            {
                odgovor: "0",
                tocan: true
            },
            {
                odgovor: "2",
                tocan: false
            },
            {
                odgovor: "6",
                tocan: false
            },
            {
                odgovor: "5",
                tocan: false
            },
            {
                odgovor: "1",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 134,
        pitanje: "Koja razina važnosti zapisa se koristi za evidentiranje zapisa trajnijeg karaktera koji služi za praćenje toka rada aplikacije (npr. informacije o posjetu određenoj stranici ili evidencija postavljenih kriterija pretrage)?",
        odgovori: [
            {
                odgovor: "Information",
                tocan: true
            },
            {
                odgovor: "Warning",
                tocan: false
            },
            {
                odgovor: "Debug",
                tocan: false
            },
            {
                odgovor: "Trace",
                tocan: false
            },
            {
                odgovor: "Error",
                tocan: false
            }
        ],
        kategorija: 2

    },
    {
        id: 135,
        pitanje: "Neka se na adresama https://servis/app/mjesto i https://server/appdrzava nalaze web-servisi za rad s mjestima te neka za manipulaciju podacima koriste GET, POST, PUT i DELETE metode. \nPrilikom dohvata svim mjesta ili država web-servis vraća popis mjesta i država bez dodatnih informacija. \nPrilikom dodavanja novog podatka korisniku se vraća status 201 uz pohranjeni podatak i adresu koja jednoznačno određuje dodatni podatak. \nKoji nivo Richardsonovog modela zrelosti zadovoljava ovaj web-servis",
        odgovori: [
            {
                odgovor: "2",
                tocan: true
            },
            {
                odgovor: "PATCH",
                tocan: false
            },
            {
                odgovor: "GET + POST",
                tocan: false
            },
            {
                odgovor: "1",
                tocan: false
            },
            {
                odgovor: "3",
                tocan: false
            }
        ],
        kategorija: 1

    },
]


export default pitanja