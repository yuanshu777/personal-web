// Templates retain their original copy. Remember it per node so language changes
// are reversible without changing links, formulas, or interactive state.
let language = 'en';
try { if (localStorage.getItem('personal-site-language') === 'zh') language = 'zh'; } catch {}
const englishCopy = {
  '跳到内容':'Skip to content', '返回首页':'Back to overview', '主导航':'Main navigation',
  '概览':'Overview', '思考':'Thoughts', 'AI 实验':'AI Lab', '设计预览':'Design preview',
  '个人内容待填写':'Personal content coming soon', '回到概览 ↑':'Back to overview ↑',
  '社交链接':'Social links', '关闭':'Close', '链接待填写':'Link coming soon',
  '这里已为你的个人主页留好位置。下一步填入真实链接后，就可以直接访问。':'This space is reserved for your profile. Add your real link to make it live.',
  '保持好奇，持续更新。':'Stay curious. Keep updating.',
  '从复杂中，':'Structure in', '看见':'', '结构。':'complexity.',
  '我关注逻辑、数学与统计，':'Thinking through logic, mathematics, and statistics.',
  '也在探索量化与 AI 的更多可能。':'Exploring what comes next in quant and AI.',
  '你的名字':'Your Name', '一句话介绍 · 待填写':'A short introduction · coming soon',
  '进一步认识我':'Get to know me', '可交互':'Interactive', '多一点证据，':'A little more evidence.',
  '少一点不确定。':'A little less uncertainty.',
  '正态分布示意：增加观察后，后验分布逐渐收窄':'Normal distributions: the posterior narrows as observations are added.',
  '先验':'Prior', '后验':'Posterior', '重置概率实验':'Reset probability experiment', '重置':'Reset',
  '＋ 一条证据':'＋ Add evidence', '已观察 10 次':'10 observations', '核心强项':'Core strengths',
  '逻辑推演':'Logical reasoning', '数学建模':'Mathematical modeling', '统计推断':'Statistical inference',
  '示例观点':'Sample thought', '世界并不确定。':'An uncertain world.', '思考可以更清晰。':'A clearer way to think.',
  '我的想法、疑问，以及尚未完成的思考。':'Questions, observations, and thinking in progress.',
  '关于量化。':'On quant.', '模型、市场与不确定性。':'Models, markets, and uncertainty.',
  '我的来路。':'How I got here.', '背景、经历，以及塑造我的事。':'My background, experiences, and what shaped me.',
  '思考的底层。':'Beneath the thinking.', '我如何理解知识、选择与世界。':'How I think about knowledge, choices, and the world.',
  'AI 实验室。':'The AI lab.', 'AI 实验室':'AI Lab', '把好奇心，变成可以运行的东西。':'Turning curiosity into things that work.',
  '在别处找到我':'Find me elsewhere', '让对话继续。':'Keep the conversation going.',
  '← 返回概览':'← Back to overview', '示意文案':'Sample copy', '待填写':'Coming soon', '继续探索':'Keep exploring',
  '经历是一条路径。好奇心决定方向。':'A path shaped by experience. A direction shaped by curiosity.',
  '在这里，更深入地认识我：从哪里出发，走过哪些阶段，又被哪些问题吸引。':'A closer look at where I started, what I have done, and the questions that keep me moving.',
  '教育与背景':'Education & background', '学校、专业与学习路径。':'Studies, disciplines, and the path of learning.',
  '你的教育背景待填写':'Education details coming soon.', '做过什么':'What I have done',
  '工作、研究，以及值得记下的经历。':'Work, research, and experiences worth remembering.', '你的经历待填写':'Experience details coming soon.',
  '正在走向哪里':'Where I am heading', '当前关注的方向，与接下来想解决的问题。':'Current interests and the problems I want to explore next.',
  '你的研究兴趣待填写':'Research interests coming soon.', '我擅长什么':'My strengths', '我的哲学观':'My philosophy',
  '思考的工具箱。':'Tools for thinking.', '抽象出结构，再回到现实。':'Find the structure. Then bring it back to reality.',
  '首页里的三个关键词，在这里展开。每一种能力，都可以有自己的方法、边界与应用领域。':'A deeper look at three core strengths: the methods behind them, where they apply, and where their limits lie.',
  '概念、前提与结论之间，如何建立清晰的连接。':'Connecting concepts, assumptions, and conclusions with clarity.',
  '你的方法与擅长领域待填写':'Methods and areas of expertise coming soon.',
  '从复杂问题中提取结构，用模型表达关键关系。':'Identifying structure in complex problems and expressing the relationships that matter.',
  '你的数学背景与方向待填写':'Mathematical background and interests coming soon.',
  '理解数据、噪声与不确定性，形成有依据的判断。':'Working with data, noise, and uncertainty to reach well-supported conclusions.',
  '你的统计方法与经验待填写':'Statistical methods and experience coming soon.',
  '实践与成果':'Work & outcomes', '你做过的工作、研究或项目，会在这里展开。可以只写最重要的几件事。':'Selected work, research, and projects will appear here, with space for the details that matter.',
  '背景与经历':'Background & experience', '我对量化的看法':'On quantitative research',
  '一些正在生长的想法。':'Thinking in progress.', '世界并不确定。思考可以更清晰。':'An uncertain world. A clearer way to think.',
  '这里留给当下的想法：一个问题，一段观察，或一个仍在变化的判断。':'A place for current questions, observations, and judgments that are still taking shape.',
  '最近在想什么':'What I am wondering', '一个让你持续好奇、暂时还没有答案的问题。':'A question that keeps returning, even without an answer yet.',
  '第一条想法待填写':'First thought coming soon.', '最近看到了什么':'What I am noticing',
  '一件改变了你看问题方式的事。':'An observation that changed how I see a problem.', '第二条想法待填写':'Second thought coming soon.',
  '最近改变了什么':'What I am rethinking', '一个你正在更新的判断，和促使改变的理由。':'A belief I am updating, and what prompted the change.',
  '第三条想法待填写':'Third thought coming soon.', '更深的哲学观':'The philosophy underneath', '关于量化':'On quant',
  '从「如何知道」，到「如何选择」。':'From how we know to how we choose.',
  '我对世界的理解、做选择的原则，以及那些不会很快得到答案的问题。':'How I understand the world, the principles behind my choices, and questions that resist easy answers.',
  '我如何理解知识':'On knowledge', '什么构成证据？我们在什么条件下说自己知道？':'What counts as evidence? When can we say that we know?',
  '你的认识论观点待填写':'Perspectives on knowledge coming soon.', '我如何做选择':'On making choices',
  '如何在不确定中权衡，又如何理解理性与价值。':'Weighing uncertainty, rationality, and what we value.',
  '你的判断原则待填写':'Decision-making principles coming soon.', '我如何理解意义':'On meaning',
  '什么值得投入时间，什么值得长期坚持。':'What deserves our time, and what is worth pursuing over the long term?',
  '你的价值观待填写':'Values and reflections coming soon.', '仍然开放的问题':'Questions I keep open',
  '为分歧、修正和新的理解，留一个位置。':'Space for disagreement, revision, and new understanding.',
  '当前想法':'Current thoughts', '认识我':'Get to know me', '我眼中的量化。':'A view on quant.',
  '模型是一种视角。市场是更复杂的现实。':'Models are a lens. Markets are a more complex reality.',
  '这里留给我对量化研究的看法：如何提问、如何验证，以及如何理解模型的边界。':'My thinking on quantitative research: asking questions, testing ideas, and understanding the limits of a model.',
  '如何提出问题':'Asking better questions', '我感兴趣的研究方向，以及什么样的问题值得研究。':'Research directions that interest me, and questions worth pursuing.',
  '你的量化观点待填写':'Perspectives on quant coming soon.', '如何检验想法':'Testing an idea',
  '关于数据、假设、验证与不确定性的思考。':'Thoughts on data, assumptions, validation, and uncertainty.',
  '你的研究方法待填写':'Research methods coming soon.', '如何理解边界':'Knowing the limits',
  '模型的适用范围、风险，以及面对变化的方式。':'Where models apply, how they fail, and what happens when conditions change.',
  '你的方法论与边界待填写':'Methods and their limits coming soon.', '研究笔记':'Research notes',
  '之后可以在这里放入你的完整观点、图表或研究记录。当前图形仅用于设计示意。':'Longer reflections, charts, and research notes can live here. Current graphics use illustrative data only.',
  '数学与统计背景':'Mathematics & statistics', '好奇心的实验场。':'A playground for curiosity.',
  '从一个想法，到一个可以运行的东西。':'From an idea to something you can use.',
  '你的 AI 作品将放在这里。先试试为这个网站制作的概率小实验。':'Your AI projects will live here. For now, try this probability experiment created for the site.',
  '证据如何改变判断？':'How does evidence change a belief?',
  '点击「一条证据」，观察先验如何更新为后验。这个小实验用正态模型，展示判断随观察增加而收窄的过程。':'Select “Add evidence” to watch a prior become a posterior. This normal-distribution model shows how uncertainty narrows as observations accumulate.',
  '演示假设：先验 N(0, 1)，每次独立观察值固定为 0.65，观测标准差 0.8。为方便比较，曲线使用相同的纵轴尺度；它是一个受控示例。':'Assumptions: a N(0, 1) prior; independent observations fixed at 0.65; observation standard deviation 0.8. Both curves use the same vertical scale. This is a controlled illustration.',
  '本站互动示例 · 非个人作品履历':'Site demo · not a personal portfolio project',
  '第一件 AI 作品':'First AI project', '作品名称、解决的问题、你的角色，以及可体验的链接。':'The project, the problem it solves, your role, and a link to try it.',
  '作品待添加':'Project coming soon', '第二件 AI 作品':'Second AI project',
  '另一个有代表性的尝试。完成品和有意思的实验都可以。':'Another meaningful experiment, whether a finished product or a work in progress.',
  '下一个想法':'The next idea', '还没有做出来，但已经值得开始思考的事情。':'Something not yet built, but already worth thinking about.',
  '想法待填写':'Idea coming soon'
};
const chineseCopy = {
  'YOUR NAME':'你的名字', 'A PERSONAL SPACE':'我的个人空间', 'Language':'语言',
  'STAY CURIOUS. THINK CLEARLY.':'保持好奇，清晰思考。', 'LET’S CONNECT':'让我们联系',
  '01 / A MIND IN PROGRESS':'01 / 持续生长的思考', 'LOGIC · MATHEMATICS · STATISTICS':'逻辑 · 数学 · 统计',
  'HELLO, WORLD':'你好，世界', 'A SMALL THOUGHT EXPERIMENT':'一个小小的思想实验',
  'REASON FROM FIRST PRINCIPLES':'从第一性原理出发', 'FIND THE UNDERLYING STRUCTURE':'找到底层结构',
  'MAKE SENSE OF UNCERTAINTY':'理解不确定性', 'CURRENTLY ON MY MIND':'我最近在想',
  'SIGNAL / NOISE':'信号 / 噪声', 'MODELS ARE A LENS, NOT THE WORLD':'模型是一种视角，并非世界本身',
  'THE PERSON BEHIND':'认识背后的我', 'BACKGROUND & EXPERIENCE':'背景与经历', 'WAYS OF SEEING':'看待世界的方式',
  'PHILOSOPHY & BELIEFS':'哲学与信念', 'WHERE IDEAS BECOME REAL':'让想法成为现实', 'EXPERIMENTS & CREATIONS':'实验与作品',
  'Email':'邮箱', 'THE PERSON BEHIND THE QUESTIONS':'问题背后的人', '01 / EDUCATION':'01 / 教育',
  '02 / EXPERIENCE':'02 / 经历', '03 / CURIOSITY':'03 / 好奇心', 'A TOOLKIT FOR COMPLEXITY':'理解复杂的工具',
  '⊢ / LOGIC':'⊢ / 逻辑', '∫ / MATHEMATICS':'∫ / 数学', 'σ / STATISTICS':'σ / 统计',
  'ROOM FOR MORE':'继续展开', 'NOTES FROM AN UNFINISHED MIND':'仍在生长的思考',
  '01 / QUESTION':'01 / 问题', '02 / OBSERVATION':'02 / 观察', '03 / REVISION':'03 / 修正',
  'BEYOND THE EQUATIONS':'方程之外', '01 / KNOWLEDGE':'01 / 知识', '02 / CHOICE':'02 / 选择', '03 / MEANING':'03 / 意义',
  'BETWEEN SIGNAL AND NOISE':'信号与噪声之间', '01 / RESEARCH':'01 / 研究', '02 / EVIDENCE':'02 / 证据',
  '03 / LIMITS':'03 / 边界', 'IDEAS, MADE TANGIBLE':'让想法可以触碰', '00 / AN INTERACTIVE SKETCH':'00 / 互动小实验',
  '01 / AI PROJECT':'01 / AI 作品', '02 / AI PROJECT':'02 / AI 作品', '03 / OPEN QUESTION':'03 / 开放问题'
};
function chineseNames(value){return value.replace(/Harvard T\.H\. Chan School of Public Health/g,'哈佛大学陈曾熙公共卫生学院').replace(/University of Toronto/g,'多伦多大学').replace(/Health Data Science/g,'健康数据科学').replace(/YUANSHU WANG|Yuanshu Wang|YUANSHU|Yuanshu/g,'王元舒').replace(/HARVARD|Harvard/g,'哈佛大学').replace(/TORONTO/g,'多伦多大学').replace(/Toronto/g,'多伦多').replace(/多伦多 → 哈佛大学/g,'多伦多大学 → 哈佛大学').replace(/\bAI\b/g,'人工智能').replace(/\bQUANT\b/g,'量化').replace(/\bPHILOSOPHY\b/g,'哲学').replace(/\bAgents?\b/g,'智能体').replace(/(?<=[\p{Script=Han}]) +(?=[\p{Script=Han}])/gu,'');}
Object.assign(chineseCopy,{'Math':'数学','Stat':'统计','Logic':'逻辑','AGENT MARKET':'智能体市场','Signal & Structure':'信号与结构'});
function translateCopy(value) {
  // Arrow suffixes and numeric experiment labels are generated dynamically.
  const suffix=value.endsWith(' ↗')?' ↗':'';
  const key=suffix?value.slice(0,-2):value;
  let translated;
  if(language==='en') translated=Object.hasOwn(englishCopy,key)?englishCopy[key]:key;
  else translated=Object.hasOwn(chineseCopy,key)?chineseCopy[key]:key.replace(/^(\d+) \/ PERSONAL INDEX$/, '$1 / 个人索引').replace(/^OBSERVATIONS \/ /,'观察次数 / ');
  return (language==='zh'?chineseNames(translated):translated)+suffix;
}
const sourceText=new WeakMap();
const sourceAttributes=new WeakMap();
function localize() {
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())) {
    if(node.parentElement?.closest('script,style,.language-switcher button'))continue;
    if(!sourceText.has(node))sourceText.set(node,node.nodeValue);
    const original=sourceText.get(node), key=original.trim();
    if(key)node.nodeValue=original.replace(key,()=>translateCopy(key));
  }
  document.querySelectorAll('[aria-label],[title]').forEach(element=>{
    if(element.matches('.language-switcher button'))return;
    if(!sourceAttributes.has(element))sourceAttributes.set(element,{});
    const originals=sourceAttributes.get(element);
    for(const attr of ['aria-label','title']){
      if(!element.hasAttribute(attr))continue;
      if(!Object.hasOwn(originals,attr))originals[attr]=element.getAttribute(attr);
      element.setAttribute(attr,translateCopy(originals[attr]));
    }
  });
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
  document.querySelector('meta[name="description"]').content=language==='zh'?'王元舒的个人空间：数学、统计与逻辑，人工智能、量化与哲学。阅读想法，也动手玩一个实验。':'Yuanshu Wang — mathematics, statistics, and logic. Exploring AI, quantitative research, and philosophy, with ideas you can read and experiments you can play.';
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{
  language=button.dataset.language==='zh'?'zh':'en';
  try{localStorage.setItem('personal-site-language',language);}catch{}
  render();
}));
;
// First editorial draft from the owner's supplied ChatGPT memories.
// Pair copy here so both languages evolve together. No private identifiers,
// recruiting details, performance claims, or unverified profile URLs are stored.
function copy(zh, en) { englishCopy[zh] = en; return zh; }

