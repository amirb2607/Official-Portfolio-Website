'use client';

import { IconProvider } from '@once-ui-system/core';
import { iconLibrary } from '@/once-ui/icons';

export function IconProviders({ children }: { children: React.ReactNode }) {
  return <IconProvider icons={iconLibrary}>{children}</IconProvider>;
}
