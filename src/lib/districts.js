/**
 * District config for the dynamic IMU CET coaching district pages.
 * Each entry drives the district-specific copy, SEO metadata, local access
 * details, and the nearby-towns chips. Content templates in the section
 * components use tokens that are resolved through `fill()`.
 *
 * Tokens:
 *   {city}       -> district.name
 *   {access}     -> district.access (region label, e.g. "South Kerala")
 *   {travel}     -> district.travel (route note)
 *   {context}    -> district.context (maritime context bullet)
 *   {imageBase}  -> district.imageBase (asset basename for /optimized/seo/...)
 */

export function fill(template, district) {
  if (!template) return template;
  return String(template)
    .replaceAll("{city}", district.name)
    .replaceAll("{access}", district.access)
    .replaceAll("{travel}", district.travel)
    .replaceAll("{context}", district.context)
    .replaceAll("{imageBase}", district.imageBase);
}

/**
 * Deep-fill every string leaf in a content template (objects, arrays, strings)
 * with the given district tokens. Non-string values (icons, class names,
 * functions) pass through unchanged.
 */
export function tokenize(value, district) {
  if (typeof value === "string") return fill(value, district);
  if (Array.isArray(value)) return value.map((item) => tokenize(item, district));
  if (value && typeof value === "object") {
    const out = {};
    for (const key of Object.keys(value)) {
      out[key] = tokenize(value[key], district);
    }
    return out;
  }
  return value;
}