const profile = {
  bio: copy('我目前在 Harvard 攻读硕士，学习数理统计、数据科学、AI 与智能体。本科就读于 University of Toronto，学习统计学。', 'I’m a master’s student at Harvard, studying mathematical statistics, data science, AI, and intelligent agents. Previously, I studied statistics at the University of Toronto.'),
  identity: copy('统计背景 · 量化研究方向', 'Statistics background · Quant research focus'),
  questionFirst: copy('价格背后，', 'Behind every price,'),
  questionSecond: copy('是怎样的行为？', 'whose behavior?'),
  questionCaption: copy('从市场微观结构，到多智能体系统。', 'From market microstructure to interacting agents.'),
  questionStatus: copy('开放问题', 'Open question'),
  backgroundCaption: copy('从多伦多的统计学，到 Harvard 的数据科学。', 'Statistics at Toronto. Data science at Harvard.'),
  philosophyCaption: copy('从身体经验，到规则、主体与自由。进入完整的思想旅程。', 'From lived experience to rules, selfhood, and freedom. Enter the full inquiry.'),
  labCaption: copy('财报预测、医学基础模型与市场模拟。', 'Financial reports, medical foundation models, and market simulation.'),
  quantCaption: copy('寻找机制，也检验可交易性。', 'Understand the mechanism. Test the trade.'),
  labIntro: copy('我的项目与研究兴趣跨越金融预测和医学机器学习。这里先记录研究问题与方法；完整结果、代码和演示会逐项补充。', 'My projects and research interests span financial prediction and medical machine learning. These notes introduce the questions and approaches; full results, code, and demos will follow.'),
  labSubtitle: copy('把问题变成模型，把模型带回证据。', 'From questions to models. From models back to evidence.'),
  labLabel: copy('项目与研究', 'Projects & research'),
  projectDetail: copy('展开研究重点', 'Read the research focus'),
  projectLinks: copy('完整报告与链接待补充', 'Full write-ups & links to follow'),
  demoLabel: copy('一个关于更新判断的小实验', 'A small experiment in updating beliefs'),
  draft: copy('内容初稿', 'First content draft'),
  signature: copy('研究与思考', 'RESEARCH & IDEAS')
};

