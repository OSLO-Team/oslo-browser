// =============================================================================
// Oslo Browser — Advanced Network Ad & Tracker Blocker
// =============================================================================

// ─── BLOCKED DOMAINS ────────────────────────────────────────────────────────────
const blockedDomains = [
  // EFF Cover Your Tracks test domains (blocked for sub-resources only)
  'trackersimulator.org',
  'eviltracker.net',
  'do-not-tracker.org',
  'firstpartysimulator.org',
  'firstpartysimulator.net',

  // Google Ads & Analytics
  'doubleclick.net',
  'google-analytics.com',
  'googleadservices.com',
  'googlesyndication.com',
  'adservice.google.com',
  'adservice.google.com.tr',
  'pagead2.googlesyndication.com',
  'tpc.googlesyndication.com',
  'googleads.g.doubleclick.net',
  'ad.doubleclick.net',
  'static.doubleclick.net',
  'cm.g.doubleclick.net',
  'securepubads.g.doubleclick.net',
  'pubads.g.doubleclick.net',
  'partnerad.l.doubleclick.net',
  'www.googletagmanager.com',
  'www.googletagservices.com',
  'googletagmanager.com',
  'googletagservices.com',
  'analytics.google.com',
  'ssl.google-analytics.com',
  'www.google-analytics.com',
  'fundingchoicesmessages.google.com',
  'contributor.google.com',
  'imasdk.googleapis.com',
  'clients1.google.com',
  'clients2.google.com',
  'clients3.google.com',
  'clients4.google.com',
  'clients5.google.com',
  'clients6.google.com',
  'id.google.com',
  'partnerad.l.google.com',
  'video-stats.video.google.com',

  // YouTube Ad Servers
  'ads.youtube.com',
  'youtube.cleverads.vn',
  'advertising.youtube.com',
  'yt.moatads.com',

  // Major Ad Networks
  'adnxs.com',
  'adtech.de',
  'adform.net',
  'adroll.com',
  'advertising.com',
  'criteo.com',
  'criteo.net',
  'taboola.com',
  'cdn.taboola.com',
  'trc.taboola.com',
  'outbrain.com',
  'widgets.outbrain.com',
  'outbrainstatic.com',
  'log.outbrain.com',
  'popads.net',
  'onclickads.net',
  'exoclick.com',
  'trafficjunky.com',
  'trafficjunky.net',
  'servedby-buysellads.com',
  'buysellads.com',
  'amazon-adsystem.com',
  'carbonads.net',
  'carbonads.com',
  'srv.carbonads.net',
  'openx.net',
  'rubiconproject.com',
  'fastlane.rubiconproject.com',
  'optimized-by.rubiconproject.com',
  'pubmatic.com',
  'ads.pubmatic.com',
  'casalemedia.com',
  'yieldlab.net',
  'indexww.com',
  'adzerk.net',
  'adzerk.com',
  'addthis.com',
  'sharethis.com',
  'mgid.com',
  'revcontent.com',
  'zergnet.com',
  'propellerads.com',
  'adf.ly',
  'admob.com',
  'inmobi.com',
  'mopub.com',
  'unityads.unity3d.com',
  'smaato.com',
  'smaato.net',
  'applovin.com',
  'chartboost.com',
  'ironsrc.com',
  'vungle.com',
  'adcolony.com',
  'tapjoy.com',
  'fyber.com',
  'media.net',
  'contextweb.com',
  'yieldmo.com',
  'sovrn.com',
  'lijit.com',
  'districtm.io',
  'sharethrough.com',
  'triplelift.com',
  'smartadserver.com',
  'ads.stickyadstv.com',
  'appnexus.com',
  '33across.com',
  'emxdgt.com',
  'spotxchange.com',
  'spotx.tv',
  'springserve.com',
  'conversantmedia.com',

  // Analytics, Telemetry & Tracking
  'mixpanel.com',
  'hotjar.com',
  'amplitude.com',
  'segment.io',
  'segment.com',
  'sentry.io',
  'bugsnag.com',
  'newrelic.com',
  'nr-data.net',
  'bam.nr-data.net',
  'js-agent.newrelic.com',
  'scorecardresearch.com',
  'sb.scorecardresearch.com',
  'b.scorecardresearch.com',
  'quantserve.com',
  'pixel.quantserve.com',
  'quantcount.com',
  'comscore.com',
  'omtrdc.net',
  'demdex.net',
  'dpm.demdex.net',
  'bluekai.com',
  'tags.bluekai.com',
  'stags.bluekai.com',
  'krxd.net',
  'beacon.krxd.net',
  'cdn.krxd.net',
  'usermatch.krxd.net',
  'exelator.com',
  'loadm.exelator.com',
  'turn.com',
  'ad.turn.com',
  'mathtag.com',
  'pixel.mathtag.com',
  'rlcdn.com',
  'agkn.com',
  'nexac.com',
  'eyeota.net',
  'pippio.com',
  'lotame.com',
  'crwdcntrl.net',
  'bkrtx.com',
  'moatads.com',
  'z.moatads.com',
  'moatpixel.com',
  'doubleverify.com',
  'cdn.doubleverify.com',
  'adsafeprotected.com',
  'static.adsafeprotected.com',
  'fw.adsafeprotected.com',
  'integralads.com',
  'grapeshot.co.uk',
  'peer39.com',
  'postrelease.com',

  // Facebook/Meta tracking
  'pixel.facebook.com',
  'an.facebook.com',
  'ad.atdmt.com',
  'connect.facebook.net',

  // Microsoft/Bing tracking
  'bat.bing.com',
  'c.bing.com',
  'c.clarity.ms',
  'clarity.ms',

  // Twitter tracking
  'analytics.twitter.com',
  'ads-api.twitter.com',
  't.co',

  // LinkedIn tracking
  'snap.licdn.com',
  'px.ads.linkedin.com',

  // Pinterest tracking
  'ct.pinterest.com',
  'trk.pinterest.com',

  // TikTok tracking
  'analytics.tiktok.com',
  'analytics-sg.tiktok.com',

  // Other common trackers
  'adition.com',
  'adsrvr.org',
  'adswizz.com',
  'atdmt.com',
  'bidswitch.net',
  'bizible.com',
  'bounceexchange.com',
  'branch.io',
  'btttag.com',
  'cookielaw.org',
  'coremetrics.com',
  'demandbase.com',
  'dstillery.com',
  'effectivemeasure.net',
  'eloqua.com',
  'everesttech.net',
  'evidon.com',
  'flashtalking.com',
  'go-mpulse.net',
  'iasds01.com',
  'liadm.com',
  'marketo.com',
  'marketo.net',
  'mookie1.com',
  'myvisualiq.net',
  'narrative.io',
  'npttech.com',
  'omnitagjs.com',
  'onetag-sys.com',
  'openxmarket.asia',
  'pardot.com',
  'rfihub.com',
  'richrelevance.com',
  'rkdms.com',
  'samba.tv',
  'serving-sys.com',
  'simpli.fi',
  'sitescout.com',
  'tapad.com',
  'teads.tv',
  'tidaltv.com',
  'tinypass.com',
  'tremorhub.com',
  'tribalfusion.com',
  'typekit.net',
  'undertone.com',
  'yieldoptimizer.com',

  // Anti-adblock
  'pagefair.com',
  'pagefair.net',
  'blockadblock.com',
  'fuckadblock.com',
  'detectadblock.com',
  'adblockanalytics.com',

  // Pop-unders
  'adcash.com',
  'popcash.net',
  'popunder.net',
  'clickadu.com',
  'hilltopads.net',
  'richads.com',

  // Fingerprinting services
  'fingerprintjs.com',
  'fpjs.io',
  'permutive.com',
  'arkoselabs.com',
  'funcaptcha.com',
];

