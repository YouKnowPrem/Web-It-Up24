'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return (
    <>
      <script src="https://core.sanity-cdn.com/bridge.js" async type="module" />
      <NextStudio config={config} />
    </>
  );
}

