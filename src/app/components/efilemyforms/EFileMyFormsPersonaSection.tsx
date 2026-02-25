import imgJustinImage from "../../../assets/images/persona-justin.png";
import imgLeilaImage from "../../../assets/images/persona-leila.png";
import "./EFileMyFormsPersonaSection.css";

interface PersonaCardProps {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  bulletPoints: string[];
  userType: string;
}

function PersonaCard({ name, title, image, imageAlt, bulletPoints, userType }: PersonaCardProps) {
  return (
    <article className="efmf-persona-card">
      <div className="efmf-persona-content">
        <img src={image} alt={imageAlt} className="efmf-persona-avatar" />
        <h3 className="efmf-persona-name">{name}</h3>
        <p className="efmf-persona-title">{title}</p>
        <ul className="efmf-persona-list">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <p className="efmf-persona-type">{userType}</p>
    </article>
  );
}

export function EFileMyFormsPersonaSection() {
  const personas = [
    {
      name: "Justin",
      title: "Owner @ Justin's Barber Shop",
      image: imgJustinImage,
      imageAlt: "Portrait of Justin, small business owner",
      bulletPoints: [
        "Manages all business aspects and daily duties of running a barber shop",
        "Unfamiliar with tax filing",
        "Can't afford to hire an accountant"
      ],
      userType: "Small business owners"
    },
    {
      name: "Leila",
      title: "Accountant @ DLC Accounting Services",
      image: imgLeilaImage,
      imageAlt: "Portrait of Leila, professional accountant",
      bulletPoints: [
        "Has been managing the same 15 companies' tax forms for 6 years",
        "Familiar with tax requirements",
        "Handles large volumes on tight deadlines"
      ],
      userType: "Accountant (power user)"
    }
  ];

  return (
    <section className="efmf-persona-section" aria-labelledby="efmf-persona-heading">
      <div className="efmf-persona-container container">
        <header className="efmf-persona-header">
          <p className="efmf-section-label">Persona</p>
          <h2 id="efmf-persona-heading" className="efmf-section-title">
            Overwhelmed owners & high-volume accountants
          </h2>
          <p className="efmf-section-description">
            As the gig economy grows and tax filing gets more complex, it's important to simplify 
            the tax filing experience for small business owners who may not be knowledgeable in taxes. 
            Simplifying the experience for them also helps power users like accountants to get their 
            job done faster, especially working during busy tax season and with a large quantity of clients.
          </p>
        </header>

        <div className="efmf-persona-grid">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
}