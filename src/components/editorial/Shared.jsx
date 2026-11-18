import { ArrowUpRight } from 'lucide-react';

export function ArrowLink({ href, children, className = '', external = false, ...rest }) {
  return (
    <a href={href} className={`arrow-link ${className}`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}<ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function SectionLabel({ number, children, note }) {
  return (
    <div className="section-label">
      <span><span className="section-number">{number}</span>{children}</span>
      {note && <span className="section-note">{note}</span>}
    </div>
  );
}
