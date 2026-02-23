import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◈ پیشنهاد فنی</div>
                <h1 className="page-title">اسمارت ترموستات خانگی</h1>
                <p className="page-subtitle">
                    سیستم کنترل هوشمند پکیج خانگی با اپلیکیشن اندروید — نسخه خانگی و مصرفی محصول SES فراالکتریک.
                    این سند، پیشنهاد فنی و تجاری برای طراحی و توسعه فاز ۱ (لوکال) پروژه است.
                </p>
            </div>

            <div className="spec-grid animate-in delay-1">
                <div className="spec-box">
                    <div className="spec-value">ESP32</div>
                    <div className="spec-label">چیپ اصلی</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">Kotlin</div>
                    <div className="spec-label">اپ اندروید نیتیو</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">WiFi</div>
                    <div className="spec-label">ارتباط بی‌سیم</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۸</div>
                    <div className="spec-label">هفته توسعه</div>
                </div>
            </div>

            {/* Two-tier product */}
            <h2 className="animate-in delay-2">دو تیر محصول</h2>
            <div className="card-grid animate-in delay-2">
                <div className="card" style={{ borderRight: '3px solid var(--accent-teal)' }}>
                    <div className="card-icon">🏠</div>
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>فاز ۱ — راه‌حل لوکال (فوکوس فعلی)</h3>
                    <p>
                        دستگاه مستقیماً از طریق WiFi خانگی به اپ متصل می‌شود.
                        <strong> بدون اینترنت، بدون سرور، بدون اشتراک ماهیانه.</strong> کنترل کامل از اپ روی شبکه محلی خانه.
                    </p>
                    <div style={{ marginTop: 'var(--space-sm)', fontSize: '0.78rem', color: 'var(--accent-teal)' }}>
                        ✓ قیمت هدف: ۱–۱.۵ میلیون تومان · بدون هزینه اشتراک
                    </div>
                </div>
                <div className="card" style={{ opacity: 0.6 }}>
                    <div className="card-icon">☁️</div>
                    <h3 style={{ marginTop: 0 }}>فاز ۲ — راه‌حل ابری (آینده)</h3>
                    <p>
                        تمام قابلیت‌های فاز ۱ + اتصال به سرور، کنترل از هر جای دنیا، گزارش مصرف انرژی
                        و یکپارچه‌سازی با سیستم‌های خانه هوشمند.
                    </p>
                    <div style={{ marginTop: 'var(--space-sm)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        ○ پس از اعتبارسنجی بازار فاز ۱
                    </div>
                </div>
            </div>

            <h2 className="animate-in delay-3">درباره پروژه</h2>
            <div className="card card-accent animate-in delay-3">
                <p>
                    شرکت فراالکتریک با بیش از ۲۰ سال تجربه در صنعت تأسیسات و هوشمندسازی موتورخانه، قصد دارد محصولی جدید
                    برای <strong>بازار خانگی (B2C)</strong> ارائه دهد. این محصول، یک ترموستات هوشمند است که با استفاده از
                    سنسور دمای بی‌سیم و بورد رله، کنترل پکیج خانگی را از طریق اپلیکیشن موبایل ممکن می‌سازد.
                </p>
                <p>
                    پروژه حاضر <strong>نسخه خانگی محصول SES</strong> (هوشمندسازی موتورخانه) است — اما با تمرکز بر
                    سادگی کاربری، ظاهر مدرن و کاربر غیرفنی خانگی.
                </p>
                <p style={{ marginBottom: 0 }}>
                    توسعه نرم‌افزار و اپلیکیشن توسط <strong>پمگروپ (Mahdi Farimani)</strong> انجام می‌شود.
                    سخت‌افزار، فریمور و توزیع بر عهده <strong>فراالکتریک (هادی واعظی)</strong> است.
                </p>
            </div>

            <h2 className="animate-in delay-3">ساختار این سند</h2>
            <div className="card-grid animate-in delay-3">
                <Link to="/tech/architecture" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">⬡</div>
                        <h3>مستندات فنی</h3>
                        <p>معماری سیستم، مشخصات سخت‌افزار و نرم‌افزار</p>
                    </div>
                </Link>
                <Link to="/product/features" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">◎</div>
                        <h3>مستندات محصول</h3>
                        <p>ویژگی‌ها، قابلیت‌ها و سناریوهای کاربری</p>
                    </div>
                </Link>
                <Link to="/prototype" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">▣</div>
                        <h3>پروتوتایپ UI</h3>
                        <p>نمونه تعاملی رابط کاربری اپلیکیشن</p>
                    </div>
                </Link>
                <Link to="/business/scope" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">◧</div>
                        <h3>مستندات تجاری</h3>
                        <p>محدوده پروژه، تحویل‌دادنی‌ها و زمان‌بندی</p>
                    </div>
                </Link>
                <Link to="/market" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">◉</div>
                        <h3>فرصت بازار</h3>
                        <p>تحلیل بازار ایران و پتانسیل محصول</p>
                    </div>
                </Link>
                <Link to="/partnership" style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-icon">◈</div>
                        <h3>پیشنهاد مشارکت</h3>
                        <p>ساختار همکاری، سهام و نقشه راه بلندمدت</p>
                    </div>
                </Link>
            </div>

            <h2 className="animate-in delay-4">اطلاعات طرفین</h2>
            <div className="card-grid animate-in delay-4">
                <div>
                    <table className="data-table">
                        <tbody>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)', width: '40%' }}>شرکت</td><td>فراالکتریک شهر</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>وبسایت</td><td><a href="https://faraelectric.com" target="_blank" rel="noreferrer">faraelectric.com</a></td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>سال تأسیس</td><td>۱۳۸۰ (2001)</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>سوابق</td><td>+۱۰,۰۰۰ پروژه — تأسیسات و هوشمندسازی</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>محصول مرجع</td><td>SES — هوشمندسازی موتورخانه</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>تماس</td><td>۰۲۱-۸۸۹۰۹۲۳۹</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="data-table">
                        <tbody>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)', width: '40%' }}>شرکت</td><td>پمگروپ (PomeGroup)</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>وبسایت</td><td><a href="https://pomegroup.studio" target="_blank" rel="noreferrer">pomegroup.studio</a></td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>مسئولیت</td><td>اپلیکیشن اندروید + نرم‌افزار</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>استک</td><td>Kotlin · Android · Laravel</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>محصولات فعال</td><td>ESGClick · VSME · Homora</td></tr>
                            <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>تماس</td><td>mahdi@pomegroup.studio</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Partnership CTA */}
            <div className="card card-accent animate-in delay-4" style={{ marginTop: 'var(--space-xl)', borderRight: '3px solid var(--accent-warm)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>🤝 پیشنهاد مشارکت بلندمدت</h3>
                <p>
                    فراتر از یک قرارداد توسعه نرم‌افزار، پمگروپ آماده ورود به یک مشارکت استراتژیک بلندمدت با فراالکتریک است.
                    جزئیات کامل ساختار همکاری، سهام و نقشه راه در بخش مشارکت آمده است.
                </p>
                <Link to="/partnership" style={{ textDecoration: 'none' }}>
                    <button style={{
                        background: 'var(--accent-warm)', color: '#0C0E13', border: 'none',
                        borderRadius: 'var(--radius-md)', padding: 'var(--space-sm) var(--space-xl)',
                        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer'
                    }}>
                        مشاهده پیشنهاد مشارکت ←
                    </button>
                </Link>
            </div>
        </div>
    )
}
