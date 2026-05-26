import { client } from "@/sanity/lib/client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const services = [
  {
    title: "Annual Physical Exams",
    description:
      "Comprehensive wellness visits including health history review, physical examination, and personalized preventive health recommendations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.765.66-1.98 1.57-3.376 1.57-.7 0-1.39-.223-1.918-.582m7.89 0c.529.36 1.22.582 1.918.582 1.395 0 2.61-.91 3.376-1.57m-7.89 0A3.69 3.69 0 0112 3.325a3.69 3.69 0 011.016.511m-7.89 0A3.69 3.69 0 002.5 6.75C4.044 9.333 7.5 12 12 12c1.306 0 2.547-.27 3.67-.734M16.5 21.75l-2.25-2.25m0 0l-2.25 2.25m2.25-2.25V12" />
      </svg>
    ),
  },
  {
    title: "Preventive Health Screenings",
    description:
      "Age-appropriate screenings for blood pressure, cholesterol, diabetes, and cancer. Immunizations and counseling to keep you ahead of potential health issues.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Chronic Disease Management",
    description:
      "Ongoing management of hypertension, type 2 diabetes, high cholesterol, asthma, thyroid disorders, and arthritis with optimized medication and monitoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Acute Illness Treatment",
    description:
      "Diagnosis and treatment for common acute illnesses including cold and flu, strep throat, sinus infections, UTIs, allergies, and minor injuries. Same-day appointments available.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Vaccinations & Immunizations",
    description:
      "Annual flu shots, COVID-19 vaccines, tetanus boosters, shingles and pneumonia vaccines, and travel vaccinations. Current vaccine schedules for all ages.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: "Women\u2019s & Men\u2019s Health",
    description:
      "Well-woman exams, Pap smears, breast exams, contraceptive counseling, menopause management, prostate screening, testosterone evaluation, and more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default async function Home() {
  const testUrl =
    "https://71mcx452.api.sanity.io/v2023-01-01/data/query/production?query=*[_type+%3D%3D+%22globalSettings%22][0]";
  const testRes = await fetch(testUrl);
  const testData = await testRes.json();
  console.log("Direct API test:", JSON.stringify(testData));

  const settings = await client
    .fetch(`*[_type == "globalSettings"][0]`)
    .catch((e) => {
      console.error("Settings fetch failed:", e);
      return null;
    });

  const homePage = await client
    .fetch(`*[_type == "homePage"][0]`)
    .catch((e) => {
      console.error("HomePage fetch failed:", e);
      return null;
    });

  console.log("Sanity settings:", settings);
  console.log("Sanity homePage:", homePage);

  const st = settings as Record<string, unknown> | null;
  const hp = homePage as Record<string, unknown> | null;

  return (
    <>
      <Header
        businessName={st?.businessName as string | undefined}
        tagline={st?.tagline as string | undefined}
      />

      <main>
        <section className="bg-gradient-to-br from-navy to-navy-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              {(hp?.heroHeading as string) || "Your Health, Your Partner, Your Neighborhood"}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-200 leading-relaxed max-w-xl">
              {(hp?.heroSubheading as string) || "Board-certified internal medicine physician providing comprehensive primary care for individuals and families in Chicago."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md bg-green hover:bg-green-dark text-white transition-colors"
              >
                {(hp?.primaryCtaText as string) || "Schedule an Appointment"}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
              >
                {(hp?.secondaryCtaText as string) || "Our Services"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              {(hp?.welcomeHeading as string) || "Welcome to Northside Primary Care"}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-gray-700 leading-relaxed">
              <p>
                {(hp?.welcomeText as string) ||
                  "At Northside Primary Care, we believe that excellent healthcare begins with a strong relationship between you and your physician. Dr. Sarah Mitchell takes the time to listen, understand your health history, and work with you to create a personalized care plan that fits your life."}
              </p>
              <p>
                Conveniently located in Chicago&apos;s Lakeview neighborhood, our
                practice offers a full range of primary care services for adults
                of all ages. Whether you need an annual physical, management of a
                chronic condition, or treatment for an acute illness, we are here
                to support your health every step of the way.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-navy-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Our Services
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                Comprehensive primary care services in a comfortable,
                welcoming environment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center text-navy mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Telehealth Appointments Available
            </h2>
            <p className="mt-3 text-green-100 text-lg max-w-lg mx-auto">
              See Dr. Mitchell from the comfort of your home. Telehealth visits
              are available for follow-ups, medication management, and more.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md bg-white text-green hover:bg-green-50 transition-colors"
              >
                Schedule a Telehealth Visit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        businessName={st?.businessName as string | undefined}
        address={st?.address as string | undefined}
        phone={st?.phone as string | undefined}
        email={st?.email as string | undefined}
        hours={st?.hours as string | undefined}
      />
    </>
  );
}
