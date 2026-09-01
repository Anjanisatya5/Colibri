import type { ReactNode } from 'react';
import { NavItem } from './NavItem';
import { WordMark } from './Logo';
import { Avatar } from './Avatar';

/**
 * Sidebar — the full 220px shell used on Dashboard, Learn with Rubi, Course,
 * and Flashcards. Composed of brand, nav, and a footer stat block.
 *
 *   <Sidebar
 *     items={[{label:'Dashboard', active:true}, ...]}
 *     user={{ initials: 'JR', name: 'Jordan R.' }}
 *     stats={[{label:'Course hours', value:'28 of 40 · to sit the exam'}]}
 *   />
 */

export interface SidebarNavItem {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface SidebarStat {
  label: string;
  value: ReactNode;
}

export interface SidebarUser {
  initials: string;
  name: string;
}

export interface SidebarProps {
  items: SidebarNavItem[];
  stats?: SidebarStat[];
  user?: SidebarUser;
  brandHref?: string;
  onBrandClick?: () => void;
}

export function Sidebar({ items, stats, user, brandHref = '#', onBrandClick }: SidebarProps) {
  return (
    <aside className="sidebar">
      <a
        className="sb-brand"
        href={brandHref}
        onClick={(e) => { if (onBrandClick) { e.preventDefault(); onBrandClick(); } }}
      >
        <WordMark size={19} />
      </a>
      <nav className="sb-nav">
        {items.map((it) => (
          <NavItem key={it.label} active={it.active} disabled={it.disabled} onClick={it.onClick}>
            {it.label}
          </NavItem>
        ))}
      </nav>
      {(stats?.length || user) && (
        <div className="sb-foot">
          {stats?.map((s) => (
            <div className="stat" key={s.label}>
              <span className="lbl">{s.label}</span>
              <span className="val">{s.value}</span>
            </div>
          ))}
          {user && (
            <div className="sb-user">
              <Avatar initials={user.initials} />
              <span className="who">{user.name}</span>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
