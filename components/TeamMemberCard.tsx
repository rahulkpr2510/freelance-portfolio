import { Github, Linkedin, Globe } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  initials?: string;
  avatarUrl?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export function TeamMemberCard({
  name,
  role,
  initials,
  avatarUrl,
  github,
  linkedin,
  website,
}: TeamMember) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/60 flex flex-col justify-between transition-all hover:border-fuchsia-400/30 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-fuchsia-500/5">
      {/* Top: Avatar + Info */}
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-zinc-800"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-zinc-900 grid place-items-center font-semibold text-sm ring-2 ring-zinc-800 text-zinc-300">
            {initials}
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-xs text-zinc-400">{role}</div>
        </div>
      </div>

      {/* Bottom: Socials */}
      <div className="mt-4 flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-zinc-800 hover:border-fuchsia-400/40 hover:text-fuchsia-400 text-zinc-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-zinc-800 hover:border-fuchsia-400/40 hover:text-fuchsia-400 text-zinc-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-zinc-800 hover:border-fuchsia-400/40 hover:text-fuchsia-400 text-zinc-400 transition-colors"
            aria-label="Website"
          >
            <Globe className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
