import { DatePipe } from '@angular/common';
import { Component, afterNextRender, signal } from '@angular/core';
import { profile } from '../../../data/portfolio.data';

interface GithubUser {
  login: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  created_at: string;
}

interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  pushed_at: string;
  html_url: string;
}

interface GithubData {
  user: GithubUser;
  repos: GithubRepo[];
}

const CACHE_KEY = 'github-panel';
const REPO_COUNT = 4;

/**
 * Live GitHub activity, fetched in the browser from the public GitHub API.
 * The prerendered page shows only the profile link; the avatar, counts and
 * recent repositories appear once the request succeeds, and are skipped if not.
 */
@Component({
  selector: 'app-github-panel',
  imports: [DatePipe],
  template: `
    <aside class="panel">
      <div class="who">
        @if (data(); as github) {
          <img
            class="avatar"
            [src]="github.user.avatar_url"
            alt="GitHub avatar of {{ profile.name }}"
            width="64"
            height="64"
            loading="lazy"
          />
        }
        <div>
          <p class="eyebrow">Live from GitHub</p>
          <p class="handle">&#64;{{ username }}</p>
          @if (data(); as github) {
            <p class="muted">
              {{ github.user.public_repos }} public repositories · on GitHub since
              {{ github.user.created_at | date: 'y' }}
            </p>
          } @else {
            <p class="muted">The code behind these projects is public.</p>
          }
        </div>
        <a class="btn" [href]="profile.github" target="_blank" rel="noopener me">
          View profile <span aria-hidden="true">↗</span>
        </a>
      </div>

      @if (data(); as github) {
        <ul class="repos">
          @for (repo of github.repos; track repo.name) {
            <li>
              <a [href]="repo.html_url" target="_blank" rel="noopener">
                <span class="repo-name">{{ repo.name }}</span>
                @if (repo.description) {
                  <span class="repo-desc">{{ repo.description }}</span>
                }
                <span class="repo-meta">
                  @if (repo.language) {
                    <span>{{ repo.language }}</span>
                  }
                  <span>Updated {{ repo.pushed_at | date: 'MMM y' }}</span>
                </span>
              </a>
            </li>
          }
        </ul>
      }
    </aside>
  `,
  styles: `
    .panel {
      margin-top: 1.25rem;
      padding: clamp(1.4rem, 3vw, 2rem);
      background: var(--bg-elev);
      border: 1px solid var(--line);
      border-radius: var(--radius);
    }

    .who {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem 1.25rem;
    }

    .who > div {
      flex: 1 1 14rem;
    }

    .avatar {
      border-radius: 50%;
      border: 1px solid var(--line-strong);
    }

    .handle {
      font-family: var(--font-serif);
      font-size: 1.75rem;
      line-height: 1.2;
    }

    .repos {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--line);

      a {
        display: grid;
        gap: 0.4rem;
        align-content: start;
        height: 100%;
        padding: 1rem 1.1rem;
        background: var(--bg);
        border: 1px solid var(--line);
        border-radius: 10px;
        transition: border-color 0.25s ease;
      }

      a:hover {
        border-color: var(--accent);
      }
    }

    .repo-name {
      font-weight: 600;
      overflow-wrap: anywhere;
    }

    .repo-desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    .repo-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.2rem 0.9rem;
      margin-top: auto;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--text-muted);
    }

    @media (max-width: 960px) {
      .repos {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 560px) {
      .repos {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class GithubPanel {
  protected readonly profile = profile;
  protected readonly username = profile.github.split('/').pop()!;
  protected readonly data = signal<GithubData | null>(null);

  constructor() {
    afterNextRender(() => {
      void this.load();
    });
  }

  private async load(): Promise<void> {
    const cached = this.readCache();
    if (cached) {
      this.data.set(cached);
      return;
    }

    try {
      const api = `https://api.github.com/users/${this.username}`;
      const [userResponse, reposResponse] = await Promise.all([
        fetch(api),
        fetch(`${api}/repos?sort=pushed&per_page=20`),
      ]);
      if (!userResponse.ok || !reposResponse.ok) {
        return;
      }

      const user: GithubUser = await userResponse.json();
      const allRepos: GithubRepo[] = await reposResponse.json();
      // Skip forks and the profile-readme repository, which is named after the user.
      const repos = allRepos
        .filter((repo) => !repo.fork && repo.name !== user.login)
        .slice(0, REPO_COUNT);

      const data = { user, repos };
      this.data.set(data);
      this.writeCache(data);
    } catch {
      // Offline or rate-limited: the panel keeps its static link.
    }
  }

  private readCache(): GithubData | null {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      return raw ? (JSON.parse(raw) as GithubData) : null;
    } catch {
      return null;
    }
  }

  private writeCache(data: GithubData): void {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch {
      // Storage can be blocked; the next visit simply fetches again.
    }
  }
}