const profilePages = {
  background: {
    number: '02', eyebrow: 'THE PERSON BEHIND THE QUESTIONS', title: '我的来路。',
    subtitle: copy('从统计学出发，走向复杂系统。', 'From statistics to complex systems.'),
    intro: copy('我是 Yuanshu Wang。我喜欢追问一个结果是怎样产生的，也喜欢把抽象的理解变成能够检验的模型。', 'I’m Yuanshu Wang. I’m drawn to how a result comes about—and to turning abstract understanding into models I can test.'),
    sections: [
      ['01 / EDUCATION', copy('多伦多 → Harvard', 'Toronto → Harvard'),
        copy('我目前在 Harvard 攻读硕士，学习数理统计、数据科学、AI 与智能体。本科就读于 University of Toronto，学习统计学。', 'I’m a master’s student at Harvard, studying mathematical statistics, data science, AI, and intelligent agents. Previously, I studied statistics at the University of Toronto.'),
        copy('这条路径让我同时关心理论与应用：概率如何描述不确定性，统计如何支持判断，机器学习如何从复杂数据中学习。', 'That path brings theory and application together: probability describes uncertainty, statistics supports judgment, and machine learning learns from complex data.')],
      ['02 / EXPERIENCE', copy('在不同领域里建模', 'Modeling across domains'),
        copy('我的项目经历涉及多模态财报预测、横截面股票预测、风险平价、比特币期权策略与医学基础模型研究。', 'My project work spans multimodal financial-report prediction, cross-sectional equity prediction, risk parity, Bitcoin options strategies, and medical foundation-model research.'),
        copy('我也通过真实数据分析练习研究设计与沟通，包括对安大略省姑息治疗机构数据的统计分析。不同领域，要求同样清晰的问题与证据。', 'Applied statistical work, including analysis of palliative-care facilities in Ontario, has also shaped how I approach study design and communication. Different domains call for the same care with questions and evidence.')],
      ['03 / CURIOSITY', copy('我正在走向哪里', 'Where I’m heading'),
        copy('我的长期方向是量化研究，尤其是系统化权益研究，以及市场微观结构和参与者行为。', 'My long-term direction is quantitative research, especially systematic equities, market microstructure, and participant behavior.'),
        copy('我希望把概率、随机过程和机器学习连起来，理解市场中哪些结构会反复出现，以及它们为什么存在。', 'I want to connect probability, stochastic processes, and machine learning to understand which structures recur in markets—and why they exist.')]
    ],
    related: [['strengths', '我擅长什么'], ['philosophy', '我的哲学观']]
  },
  strengths: {
    number: '03', eyebrow: 'A TOOLKIT FOR COMPLEXITY', title: '思考的工具箱。',
    subtitle: copy('先把问题拆清楚，再让模型接受检验。', 'Make the problem precise. Then put the model to the test.'),
    intro: copy('我的思考方式，是把逻辑推导、数学结构与统计证据放在同一条链上。', 'I approach problems by connecting logical reasoning, mathematical structure, and statistical evidence.'),
    sections: [
      ['⊢ / LOGIC', '逻辑推演',
        copy('我习惯先定义问题、列清假设，再一步步推导结论。理解一个方法，也意味着理解它为什么成立。', 'I start by defining the question, making assumptions explicit, and deriving the conclusion step by step. Understanding a method means understanding why it works.'),
        copy('直觉与证明需要互相校验。我会追问结论依赖什么前提、反例在哪里，以及换一种条件后它是否还成立。', 'Intuition and proof should check each other. I ask which assumptions a result depends on, where counterexamples might arise, and what changes under different conditions.')],
      ['∫ / MATHEMATICS', '数学建模',
        copy('概率、随机过程与优化，是我理解不确定系统的重要工具。我关心如何用合适的结构表达一个真实问题。', 'Probability, stochastic processes, and optimization are central to how I think about uncertain systems. I care about finding a useful mathematical representation of a real problem.'),
        copy('从状态与转移，到目标函数与约束，我倾向于先找出关键机制，再判断额外的复杂度是否值得。', 'From states and transitions to objectives and constraints, I look for the essential mechanism first, then ask whether additional complexity earns its place.')],
      ['σ / STATISTICS', '统计推断',
        copy('统计训练让我关注估计、变异与验证。我希望知道一个结果有多可靠，以及它是否只是某种暴露或噪声的产物。', 'My statistics training keeps me attentive to estimation, variation, and validation. I want to know how reliable a result is, and whether it reflects an exposure or simply noise.'),
        copy('在量化研究中，这意味着检验单信号与组合信号，分析因子暴露、PCA 中和与残差化，并把成本和换手率纳入判断。', 'In quant research, that means examining individual and combined signals, factor exposures, PCA neutralization, and residualization, while accounting for costs and turnover.')]
    ],
    wide: [copy('从推导走到实现', 'From derivation to implementation'), copy('我主要使用 Python，把研究组织成可以逐步检查的 notebook：先验证简单想法，再加入组合与约束。每一步都应能说明，它改变了什么，以及证据是否支持这种改变。', 'I primarily use Python and organize research in notebooks that can be checked step by step: validate a simple idea, then add combinations and constraints. Each step should explain what changed and whether the evidence supports it.')],
    related: [['background', '背景与经历'], ['quant', '我对量化的看法']]
  },
  thoughts: {
    number: '04', eyebrow: 'NOTES FROM AN UNFINISHED MIND', title: '一些正在生长的想法。',
    subtitle: copy('如果价格只是表面，底下的系统是什么？', 'If prices are the surface, what is the system underneath?'),
    intro: copy('这些是我目前正在追问的研究问题，仍然开放，也欢迎被挑战。', 'These are research questions I’m currently exploring. They remain open—and open to challenge.'),
    sections: [
      ['01 / QUESTION', copy('市场是一种投影吗？', 'Markets as a projection?'),
        copy('我倾向于把市场看作大量参与者行为共同形成的低维投影。可见的是价格与成交，背后是不同的目标、信息与约束。', 'I tend to view markets as a low-dimensional projection of many participants’ behavior. Prices and trades are visible; the objectives, information, and constraints behind them are harder to observe.'),
        copy('一个吸引我的问题是：能否从这些观测中，识别出相对稳定的参与者关系与行为机制？', 'Can we infer relatively stable relationships and behavioral mechanisms from those observations? That is a question I keep returning to.')],
      ['02 / OBSERVATION', copy('从交互到结构', 'From interactions to structure'),
        copy('Neural Relational Inference、ABIDES、Market Ecology 与 Simulation-Based Inference，是我正在尝试联系的几条研究线索。', 'Neural Relational Inference, ABIDES, market ecology, and simulation-based inference are research threads I’m trying to connect.'),
        copy('我想探索：能否用多智能体模拟表达行为，再用观测检验这些行为假设？这里最重要的是可识别性与经济解释，而不只是模拟得像。', 'Could agent-based simulation express behavioral hypotheses that we then test against observations? Identifiability and economic interpretation matter to me as much as a realistic-looking simulation.')],
      ['03 / REVISION', copy('复杂度需要理由', 'Complexity needs a reason'),
        copy('一个更复杂的模型，究竟增加了理解，还是增加了可以拟合的自由度？这是我会反复追问自己的问题。', 'Does a more complex model add understanding, or just more freedom to fit? It is a question I repeatedly ask myself.'),
        copy('我希望逐层比较简单基线与新机制，让每一层复杂度都对应一个可解释的问题，并接受样本外证据的检验。', 'I want to compare simple baselines with new mechanisms one layer at a time, so each addition answers an identifiable question and faces evidence beyond the data that motivated it.')]
    ],
    related: [['philosophy', '更深的哲学观'], ['quant', '关于量化']]
  },
  philosophy: {
    number: '05', eyebrow: 'BEYOND THE EQUATIONS', title: '思考的底层。',
    longform: {title: copy('身在世界，追问世界。', 'Within the world.'), text: copy('从最初的身体经验出发，沿着九幕、二十个节点，走过规则、完整历史、主体性、自由意志与第一人称的完整思路。', 'A nine-act, twenty-part journey from bodily experience through rules, complete histories, selfhood, free will, and the first person.'), link: copy('进入沉浸式长篇', 'Enter the full visual essay')},
    subtitle: copy('理解如何发生，也追问为何值得。', 'Understand how things happen. Ask why they matter.'),
    intro: copy('这是我正在形成的一组思考原则：关于知识，关于人，也关于值得长期追问的问题。', 'These are principles I’m still developing: about knowledge, about people, and about questions worth staying with.'),
    sections: [
      ['01 / KNOWLEDGE', copy('理解比记住更重要', 'Understand beyond recall'),
        copy('我不满足于记住一个结论。更吸引我的是：提出它的人面对什么问题，使用了怎样的概念，又怎样一步步走到这里。', 'Remembering a conclusion is only a starting point. I’m more interested in the problem its author faced, the concepts they used, and the steps that led to the result.'),
        copy('对我来说，理解是能够从前提出发重建推理，也能够说清楚它在哪里不再适用。', 'For me, understanding means being able to reconstruct the reasoning from its assumptions—and explain where it stops applying.')],
      ['02 / CHOICE', copy('理性，也理解人', 'Reason with an understanding of people'),
        copy('我重视理性分析，也知道人的决定受到情绪与环境影响。理解行为，需要把这些因素放进模型里。', 'I value rational analysis, while recognizing that emotion and environment shape decisions. Understanding behavior means making room for those influences.'),
        copy('在合作中，我看重逻辑、共情与实际沟通。一个论证要产生作用，也需要理解听它的人。', 'In collaboration, I value logic, empathy, and practical communication. For an argument to be useful, I also need to understand the person hearing it.')],
      ['03 / MEANING', copy('保留更大的问题', 'Keep the bigger questions'),
        copy('除了模型与市场，我也对物理、宇宙，以及哲学如何塑造我们对存在的理解保持好奇。', 'Beyond models and markets, I’m curious about physics, the universe, and how philosophy shapes our understanding of existence.'),
        copy('世界如何运行，人为什么这样行动，以及什么值得长期投入——这些问题共同决定了我想把注意力放在哪里。', 'How the world works, why people act as they do, and what deserves sustained effort: together, these questions shape where I choose to place my attention.')]
    ],
    wide: [copy('理解也应有现实的意义', 'Understanding should matter in the world'), copy('我也关心知识如何回应基本的人类需要。例如，食物分配与资源配置的问题让我看到：抽象的系统思考，可以连接非常具体的生活。', 'I care about how knowledge responds to basic human needs. Questions such as food distribution and resource allocation remind me that abstract thinking about systems can connect to very concrete lives.')],
    related: [['thoughts', '当前想法'], ['background', '认识我']]
  },
  quant: {
    number: '06', eyebrow: 'BETWEEN SIGNAL AND NOISE', title: '我眼中的量化。',
    subtitle: copy('从机制出发，用证据决定下一步。', 'Start with a mechanism. Let evidence guide the next step.'),
    intro: copy('我希望量化研究能够同时回答三个问题：信号为什么存在，结果是否可靠，以及它能否在真实约束下成立。', 'I want quantitative research to answer three questions together: why a signal exists, whether the evidence holds up, and whether it survives real constraints.'),
    sections: [
      ['01 / RESEARCH', copy('信号背后的机制', 'The mechanism behind a signal'),
        copy('我关注系统化权益研究，也对市场微观结构和多智能体行为感兴趣。一个预测关系，会让我继续追问是谁的行为、什么约束或结构造成了它。', 'My focus is systematic equity research, with an interest in microstructure and multi-agent behavior. A predictive relationship makes me ask which behavior, constraint, or structure could produce it.'),
        copy('单个 Alpha 是一个起点。我更希望理解那些可以跨问题迁移的市场机制。', 'An individual alpha is a starting point. I’m also interested in market mechanisms that can inform more than one research question.')],
      ['02 / EVIDENCE', copy('把验证拆成步骤', 'Make validation explicit'),
        copy('在统计套利研究里，我采用 notebook-first 的流程，从单信号到组合信号，再逐步检查 PCA 中和、残差化与回测。', 'In statistical-arbitrage research, I use a notebook-first process: start with individual signals, combine them, then examine PCA neutralization, residualization, and backtests step by step.'),
        copy('我关心效果究竟来自哪里，也关心新机制是否真正改善了简单基线。测试的作用是暴露问题，并为进一步研究提供证据。', 'I care about where an effect comes from and whether a new mechanism improves on a simple baseline. Tests should expose weaknesses and provide evidence for the next research step.')],
      ['03 / LIMITS', copy('可交易性也是问题本身', 'Tradability is part of the question'),
        copy('交易成本、换手率、因子暴露与风险约束，都可能改变一个结果的意义。我希望在研究过程中就把它们纳入。', 'Transaction costs, turnover, factor exposures, and risk constraints can change what a result means. I want them inside the research process.'),
        copy('同样，模拟中的优势需要与可观测信息下的表现区分。一个机制在理想条件下有效，还需要面对估计与执行的限制。', 'An advantage in simulation also needs to be separated from performance using observable information. A mechanism that works under ideal conditions still faces estimation and execution limits.')]
    ],
    wide: [copy('目前的研究轨迹', 'Current research threads'), copy('统计套利与横截面股票预测是近期重点。更广的探索包括多模态财报预测、风险平价与基于 Deribit 期权链的比特币策略。这里先呈现研究方向，完整方法与结果会在研究笔记中逐项展开。', 'Statistical arbitrage and cross-sectional equity prediction are recent focuses. Broader explorations include multimodal financial-report prediction, risk parity, and Bitcoin strategies using Deribit options-chain data. These are research directions; full methods and results will be developed in individual notes.')],
    related: [['strengths', '数学与统计背景'], ['lab', 'AI 实验室']]
  }
};

