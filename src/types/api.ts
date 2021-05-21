export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: Image;
};

type Image = {
  alternativeText: string;
  url: string;
};

export type AboutProps = {
  title: string;
  description: string;
  image: Image;
};

export type TechIcon = {
  icon: Image;
  title: string;
};

export type TechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type ConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
  }>;
};

export type Modules = {
  title: string;
  subtitle: string;
  description: string;
};

export type ModulesProps = {
  title: string;
  modules: Modules[];
};

export type AgendaProps = {
  title: string;
  description: string;
};

export type PricingProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SocialLinkProps = {
  title: string;
  url: string;
};

export type AuthorProps = {
  photo: Image;
  name: string;
  role: string;
  description: string;
  socialLinks: Array<SocialLinkProps>;
};

export type AboutUsProps = {
  title: string;
  authors: AuthorProps[];
};

export type ReviewProps = {
  id: number;
  name: string;
  text: string;
  photo: Image;
};

export type ReviewsProps = {
  title: string;
  reviews: ReviewProps[];
};

export type QuestionProps = {
  question: string;
  answer: string;
};

export type FaqProps = {
  title: string;
  questions: QuestionProps[];
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  about: AboutProps;
  tech: TechProps;
  concepts: ConceptsProps;
  modules: ModulesProps;
  agenda: AgendaProps;
  pricing: PricingProps;
  aboutUs: AboutUsProps;
  reviews: ReviewsProps;
  faq: FaqProps;
};
