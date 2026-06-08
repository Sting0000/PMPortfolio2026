import React from "react";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "项目经历", href: "#projects" },
  { label: "关于我", href: "#about" },
  { label: "联系方式", href: "#contact" },
];

const profileTags = ["B端产品", "ERP / CRM", "AI 产品 / SaaS 原型", "原型设计 / PRD", "AI 协作提效"];

const internships = [
  "赛维时代｜ERP 产品实习｜2025.07 - 2025.10",
  "AI 供应链异常诊断工作台｜个人 AI 产品项目｜2026.05",
  "新能源试驾转单 SaaS 原型｜课程项目｜2024.03 - 2024.06",
];

const projects = [
  {
    company: "赛维时代",
    title: "计划协同、补货预警与经营回流闭环迭代",
    role: "ERP 系统产品实习生｜2025.07 - 2025.10",
    type: "跨境服饰供应链 ERP",
    summary:
      "围绕计划协同、补货预警、供应商承接与经营回流四个环节，参与中后台闭环方案设计，补齐规则判断、页面承接与异常回流链路。",
    image: "assets/images/projects/sewei/overview-home.png",
    imageAlt: "赛维时代 ERP 项目总览图",
    link: "project-sewei.html",
    highlights: ["参与全链路痛点梳理", "补充核心页面规则", "跟进评审、测试与上线复盘"],
    metrics: [
      { label: "关键结果", value: "31%", text: "高风险计划异常识别时效提升" },
      { label: "协同成果", value: "68%", text: "补货建议采纳率" },
    ],
  },
  {
    company: "创新创业课程项目",
    title: "新能源门店试驾转单管理 SaaS 原型",
    role: "轻量 CRM / SaaS 原型｜2024.03 - 2024.06",
    type: "门店销售转化",
    summary:
      "面向新能源汽车线下门店销售团队，聚焦“试驾完成后—下定前”高意向客户转化链路，设计轻量 CRM / SaaS 原型，覆盖试驾反馈结构化、客户分层、销售任务承接、阻碍点催化和转化过程看板。",
    image: "assets/images/projects/li-auto/overview-main.png",
    imageAlt: "新能源门店试驾转单管理 SaaS 原型预览图",
    link: "project-li-auto.html",
    highlights: ["试驾反馈结构化", "P1/P2/P3 客户分层", "阻碍点催化任务", "转化过程看板"],
    metrics: [
      { label: "核心规则", value: "P1/P2/P3", text: "分层" },
      { label: "产品闭环", value: "反馈-任务", text: "复盘" },
    ],
  },
];

const aboutCards = [
  {
    title: "教育背景",
    items: ["南京信息工程大学（双一流）｜数据科学与大数据技术", "2021.9 - 2026.6", "主修课程：机器学习、数据结构、数据库系统、Python、C"],
  },
  {
    title: "校园经历",
    items: ["校级一等奖奖学金", "校级“互联网+”大赛铜奖", "院团委宣传策划部副部长"],
  },
  {
    title: "技能工具 / AI 辅助能力",
    items: ["产品设计：PRD、Figma、Axure、XMind", "数据分析：SQL、Python、Excel", "AI 工具：Prompt、Coze、ChatGPT、Gemini、千问"],
  },
  {
    title: "语言能力",
    items: ["CET-4：608", "CET-6：504"],
  },
];

const contacts = [
  { label: "手机", value: "请通过简历获取" },
  { label: "邮箱", value: "alyssasmile2026@hotmail.com", href: "mailto:alyssasmile2026@hotmail.com" },
  { label: "微信", value: "请通过简历获取" },
];

function SectionTitle({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-xs font-medium tracking-[0.18em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">{title}</h2>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7d5d52] text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-base font-semibold text-slate-700">{project.company}</p>
                <p className="mt-1 text-xs tracking-[0.14em] text-slate-400">{project.type}</p>
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold leading-snug text-slate-950">{project.title}</h3>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-500">{project.role}</p>
            <p className="mt-5 text-sm leading-8 text-slate-600">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl bg-[#f8f5f2] p-4">
                  <p className="text-xs tracking-[0.14em] text-slate-400">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#6f4f46]">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{metric.text}</p>
                </div>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#7d5d52] hover:text-[#6f4f46]"
            >
              查看项目详情
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-6 lg:border-l lg:border-t-0">
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-3 shadow-inner shadow-slate-200/40">
            <div className="flex justify-end gap-1.5 px-2 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
            </div>
            <div className="aspect-[16/11] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioHome() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#f6f7f8] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-slate-950">
            YANG ZHUYU
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 pb-16 pt-24 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-slate-500">PRODUCT MANAGER PORTFOLIO</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">杨竺瑜</h1>
            <p className="mt-5 text-xl font-medium leading-8 text-slate-800">
              ToB 产品经理｜26 届应届
              <br />
              ERP / CRM / AI 产品方向
            </p>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              聚焦 B 端产品方向，具备 ERP 实习、AI 产品项目与轻量 CRM / SaaS 原型设计经验。擅长围绕业务流程梳理问题，完成页面方案、PRD 规则补充与项目协同推进。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profileTags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6f4f46]">
                查看项目经历
              </a>
              <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-[#7d5d52] hover:text-[#6f4f46]">
                联系我
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)]">
            <div className="overflow-hidden rounded-2xl bg-[#eee8e3]">
              <img src="assets/images/home/photo.jpg" alt="杨竺瑜证件照" className="h-72 w-full object-cover object-center" />
            </div>
            <div className="mt-5 border-t border-slate-200 pt-5">
              <p className="text-xs tracking-[0.16em] text-slate-400">实践经历</p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {internships.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="SELECTED PROJECTS" title="核心项目经历" />
            <p className="max-w-sm text-sm leading-7 text-slate-500 md:text-right">以真实实习项目为主，当前首页保留概览层级，后续可继续扩展为独立项目详情页。</p>
          </div>

          <div className="mt-10 space-y-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.company} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="ABOUT ME" title="关于我" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.05)]">
                <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                <div className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <p key={item} className="rounded-2xl bg-[#f8f5f2] p-4 text-sm leading-7 text-slate-700">
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-10">
            <SectionTitle eyebrow="CONTACT" title="联系方式" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => {
              const content = (
                <>
                  <p className="text-xs tracking-[0.16em] text-slate-400">{contact.label}</p>
                  <p className="mt-3 break-all text-base font-medium text-slate-900">{contact.value}</p>
                </>
              );

              return contact.href ? (
                <a key={contact.label} href={contact.href} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#7d5d52] hover:shadow-lg hover:shadow-slate-200/70">
                  {content}
                </a>
              ) : (
                <div key={contact.label} className="rounded-2xl border border-slate-200 bg-white p-5">
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
