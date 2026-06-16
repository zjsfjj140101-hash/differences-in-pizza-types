import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

function Header() {
  return (
    <header className="border-b border-primary/20 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center gap-3">
        <span className="text-base font-semibold tracking-tight flex-1">
          盖哥披萨说
        </span>
        <a
          href="mailto:409626407@qq.com"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          409626407@qq.com
        </a>
      </div>
    </header>
  );
}

function NavBar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-5xl px-6 py-3 flex items-center gap-6 text-sm">
        <Link
          href="/history"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          披萨历史
        </Link>
        <span className="text-muted-foreground/30">|</span>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          美式和意式的区别
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="h-6 w-1 rounded-full bg-primary" />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
          美式披萨 vs 意式披萨
        </h1>
        <div className="h-6 w-1 rounded-full bg-primary" />
      </div>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
        来自世界各地的八位作者对这场伟大披萨辩论各抒己见。
        从那不勒斯的传统到纽约的创新，每篇文章都为这两种风格的独特之处提供了全新视角。
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          进入博客
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/history"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
        >
          了解披萨历史
        </Link>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-1.5">
        <Badge variant="default">8 篇文章</Badge>
        <Badge variant="secondary">8 位作者</Badge>
        <Badge variant="secondary">2 大洲</Badge>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-1">
        <Hero />
      </main>
      <footer className="border-t border-primary/20 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
          盖哥披萨说 &mdash; 一场关于披萨文化的协作探索。
        </div>
      </footer>
    </div>
  );
}
