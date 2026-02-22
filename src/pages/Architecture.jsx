export default function Architecture() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">⬡ مستندات فنی</div>
                <h1 className="page-title">معماری سیستم</h1>
                <p className="page-subtitle">
                    نمای کلی اجزای سیستم اسمارت ترموستات و نحوه ارتباط آن‌ها با یکدیگر
                </p>
            </div>

            <h2 className="animate-in delay-1">دیاگرام معماری</h2>
            <div className="diagram-container animate-in delay-1">
                <div className="arch-flow">
                    <div className="arch-node">
                        <div className="arch-node-icon">🌡️</div>
                        <div className="arch-node-label">DS18B20</div>
                        <div className="arch-node-sub">سنسور دما</div>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node" style={{ borderColor: 'var(--accent-warm)', borderWidth: 2 }}>
                        <div className="arch-node-icon">📟</div>
                        <div className="arch-node-label">ESP32</div>
                        <div className="arch-node-sub">برد ترموستات</div>
                    </div>
                    <div className="arch-arrow">⟷</div>
                    <div className="arch-node" style={{ borderColor: 'var(--accent-warm)', borderWidth: 2 }}>
                        <div className="arch-node-icon">⚡</div>
                        <div className="arch-node-label">ESP32</div>
                        <div className="arch-node-sub">برد رله</div>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node">
                        <div className="arch-node-icon">🔥</div>
                        <div className="arch-node-label">پکیج</div>
                        <div className="arch-node-sub">خاموش/روشن</div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', margin: 'var(--space-xl) 0 var(--space-md)', color: 'var(--accent-teal)', fontSize: '1.5rem' }}>
                    ↕ WiFi
                </div>
                <div className="arch-flow">
                    <div className="arch-node" style={{ borderColor: 'var(--accent-teal)', borderWidth: 2 }}>
                        <div className="arch-node-icon">📱</div>
                        <div className="arch-node-label">اپلیکیشن اندروید</div>
                        <div className="arch-node-sub">Kotlin Native</div>
                    </div>
                </div>
            </div>

            <h2 className="animate-in delay-2">دو سناریو اتصال</h2>

            <div className="card card-accent animate-in delay-2">
                <h3 style={{ color: 'var(--accent-teal)', marginTop: 0 }}>سناریو ۱ — وای‌فای خانه موجود است</h3>
                <div style={{ fontSize: '0.88rem', direction: 'rtl', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', lineHeight: 2 }}>
                    <span style={{ color: 'var(--accent-warm)' }}>1.</span> ترموستات در حالت SETUP روشن می‌شود (هات‌اسپات)<br />
                    <span style={{ color: 'var(--accent-warm)' }}>2.</span> اپ دستگاه را روی IP قراردادی پیدا می‌کند (192.168.4.1)<br />
                    <span style={{ color: 'var(--accent-warm)' }}>3.</span> اطلاعات WiFi خانه به دستگاه ارسال می‌شود<br />
                    <span style={{ color: 'var(--accent-warm)' }}>4.</span> همین فرایند برای برد رله تکرار می‌شود<br />
                    <span style={{ color: 'var(--accent-warm)' }}>5.</span> هر دو دستگاه + اپ روی شبکه خانه قرار می‌گیرند ✓
                </div>
            </div>

            <div className="card card-accent animate-in delay-3">
                <h3 style={{ color: 'var(--accent-warm)', marginTop: 0 }}>سناریو ۲ — وای‌فای خانه موجود نیست</h3>
                <div style={{ fontSize: '0.88rem', direction: 'rtl', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', lineHeight: 2 }}>
                    <span style={{ color: 'var(--accent-warm)' }}>1.</span> ترموستات در حالت SETUP روشن می‌شود (هات‌اسپات)<br />
                    <span style={{ color: 'var(--accent-warm)' }}>2.</span> اپ دستگاه را روی IP قراردادی پیدا می‌کند<br />
                    <span style={{ color: 'var(--accent-warm)' }}>3.</span> ترموستات خودش شبکه WiFi ایجاد می‌کند<br />
                    <span style={{ color: 'var(--accent-warm)' }}>4.</span> برد رله به شبکه ترموستات متصل می‌شود<br />
                    <span style={{ color: 'var(--accent-warm)' }}>5.</span> اپ نیز روی شبکه ترموستات قرار می‌گیرد ✓
                </div>
            </div>

            <h2 className="animate-in delay-4">پروتکل ارتباطی</h2>
            <table className="data-table animate-in delay-4">
                <thead>
                    <tr>
                        <th>لایه</th>
                        <th>پروتکل</th>
                        <th>توضیح</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>فیزیکی</td>
                        <td>WiFi 802.11 b/g/n</td>
                        <td>ESP32 داخلی — 2.4GHz</td>
                    </tr>
                    <tr>
                        <td>شبکه</td>
                        <td>TCP/IP</td>
                        <td>آدرس IP ثابت یا mDNS</td>
                    </tr>
                    <tr>
                        <td>اپلیکیشن</td>
                        <td>HTTP REST</td>
                        <td>JSON payload — ارتباط اپ↔دستگاه</td>
                    </tr>
                    <tr>
                        <td>سنسور←برد</td>
                        <td>OneWire</td>
                        <td>DS18B20 — سیمی، دقت ۰.۰۶°C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
