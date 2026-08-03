const BLOG_IMAGE_BASE =
  "https://nohouiolujjifaqvuyav.supabase.co/storage/v1/object/public/blog-images";

function estimateReadingTime(text) {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export const BLOG_POSTS = [
  {
    slug: "best-imu-cet-coaching-in-india-kerala-kottayam-navpath",
    title: "Best IMU CET Coaching in India, Kerala & Kottayam | NavPath Academy",
    metaTitle: "Best IMU CET Coaching in India, Kerala & Kottayam | NavPath Academy",
    description:
      "Best IMU CET coaching in India, Kerala and Kottayam with captain-led mocks, DNS sponsorship guidance, online classes and parent counselling.",
    keywords:
      "imu cet coaching india, imu cet coaching kerala, imu cet coaching kottayam, best imu cet coaching india, merchant navy coaching kerala, dns sponsorship guidance, online imu cet coaching kerala",
    ogTitle: "Best IMU CET Coaching in India, Kerala & Kottayam | NavPath Academy",
    ogDescription:
      "Prepare for IMU CET in India, Kerala and Kottayam with expert mentorship from Captains, Master Mariners and active sailing officers. DNS sponsorship guidance, mock tests, interview prep and parent counselling under one roof.",
    alt: "Best IMU CET Coaching in India, Kerala & Kottayam | NavPath Academy",
    img: "/assets/home-hero-1024.webp",
    featured: false,
    date: "Aug 03, 2026",
    datePublished: "2026-08-03T00:00:00+00:00",
    dateModified: "2026-08-03T00:00:00+00:00",
    author: "NavPath Academy",
    excerpt:
      "NavPath Academy offers the best IMU CET coaching in India, Kerala and Kottayam, led by Captains, Master Mariners and active sailing officers. From DNS sponsorship guidance and mock tests to interview preparation and parent counselling, future mariners get honest, captain-led training both offline at Kottayam and online across Kerala.",
    content: [
      {
        type: "h1",
        text: "Best IMU CET Coaching in India, Kerala & Kottayam | NavPath Academy",
      },
      {
        type: "p",
        text: "Future mariners trained by Captains, Master Mariners and active sailing officers. NavPath Academy is a Kottayam-based maritime coaching centre that prepares students for IMU CET with coaching led by people who actually sail — not retired instructors reading from old notes.",
      },
      {
        type: "h2",
        text: "Why Choose NavPath Academy for IMU CET Coaching",
      },
      {
        type: "list",
        items: [
          "Captain-led coaching — classes and mocks run by real Captains, Master Mariners and active sailing officers",
          "DNS sponsorship guidance — dedicated support for DNS and sponsorship examinations",
          "Mock tests modelled on the real IMU CET pattern, timing and difficulty",
          "Thousands of practice questions spanning the complete syllabus — Physics, Chemistry, Mathematics, English, General Knowledge and Aptitude",
          "Interview preparation and spoken English coaching",
          "Offline classes at Kottayam plus online classes across Kerala and India",
          "Parent counselling — we guide parents through the admission and career planning journey",
          "Honest guidance with small batches and personal mentorship",
        ],
      },
      {
        type: "h2",
        text: "Learn from Captains, Master Mariners & Active Sailing Officers",
      },
      {
        type: "p",
        text: "Every doubt is answered by someone who has stood on the bridge, handled real ships and faced real interviews. Our students don't just prepare for an exam — they begin preparing for a career.",
      },
      {
        type: "p",
        text: "Our mentors are led by a Master Mariner with 30+ years at sea, supported by serving officers who are sailing right now.",
      },
      {
        type: "h2",
        text: "IMU CET Coaching Courses at NavPath",
      },
      {
        type: "list",
        items: [
          "IMU CET Coaching — full-syllabus classroom and online coaching for DNS, B.Sc Nautical Science, Marine Engineering and related programmes",
          "IMU CET Repeaters Batch — dedicated batch for students converting another attempt into a top rank",
          "DNS Sponsorship Guidance — guidance for DNS and company sponsorship examinations",
          "Online IMU CET Coaching — live online classes for students across Kerala and India",
        ],
      },
      {
        type: "h2",
        text: "Why NavPath Academy",
      },
      {
        type: "p",
        text: "We built NavPath around one promise: honest coaching led by people who actually sail. That is why our first batch delivered a 41% success rate in IMU CET 2026 with a top All India Rank of 816.",
      },
      {
        type: "list",
        items: [
          "30+ years at sea with our founding Master Mariner",
          "Active sailing mentors who coach and sail",
          "Sponsorship guidance built into the programme",
          "Mock tests and thousands of practice questions",
          "Interview preparation and spoken English coaching",
          "Parent guidance and transparent counselling",
          "Students served across 14 districts of Kerala",
        ],
      },
      {
        type: "h2",
        text: "For Parents",
      },
      {
        type: "p",
        text: "Choosing a maritime career is a family decision. We offer dedicated parent counselling so families understand the IMU CET process, sponsorship pathway, fees, and what a Merchant Navy career really looks like — before committing to any course.",
      },
      {
        type: "h2",
        text: "How to Get Started with IMU CET Coaching at NavPath",
      },
      {
        type: "ol",
        items: [
          "Book a free mentorship call or consultation with our admissions team",
          "Share your Class 12 marks, stream and career goal (DNS, Nautical Science, Marine Engineering)",
          "Take a guidance session with a Captain or Master Mariner to confirm your eligibility and course fit",
          "Choose offline coaching at Kottayam or online coaching from anywhere",
          "Start with a mock test to assess your current level and build a study plan",
          "Prepare with captain-led classes, practice questions, interview and spoken English training until IMU CET",
        ],
      },
      {
        type: "note",
        title: "Need guidance?",
        text: "Talk to a real Captain before you choose a coaching centre. Call our admissions team at 77365 22210 / 77365 22214 / 77365 22215 for honest, transparent counselling.",
      },
      {
        type: "linkline",
        label: "For further details visit:",
        text: "https://www.navpathacademy.com",
        href: "/courses",
      },
      {
        type: "linkline",
        label: "Contact:",
        text: "https://www.navpathacademy.com/contact",
        href: "/contact",
      },
    ],
    faqs: [
      {
        q: "Is NavPath Academy the best IMU CET coaching in India, Kerala and Kottayam?",
        a: "NavPath Academy is widely considered one of the best IMU CET coaching centres in Kerala and Kottayam, with coaching led by Captains, Master Mariners and active sailing officers. In IMU CET 2026, 49 of 119 students qualified with a 41% success rate and a top All India Rank of 816.",
      },
      {
        q: "What is IMU CET?",
        a: "IMU CET is the Indian Maritime University Common Entrance Test, the national-level gateway to maritime programmes such as DNS, B.Sc Nautical Science, B.Tech Marine Engineering and related courses.",
      },
      {
        q: "Does NavPath Academy provide online IMU CET coaching?",
        a: "Yes. NavPath Academy offers online IMU CET coaching for students across Kerala and India, alongside offline coaching at our Kottayam campus.",
      },
      {
        q: "Who are the mentors at NavPath Academy?",
        a: "Our mentors are real Captains, Master Mariners and active sailing officers, led by a Master Mariner with 30+ years at sea. Students are mentored by people who are sailing right now.",
      },
      {
        q: "Does NavPath Academy provide DNS sponsorship guidance?",
        a: "Yes. DNS sponsorship guidance is built into the programme, helping students prepare for company sponsorship examinations and understand the sponsorship pathway.",
      },
      {
        q: "Does NavPath Academy provide mock tests and practice questions?",
        a: "Yes. NavPath provides mock tests modelled on the real IMU CET pattern, timing and difficulty, plus thousands of practice questions covering Physics, Chemistry, Mathematics, English, General Knowledge and Aptitude.",
      },
      {
        q: "Does NavPath Academy provide interview preparation and spoken English coaching?",
        a: "Yes. Interview preparation and spoken English coaching are part of the programme, including company-specific interview training.",
      },
      {
        q: "What courses does NavPath Academy offer?",
        a: "NavPath Academy offers IMU CET Coaching, an IMU CET Repeaters Batch, DNS Sponsorship Guidance and Online IMU CET Coaching for DNS, B.Sc Nautical Science, Marine Engineering and related programmes.",
      },
      {
        q: "Where is NavPath Academy located?",
        a: "NavPath Maritime Academy is located in Kottayam, Kerala, and also provides online coaching for students across Kerala and India.",
      },
      {
        q: "Does NavPath Academy provide parent counselling?",
        a: "Yes. We offer dedicated parent counselling so families understand the IMU CET process, sponsorship pathway, fees and what a Merchant Navy career really looks like.",
      },
      {
        q: "How can I book a mentorship call with NavPath Academy?",
        a: "You can book a mentorship call or free consultation through the website, or call our admissions team at 77365 22210 / 77365 22214 / 77365 22215.",
      },
      {
        q: "What was NavPath Academy's IMU CET 2026 result?",
        a: "49 out of 119 NavPath students qualified in IMU CET 2026, achieving a 41% success rate with a top All India Rank of 816.",
      },
    ],
  },
  {
    slug: "best-imu-cet-coaching-in-india",
    title: "Best IMU CET Coaching in India 2026 | Navpath Academy",
    alt: "Best IMU CET Coaching in India 2026 | Navpath Academy",
    img: `${BLOG_IMAGE_BASE}/1782831486752-g45oi8.webp`,
    featured: true,
    date: "Jun 30, 2026",
    datePublished: "2026-06-30T15:22:03.03446+00:00",
    dateModified: "2026-06-30T15:22:03.03446+00:00",
    author: "NavPath Academy",
    excerpt:
      "If you are searching for the best IMU CET coaching in India, this guide will help you understand exactly what to look for before choosing an institute. It explains the IMU CET exam pattern, syllabus, preparation strategy, coaching fees, and the key differences between self-study and guided coaching so you can make a smart decision. Whether you are a Class 12 student aiming for DNS, B.Tech Marine Engineering, or Nautical Science, or a parent comparing coaching options, this article gives you a clear roadmap to crack IMU CET with confidence. You'll also learn why Navpath Academy is considered a strong option for focused maritime exam preparation, along with how online and offline coaching can support your goals.",
    content: [],
    faqs: [],
  },
  {
    slug: "navpath-imu-cet-2026-results-kerala-coaching-centre",
    title:
      "മികച്ച ഐ.എം.യു സി.ഇ.ടി കോച്ചിങ് & മികച്ച ഐ.എം.യു സി.ഇ.ടി റിപ്പീറ്റേഴ്സ് കോച്ചിങ് — നവ്പാത്തിന്റെ ആദ്യ ബാച്ചിൽ നിന്ന് 49 പേർ വിജയം",
    alt: "മികച്ച ഐ.എം.യു സി.ഇ.ടി കോച്ചിങ് & മികച്ച ഐ.എം.യു സി.ഇ.ടി റിപ്പീറ്റേഴ്സ് കോച്ചിങ് — നവ്പാത്തിന്റെ ആദ്യ ബാച്ചിൽ നിന്ന് 49 പേർ വിജയം",
    img: `${BLOG_IMAGE_BASE}/1782305096549-7vkv5.webp`,
    featured: false,
    date: "Jun 24, 2026",
    datePublished: "2026-06-24T12:31:56.395636+00:00",
    dateModified: "2026-06-25T13:36:51.127952+00:00",
    author: "NavPath Academy",
    excerpt:
      "കേരളത്തിലെ മികച്ച IMU CET കോച്ചിങ് കേന്ദ്രങ്ങളിലൊന്നായ നവ്പാത് മാരിടൈം അക്കാദമിയുടെ ആദ്യ ബാച്ചിൽ നിന്ന് 119 വിദ്യാർത്ഥികളിൽ 49 പേർ IMU CET 2026 വിജയിച്ചു. AIR 816 ഉൾപ്പെടെ നിരവധി മികച്ച റാങ്കുകൾ നേടി. യഥാർത്ഥ ക്യാപ്റ്റൻമാരും സർവീസ് ഓഫീസർമാരും നയിക്കുന്ന പരിശീലനമാണ് നവ്പാത്തിന്റെ പ്രത്യേകത.",
    content: [],
    faqs: [],
  },
  {
    slug: "navpath-imu-cet-2026-results-best-imu-cet-coaching-kerala",
    title:
      "Best IMU CET Coaching & Best IMU CET Repeaters Coaching — 49 NavPath students clear IMU CET 2026",
    metaTitle: "Best IMU CET Repeaters Coaching Kerala | AIR 816 Result",
    description:
      "NavPath Maritime Academy: 49 of 119 students cleared IMU CET 2026 with AIR 816. Join Kerala's leading IMU CET coaching & repeaters batch.",
    keywords:
      "imu cet coaching kerala, imu cet repeaters coaching, imu cet coaching kottayam, best imu cet coaching south india, merchant navy coaching kerala, imu cet 2026 results",
    ogTitle: "49 NavPath Students Clear IMU CET 2026 | AIR 816",
    ogDescription:
      "49 of 119 NavPath students cleared IMU CET 2026 with a 41% success rate and AIR 816. Join NavPath's IMU CET Repeaters Batch in Kerala.",
    alt: "Best IMU CET Coaching & Best IMU CET Repeaters Coaching — 49 NavPath students clear IMU CET 2026",
    img: `${BLOG_IMAGE_BASE}/1782306540810-aarzc.webp`,
    featured: false,
    date: "Jun 24, 2026",
    datePublished: "2026-06-24T12:31:56.395636+00:00",
    dateModified: "2026-06-25T13:36:51.127952+00:00",
    author: "NavPath Academy",
    excerpt:
      "NavPath Maritime Academy's first IMU CET batch delivered impressive results, with 49 out of 119 students qualifying in IMU CET 2026, achieving a 41% success rate. The academy produced 14 students with All India Ranks under 10,000, including a top rank of AIR 816. Guided by experienced captains and active sailing officers, students benefited from comprehensive preparation including mock tests, practice questions, interview training, and spoken English coaching. Following this successful debut, NavPath has opened admissions for its IMU CET Repeaters Batch, offering both offline coaching in Kottayam and online classes across Kerala.",
    content: [
      {
        type: "h1",
        text: "NavPath Maritime Academy IMU CET 2026 Results: 49 Students Qualified in First Batch",
      },
      {
        type: "p",
        text: "When NavPath Maritime Academy | Imu Cet Repeaters Coaching opened in Kottayam this April, we made one promise: honest coaching, led by people who actually sail.",
      },
      {
        type: "p",
        text: "Eight weeks later, the IMU CET 2026 results have answered that promise.",
      },
      {
        type: "p",
        text: "Our Imu Cet Repeaters Coaching Batch will start in July 2026",
      },
      {
        type: "p",
        text: "Of the 119 NavPath students who appeared, 49 cleared IMU CET 2026 a qualifying rate of 41%.",
      },
      {
        type: "p",
        text: "For a brand-new academy, through a crash course that ran barely two months before the exam, this is a result we are deeply proud of earned through our students' sheer hard work.",
      },
      { type: "p", text: "The result in numbers" },
      { type: "p", text: "119 students appeared from NavPath" },
      { type: "p", text: "49 qualified — a 41% success rate" },
      { type: "p", text: "14 students achieved top All India Ranks." },
      { type: "p", text: "Our best rank: 816 (All India)" },
      { type: "p", text: "Why this batch is special" },
      {
        type: "p",
        text: "NavPath is not a factory. As one of the best IMU CET coaching setups in Kerala, our students were mentored by a Master Mariner with 30+ years at sea and by serving officers who are sailing right now — not retired instructors reading from old notes.",
      },
      {
        type: "p",
        text: "Every doubt was answered by someone who has stood on the bridge, handled real ships, and faced real interviews. Our students didn't just prepare for an exam — they began preparing for a career.",
      },
      { type: "p", text: "Built to cover the entire IMU CET syllabus and pattern" },
      { type: "p", text: "Our IMU CET coaching is designed to leave nothing to chance:" },
      {
        type: "list",
        items: [
          "Mock tests modelled on the real IMU CET pattern, timing and difficulty",
          "Thousands of practice questions spanning the complete syllabus — Physics, Chemistry, Mathematics, English, General Knowledge and Aptitude",
          "Topic-wise drills, full-length tests and detailed performance tracking",
          "Company-specific interview and spoken-English preparation",
        ],
      },
      {
        type: "p",
        text: "Students sit the exam having already practised its every section and pattern many times over.",
      },
      {
        type: "h2",
        text: "IMU CET 2026 Results and Top Performers | Imu Cet Repeaters Coaching",
      },
      { type: "p", text: "14 students achieved top All India Ranks." },
      {
        type: "list",
        items: [
          "Linto Thomas — AIR 816",
          "Gagan G Nair — AIR 1323",
          "Abhishek P — AIR 2905",
          "Jeswin Jose — AIR 3495",
          "Sinjin Siju George — AIR 3916",
          "Krishnajith A S — AIR 4359",
          "Shikha Ann James — AIR 5164",
          "Abhinav V Rajesh — AIR 5438",
          "Meenu Elsa Varghese — AIR 7072",
          "Stephin Paul - AIR 8259",
          "Ryan Cherian Roshan — AIR 8884",
          "Jeet John Koshy - AIR 8894",
          "Mabyn Ribu Padanilam - AIR 9520",
          "Sharon Shibu — AIR 9782",
        ],
      },
      { type: "h2", text: "Our 2026 IMU CET honour roll" },
      { type: "p", text: "Congratulations to every student who qualified" },
      {
        type: "p",
        text: "Linto Thomas (816) · Gagan G Nair (1323) · Abhishek P (2905) · Jeswin Jose (3495) · Sinjin Siju George (3916) · Krishnajith A S (4359) · Shikha Ann James (5164) · Abhinav V Rajesh (5438) · Meenu Elsa Varghese (7072) · Jeet John Koshy (8894) · Stephin Paul (8259) · Ryan Cherian Roshan (8884) · Mabyn Ribu Padanilam (9520) · Sharon Shibu (9782) · Shaun Jobin (11200) · Harigovind S (11751) · Albin Vilgy (12139) · Visal A (12253) · Vishnunarayanan K A (13316) · Jerusha Binoy Francis (13811) · Shalin Dominic (13833) · Navan Mohandas (13971) · Adithya Krishna S (~15000) · Sreesanth Nair (15301) · Rosmi Sunil (16075) · Seon Jojo (16093) · Dhvani Subhash (16578) · Ben C John (17783) · Fathimath Shaziya Z M (~18000) · Abin Dev (18870) · Shiv Syam (19053) · Vidyuth Saji (19235) · Sreenanda S (~20000) · Theresa Sunny (~20000) · Lekshmi Devi C A (20200) · Abhinav S Nair (20246) · Devikrishna A R (21090) · Hiran S Kumar (~21000) · Mohammed Ashkar N (21598) · Sivadh S Rajeev (23844) · Adithyan B (22094) · Adithyan S (22094) · Suryanandan V (22144) · Nadhiya R N (22422) · Ardralekshmi N S (22664) · Devanandan V (22745) · Deyon P R (~25000)",
      },
      {
        type: "p",
        text: "In keeping with NavPath's ethical and honest values, and to protect our students' privacy, we have published only names and ranks — no personal or contact details. For any verification, please contact the academy directly.",
      },
      { type: "p", text: "Join the next IMU CET Repeaters batch" },
      {
        type: "p",
        text: "This was just our first batch. If you're aiming for the Merchant Navy through IMU CET, the time to start is now. As the best IMU CET repeaters coaching in Kerala, our IMU CET Repeaters batch is built for students ready to convert another attempt into a top rank.",
      },
      {
        type: "list",
        items: [
          "Coaching by real captains and serving officers",
          "Offline at Kottayam + online across Kerala",
          "Full syllabus mock tests, thousands of practice questions, spoken English & interview prep",
        ],
      },
      {
        type: "p",
        text: "Call our admissions team today: 77365 22210 / 77365 22214 / 77365 22215",
      },
      {
        type: "p",
        text: "NavPath Maritime Academy, Kottayam — Navigating futures, transforming lives.",
      },
      {
        type: "p",
        text: "Best IMU CET Coaching & Repeaters Coaching | NavPath Kerala",
      },
      {
        type: "p",
        text: "NavPath — best IMU CET coaching & best IMU CET repeaters coaching in Kerala. 49 of 119 cleared IMU CET 2026 (41%), top All India Rank 816. Kottayam + online.",
      },
      {
        type: "linkline",
        label: "For further Details Visit :",
        text: "https://navpathacademy.com",
        href: "/courses",
      },
      {
        type: "linkline",
        label: "Contact :",
        text: "https://www.navpathacademy.com/contact",
        href: "/contact",
      },
    ],
    faqs: [
      {
        q: "What was NavPath Maritime Academy's IMU CET 2026 result?",
        a: "49 out of 119 NavPath students qualified in IMU CET 2026, achieving a 41% success rate, with the best rank being AIR 816.",
      },
      {
        q: "Does NavPath provide IMU CET Repeaters Coaching?",
        a: "Yes. NavPath offers dedicated IMU CET Repeaters Coaching with full syllabus coverage, mock tests, interview preparation, and mentorship from Captains and active sailing officers.",
      },
      {
        q: "Where is NavPath Maritime Academy located?",
        a: "NavPath Maritime Academy is located in Kottayam, Kerala, and also provides online coaching for students across India.",
      },
      {
        q: "Why choose NavPath for IMU CET preparation?",
        a: "NavPath provides coaching by experienced Captains and active Merchant Navy officers, comprehensive mock tests, study materials, spoken English training, and interview preparation.",
      },
    ],
  },
  {
    slug: "imu-cet-results-2026-cutoff-rank-card-counselling",
    title: "IMU CET Results 2026: Marks vs Rank, Category Cutoff, Result & Counselling Guide",
    alt: "IMU CET Results 2026: Marks vs Rank, Category Cutoff, Result & Counselling Guide",
    img: `${BLOG_IMAGE_BASE}/1781760397183-pct52l.webp`,
    featured: true,
    date: "Jun 18, 2026",
    datePublished: "2026-06-18T05:38:20.114283+00:00",
    dateModified: "2026-06-18T05:38:20.114283+00:00",
    author: "NavPath Academy",
    excerpt:
      'IMU CET 2026 aspirants who are looking for IMU CET Results 2026 and are now panicking about their IMU CET Cutoff 2026 are likely trying to understand what their rank means for counselling and feeling unsure whether they should pursue DNS, B.Tech Marine Engineering, or B.Sc Nautical Science. Many have "low" ranks in the 1,000–3,000+ range and need realistic options, not just hard data. If you have questions like "My result is out — what does my rank actually mean?", "Did I clear the cutoff for my target course?", "Is my rank too low for admission?", "What courses/campuses are still open for me?", "Should I try for sponsorship instead?", or "Should I prepare for 2027?", this article answers them all. You will find a clear distinction between qualifying cutoff (marks) versus admission cutoff (closing rank), a real marks-vs-rank breakdown for 2026, 2025 closing rank data as reference, a counselling checklist to avoid mistakes, a "What if my rank is low" section with actionable alternatives, a sponsorship pathway explanation unique to maritime coaching, and a step-by-step rank card download guide to help you navigate the process with confidence.',
    content: [],
    faqs: [],
  },
  {
    slug: "imu-cet-cutoff-2026",
    title: "IMU CET Cutoff 2026 - Expected Cutoff Marks, Result, Rank Strategy & Counselling Guide",
    alt: "IMU CET Cutoff 2026 - Expected Cutoff Marks, Result, Rank Strategy & Counselling Guide",
    img: `${BLOG_IMAGE_BASE}/1780990218115-z5eff6.webp`,
    featured: true,
    date: "Jun 09, 2026",
    datePublished: "2026-06-09T08:05:03.064522+00:00",
    dateModified: "2026-06-09T08:05:03.064522+00:00",
    author: "NavPath Academy",
    excerpt:
      "This guide is for IMU CET aspirants who want to understand what happens after the exam, how to read the result and rank card, what \u201cIMU CET Cutoff 2026\u201d really means in IMU CET admissions, and how to plan the next step without confusion. It is written for students targeting maritime courses such as DNS, B.Tech Marine Engineering, B.Sc Nautical Science, and related programmes, along with parents who want a clear explanation of cutoffs, ranks, and counselling decisions. The page is structured to answer urgent post-exam search intent while also helping students make smarter admission choices.",
    content: [],
    faqs: [],
  },
  {
    slug: "imu-cet-eligibility-criteria",
    title:
      "IMU CET Eligibility Criteria: Age Limit, PCM Marks, English Marks, Medical Rules & Course-Wise Requirements",
    alt: "IMU CET Eligibility Criteria: Age Limit, PCM Marks, English Marks, Medical Rules & Course-Wise Requirements",
    img: `${BLOG_IMAGE_BASE}/1779766640344-2rtd7.webp`,
    featured: true,
    date: "May 26, 2026",
    datePublished: "2026-05-26T00:00:00.000000+00:00",
    dateModified: "2026-05-26T00:00:00.000000+00:00",
    author: "NavPath Academy",
    excerpt:
      "If you are preparing for IMU CET 2027, this page answers every eligibility question before you waste time studying or applying. In this guide, you will find the exact eligibility criteria for IMU CET 2027 — including PCM marks, English marks, age limits, medical rules, and course-wise requirements all summarized in one clear table. You will also get a course-by-course breakdown for DNS, B.Tech Marine Engineering, B.Sc. Nautical Science, and other programmes, along with a step-by-step checklist on how to verify your eligibility before you start serious preparation. This article covers common eligibility mistakes that can cancel your admission even after scoring well in IMU CET, medical and eyesight standards for deck-side versus engineer-stream courses including DG Shipping-approved medical requirements, category-based relaxations for SC, ST, OBC-NCL, EWS, and Lakshadweep/Andaman & Nicobar candidates, and answers to 10+ FAQs covering pending results, glasses or corrected vision, unmarried status requirements, and what happens if you fail the medical. This blog is for Class 12 students with PCM, graduates considering maritime careers, students unsure if they qualify for IMU CET, and parents helping their child plan a Merchant Navy path. Every eligibility condition is sourced from the official IMU Prospectus 2027-28 and verified by a former Master Mariner with 22 years at sea, so this is not generic AI content but a practical, source-backed guide to avoid eligibility mistakes that cost students an entire year.",
    content: [],
    faqs: [],
  },
  {
    slug: "imu-cet-exam-date-2026",
    title:
      "IMU CET Exam Date 2026: Registration, Application Form, Admit Card, City Selection & Result Updates",
    alt: "IMU CET Exam Date 2026: Registration, Application Form, Admit Card, City Selection & Result Updates",
    img: `${BLOG_IMAGE_BASE}/1778820921110-op25eu.webp`,
    featured: false,
    date: "May 15, 2026",
    datePublished: "2026-05-15T00:00:00.000000+00:00",
    dateModified: "2026-05-15T00:00:00.000000+00:00",
    author: "NavPath Academy",
    excerpt:
      "The IMU CET expected exam date is in May 2026, and if you have registered for the IMU CET exam, the next few weeks are the most critical of your preparation journey. The Indian Maritime University conducts the IMU CET — officially known as the Indian Maritime University Common Entrance Test, or imucet — once every year as the sole national-level gateway to maritime programmes including DNS, B.Tech Marine Engineering, and B.Sc Nautical Science. Missing any single event in this timeline means waiting an entire year for the next cycle. Here is the most important update you need right now: IMU CET registration 2026 is officially closed. The IMU CET application form window, which opened on 6 February 2026, closed on 28 April 2026, and the official CET portal confirms that no further registrations or edits are permitted. The IMU CET notification 2026 had also announced that city selection would run from 4 May to 10 May 2026 — that window has now passed as well. For registered candidates, the immediate priorities are downloading the IMU CET admit card 2026 the moment it goes live on imu.cbexams.com and walking into the 24 May exam fully prepared. This page is your complete, single-source guide to the entire IMU CET 2026 cycle. It covers what the original IMU CET notification announced, how the IMU CET application form process worked step by step, city selection, IMU CET admit card download instructions, exam day rules, and everything you need to know about the IMU CET result 2026 — including how the rank card works, what the counselling rounds look like, and how to plan your seat strategy after the result. Bookmark this page and check back after 24 May for IMU CET result updates as soon as IMU publishes them.",
    content: [],
    faqs: [],
  },
  {
    slug: "imu-cet-exam-date-registration-admit-card-result",
    title:
      "IMU CET 2027 Exam Date, Registration, Syllabus, Eligibility, Cutoff & Preparation - Complete Guide",
    alt: "IMU CET 2027 Exam Date, Registration, Syllabus, Eligibility, Cutoff & Preparation - Complete Guide",
    img: `${BLOG_IMAGE_BASE}/1778250636257-4ek9wr.webp`,
    featured: true,
    date: "May 08, 2026",
    datePublished: "2026-05-08T00:00:00.000000+00:00",
    dateModified: "2026-05-08T00:00:00.000000+00:00",
    author: "NavPath Academy",
    excerpt:
      "If you are preparing for IMU CET 2027, the most important month on your calendar is should be May 2026 — that is the day of the exam. But between now and exam day, there are several steps you cannot afford to miss: selecting your exam city, downloading your admit card, and understanding what happens after the result is declared. IMU CET 2026 registration officially closed on 28 April 2026 at 12:00 PM. The official CET portal at imu.cbexams.com has confirmed that no further registrations or edits are permitted. If you have already registered, your focus now shifts entirely to exam preparation and the remaining admission steps. If you missed the 2026 registration window, this guide will help you understand how the process works so you are fully prepared for the 2027 cycle. This blog covers everything you need to know about the IMU CET 2026 timeline — the official exam date, what the registration process involved, how to select your exam city before 10 May 2026, when and how to download the admit card, and what to expect from the result and counselling process. Every date and status in this blog is sourced from the official IMU admission and CET portals. This page will be updated as soon as the admit card and result are released.",
    content: [],
    faqs: [],
  },
  {
    slug: "best-imu-cet-coaching-in-kerala-2026",
    title: "Best IMU CET Coaching in Kerala 2026 | Navpath Academy",
    alt: "Best IMU CET Coaching in Kerala 2026 | Navpath Academy",
    img: `${BLOG_IMAGE_BASE}/1776159477435-thudy.webp`,
    featured: true,
    date: "Apr 14, 2026",
    datePublished: "2026-04-14T00:00:00.000000+00:00",
    dateModified: "2026-04-14T00:00:00.000000+00:00",
    author: "NavPath Academy",
    excerpt:
      "You're a Kerala student who just finished Class 12 and you're serious about a Merchant Navy career — but you have no idea where to start, which coaching centre to trust, or whether the fees are worth it. This blog answers exactly that. It first explains what IMU CET actually is and what the 2026 exam looks like, so you're not walking in blind. Then it gives you a honest, practical checklist to evaluate any coaching centre — things like whether the faculty are actually sailing professionals or just academics, whether sponsorship prep is built into the programme or bolted on at the end, and whether the batch size is small enough for you to actually get mentored. It then introduces Navpath Academy as a centre that checks every one of those boxes, backed by a side-by-side comparison with other popular Kerala options so you can make an informed call. Before you leave, you also get a clear subject-wise study plan and mock test strategy to start preparing right away — regardless of where you enroll. By the end, you don't just know where to go, you know why — and you feel confident enough to take the next step.",
    content: [],
    faqs: [],
  },
];

function withDefaults(post) {
  const text = post.content.length
    ? post.content
        .map((block) => block.text || block.items?.join(" ") || "")
        .join(" ")
    : post.excerpt;
  return {
    ...post,
    href: `/blogs/${post.slug}`,
    metaTitle: post.metaTitle || post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords || "",
    ogTitle: post.ogTitle || post.metaTitle || post.title,
    ogDescription: post.ogDescription || post.description || post.excerpt,
    readingTime: estimateReadingTime(text),
  };
}

export const BLOG_POST_LIST = BLOG_POSTS.map(withDefaults);

export function getAllPosts() {
  return BLOG_POST_LIST;
}

export function getPostBySlug(slug) {
  return BLOG_POST_LIST.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug, limit = 3) {
  return BLOG_POST_LIST.filter((post) => post.slug !== slug).slice(0, limit);
}
