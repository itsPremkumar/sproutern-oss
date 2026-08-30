import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { CGPAConverterTool } from '@/components/tools/CGPAConverterTool';
import { ShareCTA } from '@/components/shared/social-share';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/seo/LanguageSwitcher';
import {
  GraduationCap,
  CheckCircle,
  Calculator,
  Building,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

// Chinese-specific metadata
export const metadata: Metadata = {
  title: 'CGPA转百分比换算器 | 免费在线工具 - Sproutern',
  description:
    '立即将CGPA转换为百分比。支持10分制、7分制和4分制。免费使用，无需注册。适合留学生和国际学生使用。',
  keywords: [
    'CGPA换算',
    'CGPA转百分比',
    'GPA计算器',
    '成绩换算',
    '留学成绩',
    '出国留学',
    '学分绩点',
  ],
  alternates: {
    canonical: 'https://sproutern.dpdns.org/zh/tools/cgpa-converter',
    languages: {
      'zh-CN': 'https://sproutern.dpdns.org/zh/tools/cgpa-converter',
      'de-DE': 'https://sproutern.dpdns.org/de/tools/cgpa-converter',
      en: 'https://sproutern.dpdns.org/tools/cgpa-converter',
      'x-default': 'https://sproutern.dpdns.org/tools/cgpa-converter',
    },
  },
  openGraph: {
    title: 'CGPA转百分比换算器 | 免费 - Sproutern',
    description: '免费CGPA换算工具，支持国际成绩转换',
    locale: 'zh_CN',
  },
};

// Chinese grade equivalents for study abroad
const chineseGradeEquivalents = [
  { cgpa: '10.0', percentage: '95%', chineseGrade: '优秀 (A)', usaGpa: '4.0' },
  {
    cgpa: '9.0',
    percentage: '85.5%',
    chineseGrade: '良好 (B+)',
    usaGpa: '3.5',
  },
  { cgpa: '8.0', percentage: '76%', chineseGrade: '良好 (B)', usaGpa: '3.0' },
  {
    cgpa: '7.0',
    percentage: '66.5%',
    chineseGrade: '中等 (C+)',
    usaGpa: '2.5',
  },
  { cgpa: '6.0', percentage: '57%', chineseGrade: '及格 (C)', usaGpa: '2.0' },
  {
    cgpa: '5.0',
    percentage: '47.5%',
    chineseGrade: '不及格 (D)',
    usaGpa: '1.0',
  },
];

export default function ChineseCGPAConverterPage() {
  // Chinese-specific schema
  const chineseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'CGPA转百分比换算器',
    description: '免费CGPA换算工具，支持全球学生使用',
    url: 'https://sproutern.dpdns.org/zh/tools/cgpa-converter',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'All',
    inLanguage: 'zh-CN',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chineseSchema) }}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <LanguageSwitcher basePath="/tools/cgpa-converter" current="zh" />
          {/* Chinese Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Calculator className="h-4 w-4" />
              免费学术工具
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              CGPA转百分比换算器
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              立即将CGPA转换为百分比。支持10分制、7分制和4分制，
              适用于全球各大学的成绩换算。
            </p>
          </div>

          {/* Trust Signals in Chinese */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% 免费</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">即时结果</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Building className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">50+ 大学支持</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <GraduationCap className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">留学必备</span>
            </div>
          </div>

          {/* Tool Component */}
          <CGPAConverterTool />

          {/* Share CTA */}
          <div className="mt-6">
            <ShareCTA toolName="CGPA换算器" />
          </div>

          {/* Chinese Educational Content */}
          <div className="prose prose-lg mt-16 max-w-none">
            <h2>CGPA成绩对照表</h2>
            <p>
              以下是CGPA与百分比、中国成绩等级及美国GPA的对照表，
              帮助您了解自己的成绩在国际上的定位：
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">CGPA (10分制)</th>
                    <th className="border p-3 text-left">百分比</th>
                    <th className="border p-3 text-left">中国等级</th>
                    <th className="border p-3 text-left">美国GPA</th>
                  </tr>
                </thead>
                <tbody>
                  {chineseGradeEquivalents.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-muted/30' : ''}
                    >
                      <td className="border p-3 font-bold text-primary">
                        {row.cgpa}
                      </td>
                      <td className="border p-3">{row.percentage}</td>
                      <td className="border p-3">{row.chineseGrade}</td>
                      <td className="border p-3 font-semibold">{row.usaGpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>留学成绩换算指南</h2>
            <p>
              如果您计划出国留学（美国、英国、澳大利亚等），了解如何将CGPA转换为
              目标国家的成绩体系非常重要。不同国家有不同的换算标准。
            </p>

            <div className="not-prose my-6 rounded-lg bg-red-50 p-6 dark:bg-red-950">
              <h3 className="mb-3 font-bold">🇺🇸 美国留学成绩要求</h3>
              <ul className="space-y-2">
                <li>顶尖大学（常春藤）：GPA 3.7+ (CGPA 9.0+)</li>
                <li>优秀大学：GPA 3.5+ (CGPA 8.5+)</li>
                <li>一般大学：GPA 3.0+ (CGPA 7.5+)</li>
              </ul>
            </div>

            <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 font-bold">🇬🇧 英国留学成绩要求</h3>
              <ul className="space-y-2">
                <li>一等学位要求：CGPA 8.5+ (相当于First Class)</li>
                <li>二等上学位：CGPA 7.0-8.4 (相当于Upper Second)</li>
                <li>二等下学位：CGPA 5.5-6.9 (相当于Lower Second)</li>
              </ul>
            </div>

            <h2>常见问题</h2>

            <h3>CGPA 8.0 相当于多少分？</h3>
            <p>
              CGPA 8.0 使用标准公式（×9.5）换算后等于 76%。这在中国成绩体系中
              属于"良好"等级，在美国体系中相当于 GPA 3.0。
            </p>

            <h3>出国留学需要多少CGPA？</h3>
            <p>
              这取决于目标国家和大学。一般来说，申请顶尖大学需要 CGPA 8.5+，
              普通大学需要 CGPA
              7.0+。同时还需要语言成绩（雅思/托福）和其他申请材料。
            </p>
          </div>

          {/* Related Tools in Chinese */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">相关工具</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'GPA换算器',
                  href: '/tools/gpa-converter',
                  desc: '4.0制GPA换算',
                },
                {
                  title: '薪资计算器',
                  href: '/zh/tools/salary-calculator',
                  desc: '税后工资计算',
                },
                {
                  title: '打字速度测试',
                  href: '/zh/tools/typing-test',
                  desc: '测试WPM和准确率',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA in Chinese */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">开启您的职业生涯</h2>
            <p className="mb-6 text-muted-foreground">探索全球实习机会</p>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              浏览实习
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
