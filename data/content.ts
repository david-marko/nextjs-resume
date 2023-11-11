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
