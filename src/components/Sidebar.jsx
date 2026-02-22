import { NavLink, useLocation } from 'react-router-dom'

const sections = [
    {
        title: 'خلاصه',
        links: [
            { to: '/', icon: '◈', label: 'معرفی پروژه' },
        ]
    },
    {
        title: 'مستندات فنی',
        links: [
            { to: '/tech/architecture', icon: '⬡', label: 'معماری سیستم' },
            { to: '/tech/hardware', icon: '⬢', label: 'مشخصات سخت‌افزار' },
            { to: '/tech/software', icon: '⟐', label: 'معماری نرم‌افزار' },
        ]
    },
    {
        title: 'مستندات محصول',
        links: [
            { to: '/product/features', icon: '◎', label: 'ویژگی‌ها و قابلیت‌ها' },
            { to: '/product/user-stories', icon: '◉', label: 'سناریوهای کاربری' },
        ]
    },
    {
        title: 'نمونه رابط کاربری',
        links: [
            { to: '/prototype', icon: '▣', label: 'پروتوتایپ اپلیکیشن' },
        ]
    },
    {
        title: 'مستندات تجاری',
        links: [
            { to: '/business/scope', icon: '◧', label: 'محدوده و تحویل‌دادنی‌ها' },
            { to: '/business/timeline', icon: '◫', label: 'زمان‌بندی پروژه' },
        ]
    },
]

export default function Sidebar({ open, onClose }) {
    const location = useLocation()

    return (
        <aside className={`sidebar ${open ? 'open' : ''}`}>
            <div className="sidebar-logo">
                <h2>فراترم</h2>
                <p>پیشنهاد فنی اسمارت ترموستات</p>
            </div>
            <nav className="sidebar-nav">
                {sections.map((section) => (
                    <div className="nav-section" key={section.title}>
                        <div className="nav-section-title">{section.title}</div>
                        {section.links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                onClick={onClose}
                            >
                                <span className="nav-icon">{link.icon}</span>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>
            <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: 'var(--space-md)',
                marginTop: 'auto'
            }}>
                <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', margin: 0 }}>
                    تهیه شده توسط پمگروپ
                </p>
                <p style={{ fontSize: '0.62rem', color: 'var(--text-muted)', margin: 0, marginTop: '2px' }}>
                    اسفند ۱۴۰۴
                </p>
            </div>
        </aside>
    )
}
