export default function Partnership() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">◈ پیشنهاد مشارکت</div>
                <h1 className="page-title">مشارکت استراتژیک</h1>
                <p className="page-subtitle">
                    فراتر از یک قرارداد توسعه نرم‌افزار — یک مشارکت برابر برای ساختن یک خط محصول بلندمدت.
                </p>
            </div>

            {/* Two-tier vision */}
            <h2 className="animate-in delay-1">چشم‌انداز دو تیری</h2>
            <div className="card-grid animate-in delay-1">
                <div className="card" style={{ borderRight: '3px solid var(--accent-teal)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                        <h3 style={{ margin: 0, color: 'var(--accent-teal)' }}>فاز ۱ — راه‌حل لوکال</h3>
                        <span style={{ fontSize: '0.72rem', background: 'var(--accent-teal-dim)', color: 'var(--accent-teal)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>فوکوس فعلی</span>
                    </div>
                    <p>دستگاه ESP32 + اپ اندروید — ارتباط روی WiFi خانگی. بدون اینترنت، بدون سرور، بدون اشتراک.</p>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                        <div>📦 درآمد: فروش یک‌باره سخت‌افزار</div>
                        <div>🎯 قیمت: ۱–۱.۵ میلیون تومان</div>
                        <div>⏱️ زمان توسعه: ۸ هفته</div>
                    </div>
                </div>
                <div className="card" style={{ borderRight: '3px solid var(--accent-warm)', opacity: 0.75 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                        <h3 style={{ margin: 0, color: 'var(--accent-warm)' }}>فاز ۲ — راه‌حل ابری</h3>
                        <span style={{ fontSize: '0.72rem', background: 'var(--bg-surface)', color: 'var(--text-muted)', padding: '2px 8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>پس از اعتبارسنجی</span>
                    </div>
                    <p>سرور ابری + کنترل از راه دور + گزارش مصرف + خانه هوشمند. درآمد SaaS ماهیانه.</p>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                        <div>📦 درآمد: سخت‌افزار + اشتراک ماهیانه</div>
                        <div>🎯 قیمت: ۲–۳M تومان + ۵۰–۱۰۰K/ماه</div>
                        <div>⏱️ بعد از اعتبارسنجی فاز ۱</div>
                    </div>
                </div>
            </div>

            {/* Roles */}
            <h2 className="animate-in delay-2">تقسیم نقش‌ها</h2>
            <table className="data-table animate-in delay-2">
                <thead>
                    <tr><th>حوزه</th><th style={{ color: 'var(--accent-warm)' }}>فراالکتریک — هادی واعظی</th><th style={{ color: 'var(--accent-teal)' }}>پمگروپ — مهدی فریمانی</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ fontWeight: 600 }}>سخت‌افزار</td>
                        <td>طراحی PCB، تولید، زنجیره تأمین</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>فریمور (ESP32)</td>
                        <td>توسعه C++ فریمور دستگاه</td>
                        <td>تعریف API و پروتکل ارتباطی</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>اپلیکیشن موبایل</td>
                        <td>—</td>
                        <td>توسعه Kotlin Android native</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>بک‌اند ابری (فاز ۲)</td>
                        <td>—</td>
                        <td>Laravel API + MQTT broker</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>توزیع و فروش — ایران</td>
                        <td>شبکه فروشگاه‌های الکتریکی + HVAC</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>توزیع — فنلاند/اروپا</td>
                        <td>—</td>
                        <td>شبکه اروپایی پمگروپ (فاز ۳)</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>استراتژی محصول</td>
                        <td>نیازسنجی بازار ایران</td>
                        <td>نقشه راه نرم‌افزاری</td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 600 }}>مالی و حقوقی</td>
                        <td>ثبت شرکت، مجوزها در ایران</td>
                        <td>ساختار فنلاند (در صورت توسعه)</td>
                    </tr>
                </tbody>
            </table>

            {/* Equity */}
            <h2 className="animate-in delay-3">ساختار مشارکت و سهام</h2>
            <div className="card card-accent animate-in delay-3">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-warm)', lineHeight: 1 }}>۵۰٪</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, marginTop: 'var(--space-sm)' }}>هادی واعظی</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>فراالکتریک</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                            سخت‌افزار · فریمور · توزیع ایران
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-teal)', lineHeight: 1 }}>۵۰٪</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, marginTop: 'var(--space-sm)' }}>مهدی فریمانی</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>پمگروپ</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 'var(--space-sm)' }}>
                            نرم‌افزار · اپلیکیشن · محصول
                        </div>
                    </div>
                </div>
                <div style={{
                    marginTop: 'var(--space-xl)', padding: 'var(--space-md)',
                    background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center'
                }}>
                    * سهام با vesting 3 ساله و cliff 6 ماهه / در صورت جذب سرمایه‌گذار، option pool از هر دو طرف به صورت مساوی کسر می‌شود
                </div>
            </div>

            {/* What each side brings */}
            <h2 className="animate-in delay-3">آورده هر طرف</h2>
            <div className="card-grid animate-in delay-3">
                <div className="card" style={{ borderRight: '3px solid var(--accent-warm)' }}>
                    <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>فراالکتریک</h3>
                    <ul className="feature-list">
                        <li>۲۰+ سال تجربه صنعت تأسیسات</li>
                        <li>محصول SES اثبات‌شده در بازار B2B</li>
                        <li>دانش فنی سخت‌افزار و ESP32</li>
                        <li>شبکه توزیع فروشگاه‌های الکتریکی</li>
                        <li>شبکه نصابان HVAC در سراسر ایران</li>
                        <li>اعتماد و شهرت ۲۰ ساله در بازار</li>
                        <li>امکانات تولید و تست سخت‌افزار</li>
                    </ul>
                </div>
                <div className="card" style={{ borderRight: '3px solid var(--accent-teal)' }}>
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>پمگروپ</h3>
                    <ul className="feature-list">
                        <li>تجربه ساخت چند محصول SaaS موفق</li>
                        <li>تیم توسعه نرم‌افزار متخصص</li>
                        <li>استک کامل: Android · Laravel · Cloud</li>
                        <li>تجربه طراحی UI/UX فارسی</li>
                        <li>معماری Cloud برای فاز ۲</li>
                        <li>شبکه اروپایی برای توسعه بین‌المللی</li>
                        <li>سرعت بالا در توسعه و تحویل</li>
                    </ul>
                </div>
            </div>

            {/* Two options */}
            <h2 className="animate-in delay-4">دو مسیر پیش‌رو</h2>
            <div className="card-grid animate-in delay-4">
                <div className="card card-accent">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>مسیر A — قرارداد توسعه</h3>
                    <p>
                        پمگروپ اپلیکیشن اندروید را در قالب یک قرارداد پروژه‌ای (Project-based) توسعه می‌دهد.
                        فراالکتریک مالک کامل محصول نهایی است.
                    </p>
                    <table className="data-table" style={{ marginTop: 'var(--space-md)', marginBottom: 0 }}>
                        <tbody>
                            <tr><td style={{ fontWeight: 600 }}>مدل پرداخت</td><td>پرداخت مرحله‌ای (milestone-based)</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>مالکیت</td><td>۱۰۰٪ فراالکتریک</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>تحویل</td><td>APK + Source + مستندات</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>پشتیبانی</td><td>۳ ماه پس از تحویل</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="card card-accent" style={{ borderRight: '3px solid var(--accent-warm)' }}>
                    <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>مسیر B — مشارکت استراتژیک (پیشنهاد ما)</h3>
                    <p>
                        تشکیل یک شرکت مشترک یا توافق‌نامه مشارکت. پمگروپ سهم سرمایه خود را در قالب
                        کار فنی (sweat equity) وارد می‌کند.
                    </p>
                    <table className="data-table" style={{ marginTop: 'var(--space-md)', marginBottom: 0 }}>
                        <tbody>
                            <tr><td style={{ fontWeight: 600 }}>مدل</td><td>Sweat Equity — ۵۰/۵۰</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>سرمایه اولیه</td><td>فراالکتریک (سخت‌افزار + تولید)</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>آورده پمگروپ</td><td>توسعه کامل نرم‌افزار + فاز ۲</td></tr>
                            <tr><td style={{ fontWeight: 600 }}>مزیت</td><td>پمگروپ انگیزه بلندمدت دارد</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Next steps */}
            <h2 className="animate-in delay-4">گام‌های بعدی</h2>
            <div className="card animate-in delay-4">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {[
                        { num: '۱', text: 'بررسی و تأیید پروپوزال فنی', color: 'var(--accent-warm)' },
                        { num: '۲', text: 'تصمیم‌گیری درباره مسیر A یا B (قرارداد یا مشارکت)', color: 'var(--accent-warm)' },
                        { num: '۳', text: 'تحویل مستند API سخت‌افزار (ESP32) توسط فراالکتریک', color: 'var(--accent-teal)' },
                        { num: '۴', text: 'امضای توافق‌نامه و شروع فاز ۰ (طراحی UI/UX)', color: 'var(--accent-teal)' },
                        { num: '۵', text: 'شروع توسعه — هفته اول', color: 'var(--accent-blue)' },
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

            <div className="card card-accent" style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
                <p style={{ fontSize: '1rem', marginBottom: 'var(--space-md)' }}>
                    برای بحث بیشتر و نهایی کردن شرایط، تماس بگیرید:
                </p>
                <a href="mailto:mahdi@pomegroup.studio" style={{ color: 'var(--accent-teal)', fontSize: '1rem', fontWeight: 700 }}>
                    mahdi@pomegroup.studio
                </a>
            </div>
        </div>
    )
}
