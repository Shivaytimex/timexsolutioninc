import { useEffect, useRef, useState } from "react";
import "./SplashScreen.css";

const SERVICES = [
  { kind: "ai", color: "#a64ff3" },
  { kind: "web", color: "#9333ea" },
  { kind: "app", color: "#7c2d8b" },
  { kind: "marketing", color: "#b665f2" },
  { kind: "seo", color: "#8629d5" },
  { kind: "video", color: "#cc9bf8" },
  { kind: "drone", color: "#751f8c" },
  { kind: "photo", color: "#d9b8ef" },
  { kind: "staffing", color: "#9333ea" },
  { kind: "analytics", color: "#a64ff3" },
  { kind: "design", color: "#7b3aa4" },
  { kind: "cloud", color: "#b665f2" },
];

const ATOM_ORBITS = [
  { x: 1.34, y: 0, z: 0 },
  { x: 1.34, y: 0, z: Math.PI / 3 },
  { x: 1.34, y: 0, z: -Math.PI / 3 },
];

const MICRO_SYMBOLS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);
const easeInOut = (value) => {
  const t = clamp(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function rotate(point, xAngle, yAngle, zAngle = 0) {
  const cx = Math.cos(xAngle);
  const sx = Math.sin(xAngle);
  const cy = Math.cos(yAngle);
  const sy = Math.sin(yAngle);
  const cz = Math.cos(zAngle);
  const sz = Math.sin(zAngle);
  const y1 = point.y * cx - point.z * sx;
  const z1 = point.y * sx + point.z * cx;
  const x2 = point.x * cy + z1 * sy;
  const z2 = -point.x * sy + z1 * cy;
  return { x: x2 * cz - y1 * sz, y: x2 * sz + y1 * cz, z: z2 };
}

function project(point, centerX, centerY, radius) {
  const perspective = 1 / (1.12 - point.z * 0.06);
  return {
    x: centerX + point.x * radius * perspective,
    y: centerY + point.y * radius * perspective,
    z: point.z,
    depth: clamp((point.z + 1) / 2),
    perspective,
  };
}

function drawGlyph(ctx, kind, size) {
  const s = size;
  ctx.strokeStyle = "rgba(255,255,255,.94)";
  ctx.fillStyle = "rgba(255,255,255,.96)";
  ctx.lineWidth = Math.max(0.65, s * 0.085);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (kind === "ai") {
    ctx.strokeRect(-s * 0.2, -s * 0.2, s * 0.4, s * 0.4);
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.065, 0, Math.PI * 2);
    ctx.fill();
    [-0.12, 0.12].forEach((number) => {
      ctx.beginPath();
      ctx.moveTo(number * s, -s * 0.3);
      ctx.lineTo(number * s, -s * 0.2);
      ctx.moveTo(number * s, s * 0.2);
      ctx.lineTo(number * s, s * 0.3);
      ctx.stroke();
    });
  } else if (kind === "web") {
    ctx.strokeRect(-s * 0.28, -s * 0.2, s * 0.56, s * 0.4);
    ctx.beginPath();
    ctx.moveTo(-s * 0.28, -s * 0.08);
    ctx.lineTo(s * 0.28, -s * 0.08);
    ctx.stroke();
  } else if (kind === "app") {
    ctx.beginPath();
    ctx.roundRect(-s * 0.16, -s * 0.29, s * 0.32, s * 0.58, s * 0.04);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, s * 0.21, s * 0.025, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === "marketing") {
    [0.24, 0.13].forEach((radius) => {
      ctx.beginPath();
      ctx.arc(0, 0, s * radius, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.moveTo(s * 0.06, -s * 0.06);
    ctx.lineTo(s * 0.3, -s * 0.3);
    ctx.stroke();
  } else if (kind === "seo") {
    ctx.beginPath();
    ctx.arc(-s * 0.05, -s * 0.05, s * 0.2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s * 0.1, s * 0.1);
    ctx.lineTo(s * 0.29, s * 0.29);
    ctx.stroke();
  } else if (kind === "video") {
    ctx.strokeRect(-s * 0.27, -s * 0.17, s * 0.38, s * 0.34);
    ctx.beginPath();
    ctx.moveTo(s * 0.11, -s * 0.1);
    ctx.lineTo(s * 0.29, -s * 0.2);
    ctx.lineTo(s * 0.29, s * 0.2);
    ctx.lineTo(s * 0.11, s * 0.1);
    ctx.closePath();
    ctx.stroke();
  } else if (kind === "drone") {
    ctx.beginPath();
    ctx.moveTo(-s * 0.2, -s * 0.13);
    ctx.lineTo(s * 0.2, s * 0.13);
    ctx.moveTo(s * 0.2, -s * 0.13);
    ctx.lineTo(-s * 0.2, s * 0.13);
    ctx.stroke();
    [[-0.25, -0.18], [0.25, -0.18], [-0.25, 0.18], [0.25, 0.18]].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x * s, y * s, s * 0.065, 0, Math.PI * 2);
      ctx.stroke();
    });
  } else if (kind === "photo") {
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.09, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-s * 0.18, -s * 0.18);
    ctx.lineTo(s * 0.18, s * 0.18);
    ctx.stroke();
  } else if (kind === "staffing") {
    ctx.beginPath();
    ctx.arc(-s * 0.1, -s * 0.1, s * 0.09, 0, Math.PI * 2);
    ctx.arc(s * 0.13, -s * 0.08, s * 0.075, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-s * 0.1, s * 0.2, s * 0.2, Math.PI * 1.08, Math.PI * 1.92);
    ctx.arc(s * 0.13, s * 0.18, s * 0.16, Math.PI * 1.08, Math.PI * 1.92);
    ctx.stroke();
  } else if (kind === "analytics") {
    [-0.22, -0.05, 0.12].forEach((x, index) => {
      ctx.fillRect(x * s, (0.11 - index * 0.09) * s, s * 0.1, (0.16 + index * 0.11) * s);
    });
    ctx.beginPath();
    ctx.moveTo(-s * 0.25, -s * 0.02);
    ctx.lineTo(-s * 0.07, -s * 0.14);
    ctx.lineTo(s * 0.1, -s * 0.1);
    ctx.lineTo(s * 0.27, -s * 0.27);
    ctx.stroke();
  } else if (kind === "design") {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.28);
    ctx.lineTo(s * 0.22, s * 0.12);
    ctx.lineTo(0, s * 0.29);
    ctx.lineTo(-s * 0.22, s * 0.12);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, s * 0.02, s * 0.055, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(-s * 0.1, s * 0.05, s * 0.13, Math.PI * 0.8, Math.PI * 1.9);
    ctx.arc(s * 0.07, -s * 0.04, s * 0.17, Math.PI * 1.05, Math.PI * 1.92);
    ctx.arc(s * 0.2, s * 0.07, s * 0.11, Math.PI * 1.25, Math.PI * 0.1);
    ctx.lineTo(-s * 0.15, s * 0.18);
    ctx.stroke();
  }
}

