import type { Metadata } from 'next';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/seo/LanguageSwitcher';
import { Calculator, DollarSign, ArrowRight } from 'lucide-react';

// Chinese salary content
export const metadata: Metadata = {
  title: '工资计算器 | 税后工资计算 - Sproutern',
  description:
    '计算您的税后实发工资。支持中国个人所得税、五险一金计算。免费使用，准确快速。',
  keywords: [
    '工资计算器',
    '税后工资',
    '个人所得税',
    '五险一金',
    '工资计算',
    '薪资计算',
  ],
  alternates: {
    canonical: 'https://sproutern.dpdns.org/zh/tools/salary-calculator',
    languages: {
      'zh-CN': 'https://sproutern.dpdns.org/zh/tools/salary-calculator',
      'de-DE': 'https://sproutern.dpdns.org/de/tools/salary-calculator',
      en: 'https://sproutern.dpdns.org/tools/salary-calculator',
      'x-default': 'https://sproutern.dpdns.org/tools/salary-calculator',
    },
  },
  openGraph: {
    title: '工资计算器 | 税后工资计算',
    description: '免费税后工资计算器',
    locale: 'zh_CN',
  },
};

// Chinese salary examples (in RMB)
const chineseSalaryExamples = [
  { gross: '8,000', net: '~7,200', tax: '~90', fiveInsurance: '~710' },
  { gross: '15,000', net: '~12,500', tax: '~790', fiveInsurance: '~1,710' },
  { gross: '25,000', net: '~19,500', tax: '~2,590', fiveInsurance: '~2,910' },
  { gross: '40,000', net: '~29,500', tax: '~6,290', fiveInsurance: '~4,210' },
  { gross: '60,000', net: '~42,000', tax: '~12,290', fiveInsurance: '~5,710' },
];

export default function ChineseSalaryCalculatorPage() {
  const chineseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '工资计算器',
    description: '免费税后工资计算器',
    url: 'https://sproutern.dpdns.org/zh/tools/salary-calculator',
    applicationCategory: 'FinanceApplication',
    inLanguage: 'zh-CN',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chineseSchema) }}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <LanguageSwitcher basePath="/tools/salary-calculator" current="zh" />
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900 dark:text-red-300">
              <DollarSign className="h-4 w-4" />
              免费财务工具
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">工资计算器</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              计算您的税后实发工资。包含个人所得税、五险一金全面计算。
            </p>
          </div>

          {/* Quick Salary Table */}
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 p-6 dark:from-red-950 dark:to-orange-950">
            <h2 className="mb-4 text-lg font-bold">
              2025年工资对照表（元/月）
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/50 dark:bg-black/20">
                    <th className="border p-3 text-left">税前工资</th>
                    <th className="border p-3 text-left">税后到手</th>
                    <th className="border p-3 text-left">个税</th>
                    <th className="border p-3 text-left">五险一金</th>
                  </tr>
                </thead>
                <tbody>
                  {chineseSalaryExamples.map((row, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0 ? 'bg-white/30 dark:bg-black/10' : ''
                      }
                    >
                      <td className="border p-3 font-bold">¥{row.gross}</td>
                      <td className="border p-3 font-semibold text-green-600">
                        ¥{row.net}
                      </td>
                      <td className="border p-3 text-red-600">¥{row.tax}</td>
                      <td className="border p-3">¥{row.fiveInsurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              * 以北京为例，五险一金比例可能因城市而异
            </p>
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none">
            <h2>中国个人所得税税率表 (2025)</h2>

            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">月应纳税所得额</th>
                    <th className="border p-3 text-left">税率</th>
                    <th className="border p-3 text-left">速算扣除数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">不超过3,000元</td>
                    <td className="border p-3">3%</td>
                    <td className="border p-3">0</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">3,000-12,000元</td>
                    <td className="border p-3">10%</td>
                    <td className="border p-3">210</td>
                  </tr>
                  <tr>
                    <td className="border p-3">12,000-25,000元</td>
                    <td className="border p-3">20%</td>
                    <td className="border p-3">1,410</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">25,000-35,000元</td>
                    <td className="border p-3">25%</td>
                    <td className="border p-3">2,660</td>
                  </tr>
                  <tr>
                    <td className="border p-3">35,000-55,000元</td>
                    <td className="border p-3">30%</td>
                    <td className="border p-3">4,410</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">55,000-80,000元</td>
                    <td className="border p-3">35%</td>
                    <td className="border p-3">7,160</td>
                  </tr>
                  <tr>
                    <td className="border p-3">超过80,000元</td>
                    <td className="border p-3">45%</td>
                    <td className="border p-3">15,160</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>五险一金缴纳比例</h2>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-muted/30 p-4">
                <h3 className="font-bold text-primary">个人缴纳部分</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>养老保险：8%</li>
                  <li>医疗保险：2%</li>
                  <li>失业保险：0.5%</li>
                  <li>住房公积金：5-12%</li>
                </ul>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4">
                <h3 className="font-bold text-primary">单位缴纳部分</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>养老保险：16%</li>
                  <li>医疗保险：9.8%</li>
                  <li>失业保险：0.5%</li>
                  <li>工伤保险：0.2-1.9%</li>
                  <li>生育保险：0.8%</li>
                  <li>住房公积金：5-12%</li>
                </ul>
              </div>
            </div>

            <h2>常见问题</h2>

            <h3>月薪10000元到手多少？</h3>
            <p>
              月薪10,000元（北京），扣除五险一金约1,050元后，应纳税所得额约3,950元，
              个税约195元，最终到手约8,755元。
            </p>

            <h3>什么是专项附加扣除？</h3>
            <p>
              专项附加扣除包括：子女教育（1000元/月/子女）、继续教育（400元/月）、
              大病医疗、住房贷款利息（1000元/月）、住房租金、赡养老人等。
              可以在计算个税前扣除，减少应纳税额。
            </p>
          </div>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">相关工具</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'CGPA换算器',
                  href: '/zh/tools/cgpa-converter',
                  desc: '成绩换算',
                },
                {
                  title: 'EMI计算器',
                  href: '/tools/emi-calculator',
                  desc: '贷款月供计算',
                },
                {
                  title: '打字测试',
                  href: '/zh/tools/typing-test',
                  desc: '测试打字速度',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 hover:shadow-md"
                >
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
