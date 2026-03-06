function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  }

  return `${minutes}m ${seconds % 60}s`;
}

async function loadData() {
  const result = await chrome.storage.local.get("timeData");
  const timeData = result.timeData || {};

  const list = document.getElementById("list");
  const total = document.getElementById("total");
  const clearBtn = document.getElementById("clear");
  list.innerHTML = "";

  const entries = Object.entries(timeData).sort((a, b) => b[1] - a[1]);
  const totalMs = entries.reduce((sum, [, time]) => sum + time, 0);
  total.textContent = formatTime(totalMs);

  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No browsing time tracked yet.";
    list.appendChild(empty);
    clearBtn.disabled = true;
    return;
  }

  clearBtn.disabled = false;

  entries.forEach(([site, time]) => {
    const row = document.createElement("div");
    row.className = "site-row";

    const siteEl = document.createElement("div");
    siteEl.className = "site-name";
    siteEl.title = site;
    siteEl.textContent = site;

    const timeEl = document.createElement("div");
    timeEl.className = "site-time";
    timeEl.textContent = formatTime(time);

    row.appendChild(siteEl);
    row.appendChild(timeEl);
    list.appendChild(row);
  });
}

document.getElementById("clear").onclick = async () => {
  await chrome.storage.local.clear();
  await loadData();
};

loadData();