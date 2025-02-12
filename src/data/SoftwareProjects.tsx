interface ProjectArgs {
  year: number;
  award: string;
  backText: string;
  link: string;
}

const SoftwareProjects: ProjectArgs[] = [
  {
    year: 2024,
    award: "Gold",
    backText: "Quantifying specific microRNA biomarkers in order to determine a patient's likelihood of developing cervical cancer.",
    link: "https://2024.igem.wiki/umaryland/"
  },
  {
    year: 2022,
    award: "Bronze",
    backText: "Engineering E.coli to filter excess nitrates from the Chesapeake Bay in an accessible bioreactor system.",
    link: "https://2022.igem.wiki/umaryland/",
  },
  {
    year: 2021,
    award: "Gold",
    backText: "Designing a phosphorous recycling system for the Chesapeake Bay that uses engineered E.coli housed in a bioreactor.",
    link: "https://2021.igem.wiki/umaryland/",
  },
  {
    year: 2020,
    award: "Bronze",
    backText: "Modeling a rapid COVID-19 test kit that leverages deactivated CRISPR/dCas13 to create a visual output in the presence of coronavirus RNA.",
    link: "https://2021.igem.org/Team:UMaryland",
  },
  {
    year: 2019,
    award: "Bronze",
    backText: "Using the Power of Crispr Cas9 to Help Stop the Spread of Pathogenic Chytrid Across the Globe.",
    link: "https://2019.igem.org/Team:UMaryland",
  },
  {
    year: 2018,
    award: "Gold",
    backText: "A modular, scalar, and accelerated biodegradation system of polyethylene terephthalate achieved using a PETase - cellulose binding domain fusion protein.",
    link: "https://2018.igem.org/Team:UMaryland",
  },
  {
    year: 2017,
    award: "Bronze",
    backText: "Saving the Cavendish banana by creating a soil probiotic that protects banana plants by detecting infection and responding with a potent fungicide",
    link: "https://2018.igem.org/Team:UMaryland",
  },
  {
    year: 2016,
    award: "Silver",
    backText: "Creating a strain of E. coli that break down methane to be implemented into landfills as an environmentally friendly strategy for ameliorating global climate change",
    link: "https://2016.igem.org/Team:UMaryland/Practices",
  },
  {
    year: 2015,
    award: "Gold",
    backText: "Reducing the use of antibiotics in synthetic biology research and the spread of antibiotic resistance through an mRNA based toxin-antitoxin system.",
    link: "https://2015.igem.org/Team:UMaryland",
  },
  { //Empty component so that the box below this is centered
    year: 0,
    award: "",
    backText: "",
    link: "",
  },
  {
    year: 2014,
    award: "Gold",
    backText: "Sensing the infection of Perkinsus marinus through an engineered biosensor to protect the Crasseoterra virginica (Eastern oyster) population",
    link: "https://2014.igem.org/Team:UMaryland",
  }
]

export default SoftwareProjects;