// ─── TRACKER DOMAINS (for 3rd-party cookie/header stripping only) ──────────────
const trackerDomains = [
  'facebook.com',
  'facebook.net',
  'fbcdn.net',
  'twitter.com',
  'linkedin.com',
  'instagram.com',
  'tiktok.com',
  'pinterest.com',
  'reddit.com',
  'snapchat.com',
  'amazon.com',
  'yahoo.com',
  'bing.com',
  'microsoft.com',
];

// ─── YOUTUBE AD URL PATTERNS ────────────────────────────────────────────────────
const youtubeAdPatterns = [
  '/pagead/',
  '/ptracking',
  '/api/stats/ads',
  '/api/stats/atr',
  '/get_midroll_info',
  '/log_interaction',
  '/generate_204',
  '/youtubei/v1/log_event',
  '/youtubei/v1/player/ad_break',
  'annotation_id=',
  'cpmSequenceNum=',
  'adsense_video_doc_id=',
  'ad_type=',
  'ad_logging_flag=',
  '&ad_flags=',
  'ctier=L',
  'doubleclick.net/pagead/adview',
  'doubleclick.net/pagead/id',
  'googleads.g.doubleclick.net/pagead/ads',
  'www.youtube.com/pagead/',
  'www.youtube.com/ptracking',
  'www.youtube.com/api/stats/ads',
  'www.youtube.com/error_204',
  's.youtube.com/api/stats',
  's0.2mdn.net',
  'www.youtube.com/csi_204',
  'www.youtube.com/gen_204',
  'www.youtube.com/pcs/activeview',
  'www.youtube.com/pagead/lvz',
  'www.youtube.com/get_midroll_info',
];

