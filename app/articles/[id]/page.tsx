import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { articles } from "@/data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors flex-1"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
          <span className="text-sm font-medium text-muted-foreground flex-none">
            盖哥披萨说
          </span>
          <a
            href="mailto:409626407@qq.com"
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex-1 text-right"
          >
            409626407@qq.com
          </a>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-3xl w-full px-6 py-12">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-10">
          <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>
        <div className="flex items-center gap-3 mb-8">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
              {article.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{article.author}</p>
            <p className="text-xs text-muted-foreground">
              {article.role} &middot; {article.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-8">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6">
          {article.title}
        </h1>

        <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回所有文章
          </Link>
        </div>
      </main>

      <footer className="border-t py-8 mt-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-muted-foreground">
          披萨视角 &mdash; 一场关于披萨文化的协作探索。
        </div>
      </footer>
    </div>
  );
}
