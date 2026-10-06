'use client';

import { useRouter } from 'next/navigation';
import PrivacyPage from './PrivacyPage';

export default function PrivacyPageClient() {
  const router = useRouter();
  return <PrivacyPage onBackHome={() => router.push('/')} />;
}
