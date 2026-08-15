// src/tokens/tokens.ts
export const tokens = {
  colors: {
    bgPrimary: 'var(--color-bg-primary)',
    bgSurface: 'var(--color-bg-surface)',
    bgSubtle: 'var(--color-bg-subtle)',
    textPrimary: 'var(--color-text-primary)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
    accentPrimary: 'var(--color-accent-primary)',
    accentSubtle: 'var(--color-accent-subtle)',
    badgeAlertBg: 'var(--color-badge-alert-bg)',
    badgeAlertText: 'var(--color-badge-alert-text)',
  },
  animation: {
    durationFast: 0.2,
    durationMedium: 0.5,
    easeOutCustom: [0.25, 0.1, 0.25, 1.0],
  },
} as const;