// ─── BLOCKED PATHS ──────────────────────────────────────────────────────────────
const blockedPaths = [
  '/ads/', '/ads.js', '/adpage', '/adframe', '/adserver', '/ad_', '/ad-', '/ad.',
  'smartadserver', 'bannerads', 'track.js', 'tracking.js', 'tracker', 'reklam.js',
  '/pagead/', '/ptracking', '/afs/ads', '/adview', '/adsid/', '/adlog', '/ad_event',
  '/prebid', '/prebid-', '/gpt.js', '/pubads', '/gampad/', '/clkpage', '/sponsor',
  '/sponsored-', '/pixel.', '/beacon.', '/collect?', '/__imp', '/imp?', '/impression',
  '/clicktracker', '/clicktrack', '/conversiontracking', '/bid?', '/bidrequest',
  '/rtb/', '/auctioneer', '/adsense', '/admanager', '/tag.min.js', '/tags.js',
  '/gtm.js', '/analytics.js', '/gtag/js',
];

// ─── BLOCKED KEYWORDS ───────────────────────────────────────────────────────────
const blockedKeywords = [
  'telemetry', 'analytics', 'reklam', 'reklamlar', 'advert', 'advertisement',
  'adserv', 'addelivery', 'adtech', 'adsystem', 'adnetwork', 'adexchange',
  'popunder', 'clickunder',
];

// ─── STATE ──────────────────────────────────────────────────────────────────────
let adBlockEnabled = true;
let onBlockCallback = null;
let httpsOnlyEnabled = false;
let privacyOptions = {
  cookiePolicy: 'block-third-party',
  trackingProtectionLevel: 'balanced',
  fingerprintProtection: true,
  refererPolicy: 'cross-origin',
  globalPrivacyControl: true,
  incognitoBlockThirdPartyCookies: true,
  httpsOnlyExceptions: ''
};

// ─── DOMAIN MATCHING ────────────────────────────────────────────────────────────
function isBlockedDomain(hostname) {
  const lowerHost = hostname.toLowerCase();
  for (const domain of blockedDomains) {
    if (lowerHost === domain || lowerHost.endsWith('.' + domain)) {
      return true;
    }
  }
  return false;
}

function isTrackerDomain(hostname) {
  const lowerHost = hostname.toLowerCase();
  for (const domain of trackerDomains) {
    if (lowerHost === domain || lowerHost.endsWith('.' + domain)) {
      return true;
    }
  }
  return false;
}

