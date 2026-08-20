import { Section } from "@/components/layout/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteContent } from "@/lib/content/site.fr"

export function TeamSection() {
  const { team } = siteContent

  return (
    <Section
      id="team"
      title={team.title}
      description={team.description}
    >
      <ul
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {team.members.map((member) => (
          <li key={member.name}>
            <Card size="sm" className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                {member.nickname ? (
                  <p className="text-sm text-accent">{member.nickname}</p>
                ) : null}
              </CardHeader>
              <CardContent>
                <p className="font-medium text-foreground">{member.role}</p>
                {member.skills.length > 0 ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.skills.join(" · ")}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
