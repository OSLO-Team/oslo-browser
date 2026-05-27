// OSLO Browser - New Tab Script

document.addEventListener('DOMContentLoaded', () => {
  // --- Localization for New Tab ---
  const newtabTranslations = {
    tr: {
      'search-placeholder': 'İnternette arama yapın veya URL girin...',
      'quick-links': 'Hızlı Bağlantılar',
      'edit-btn-default': 'Düzenle',
      'edit-btn-active': 'Bitti',
      'add-shortcut': 'Kısayol Ekle',
      'modal-title-add': 'Kısayol Ekle',
      'modal-title-edit': 'Kısayolu Düzenle',
      'modal-name': 'Ad',
      'modal-url': 'URL Adresi',
      'modal-cancel': 'İptal',
      'modal-save': 'Kaydet',
      'weather-error': 'Hava durumu alınamadı.',
      'greeting-morning': 'Günaydın',
      'greeting-afternoon': 'Tünaydın',
      'greeting-evening': 'İyi Akşamlar',
      'greeting-night': 'İyi Geceler',
      'greeting-welcome': "OSLO'ya Hoş Geldin",
      'weather-sunny': '☀️ Açık',
      'weather-cloudy': '⛅ Parçalı Bulutlu',
      'weather-foggy': '🌫️ Sisli',
      'weather-drizzle': '🌧️ Çiseleyen Yağmur',
      'weather-rainy': '🌧️ Yağmurlu',
      'weather-snowy': '❄️ Karlı',
      'weather-flurries': '❄️ Kar Atıştırması',
      'weather-showers': '🌦️ Sağanak Yağış',
      'weather-snowshowers': '🌨️ Kar Sağanağı',
      'weather-storm': '⛈️ Gökgürültülü Fırtına',
      'weather-overcast': '☁️ Bulutlu',
      'url-required': 'Lütfen bir URL adresi girin.',
      'delete': 'Sil',
      'edit': 'Düzenle',
      'new-tab': 'Yeni Sekme',
      'weather-loading': 'Hava durumu yükleniyor...',
      'edit-btn-title': 'Kısayolları Düzenle'
    },
    en: {
      'search-placeholder': 'Search the web or enter URL...',
      'quick-links': 'Quick Links',
      'edit-btn-default': 'Edit',
      'edit-btn-active': 'Done',
      'add-shortcut': 'Add Shortcut',
      'modal-title-add': 'Add Shortcut',
      'modal-title-edit': 'Edit Shortcut',
      'modal-name': 'Name',
      'modal-url': 'URL Address',
      'modal-cancel': 'Cancel',
      'modal-save': 'Save',
      'weather-error': 'Weather could not be retrieved.',
      'greeting-morning': 'Good Morning',
      'greeting-afternoon': 'Good Afternoon',
      'greeting-evening': 'Good Evening',
      'greeting-night': 'Good Night',
      'greeting-welcome': 'Welcome to OSLO',
      'weather-sunny': '☀️ Clear',
      'weather-cloudy': '⛅ Partly Cloudy',
      'weather-foggy': '🌫️ Foggy',
      'weather-drizzle': '🌧️ Drizzle',
      'weather-rainy': '🌧️ Rainy',
      'weather-snowy': '❄️ Snowy',
      'weather-flurries': '❄️ Snow Flurries',
      'weather-showers': '🌦️ Showers',
      'weather-snowshowers': '🌨️ Snow Showers',
      'weather-storm': '⛈️ Thunderstorm',
      'weather-overcast': '☁️ Cloudy',
      'url-required': 'Please enter a URL address.',
      'delete': 'Delete',
      'edit': 'Edit',
      'new-tab': 'New Tab',
      'weather-loading': 'Loading weather...',
      'edit-btn-title': 'Edit Shortcuts'
    },
    fr: {
      'search-placeholder': 'Rechercher sur le web ou saisir une URL...',
      'quick-links': 'Raccourcis',
      'edit-btn-default': 'Modifier',
      'edit-btn-active': 'Terminé',
      'add-shortcut': 'Ajouter',
      'modal-title-add': 'Ajouter un Raccourci',
      'modal-title-edit': 'Modifier le Raccourci',
      'modal-name': 'Nom',
      'modal-url': 'Adresse URL',
      'modal-cancel': 'Annuler',
      'modal-save': 'Enregistrer',
      'weather-error': 'Météo indisponible.',
      'greeting-morning': 'Bon matin',
      'greeting-afternoon': 'Bon après-midi',
      'greeting-evening': 'Bonsoir',
      'greeting-night': 'Bonne nuit',
      'greeting-welcome': 'Bienvenue sur OSLO',
      'weather-sunny': '☀️ Ensoleillé',
      'weather-cloudy': '⛅ Partiellement Nuageux',
      'weather-foggy': '🌫️ Brouillard',
      'weather-drizzle': '🌧️ Bruine',
      'weather-rainy': '🌧️ Pluvieux',
      'weather-snowy': '❄️ Neigeux',
      'weather-flurries': '❄️ Averses de neige',
      'weather-showers': '🌦️ Averses',
      'weather-snowshowers': '🌨️ Fortes chutes de neige',
      'weather-storm': '⛈️ Orage',
      'weather-overcast': '☁️ Nuageux',
      'url-required': 'Veuillez saisir une adresse URL.',
      'delete': 'Supprimer',
      'edit': 'Modifier',
      'new-tab': 'Nouvel Onglet',
      'weather-loading': 'Chargement de la météo...',
      'edit-btn-title': 'Modifier les raccourcis'
    }
  };

  let activeSettings = {
    theme: 'dark',
    accentColor: '#00ddff',
    reduceMotion: false,
    language: 'tr',
    newtabBackgroundType: 'default',
    newtabWallpaper: '',
    newtabBackgroundColor: '#0b0c0e',
    newtabPresetWallpaper: 'aurora',
    newtabShowClock: true,
    newtabShowDate: true,
    newtabShowWeather: true,
    newtabShowSearch: true,
    newtabShowShortcuts: true
  };
  let activeLang = 'tr';
  let lastWeatherCode = null;
  let rawCityName = 'İstanbul';
  let weatherLoadFailed = false;

  function formatCityName(cityName, lang) {
    if (!cityName) return '';
    const nameStr = String(cityName);
    if (lang === 'en' || lang === 'fr') {
      return nameStr.replace(/İ/g, 'I').replace(/ı/g, 'i');
    }
    return nameStr;
  }


  const clockEl = document.getElementById('clock');
  const dateEl = document.getElementById('date');
  const greetingEl = document.getElementById('greeting');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const weatherTemp = document.getElementById('weather-temp');
  const weatherDesc = document.getElementById('weather-desc');
  const weatherCity = document.getElementById('weather-city');

  const presetBackgrounds = {
    aurora: 'radial-gradient(circle at 20% 20%, rgba(0, 221, 255, 0.34), transparent 34%), radial-gradient(circle at 78% 18%, rgba(139, 92, 246, 0.28), transparent 30%), linear-gradient(135deg, #071014 0%, #111827 100%)',
    dawn: 'linear-gradient(135deg, #1f2937 0%, #7c2d12 45%, #f59e0b 100%)',
    forest: 'linear-gradient(135deg, #052e16 0%, #14532d 45%, #0f172a 100%)',
    mono: 'linear-gradient(135deg, #0f172a 0%, #27272a 50%, #111827 100%)'
  };

  let systemThemeQuery = null;

  function normalizeHexColor(value, fallback = '#00ddff') {
    if (typeof value !== 'string') return fallback;
    const trimmed = value.trim();
    return /^#[0-9a-fA-F]{6}$/.test(trimmed) ? trimmed : fallback;
  }

  function hexToRgb(hex) {
    const clean = normalizeHexColor(hex).replace('#', '');
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  }

  function shadeHexColor(hex, amount) {
    const { r, g, b } = hexToRgb(hex);
    return `#${[r, g, b].map(channel => {
      const value = amount < 0 ? channel * (1 + amount) : channel + (255 - channel) * amount;
      return Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, '0');
    }).join('')}`;
  }

  function applyAccentColor() {
    const color = normalizeHexColor(activeSettings.accentColor);
    const darker = shadeHexColor(color, -0.32);
    const root = document.documentElement;
    const body = document.body;
    root.style.setProperty('--accent-cyan', color);
    root.style.setProperty('--accent-blue', darker);
    root.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${color} 0%, ${darker} 100%)`);
    root.style.setProperty('--glass-hover-border', `${color}55`);
    body.style.setProperty('--accent-cyan', color);
    body.style.setProperty('--accent-blue', darker);
    body.style.setProperty('--accent-gradient', `linear-gradient(135deg, ${color} 0%, ${darker} 100%)`);
    body.style.setProperty('--glass-hover-border', `${color}55`);
  }

  function resolveThemeMode(mode) {
    if (mode === 'system') {
      if (!systemThemeQuery && window.matchMedia) {
        systemThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
        const handleSystemThemeChange = () => applyTheme();
        if (typeof systemThemeQuery.addEventListener === 'function') {
          systemThemeQuery.addEventListener('change', handleSystemThemeChange);
        } else if (typeof systemThemeQuery.addListener === 'function') {
          systemThemeQuery.addListener(handleSystemThemeChange);
        }
      }
      return systemThemeQuery?.matches ? 'light' : 'dark';
    }
    return mode === 'light' ? 'light' : 'dark';
  }

  // --- Theme Syncing (Dark / Light Mode) ---
  function applyTheme() {
    const resolvedTheme = resolveThemeMode(activeSettings.theme || 'dark');
    document.body.classList.toggle('light-mode', resolvedTheme === 'light');
  }

  function applyLayoutPreferences() {
    document.body.classList.toggle('hide-clock', activeSettings.newtabShowClock === false);
    document.body.classList.toggle('hide-date', activeSettings.newtabShowDate === false);
    document.body.classList.toggle('hide-weather', activeSettings.newtabShowWeather === false);
    document.body.classList.toggle('hide-search', activeSettings.newtabShowSearch === false);
    document.body.classList.toggle('hide-shortcuts', activeSettings.newtabShowShortcuts === false);
    document.body.classList.toggle('reduce-motion', !!activeSettings.reduceMotion);
  }

  function applyVisualPreferences() {
    applyTheme();
    applyAccentColor();
    applyLayoutPreferences();
  }

  // Load settings from main process
  if (window.oslo && typeof window.oslo.getAllSettings === 'function') {
    window.oslo.getAllSettings().then(settings => {
      activeSettings = { ...activeSettings, ...settings };
      activeLang = activeSettings.language || 'tr';
      applyVisualPreferences();
      applyWallpaper();
      applyLanguage();
    }).catch(err => {
      console.error('Failed to load settings from main process:', err);
      applyVisualPreferences();
      applyWallpaper();
      applyLanguage();
    });
  } else {
    applyVisualPreferences();
    applyWallpaper();
    applyLanguage();
  }

  // --- Live Clock & Time-based Greeting ---
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}`;
    if (dateEl) {
      const locale = activeLang === 'tr' ? 'tr-TR' : (activeLang === 'fr' ? 'fr-FR' : 'en-US');
      dateEl.textContent = now.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
    }

    const hrs = now.getHours();
    let greetKey = 'greeting-morning';
    if (hrs >= 5 && hrs < 12) {
      greetKey = 'greeting-morning';
    } else if (hrs >= 12 && hrs < 17) {
      greetKey = 'greeting-afternoon';
    } else if (hrs >= 17 && hrs < 22) {
      greetKey = 'greeting-evening';
    } else {
      greetKey = 'greeting-night';
    }
    
    // Check if newtabTranslations is already defined (it is defined below in the file scope)
    const translationsReady = typeof newtabTranslations !== 'undefined';
    const greet = translationsReady ? newtabTranslations[activeLang][greetKey] : 'Merhaba';
    const welcome = translationsReady ? newtabTranslations[activeLang]['greeting-welcome'] : "OSLO'ya Hoş Geldin";
    greetingEl.textContent = `${greet}, ${welcome}`;
  }

  updateTime();
  setInterval(updateTime, 1000);

  // --- Custom Wallpaper Loader ---
  function applyWallpaper() {
    const type = activeSettings.newtabBackgroundType || 'default';
    const savedWallpaper = activeSettings.newtabWallpaper;
    const shapes = document.querySelector('.bg-gradient-shapes');

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    if ((type === 'url' || type === 'file') && savedWallpaper && savedWallpaper.trim() !== '') {
      document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url("${savedWallpaper}")`;
      if (shapes) shapes.style.display = 'none';
    } else if (type === 'color') {
      document.body.style.backgroundColor = normalizeHexColor(activeSettings.newtabBackgroundColor, '#0b0c0e');
      if (shapes) shapes.style.display = 'none';
    } else if (type === 'preset') {
      document.body.style.backgroundImage = presetBackgrounds[activeSettings.newtabPresetWallpaper] || presetBackgrounds.aurora;
      if (shapes) shapes.style.display = 'none';
    } else {
      if (shapes) shapes.style.display = 'block';
    }
  }

  // --- Weather Widget ---
  function fetchWeather(lat, lon, cityName = '') {
    if (cityName) {
      rawCityName = cityName;
      weatherCity.textContent = formatCityName(rawCityName, activeLang);
    } else {
      // Reverse geocode via OpenStreetMap Nominatim
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
        .then(res => res.json())
        .then(data => {
          if (data && data.address) {
            const city = data.address.city || data.address.town || data.address.village || data.address.suburb || data.address.province || data.address.state || 'İstanbul';
            rawCityName = city;
            weatherCity.textContent = formatCityName(rawCityName, activeLang);
          } else {
            rawCityName = 'İstanbul';
            weatherCity.textContent = formatCityName(rawCityName, activeLang);
          }
        })
        .catch(() => {
          rawCityName = 'İstanbul';
          weatherCity.textContent = formatCityName(rawCityName, activeLang);
        });
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          const code = data.current_weather.weathercode;
          lastWeatherCode = code;
          weatherLoadFailed = false;
          weatherTemp.textContent = `${temp}°C`;
          weatherDesc.textContent = mapWeatherCode(code);
        }
      })
      .catch(() => {
        lastWeatherCode = null;
        weatherLoadFailed = true;
        const translationsReady = typeof newtabTranslations !== 'undefined';
        weatherDesc.textContent = translationsReady ? newtabTranslations[activeLang]['weather-error'] : 'Hava durumu alınamadı.';
      });
  }

  function mapWeatherCode(code) {
    const translationsReady = typeof newtabTranslations !== 'undefined';
    if (!translationsReady) return 'Bulutlu';
    switch(code) {
      case 0: return newtabTranslations[activeLang]['weather-sunny'];
      case 1:
      case 2:
      case 3: return newtabTranslations[activeLang]['weather-cloudy'];
      case 45:
      case 48: return newtabTranslations[activeLang]['weather-foggy'];
      case 51:
      case 53:
      case 55: return newtabTranslations[activeLang]['weather-drizzle'];
      case 61:
      case 63:
      case 65: return newtabTranslations[activeLang]['weather-rainy'];
      case 71:
      case 73:
      case 75: return newtabTranslations[activeLang]['weather-snowy'];
      case 77: return newtabTranslations[activeLang]['weather-flurries'];
      case 80:
      case 81:
      case 82: return newtabTranslations[activeLang]['weather-showers'];
      case 85:
      case 86: return newtabTranslations[activeLang]['weather-snowshowers'];
      case 95:
      case 96:
      case 99: return newtabTranslations[activeLang]['weather-storm'];
      default: return newtabTranslations[activeLang]['weather-overcast'];
    }
  }

  // Try geolocating user
  function loadWeatherAndLocation() {
    fetch('http://ip-api.com/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.status === 'success') {
          fetchWeather(data.lat, data.lon, data.city);
        } else {
          fallbackGeolocation();
        }
      })
      .catch(() => {
        fallbackGeolocation();
      });
  }

  function fallbackGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          fetchWeather(41.0082, 28.9784, 'İstanbul');
        },
        { timeout: 5000 }
      );
    } else {
      fetchWeather(41.0082, 28.9784, 'İstanbul');
    }
  }

  loadWeatherAndLocation();

  // --- Search Redirection ---
  function formatSearch(val, engine) {
    const query = val.trim();
    
    if (query.startsWith('http://') || query.startsWith('https://') || query.startsWith('file://')) {
      return query;
    }
    
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/;
    if (domainPattern.test(query)) {
      return 'https://' + query;
    }

    const searchEngines = {
      google: 'https://www.google.com/search?q=',
      duckduckgo: 'https://duckduckgo.com/?q=',
      bing: 'https://www.bing.com/search?q=',
      yahoo: 'https://search.yahoo.com/search?p=',
      yandex: 'https://yandex.com/search/?text=',
      brave: 'https://search.brave.com/search?q=',
      ecosia: 'https://www.ecosia.org/search?q=',
      startpage: 'https://www.startpage.com/do/dsearch?query='
    };
    const searchUrl = searchEngines[engine] || searchEngines.google;
    return searchUrl + encodeURIComponent(query);
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    if (window.oslo && typeof window.oslo.getSearchEngine === 'function') {
      window.oslo.getSearchEngine().then(engine => {
        window.location.href = formatSearch(query, engine);
      }).catch(() => {
        window.location.href = formatSearch(query, 'google');
      });
    } else {
      window.location.href = formatSearch(query, 'google');
    }
  });

  function applyLanguage() {
    activeLang = activeSettings.language || 'tr';
    
    document.title = newtabTranslations[activeLang]['new-tab'];
    
    // Update elements
    const sectionTitle = document.querySelector('.shortcuts-section .section-title');
    if (sectionTitle) sectionTitle.textContent = newtabTranslations[activeLang]['quick-links'];
    
    if (editShortcutsBtn) {
      editShortcutsBtn.textContent = editModeActive 
        ? newtabTranslations[activeLang]['edit-btn-active'] 
        : newtabTranslations[activeLang]['edit-btn-default'];
      editShortcutsBtn.title = newtabTranslations[activeLang]['edit-btn-title'];
    }

    if (searchInput) {
      searchInput.placeholder = newtabTranslations[activeLang]['search-placeholder'];
    }

    // Modal labels
    const nameLabel = document.querySelector('label[for="modal-name-input"]');
    if (nameLabel) nameLabel.textContent = newtabTranslations[activeLang]['modal-name'];
    
    const urlLabel = document.querySelector('label[for="modal-url-input"]');
    if (urlLabel) urlLabel.textContent = newtabTranslations[activeLang]['modal-url'];
    
    if (modalCancelBtn) modalCancelBtn.textContent = newtabTranslations[activeLang]['modal-cancel'];
    if (modalSaveBtn) modalSaveBtn.textContent = newtabTranslations[activeLang]['modal-save'];

    // Update weather widget translations
    if (lastWeatherCode !== null) {
      weatherDesc.textContent = mapWeatherCode(lastWeatherCode);
    } else if (weatherLoadFailed) {
      weatherDesc.textContent = newtabTranslations[activeLang]['weather-error'];
    } else {
      weatherDesc.textContent = newtabTranslations[activeLang]['weather-loading'];
    }
    if (weatherCity) {
      weatherCity.textContent = formatCityName(rawCityName, activeLang);
    }

    // Update greeting
    updateTime();
    
    // Rerender shortcuts to translate labels & buttons
    renderShortcutsGrid();
  }

  // --- Shortcuts Dynamic Management ---
  const editShortcutsBtn = document.getElementById('edit-shortcuts-btn');
  const shortcutsGrid = document.getElementById('shortcuts-grid');
  const shortcutModal = document.getElementById('shortcut-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalNameInput = document.getElementById('modal-name-input');
  const modalUrlInput = document.getElementById('modal-url-input');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalSaveBtn = document.getElementById('modal-save-btn');

  let defaultShortcuts = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'YouTube', url: 'https://www.youtube.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Wikipedia', url: 'https://www.wikipedia.org' },
    { name: 'Twitter', url: 'https://x.com' },
    { name: 'Reddit', url: 'https://www.reddit.com' }
  ];

  let shortcuts = [];
  try {
    const saved = localStorage.getItem('newtab-shortcuts');
    if (saved) {
      shortcuts = JSON.parse(saved);
    } else {
      shortcuts = [...defaultShortcuts];
    }
  } catch (e) {
    shortcuts = [...defaultShortcuts];
  }

  let editModeActive = false;
  let editingIndex = null;

  function saveShortcuts() {
    localStorage.setItem('newtab-shortcuts', JSON.stringify(shortcuts));
    renderShortcutsGrid();
  }

  function renderShortcutsGrid() {
    shortcutsGrid.innerHTML = '';
    
    shortcuts.forEach((item, index) => {
      let domain = '';
      try {
        domain = new URL(item.url).hostname;
      } catch (e) {
        domain = item.url;
      }
      
      const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
      const delTitle = newtabTranslations[activeLang]['delete'];
      const editTitle = newtabTranslations[activeLang]['edit'];
      
      const card = document.createElement('a');
      card.href = item.url;
      card.className = 'shortcut-card';
      card.dataset.index = index;
      
      card.innerHTML = `
        <div class="shortcut-icon" style="background-color: rgba(255, 255, 255, 0.05); color: #fff;">
          <img src="${faviconUrl}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="width: 24px; height: 24px; object-fit: contain;">
          <span class="fallback-letter" style="display: none; font-size: 18px; font-weight: bold; text-transform: uppercase;">${item.name.charAt(0)}</span>
        </div>
        <span class="shortcut-name">${item.name}</span>
        <button class="card-action-btn delete-btn" title="${delTitle}">&times;</button>
        <button class="card-action-btn edit-btn" title="${editTitle}">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
      `;

      card.addEventListener('click', (e) => {
        if (editModeActive) {
          e.preventDefault();
        }
      });

      const delBtn = card.querySelector('.delete-btn');
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        shortcuts.splice(index, 1);
        saveShortcuts();
      });

      const edBtn = card.querySelector('.edit-btn');
      edBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        openModal(index);
      });

      shortcutsGrid.appendChild(card);
    });

    // Add card at the end
    const addCard = document.createElement('div');
    addCard.className = 'shortcut-card add-card';
    const addText = newtabTranslations[activeLang]['add-shortcut'];
    addCard.innerHTML = `
      <div class="shortcut-icon add-icon">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
        </svg>
      </div>
      <span class="shortcut-name">${addText}</span>
    `;
    addCard.addEventListener('click', () => {
      openModal(null);
    });
    shortcutsGrid.appendChild(addCard);
  }

  function openModal(index) {
    if (index === null) {
      modalTitle.textContent = newtabTranslations[activeLang]['modal-title-add'];
      modalNameInput.value = '';
      modalUrlInput.value = '';
      editingIndex = null;
    } else {
      modalTitle.textContent = newtabTranslations[activeLang]['modal-title-edit'];
      modalNameInput.value = shortcuts[index].name;
      modalUrlInput.value = shortcuts[index].url;
      editingIndex = index;
    }
    shortcutModal.classList.add('open');
    modalNameInput.focus();
  }

  function closeModal() {
    shortcutModal.classList.remove('open');
  }

  editShortcutsBtn.addEventListener('click', () => {
    editModeActive = !editModeActive;
    if (editModeActive) {
      editShortcutsBtn.textContent = newtabTranslations[activeLang]['edit-btn-active'];
      editShortcutsBtn.classList.add('active');
      shortcutsGrid.classList.add('edit-active');
    } else {
      editShortcutsBtn.textContent = newtabTranslations[activeLang]['edit-btn-default'];
      editShortcutsBtn.classList.remove('active');
      shortcutsGrid.classList.remove('edit-active');
    }
  });

  modalCancelBtn.addEventListener('click', closeModal);
  
  shortcutModal.addEventListener('click', (e) => {
    if (e.target === shortcutModal) {
      closeModal();
    }
  });

  modalSaveBtn.addEventListener('click', () => {
    const name = modalNameInput.value.trim();
    let url = modalUrlInput.value.trim();

    if (!url) {
      alert(newtabTranslations[activeLang]['url-required']);
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    const finalName = name || new URL(url).hostname || url;

    if (editingIndex === null) {
      shortcuts.push({ name: finalName, url });
    } else {
      shortcuts[editingIndex] = { name: finalName, url };
    }

    saveShortcuts();
    closeModal();
  });

  const visualSettingKeys = new Set(['theme', 'accentColor', 'reduceMotion', 'newtabShowClock', 'newtabShowDate', 'newtabShowWeather', 'newtabShowSearch', 'newtabShowShortcuts']);
  const wallpaperSettingKeys = new Set(['newtabBackgroundType', 'newtabWallpaper', 'newtabBackgroundColor', 'newtabPresetWallpaper']);

  // Listen to settings broadcasts from the main process
  if (window.oslo && typeof window.oslo.onSettingsUpdated === 'function') {
    window.oslo.onSettingsUpdated((data) => {
      activeSettings[data.key] = data.value;
      if (data.key === 'language') {
        applyLanguage();
      }
      if (visualSettingKeys.has(data.key)) {
        applyVisualPreferences();
      }
      if (wallpaperSettingKeys.has(data.key)) {
        applyWallpaper();
      }
    });
  } else if (window.oslo && typeof window.oslo.onSettingBroadcast === 'function') {
    window.oslo.onSettingBroadcast(({ type, value }) => {
      const keyMap = { 'wallpaper': 'newtabWallpaper', 'newtab-wallpaper': 'newtabWallpaper' };
      const key = keyMap[type] || type;
      activeSettings[key] = value;
      if (key === 'language') {
        applyLanguage();
      }
      if (visualSettingKeys.has(key)) {
        applyVisualPreferences();
      }
      if (wallpaperSettingKeys.has(key)) {
        applyWallpaper();
      }
    });
  }

  if (activeSettings.newtabShowSearch !== false) {
    searchInput.focus();
  }
});