function setPrivacyOptions(options = {}) {
  privacyOptions = { ...privacyOptions, ...options };
}

function getHttpsOnlyExceptions() {
  return String(privacyOptions.httpsOnlyExceptions || '')
    .split(/[\n,;]+/)
    .map(item => item.trim().toLowerCase())
    .filter(Boolean);
}

function isHttpsOnlyException(hostname) {
  const host = String(hostname || '').toLowerCase();
  return getHttpsOnlyExceptions().some(item => host === item || host.endsWith('.' + item));
}

function getRequestContext(details) {
  let requestHostname = '';
  let initiatorHostname = '';
  try {
    requestHostname = new URL(details.url).hostname.toLowerCase();
  } catch (e) { }
  try {
    const source = details.initiator || details.referrer || '';
    if (source) initiatorHostname = new URL(source).hostname.toLowerCase();
  } catch (e) { }

  const isThirdParty = initiatorHostname
    ? requestHostname !== initiatorHostname && !requestHostname.endsWith('.' + initiatorHostname)
    : details.resourceType !== 'mainFrame';

  return { requestHostname, initiatorHostname, isThirdParty };
}

// ─── YOUTUBE AD URL DETECTION ───────────────────────────────────────────────────
function isYouTubeAdRequest(url, hostname) {
  if (!hostname.includes('youtube.com') &&
      !hostname.includes('ytimg.com') &&
      !hostname.includes('googlevideo.com') &&
      !hostname.includes('doubleclick.net') &&
      !hostname.includes('googleapis.com') &&
      !hostname.includes('2mdn.net') &&
      !hostname.includes('googleads') &&
      !hostname.includes('googlesyndication') &&
      !hostname.includes('google-analytics') &&
      !hostname.includes('googleadservices') &&
      !hostname.includes('googletagmanager') &&
      !hostname.includes('googletagservices') &&
      !hostname.includes('imasdk')) {
    return false;
  }

  const lowerUrl = url.toLowerCase();
  for (const pattern of youtubeAdPatterns) {
    if (lowerUrl.includes(pattern.toLowerCase())) {
      return true;
    }
  }

  if (hostname.includes('googlevideo.com')) {
    if (lowerUrl.includes('&ctier=l') || lowerUrl.includes('&oad=') ||
        lowerUrl.includes('&ad_type=') || lowerUrl.includes('ctier=l')) {
      return true;
    }
  }

  return false;
}

// ─── MAIN BLOCKING DECISION ─────────────────────────────────────────────────────
function shouldBlock(url, resourceType) {
  try {
    const lowerUrl = url.toLowerCase();

    // Bypass local protocols
    if (lowerUrl.startsWith('oslo://') || lowerUrl.startsWith('file://') ||
        lowerUrl.startsWith('chrome://') || lowerUrl.startsWith('devtools://') ||
        lowerUrl.startsWith('chrome-extension://') || lowerUrl.startsWith('about:')) {
      return false;
    }

    // 0. NEVER block top-level document/navigation requests (mainFrame)
    if (resourceType === 'mainFrame') {
      return false;
    }

    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();
    const pathname = parsed.pathname.toLowerCase();
    const fullUrl = parsed.href.toLowerCase();

    if (privacyOptions.trackingProtectionLevel === 'strict' && (isTrackerDomain(hostname) || isBlockedDomain(hostname))) {
      return true;
    }

    if (!adBlockEnabled) return false;

    // 1. Check blocked domains
    if (isBlockedDomain(hostname)) {
      return true;
    }

    // 2. YouTube-specific ad request detection
    if (isYouTubeAdRequest(url, hostname)) {
      return true;
    }

    // 3. Path pattern matches
    for (const pattern of blockedPaths) {
      if (pathname.includes(pattern)) {
        return true;
      }
    }

    // 4. Keyword matches
    for (const keyword of blockedKeywords) {
      if (hostname.includes(keyword) || pathname.includes(keyword)) {
        return true;
      }
    }

    // 5. Block known ad image/video resource patterns
    if (resourceType === 'image' || resourceType === 'media') {
      if (fullUrl.includes('/adimage') || fullUrl.includes('/adcreative') ||
          fullUrl.includes('/banner_ad') || fullUrl.includes('/sponsored_')) {
        return true;
      }
    }

  } catch (e) {
    try {
      const lowerUrl = url.toLowerCase();
      if (lowerUrl.startsWith('oslo://') || lowerUrl.startsWith('file://') ||
          lowerUrl.startsWith('chrome://') || lowerUrl.startsWith('devtools://')) {
        return false;
      }
      for (const domain of blockedDomains) {
        if (lowerUrl.includes(domain)) {
          return true;
        }
      }
    } catch (err) {}
  }
  return false;
}

