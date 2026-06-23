'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { LayoutGrid, List, Menu } from 'lucide-react'

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <aside
        className={cn(
          'flex w-[220px] shrink-0 flex-col bg-[#0b2a4a] text-white transition-[margin,width] duration-200',
          'max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:z-40',
          !sidebarOpen && 'max-lg:-ml-[220px]'
        )}
      >
        <div className="border-b border-white/10 px-4 py-5">
          <div className="text-lg font-bold tracking-tight">iCity Inc.</div>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg bg-white/15 px-3 py-2.5 text-left text-sm font-semibold text-white"
          >
            <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden />
            SA Code Master
          </button>
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/85 transition hover:bg-white/10"
          >
            <List className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            SA Code Detail
          </button>
        </nav>
        <div className="border-t border-white/10 p-4">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white"
            aria-hidden
          >
            N
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">Code Master</h1>
        </header>

        <div className="px-3 pb-8 pt-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <h2 className="text-[12px] font-semibold text-slate-900">Code Master</h2>
            <p className="mt-1 text-[11px] text-slate-600">
              This is a simple placeholder page. Add your Code Master UI here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
