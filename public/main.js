// theme toggle (initial theme is set inline in <head> to avoid a flash)
const root = document.documentElement;
const favicon = document.querySelector('link[rel="icon"]');
const syncFavicon = () => {
  favicon?.setAttribute("href", "/img/treemc-icon.png");
};
syncFavicon();
document.querySelector(".theme-btn")?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  syncFavicon();
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// mobile menu
const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".has-dd > a").forEach((a) =>
  a.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    e.preventDefault();
    a.parentElement.classList.toggle("sub-open");
  })
);

// tabs: a button[data-tab] shows the [data-panel] with the same id inside its own .tabset
document.querySelectorAll("[data-tab]").forEach((b) =>
  b.addEventListener("click", () => {
    const set = b.closest(".tabset");
    const own = (el) => el.closest(".tabset") === set;
    set.querySelectorAll("[data-tab]").forEach((x) => own(x) && x.setAttribute("aria-pressed", x === b));
    set.querySelectorAll("[data-panel]").forEach((p) => own(p) && (p.hidden = p.dataset.panel !== b.dataset.tab));
  })
);
const linkedTab = document.querySelector(`[data-tab="${CSS.escape(location.hash.slice(1))}"]`);
if (linkedTab) {
  linkedTab.click();
  document.getElementById(linkedTab.dataset.tab)?.scrollIntoView();
}

// reveal on scroll
const io = "IntersectionObserver" in window && new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".rv").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

// Minecraft plan finder: rough RAM guess from players and play style -> smallest fitting plan
const fr = document.getElementById("f-result");
if (fr) {
  const tiers = JSON.parse(fr.dataset.plans);
  const slider = document.getElementById("f-slider");
  const order = fr.querySelector('[data-order]');
  const orderLabel = order?.querySelector('[data-order-label]');
  const $ = (id) => document.getElementById(id);
  const pick = () => {
    const n = +slider.value, mode = document.querySelector('[name="f-mode"]:checked')?.value || "vanilla";
    // Note: rule of thumb, not a benchmark. ~1 GB per 4 players, more for plugins and mods.
    const need = mode === "mods" ? Math.max(6, Math.ceil(n / 3) + 4) : mode === "plugins" ? Math.max(3, Math.ceil(n / 3.5) + 1) : Math.max(2, Math.ceil(n / 4));
    const tier = tiers[mode === "vanilla" ? 0 : mode === "plugins" ? 1 : 2] || tiers[0];
    const plan = tier?.plans?.find((p) => p.gb >= need) || tier?.plans?.at(-1);
    if (!plan) return;
    $("f-players").textContent = n;
    $("f-tier").textContent = tier.tier;
    $("f-name").textContent = plan.n;
    $("f-gb").textContent = `${plan.gb} GB`;
    $("f-price").textContent = plan.p.toLocaleString("en-IN");
    if (order) order.href = plan.order?.href || "https://discord.gg/wbH8ZVAsYg";
    if (orderLabel) orderLabel.textContent = plan.order?.label || "Order on Discord";
    const t = document.querySelector(`#f-cubes template[data-mat="${plan.m}"]`);
    if (t) fr.querySelector(".f-cube").replaceChildren(t.content.cloneNode(true));
  };
  slider.addEventListener("input", pick);
  document.querySelectorAll('[name="f-mode"]').forEach((r) => r.addEventListener("change", pick));
  pick();
}

// option buttons inside a calculator: one pressed per group
const pressIn = (group, btn) => group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
const val = (root, name) => root.querySelector(`[data-calc="${name}"] [aria-pressed="true"]`)?.dataset.v;

// cloud gaming: rig price x hours
document.querySelectorAll(".calc[data-rigs]").forEach((calc) => {
  const rigs = JSON.parse(calc.dataset.rigs);
  const upd = () => {
    const r = rigs[+val(calc, "rig")], h = +val(calc, "hours");
    calc.querySelector(".calc-total").textContent = `₹${(r.p * h).toLocaleString("en-IN")}`;
    calc.querySelector(".calc-sum").textContent = `${r.n} · ${r.gpu.replace("NVIDIA ", "")} · ${h} hour${h > 1 ? "s" : ""}`;
  };
  calc.querySelectorAll("[data-calc] button").forEach((b) => b.addEventListener("click", () => { pressIn(b.parentElement, b); upd(); }));
  upd();
});