// ─── TRACKING HEADER STRIPPING (onBeforeSendHeaders) ────────────────────────────
function setupTrackingHeaderStripping(sessionInstance, sessionKind = 'default') {
  sessionInstance.webRequest.onBeforeSendHeaders(
    { urls: ['http://*/*', 'https://*/*'] },
    (details, callback) => {
      try {
        const parsed = new URL(details.url);
        const hostname = parsed.hostname.toLowerCase();
        const { isThirdParty } = getRequestContext(details);
        const newHeaders = {};
        let modified = false;
        const cookiePolicy = privacyOptions.cookiePolicy || 'allow';
        const shouldBlockThirdPartyCookie =
          cookiePolicy === 'block-third-party' ||
          (sessionKind === 'incognito' && privacyOptions.incognitoBlockThirdPartyCookies !== false);
        const isTracker = isTrackerDomain(hostname) || isBlockedDomain(hostname);

        for (const [key, value] of Object.entries(details.requestHeaders || {})) {
          const lowerKey = key.toLowerCase();

          if (lowerKey === 'cookie' && (cookiePolicy === 'block-all' || (isThirdParty && shouldBlockThirdPartyCookie))) {
            modified = true;
            continue;
          }

          if (lowerKey === 'referer') {
            if (privacyOptions.refererPolicy === 'strict') {
              modified = true;
              continue;
            }

            if (privacyOptions.refererPolicy === 'cross-origin' && isThirdParty) {
              modified = true;
              continue;
            }

            if (privacyOptions.refererPolicy === 'origin-only') {
              try {
                const origin = new URL(value).origin + '/';
                newHeaders[key] = origin;
                modified = origin !== value;
                continue;
              } catch (e) { }
            }
          }

          if ((privacyOptions.trackingProtectionLevel !== 'off' || adBlockEnabled) &&
              isThirdParty && isTracker &&
              (lowerKey === 'x-client-data' || lowerKey === 'sec-ch-ua-full-version-list')) {
            modified = true;
            continue;
          }

          newHeaders[key] = value;
        }

        if (privacyOptions.globalPrivacyControl || privacyOptions.fingerprintProtection) {
          newHeaders.DNT = '1';
          newHeaders['Sec-GPC'] = '1';
          modified = true;
        }

        if (modified) {
          callback({ requestHeaders: newHeaders });
          return;
        }
      } catch (e) {
        // On any error, just pass through
      }
      callback({});
    }
  );
}

