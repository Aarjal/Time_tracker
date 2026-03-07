let currentTab = null;
let startTime = null;

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

async function saveTime(domain, timeSpent) {
  if (!domain) return;

  const data = await chrome.storage.local.get("timeData");
  const timeData = data.timeData || {};

  timeData[domain] = (timeData[domain] || 0) + timeSpent;

  await chrome.storage.local.set({ timeData });
}

async function switchTab(tabId) {
  if (currentTab && startTime) {
    const timeSpent = Date.now() - startTime;

    const tab = await chrome.tabs.get(currentTab);
    await saveTime(getDomain(tab.url), timeSpent);
  }

  currentTab = tabId;
  startTime = Date.now();
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  switchTab(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === "complete") {
    switchTab(tabId);
  }
});