// VPS finder: cheapest plan with enough RAM and cores in the chosen location
document.querySelectorAll(".calc[data-vps]").forEach((calc) => {
  const plans = JSON.parse(calc.dataset.vps);
  const out = (k, v) => (calc.querySelector(`[data-out="${k}"]`).textContent = v);
  const order = calc.querySelector('[data-order]');
  const orderLabel = order?.querySelector('[data-order-label]');
  const locSel = calc.querySelector('select[data-in="loc"]');
  const flagImg = calc.querySelector('[data-loc-flag]');

  const syncCpus = (loc) => {
    const cpuWrap = calc.querySelector('[data-calc="cpu"]');
    if (!cpuWrap) return;
    const btns = Array.from(cpuWrap.querySelectorAll("button"));
    let activeBtn = btns.find((b) => b.getAttribute("aria-pressed") === "true");
    btns.forEach((b) => {
      const v = b.dataset.v || "All";
      const avail = v === "All" || plans.some((p) => p.g.startsWith(loc) && p.g.toLowerCase().includes(v.toLowerCase()));
      b.style.display = avail ? "" : "none";
      if (!avail && b === activeBtn) activeBtn = null;
    });
    if (!activeBtn) {
      const allBtn = btns.find((b) => b.dataset.v === "All") || btns.find((b) => b.style.display !== "none");
      if (allBtn) pressIn(cpuWrap, allBtn);
    }
  };

  const upd = () => {
    const ram = +calc.querySelector('[data-in="ram"]').value;
    const cores = +calc.querySelector('[data-in="cores"]').value;
    const loc = locSel ? locSel.value : val(calc, "loc");
    if (locSel && flagImg) {
      const opt = locSel.options[locSel.selectedIndex];
      if (opt && opt.dataset.flag) flagImg.src = opt.dataset.flag;
    }
    syncCpus(loc);
    const cpu = val(calc, "cpu") || "All";
    out("ram", `${ram} GB`); out("cores", cores);
    const fit = plans.filter((p) => p.g.startsWith(loc) && (cpu === "All" || p.g.toLowerCase().includes(cpu.toLowerCase())) && p.r >= ram && p.c >= cores).sort((a, b) => a.p - b.p)[0];
    if (!fit) {
      out("group", loc); out("name", "Custom"); out("spec", "Bigger than our listed plans"); out("price", "Ask for a quote");
      if (order) order.href = 'https://discord.gg/wbH8ZVAsYg';
      if (orderLabel) orderLabel.textContent = 'Order on Discord';
    } else {
      out("group", fit.g); out("name", fit.n); out("spec", `${fit.c} vCore${fit.c > 1 ? "s" : ""} · ${fit.r} GB RAM`); out("price", `₹${fit.p.toLocaleString("en-IN")}/month`);
      if (order && fit.order) order.href = fit.order.href;
      if (orderLabel && fit.order) orderLabel.textContent = fit.order.label;
    }
    if (window.treemcApplyCurrency) window.treemcApplyCurrency();
  };
  calc.querySelectorAll("input, select").forEach((i) => i.addEventListener("input", upd));
  if (locSel) locSel.addEventListener("change", upd);
  calc.querySelectorAll("[data-calc] button").forEach((b) => b.addEventListener("click", () => { pressIn(b.parentElement, b); upd(); }));
  upd();
});


// floating header: follows you down the page. At the top it sits under the announcement bar (if there is one),
// once you scroll it sticks 10px from the top of the screen.
const shell = document.querySelector(".nav-shell"), ann = document.querySelector(".announce");
if (shell) {
  let annH = 0, queued = false;
  const place = () => {
    queued = false;
    const y = window.scrollY;
    shell.style.top = `${Math.max(10, 20 + annH - y)}px`;
    shell.classList.toggle("scrolled", y > 8);
  };
  const measure = () => { annH = ann ? ann.offsetHeight : 0; root.style.setProperty("--announce-h", `${annH}px`); place(); };
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(place); } }, { passive: true });
  addEventListener("resize", measure);
  if (ann && "ResizeObserver" in window) new ResizeObserver(measure).observe(ann);
  measure();
}

