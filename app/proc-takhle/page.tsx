import { permanentRedirect } from 'next/navigation'

/**
 * Stránka /proc-takhle byla sloučena s /jak-pracuji.
 *
 * Cílem je zachovat SEO (nepřišly o pozice ve vyhledávači) a
 * neztratit návštěvníky, kteří se na /proc-takhle dostanou ze
 * starých odkazů. Místo 404 chyby získají trvalé přesměrování
 * (HTTP 308 / 301 ekvivalent v Next.js) na novou stránku.
 *
 * Tento soubor lze v budoucnu (zhruba za rok, až Google indexaci
 * srovná) klidně smazat i s celou složkou /proc-takhle.
 */
export default function ProcTakhle() {
  permanentRedirect('/jak-pracuji')
}
