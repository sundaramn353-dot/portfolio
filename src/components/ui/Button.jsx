import './Button.css';

/**
 * Button — Reusable button / link component
 *
 * @prop {string}  as        - 'button' (default) or 'a' for anchor links
 * @prop {string}  variant   - 'primary' | 'ghost' | 'outline'
 * @prop {string}  size      - 'sm' | 'md' (default) | 'lg'
 * @prop {string}  className - Additional class names
 * @prop {string}  id        - Unique element ID
 * @prop {*}       children  - Button label / content
 * @prop {object}  ...rest   - Any other props (href, onClick, type, etc.)
 */
export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