// ─── RESPONSE HEADER MANIPULATION (onHeadersReceived) ───────────────────────────
function setupResponseHeaderManipulation(sessionInstance, sessionKind = 'default') {
  sessionInstance.webRequest.onHeadersReceived(
    { urls: ['http://*/*', 'https://*/*'] },
    (details, callback) => {
      try {
        const parsed = new URL(details.url);
        const hostname = parsed.hostname.toLowerCase();
        const isYouTube = hostname.includes('youtube.com') || hostname.includes('youtu.be');
        const { isThirdParty } = getRequestContext(details);
        const isTracker = isTrackerDomain(hostname) || isBlockedDomain(hostname);
        const cookiePolicy = privacyOptions.cookiePolicy || 'allow';
        const shouldBlockThirdPartyCookie =
          cookiePolicy === 'block-third-party' ||
          (sessionKind === 'incognito' && privacyOptions.incognitoBlockThirdPartyCookies !== false);

        const shouldModify = isYouTube ||
          cookiePolicy !== 'allow' ||
          (sessionKind === 'incognito' && privacyOptions.incognitoBlockThirdPartyCookies !== false) ||
          ((privacyOptions.trackingProtectionLevel !== 'off' || adBlockEnabled) && isThirdParty && isTracker);
        if (!shouldModify) {
          callback({});
          return;
        }

        const headers = details.responseHeaders;
        if (!headers) {
          callback({});
          return;
        }

        const newHeaders = {};
        let modified = false;

        for (const [key, value] of Object.entries(headers)) {
          const lowerKey = key.toLowerCase();

          // Remove CSP headers on YouTube to allow preload script main-world insertions
          if (isYouTube && (lowerKey === 'content-security-policy' ||
              lowerKey === 'content-security-policy-report-only' ||
              lowerKey === 'x-content-security-policy')) {
            modified = true;
            continue;
          }

          if (lowerKey === 'set-cookie' && (cookiePolicy === 'block-all' || (isThirdParty && shouldBlockThirdPartyCookie))) {
            modified = true;
            continue;
          }

          // Block Set-Cookie from third-party tracker domains
          if ((privacyOptions.trackingProtectionLevel !== 'off' || adBlockEnabled) && isThirdParty && isTracker && lowerKey === 'set-cookie') {
            modified = true;
            continue;
          }

          // Block ETag-based tracking
          if ((privacyOptions.trackingProtectionLevel !== 'off' || privacyOptions.fingerprintProtection) && isTracker && lowerKey === 'etag') {
            modified = true;
            continue;
          }

          newHeaders[key] = value;
        }

        if (modified) {
          callback({ responseHeaders: newHeaders });
          return;
        }
      } catch (e) {
        // On any error, just pass through
      }
      callback({});
    }
  );
}

// ─── SETUP ──────────────────────────────────────────────────────────────────────
function setupAdBlocker(sessionInstance, sessionKind = 'default') {
  // Layer 1: Network-level request blocking
  sessionInstance.webRequest.onBeforeRequest(
    { urls: ['http://*/*', 'https://*/*'] },
    (details, callback) => {
      // 1. HTTPS-Only Redirect
      if (httpsOnlyEnabled && details.url.startsWith('http://')) {
        try {
          const parsedUrl = new URL(details.url);
          if (parsedUrl.hostname !== 'localhost' && parsedUrl.hostname !== '127.0.0.1' && !isHttpsOnlyException(parsedUrl.hostname)) {
            callback({ redirectURL: details.url.replace('http://', 'https://') });
            return;
          }
        } catch (e) {}
      }

      // 2. AdBlocking
      if (shouldBlock(details.url, details.resourceType)) {
        if (onBlockCallback) {
          onBlockCallback(details.url);
        }
        callback({ cancel: true });
      } else {
        callback({ cancel: false });
      }
    }
  );

  // Layer 2: Tracking header stripping
  setupTrackingHeaderStripping(sessionInstance, sessionKind);

  // Layer 3: Response header manipulation
  setupResponseHeaderManipulation(sessionInstance, sessionKind);
}

// ─── PUBLIC API ─────────────────────────────────────────────────────────────────
function setOnBlockCallback(callback) {
  onBlockCallback = callback;
}

function setHttpsOnlyEnabled(enabled) {
  httpsOnlyEnabled = enabled;
}

function setAdBlockEnabled(enabled) {
  adBlockEnabled = enabled;
}

function isAdBlockEnabled() {
  return adBlockEnabled;
}

module.exports = {
  setupAdBlocker,
  shouldBlock,
  setAdBlockEnabled,
  isAdBlockEnabled,
  setOnBlockCallback,
  setHttpsOnlyEnabled,
  setPrivacyOptions
};
