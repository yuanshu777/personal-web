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
function translateCopy(value) {
  // Arrow suffixes and numeric experiment labels are generated dynamically.
  const suffix=value.endsWith(' ↗')?' ↗':'';
  const key=suffix?value.slice(0,-2):value;
  let translated;
  if(language==='en') translated=Object.hasOwn(englishCopy,key)?englishCopy[key]:key;
  else translated=Object.hasOwn(chineseCopy,key)?chineseCopy[key]:key.replace(/^(\d+) \/ PERSONAL INDEX$/, '$1 / 个人索引').replace(/^OBSERVATIONS \/ /,'观察次数 / ');
  return translated+suffix;
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
  document.querySelector('meta[name="description"]').content=language==='zh'?'Yuanshu Wang 的个人空间：统计学、Harvard Health Data Science，以及量化研究、机器学习与复杂系统。':'Yuanshu Wang — statistics, Health Data Science at Harvard, and explorations in quantitative research, machine learning, and complex systems.';
}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{
  language=button.dataset.language==='zh'?'zh':'en';
  try{localStorage.setItem('personal-site-language',language);}catch{}
  render();
}));
