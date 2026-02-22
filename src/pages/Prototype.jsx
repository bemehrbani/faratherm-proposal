import { useState } from 'react'

const screens = {
    devices: 'لیست دستگاه‌ها',
    dashboard: 'داشبورد',
    schedule: 'زمان‌بندی',
    history: 'تاریخچه',
    settings: 'تنظیمات',
    setup: 'ستاپ اولیه',
}

function DevicesScreen({ onSelect }) {
    const devices = [
        { name: '🏠 خانه', temp: '22.5°C', status: 'on', preset: 'عادی' },
        { name: '🏢 دفتر', temp: '20.0°C', status: 'off', preset: 'بیرون' },
        { name: '👩 منزل مادر', temp: '23.0°C', status: 'on', preset: 'عادی' },
    ]
    return (
        <>
            <div className="screen-header">
                <h3>دستگاه‌های من</h3>
                <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>+</span>
            </div>
            <div className="screen-body">
                {devices.map((d, i) => (
                    <div key={i} onClick={() => onSelect('dashboard')} style={{
                        background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-md)', marginBottom: 'var(--space-sm)',
                        cursor: 'pointer', border: '1px solid var(--border-subtle)',
                        transition: 'border-color 0.2s'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{d.name}</span>
                            <span className={`status-pill ${d.status}`}>{d.status === 'on' ? '● روشن' : '○ خاموش'}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-sm)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            <span>دما: {d.temp}</span>
                            <span>حالت: {d.preset}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

function DashboardScreen() {
    const [target, setTarget] = useState(23)
    const [activePreset, setActivePreset] = useState('عادی')
    return (
        <>
            <div className="screen-header">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>🏠 خانه</span>
                <span className="status-pill on">● پکیج روشن</span>
            </div>
            <div className="screen-body">
                <div className="temp-display">
                    <div className="temp-label">دمای فعلی</div>
                    <div className="temp-current">22.5<span className="temp-unit">°C</span></div>
                    <div style={{ marginTop: 'var(--space-xl)' }}>
                        <div className="temp-label" style={{ marginBottom: 'var(--space-sm)' }}>دمای دلخواه</div>
                        <div className="temp-target">
                            <button className="temp-btn" onClick={() => setTarget(t => Math.max(10, t - 0.5))}>−</button>
                            <div className="temp-target-value">{target}°C</div>
                            <button className="temp-btn" onClick={() => setTarget(t => Math.min(35, t + 0.5))}>+</button>
                        </div>
                    </div>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 'var(--space-sm)' }}>
                    کف دما: ۱۵°C
                </div>
                <div className="preset-row">
                    {['عادی', 'خواب 🌙', 'بیرون 🏃', 'مهمانی 🎉'].map(p => (
                        <span key={p} className={`preset-chip ${activePreset === p.split(' ')[0] ? 'active' : ''}`}
                            onClick={() => setActivePreset(p.split(' ')[0])} style={{ cursor: 'pointer' }}>
                            {p}
                        </span>
                    ))}
                </div>
                <div style={{ marginTop: 'var(--space-xl)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-sm) var(--space-md)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    💾 ذخیره تنظیم فعلی | 📂 بارگذاری تنظیم ذخیره‌شده
                </div>
            </div>
        </>
    )
}

function ScheduleScreen() {
    const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه']
    const schedule = [
        { time: '۰۶:۰۰ - ۰۸:۰۰', temp: '24°C' },
        { time: '۰۸:۰۰ - ۱۷:۰۰', temp: '20°C' },
        { time: '۱۷:۰۰ - ۲۲:۰۰', temp: '23°C' },
        { time: '۲۲:۰۰ - ۰۶:۰۰', temp: '20°C' },
    ]
    return (
        <>
            <div className="screen-header">
                <h3>زمان‌بندی</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-warm)', cursor: 'pointer' }}>+ افزودن</span>
            </div>
            <div className="screen-body">
                <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)', overflowX: 'auto' }}>
                    {days.map((d, i) => (
                        <span key={d} style={{
                            flex: '0 0 auto', padding: '4px 8px', borderRadius: '6px', fontSize: '0.65rem',
                            background: i === 0 ? 'var(--accent-warm-dim)' : 'var(--bg-surface)',
                            color: i === 0 ? 'var(--accent-warm)' : 'var(--text-muted)',
                            border: `1px solid ${i === 0 ? 'var(--accent-warm)' : 'var(--border-subtle)'}`,
                            cursor: 'pointer'
                        }}>{d}</span>
                    ))}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
                    📅 تقویم شمسی — شنبه
                </div>
                {schedule.map((s, i) => (
                    <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: 'var(--space-sm) var(--space-md)',
                        background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)',
                        marginBottom: '4px', fontSize: '0.78rem'
                    }}>
                        <span style={{ color: 'var(--text-muted)', direction: 'ltr' }}>{s.time}</span>
                        <span style={{ color: 'var(--accent-warm)', fontWeight: 600 }}>{s.temp}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

function HistoryScreen() {
    const changes = [
        { date: '۱۴۰۴/۱۲/۰۲', time: '۰۸:۰۰', user: 'هادی', action: 'دما → ۲۴°C' },
        { date: '۱۴۰۴/۱۲/۰۲', time: '۱۰:۰۰', user: 'مهدی', action: 'حالت خواب' },
        { date: '۱۴۰۴/۱۲/۰۲', time: '۱۴:۳۰', user: 'سارا', action: 'دما → ۲۲°C' },
        { date: '۱۴۰۴/۱۲/۰۱', time: '۲۲:۰۰', user: 'هادی', action: 'حالت بیرون' },
        { date: '۱۴۰۴/۱۲/۰۱', time: '۱۸:۰۰', user: 'مهدی', action: 'دما → ۲۵°C' },
    ]
    return (
        <>
            <div className="screen-header">
                <h3>تاریخچه</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>🏠 خانه</span>
            </div>
            <div className="screen-body">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
                    📊 آخرین ۱۰ تغییر
                </div>
                {changes.map((c, i) => (
                    <div key={i} style={{
                        display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start',
                        padding: 'var(--space-sm) 0',
                        borderBottom: '1px solid var(--border-subtle)', fontSize: '0.78rem'
                    }}>
                        <div style={{ flex: '0 0 auto', width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-warm)', marginTop: 6 }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: 600 }}>{c.user}</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem', direction: 'ltr' }}>
                                    {c.date} — {c.time}
                                </span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: 2 }}>
                                {c.action}
                            </div>
                        </div>
                    </div>
                ))}

                <div style={{ marginTop: 'var(--space-xl)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', padding: 'var(--space-md)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 'var(--space-sm)' }}>📈 نمودار دما — ۲۴ ساعت اخیر</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 60 }}>
                        {[18, 19, 20, 22, 23, 24, 24, 23, 22, 21, 20, 19, 20, 21, 22, 23, 24, 24, 23, 22, 21, 20, 19, 18].map((v, i) => (
                            <div key={i} style={{
                                flex: 1, background: `linear-gradient(to top, var(--accent-warm-dim), ${v > 22 ? 'var(--accent-warm)' : 'var(--accent-teal)'})`,
                                height: `${((v - 15) / 12) * 100}%`, borderRadius: '2px 2px 0 0', minWidth: 4, opacity: 0.7
                            }} />
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.55rem', color: 'var(--text-muted)', marginTop: 4, direction: 'ltr' }}>
                        <span>00:00</span><span>12:00</span><span>24:00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

function SettingsScreen() {
    return (
        <>
            <div className="screen-header"><h3>تنظیمات</h3></div>
            <div className="screen-body">
                {[
                    { icon: '🏠', label: 'نام دستگاه', value: 'خانه' },
                    { icon: '👤', label: 'نام کاربر', value: 'هادی' },
                    { icon: '🌡️', label: 'کف دمای حداقل', value: '15°C' },
                    { icon: '🔔', label: 'هشدار دمایی', value: 'فعال ✓' },
                    { icon: '📡', label: 'اتصال بک‌گراند', value: 'فعال ✓' },
                    { icon: '📶', label: 'وضعیت WiFi', value: 'متصل' },
                    { icon: '📋', label: 'نسخه فریمور', value: 'v1.0.0' },
                    { icon: '🔄', label: 'تغییر شبکه WiFi', value: '→' },
                ].map((item, i) => (
                    <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: 'var(--space-sm) 0', borderBottom: '1px solid var(--border-subtle)',
                        fontSize: '0.82rem'
                    }}>
                        <span>{item.icon} {item.label}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.value}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

function SetupScreen() {
    const [step, setStep] = useState(0)
    const steps = [
        { icon: '📡', title: 'جستجوی دستگاه', desc: 'در حال اسکن شبکه...', detail: 'ترموستات فراترم پیدا شد!' },
        { icon: '📶', title: 'اتصال به دستگاه', desc: 'اتصال به هات‌اسپات دستگاه', detail: 'IP: 192.168.4.1' },
        { icon: '🔑', title: 'تنظیم WiFi', desc: 'رمز وای‌فای خانه را وارد کنید', detail: 'شبکه: MyHomeWiFi' },
        { icon: '✅', title: 'ستاپ کامل شد!', desc: 'دستگاه با موفقیت تنظیم شد', detail: 'آماده استفاده' },
    ]
    return (
        <>
            <div className="screen-header"><h3>ستاپ دستگاه جدید</h3></div>
            <div className="screen-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginTop: 'var(--space-xl)' }}>{steps[step].icon}</div>
                <h3 style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>{steps[step].title}</h3>
                <p style={{ fontSize: '0.82rem' }}>{steps[step].desc}</p>
                <div style={{
                    background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-sm) var(--space-md)', fontSize: '0.72rem',
                    color: 'var(--accent-teal)', margin: 'var(--space-md) 0'
                }}>{steps[step].detail}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', margin: 'var(--space-xl) 0' }}>
                    {steps.map((_, i) => (
                        <div key={i} style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: i <= step ? 'var(--accent-warm)' : 'var(--bg-surface)'
                        }} />
                    ))}
                </div>
                <button onClick={() => setStep(s => Math.min(3, s + 1))} style={{
                    background: step < 3 ? 'var(--accent-warm)' : 'var(--accent-teal)',
                    color: '#0C0E13', border: 'none', borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-sm) var(--space-xl)', fontFamily: 'var(--font-body)',
                    fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer'
                }}>{step < 3 ? 'مرحله بعد' : 'شروع استفاده'}</button>
            </div>
        </>
    )
}

export default function Prototype() {
    const [activeScreen, setActiveScreen] = useState('dashboard')

    const renderScreen = () => {
        switch (activeScreen) {
            case 'devices': return <DevicesScreen onSelect={setActiveScreen} />
            case 'dashboard': return <DashboardScreen />
            case 'schedule': return <ScheduleScreen />
            case 'history': return <HistoryScreen />
            case 'settings': return <SettingsScreen />
            case 'setup': return <SetupScreen />
            default: return <DashboardScreen />
        }
    }

    const navItems = [
        { id: 'devices', icon: '📱', label: 'دستگاه‌ها' },
        { id: 'dashboard', icon: '🌡️', label: 'داشبورد' },
        { id: 'schedule', icon: '📅', label: 'زمان‌بندی' },
        { id: 'history', icon: '📊', label: 'تاریخچه' },
        { id: 'settings', icon: '⚙️', label: 'تنظیمات' },
    ]

    return (
        <div>
            <div className="page-header animate-in">
                <div className="page-badge">▣ پروتوتایپ</div>
                <h1 className="page-title">نمونه رابط کاربری</h1>
                <p className="page-subtitle">
                    نمایش تعاملی صفحات اصلی اپلیکیشن اسمارت ترموستات — روی دکمه‌ها کلیک کنید
                </p>
            </div>

            <div className="screen-selector animate-in delay-1">
                {Object.entries(screens).map(([key, label]) => (
                    <button key={key} className={`screen-btn ${activeScreen === key ? 'active' : ''}`}
                        onClick={() => setActiveScreen(key)}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="phone-showcase animate-in delay-2">
                <div className="phone-frame">
                    <div className="phone-notch" />
                    <div className="phone-status-bar">
                        <span>12:30</span>
                        <span>📶 🔋 85%</span>
                    </div>
                    <div className="phone-screen" style={{ paddingBottom: 50 }}>
                        {renderScreen()}
                    </div>
                    <div className="phone-nav-bar">
                        {navItems.map(item => (
                            <div key={item.id} className={`phone-nav-item ${activeScreen === item.id ? 'active' : ''}`}
                                onClick={() => setActiveScreen(item.id)}>
                                <span className="phone-nav-icon">{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card animate-in delay-3" style={{ marginTop: 'var(--space-xl)' }}>
                <h3 style={{ marginTop: 0, color: 'var(--accent-warm)' }}>📝 نکات طراحی</h3>
                <ul className="feature-list">
                    <li>طراحی کاملاً فارسی و راست‌به‌چپ (RTL)</li>
                    <li>تم تیره (Dark Mode) — مناسب استفاده شبانه</li>
                    <li>دکمه‌های بزرگ و واضح — مناسب تمام سنین</li>
                    <li>نمایش دمای فعلی به صورت برجسته و تمام‌صفحه</li>
                    <li>دسترسی سریع به پریست‌ها بدون نیاز به منو</li>
                    <li>تقویم شمسی و ایمیل/SMS فارسی</li>
                </ul>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 'var(--space-md)', marginBottom: 0 }}>
                    ⚠️ این پروتوتایپ جهت نمایش مفهوم است. طراحی نهایی UI/UX پس از تأیید پروپوزال انجام خواهد شد.
                </p>
            </div>
        </div>
    )
}
