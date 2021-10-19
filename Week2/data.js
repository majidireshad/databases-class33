const authorsData = [
  {
    author_no: 1,
    author_name: "Ronald C Kessler",
    university: "Harvard University",
    date_of_birth: "1947-04-26",
    h_index: 300,
    gender: "M",
  },
  {
    author_no: 2,
    author_name: "Dr. JoAnn E. Manson",
    university: "Harvard Medical School",
    date_of_birth: "1953-01-01",
    h_index: 294,
    gender: "F",
  },
  {
    author_no: 3,
    author_name: "Joseph E. Stiglitz",
    university: "Columbia University",
    date_of_birth: "1943-02-09",
    h_index: 231,
    gender: "M",
  },
  {
    author_no: 4,
    author_name: "Karl Friston",
    university: "University College London",
    date_of_birth: "1959-07-12",
    h_index: 251,
    gender: "M",
  },
  {
    author_no: 5,
    author_name: "Noam Chomsky",
    university: "MIT",
    date_of_birth: "1928-12-07",
    h_index: 192,
    gender: "M",
  },
  {
    author_no: 6,
    author_name: "Elaine Jaffe",
    university: "National Cancer Institute",
    date_of_birth: "1969-09-22",
    h_index: 178,
    gender: "F",
  },
  {
    author_no: 7,
    author_name: "Deborah Cook",
    university: "McMaster University",
    date_of_birth: "1955-01-20",
    h_index: 188,
    gender: "F",
  },
  {
    author_no: 8,
    author_name: "Sir Stephen o'rahilly",
    university: "University of Cambridge",
    date_of_birth: "1965-10-26",
    h_index: 189,
    gender: "M",
  },
  {
    author_no: 9,
    author_name: "Jiaguo Yu",
    university: "Technical University of Wuhan",
    date_of_birth: "1968-08-21",
    h_index: 190,
    gender: "M",
  },
  {
    author_no: 10,
    author_name: "K Barry Sharpless",
    university: "University of Berlin",
    date_of_birth: "1957-12-18",
    h_index: 180,
    gender: "M",
  },
  {
    author_no: 11,
    author_name: "kypros nicolaides",
    university: "Oxford",
    date_of_birth: "1956-07-17",
    h_index: 183,
    gender: "M",
  },
  {
    author_no: 12,
    author_name: "Wilmar Schaufeli",
    university: "Utrecht University",
    date_of_birth: "1956-03-01",
    h_index: 181,
    gender: "M",
  },
  {
    author_no: 13,
    author_name: "Arnold B Bakker",
    university: "Erasmus University",
    date_of_birth: "1964-07-19",
    h_index: 180,
    gender: "M",
  },
  {
    author_no: 14,
    author_name: "Zena Werb",
    university: "University of California San Francisco",
    date_of_birth: "1961-09-26",
    h_index: 176,
    gender: "F",
  },
  {
    author_no: 15,
    author_name: "Jack Strominger",
    university: "Harvard",
    date_of_birth: "1945-08-14",
    h_index: 190,
    gender: "M",
  },
];

const mentors = [2, 4, 5, 1, 2, 9, 8, 4, 3, 2, 1, 5, 7, 4, 6];

