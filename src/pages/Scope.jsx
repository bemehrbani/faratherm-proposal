export default function Scope() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◧ مستندات تجاری</div>
                <h1 className="page-title">محدوده و تحویل‌دادنی‌ها</h1>
                <p className="page-subtitle">تعریف دقیق آنچه در فاز ۱ تحویل داده می‌شود و آنچه خارج از محدوده است</p>
            </div>

            <h2 className="animate-in delay-1">تحویل‌دادنی‌های فاز ۱</h2>
            <table className="data-table animate-in delay-1">
                <thead>
                    <tr><th>#</th><th>تحویل‌دادنی</th><th>فرمت</th><th>توضیح</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>۱</td>
                        <td style={{ fontWeight: 600 }}>اپلیکیشن اندروید</td>
                        <td>APK + Source</td>
                        <td>اپ کامل Kotlin نیتیو — آماده نصب و انتشار در بازار/مایکت</td>
                    </tr>
                    <tr>
                        <td>۲</td>
                        <td style={{ fontWeight: 600 }}>مستندات فنی</td>
                        <td>PDF + Markdown</td>
                        <td>معماری، API، پروتکل‌ها و نحوه ارتباط با سخت‌افزار</td>
                    </tr>
                    <tr>
                        <td>۳</td>
                        <td style={{ fontWeight: 600 }}>سورس‌کد</td>
                        <td>Git Repository</td>
                        <td>کد کامل اپلیکیشن با مستندات inline</td>
                    </tr>
                    <tr>
                        <td>۴</td>
                        <td style={{ fontWeight: 600 }}>راهنمای کاربر</td>
                        <td>PDF فارسی</td>
                        <td>راهنمای تصویری ستاپ و استفاده — مناسب کاربر غیرفنی</td>
                    </tr>
                    <tr>
                        <td>۵</td>
                        <td style={{ fontWeight: 600 }}>مشخصات API دستگاه</td>
                        <td>Markdown</td>
                        <td>مستند پروتکل ارتباطی اپ↔ESP32 (برای تیم فریمور)</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-2">محدوده فاز ۱ (داخل محدوده)</h2>
            <div className="card-grid animate-in delay-2">
                <div className="card">
                    <div className="card-icon">📱</div>
                    <h3 style={{ marginTop: 0 }}>اپ اندروید</h3>
                    <ul className="feature-list">
                        <li>رابط کاربری فارسی</li>
                        <li>ستاپ دستگاه (WiFi provisioning)</li>
                        <li>نمایش و تنظیم دما</li>
                        <li>زمان‌بندی با تقویم شمسی</li>
                        <li>پریست‌ها (خواب/بیرون/مهمانی)</li>
                        <li>چند کاربره + لاگ تغییرات</li>
                        <li>مدیریت چند دستگاه</li>
                        <li>هشدار دمایی (نوتیفیکیشن)</li>
                        <li>اتصال بک‌گراند خودکار</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-icon">📄</div>
                    <h3 style={{ marginTop: 0 }}>مستندات</h3>
                    <ul className="feature-list">
                        <li>مستند معماری نرم‌افزار</li>
                        <li>مشخصات API (اپ↔ESP32)</li>
                        <li>راهنمای کاربر فارسی</li>
                        <li>مستند فنی توسعه‌دهنده</li>
                    </ul>
                </div>
            </div>

            <h2 className="animate-in delay-3">خارج از محدوده فاز ۱</h2>
            <div className="card animate-in delay-3" style={{ borderRight: '3px solid var(--accent-red)' }}>
                <table className="data-table" style={{ marginBottom: 0 }}>
                    <tbody>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>توسعه فریمور ESP32</td><td style={{ color: 'var(--text-muted)' }}>توسط تیم سخت‌افزار فراالکتریک</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>اپلیکیشن iOS</td><td style={{ color: 'var(--text-muted)' }}>فقط اندروید در فاز ۱</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>سرور و Cloud</td><td style={{ color: 'var(--text-muted)' }}>فاز ۲ — تعلیق</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>کنترل از راه دور</td><td style={{ color: 'var(--text-muted)' }}>فاز ۲ — منوط به سرور</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>داشبورد وب ادمین</td><td style={{ color: 'var(--text-muted)' }}>فاز ۲</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>انتشار Google Play</td><td style={{ color: 'var(--text-muted)' }}>مارکت‌های ایرانی + APK</td></tr>
                        <tr><td style={{ color: 'var(--accent-red)' }}>✗</td><td>Pre-Heat خودکار</td><td style={{ color: 'var(--text-muted)' }}>فاز بعدی اپ</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="animate-in delay-4">پیش‌نیازها (از سمت فراالکتریک)</h2>
            <div className="card card-accent animate-in delay-4">
                <ul className="feature-list">
                    <li>مشخصات فنی API دستگاه ESP32 (فرمت درخواست/پاسخ HTTP)</li>
                    <li>نمونه سخت‌افزاری (پروتوتایپ) برای تست اپلیکیشن — در فاز عملی</li>
                    <li>تأیید نهایی ویژگی‌ها و اولویت‌ها</li>
                    <li>انتخاب نام تجاری محصول</li>
                    <li>لوگو و هویت بصری (در صورت وجود)</li>
                </ul>
            </div>

            <h2 className="animate-in delay-4">پیش‌نیازهای مشارکت (در صورت انتخاب مسیر B)</h2>
            <div className="card animate-in delay-4" style={{ borderRight: '3px solid var(--accent-warm)' }}>
                <p style={{ marginTop: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    در صورت تصمیم برای مشارکت استراتژیک (سهامی) به جای قرارداد پروژه‌ای، موارد زیر باید قبل از شروع توسعه نهایی شود:
                </p>
                <ul className="feature-list">
                    <li>توافق‌نامه بنیان‌گذاران (Founders Agreement) — تقسیم سهام، vesting، نقش‌ها</li>
                    <li>تصمیم‌گیری درباره ساختار حقوقی (ثبت شرکت مشترک در ایران)</li>
                    <li>تعریف سرمایه اولیه هر طرف (سخت‌افزار فراالکتریک vs. کار نرم‌افزاری پمگروپ)</li>
                    <li>توافق روی مدل درآمدی و تقسیم سود</li>
                    <li>تعریف شرایط خروج (exit clause) برای هر طرف</li>
                </ul>
            </div>
        </div>
    )
}