const researchProjects = [
  {
    number: '01', category: copy('金融 × 机器学习', 'FINANCE × MACHINE LEARNING'),
    title: copy('多模态财报预测', 'Multimodal financial reports'),
    description: copy('围绕财报预测，探索不同信息模态如何共同支持模型判断。', 'Exploring how different information modalities can jointly support prediction from financial reports.'),
    focus: copy('我关心不同模态各自提供什么信息、组合是否增加有效信号，以及模型表现应如何得到有说服力的验证。', 'I’m interested in what each modality contributes, whether combining them adds useful signal, and how to validate the resulting model convincingly.')
  },
  {
    number: '02', category: copy('医学 × 机器学习', 'MEDICINE × MACHINE LEARNING'),
    title: copy('医学基础模型', 'Medical foundation models'),
    description: copy('从 Health Data Science 出发，参与医学基础模型相关研究，思考模型与生物数据结构之间的关系。', 'Working on medical foundation-model research through Health Data Science, with an interest in how model design relates to biological data structure.'),
    focus: copy('基因并不像语言中的词那样具有天然的顺序。我关注 scGPT 等模型如何处理这类数据，以及架构背后的建模假设。', 'Genes do not have the natural word order of language. I’m interested in how models such as scGPT handle this kind of data and in the assumptions behind their architectures.')
  },
  {
    number: '03', category: copy('开放研究方向', 'OPEN RESEARCH DIRECTION'),
    title: copy('市场中的隐含关系', 'Latent relationships in markets'),
    description: copy('一个尚在形成的想法：把关系推断、多智能体模拟与市场参与者行为联系起来。', 'An idea taking shape: connect relational inference, agent-based simulation, and the behavior of market participants.'),
    focus: copy('我正在思考 NRI、ABIDES 与 Simulation-Based Inference 之间的联系。当前重点是问题定义、经济假设与实现可行性，还不是已完成的系统。', 'I’m considering connections between NRI, ABIDES, and simulation-based inference. The focus is problem formulation, economic assumptions, and feasibility; this is not yet a completed system.')
  }
];