// Each city updates the highlighted country, map marker and plan link together.
document.querySelectorAll(".location-explorer").forEach((explorer) => {
  const buttons = [...explorer.querySelectorAll("[data-map-location]")];
  const select = (button) => {
    buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    explorer.querySelectorAll("[data-map-pin]").forEach((pin) => {
      const selected = pin.dataset.mapPin === button.dataset.mapLocation;
      pin.classList.toggle("is-selected", selected);
      pin.setAttribute("aria-pressed", String(selected));
    });
    explorer.querySelectorAll("[data-country]").forEach((country) => {
      country.classList.toggle("is-selected", country.dataset.country === button.dataset.countryCode);
    });
    explorer.querySelector("[data-map-name]").textContent = button.dataset.name;
    explorer.querySelector("[data-map-country]").textContent = button.dataset.countryName;
    explorer.querySelector("[data-map-flag]").src = button.dataset.flag;
    explorer.querySelector("[data-map-link]").href = button.dataset.route;
  };
  buttons.forEach((button) => button.addEventListener("click", () => select(button)));
  explorer.querySelectorAll("[data-map-pin]").forEach((pin) => {
    const button = buttons.find((item) => item.dataset.mapLocation === pin.dataset.mapPin);
    const activate = () => select(button);
    pin.addEventListener("click", activate);
    pin.addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      activate();
    });
  });
  select(buttons.find((button) => button.getAttribute("aria-pressed") === "true") || buttons[0]);
});

const blogSearch = document.querySelector("#blog-search");
if (blogSearch) {
  const cards = [...document.querySelectorAll("#article-grid .post-card")];
  const status = document.querySelector(".blog-search-status");
  const search = () => {
    const query = blogSearch.value.trim().toLocaleLowerCase();
    cards.forEach((card) => { card.hidden = !card.textContent.toLocaleLowerCase().includes(query); });
    const count = cards.filter((card) => !card.hidden).length;
    status.textContent = count + (count === 1 ? " article" : " articles") + (query ? " found" : "");
  };
  blogSearch.addEventListener("input", search);
  search();
}

/* TreeMC Currency Selector (Live FX + Full Page) */
(function(){
  const SYMS = { INR: "₹", USD: "$", EUR: "€", GBP: "£", PKR: "Rs ", AED: "د.إ ", SGD: "S$", CAD: "C$", AUD: "A$" };
  let RATES = { INR: 1, USD: 0.0118, EUR: 0.0112, GBP: 0.0094, PKR: 3.30, AED: 0.0435, SGD: 0.0159, CAD: 0.0166, AUD: 0.0182 };
  const origText = new WeakMap();

  function loadCachedRates() {
    try {
      const raw = localStorage.getItem("treemc_fx_rates");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.rates) RATES = Object.assign({}, RATES, parsed.rates);
        if (parsed && Date.now() - parsed.ts < 3600000) return true;
      }
    } catch (_) {}
    return false;
  }

  async function fetchLiveRates() {
    if (loadCachedRates()) return;
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/INR");
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.result === "success" && data.rates) {
        Object.keys(SYMS).forEach((k) => { if (data.rates[k]) RATES[k] = data.rates[k]; });
        localStorage.setItem("treemc_fx_rates", JSON.stringify({ ts: Date.now(), rates: RATES }));
        const code = localStorage.getItem("treemc_currency") || "INR";
        if (code !== "INR") applyCurrency(code);
      }
    } catch (_) {}
  }

  function formatAmt(inr, code) {
    const rate = RATES[code] || 1;
    if (code === "INR") return Math.round(inr).toLocaleString("en-IN");
    const v = inr * rate;
    return v >= 100 ? v.toFixed(0) : v.toFixed(2);
  }

  function applyCurrency(code) {
    if (!SYMS[code]) code = "INR";
    const sym = SYMS[code];
    localStorage.setItem("treemc_currency", code);

    document.querySelectorAll(".price").forEach((el) => {
      const curEl = el.querySelector(".cur");
      const amtEl = el.querySelector(".amt");
      if (!curEl || !amtEl) return;
      if (!amtEl.dataset.inr) {
        const raw = parseFloat(amtEl.textContent.replace(/[^0-9.]/g, ""));
        if (!isNaN(raw)) amtEl.dataset.inr = String(raw);
      }
      const inr = parseFloat(amtEl.dataset.inr);
      if (isNaN(inr)) return;
      curEl.textContent = sym;
      amtEl.textContent = formatAmt(inr, code);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest("#treemc-currency, script, style, .price")) continue;
      if (!origText.has(node)) {
        if (!node.nodeValue || !node.nodeValue.includes("₹")) continue;
        origText.set(node, node.nodeValue);
      }
      const base = origText.get(node);
      if (code === "INR") {
        node.nodeValue = base;
      } else {
        node.nodeValue = base.replace(/₹\s*([0-9][0-9,]*(?:\.[0-9]+)?)/g, (_, num) => {
          const inr = parseFloat(num.replace(/,/g, ""));
          return isNaN(inr) ? _ : sym + formatAmt(inr, code);
        });
      }
    }
  }

  window.treemcApplyCurrency = () => applyCurrency(localStorage.getItem("treemc_currency") || "INR");

  function initCurrency() {
    const actions = document.querySelector(".nav-actions") || document.querySelector("header .actions") || document.querySelector("nav");
    if (actions && !document.getElementById("treemc-currency")) {
      const sel = document.createElement("select");
      sel.id = "treemc-currency";
      sel.className = "currency-sel";
      sel.setAttribute("aria-label", "Select currency");
      sel.innerHTML = Object.entries(SYMS).map(([k, s]) => `<option value="${k}">${s.trim()} ${k}</option>`).join("");
      const saved = localStorage.getItem("treemc_currency") || "INR";
      sel.value = SYMS[saved] ? saved : "INR";
      sel.addEventListener("change", () => applyCurrency(sel.value));
      actions.prepend(sel);
      if (sel.value !== "INR") applyCurrency(sel.value);
    }
    fetchLiveRates();
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".calc [data-calc] button")) {
      setTimeout(() => {
        const pEl = e.target.closest(".calc")?.querySelector("[data-out=\"price\"]");
        if (pEl && pEl.textContent.includes("₹")) origText.delete(pEl.firstChild);
        window.treemcApplyCurrency();
      }, 0);
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.closest(".calc")) {
      setTimeout(() => {
        const pEl = e.target.closest(".calc")?.querySelector("[data-out=\"price\"]");
        if (pEl && pEl.textContent.includes("₹")) origText.delete(pEl.firstChild);
        window.treemcApplyCurrency();
      }, 0);
    }
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initCurrency);
  else initCurrency();
})();

