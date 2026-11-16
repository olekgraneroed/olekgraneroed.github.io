// Boksmak – katalog
// Norske bøker og bøker som finnes i norsk oversettelse.
//
// utdrag: ekte tekst fra verk som er falt i det fri (forfatteren døde for mer enn 70 år siden).
//         Rettskrivingen følger den opprinnelige utgaven. Kontroller ordlyden mot
//         Nasjonalbibliotekets digitale utgave (nb.no) før lansering.
// utdrag: null betyr at boken er vernet. Da lenker appen til lovlige utdrag hos
//         Nasjonalbiblioteket (Bokhylla) i stedet for å vise tekst selv.

window.KATALOG = [
  {
    id: "sult",
    tittel: "Sult",
    forfatter: "Knut Hamsun",
    aar: 1890,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "Intens, febrilsk og nær – en ung forfatter går sulten rundt i Kristiania.",
    tags: ["klassiker", "psykologisk", "by", "oslo", "kristiania", "sult", "fattigdom", "jeg-forteller", "modernisme", "intens", "mørk", "kunstner", "ensomhet"],
    utdrag: {
      tekst: "Det var i den Tid, jeg gik omkring og sulted i Kristiania, denne forunderlige By, som ingen forlader, før han har faaet Mærker af den . . . .\n\nJeg ligger vaagen paa min Kvist og hører en Klokke nedenunder mig slaa seks Slag; det var allerede ganske lyst, og Folk begyndte at færdes op og ned i Trapperne.",
      kilde: "Førsteutgaven, 1890. Falt i det fri."
    }
  },
  {
    id: "victoria",
    tittel: "Victoria",
    forfatter: "Knut Hamsun",
    aar: 1898,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "En vemodig kjærlighetshistorie mellom møllerens sønn og slottsdatteren.",
    tags: ["klassiker", "kjærlighet", "romantikk", "romantisk", "vemodig", "trist", "stand", "barndom", "lyrisk", "vakker"],
    utdrag: {
      tekst: "Møllerens Søn gik og tænkte. Han var en stor Fyr paa fjorten Aar, brun af Sol og Vind og fuld af Tanker.",
      kilde: "Førsteutgaven, 1898. Falt i det fri."
    }
  },
  {
    id: "pan",
    tittel: "Pan",
    forfatter: "Knut Hamsun",
    aar: 1894,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "Nordlandssommer, skog og en løytnant som forelsker seg – natur og lidenskap.",
    tags: ["klassiker", "natur", "nordland", "sommer", "skog", "kjærlighet", "lidenskap", "lyrisk", "jeg-forteller", "ensomhet", "jakt"],
    utdrag: {
      tekst: "I disse sidste Dage har jeg tænkt og tænkt paa Nordlandssommerens evige Dag. Jeg sidder her og tænker paa den og paa en Hytte, som jeg boede i, og paa Skogen bag Hytten, og jeg giver mig til at skrive lidt ned for at fordrive Tiden, og for min Fornøielses Skyld.",
      kilde: "Førsteutgaven, 1894. Falt i det fri."
    }
  },
  {
    id: "mysterier",
    tittel: "Mysterier",
    forfatter: "Knut Hamsun",
    aar: 1892,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "middels",
    stemning: "En gåtefull fremmed i gul dress dukker opp i en liten kystby og snur alt på hodet.",
    tags: ["klassiker", "mysterium", "gåte", "kystby", "småby", "psykologisk", "rar", "underlig", "humor", "modernisme"],
    utdrag: {
      tekst: "Midt paa Sommeren 1891 begyndte der pludselig at foregaa höist mærkværdige Ting i en liden norsk Kystby.",
      kilde: "Førsteutgaven, 1892. Falt i det fri."
    }
  },
  {
    id: "markens-grode",
    tittel: "Markens grøde",
    forfatter: "Knut Hamsun",
    aar: 1917,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "lang",
    stemning: "En mann rydder jord i villmarken og bygger et liv – rolig, jordnært og episk.",
    tags: ["klassiker", "natur", "villmark", "gård", "bonde", "familie", "rolig", "episk", "nybrott", "nobelpris", "landsbygd"],
    utdrag: {
      tekst: "Den lange, lange Sti over Myrene og ind i Skogene, hvem har traakket op den? Manden, Mennesket, den første som var her. Det var ingen Sti før han kom.",
      kilde: "Førsteutgaven, 1917. Falt i det fri."
    }
  },
  {
    id: "kristin",
    tittel: "Kristin Lavransdatter: Kransen",
    forfatter: "Sigrid Undset",
    aar: 1920,
    spraak: "norsk",
    sjanger: "Historisk roman",
    lengde: "lang",
    stemning: "Middelalder-Norge, trosliv og en ung kvinne som velger kjærligheten mot farens vilje.",
    tags: ["klassiker", "historisk", "middelalder", "kjærlighet", "familie", "tro", "kvinne", "episk", "gudbrandsdalen", "nobelpris", "lang", "slektsroman"],
    utdrag: {
      tekst: "Ved skiftet efter Ivar Gjesling paa Sundbu i 1306 kom hans jordegods i Sil til datter hans Ragnfrid og hendes mand Lavrans Bjørgulfsøn.",
      kilde: "Førsteutgaven, 1920. Falt i det fri."
    }
  },
  {
    id: "peer-gynt",
    tittel: "Peer Gynt",
    forfatter: "Henrik Ibsen",
    aar: 1867,
    spraak: "norsk",
    sjanger: "Dramatisk dikt",
    lengde: "middels",
    stemning: "Løgnhalsen Peer på eventyrlig reise gjennom troll, ørken og sitt eget liv.",
    tags: ["klassiker", "drama", "skuespill", "eventyr", "troll", "fantasi", "humor", "vers", "dikt", "reise", "identitet"],
    utdrag: {
      tekst: "ÅSE: Peer, du lyver!\nPEER GYNT (uden at standse): Nej, jeg gør ikke!\nÅSE: Nu, saa band paa, det er sandt!\nPEER GYNT: Hvorfor bande?\nÅSE: Tvi; du tør ej! Alt i hob er Tøv og Tant!",
      kilde: "Førsteutgaven, 1867. Falt i det fri."
    }
  },
  {
    id: "dukkehjem",
    tittel: "Et dukkehjem",
    forfatter: "Henrik Ibsen",
    aar: 1879,
    spraak: "norsk",
    sjanger: "Skuespill",
    lengde: "kort",
    stemning: "Julen hos Helmer – fasaden sprekker, og Nora må velge seg selv.",
    tags: ["klassiker", "drama", "skuespill", "ekteskap", "kvinne", "frigjøring", "jul", "familie", "hemmelighet", "samfunn", "kort"],
    utdrag: {
      tekst: "NORA: Gem juletræet godt, Helene. Børnene må endelig ikke få se det før iaften, når det er pyntet. (til budet; tager portemonnæen frem.) Hvormeget –?\nBUDET: Halvtreds øre.\nNORA: Der er en krone. Nej, behold det hele.",
      kilde: "Førsteutgaven, 1879. Falt i det fri."
    }
  },

  // ——— Vernede norske bøker (utdrag via Nasjonalbiblioteket) ———
  {
    id: "sofies-verden",
    tittel: "Sofies verden",
    forfatter: "Jostein Gaarder",
    aar: 1991,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "lang",
    stemning: "En 14-åring får mystiske brev og tar et lynkurs i filosofiens historie.",
    tags: ["filosofi", "mysterium", "ungdom", "lærerik", "tankevekkende", "brev", "gåte", "moderne"],
    utdrag: null
  },
  {
    id: "fuglane",
    tittel: "Fuglane",
    forfatter: "Tarjei Vesaas",
    aar: 1957,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "Stille og sårt om Mattis, som ser verden annerledes, og søsteren Hege.",
    tags: ["nynorsk", "natur", "søsken", "stille", "sår", "vakker", "lyrisk", "utenforskap", "innsjø", "klassiker"],
    utdrag: null
  },
  {
    id: "is-slottet",
    tittel: "Is-slottet",
    forfatter: "Tarjei Vesaas",
    aar: 1963,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "Vinter, et frossent fossefall og et vennskap mellom to jenter – kort og iskaldt vakkert.",
    tags: ["nynorsk", "vinter", "vennskap", "barndom", "sorg", "natur", "lyrisk", "kort", "klassiker", "mysterium"],
    utdrag: null
  },
  {
    id: "ut-og-stjaele",
    tittel: "Ut og stjæle hester",
    forfatter: "Per Petterson",
    aar: 2003,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "middels",
    stemning: "En eldre mann i en hytte mot østgrensen husker sommeren han var femten.",
    tags: ["moderne", "far", "sønn", "minner", "natur", "skog", "krig", "stille", "sorg", "oppvekst"],
    utdrag: null
  },
  {
    id: "naiv-super",
    tittel: "Naiv. Super.",
    forfatter: "Erlend Loe",
    aar: 1996,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "En 25-åring mister grepet og finner trøst i en ball og en hammerbenk. Morsom og lun.",
    tags: ["moderne", "humor", "morsom", "lett", "kort", "livskrise", "eksistensiell", "feelgood", "ung"],
    utdrag: null
  },
  {
    id: "doppler",
    tittel: "Doppler",
    forfatter: "Erlend Loe",
    aar: 2004,
    spraak: "norsk",
    sjanger: "Roman",
    lengde: "kort",
    stemning: "En mann flytter ut i skogen med en elgkalv. Satire over det norske A4-livet.",
    tags: ["moderne", "humor", "satire", "skog", "natur", "elg", "morsom", "livskrise", "kort"],
    utdrag: null
  },
  {
    id: "flaggermusmannen",
    tittel: "Flaggermusmannen",
    forfatter: "Jo Nesbø",
    aar: 1997,
    spraak: "norsk",
    sjanger: "Krim",
    lengde: "middels",
    stemning: "Harry Holes første sak – en drapsetterforskning i Sydney.",
    tags: ["krim", "spenning", "spennende", "thriller", "detektiv", "politi", "drap", "australia", "moderne", "serie"],
    utdrag: null
  },

  // ——— Bøker i norsk oversettelse ———
  {
    id: "forbrytelse-og-straff",
    tittel: "Forbrytelse og straff",
    forfatter: "Fjodor Dostojevskij",
    aar: 1866,
    spraak: "oversatt",
    oversattFra: "russisk",
    sjanger: "Roman",
    lengde: "lang",
    stemning: "En fattig student begår et drap og jages av sin egen samvittighet.",
    tags: ["klassiker", "psykologisk", "drap", "skyld", "samvittighet", "russland", "by", "fattigdom", "mørk", "intens", "filosofi"],
    utdrag: null
  },
  {
    id: "stolthet-og-fordom",
    tittel: "Stolthet og fordom",
    forfatter: "Jane Austen",
    aar: 1813,
    spraak: "oversatt",
    oversattFra: "engelsk",
    sjanger: "Roman",
    lengde: "middels",
    stemning: "Vittig og romantisk om Elizabeth Bennet og den stolte Mr. Darcy.",
    tags: ["klassiker", "kjærlighet", "romantikk", "romantisk", "humor", "vittig", "england", "familie", "ekteskap", "feelgood"],
    utdrag: null
  },
  {
    id: "hundre-aars-ensomhet",
    tittel: "Hundre års ensomhet",
    forfatter: "Gabriel García Márquez",
    aar: 1967,
    spraak: "oversatt",
    oversattFra: "spansk",
    sjanger: "Roman",
    lengde: "lang",
    stemning: "Magisk realisme og sju generasjoner av familien Buendía i landsbyen Macondo.",
    tags: ["klassiker", "magisk", "magisk realisme", "familie", "slektsroman", "episk", "latin-amerika", "fantasi", "nobelpris"],
    utdrag: null
  },
  {
    id: "mesteren-og-margarita",
    tittel: "Mesteren og Margarita",
    forfatter: "Mikhail Bulgakov",
    aar: 1967,
    spraak: "oversatt",
    oversattFra: "russisk",
    sjanger: "Roman",
    lengde: "lang",
    stemning: "Djevelen kommer til Moskva – satirisk, vill og overraskende morsom.",
    tags: ["klassiker", "satire", "humor", "fantasi", "djevel", "russland", "moskva", "kjærlighet", "absurd", "magisk"],
    utdrag: null
  },
  {
    id: "1984",
    tittel: "1984",
    forfatter: "George Orwell",
    aar: 1949,
    spraak: "oversatt",
    oversattFra: "engelsk",
    sjanger: "Roman",
    lengde: "middels",
    stemning: "Storebror ser deg. En dystopi om overvåking, makt og sannhet.",
    tags: ["klassiker", "dystopi", "politikk", "overvåking", "samfunn", "mørk", "fremtid", "science fiction", "tankevekkende"],
    utdrag: null
  },
  {
    id: "den-lille-prinsen",
    tittel: "Den lille prinsen",
    forfatter: "Antoine de Saint-Exupéry",
    aar: 1943,
    spraak: "oversatt",
    oversattFra: "fransk",
    sjanger: "Fortelling",
    lengde: "kort",
    stemning: "En flyger i ørkenen møter en liten prins fra en asteroide. Kort, vis og varm.",
    tags: ["klassiker", "kort", "vennskap", "filosofi", "eventyr", "barn", "voksne", "varm", "feelgood", "lett", "tankevekkende"],
    utdrag: null
  },
  {
    id: "min-genial-venninne",
    tittel: "Min geniale venninne",
    forfatter: "Elena Ferrante",
    aar: 2011,
    spraak: "oversatt",
    oversattFra: "italiensk",
    sjanger: "Roman",
    lengde: "middels",
    stemning: "To jenter vokser opp i et fattig Napoli – vennskap, rivalisering og klasse.",
    tags: ["moderne", "vennskap", "oppvekst", "italia", "kvinne", "klasse", "serie", "by", "intens"],
    utdrag: null
  }
];
