/**
 * Validates lib/content/projections.yml with the same code the site build
 * uses. Run with `npm run check:projections`; also runs on GitHub for every
 * commit touching the file, where the error is attached to the file.
 */
import { getProjections } from "@/lib/projections"

try {
  console.log(`✓ ${getProjections().length} valid screening(s)`)
} catch (error) {
  const message = (error as Error).message
  if (process.env.GITHUB_ACTIONS) {
    const annotation = message.replaceAll("\n", "%0A")
    console.log(`::error file=lib/content/projections.yml::${annotation}`)
  } else {
    console.error(`✗ ${message}`)
  }
  process.exit(1)
}
