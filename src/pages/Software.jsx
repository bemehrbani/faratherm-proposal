export default function Software() {
    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">⟐ مستندات فنی</div>
                <h1 className="page-title">معماری نرم‌افزار</h1>
                <p className="page-subtitle">ساختار فنی اپلیکیشن اندروید و الگوهای طراحی مورد استفاده</p>
            </div>

            <h2 className="animate-in delay-1">استک تکنولوژی</h2>
            <table className="data-table animate-in delay-1">
                <thead><tr><th>لایه</th><th>تکنولوژی</th><th>توضیح</th></tr></thead>
                <tbody>
                    <tr><td>زبان</td><td>Kotlin</td><td>نیتیو اندروید — عملکرد و پایداری بالا</td></tr>
                    <tr><td>UI Framework</td><td>Jetpack Compose</td><td>رابط کاربری مدرن و declarative</td></tr>
                    <tr><td>الگوی معماری</td><td>MVVM</td><td>Model-View-ViewModel + Repository</td></tr>
                    <tr><td>دیتابیس محلی</td><td>Room DB</td><td>ذخیره تنظیمات، پریست‌ها و لاگ</td></tr>
                    <tr><td>شبکه</td><td>OkHttp / Retrofit</td><td>ارتباط HTTP با دستگاه‌ها</td></tr>
                    <tr><td>DI</td><td>Hilt</td><td>تزریق وابستگی</td></tr>
                    <tr><td>Async</td><td>Kotlin Coroutines + Flow</td><td>عملیات غیرهمزمان و reactive</td></tr>
                    <tr><td>نوتیفیکیشن</td><td>Android Notification API</td><td>هشدار دما و تغییرات وضعیت</td></tr>
                    <tr><td>حداقل نسخه</td><td>Android 8.0 (API 26)</td><td>پوشش +۹۵٪ دستگاه‌های فعال</td></tr>
                </tbody>
            </table>

            <h2 className="animate-in delay-2">دیاگرام ماژول‌ها</h2>
            <div className="diagram-container animate-in delay-2">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-lg)', direction: 'ltr' }}>
                    <div className="arch-node" style={{ borderColor: 'var(--accent-teal)', borderWidth: 2, minWidth: 200 }}>
                        <div className="arch-node-label">UI Layer</div>
                        <div className="arch-node-sub">Jetpack Compose Screens</div>
                    </div>
                    <div className="arch-arrow" style={{ transform: 'rotate(90deg)' }}>→</div>
                    <div className="arch-node" style={{ borderColor: 'var(--accent-warm)', borderWidth: 2, minWidth: 200 }}>
                        <div className="arch-node-label">ViewModel Layer</div>
                        <div className="arch-node-sub">State Management + Logic</div>
                    </div>
                    <div className="arch-arrow" style={{ transform: 'rotate(90deg)' }}>→</div>
                    <div className="arch-node" style={{ minWidth: 200 }}>
                        <div className="arch-node-label">Repository Layer</div>
                        <div className="arch-node-sub">Data Orchestration</div>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>
                        <div>
                            <div className="arch-arrow" style={{ transform: 'rotate(90deg)', textAlign: 'center' }}>→</div>
                            <div className="arch-node">
                                <div className="arch-node-label">Network</div>
                                <div className="arch-node-sub">OkHttp → ESP32</div>
                            </div>
                        </div>
                        <div>
                            <div className="arch-arrow" style={{ transform: 'rotate(90deg)', textAlign: 'center' }}>→</div>
                            <div className="arch-node">
                                <div className="arch-node-label">Local DB</div>
                                <div className="arch-node-sub">Room + DataStore</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="animate-in delay-3">ماژول‌های اصلی اپلیکیشن</h2>
            <div className="card-grid animate-in delay-3">
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>🔍 Device Discovery</h3>
                    <p>اسکن WiFi، شناسایی هات‌اسپات ESP32، اتصال و ارسال اطلاعات شبکه خانه</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>🌡️ Temperature Monitor</h3>
                    <p>خواندن لحظه‌ای دما از ترموستات، نمایش و ذخیره تاریخچه</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>🎯 Set-Point Control</h3>
                    <p>تنظیم دمای دلخواه، ارسال به ترموستات، کنترل رله</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>📅 Scheduler</h3>
                    <p>تقویم شمسی، برنامه‌ریزی ۷ روزه، بازه‌های زمانی متعدد</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>💾 Presets Manager</h3>
                    <p>ذخیره/بارگذاری تنظیمات پیش‌فرض (خواب، بیرون، مهمانی، سفارشی)</p>
                </div>
                <div className="card">
                    <h3 style={{ marginTop: 0, color: 'var(--accent-teal)' }}>📊 Change Log</h3>
                    <p>ثبت ۱۰ تغییر آخر با نام کاربر و تاریخ شمسی</p>
                </div>
            </div>

            <h2 className="animate-in delay-4">توزیع اپلیکیشن</h2>
            <div className="card card-accent animate-in delay-4">
                <p>
                    با توجه به اینکه در فاز ۱ انتشار در Google Play مد نظر نیست، اپلیکیشن از طریق
                    <strong> مارکت‌های ایرانی</strong> (بازار، مایکت، کافه‌بازار) یا <strong>دانلود مستقیم APK</strong> از
                    وبسایت فراالکتریک توزیع خواهد شد.
                </p>
                <p style={{ marginBottom: 0 }}>
                    ساختار بسته‌بندی APK شامل امضای دیجیتال و بهینه‌سازی ProGuard خواهد بود.
                </p>
            </div>
        </div>
    )
}
