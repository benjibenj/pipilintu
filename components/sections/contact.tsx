import Link from "next/link"
import { Camera, Mail, MessageCircle } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content/site.fr"
import { CONTACT } from "@/lib/constants"

export function ContactSection() {
  const { contact } = siteContent

  return (
    <Section
      id="contact"
      title={contact.title}
      description={contact.description}
      className="bg-card/30"
    >
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" role="list">
        <li>
          <Button
            variant="outline"
            size="lg"
            render={<Link href={`mailto:${CONTACT.email}`} />}
          >
            <Mail aria-hidden="true" />
            {contact.emailLabel}
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            size="lg"
            render={
              <Link
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <Camera aria-hidden="true" />
            {contact.instagramLabel}
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            size="lg"
            render={
              <Link
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle aria-hidden="true" />
            {contact.whatsappLabel}
          </Button>
        </li>
      </ul>
    </Section>
  )
}
