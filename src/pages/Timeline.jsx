export default function Timeline() {
    const milestones = [
        {
            week: 'هفته ۱ — ۲',
            title: 'معماری و طراحی',
            tasks: [
                'طراحی نهایی UI/UX (فیگما)',
                'تعریف API ارتباط اپ↔ESP32',
                'ساختار پروژه و ماژول‌بندی',
                'ستاپ CI/CD و ابزارهای توسعه',
            ]
        },
        {
            week: 'هفته ۳ — ۴',
            title: 'هسته شبکه و ستاپ',
            tasks: [
                'WiFi Discovery — شناسایی هات‌اسپات',
                'Provisioning — ارسال اطلاعات WiFi',
                'ارتباط HTTP با ESP32',
                'مدیریت دو سناریو (با/بدون وای‌فای خانه)',
            ]
        },
        {
            week: 'هفته ۵ — ۶',
            title: 'داشبورد و کنترل',
            tasks: [
                'صفحه داشبورد (خواندن و تنظیم دما)',
                'سیستم پریست‌ها (خواب/بیرون/مهمانی)',
                'کف دمای حداقل (۱۵°C)',
                'ذخیره/بارگذاری تنظیمات',
                'اتصال بک‌گراند خودکار',
            ]
        },
        {
            week: 'هفته ۷',
            title: 'زمان‌بندی و تاریخچه',
            tasks: [
                'زمان‌بندی هفتگی (تقویم شمسی)',
                'نمودار تاریخچه دما',
                'لاگ ۱۰ تغییر آخر (چندکاربره)',
                'هشدار دمایی (نوتیفیکیشن)',
            ]
        },
        {
            week: 'هفته ۸',
            title: 'تست و تحویل',
            tasks: [
                'تست یکپارچه با سخت‌افزار نمونه',
                'مدیریت چند دستگاه',
                'بهینه‌سازی و رفع باگ',
                'مستندسازی نهایی',
                'آماده‌سازی APK و تحویل',
            ]
        },
    ]

    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◫ مستندات تجاری</div>
                <h1 className="page-title">زمان‌بندی پروژه</h1>
                <p className="page-subtitle">برنامه زمانی ۸ هفته‌ای توسعه فاز ۱ — از طراحی تا تحویل</p>
            </div>

            <div className="spec-grid animate-in delay-1">
                <div className="spec-box">
                    <div className="spec-value">۸</div>
                    <div className="spec-label">هفته کل</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۵</div>
                    <div className="spec-label">مایلستون</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۱۱+</div>
                    <div className="spec-label">ویژگی اصلی</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">Kotlin</div>
                    <div className="spec-label">نیتیو اندروید</div>
                </div>
            </div>

            <h2 className="animate-in delay-2">مایلستون‌ها</h2>
            <div className="timeline animate-in delay-2">
                {milestones.map((m, i) => (
                    <div className="timeline-item" key={i}>
                        <div className="timeline-dot" />
                        <div className="timeline-week">{m.week}</div>
                        <div className="timeline-title">{m.title}</div>
                        <ul className="feature-list" style={{ marginTop: 'var(--space-sm)' }}>
                            {m.tasks.map((t, j) => (
                                <li key={j} style={{ fontSize: '0.82rem' }}>{t}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <h2 className="animate-in delay-3">نکات مهم</h2>
            <div className="card card-accent animate-in delay-3">
                <ul className="feature-list">
                    <li>زمان‌بندی بر اساس دریافت به‌موقع API سخت‌افزار و نمونه فیزیکی محاسبه شده</li>
                    <li>تأخیر در تحویل نمونه سخت‌افزاری ممکن است زمان‌بندی را تغییر دهد</li>
                    <li>جلسات هفتگی بازبینی پیشرفت با تیم فراالکتریک</li>
                    <li>امکان تنظیم اولویت ویژگی‌ها در طول پروژه وجود دارد</li>
                </ul>
            </div>

            <h2 className="animate-in delay-4">مراحل بعدی</h2>
            <div className="card animate-in delay-4">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {[
                        { num: '۱', text: 'بررسی و تأیید این پروپوزال', color: 'var(--accent-warm)' },
                        { num: '۲', text: 'تعیین نام تجاری محصول', color: 'var(--accent-warm)' },
                        { num: '۳', text: 'تحویل مستند API سخت‌افزار (ESP32)', color: 'var(--accent-teal)' },
                        { num: '۴', text: 'شروع طراحی UI/UX و معماری', color: 'var(--accent-teal)' },
                        { num: '۵', text: 'ورود به فاز توسعه', color: 'var(--accent-blue)' },
                    ].map((step) => (
                        <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                            <div style={{
                                width: 32, height: 32, borderRadius: '50%',
                                background: step.color, color: '#0C0E13',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 800, fontSize: '0.85rem', flexShrink: 0
                            }}>{step.num}</div>
                            <span style={{ fontSize: '0.9rem' }}>{step.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