function drawPremiumToken(ctx, kind, color, x, y, size, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  const glow = ctx.createRadialGradient(-size * 0.2, -size * 0.26, 0, 0, 0, size * 0.72);
  glow.addColorStop(0, "rgba(255,255,255,.96)");
  glow.addColorStop(0.13, color);
  glow.addColorStop(0.54, "rgba(36,19,50,.97)");
  glow.addColorStop(1, "rgba(5,3,7,.98)");
  ctx.shadowColor = color;
  ctx.shadowBlur = size * 0.9;
  ctx.fillStyle = glow;
  ctx.beginPath();
  for (let index = 0; index < 6; index += 1) {
    const angle = -Math.PI / 2 + index * Math.PI / 3;
    const pointX = Math.cos(angle) * size * 0.5;
    const pointY = Math.sin(angle) * size * 0.5;
    if (index === 0) ctx.moveTo(pointX, pointY);
    else ctx.lineTo(pointX, pointY);
  }
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "rgba(232,235,255,.55)";
  ctx.lineWidth = 0.6;
  ctx.stroke();
  drawGlyph(ctx, kind, size * 0.72);
  ctx.restore();
}

function hasSeenIntro() {
  try {
    return window.sessionStorage.getItem("timex-intro-seen") === "1";
  } catch {
    return false;
  }
}

