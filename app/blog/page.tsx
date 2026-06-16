import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { articles } from "@/data/articles";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  const filtered = type
    ? articles.filter((a) => a.location.includes(type === "american" ? "美国" : "意大利"))
    : articles;

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-primary/20 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/" className="text-xs text-muted-foreground hover:text-primary transition-colors flex-1">
              &larr; 返回首页
            </Link>
            <span className="text-base font-semibold tracking-tight">
              盖哥披萨说
            </span>
            <a
              href="mailto:409626407@qq.com"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex-1 text-right"
            >
              409626407@qq.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/blog"
              className={`${!type ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}`}
            >
              全部文章
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="/blog?type=american"
              className={`${type === "american" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}`}
            >
              美式披萨
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="/blog?type=italian"
              className={`${type === "italian" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground transition-colors"}`}
            >
              意式披萨
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-5xl w-full px-6 pt-10 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-5 w-1 rounded-full bg-primary" />
          <h1 className="text-xl font-bold tracking-tight">
            {type === "american" ? "美式披萨文章" : type === "italian" ? "意式披萨文章" : "全部文章"}
          </h1>
          <span className="text-sm text-muted-foreground">{filtered.length} 篇</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((article) => (
            <a key={article.id} href={"/articles/" + article.id} className="block">
              <Card className="group transition-all duration-200 hover:shadow-sm hover:border-primary/40 overflow-hidden">
                <div className="relative w-full aspect-[3/2]">
                  <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <CardHeader className="pb-2">
                  <div className="h-0.5 w-8 rounded-full bg-primary mb-3" />
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Avatar className="h-8 w-8 shrink-0 ring-2 ring-primary/20">
                      <AvatarFallback className="text-[11px] font-medium bg-primary text-primary-foreground">
                        {article.avatarInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium leading-tight">{article.author}</span>
                      <span className="text-[11px] text-muted-foreground">{article.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-semibold leading-snug tracking-tight mb-1.5">
                    {article.title}
                  </h2>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      阅读全文
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </main>

      <footer className="border-t border-primary/20 py-8 mt-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
          盖哥披萨说 &mdash; 一场关于披萨文化的协作探索。
        </div>
      </footer>
    </div>
  );
}
