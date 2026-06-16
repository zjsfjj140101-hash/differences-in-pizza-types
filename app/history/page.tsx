import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function HistoryPage() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-primary/20 bg-white">
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
        <div className="flex items-center gap-3 mb-2">
          <div className="h-6 w-1 rounded-full bg-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            披萨的历史
          </h1>
        </div>
        <p className="text-sm text-muted-foreground mt-2 mb-10">
          从古罗马的扁平面包到风靡全球的现代美食，披萨走过了两千多年的漫漫长路。
        </p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold tracking-tight mb-3 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary inline-block" />
            古代起源：面包上的历史
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            披萨的雏形可以追溯到古希腊和古罗马时期。当时的人们会在扁平的烤面包上淋上橄榄油，配上当地采摘的香草和蔬菜。这种被称为&ldquo;plakous&rdquo;的希腊食品，以及古罗马人的&ldquo;panis focacius&rdquo;（意为&ldquo;炉火面包&rdquo;，现代佛卡夏面包的前身），都是披萨的远古祖先。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            然而，真正让披萨成为我们今天所熟知的模样，是在16世纪的那不勒斯。随着番茄从美洲传入欧洲，那不勒斯平民开始在发酵面饼上涂抹番茄酱进行烤制。这种简单、便宜又美味的食物迅速在街头流行起来，成为穷人的日常餐食。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold tracking-tight mb-3 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary inline-block" />
            玛格丽特的传说：1889年
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            1889年，意大利国王翁贝托一世和王后玛格丽特访问那不勒斯。当地最著名的披萨匠人Raffaele Esposito受邀为王后制作披萨。他制作了三款披萨，其中一款以番茄（红）、马苏里拉奶酪（白）和罗勒（绿）为配料，恰好代表了意大利国旗的颜色。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            王后对这款披萨赞不绝口，Esposito便以她的名字命名——玛格丽特披萨就此诞生。这一事件不仅催生了世界上最经典的披萨款式，也奠定了披萨在意大利饮食文化中的崇高地位。从此，披萨从街头平民食物正式步入了高贵殿堂。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold tracking-tight mb-3 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary inline-block" />
            漂洋过海：披萨来到美国
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            19世纪末到20世纪初，大量意大利移民涌入美国，披萨也随之来到新大陆。1905年，Gennaro Lombardi在纽约曼哈顿开设了美国第一家披萨店——Lombardi&rsquo;s，直到今天仍在营业。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            最初的披萨仅局限在意大利移民社区内。直到二战结束后，从欧洲战场归来的美国大兵们念念不忘在意大利吃到的披萨，披萨才开始真正走向美国主流社会。1950年代，随着冷冻披萨的发明和全国连锁店的出现，披萨迅速成为美国最受欢迎的食物之一。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold tracking-tight mb-3 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary inline-block" />
            本土化之路：美式披萨风格的形成
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            意大利移民的后代根据美国本地食材和口味偏好，对披萨进行了大胆创新。芝加哥的深盘披萨（Deep Dish）诞生于1943年，由Pizzeria Uno发明；纽约式披萨以大片薄底著称，可以折叠起来边走边吃；纽黑文式披萨用炭火烤制，带着微妙的焦香。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            底特律式方披萨、圣路易斯式的薄脆披萨、加州式披萨的创新配料——每一种美式披萨风格都反映了当地移民文化和食材特点。披萨在美国完成了从意大利传统到美国创新的华丽蜕变，成为美国饮食文化的重要组成部分。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold tracking-tight mb-3 flex items-center gap-2">
            <span className="h-4 w-1 rounded-full bg-primary inline-block" />
            全球化的今天
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            今天，披萨已经是全球最普及的食物之一。从东京到圣保罗，从伦敦到上海，每个地方都有自己的披萨变体。日本有照烧鸡披萨，巴西有巧克力披萨，印度有泡菜披萨——披萨已经成为一张空白画布，承载着全球各地的饮食文化。
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            与此同时，意大利传统披萨也在经历复兴。2017年，那不勒斯披萨被联合国教科文组织列为非物质文化遗产。越来越多的人开始关注正宗意式披萨的制作工艺——从面粉的选择到发酵的时间，从番茄的产地到烤炉的温度。披萨的故事远未结束，它仍在继续演变和书写。
          </p>
        </section>

        <div className="flex flex-wrap gap-2 mt-8">
          <Badge variant="secondary">历史</Badge>
          <Badge variant="secondary">文化</Badge>
          <Badge variant="secondary">玛格丽特</Badge>
          <Badge variant="secondary">那不勒斯</Badge>
          <Badge variant="secondary">移民</Badge>
          <Badge variant="secondary">全球化</Badge>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
        </div>
      </main>

      <footer className="border-t border-primary/20 py-8 mt-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-muted-foreground">
          盖哥披萨说 &mdash; 一场关于披萨文化的协作探索。
        </div>
      </footer>
    </div>
  );
}
