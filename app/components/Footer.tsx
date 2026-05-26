import Link from "next/link";

interface FooterProps {
  businessName?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

function parseAddress(text?: string) {
  return text?.split("\n").filter(Boolean) || [];
}

function parseHours(text?: string) {
  if (!text) return null;
  const rows = text.split("\n").filter(Boolean);
  return rows.map((row) => {
    const parts = row.split(/[:–-]/).map((s) => s.trim());
    return { day: parts[0] || "", time: parts[1] || parts.slice(1).join(" ") || "" };
  });
}

export default function Footer({
  businessName,
  address,
  phone,
  email,
  hours,
}: FooterProps) {
  const name = businessName || "Northside Primary Care";
  const addressLines = parseAddress(address);
  const hoursRows = parseHours(hours);

  const defaultAddress = [
    "3250 North Lakeview Avenue",
    "Suite 210",
    "Chicago, IL 60657",
  ];

  const displayAddress = addressLines.length >= 3 ? addressLines : defaultAddress;

  const defaultHours = [
    { day: "Mon\u2013Thu", time: "8:00 AM \u2013 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM \u2013 7:00 PM" },
    { day: "Friday", time: "8:00 AM \u2013 4:00 PM" },
    { day: "Saturday", time: "9:00 AM \u2013 12:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const displayHours = hoursRows || defaultHours;

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              {name.split(/(?<=Northside)\s*/)[0]}<span className="text-green-light">{name.split(/(?<=Northside)\s*/)[1] || "Primary Care"}</span>
            </h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              {displayAddress.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <p className="mt-3 text-sm text-blue-200">
              Phone:{" "}
              <a href={phone ? `tel:${phone.replace(/\D/g, "")}` : "tel:+17735550142"} className="text-white hover:text-green-light transition-colors">
                {phone || "(773) 555-0142"}
              </a>
              <br />
              Email:{" "}
              <a href={email ? `mailto:${email}` : "mailto:info@northsideprimarycare.com"} className="text-white hover:text-green-light transition-colors">
                {email || "info@northsideprimarycare.com"}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Insurance & Patients", href: "/insurance" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-3">Office Hours</h3>
            <table className="text-sm text-blue-200 w-full">
              <tbody>
                {displayHours.map((row, i) => (
                  <tr key={i} className={i < displayHours.length - 1 ? "border-b border-blue-800/50" : ""}>
                    <td className="py-1.5">{row.day}</td>
                    <td className="py-1.5 text-right">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800/50 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p className="mt-1 text-xs text-blue-400">
            This website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
