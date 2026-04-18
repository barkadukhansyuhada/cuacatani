"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Columns3, Info } from "lucide-react";
import { useCompare } from "@/hooks/useCompare";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Beranda", icon: Home },
  { href: "/cari", label: "Cari", icon: Search },
  { href: "/bandingkan", label: "Bandingkan", icon: Columns3 },
  { href: "/metodologi", label: "Info", icon: Info },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  const { compareIds } = useCompare();

  return (
    <nav className="no-print fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-lg">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/dashboard"
              ? pathname === "/dashboard" || pathname === "/dashboard/"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? "text-green-700"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
              {href === "/bandingkan" && compareIds.length > 0 && (
                <span className="absolute right-1/4 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
                  {compareIds.length}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