copy('社交地址确认后会在这里开放。', 'Profile links will be added once the addresses are confirmed.');
copy('研究问题先行，证据随后。', 'Questions first. Evidence next.');
;
function say(zh,en){copy(zh,en);return language==='zh'?chineseNames(zh):en;}
function thoughts(){
  const cards=[
    {name:'QUANT',cls:'quant-door',mark:'P(t)',href:'#/quant',question:say('价格背后，<br>是谁在行动？','Behind every price,<br>who is acting?'),text:say('一群不同目标的人，为什么会形成看似有规律的市场？我想从行为中理解信号。','Different people. Different goals. One market price. I want to understand the behavior behind the signal.'),tags:say('市场行为 · 信号 · 不确定性','Behavior · Signals · Uncertainty'),link:say('看看我的量化思路','Explore my quant thinking')},
    {name:'PHILOSOPHY',cls:'philosophy-door deferred-bg',mark:'W → I → W′',href:'/philosophy.html',question:say('身在规则之中，<br>我们有多自由？','Inside the rules,<br>how free are we?'),text:say('从一次看风景的体验开始，追问规则、可能性，以及“我”为什么在这里。','A thought that began on a mountain road: rules, possibility, and why there is a view from here.'),tags:say('规则 · 自由 · 第一人称','Rules · Freedom · First person'),link:say('走进这段思想旅程','Step inside the inquiry')},
    {name:'AI',cls:'ai-door',mark:'observe → act',href:'#/ai',question:say('模型会回答，<br>也能真正行动吗？','A model can answer.<br>Can it also act?'),text:say('从识别信息，到做出决策，再到多个 Agent 协作。我想把好奇心变成能运行的系统。','From interpreting information to making decisions and coordinating agents. I want to turn curiosity into working systems.'),tags:say('智能体 · 学习 · 创造','Agents · Learning · Building'),link:say('探索 AI 与我的实验','Explore AI & my experiments')}
  ];
  return `<div class="page-enter"><div class="detail-top"><a class="back-link" href="#/">← 返回概览</a><span class="eyebrow">CURRENTLY ON MY MIND</span></div><header class="thoughts-intro"><span class="eyebrow">${say('三个方向，同一种好奇心','THREE DIRECTIONS. ONE CURIOSITY.')}</span><h1>${say('最近，让我停下来<br>多想一会儿的问题。','Questions I keep<br>coming back to.')}</h1><p>${say('选一个你也好奇的问题，往里面走一点。','Pick a question that makes you curious. Follow it a little further.')}</p></header><div class="thought-doors">${cards.map(c=>`<a class="card card-link thought-door ${c.cls}" href="${c.href}"><span class="eyebrow">${c.name}</span><div class="door-mark" aria-hidden="true">${c.mark}</div><h2>${c.question}</h2><p>${c.text}</p><span class="door-tags">${c.tags}</span><div class="door-link"><span>${c.link}</span>${arrow}</div></a>`).join('')}</div><p class="thoughts-foot">${say('有些问题在研究，有些在动手尝试，有些仍没有答案。','Some questions are research. Some become experiments. Some remain open.')}</p></div>`;
}
// AI is a peer of quant, with project evidence one level deeper in the lab.
profilePages.ai={number:'08',eyebrow:'INTELLIGENCE INTO ACTION',title:copy('从模型，到行动。','From models to action.'),subtitle:copy('AI 能理解什么，又能帮助我们做什么？','What can AI understand—and what can it help us do?'),intro:copy('我对 AI 的兴趣有两面：理解模型怎样从信息中学习，也探索怎样让模型成为可以协作、可以检验的系统。','My interest in AI runs in two directions: understanding how models learn from information, and exploring how to turn models into systems that can collaborate and be evaluated.'),sections:[
  ['01 / LEARNING',copy('从不同信息中学习','Learning across different kinds of information'),copy('文字、表格、医学数据，都只给出世界的一部分。把它们放在一起，模型能否形成更有用的理解？','Text, tables, and medical data each reveal part of a problem. Can combining them help a model learn something more useful?'),copy('我的项目与研究兴趣包括多模态财报预测和医学基础模型。问题不只是分数提高，而是增加的信息究竟贡献了什么。','My projects and research interests include multimodal financial-report prediction and medical foundation models. Beyond a higher score, I want to understand what each source of information contributes.')],
  ['02 / AGENTS',copy('从回答走向行动','From answering to acting'),copy('一个 Agent 如何观察、决策、行动，再根据反馈修正？多个 Agent 放在一起，又会形成怎样的行为？','How does an agent observe, decide, act, and learn from feedback? What happens when several agents interact?'),copy('多智能体与量化是我正在探索的交汇点。主页实验让学习器根据反馈调整对多个策略专家的信任；更完整的学习与协作机制仍是研究方向。','Agents and quant are one intersection I am exploring. The homepage experiment adapts its trust in several strategy experts through feedback; richer learning and coordination mechanisms remain a research direction.')],
  ['03 / EVALUATION',copy('让效果经得起追问','Making results stand up to questions'),copy('系统看起来聪明，和它可靠地完成任务，是两件需要分别检验的事。','Appearing intelligent and reliably completing a task require separate tests.'),copy('我希望从简单基线出发，检查模型用了什么信息、在哪些条件下失效，以及增加复杂度是否真的值得。','I want to start with simple baselines, examine what information a model uses and where it fails, and ask whether extra complexity earns its place.')]
],related:[['lab',copy('项目与实验','Projects & experiments')],['thoughts','当前想法'],['quant','关于量化']]};
profilePages.quant.wide[1]=copy('我把价格与成交看作参与者行为的可见结果。一个正在探索的问题是：能否从这些观测反推出稳定的行为关系？多智能体模拟、市场生态与基于模拟的推断，是我想联系的方向。近期研究也包括统计套利、横截面股票预测、风险平价和期权策略。完整方法与结果会逐项补充。','I see prices and trades as the visible outcomes of participant behavior. Could those observations reveal stable behavioral relationships? Agent-based simulation, market ecology, and simulation-based inference are directions I want to connect. Current work also includes statistical arbitrage, cross-sectional equity prediction, risk parity, and options strategies. Full methods and results will follow.');
profilePages.background.sections[2][2]=copy('我正在沿着 AI 和 Quant 两个方向探索：一边研究学习、智能体和可以运行的系统，一边研究市场机制、参与者行为与不确定性。','I am exploring two directions: AI—learning, agents, and working systems—and quant—market mechanisms, participant behavior, and uncertainty.');
Object.assign(chineseCopy,{'INTELLIGENCE INTO ACTION':'让智能走向行动','01 / LEARNING':'01 / 学习','02 / AGENTS':'02 / 智能体','03 / EVALUATION':'03 / 检验'});
// Homepage copy stays paired with the site's shared English-first localization.
function home(){return `<div class="intro-line"><span class="eyebrow">YUANSHU / ${say('思考与创造','THINKING & BUILDING')}</span><span>${say('以数学为语言，以好奇心为方向。','Mathematics as a language. Curiosity as a compass.')}</span></div>
<div class="home-grid page-enter">
  <section class="card identity-card introduction-card"><div class="portrait-intro"><img class="profile-portrait" src="/assets/yuanshu-profile.webp" width="320" height="320" alt="${say('Yuanshu Wang 的头像','Portrait of Yuanshu Wang')}" fetchpriority="high" decoding="async"><span class="eyebrow">${say('你好，我是','HELLO, I’M')}</span></div><h1>Yuanshu Wang<span class="name-period">.</span></h1><p class="identity-statement">${say('从统计学出发，<br>探索 AI、市场与更大的问题。','A statistics background.<br>A curiosity for AI, markets,<br>and the bigger questions.')}</p><div class="introduction-copy"><p>${say('我目前在 Harvard 攻读硕士，学习数理统计、数据科学、AI 与智能体。本科就读于 University of Toronto，学习统计学。','I’m a master’s student at Harvard, studying mathematical statistics, data science, AI, and intelligent agents. Previously, I studied statistics at the University of Toronto.')}</p><p>${say('我喜欢把复杂的问题拆清楚，再把想法变成可以检验的模型、可以运行的系统。这里记录我的研究、实验，以及仍在生长的思考。','I like making complex questions clear, then turning ideas into models I can test and systems I can build. This is a place for my research, experiments, and thinking in progress.')}</p></div><p class="identity-foundation">Math <span>·</span> Stat <span>·</span> Logic</p><div class="direction-links"><a href="#/ai"><span>01 / AI</span><strong>${say('让想法开始行动','Give ideas agency')} ↗</strong></a><a href="#/quant"><span>02 / QUANT</span><strong>${say('读懂市场的行为','Read the market’s behavior')} ↗</strong></a></div></section>
  <section class="card market-card" id="agent-market">${marketMarkup()}</section>
  <a class="card card-link mind-card" href="#/thoughts"><div class="card-heading"><span class="eyebrow">CURRENTLY ON MY MIND</span><span class="mind-index">03 ${say('个入口','WAYS IN')}</span></div><h2>${say('价格如何形成？<br>智能如何出现？<br>我又身在何处？','What moves a price?<br>What makes a mind?<br>Where do I fit in?')}</h2><div class="mind-bottom"><span>QUANT <i>/</i> PHILOSOPHY <i>/</i> AI</span>${arrow}</div></a>
  <a class="card card-link person-card" href="#/background"><span class="eyebrow">THE PERSON BEHIND</span><div class="study-path"><span>TORONTO</span><span aria-hidden="true">↓</span><span>HARVARD</span></div><h2>${say('问题背后的人。','A person behind<br>the questions.')}</h2><p>${say('从统计学到数据科学。一路上，哪些经历改变了我看世界的方式？','From statistics to data science. The experiences that shaped how I see the world.')}</p><span class="text-link">${say('认识我','Get to know me')} ${arrow}</span></a>
  <a class="card card-link philosophy-feature deferred-bg" href="/philosophy.html"><div><span class="eyebrow">${say('我的哲学笔记','MY PHILOSOPHICAL NOTEBOOK')}</span><h2>${say('身在世界，<br>追问世界。','Within the world.<br>Questioning the whole.')}</h2><p>${say('从一段山路，到规则、自由与第一人称。','From a mountain road to rules, freedom, and the first person.')}</p><span class="text-link">${say('进入九幕思想旅程','Enter the nine-act inquiry')} ${arrow}</span></div></a>
  <section class="foundations"><div class="foundation-heading"><span class="eyebrow">${say('贯穿所有方向的方法','THE FOUNDATION UNDERNEATH')}</span><a href="#/strengths">${say('我的思考方式','How I think')} ↗</a></div><div class="foundation-grid"><div><span aria-hidden="true">⊢</span><h2>逻辑推演</h2><p>${say('先问：前提是什么？','What are we assuming?')}</p></div><div><span aria-hidden="true">∫</span><h2>数学建模</h2><p>${say('再问：什么结构最关键？','Which structure matters?')}</p></div><div><span aria-hidden="true">σ</span><h2>统计推断</h2><p>${say('最后问：证据支持吗？','Does the evidence hold?')}</p></div></div></section>
  ${contactMarkup()}
</div>`;}
;
function contactMarkup(){const email=language==='zh'?'m15010158067_1@163.com':'wangyulin777@gmail.com';return `<section class="card social-row contact-card"><div class="social-heading">${say('在别处找到我','Find me elsewhere')}<span>${say('欢迎聊研究、作品，或一个有趣的问题。','Talk research, projects, or an interesting question.')}</span></div><div class="social-links"><a href="https://www.linkedin.com/in/yuanshu-wang-929b23324/" target="_blank" rel="noopener noreferrer">${say('领英','LinkedIn')} ↗</a><a href="https://github.com/yuanshu777" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a class="contact-email" href="mailto:${email}"><span>${say('邮箱','Email')}</span> ${email}</a><button type="button" id="wechat-copy" aria-label="${say('复制微信号 13141347891','Copy WeChat ID 13141347891')}">${say('微信','WeChat')} <span>13141347891</span><span aria-hidden="true">⧉</span></button></div><p class="contact-feedback" id="contact-feedback" role="status"></p></section>`;}
function mountContact(){document.querySelector('#wechat-copy')?.addEventListener('click',async()=>{const output=document.querySelector('#contact-feedback');try{await navigator.clipboard.writeText('13141347891');output.textContent=say('微信号已复制。','WeChat ID copied.');}catch{output.textContent=say('请手动复制微信号：13141347891','Please copy the WeChat ID manually: 13141347891');}});}
;
// Causal online expert aggregation. No future prices enter the policy.
const AgentMarket=(()=>{
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const fee=.001,initial=1000,max=60;
  function random(s){s.seed=(Math.imul(1664525,s.seed)+1013904223)>>>0;return (s.seed+.5)/4294967296;}
  function normal(s){return Math.sqrt(-2*Math.log(random(s)))*Math.cos(2*Math.PI*random(s));}
  function account(){return {cash:initial,shares:0,equity:initial,peak:initial,drawdown:0,fees:0,path:[100]};}
  function create(seed,scenario='switching'){return {seed:(seed>>>0)||1,initialSeed:(seed>>>0)||1,scenario,turn:0,max,price:100,prices:[100],returns:[],anchor:100,mode:'trend',phase:-1,direction:1,eta:24,risk:.85,scores:[0,0,0],weights:[1/3,1/3,1/3],experts:[account(),account(),account()],learner:account(),fixed:account(),hold:account(),last:null,history:[],weightHistory:[[1/3,1/3,1/3]]};}
  function signals(s){
    const recent=s.returns.slice(-5),momentum=recent.reduce((a,b)=>a+b,0)/Math.max(1,recent.length);
    let mean=s.prices[0];for(const p of s.prices.slice(1))mean=.12*p+.88*mean;
    const vol=Math.sqrt(s.returns.slice(-12).reduce((a,b)=>a+b*b,0)/Math.max(1,Math.min(12,s.returns.length)));
    const scale=Math.max(.004,vol),trend=clamp(.5+momentum/(2*scale),0,1),revert=clamp(.5+(mean/s.price-1)/(4*scale),0,1);
    return {exposures:[trend*s.risk,revert*s.risk,0],momentum,gap:mean/s.price-1,vol,mean};
  }
  function rebalance(a,exposure,price){
    const capital=a.cash+a.shares*price,target=capital*clamp(exposure,0,1)/(price*(1+fee));
    const trade=target-a.shares,cost=Math.abs(trade)*price*fee;
    a.cash-=trade*price+cost;a.shares=target;a.fees+=cost;
  }
  function mark(a,price){a.equity=a.cash+a.shares*price;a.peak=Math.max(a.peak,a.equity);a.drawdown=Math.max(a.drawdown,1-a.equity/a.peak);a.path.push(a.equity/10);}
  function step(s){
    if(s.turn>=max)return s;
    const observation=signals(s),weights=s.weights.slice(),allocation=observation.exposures.reduce((a,b,i)=>a+b*weights[i],0),before=s.experts.map(a=>a.equity);
    s.experts.forEach((a,i)=>rebalance(a,observation.exposures[i],s.price));rebalance(s.learner,allocation,s.price);rebalance(s.fixed,observation.exposures.reduce((a,b)=>a+b,0)/3,s.price);if(!s.turn)rebalance(s.hold,1,s.price);
    // Next price is generated only after all allocations. Every comparator shares it.
    const phase=Math.floor(s.turn/20),changed=phase!==s.phase;
    if(changed){s.phase=phase;s.mode=s.scenario==='switching'?(phase===1?'revert':'trend'):s.scenario;s.anchor=s.price;s.direction=random(s)>.5?1:-1;}
    const noise=normal(s)*.008,previous=s.returns.at(-1)||0;
    const drift=s.mode==='trend'?.0025*s.direction+.24*previous:-.14*Math.log(s.price/s.anchor);
    const move=clamp(drift+noise,-.06,.06);s.price*=Math.exp(move);const ret=Math.exp(move)-1;
    s.prices.push(s.price);s.returns.push(ret);[...s.experts,s.learner,s.fixed,s.hold].forEach(a=>mark(a,s.price));
    const rewards=s.experts.map((a,i)=>Math.log(a.equity/before[i]));s.scores=s.scores.map((score,i)=>.97*score+s.eta*rewards[i]);
    const highest=Math.max(...s.scores),raw=s.scores.map(v=>Math.exp(v-highest)),total=raw.reduce((a,b)=>a+b,0);s.weights=raw.map(v=>.95*v/total+.05/3);s.turn++;
    s.last={turn:s.turn,weights,allocation,exposures:observation.exposures,rewards,ret,mode:s.mode,changed:changed&&s.turn>1,momentum:observation.momentum,gap:observation.gap,vol:observation.vol};s.history.push(s.last);s.weightHistory.push(s.weights.slice());return s;
  }
  function result(s){return {team:(s.learner.equity/initial-1)*100,fixed:(s.fixed.equity/initial-1)*100,market:(s.hold.equity/initial-1)*100,edge:(s.learner.equity-s.fixed.equity)/initial*100};}
  return {create,step,result,signals,fee};
})();
;
let marketState=AgentMarket.create(74129),marketTimer=null;
const expertNames=()=>[say('趋势','Trend'),say('回归','Reversion'),say('现金','Cash')];
const marketPct=value=>(value>=0?'+':'')+value.toFixed(2)+'%';
function stopMarket(){if(marketTimer){clearInterval(marketTimer);marketTimer=null;}}
function marketMarkup(){return `<div class="card-heading"><span class="eyebrow">${say('在线学习实验','ONLINE LEARNING LAB')}</span><span class="game-round">${marketState.turn} / 60</span></div><h2>${say('市场变了，<br>智能体会改主意吗？','The market changes.<br>Does the agent adapt?')}</h2><p class="game-intro">${say('让它从每次得失中学习，与固定策略正面对比。','Let it learn from each outcome. Compare it with a fixed strategy.')}</p><div class="arena-config"><label>${say('市场环境','Market')}<select id="arena-scenario"><option value="switching" ${marketState.scenario==='switching'?'selected':''}>${say('中途切换规则','Changing regimes')}</option><option value="trend" ${marketState.scenario==='trend'?'selected':''}>${say('趋势市场','Trending')}</option><option value="revert" ${marketState.scenario==='revert'?'selected':''}>${say('均值回归市场','Mean-reverting')}</option></select></label><label>${say('学习速度','Learning speed')}<select id="arena-speed">${[[8,say('稳健','Patient')],[24,say('平衡','Balanced')],[60,say('敏捷','Responsive')]].map(([v,label])=>`<option value="${v}" ${marketState.eta===v?'selected':''}>${label}</option>`).join('')}</select></label></div><div id="market-display"></div><div class="game-actions"><button type="button" id="market-play">${say('开始观察','Watch it learn')} ▶</button><button type="button" id="market-step">${say('推进一步','Step')}</button><button type="button" id="market-reset">${say('重放','Replay')}</button></div><button type="button" class="new-market" id="market-new">${say('换一段行情','Try another market')} ↻</button><details class="game-rules"><summary>${say('打开决策记录与算法','Inspect decisions & the algorithm')}</summary><div id="arena-details"></div><p>${say('三个专家只读取已发生的价格：趋势专家看最近 5 步收益；回归专家比较当前价格与指数移动平均；现金专家不持仓。学习器先按旧权重决定仓位，行情发生后，再用每个专家扣费后的对数收益更新权重。','Three experts use past prices only: Trend reads the last 5 returns; Reversion compares price with an exponential moving average; Cash holds no position. The learner acts using its previous weights, then updates them from each expert’s net log return after the new price arrives.')}</p><div class="arena-formula">sᵢ ← 0.97sᵢ + η log(Vᵢ,t / Vᵢ,t−1)<br>wᵢ ← 0.95 softmax(s)ᵢ + 0.05 / 3</div><p>${say('固定配比使用同一组专家，始终各占三分之一。所有策略从 1,000 开始，只做多，买卖收取 0.1% 成本，使用完全相同的价格序列。专家仓位上限为 85%，买入持有基准的初始仓位为 100%。收益按当前市值计算，不含最终清仓费。','The fixed blend keeps the same experts at one-third each. Every strategy starts at 1,000, is long-only, pays 0.1% on traded value, and sees the identical price path. Expert exposure is capped at 85%; buy-and-hold starts fully invested. Returns are marked to market, before final liquidation fees.')}</p><p>${say('市场由合成随机过程产生；切换模式每 20 步改变一次生成机制，智能体看不到机制标签。重放保留种子，便于公平比较学习速度；没有保证学习器一定胜出。','Prices come from synthetic stochastic processes. Changing-regime mode switches the generator every 20 steps; the agent cannot see the regime label. Replay preserves the seed so learning speeds can be compared fairly. Adaptation does not guarantee a win.')}</p></details><p class="game-disclaimer">${say('真实运行的在线学习算法 · 合成行情 · 非大语言模型','Live online-learning algorithm · Synthetic prices · No LLM')}</p>`;}
function drawMarket(){
  const s=marketState,r=AgentMarket.result(s),names=expertNames(),lo=Math.min(97,...s.learner.path,...s.fixed.path)-1,hi=Math.max(103,...s.learner.path,...s.fixed.path)+1;
  const x=i=>12+i*356/s.max,y=v=>135-(v-lo)/(hi-lo)*113,path=values=>values.map((v,i)=>(i?'L':'M')+x(i).toFixed(2)+' '+y(v).toFixed(2)).join(' ');
  const last=s.last,top=s.weights.indexOf(Math.max(...s.weights));
  const status=last?`${say('本步仓位','Exposure used')} ${(last.allocation*100).toFixed(0)}% · ${say('下一步更信任','Next preference')}${language==='en'?' ':''}${names[top]}`:say('三个专家从同样的权重出发。点击开始，看证据如何改变选择。','Three experts start equally weighted. Press play to see evidence change the allocation.');
  const complete=s.turn>=s.max;
  document.querySelector('#market-display').innerHTML=`<div class="market-score"><div><span>${say('学习器','ADAPTIVE')}</span><strong>${marketPct(r.team)}</strong></div><div><span>${say('固定配比','FIXED BLEND')}</span><strong>${marketPct(r.fixed)}</strong></div><div><span>${say('领先百分点','EDGE (PP)')}</span><strong>${r.edge>=0?'+':''}${r.edge.toFixed(2)}</strong></div></div><svg class="market-chart" viewBox="0 0 380 160" role="img" aria-label="${say('学习器与固定配比的净值曲线，起点为 100','Adaptive and fixed-blend equity curves starting at 100')}"><path d="M12 ${y(100)}H368" stroke="#5c6f60" stroke-dasharray="3 6"/>${s.scenario==='switching'?[20,40].map(i=>`<path d="M${x(i)} 18V139" stroke="#536856" stroke-dasharray="2 6"/>`).join(''):''}<text x="12" y="12">${say('净值起点 = 100','START = 100')}</text><path class="market-series market-series-fixed" d="${path(s.fixed.path)}" fill="none"/><path class="market-series market-series-adaptive" d="${path(s.learner.path)}" fill="none"/><text x="12" y="156">0</text><text x="351" y="156">60</text></svg><div class="market-legend"><span>${say('学习器','Adaptive')}</span><span>${say('固定配比','Fixed')}</span><span>${say('种子','Seed')} ${s.initialSeed}</span></div><div class="expert-weights"><span class="weight-label">${say('下一步的策略权重','NEXT-STEP EXPERT WEIGHTS')}</span>${s.weights.map((w,i)=>`<div><span>${names[i]}</span><div class="weight-track"><i style="width:${(100*w).toFixed(2)}%"></i></div><strong>${(100*w).toFixed(0)}%</strong></div>`).join('')}</div><p class="market-story" role="status" aria-live="${marketTimer?'off':'polite'}">${complete?(r.edge>=0?say('学习器领先固定配比。','The learner beat the fixed blend.'):say('这一局，固定配比更好。','The fixed blend did better this time.'))+' '+say('重放同一段行情，比较另一种学习速度。','Replay the same market with another learning speed.'):status}</p>`;
  document.querySelector('.game-round').textContent=s.turn+' / 60';
  document.querySelector('#market-play').textContent=complete?say('实验完成','Complete'):marketTimer?say('暂停','Pause')+' Ⅱ':s.turn?say('继续观察','Continue')+' ▶':say('开始观察','Watch it learn')+' ▶';
  document.querySelector('#market-play').disabled=complete;document.querySelector('#market-step').disabled=complete||!!marketTimer;document.querySelector('#arena-scenario').disabled=s.turn>0;
  const rows=[...s.experts.map((a,i)=>({name:names[i],a})),{name:say('买入持有','Buy & hold'),a:s.hold}];
  document.querySelector('#arena-details').innerHTML=`<div class="arena-metrics"><span>${say('学习器最大回撤','Adaptive max drawdown')} <b>${(s.learner.drawdown*100).toFixed(2)}%</b></span><span>${say('累计成本','Fees paid')} <b>${s.learner.fees.toFixed(2)}</b></span></div><table class="arena-table"><thead><tr><th>${say('对照策略','Comparator')}</th><th>${say('净收益','Net return')}</th><th>${say('最大回撤','Max drawdown')}</th></tr></thead><tbody>${rows.map(({name,a})=>`<tr><td>${name}</td><td>${marketPct((a.equity/1000-1)*100)}</td><td>${(a.drawdown*100).toFixed(2)}%</td></tr>`).join('')}</tbody></table><h3>${say('最近五步：先决策，再收到结果','Last five steps: decide, then observe')}</h3><ol class="decision-log">${s.history.slice(-5).reverse().map(h=>`<li><span>${h.turn}</span><p>${say('仓位','Exposure')} ${(h.allocation*100).toFixed(0)}% → ${say('市场涨跌','market return')} ${marketPct(h.ret*100)}<br><small>${names.map((n,i)=>n+' '+(h.weights[i]*100).toFixed(0)+'%').join(' / ')}</small></p></li>`).join('')||`<li>${say('开始后会逐步记录每次决策。','Decisions will appear here as the experiment runs.')}</li>`}</ol>`;
}
function resetMarket(newSeed=false){stopMarket();const {initialSeed,scenario,eta}=marketState;marketState=AgentMarket.create(newSeed?(Date.now()>>>0):initialSeed,scenario);marketState.eta=eta;document.querySelector('#agent-market').innerHTML=marketMarkup();mountMarket();document.querySelector('#market-play').focus();}
function mountMarket(){
  if(!document.querySelector('#market-display'))return;
  document.querySelector('#arena-scenario').addEventListener('change',e=>{if(!marketState.turn){marketState.scenario=e.target.value;drawMarket();}});
  document.querySelector('#arena-speed').addEventListener('change',e=>{marketState.eta=Number(e.target.value);});
  document.querySelector('#market-step').addEventListener('click',()=>{AgentMarket.step(marketState);drawMarket();});
  document.querySelector('#market-play').addEventListener('click',()=>{if(marketTimer){stopMarket();drawMarket();return;}marketTimer=setInterval(()=>{AgentMarket.step(marketState);if(marketState.turn>=marketState.max)stopMarket();drawMarket();},180);drawMarket();});
  document.querySelector('#market-reset').addEventListener('click',()=>resetMarket(false));document.querySelector('#market-new').addEventListener('click',()=>resetMarket(true));drawMarket();
}
window.addEventListener('pagehide',stopMarket);
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopMarket();if(document.querySelector('#market-display'))drawMarket();}});
;
const main=document.querySelector('#main');
let observationCount=3;
document.documentElement.dataset.theme='research';
const arrow='<span class="round-arrow" aria-hidden="true">↗</span>';
const graphMarkup=`<svg class="chart" viewBox="0 0 400 170" role="img" aria-label="正态分布示意：增加观察后，后验分布逐渐收窄"><defs><linearGradient id="curve-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c6f38a" stop-opacity=".28"/><stop offset="1" stop-color="#c6f38a" stop-opacity="0"/></linearGradient></defs><path d="M12 145H388" fill="none" stroke="#48533e"/><path d="M106 141v8M200 141v8M294 141v8" stroke="#48533e"/><path class="prior-path" fill="none" stroke="#7c8a6f" stroke-dasharray="4 5" stroke-width="1.5"/><path class="area-path" fill="url(#curve-fill)"/><path class="posterior-path" fill="none" stroke="#c6f38a" stroke-width="2.5"/><text x="106" y="163" fill="#8c9b7f" font-family="monospace" font-size="10" text-anchor="middle">−2</text><text x="200" y="163" fill="#8c9b7f" font-family="monospace" font-size="10" text-anchor="middle">0</text><text x="294" y="163" fill="#8c9b7f" font-family="monospace" font-size="10" text-anchor="middle">2</text></svg>`;
function controls(){return `<div class="graph-footer"><div class="chart-legend"><span>先验</span><span>后验</span></div><div class="evidence-controls"><button class="evidence-reset" aria-label="重置概率实验" title="重置">↺</button><button class="evidence-add">＋ 一条证据</button></div></div><div class="graph-caption"><span class="sample-count" aria-live="polite">OBSERVATIONS / 03</span><span>P(H | D) ∝ P(D | H) P(H)</span></div>`}
const pages=profilePages;
function detail(route) {
  const p=pages[route];
  return `<div class="page-enter">
    <div class="detail-top"><a class="back-link" href="#/">← 返回概览</a><span class="eyebrow">${p.number} / PERSONAL INDEX</span></div>
    <header class="detail-hero"><span class="eyebrow">${p.eyebrow}</span><h1>${p.title}</h1><p>${p.subtitle}</p><div class="draft-note">${p.intro}</div></header>
    ${p.longform?`<a class="card longform-entry" href="/philosophy.html"><div><span class="eyebrow">W → I → W′</span><h2>${p.longform.title}</h2><p>${p.longform.text}</p></div><span class="text-link">${p.longform.link} ${arrow}</span></a>`:''}<div class="detail-grid">${p.sections.map(s=>`<section class="card detail-card"><span class="detail-num">${s[0]}</span><h2>${s[1]}</h2><p>${s[2]}</p><div class="detail-body"><p>${s[3]}</p></div></section>`).join('')}
    ${p.wide?`<section class="card detail-wide"><span class="eyebrow">ROOM FOR MORE</span><h2>${p.wide[0]}</h2><p>${p.wide[1]}</p></section>`:''}</div>
    <nav class="detail-related" aria-label="继续探索">${p.related.map(r=>`<a href="#/${r[0]}">${r[1]} ↗</a>`).join('')}</nav>
  </div>`;
}
function lab() {
  return `<div class="page-enter">
    <div class="detail-top"><a class="back-link" href="#/">← 返回概览</a><span class="eyebrow">07 / PERSONAL INDEX</span></div>
    <header class="detail-hero"><span class="eyebrow">IDEAS, MADE TANGIBLE</span><h1>好奇心的实验场。</h1><p>${profile.labSubtitle}</p><div class="draft-note">${profile.labIntro}</div></header>
    <div class="project-section-heading"><h2>${profile.labLabel}</h2><span class="eyebrow">${profile.projectLinks}</span></div>
    <div class="detail-grid lab-projects">${researchProjects.map(p=>`<section class="card detail-card"><span class="detail-num">${p.number} / <span>${p.category}</span></span><h2>${p.title}</h2><p>${p.description}</p><details class="project-focus"><summary>${profile.projectDetail}</summary><p>${p.focus}</p></details></section>`).join('')}</div>
    <div class="project-section-heading experiment-heading"><h2>${profile.demoLabel}</h2></div>
    <section class="card full-experiment"><div><span class="eyebrow">00 / AN INTERACTIVE SKETCH</span><h2>证据如何改变判断？</h2><p class="experiment-explanation">点击「一条证据」，观察先验如何更新为后验。这个小实验用正态模型，展示判断随观察增加而收窄的过程。</p><div class="formula">P(H | D) ∝ P(D | H) · P(H)</div><p class="experiment-explanation">演示假设：先验 N(0, 1)，每次独立观察值固定为 0.65，观测标准差 0.8。为方便比较，曲线使用相同的纵轴尺度；它是一个受控示例。</p><span class="small-tag">本站互动示例 · 非个人作品履历</span></div><div>${graphMarkup}${controls()}</div></section>
    <nav class="detail-related" aria-label="继续探索"><a href="#/thoughts">当前想法 ↗</a><a href="#/quant">关于量化 ↗</a></nav>
  </div>`;
}
function mountDeferredBackgrounds(){const targets=[...document.querySelectorAll('.deferred-bg')];if(!targets.length)return;const show=element=>element.classList.add('bg-ready');if(!('IntersectionObserver'in window)){setTimeout(()=>targets.forEach(show),600);return}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){show(entry.target);observer.unobserve(entry.target)}}),{rootMargin:'240px'});targets.forEach(target=>observer.observe(target));}
function render(){stopMarket();const requested=location.hash.replace(/^#\/?/,'')||'home';const route=requested==='lab'||Object.hasOwn(pages,requested)?requested:'home';main.innerHTML=route==='home'?home():route==='lab'?lab():route==='thoughts'?thoughts():detail(route);document.title=(route==='home'?'Yuanshu Wang':route==='lab'?'AI 实验室':pages[route].title)+(language==='zh'?' — 信号与结构':' — Signal & Structure');document.querySelectorAll('[data-nav]').forEach(a=>{const active=route==='home'?'home':route==='lab'?'lab':['thoughts','philosophy','quant','ai'].includes(route)?'thoughts':null;if(a.dataset.nav===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});wire();localize();mountDeferredBackgrounds();if(route==='home'){mountMarket();mountContact();}document.title=translateCopy(route==='home'?'Yuanshu Wang':route==='lab'?'AI 实验室':pages[route].title)+(language==='zh'?' — 信号与结构':' — Signal & Structure');}
function wire(){let count=observationCount;const curve=(mu,sigma)=>Array.from({length:241},(_,i)=>{const x=-4+i/30;return [(12+(x+4)*47).toFixed(2),(145-80*Math.exp(-.5*((x-mu)/sigma)**2)/(sigma*Math.sqrt(2*Math.PI))).toFixed(2)]});const path=points=>'M'+points.map(p=>p.join(' ')).join('L');function redraw(){observationCount=count;const variance=.64/(.64+count);const posterior=curve(count*.65/(.64+count),Math.sqrt(variance));document.querySelectorAll('.prior-path').forEach(e=>e.setAttribute('d',path(curve(0,1))));document.querySelectorAll('.posterior-path').forEach(e=>e.setAttribute('d',path(posterior)));document.querySelectorAll('.area-path').forEach(e=>e.setAttribute('d',path(posterior)+'L388 145L12 145Z'));document.querySelectorAll('.sample-count').forEach(e=>e.textContent='OBSERVATIONS / '+String(count).padStart(2,'0'));document.querySelectorAll('.evidence-add').forEach(e=>{e.disabled=count>=10;e.textContent=count>=10?'已观察 10 次':'＋ 一条证据'});localize();}document.querySelectorAll('.evidence-add').forEach(e=>e.addEventListener('click',()=>{count=Math.min(count+1,10);redraw()}));document.querySelectorAll('.evidence-reset').forEach(e=>e.addEventListener('click',()=>{count=0;redraw()}));redraw();const points=Array.from({length:101},(_,i)=>{let x=i*4,y=40-11*Math.sin(i*.085)-5*Math.cos(i*.14);return {x,y,noise:y+10*Math.sin(i*2.31)+6*Math.cos(i*3.65)}});document.querySelectorAll('.signal-path').forEach(e=>e.setAttribute('d','M'+points.map(p=>p.x+','+p.y.toFixed(2)).join('L')));document.querySelectorAll('.noise-path').forEach(e=>e.setAttribute('d','M'+points.map(p=>p.x+','+p.noise.toFixed(2)).join('L')));}
function finishBoot(){const boot=document.querySelector('#boot-screen'),stylesheet=document.querySelector('#site-css');const reveal=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{document.documentElement.classList.add('app-ready');setTimeout(()=>boot?.remove(),420)}));if(!stylesheet||stylesheet.media==='all')reveal();else{stylesheet.addEventListener('load',reveal,{once:true});stylesheet.addEventListener('error',reveal,{once:true});}}
document.querySelector('#year').textContent=new Date().getFullYear();window.addEventListener('hashchange',()=>{if(location.hash==='#main'){main.focus();return}render();window.scrollTo(0,0);main.focus({preventScroll:true})});render();finishBoot();