const researchPaperData = [
  {
    paper_id: 1,
    paper_title:
      "Posttraumatic stress disorder in the National Comorbidity Survey",
    conference: "American Medical Association",
    publish_date: "1995/12/1",
  },
  {
    paper_id: 2,
    paper_title:
      "Diet, lifestyle, and the risk of type 2 diabetes mellitus in women",
    conference: "New England journal of medicine",
    publish_date: "2001-02-14",
  },
  {
    paper_id: 3,
    paper_title: "Monopolistic competition and optimum product diversity",
    conference: "The American",
    publish_date: "1977-06-01",
  },
  {
    paper_id: 4,
    paper_title: "The free-energy principle: a unified brain theory?",
    conference: "Nature",
    publish_date: "2015-09-25",
  },
  {
    paper_id: 5,
    paper_title: "The minimalist program",
    conference: "MIT",
    publish_date: "2014-12-19",
  },
  {
    paper_id: 6,
    paper_title:
      "WHO classification of tumours of haematopoietic and lymphoid tissues",
    conference: "International agency for research on cancer",
    publish_date: "2008-09-20",
  },
  {
    paper_id: 7,
    paper_title:
      "Improving the quality of reports of meta-analyses of randomised controlled trials: the QUOROM statement",
    conference: "Oncology Research and Treatment",
    publish_date: "2000-02-24",
  },
  {
    paper_id: 8,
    paper_title:
      "Genetic studies of body mass index yield new insights for obesity biology",
    conference: "WCAEBE",
    publish_date: "2015-04-24",
  },
  {
    paper_id: 9,
    paper_title: "Graphene-based semiconductor photocatalysts",
    conference: "Chemical Society",
    publish_date: "2012-05-01",
  },
  {
    paper_id: 10,
    paper_title: "Catalytic asymmetric dihydroxylation",
    conference: "Chemical reviews",
    publish_date: "1994-12-01",
  },
  {
    paper_id: 11,
    paper_title:
      "Absence of nasal bone in fetuses with trisomy 21 at 11–14 weeks of gestation: an observational study",
    conference: "Lancet",
    publish_date: "2001-08-01",
  },
  {
    paper_id: 12,
    paper_title: "Job burnout",
    conference: "ARS",
    publish_date: "2001-02-01",
  },
  {
    paper_id: 13,
    paper_title:
      "Job demands, job resources, and their relationship with burnout and engagement: A multi‐sample study",
    conference: "SIGCOMM",
    publish_date: "2020-04-11",
  },
  {
    paper_id: 14,
    paper_title:
      "New functions for the matrix metalloproteinases in cancer progression",
    conference: "NRS",
    publish_date: "2002-03-09",
  },
  {
    paper_id: 15,
    paper_title:
      "Structure of the human class I histocompatibility antigen, HLA-A2",
    conference: "Nature",
    publish_date: "1987-12-18",
  },
  {
    paper_id: 16,
    paper_title: "Physics of chemoreception",
    conference: "H.C. Berg",
    publish_date: "1977-04-14",
  },
  {
    paper_id: 17,
    paper_title: "Epigenetic mechanisms of gene regulation",
    conference: "NBH",
    publish_date: "1996-04-14",
  },
  {
    paper_id: 18,
    paper_title: "The job demands-resources model of burnout.",
    conference: "JAP",
    publish_date: "2001-04-14",
  },
  {
    paper_id: 19,
    paper_title:
      "Hundreds of variants clustered in genomic loci and biological pathways affect human height",
    conference: "Nature",
    publish_date: "2002-11-14",
  },
  {
    paper_id: 20,
    paper_title: "Job resources buffer the impact of job demands on burnout.",
    conference: "JHP",
    publish_date: "2005-11-14",
  },
  {
    paper_id: 21,
    paper_title:
      "Progesterone and the risk of preterm birth among women with a short cervix",
    conference: "PCCAI",
    publish_date: "2007-10-01",
  },
  {
    paper_id: 22,
    paper_title:
      "Elevated C-reactive protein levels in overweight and obese adults",
    conference: "JVJC",
    publish_date: "1999-12-08",
  },
  {
    paper_id: 23,
    paper_title:
      "The significance of search engine optimization on businesses today.",
    conference: "ONCC",
    publish_date: "1988-02-01",
  },
  {
    paper_id: 24,
    paper_title: "Should women be allowed into extreme sports?",
    conference: "ADIC",
    publish_date: "2008-12-08",
  },
  {
    paper_id: 25,
    paper_title: "Is feminism changing American society?",
    conference: "AII",
    publish_date: "2001-06-08",
  },
  {
    paper_id: 26,
    paper_title: "Leadership training in high school.",
    conference: "CMMA",
    publish_date: "2008-05-09",
  },
  {
    paper_id: 27,
    paper_title:
      "Should the government legalize the use of smartphones in high school classrooms?",
    conference: "IMB",
    publish_date: "2011-08-05",
  },
  {
    paper_id: 28,
    paper_title: "The hidden mortality of monochorionic twin pregnancies",
    conference: "BJOG",
    publish_date: "2006-06-01",
  },
  {
    paper_id: 29,
    paper_title:
      "Remodelling the extracellular matrix in development and disease",
    conference: "NMCB",
    publish_date: "2014-12-20",
  },
  {
    paper_id: 30,
    paper_title:
      "Work engagement: An emerging concept in occupational health psychology",
    conference: "W&S",
    publish_date: "2008-07-01",
  },
];

const author_research = [
  [1, 1],
  [1, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [3, 6],
  [7, 7],
  [5, 8],
  [9, 9],
  [10, 10],
  [11, 11],
  [12, 12],
  [13, 13],
  [14, 14],
  [7, 15],
  [11, 21],
  [11, 28],
  [12, 18],
  [12, 13],
  [13, 30],
  [12, 30],
  [13, 20],
  [14, 29],
  [3, 22],
  [10, 23],
  [5, 24],
  [5, 25],
  [4, 26],
  [13, 27],
  [5, 21],
  [13, 29],
  [1, 30],
  [4, 28],
  [5, 30],
];

module.exports = { author_research, researchPaperData, authorsData, mentors };
