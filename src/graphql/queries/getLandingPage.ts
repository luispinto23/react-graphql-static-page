const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }

  fragment about on LandingPage {
    about: sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment tech on LandingPage {
    tech: sectionTech {
      title
      techIcons {
        icon {
          alternativeText
          url
        }
        title
      }
    }
  }

  fragment concepts on LandingPage {
    concepts: sectionConcept {
      title
      concepts {
        title
      }
    }
  }

  fragment modules on LandingPage {
    modules: sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    agenda: sectionAgenda {
      title
      description
    }
  }

  fragment pricing on LandingPage {
    pricing: pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment aboutUs on LandingPage {
    aboutUs: sectionAboutUs {
      title
      authors {
        photo {
          alternativeText
          url
        }
        name
        role
        description
        socialLinks {
          title
          url
        }
      }
    }
  }

  fragment reviews on LandingPage {
    reviews: sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          url
          alternativeText
        }
      }
    }
  }

  fragment faq on LandingPage {
    faq: sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...about
      ...tech
      ...concepts
      ...modules
      ...agenda
      ...pricing
      ...aboutUs
      ...reviews
      ...faq
    }
  }
`;

export default GET_LANDING_PAGE;
