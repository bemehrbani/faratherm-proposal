export default function Hardware() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">⬢ مستندات فنی</div>
                <h1 className="page-title">مشخصات سخت‌افزار</h1>
                <p className="page-subtitle">جزئیات فنی اجزای سخت‌افزاری سیستم اسمارت ترموستات</p>
            </div>

            <h2 className="animate-in delay-1">برد ترموستات — ESP32</h2>
            <table className="data-table animate-in delay-1">
                <thead>
                    <tr><th>مشخصه</th><th>مقدار</th></tr>
                </thead>
                <tbody>
                    <tr><td>چیپ</td><td>ESP32-WROOM-32</td></tr>
                    <tr><td>پردازنده</td><td>Xtensa LX6 Dual-Core @ 240MHz</td></tr>
                    <tr><td>حافظه</td><td>520KB SRAM + 4MB Flash</td></tr>
                    <tr><td>WiFi</td><td>802.11 b/g/n — 2.4GHz — AP + Station</td></tr>
                    <tr><td>Bluetooth</td><td>BLE 4.2 (در صورت نیاز آینده)</td></tr>
                    <tr><td>GPIO</td><td>34 پین — مناسب برای سنسور و رله</td></tr>
                    <tr><td>ولتاژ کاری</td><td>3.3V</td></tr>
                    <tr><td>حالت‌های کاری</td><td>AP Mode (ستاپ) / Station Mode (عادی)</td></tr>
                    <tr><td>فریمور</td><td>توسعه اختصاصی — Arduino/ESP-IDF</td></tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-2">سنسور دما — DS18B20</h2>
            <div className="card-grid animate-in delay-2">
                <div className="card">
                    <h3 style={{ marginTop: 0 }}>دقت بالا</h3>
                    <div className="spec-value" style={{ fontSize: '1.3rem' }}>±0.5°C</div>
                    <p>دقت پیش‌فرض (قابل ارتقاء به ±0.0625°C)</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0 }}>بازه اندازه‌گیری</h3>
                    <div className="spec-value" style={{ fontSize: '1.3rem' }}>-55 ~ +125°C</div>
                    <p>مناسب برای تمام شرایط خانگی</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0 }}>پروتکل</h3>
                    <div className="spec-value" style={{ fontSize: '1.3rem' }}>OneWire</div>
                    <p>اتصال با تنها یک سیم دیتا</p>
                </div>
            </div>

            <table className="data-table animate-in delay-2">
                <thead>
                    <tr><th>مشخصه</th><th>مقدار</th></tr>
                </thead>
                <tbody>
                    <tr><td>مدل</td><td>DS18B20 (Dallas/Maxim)</td></tr>
                    <tr><td>رزولوشن</td><td>9 تا 12 بیت (قابل تنظیم)</td></tr>
                    <tr><td>زمان تبدیل</td><td>~750ms در 12 بیت</td></tr>
                    <tr><td>ولتاژ</td><td>3.0V ~ 5.5V</td></tr>
                    <tr><td>فرم‌فکتور</td><td>TO-92 / ضدآب (فلزی)</td></tr>
                    <tr><td>سابقه استفاده</td><td>✓ تأیید شده توسط فراالکتریک</td></tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-3">برد رله</h2>
            <table className="data-table animate-in delay-3">
                <thead>
                    <tr><th>مشخصه</th><th>مقدار</th></tr>
                </thead>
                <tbody>
                    <tr><td>کنترلر</td><td>ESP32 (مشابه برد ترموستات)</td></tr>
                    <tr><td>نوع رله</td><td>رله الکترومکانیکال — NO/NC</td></tr>
                    <tr><td>ولتاژ سوئیچینگ</td><td>220V AC (مشابه SES — 10A)</td></tr>
                    <tr><td>عملکرد</td><td>خاموش/روشن پکیج خانگی</td></tr>
                    <tr><td>ارتباط</td><td>WiFi — به ترموستات یا شبکه خانه</td></tr>
                    <tr><td>حفاظت</td><td>Opto-isolator بین لاجیک و رله</td></tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-4">نمای کلی اتصالات</h2>
            <div className="diagram-container animate-in delay-4">
                <div className="arch-flow" style={{ flexWrap: 'wrap', gap: 'var(--space-xl)' }}>
                    <div className="arch-node">
                        <div className="arch-node-icon">🔌</div>
                        <div className="arch-node-label">برق ۲۲۰V</div>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node">
                        <div className="arch-node-icon">⚡</div>
                        <div className="arch-node-label">برد رله ESP32</div>
                        <div className="arch-node-sub">سوئیچ پکیج</div>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node">
                        <div className="arch-node-icon">🔥</div>
                        <div className="arch-node-label">پکیج (بوتان و...)</div>
                        <div className="arch-node-sub">مشعل/پمپ</div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', margin: 'var(--space-lg) 0', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    ── OneWire ──────── WiFi ──
                </div>
                <div className="arch-flow">
                    <div className="arch-node">
                        <div className="arch-node-icon">🌡️</div>
                        <div className="arch-node-label">DS18B20</div>
                        <div className="arch-node-sub">سنسور دمای محیط</div>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node" style={{ borderColor: 'var(--accent-warm)', borderWidth: 2 }}>
                        <div className="arch-node-icon">📟</div>
                        <div className="arch-node-label">برد ترموستات ESP32</div>
                        <div className="arch-node-sub">هسته مرکزی</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