export const DISTRICTS = [
  {
    slug: "imu-cet-coaching-thiruvananthapuram",
    name: "Thiruvananthapuram",
    access: "South Kerala",
    cities: [
      "Thiruvananthapuram",
      "Neyyattinkara",
      "Attingal",
      "Kazhakkoottam",
      "Varkala",
      "Kollam",
      "Kottayam",
      "South Kerala",
    ],
    travel:
      "Students can travel to Kottayam by rail or KSRTC routes through Kollam, Alappuzha, or MC Road depending on convenience.",
    context:
      "Vizhinjam, coastal communities, and Kerala's shipping conversations make maritime careers visible, but route selection still needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-kollam",
    name: "Kollam",
    access: "South Kerala",
    cities: [
      "Kollam",
      "Karunagappally",
      "Kottarakkara",
      "Punalur",
      "Adoor",
      "Thiruvananthapuram",
      "Kottayam",
      "South Kerala",
    ],
    travel:
      "Students can travel to Kottayam by rail or KSRTC routes through Kottarakkara or MC Road depending on convenience.",
    context:
      "Kollam's coastal communities and Kerala's shipping conversations make maritime careers visible, but route selection still needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-pathanamthitta",
    name: "Pathanamthitta",
    access: "South Kerala",
    cities: [
      "Pathanamthitta",
      "Thiruvalla",
      "Adoor",
      "Ranni",
      "Chengannur",
      "Kottayam",
      "South Kerala",
    ],
    travel:
      "Students from Pathanamthitta can travel to Kottayam by rail or KSRTC routes through Thiruvalla or MC Road depending on convenience, or choose online mentoring.",
    context:
      "Families in Pathanamthitta often compare engineering, nursing, and maritime options after Plus Two, so route clarity needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-alappuzha",
    name: "Alappuzha",
    access: "South Kerala",
    cities: [
      "Alappuzha",
      "Chengannur",
      "Mavelikkara",
      "Cherthala",
      "Kayamkulam",
      "Kottayam",
      "South Kerala",
    ],
    travel:
      "Students from Alappuzha can travel to Kottayam by rail or KSRTC routes through Chengannur or MC Road depending on convenience, or choose online mentoring.",
    context:
      "Alappuzha's backwaters and coastal communities keep shipping visible, but route selection for a maritime career still needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-kottayam",
    aliases: ["imucet-coaching-kottayam"],
    name: "Kottayam",
    access: "Central Kerala",
    cities: [
      "Kottayam",
      "Changanassery",
      "Pala",
      "Vaikom",
      "Kanjirappally",
      "Erattupetta",
      "Central Kerala",
    ],
    travel:
      "NavPath's campus is in Kottayam, so students can attend in-person counselling, mock review, and parent guidance without long-distance travel.",
    context:
      "Kottayam students often compare engineering, defence, and maritime options after Plus Two, so campus counselling keeps route decisions grounded.",
  },
  {
    slug: "imu-cet-coaching-idukki",
    name: "Idukki",
    access: "Central Kerala",
    cities: [
      "Idukki",
      "Thodupuzha",
      "Munnar",
      "Kattappana",
      "Adimali",
      "Kottayam",
      "Central Kerala",
    ],
    travel:
      "Students from Idukki can reach Kottayam by KSRTC routes through Thodupuzha or Kattappana depending on convenience, or choose online mentoring.",
    context:
      "Idukki families often begin with online mentoring because of distance, then plan a Kottayam campus visit for detailed route guidance.",
  },
  {
    slug: "imu-cet-coaching-ernakulam",
    name: "Ernakulam",
    access: "Central Kerala",
    cities: [
      "Kochi",
      "Ernakulam",
      "Aluva",
      "Perumbavoor",
      "Muvattupuzha",
      "Angamaly",
      "Kottayam",
      "Central Kerala",
    ],
    travel:
      "Students from Ernakulam can travel to Kottayam by rail or KSRTC routes through Koothattukulam or MC Road depending on convenience.",
    context:
      "Ernakulam students compare engineering, defence, aviation, and maritime options after Plus Two, so route selection needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-thrissur",
    name: "Thrissur",
    access: "Central Kerala",
    cities: [
      "Thrissur",
      "Chalakkudy",
      "Irinjalakuda",
      "Kodungallur",
      "Guruvayur",
      "Kottayam",
      "Central Kerala",
    ],
    travel:
      "Students from Thrissur can travel to Kottayam by rail via Ernakulam or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Thrissur families often compare engineering, nursing, and maritime options, so honest route counselling helps before admission decisions.",
  },
  {
    slug: "imu-cet-coaching-palakkad",
    name: "Palakkad",
    access: "Central Kerala",
    cities: [
      "Palakkad",
      "Ottapalam",
      "Shoranur",
      "Pattambi",
      "Chittur",
      "Kottayam",
      "Central Kerala",
    ],
    travel:
      "Students from Palakkad can travel to Kottayam by rail via Ernakulam or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Palakkad students compare engineering, defence, and maritime options after Plus Two, so route clarity matters before preparation begins.",
  },
  {
    slug: "imu-cet-coaching-malappuram",
    name: "Malappuram",
    access: "North Kerala",
    cities: [
      "Malappuram",
      "Manjeri",
      "Perinthalmanna",
      "Ponnani",
      "Tirur",
      "Kondotty",
      "North Kerala",
    ],
    travel:
      "Students from Malappuram can reach Kottayam by rail via Ernakulam or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Malappuram families often begin with online mentoring and parent counselling before planning a Kottayam campus visit for route guidance.",
  },
  {
    slug: "imu-cet-coaching-kozhikode",
    name: "Kozhikode",
    access: "North Kerala",
    cities: [
      "Kozhikode",
      "Koyilandy",
      "Vadakara",
      "Feroke",
      "Mukkam",
      "North Kerala",
    ],
    travel:
      "Students from Kozhikode can reach Kottayam by rail via Shoranur or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Kozhikode's coastal communities keep shipping visible, but route selection for a maritime career still needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-wayanad",
    name: "Wayanad",
    access: "North Kerala",
    cities: [
      "Kalpetta",
      "Mananthavady",
      "Sulthan Bathery",
      "Vythiri",
      "North Kerala",
    ],
    travel:
      "Students from Wayanad can reach Kottayam by KSRTC routes through Kozhikode or Ernakulam, or choose online mentoring to protect study time.",
    context:
      "Wayanad families often begin with online mentoring because of distance, then plan a Kottayam campus visit for detailed route guidance.",
  },
  {
    slug: "imu-cet-coaching-kannur",
    name: "Kannur",
    access: "North Kerala",
    cities: [
      "Kannur",
      "Thalassery",
      "Payyanur",
      "Taliparamba",
      "Mattannur",
      "Iritty",
      "North Kerala",
    ],
    travel:
      "Students from Kannur can reach Kottayam by rail via Shoranur or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Kannur's coastal communities keep shipping visible, but route selection for a maritime career still needs careful guidance.",
  },
  {
    slug: "imu-cet-coaching-kasaragod",
    name: "Kasaragod",
    access: "North Kerala",
    cities: [
      "Kasaragod",
      "Kanhangad",
      "Nileshwar",
      "Trikaripur",
      "Bekal",
      "North Kerala",
    ],
    travel:
      "Students from Kasaragod can reach Kottayam by rail via Shoranur or by KSRTC routes, or choose online mentoring to protect study time.",
    context:
      "Kasaragod families often begin with online mentoring and parent counselling before planning a Kottayam campus visit for route guidance.",
  },
].map((d) => ({
  ...d,
  imageBase: d.slug,
  seoTitle: `IMU CET Coaching in ${d.name} | NavPath Academy`,
  seoDescription: `Captain-led IMU CET coaching in ${d.name} for DNS, B.Sc. Nautical Science and Merchant Navy admission. Mentors who have sailed 30+ years. ${d.access} route support.`,
}));

const BY_SLUG = new Map();
for (const district of DISTRICTS) {
  BY_SLUG.set(district.slug, district);
  for (const alias of district.aliases || []) {
    BY_SLUG.set(alias, district);
  }
}

export function getDistrict(slug) {
  return BY_SLUG.get(slug) || null;
}

export function getDistrictByPath(district) {
  return getDistrict(district);
}

/** Every URL (canonical slug + aliases) that should resolve to a district page. */
export const DISTRICT_URL_SLUGS = DISTRICTS.flatMap((d) => [d.slug, ...(d.aliases || [])]);

export function districtHref(district) {
  return `/${district.slug}`;
}
