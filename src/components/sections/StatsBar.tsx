import { Container } from "@/components/layout/Container";
import { stats } from "@/content/site";

/**
 * Bande de chiffres clés : bordures haute et basse, 4 items séparés par des
 * filets verticaux 1px. En 2×2 sur mobile, sans filets.
 */
export function StatsBar() {
  return (
    <section aria-label="Chiffres clés" className="border-y border-line bg-surface">
      <Container>
        <ul className="grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
          {stats.items.map((item, index) => (
            <li
              key={item.label}
              className={
                index === 0
                  ? "px-4 text-center lg:px-8"
                  : "px-4 text-center lg:border-l lg:border-line lg:px-8"
              }
            >
              <p className="font-display text-[2rem] font-bold leading-none tracking-[-0.02em] text-ink lg:text-[2.25rem]">
                {item.value}
              </p>
              <p className="mt-3 text-small text-ink-soft">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
