import { Button } from '@/components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex max-w-[320px] flex-col justify-center gap-4">
        <h1 className="text-center text-3xl font-bold tracking-tighter text-white">
          Get started by editing src/app/page.tsx
        </h1>

        <Button variant={'default'}>Default Button</Button>
        <Button variant={'outline'}>Outline Button</Button>

        <hr className="w-full border border-[#333]" />
        <Link
          href={'https://github.com/tellay'}
          className="text-center text-[#3291ff] hover:underline"
        >
          My GitHub →
        </Link>
      </div>
    </div>
  )
}