function rememberIntro() {
  try {
    window.sessionStorage.setItem("timex-intro-seen", "1");
  } catch {
    // Storage can be unavailable in hardened privacy modes; the intro still works.
  }
}

export default function SplashScreen() {
  const shouldShow = typeof window !== "undefined"
    && window.location.pathname === "/"
    && !hasSeenIntro();
  const [isVisible, setIsVisible] = useState(shouldShow);
  const [isLeaving, setIsLeaving] = useState(false);
  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const sweepRef = useRef(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return undefined;
    rememberIntro();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const totalDuration = reduceMotion ? 1800 : 4800;
    const exitDuration = reduceMotion ? 320 : 520;
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), totalDuration - exitDuration);
    const completeTimer = window.setTimeout(() => setIsVisible(false), totalDuration);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;
    const previousOverflow = document.body.style.overflow;
    const siteContent = document.querySelector("[data-timex-site-content]");
    document.body.style.overflow = "hidden";
    document.getElementById("root")?.setAttribute("aria-busy", "true");
    siteContent?.setAttribute("inert", "");
    siteContent?.setAttribute("aria-hidden", "true");
    return () => {
      document.body.style.overflow = previousOverflow;
      document.getElementById("root")?.removeAttribute("aria-busy");
      siteContent?.removeAttribute("inert");
      siteContent?.removeAttribute("aria-hidden");
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    let width = 0;
    let height = 0;
    let frame = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spherePoints = Array.from({ length: 168 }, (_, index) => {
      const y = 1 - index / 167 * 2;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      return {
        x: Math.cos(angle) * radial,
        y,
        z: Math.sin(angle) * radial,
        size: 0.45 + seededRandom(index + 700) * 1.05,
        alpha: 0.28 + seededRandom(index + 950) * 0.6,
        symbol: MICRO_SYMBOLS[index % MICRO_SYMBOLS.length],
      };
    });
    const servicePoints = SERVICES.map((service, index) => {
      const y = 0.86 - index / (SERVICES.length - 1) * 1.72;
      const radial = Math.sqrt(Math.max(0, 1 - y * y));
      const angle = index * Math.PI * (3 - Math.sqrt(5)) + 0.55;
      return { x: Math.cos(angle) * radial, y, z: Math.sin(angle) * radial, ...service };
    });
    const backgroundStars = Array.from({ length: 105 }, (_, index) => ({
      x: seededRandom(index + 25),
      y: seededRandom(index + 400),
      size: 0.25 + seededRandom(index + 780) * 0.85,
      alpha: 0.06 + seededRandom(index + 1100) * 0.24,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const deviceScale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * deviceScale);
      canvas.height = Math.round(height * deviceScale);
      ctx.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    };

    const draw = (now) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const sequenceDuration = 6200;
      const cycle = reduceMotion ? 0.62 : elapsed % sequenceDuration / sequenceDuration;
      const seconds = elapsed / 1000;
      const sequenceSeconds = cycle * (sequenceDuration / 1000);
      const centerX = width * 0.5;
      const centerY = width < 480 ? height * 0.465 : width < 900 ? height * 0.475 : height * 0.49;
      const unit = Math.min(width, height);
      const sphereRadius = width < 480
        ? Math.min(width * 0.465, height * 0.305, 198)
        : width < 900
          ? Math.min(width * 0.405, height * 0.385, 318)
          : width < 1440
            ? Math.min(width * 0.335, height * 0.45, 405)
            : width < 1900
              ? Math.min(width * 0.296, height * 0.45, 496)
              : Math.min(width * 0.27, height * 0.46, 596);
      const lineScale = clamp(sphereRadius / 300, 0.62, 1.38);

      ctx.clearRect(0, 0, width, height);
      const backdrop = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(width, height) * 0.72);
      backdrop.addColorStop(0, "#120a17");
      backdrop.addColorStop(0.46, "#050307");
      backdrop.addColorStop(1, "#000000");
      ctx.fillStyle = backdrop;
      ctx.fillRect(0, 0, width, height);
      backgroundStars.forEach((star, index) => {
        const twinkle = 0.58 + Math.sin(seconds * (0.42 + index % 5 * 0.08) + index) * 0.42;
        ctx.beginPath();
        ctx.fillStyle = `rgba(204,155,248,${star.alpha * twinkle})`;
        ctx.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const ignition = easeOut((cycle - 0.004) / 0.05);
      const build = easeOut((cycle - 0.012) / 0.1);
      const collapse = easeInOut((cycle - 0.325) / 0.095);
      const numberFade = easeInOut((cycle - 0.382) / 0.045);
      const ringFade = easeInOut((cycle - 0.407) / 0.035);
      const sphereAlpha = clamp(build * (1 - numberFade));
      const radiusFactor = build;
      const holdStrength = 1 - collapse;
      const orbitProgress = easeInOut((cycle - 0.03) / 0.295);
      const doubleTurn = orbitProgress * Math.PI * 4;
      const ringX = (-0.055 + Math.sin(sequenceSeconds * 0.52) * 0.04) * holdStrength + collapse * Math.PI * 0.525;
      const ringY = doubleTurn + collapse * 0.035;
      const ringZ = orbitProgress * 0.38 * holdStrength;
      const dataY = doubleTurn + collapse * 0.16;
      const dataX = -0.085 + Math.sin(sequenceSeconds * 0.34) * 0.055;
      const dataZ = Math.sin(sequenceSeconds * 0.27) * 0.028;

      ATOM_ORBITS.forEach((orbit, index) => {
        const ringBuild = easeOut((cycle - 0.008 - index * 0.008) / 0.075);
        const ringPresence = ringBuild * (1 - ringFade);
        if (ringPresence < 0.01) return;
        const segments = 116;
        const visibleSegments = Math.max(2, Math.floor(segments * ringBuild));
        let previous = null;
        for (let segment = 0; segment <= visibleSegments; segment += 1) {
          const angle = segment / segments * Math.PI * 2;
          const local = rotate(
            { x: Math.cos(angle), y: Math.sin(angle), z: 0 },
            orbit.x,
            orbit.y,
            orbit.z,
          );
          const rotated = rotate(local, ringX, ringY, ringZ);
          const screen = project(rotated, centerX, centerY, sphereRadius * radiusFactor);
          if (previous) {
            const depth = (screen.depth + previous.depth) * 0.5;
            const progress = segment / segments;
            const lightPosition = (orbitProgress * 2 + index / 3) % 1;
            const rawDistance = Math.abs(progress - lightPosition);
            const lightDistance = Math.min(rawDistance, 1 - rawDistance);
            const lightTrail = Math.exp(-(lightDistance * lightDistance) / 0.008);
            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(screen.x, screen.y);
            ctx.strokeStyle = `rgba(235,240,249,${ringPresence * (0.28 + depth * 0.4 + lightTrail * 0.23)})`;
            ctx.lineWidth = (0.86 + depth * 0.3 + lightTrail * 0.16) * lineScale;
            ctx.shadowColor = "rgba(166,79,243,.86)";
            ctx.shadowBlur = depth > 0.63 || lightTrail > 0.45 ? 5 : 1.5;
            ctx.stroke();
          }
          previous = screen;
        }
      });
      ctx.shadowBlur = 0;

      spherePoints.map((point, index) => {
        const rotated = rotate(point, dataX, dataY, dataZ);
        return { point, index, screen: project(rotated, centerX, centerY, sphereRadius * radiusFactor * 0.7) };
      }).sort((a, b) => a.screen.z - b.screen.z).forEach(({ point, screen }) => {
        const alpha = sphereAlpha * point.alpha * (0.28 + screen.depth * 0.72);
        ctx.font = `${Math.max(4.4, (5.2 + screen.depth * 1.15) * lineScale)}px ui-monospace, SFMono-Regular, monospace`;
        ctx.fillStyle = `rgba(233,221,246,${alpha * 0.58})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(point.symbol, screen.x, screen.y);
      });

      servicePoints.map((point) => {
        const rotated = rotate(point, dataX, dataY, dataZ);
        return { point, screen: project(rotated, centerX, centerY, sphereRadius * radiusFactor * 0.72) };
      }).sort((a, b) => a.screen.z - b.screen.z).forEach(({ point, screen }) => {
        const base = width < 480 ? 0.68 : width < 900 ? 0.84 : width < 1500 ? 1 : width < 1900 ? 1.1 : 1.25;
        const size = (10.5 + screen.depth * 7.5) * base;
        drawPremiumToken(ctx, point.kind, point.color, screen.x, screen.y, size, sphereAlpha * (0.64 + screen.depth * 0.36));
      });

      const logoIn = easeOut((cycle - 0.415) / 0.07);
      const logoOut = easeInOut((cycle - 0.93) / 0.055);
      const logoAlpha = clamp(logoIn * (1 - logoOut));
      if (logoRef.current) {
        logoRef.current.style.opacity = String(logoAlpha);
        logoRef.current.style.transform = `perspective(900px) translateY(${(1 - logoIn) * 8 - logoOut * 4}px) rotateY(${(1 - logoIn) * -58 + logoOut * 20}deg) scale(${0.88 + logoIn * 0.12 - logoOut * 0.045})`;
        logoRef.current.style.filter = `blur(${(1 - logoIn) * 9 + logoOut * 4}px)`;
      }
      if (sweepRef.current) {
        const sweepProgress = clamp((cycle - 0.405) / 0.13);
        sweepRef.current.style.opacity = String(clamp(1 - Math.abs(sweepProgress - 0.5) * 2.25) * (1 - logoOut));
        sweepRef.current.style.transform = `translateX(${(sweepProgress * 2 - 1) * 360}px)`;
      }

      const corePresence = clamp(ignition * (1 - logoIn * 0.96));
      const flarePower = clamp(0.5 + collapse * 1.45);
      const pulse = 0.86 + Math.sin(seconds * 7.4) * 0.14;
      const glowSize = unit * (0.028 + collapse * 0.042) * pulse;
      const core = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowSize * 7.2);
      core.addColorStop(0, `rgba(255,255,255,${corePresence})`);
      core.addColorStop(0.07, `rgba(233,221,246,${corePresence * 0.9})`);
      core.addColorStop(0.22, `rgba(166,79,243,${corePresence * 0.34})`);
      core.addColorStop(1, "rgba(107,33,168,0)");
      ctx.fillStyle = core;
      ctx.fillRect(centerX - glowSize * 8, centerY - glowSize * 8, glowSize * 16, glowSize * 16);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.globalAlpha = corePresence;
      ctx.strokeStyle = "rgba(255,255,255,.95)";
      ctx.shadowColor = "#cc9bf8";
      ctx.shadowBlur = 14;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(-unit * 0.075 * flarePower, 0);
      ctx.lineTo(unit * 0.075 * flarePower, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -unit * 0.034 * pulse);
      ctx.lineTo(0, unit * 0.034 * pulse);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(1.5, unit * 0.004 * pulse), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <main
      className={`timex-preloader${isLeaving ? " timex-preloader--leaving" : ""}`}
      aria-label="Timex Solution capability animation"
      role="status"
    >
      <canvas ref={canvasRef} className="motion-canvas" aria-hidden="true" />
      <div className="brand-lockup" aria-label="Timex Solution Inc">
        <div ref={logoRef} className="brand-text-3d">
          <span className="brand-text-layer brand-text-back" aria-hidden="true">
            <span className="brand-name">Timex</span>
            <span className="brand-company">Solution Inc</span>
          </span>
          <span className="brand-text-layer brand-text-mid" aria-hidden="true">
            <span className="brand-name">Timex</span>
            <span className="brand-company">Solution Inc</span>
          </span>
          <span className="brand-text-layer brand-text-main">
            <span className="brand-name">Timex</span>
            <span className="brand-company">Solution Inc</span>
          </span>
        </div>
        <div ref={sweepRef} className="brand-sweep" aria-hidden="true" />
      </div>
    </main>
  );
}