/* TreeMC Reliable Tab Switcher */
document.addEventListener("click", function(e) {
  const btn = e.target.closest("[data-tab]");
  if (!btn) return;
  const targetId = btn.getAttribute("data-tab");
  const tabset = btn.closest(".tabset");
  if (!tabset) return;
  const panel = tabset.querySelector(":scope > .tab-panel[data-panel=\"" + targetId + "\"], :scope > div > .tab-panel[data-panel=\"" + targetId + "\"]") || document.getElementById(targetId);
  if (!panel) return;
  const parent = panel.parentElement;
  Array.from(parent.children).forEach(ch => {
    if (ch.classList && ch.classList.contains("tab-panel")) {
      if (ch === panel) ch.removeAttribute("hidden");
      else ch.setAttribute("hidden", "");
    }
  });
  const btnGroup = btn.closest("[role=tablist], .toggle");
  if (btnGroup) {
    btnGroup.querySelectorAll("[data-tab]").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
  }
  panel.querySelectorAll(".rv").forEach(rv => { rv.classList.add("in"); rv.style.opacity = "1"; rv.style.transform = "none"; });
});

/* TreeMC Zero-Reload VPS Country Switcher */
document.addEventListener("change", function(e) {
  const sel = e.target.closest("select[data-vps-loc-select]");
  if (!sel) return;
  const country = sel.value;
  const wrap = sel.closest(".loc-dd-wrap");
  const flagImg = wrap && wrap.querySelector("[data-vps-top-flag]");
  const opt = sel.options[sel.selectedIndex];
  if (flagImg && opt && opt.dataset.flag) flagImg.src = opt.dataset.flag;
  document.querySelectorAll("[data-vps-country]").forEach(el => {
    if (el.getAttribute("data-vps-country") === country) {
      el.removeAttribute("hidden");
      el.querySelectorAll(".rv").forEach(rv => { rv.classList.add("in"); rv.style.opacity = "1"; rv.style.transform = "none"; });
    } else {
      el.setAttribute("hidden", "");
    }
  });
  if (window.treemcApplyCurrency) window.treemcApplyCurrency();
});
