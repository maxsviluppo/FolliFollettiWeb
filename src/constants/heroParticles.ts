export type DustParticle = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

export type FireflyParticle = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  tx1: number;
  ty1: number;
  tx2: number;
  ty2: number;
  tx3: number;
  ty3: number;
};

export const DUST_PARTICLES: DustParticle[] = [
  { id: 1, left: 12, top: 28, size: 3, delay: 0, duration: 14, drift: 18 },
  { id: 2, left: 22, top: 45, size: 2, delay: 1.2, duration: 16, drift: -12 },
  { id: 3, left: 35, top: 22, size: 4, delay: 0.5, duration: 18, drift: 22 },
  { id: 4, left: 48, top: 38, size: 2.5, delay: 2.1, duration: 15, drift: -16 },
  { id: 5, left: 55, top: 18, size: 3.5, delay: 0.8, duration: 17, drift: 14 },
  { id: 6, left: 62, top: 42, size: 2, delay: 3.2, duration: 19, drift: -20 },
  { id: 7, left: 70, top: 30, size: 3, delay: 1.5, duration: 16, drift: 10 },
  { id: 8, left: 78, top: 48, size: 2, delay: 2.8, duration: 14, drift: -14 },
  { id: 9, left: 85, top: 25, size: 4, delay: 0.3, duration: 20, drift: 16 },
  { id: 10, left: 18, top: 55, size: 2.5, delay: 4, duration: 15, drift: -10 },
  { id: 11, left: 42, top: 52, size: 3, delay: 1.8, duration: 17, drift: 12 },
  { id: 12, left: 58, top: 58, size: 2, delay: 2.5, duration: 18, drift: -18 },
  { id: 13, left: 72, top: 62, size: 3.5, delay: 0.6, duration: 16, drift: 8 },
  { id: 14, left: 88, top: 40, size: 2, delay: 3.5, duration: 19, drift: -12 },
  { id: 15, left: 30, top: 35, size: 2, delay: 5, duration: 21, drift: 20 },
  { id: 16, left: 50, top: 32, size: 3, delay: 1.1, duration: 15, drift: -8 },
  { id: 17, left: 65, top: 50, size: 2.5, delay: 2.2, duration: 17, drift: 14 },
  { id: 18, left: 40, top: 62, size: 2, delay: 3.8, duration: 18, drift: -16 },
  { id: 19, left: 92, top: 55, size: 3, delay: 0.9, duration: 16, drift: 10 },
  { id: 20, left: 8, top: 42, size: 2.5, delay: 4.5, duration: 20, drift: -22 },
];

export const FIREFLIES: FireflyParticle[] = [
  { id: 1, left: 15, top: 32, size: 5, delay: 0, duration: 7, tx1: 22, ty1: -18, tx2: -14, ty2: -35, tx3: 16, ty3: -12 },
  { id: 2, left: 28, top: 52, size: 4, delay: 1.2, duration: 8.5, tx1: -18, ty1: 24, tx2: 26, ty2: -16, tx3: -8, ty3: 18 },
  { id: 3, left: 42, top: 26, size: 6, delay: 2.1, duration: 6.8, tx1: 30, ty1: -12, tx2: 12, ty2: 28, tx3: -20, ty3: 10 },
  { id: 4, left: 64, top: 38, size: 5, delay: 0.7, duration: 9, tx1: -25, ty1: -22, tx2: -8, ty2: 18, tx3: 22, ty3: -14 },
  { id: 5, left: 78, top: 22, size: 4.5, delay: 3.2, duration: 7.6, tx1: 18, ty1: 26, tx2: -24, ty2: 12, tx3: 10, ty3: -20 },
  { id: 6, left: 85, top: 58, size: 5.5, delay: 1.8, duration: 8, tx1: -20, ty1: -28, tx2: 18, ty2: -14, tx3: -12, ty3: 22 },
  { id: 7, left: 22, top: 72, size: 4, delay: 2.7, duration: 9.2, tx1: 26, ty1: -16, tx2: -18, ty2: -30, tx3: 14, ty3: 12 },
  { id: 8, left: 52, top: 68, size: 6, delay: 0.4, duration: 7.2, tx1: -16, ty1: 22, tx2: 28, ty2: -18, tx3: -14, ty3: -26 },
  { id: 9, left: 34, top: 40, size: 4.5, delay: 3.9, duration: 8.8, tx1: 22, ty1: 18, tx2: -20, ty2: -24, tx3: 16, ty3: -8 },
  { id: 10, left: 70, top: 65, size: 5, delay: 1.5, duration: 7.8, tx1: -28, ty1: -14, tx2: 14, ty2: 24, tx3: -18, ty3: 10 },
  { id: 11, left: 48, top: 18, size: 4, delay: 2.3, duration: 8.2, tx1: 18, ty1: -22, tx2: -22, ty2: 16, tx3: 12, ty3: 20 },
  { id: 12, left: 90, top: 35, size: 5, delay: 4.1, duration: 7.4, tx1: -24, ty1: 18, tx2: -12, ty2: -26, tx3: 20, ty3: 14 },
];
