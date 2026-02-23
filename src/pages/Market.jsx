export default function Market() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◉ فرصت بازار</div>
                <h1 className="page-title">بازار ایران — فرصت بکر</h1>
                <p className="page-subtitle">
                    هیچ رقیب محلی جدی در حوزه ترموستات هوشمند خانگی وجود ندارد.
                    اولین محصول خوب، بازار را می‌برد.
                </p>
            </div>

            {/* Key stats */}
            <div className="spec-grid animate-in delay-1">
                <div className="spec-box">
                    <div className="spec-value">۲۵M+</div>
                    <div className="spec-label">واحد مسکونی در ایران</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۷۵٪</div>
                    <div className="spec-label">نفوذ WiFi خانگی</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۹۸٪</div>
                    <div className="spec-label">سهم اندروید در ایران</div>
                </div>
                <div className="spec-box">
                    <div className="spec-value">۰</div>
                    <div className="spec-label">رقیب محلی جدی</div>
                </div>
            </div>

            {/* Why local-first */}
            <h2 className="animate-in delay-2">چرا راه‌حل لوکال برای ایران ایده‌آل است؟</h2>
            <div className="card-grid animate-in delay-2">
                <div className="card">
                    <div className="card-icon">📶</div>
                    <h3 style={{ marginTop: 0 }}>اینترنت ناپایدار</h3>
                    <p>
                        قطعی‌های مکرر اینترنت در ایران یک واقعیت است. راه‌حل لوکال حتی در زمان قطعی اینترنت
                        به کار خود ادامه می‌دهد — این یک مزیت فروش مستقیم در برابر محصولات Cloud-only خارجی.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">🔒</div>
                    <h3 style={{ marginTop: 0 }}>حریم خصوصی</h3>
                    <p>
                        نگرانی درباره ارسال داده به سرورهای خارجی در بین کاربران ایرانی بالاست.
                        راه‌حل لوکال: هیچ داده‌ای از خانه خارج نمی‌شود — یک مزیت بازاریابی قوی.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">💰</div>
                    <h3 style={{ marginTop: 0 }}>حساسیت قیمت</h3>
                    <p>
                        راه‌حل لوکال نیاز به اشتراک ماهیانه ندارد. یک‌بار خرید، همیشه کار می‌کند.
                        این مدل در بازار ایران با توجه به شرایط اقتصادی بسیار جذاب‌تر است.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">📱</div>
                    <h3 style={{ marginTop: 0 }}>اندروید ۹۸٪</h3>
                    <p>
                        سهم اندروید در ایران بیش از ۹۸٪ است. اپ اندروید نیتیو با Kotlin بهترین انتخاب
                        برای فاز اول — بدون نیاز به iOS یا cross-platform در مرحله MVP.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">🗣️</div>
                    <h3 style={{ marginTop: 0 }}>زبان فارسی</h3>
                    <p>
                        رقبای خارجی (Nest، Tado، Honeywell) فارسی ندارند و با سیستم‌های گرمایش
                        ایرانی (پکیج گازی) سازگار نیستند. محصول فارسی بومی، برتری آشکار دارد.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">🏭</div>
                    <h3 style={{ marginTop: 0 }}>مزیت فراالکتریک</h3>
                    <p>
                        با ۲۰+ سال حضور در صنعت تأسیسات، فراالکتریک شبکه توزیع، اعتماد بازار و
                        دانش فنی لازم را دارد — مانع ورود برای رقبا.
                    </p>
                </div>
            </div>

            {/* Market sizing */}
            <h2 className="animate-in delay-3">اندازه بازار و هدف‌گذاری</h2>
            <table className="data-table animate-in delay-3">
                <thead>
                    <tr><th>افق</th><th>هدف فروش</th><th>درآمد سخت‌افزار (تخمین)</th><th>یادداشت</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 600 }}>سال اول — فاز MVP</td>
                        <td>۵۰۰ دستگاه</td>
                        <td>۵۰۰–۷۵۰ میلیون تومان</td>
                        <td>اعتبارسنجی محصول، ساخت کانال</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>سال دوم — رشد</td>
                        <td>۳,۰۰۰ دستگاه</td>
                        <td>۳–۴.۵ میلیارد تومان</td>
                        <td>گسترش کانال توزیع</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>سال سوم — Cloud</td>
                        <td>۱۰,۰۰۰ دستگاه + اشتراک</td>
                        <td>+ARR اشتراک فاز ۲</td>
                        <td>ورود نسخه Cloud</td>
                    </tr>
                </tbody>
            </table>

            {/* Distribution channels */}
            <h2 className="animate-in delay-3">کانال‌های توزیع</h2>
            <div className="card card-accent animate-in delay-3">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                    <div>
                        <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>کانال‌های موجود (فراالکتریک)</h3>
                        <ul className="feature-list">
                            <li>فروشگاه‌های لوازم الکتریکی — شبکه موجود</li>
                            <li>نصابان سیستم گرمایش (HVAC installers)</li>
                            <li>پیمانکاران ساختمانی و سازندگان</li>
                            <li>وبسایت faraelectric.com</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>کانال‌های آنلاین (فاز ۲)</h3>
                        <ul className="feature-list">
                            <li>دیجی‌کالا و ترب</li>
                            <li>کافه‌بازار / مایکت (اپ)</li>
                            <li>شبکه‌های اجتماعی</li>
                            <li>پروژه‌های ساختمانی انبوه‌ساز</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Competitive landscape */}
            <h2 className="animate-in delay-4">چشم‌انداز رقابتی</h2>
            <table className="data-table animate-in delay-4">
                <thead>
                    <tr><th>محصول</th><th>قیمت</th><th>فارسی</th><th>سازگاری ایران</th><th>نیاز به اینترنت</th><th>ضعف اصلی</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 600, color: 'var(--accent-teal)' }}>فراترم (ما)</td>
                        <td>۱–۱.۵M تومان</td>
                        <td>✓ کامل</td>
                        <td>✓ طراحی‌شده</td>
                        <td>✗ نیاز ندارد</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>Nest (Google)</td>
                        <td>€200+</td>
                        <td>✗</td>
                        <td>✗</td>
                        <td>✓ اجباری</td>
                        <td>گران، ناسازگار، نیاز اینترنت</td>
                    </tr>
                    <tr>
                        <td>Tado</td>
                        <td>€130+</td>
                        <td>✗</td>
                        <td>✗</td>
                        <td>✓ اجباری</td>
                        <td>اشتراک ماهیانه، ناسازگار</td>
                    </tr>
                    <tr>
                        <td>Honeywell T6</td>
                        <td>€60–80</td>
                        <td>✗</td>
                        <td>⚠️ محدود</td>
                        <td>✓ Cloud</td>
                        <td>پشتیبانی نداشتن در ایران</td>
                    </tr>
                    <tr>
                        <td>ترموستات‌های آنالوگ ایرانی</td>
                        <td>۱۰۰–۳۰۰K تومان</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✗</td>
                        <td>بدون قابلیت هوشمند</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
