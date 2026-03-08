import { type Language, type Translation } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    role: "Software Engineer",
    location: "Celje, Slovenia",
    trajectory: "Experience",
    inventory: "Technical skills",
    academic: "Academic Record",
    interests: "Personal Interests",
    keyProjects: "Key Projects",
    coreResponsibilities: "Core Responsibilities",
    languages: "Languages",
    frameworks: "Frameworks",
    tools: "Tools & Infrastructure",
    ongoing: "Ongoing",
    present: "Present",
    published: "Published in Celje",
    copyright: "Copyright ©",        
    experience: [
      {
        company: "COMTRADE360 | HPE consultant",
        role: "Software Engineer",
        period: "Sept. 2022 – Present",
        location: "Ljubljana, Slovenia",
        technologies: ["Spring", "Spring-Boot", "Java", "Docker", "Kibana", "Grafana", "Prometheus", "FitNesse", "Lua", "Python", "Kong"],
        summary: "Spearheading infrastructure projects for HPE, focusing on identity services and API gateway optimization.",
        projects: [
          "Maintained an application and support modules integrating various identity and authorization services based on OAuth2.",
          "Developed features for a system enhancing user profiles with detailed information and roles.",
          "Developed a custom Kong API gateway plugin to process client input before forwarding to upstream services.",
          "Development of a RAG solution for internal documentation querying."
        ],
        responsibilities: [
          "Maintained and optimized existing applications to ensure performance.",
          "Implemented alerting and monitoring solutions using Kibana, Grafana and Prometheus.",
          "Developed and executed unit and integration tests.",
          "Mentored developers and provided guidance on best practices."
        ]
      },
      {
        company: "Navteh d.o.o",
        role: "Fullstack Software Engineer",
        period: "May 2020 – Sept. 2022",
        location: "Celje, Slovenia",
        technologies: ["Java", "Kotlin", "Dropwizard", "MySQL", "PostgreSQL", "Angular", "JavaScript", "TypeScript", "jQuery", "CSS", "HTML"],
        summary: "Developed logistics and transport management systems for regional operations.",
        projects: [
          "Developed a web application for managing work time and generating payment information.",
          "Created a navigational web application for transport vehicles, akin to Google Maps.",
          "Built a dispatch application for managing transport orders and vehicle details.",
          "Designed data processing applications for retrieving and forwarding data to external services."
        ],
        responsibilities: [
          "Design and implementation of backend and frontend architecture.",
          "Managed database tasks including creation, optimization and modification.",
          "Rewrote existing applications to enhance performance and user experience.",
          "Optimized and maintained legacy applications."
        ]
      },
      {
        company: "Comtrade gaming",
        role: "Fullstack Software Engineer",
        period: "Dec. 2019 – May 2020",
        location: "Maribor, Slovenia",
        technologies: [".NET", "ASP.NET", "C#", "jQuery", "JavaScript", "MSSQL", "SVN", "JIRA", "Jenkins"],
        summary: "Supported high-traffic online betting platforms and backoffice systems.",
        projects: [
          "Comtrade gaming support (backoffice) and commercial product (online betting platform)."
        ],
        responsibilities: [
          "Developed and executed unit tests to ensure code quality.",
          "Implemented new functionalities on both backend and frontend.",
          "Optimized database performance to improve efficiency."
        ]
      },
      {
        company: "CETIS d.d",
        role: "Software Engineer",
        period: "Nov. 2018 – Dec. 2019",
        location: "Celje, Slovenia",
        technologies: [".NET", "ASP.NET", "WPF", "C#", "MSSQL", "Mercurial", "jQuery", "HTML", "CSS"],
        summary: "Engineered desktop solutions for secure document manufacturing and OCR identification.",
        projects: [
          "Developed an application to identify faulty manufactured ID cards using OCR cameras and barcode scanners.",
          "Implemented an ID card login system.",
          "Created software for ID card generation and printing."
        ],
        responsibilities: [
          "Designed and implemented desktop applications to support manufacturing processes.",
          "Integrated and ensured connectivity with external and peripheral devices."
        ]
      },
      {
        company: "Faculty of Electrical Engineering and Computer Science Maribor | Student work",
        role: "Mobile developer",
        period: "apr. 2018 – sept. 2018",
        location: "Maribor, Slovenia",
        technologies: [ "React Native", "CSS", "JavaScript", "MySQL", "Git" ],
        summary: "Mobile application development",
        projects: [
          "Developed a mobile application to display available bus stops and arrival times, identify the nearest bus stop relative to the user’s location, and track selected buses.",          
        ],
        responsibilities: [
          "Collaborated with designers to create and implement visual components. ",
          "Facilitated backend-frontend communication to ensure seamless data integration and user experience "
        ]
      }
    ],
    education: [
      {
        school: "Faculty of Electrical Engineering and Computer Science Maribor",
        period: "2014 - Ongoing",
        location: "Maribor, Slovenia"
      },
      {
        school: "Lava high school – European section",
        period: "2007 - 2012",
        location: "Celje, Slovenia"
      }
    ],
    interestsList: ["Weightlifting", "Calisthenics", "Tennis", "Volleyball", "Bouldering", "Hiking", "Trekking", "Gaming", "Guitar", "Sci-fi", "Philosophy", "Fantasy", "D&D", "Plants", "Meditation"]
  },
  sl: {
    role: "Programski inženir",
    location: "Celje, Slovenija",
    trajectory: "Izkušnje",
    inventory: "Tehnični veščine",
    academic: "Izobrazba",
    interests: "Osebni interesi",
    keyProjects: "Ključni projekti",
    coreResponsibilities: "Glavne odgovornosti",
    languages: "Jeziki",
    frameworks: "Ogrodja",
    tools: "Orodja in infrastruktura",
    ongoing: "V teku",
    present: "Danes",
    published: "Objavljeno v Celju",
    copyright: "Avtorske pravice ©",    
    experience: [
      {
        company: "COMTRADE360 | HPE svetovalec",
        role: "Inženir programske opreme",
        period: "sept. 2022 – Danes",
        location: "Ljubljana, Slovenija",
        technologies: ["Spring", "Spring-Boot", "Java", "Docker", "Kibana", "Grafana", "Prometheus", "FitNesse", "Lua", "Python", "Kong"],
        summary: "Vodenje infrastrukturnih projektov za HPE, s poudarkom na identitetnih storitvah in optimizaciji API prehodov.",
        projects: [
          "Vzdrževanje aplikacije in podpornih modulov, ki integrirajo različne identitetne in avtorizacijske storitve na podlagi OAuth2.",
          "Razvoj funkcij za sistem, ki izboljšuje uporabniške profile s podrobnimi informacijami in vlogami.",
          "Razvoj po meri izdelanega vtičnika za Kong API prehod za obdelavo vhodnih podatkov strank pred posredovanjem storitvam.",
          "Razvoj RAG rešitve za poizvedovanje po interni dokumentaciji."
        ],
        responsibilities: [
          "Vzdrževanje in optimizacija obstoječih aplikacij za zagotavljanje zmogljivosti.",
          "Implementacija rešitev za obveščanje in spremljanje z uporabo Kibana, Grafana in Prometheus.",
          "Razvoj in izvajanje unit in integracijskih testov.",
          "Mentorstvo razvijalcem in svetovanje o najboljših praksah."
        ]
      },
      {
        company: "Navteh d.o.o",
        role: "Fullstack inženir programske opreme",
        period: "maj 2020 – sept. 2022",
        location: "Celje, Slovenija",
        technologies: ["Java", "Kotlin", "Dropwizard", "MySQL", "PostgreSQL", "Angular", "JavaScript", "TypeScript", "jQuery", "CSS", "HTML"],
        summary: "Razvoj logističnih sistemov in sistemov za upravljanje transporta za regionalne operacije.",
        projects: [
          "Razvoj spletne aplikacije za upravljanje delovnega časa in generiranje podatkov za plačila.",
          "Izdelava navigacijske spletne aplikacije za transportna vozila, podobne Google Maps.",
          "Izgradnja dispečerske aplikacije za upravljanje transportnih naročil in podrobnosti o vozilih.",
          "Načrtovanje aplikacij za obdelavo podatkov za pridobivanje in posredovanje podatkov zunanjim storitvam."
        ],
        responsibilities: [
          "Načrtovanje in implementacija backend in frontend arhitekture.",
          "Upravljanje nalog v bazi podatkov, vključno z ustvarjanjem, optimizacijo in spreminjanjem.",
          "Prepis obstoječih aplikacij za izboljšanje zmogljivosti in uporabniške izkušnje.",
          "Optimizacija in vzdrževanje zapuščenih aplikacij."
        ]
      },
      {
        company: "Comtrade gaming",
        role: "Fullstack inženir programske opreme",
        period: "dec. 2019 – maj 2020",
        location: "Maribor, Slovenija",
        technologies: [".NET", "ASP.NET", "C#", "jQuery", "JavaScript", "MSSQL", "SVN", "JIRA", "Jenkins"],
        summary: "Podpora visoko obremenjenim spletnim stavnim platformam in zalednim sistemom.",
        projects: [
          "Podpora zalednim sistemom Comtrade gaming in komercialnemu produktu (spletna stavna platforma)."
        ],
        responsibilities: [
          "Razvoj in izvajanje unit testov za zagotavljanje kakovosti kode.",
          "Implementacija novih funkcionalnosti na backend in frontend delu.",
          "Optimizacija zmogljivosti baze podatkov za izboljšanje učinkovitosti."
        ]
      },
      {
        company: "CETIS d.d",
        role: "Fullstack inženir programske opreme",
        period: "nov. 2018 – dec. 2019",
        location: "Celje, Slovenija",
        technologies: [".NET", "ASP.NET", "WPF", "C#", "MSSQL", "Mercurial", "jQuery", "HTML", "CSS"],
        summary: "Inženiring namiznih rešitev za varno izdelavo dokumentov in OCR identifikacijo.",
        projects: [
          "Razvoj aplikacije za identifikacijo napak pri izdelavi osebnih izkaznic z uporabo OCR kamer in čitalnikov črtnih kod.",
          "Implementacija sistema za prijavo z osebno izkaznico.",
          "Izdelava programske opreme za generiranje in tiskanje osebnih izkaznic."
        ],
        responsibilities: [
          "Načrtovanje in implementacija namiznih aplikacij za podporo proizvodnim procesom.",
          "Integracija in zagotavljanje povezljivosti z zunanjimi in perifernimi napravami."
        ]
      },
      {
        company: "Fakulteta za elektrotehniko, računalništvo in informatiko Maribor | Študentsko delo",
        role: "Mobilni razvijalec (študentsko delo)",
        period: "apr. 2018 – sept. 2018",
        location: "Maribor, Slovenija",
        technologies: ["React Native", "CSS", "JavaScript", "MySQL", "Git"],
        summary: "Razvoj mobilnih aplikacij",
        projects: [
          "Razvili mobilno aplikacijo za prikaz razpoložljivih avtobusnih postaj in časov prihoda, prepoznavanje najbližje postaje glede na lokacijo uporabnika ter sledenje izbranim avtobusom."
        ],
        responsibilities: [
          "Sodelovanje z oblikovalci pri ustvarjanju in implementaciji vizualnih komponent.",
          "Omogočanje komunikacije med backendom in frontendom za nemoteno integracijo podatkov in uporabniško izkušnjo."
        ]
      }
    ],
    education: [
      {
        school: "Fakulteta za elektrotehniko, računalništvo in informatiko Maribor",
        period: "2014 - V teku",
        location: "Maribor, Slovenija"
      },
      {
        school: "Srednja šola ŠC Celje, Gimnazija Lava – evropski oddelek",
        period: "2007 - 2012",
        location: "Celje, Slovenija"
      }
    ],
    interestsList: ["Dvigovanje uteži", "Kalistenika", "Tenis", "Odbojka", "Balvaniranje", "Pohodništvo", "Trekking", "Igranje iger", "Kitara", "Znanstvena fantastika", "Filozofija", "Fantazija", "D&D", "Rastline", "Meditacija"]
  }
};
