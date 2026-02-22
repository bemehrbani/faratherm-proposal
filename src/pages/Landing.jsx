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

            <h2 className="animate-in delay-2">درباره پروژه</h2>
            <div className="card card-accent animate-in delay-2">
                <p>
                    شرکت فراالکتریک با بیش از ۲۰ سال تجربه در صنعت تأسیسات و هوشمندسازی موتورخانه، قصد دارد محصولی جدید
                    برای <strong>بازار خانگی (B2C)</strong> ارائه دهد. این محصول، یک ترموستات هوشمند است که با استفاده از
                    سنسور دمای بی‌سیم و بورد رله، کنترل پکیج خانگی را از طریق اپلیکیشن موبایل ممکن می‌سازد.
                </p>
                <p>
                    پروژه حاضر <strong>نسخه خانگی محصول SES</strong> (هوشمندسازی موتورخانه) است — اما با تمرکز بر
                    سادگی کاربری، ظاهر مدرن و کاربر غیرفنی خانگی.
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
            </div>

            <h2 className="animate-in delay-4">اطلاعات مشتری</h2>
            <table className="data-table animate-in delay-4">
                <tbody>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)', width: '35%' }}>شرکت</td><td>فراالکتریک شهر</td></tr>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>وبسایت</td><td><a href="https://faraelectric.com" target="_blank">faraelectric.com</a></td></tr>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>سال تأسیس</td><td>۱۳۸۰ (2001)</td></tr>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>سوابق</td><td>+۱۰,۰۰۰ پروژه — تأسیسات و هوشمندسازی</td></tr>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>محصول مرجع</td><td>SES — هوشمندسازی موتورخانه</td></tr>
                    <tr><td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>تماس</td><td>۰۲۱-۸۸۹۰۹۲۳۹</td></tr>
                </tbody>
            </table>
        </div>
    )
}
