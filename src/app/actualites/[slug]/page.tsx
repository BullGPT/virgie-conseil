import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { news, posts } from "@/content/site";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

/** Génère les routes statiques pour les articles connus. */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-surface py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 text-small font-medium text-signal underline-offset-4 hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {news.backLabel}
          </Link>

          <SectionMarker className="mb-6 mt-10" />
          <p className="text-small text-ink-soft">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h1 className="mt-3 text-h1 text-ink">{post.title}</h1>

          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={post.cover.width}
            height={post.cover.height}
            priority
            sizes="(min-width: 800px) 760px, 100vw"
            className="mt-10 aspect-video h-auto w-full rounded-2xl border border-line object-cover"
          />

          {/* Corps de l'article. Prose stylée à la main : pas de plugin. */}
          <div className="mt-10 flex flex-col gap-6">
            <p className="text-h3 font-normal leading-[1.5] text-ink">
              {post.excerpt}
            </p>
            {post.body.map((paragraph) => (
              <p key={paragraph} className="text-body text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-small font-medium text-signal underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {news.backLabel}
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
