<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import binqLogo from "@/assets/logo/binq.jpg";
import type { Map as LeafletMap } from "leaflet";
import { onMounted, onUnmounted, ref } from "vue";

const mapEl = ref<HTMLElement>();
let map: LeafletMap | null = null;

const DEFAULT_HOURS = ["Sun – Thu: 1:00 PM – 11:00 PM", "Fri – Sat: 1:00 PM – 11:30 PM"];

const OUTLETS: {
  name: string;
  area: string;
  phone: string;
  coords: [number, number];
  mapsUrl: string;
  hours?: string[];
  badge?: string;
}[] = [
  {
    name: "Desa Sri Hartamas",
    area: "Kuala Lumpur",
    phone: "03-5888 5453",
    coords: [3.1619, 101.6571] as [number, number],
    mapsUrl: "https://share.google/rTjNqgakWm7zmJuGe",
  },
  {
    name: "SS15",
    area: "Subang Jaya",
    phone: "03-5888 5453",
    coords: [3.0772, 101.5779] as [number, number],
    mapsUrl: "https://share.google/ePjDMj9NlJb2gqDq1",
  },
  {
    name: "SS2",
    area: "Petaling Jaya",
    phone: "03-5888 5453",
    coords: [3.1159, 101.6257] as [number, number],
    mapsUrl: "https://share.google/QkxXFiHSPKRwaYhTu",
  },
  {
    name: "Damansara Uptown",
    area: "Petaling Jaya",
    phone: "03-5888 5453",
    coords: [3.1488, 101.6162] as [number, number],
    mapsUrl: "https://share.google/ml9FNXW9d7f2KjGOQ",
  },
  {
    name: "Taman Segar",
    area: "Cheras",
    phone: "03-5888 5453",
    coords: [3.0749, 101.7397] as [number, number],
    mapsUrl: "https://share.google/rOz3Vn5V7U1X9V51T",
  },
  {
    name: "Sunway Square",
    area: "Bandar Sunway",
    phone: "03-5888 5453",
    coords: [3.0646, 101.6058] as [number, number],
    mapsUrl: "https://share.google/OLsShuKEdEWos2JGd",
    hours: ["Mon – Sun: 10:00 AM – 10:00 PM"],
    badge: "Mall",
  },
];

onMounted(async () => {
  if (!mapEl.value) return;
  const L = await import("leaflet");

  map = L.map(mapEl.value, { zoomControl: true }).setView([3.113, 101.659], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  const pinIcon = (label: string) =>
    L.divIcon({
      className: "",
      html: `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
        <div style="background:#fff5ea;border:2px solid #d26624;border-radius:50%;width:38px;height:38px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.25)">
          <img src="${binqLogo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%" />
        </div>
        <div style="background:#d26624;color:#fff5ea;padding:2px 7px;border-radius:20px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.2)">${label}</div>
      </div>`,
      iconSize: [38, 60],
      iconAnchor: [19, 60],
      popupAnchor: [0, -60],
    });

  OUTLETS.forEach((outlet) => {
    L.marker(outlet.coords, { icon: pinIcon(outlet.name) })
      .addTo(map!)
      .bindPopup(
        `<div style="font-family:sans-serif;min-width:160px">
          <p style="font-weight:700;font-size:14px;margin:0 0 2px">Binq Dessert ${outlet.name}</p>
          <p style="font-size:12px;color:#888;margin:0 0 4px">${outlet.area}</p>
          <p style="font-size:12px;margin:0 0 6px">📞 ${outlet.phone}</p>
          <a href="${outlet.mapsUrl}" target="_blank" rel="noreferrer"
            style="font-size:12px;font-weight:600;color:#d26624;text-decoration:none">
            Open in Google Maps →
          </a>
        </div>`
      );
  });
});

onUnmounted(() => {
  map?.remove();
  map = null;
});
</script>

<template>
  <div class="bg-creamwhitebq py-32 px-12 sm:px-14 md:px-20 text-darkorangebq">
    <div class="mb-16">
      <h1 class="header-font font-extrabold text-5xl sm:text-7xl xl:text-8xl pb-4">
        Find Us
      </h1>
      <p class="body-font text-xl xl:text-2xl tracking-wide">
        6 outlets across Klang Valley — find the one nearest to you
      </p>
    </div>

    <!-- Leaflet map with outlet pins -->
    <div ref="mapEl" class="w-full rounded-3xl overflow-hidden mb-14 border-2 border-darkorangebq border-opacity-20" style="height: 420px;" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="outlet in OUTLETS"
        :key="outlet.name"
        :href="outlet.mapsUrl"
        target="_blank"
        rel="noreferrer"
        class="group flex flex-col justify-between border-2 border-darkorangebq rounded-2xl p-6 hover:bg-orangebq hover:text-creamwhitebq hover:border-orangebq transition-colors duration-200 min-w-0"
      >
        <div class="min-w-0">
          <p class="body-font text-sm xl:text-base font-semibold uppercase tracking-widest pb-2 opacity-60 truncate">
            {{ outlet.area }}
          </p>
          <h2 class="header-font font-bold text-2xl xl:text-3xl pb-4 leading-tight break-words">
            {{ outlet.name }}
            <span
              v-if="outlet.badge"
              class="body-font align-middle inline-block text-xs xl:text-sm font-semibold uppercase tracking-widest border-2 border-current rounded-full px-2.5 py-0.5 ml-1 relative -top-0.5"
            >
              {{ outlet.badge }}
            </span>
          </h2>
        </div>
        <div class="body-font text-sm xl:text-base tracking-wide">
          <p v-for="(line, i) in outlet.hours ?? DEFAULT_HOURS" :key="line" :class="i > 0 ? 'pt-1' : ''">
            {{ line }}
          </p>
          <p class="pt-4 font-semibold flex items-center gap-1 group-hover:underline">
            Open in Maps →
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
