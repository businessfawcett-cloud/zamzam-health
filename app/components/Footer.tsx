import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              Northside<span className="text-green-light">Primary Care</span>
            </h3>
            <p className="text-sm text-blue-200 leading-relaxed">
              3250 North Lakeview Avenue<br />
              Suite 210<br />
              Chicago, IL 60657
            </p>
            <p className="mt-3 text-sm text-blue-200">
              Phone:{" "}
              <a href="tel:+17735550142" className="text-white hover:text-green-light transition-colors">
                (773) 555-0142
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@northsideprimarycare.com" className="text-white hover:text-green-light transition-colors">
                info@northsideprimarycare.com
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
                <tr className="border-b border-blue-800/50">
                  <td className="py-1.5">Mon&ndash;Tue</td>
                  <td className="py-1.5 text-right">8:00 AM &ndash; 5:00 PM</td>
                </tr>
                <tr className="border-b border-blue-800/50">
                  <td className="py-1.5">Wednesday</td>
                  <td className="py-1.5 text-right">8:00 AM &ndash; 7:00 PM</td>
                </tr>
                <tr className="border-b border-blue-800/50">
                  <td className="py-1.5">Thu</td>
                  <td className="py-1.5 text-right">8:00 AM &ndash; 5:00 PM</td>
                </tr>
                <tr className="border-b border-blue-800/50">
                  <td className="py-1.5">Friday</td>
                  <td className="py-1.5 text-right">8:00 AM &ndash; 4:00 PM</td>
                </tr>
                <tr className="border-b border-blue-800/50">
                  <td className="py-1.5">Saturday</td>
                  <td className="py-1.5 text-right">9:00 AM &ndash; 12:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1.5">Sunday</td>
                  <td className="py-1.5 text-right">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800/50 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Northside Primary Care. All rights reserved.</p>
          <p className="mt-1 text-xs text-blue-400">
            This website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
