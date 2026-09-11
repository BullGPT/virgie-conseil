import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import type { Post } from "@/content/site";
import { news } from "@/content/site";
import { formatDate } from "@/lib/utils";

/** Carte article : image 16:9, date, titre, extrait coupé à 3 lignes. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden">
      {/* Couverture décorative ici : le titre juste en dessous porte
          l'information. Le alt rédigé dans content/site.ts est utilisé sur
          la page de l'article. */}
      <Image
        src={post.cover.src}
        alt=""
        width={post.cover.width}
        height={post.cover.height}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="aspect-video h-auto w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-7">
        <p className="text-small text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="mt-3 text-h3 text-ink">
          <Link
            href={`/actualites/${post.slug}`}
            className="after:absolute after:inset-0 hover:text-signal"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-body text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-small font-medium text-signal">
          {news.readMoreLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Card>
  );
}
