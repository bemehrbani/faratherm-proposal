export default function Features() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◎ مستندات محصول</div>
                <h1 className="page-title">ویژگی‌ها و قابلیت‌ها</h1>
                <p className="page-subtitle">لیست کامل قابلیت‌های فاز ۱ اسمارت ترموستات خانگی</p>
            </div>

            <h2 className="animate-in delay-1">ماتریس قابلیت‌ها — فاز ۱</h2>
            <table className="data-table animate-in delay-1">
                <thead>
                    <tr><th>ویژگی</th><th>وضعیت</th><th>توضیح</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 600 }}>خواندن دمای لحظه‌ای</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>نمایش دمای محیط از سنسور DS18B20</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>تنظیم دمای دلخواه</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>ست‌پوینت با کنترل افزایش/کاهش</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>زمان‌بندی هفتگی</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>تقویم شمسی — بازه‌های زمانی برای هر روز هفته</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>حالت‌های از پیش تعریف‌شده</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>خواب 🌙 / بیرون از خانه 🏃 / مهمانی 🎉 / سفارشی</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>کف دمای حداقل</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>پیش‌فرض ۱۵°C — زیر این حد پکیج خاموش نمی‌شود</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>هشدار دمایی</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>نوتیفیکیشن اندروید وقتی دما غیرعادی شود</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>چند کاربره</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>اعضای خانواده — هر اپ با نام مالک</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>لاگ تغییرات</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>۱۰ تغییر آخر با نام و تاریخ شمسی</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>مدیریت چند دستگاه</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>خانه، دفتر، منزل مادر — از یک اپ</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>اتصال خودکار بک‌گراند</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>ورود به فضای خانه → اتصال اتوماتیک (قابل غیرفعال‌سازی)</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>ذخیره/بارگذاری تنظیمات</td>
                        <td><span className="status-check">✓ تأیید</span></td>
                        <td>کاربر چند پروفایل تنظیمات ذخیره و Load کند</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>پیش‌گرم کردن (Pre-Heat)</td>
                        <td><span className="status-pending">⏳ فاز بعد</span></td>
                        <td>روشن شدن خودکار قبل از ساعت تعیین‌شده</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>اتصال به سرور/Cloud</td>
                        <td><span className="status-deferred">— تعلیق</span></td>
                        <td>فاز ۲ — بعد از اعتبارسنجی بازار</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>کنترل از راه دور</td>
                        <td><span className="status-deferred">— تعلیق</span></td>
                        <td>فاز ۲ — منوط به راه‌اندازی سرور</td>
                    </tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-2">جزئیات قابلیت‌های کلیدی</h2>

            <div className="card card-accent animate-in delay-2">
                <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>📅 زمان‌بندی هوشمند</h3>
                <p>کاربر می‌تواند برای هر روز هفته (شنبه تا جمعه — تقویم شمسی) بازه‌های زمانی تعریف کند:</p>
                <ul className="feature-list">
                    <li>تعریف چند بازه زمانی در روز (مثلاً صبح، عصر، شب)</li>
                    <li>دمای متفاوت برای هر بازه</li>
                    <li>امکان کپی تنظیمات یک روز به روز دیگر</li>
                    <li>مثال: «شب‌ها ساعت ۱۰ دما ۲ درجه کم شود»</li>
                </ul>
            </div>

            <div className="card card-accent animate-in delay-3">
                <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>👥 سیستم چندکاربره</h3>
                <p>اعضای خانواده هر کدام اپ خودشان را نصب و نام خود را ثبت می‌کنند. سیستم لاگ تغییرات:</p>
                <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.8, direction: 'rtl' }}>
                    ۱۴۰۴/۱۲/۰۲ ساعت ۰۸:۰۰ — هادی<br />
                    ۱۴۰۴/۱۲/۰۲ ساعت ۱۰:۰۰ — مهدی<br />
                    ۱۴۰۴/۱۲/۰۲ ساعت ۱۴:۳۰ — سارا<br />
                    ...
                </div>
                <p style={{ marginTop: 'var(--space-md)', fontSize: '0.82rem' }}>
                    ریز تغییرات ثبت نمی‌شود — فقط «چه کسی، چه زمانی تنظیمات را تغییر داد»
                </p>
            </div>

            <div className="card card-accent animate-in delay-4">
                <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>🏠 مدیریت چند مکان</h3>
                <p>
                    کاربر می‌تواند چندین دستگاه ترموستات در مکان‌های مختلف را از یک اپ مدیریت کند.
                    هر دستگاه با نام مکان ذخیره می‌شود:
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-sm)' }}>
                    <span className="preset-chip active">🏠 خانه</span>
                    <span className="preset-chip">🏢 دفتر</span>
                    <span className="preset-chip">👩 منزل مادر</span>
                    <span className="preset-chip">🏔️ ویلا</span>
                </div>
            </div>
        </div>
    )
}
