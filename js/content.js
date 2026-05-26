const CONTENT = {
  practice: {
    name: 'Northside Primary Care',
    shortName: 'Northside Primary Care',
    doctorName: 'Dr. Sarah Mitchell, MD',
    doctorFullName: 'Dr. Sarah Mitchell',
    credentials: 'MD, FACP',
    tagline: 'Compassionate, Comprehensive Primary Care for Chicago Families',
    description:
      'Northside Primary Care provides compassionate, patient-centered primary care services to individuals and families in the Lakeview neighborhood and throughout Chicago.',
    address: {
      street: '3250 North Lakeview Avenue',
      suite: 'Suite 210',
      city: 'Chicago',
      state: 'IL',
      zip: '60657',
    },
    phone: '(773) 555-0142',
    phoneLink: '+17735550142',
    email: 'info@northsideprimarycare.com',
    hours: [
      { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM – 7:00 PM' },
      { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Friday', hours: '8:00 AM – 4:00 PM' },
      { day: 'Saturday', hours: '9:00 AM – 12:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    social: {
      facebook: '#',
    },
  },

  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Insurance & Patients', href: 'insurance.html' },
    { label: 'Contact', href: 'contact.html' },
  ],

  pages: {
    home: {
      meta: {
        title: 'Northside Primary Care – Compassionate Primary Care in Chicago',
        description:
          'Dr. Sarah Mitchell provides compassionate, patient-centered primary care in Chicago\'s Lakeview neighborhood. Schedule an appointment today.',
      },
      hero: {
        heading: 'Your Health, Your Partner, Your Neighborhood',
        subheading:
          'Board-certified internal medicine physician providing comprehensive primary care for individuals and families in Chicago.',
        cta: 'Schedule an Appointment',
      },
      welcome: {
        heading: 'Welcome to Northside Primary Care',
        body: 'At Northside Primary Care, we believe that excellent healthcare begins with a strong relationship between you and your physician. Dr. Sarah Mitchell takes the time to listen, understand your health history, and work with you to create a personalized care plan that fits your life.',
        body2:
          'Conveniently located in Chicago\'s Lakeview neighborhood, our practice offers a full range of primary care services for adults of all ages. Whether you need an annual physical, management of a chronic condition, or treatment for an acute illness, we are here to support your health every step of the way.',
      },
      features: [
        {
          heading: 'Comprehensive Care',
          text: 'From preventive medicine to chronic disease management, we provide the full spectrum of primary care services under one roof.',
        },
        {
          heading: 'Patient-Centered Approach',
          text: 'Your time is valuable. We prioritize same-day and next-day appointments, minimal wait times, and unhurried visits where all your questions are answered.',
        },
        {
          heading: 'Convenient Location',
          text: 'Our Lakeview office is easily accessible by public transit and offers street parking. We serve patients from Lincoln Park, Wrigleyville, and throughout Chicago\'s north side.',
        },
      ],
      cta: {
        heading: 'Ready to Become a Patient?',
        text: 'We are currently accepting new patients. Call us or fill out our online form to schedule your first appointment.',
        button: 'Get Started Today',
      },
    },

    about: {
      meta: {
        title: 'About Dr. Sarah Mitchell – Northside Primary Care Chicago',
        description:
          'Learn about Dr. Sarah Mitchell, a board-certified internal medicine physician providing primary care in Chicago\'s Lakeview neighborhood.',
      },
      intro: {
        heading: 'About Dr. Sarah Mitchell',
        credentials: 'MD, FACP – Board-Certified Internal Medicine',
        body: 'Dr. Sarah Mitchell is a board-certified internal medicine physician with over fifteen years of clinical experience. She founded Northside Primary Care with a simple mission: to provide the kind of thoughtful, thorough, and compassionate care that every patient deserves.',
        body2:
          'Dr. Mitchell believes that healthcare is a partnership. She takes the time to understand each patient\'s unique circumstances, values, and goals, and works collaboratively to develop treatment plans that align with what matters most to them.',
      },
      education: {
        heading: 'Education & Training',
        items: [
          {
            degree: 'Doctor of Medicine',
            institution: 'University of Chicago Pritzker School of Medicine',
            year: '2006',
          },
          {
            degree: 'Internal Medicine Residency',
            institution: 'Northwestern Memorial Hospital',
            year: '2009',
          },
          {
            degree: 'Fellow, American College of Physicians',
            institution: 'FACP',
            year: '2015',
          },
        ],
      },
      philosophy: {
        heading: 'Philosophy of Care',
        body: 'I believe that the best healthcare happens when physician and patient work together as a team. My goal is not simply to treat symptoms, but to understand the whole person — their lifestyle, their concerns, and what they hope to achieve. Whether we are managing a chronic condition or working to prevent illness, I am committed to providing evidence-based care that respects your time, your values, and your voice.',
        attribution: '— Dr. Sarah Mitchell',
      },
      personal: {
        heading: 'Beyond the Clinic',
        body: 'Dr. Mitchell lives in Chicago with her family. When she is not seeing patients, she enjoys running along the lakefront, volunteering at community health fairs, and exploring the city\'s diverse restaurant scene.',
      },
    },

    services: {
      meta: {
        title: 'Primary Care Services – Northside Primary Care Chicago',
        description:
          'Comprehensive primary care services including annual physicals, chronic disease management, acute care, vaccinations, and more in Chicago.',
      },
      intro: {
        heading: 'Our Services',
        body: 'Northside Primary Care offers a complete range of primary care services for adults. Dr. Mitchell provides personalized, evidence-based care in a comfortable and welcoming environment.',
      },
      list: [
        {
          heading: 'Annual Physical Exams',
          body: 'Comprehensive annual wellness visits including health history review, vital signs, physical examination, and personalized preventive health recommendations.',
        },
        {
          heading: 'Preventive Health Screenings',
          body: 'Age-appropriate screenings including blood pressure, cholesterol, diabetes, and cancer screenings (mammogram, colonoscopy referrals). Immunizations and counseling to help you stay ahead of potential health issues.',
        },
        {
          heading: 'Chronic Disease Management',
          body: 'Ongoing management of conditions such as hypertension, type 2 diabetes, high cholesterol, asthma, thyroid disorders, and arthritis. We work with you to optimize medications, monitor progress, and adjust treatment plans as needed.',
        },
        {
          heading: 'Acute Illness Treatment',
          body: 'Diagnosis and treatment for common acute illnesses including cold and flu, strep throat, sinus infections, urinary tract infections, allergies, and minor injuries. Same-day appointments are often available.',
        },
        {
          heading: 'Vaccinations & Immunizations',
          body: 'Annual flu shots, COVID-19 vaccines, tetanus boosters, shingles vaccine, pneumonia vaccine, and travel vaccinations. We maintain current vaccine schedules and can advise on what you need.',
        },
        {
          heading: 'Women\'s Health',
          body: 'Well-woman exams, Pap smears, breast exams, contraceptive counseling, menopause management, and osteoporosis screening. Referrals to gynecologic specialists when needed.',
        },
        {
          heading: 'Men\'s Health',
          body: 'Annual wellness exams, prostate cancer screening, testosterone evaluation, and management of conditions including erectile dysfunction and benign prostatic hyperplasia.',
        },
        {
          heading: 'Minor Office Procedures',
          body: 'Skin biopsy, suture removal, joint injections, abscess drainage, and wart removal performed in the comfort of our office.',
        },
      ],
      cta: {
        heading: 'Not Sure Which Service You Need?',
        text: 'Call our office and speak with Dr. Mitchell or our staff. We are happy to help you determine the right level of care.',
        button: 'Call (773) 555-0142',
      },
    },

    insurance: {
      meta: {
        title: 'Insurance & Patient Information – Northside Primary Care Chicago',
        description:
          'Insurance plans accepted, new patient information, and helpful resources for your visits to Northside Primary Care in Chicago.',
      },
      intro: {
        heading: 'Insurance & Patient Information',
        body: 'We accept a wide range of insurance plans and are committed to making healthcare accessible to all patients. If you do not see your plan listed, please call our office to inquire.',
      },
      plans: {
        heading: 'Accepted Insurance Plans',
        note: 'This list is subject to change. Please verify your coverage with your insurance provider or call our office before your first visit.',
        list: [
          'Aetna',
          'Blue Cross Blue Shield of Illinois (PPO, Blue Choice)',
          'Cigna',
          'Humana',
          'Medicare (Original Medicare, Medicare Part B)',
          'Medicare Advantage (select plans)',
          'UnitedHealthcare',
        ],
      },
      selfPay: {
        heading: 'Self-Pay & Payment Options',
        body: 'We offer competitive self-pay rates for patients without insurance. Payment is due at the time of service and we accept cash, all major credit cards, and HSA/FSA cards.',
      },
      newPatients: {
        heading: 'Information for New Patients',
        intro:
          'We welcome new patients at Northside Primary Care. Here is what you need to know before your first visit.',
        whatToBring: {
          heading: 'Please Bring to Your First Appointment',
          items: [
            'Government-issued photo ID',
            'Insurance card',
            'List of current medications with dosages',
            'Previous medical records (if available)',
            'Completed new patient forms (available on request)',
          ],
        },
        telehealth: {
          heading: 'Telehealth Visits',
          body: 'Telehealth appointments are available for select visit types. Telehealth can be a convenient option for follow-up visits, medication management, and discussion of lab results. Call our office to schedule a virtual visit.',
        },
      },
      faq: {
        heading: 'Frequently Asked Questions',
        items: [
          {
            q: 'How long does a new patient appointment take?',
            a: 'Please allow 45 to 60 minutes for your first visit. This gives Dr. Mitchell ample time to review your health history, perform a thorough examination, and answer all your questions.',
          },
          {
            q: 'Do you offer same-day appointments?',
            a: 'Yes, we reserve same-day appointments for urgent medical needs. Call our office as early as possible to check availability.',
          },
          {
            q: 'What if I need to see a specialist?',
            a: 'Dr. Mitchell will provide referrals to trusted specialists when needed. She coordinates closely with your specialists to ensure continuity of care.',
          },
          {
            q: 'Can I request prescription refills online?',
            a: 'Please call our office for prescription refill requests. Allow 48 hours for routine refill processing.',
          },
        ],
      },
    },

    contact: {
      meta: {
        title: 'Contact Us – Northside Primary Care Chicago',
        description:
          'Contact Northside Primary Care in Chicago\'s Lakeview neighborhood. Call (773) 555-0142 or use our online form to schedule an appointment.',
      },
      intro: {
        heading: 'Contact Us',
        body: 'We are here to help. Whether you need to schedule an appointment, have a question about your care, or want to transfer your records, please reach out.',
      },
      form: {
        heading: 'Request an Appointment',
        action: 'https://formspree.io/f/placeholder',
        method: 'POST',
        fields: {
          name: { label: 'Full Name', type: 'text', required: true },
          email: { label: 'Email Address', type: 'email', required: true },
          phone: { label: 'Phone Number', type: 'tel', required: true },
          patientType: {
            label: 'Patient Status',
            type: 'select',
            required: true,
            options: [
              { value: '', text: 'Select one...' },
              { value: 'new', text: 'New Patient' },
              { value: 'existing', text: 'Existing Patient' },
            ],
          },
          message: {
            label: 'Message',
            type: 'textarea',
            required: false,
            placeholder: 'Please share any details about your reason for visiting or scheduling needs...',
          },
        },
        submit: 'Send Message',
      },
      location: {
        heading: 'Office Location',
        transit: {
          heading: 'Public Transit & Parking',
          body: 'Our office is located in the Lakeview neighborhood, one block west of Lakeview Avenue. The CTA Brown Line (Diversey stop) is a five-minute walk. Several CTA bus routes serve the area. Street parking is available on Lakeview Avenue and surrounding streets.',
        },
      },
    },
  },

  footer: {
    copyright: 'Northside Primary Care. All rights reserved.',
    disclaimer:
      'This website is for informational purposes only and does not constitute medical advice. Please consult a healthcare professional for medical concerns.',
  },
}
