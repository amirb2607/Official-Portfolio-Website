// src/lib/presence.ts
type Presence = {
  label: "Online" | "Busy" | "Offline";
  color: "green" | "yellow" | "red";
};

type DayType = "weekday" | "weekend";

type Schedule = Record<
  DayType,
  {
    sleep: Array<{ start: string; end: string }>;
    work: Array<{ start: string; end: string }>;
  }
>;

const SCHEDULE: Schedule = {
  weekday: {
    sleep: [{ start: "21:00", end: "06:30" }],
    work: [{ start: "07:00", end: "17:00" }],
  },
  weekend: {
    sleep: [{ start: "01:00", end: "08:30" }],
    work: [],
  },
};

function hhmmToMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function isInRange(nowMin: number, start: string, end: string) {
  const s = hhmmToMinutes(start);
  const e = hhmmToMinutes(end);
  if (s <= e) return nowMin >= s && nowMin < e;
  return nowMin >= s || nowMin < e;
}

function getNYTimeParts(timeZone: string) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",        // Changed from "2-digit"
    minute: "numeric",      // Changed from "2-digit"
    hour12: false,
    weekday: "short",
  });

  const parts = fmt.formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hourStr = parts.find((p) => p.type === "hour")?.value ?? "0";
  const minuteStr = parts.find((p) => p.type === "minute")?.value ?? "0";
  
  // Explicitly parse with parseInt to handle single digits
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  return { weekday, nowMin: hour * 60 + minute };
}

function dayTypeFromWeekday(weekday: string): DayType {
  return weekday === "Sat" || weekday === "Sun" ? "weekend" : "weekday";
}

export function getPresenceStatus(timeZone = "America/New_York"): Presence {
  const { weekday, nowMin } = getNYTimeParts(timeZone);
  const dayType = dayTypeFromWeekday(weekday);
  const rules = SCHEDULE[dayType];

  if (rules.sleep.some((r) => isInRange(nowMin, r.start, r.end))) {
    return { label: "Offline", color: "red" };
  }
  if (rules.work.some((r) => isInRange(nowMin, r.start, r.end))) {
    return { label: "Busy", color: "yellow" };
  }
  return { label: "Online", color: "green" };
}
