export const contentData = [
  {
    title: "Academic Background",
    items: [
      {
        title: "LLM: Information Technology & Intellectual Property Law",
        subTitle: "University of Sussex, United Kingdom",
        date: "2020 - 2021",
        description: "Specialized Tech and IP Law",
      },
      {
        title: "Bachelor's of Law: LLB Honours",
        subTitle: "University of El-Neelian, Khartoum Sudan",
        date: "2009 - 2014",
        description: "",
      },
    ],
  },
  {
    title: "Awards and Grants",
    items: [
      {
        title: "Chevening United Kingdom Scholarship for Master's Degree",
        subTitle: "",
        date: "2021",
        description: "",
      },
    ],
  },
  {
    title: "Professional Licenses and Certificates",
    items: [
      {
        title: "Licensed Advocate – South Sudan Bar Association- Juba South Sudan",
        subTitle: "",
        date: "March 2015",
        description: "",
      },
    ],
  },
  {
    title: "Work Experience",
    items: [
      {
        title: "Managing Partner",
        subTitle: "Witness Law Advocates - Full Time",
        date: "Dec 2021 to Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Chief Executive Officer",
        subTitle: "Center for Internet and Communications",
        date: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Consultant",
        subTitle: "Internet Sans Frontieres",
        date: "June 2021 to Jan 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Senior Advocate",
        subTitle: "Piyanile & Co. Advocates",
        date: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
      {
        title: "Advocate & Legal Consultant",
        subTitle: "Center for Internet and Communications",
        date: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
      },
    ],
  },
  {
    title: "Voluntary Experience",
    items: [
      {
        title: "Legal Consultant",
        subTitle: "",
        date: "Nov 2014 - Oct 2020",
        description: "Volunteered as a Legal Consultant for the Juba Massacre of 1992 Widows and Orphans Association; a local association seeking justice for War a \
        attrocities during the Sudan Civil Wars ",
      },
      {
        title: "Peace and Youth Advocate",
        subTitle: "Anataban Art Initiative",
        date: "2016 - 2020",
        description: "",
      },
      {
        title: "Committee Secretary",
        subTitle: "South Sudan Bar Association",
        date: "Feb 2020 - Oct 2021",
        description: "",
      },
      {
        title: "Poet and Consultant",
        subTitle: "Khalimat Poetry Club",
        date: "Mar 2017 - Oct 2020",
        description: "Joined the club as a poet and advised on Intellectual Property laws, especially on copyright issues.",
      },
    ]
  },
  {
    title: "Skills",
    items: [
      {
        title: "Proficient in English Language, Arabic, passive Spanish and Madi",
        subTitle: "",
        date: "",
        description: "",
      },
      {
        title: "Profecient in using tools and technologies that facilitates work in office",
        subTitle: "Microsoft Word, Powerpoint, Outlook, and other technological communication tools",
        date: "",
        description: "",
      },
    ]
  },
  {
    title: "Professional Affiliations",
    items: [
      {
        title: "Member of Society for Computer and Laws (SCL)",
        subTitle: "An information technology Society that advocates for better regulation in the United Kingdom and Europe",
        date: "",
        description: "",
      },
      {
        title: "Member of Gikii Society",
        subTitle: "a network of researchers and scholars in the sector of information technology laws in the UK and Europe",
        date: "",
        description: "",
      },
      {
        title: "Member of South Sudan Human Rights Advocates",
        subTitle: "a non profit organization that lobbies and advocates for human rights in South Sudan",
        date: "",
        description: "",
      },
      {
        title: "Member of South Sudan Bar Association",
        subTitle: "the professional body in charge of regulating lawyers in South Sudan",
        date: "",
        description: "",
      },
    ],
  },
  {
    title: "Referees",
    items: [
      {
        title: "Prof. Christ Marsden",
        subTitle: "",
        date: "",
        description: "",
      },
      {
        title: "Prof. Andres Guadamu",
        subTitle: "",
        date: "",
        description: "",
      },
      {
        title: "Adv. Lawrence Kurbandi",
        subTitle: "",
        date: "",
        description: "",
      },
    ]
  }
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
