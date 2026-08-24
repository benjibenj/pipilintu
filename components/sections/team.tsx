import Image from "next/image"

import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"

export function TeamSection() {
  const { team } = siteContent

  return (
    <Section id="team" title={team.title}>
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2" role="list">
        {team.members.map((member) => (
          <li
            key={member.name}
            className="flex gap-5 rounded-xl bg-card/60 p-4 ring-1 ring-border/60 sm:gap-6 sm:p-5"
          >
            <Image
              src={member.image}
              alt={`Portrait de ${member.name}`}
              width={230}
              height={288}
              sizes="128px"
              className="h-auto w-24 shrink-0 self-start rounded-lg object-cover sm:w-28"
            />

            <div className="min-w-0">
              <h3 className="font-section text-lg leading-tight font-semibold text-foreground sm:text-xl">
                {member.name}
              </h3>
              <p className="mt-1 font-section text-sm tracking-wide text-accent uppercase">
                {member.role}
                {member.nickname ? (
                  <span className="text-muted-foreground normal-case">
                    {" · "}
                    {member.nickname}
                  </span>
                ) : null}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
