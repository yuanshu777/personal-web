// First editorial draft from the owner's supplied ChatGPT memories.
// Pair copy here so both languages evolve together. No private identifiers,
// recruiting details, performance claims, or unverified profile URLs are stored.
function copy(zh, en) { englishCopy[zh] = en; return zh; }

const profile = {
  bio: copy('我在 Harvard 攻读 Health Data Science 硕士，本科背景是统计学。现在，我把数学、统计与机器学习用于探索市场和复杂系统。', 'I study Health Data Science at Harvard, with a background in statistics. I explore markets and complex systems through mathematics, statistics, and machine learning.'),
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
        copy('本科就读于 University of Toronto，学习统计学；目前在 Harvard T.H. Chan School of Public Health 攻读 Health Data Science 硕士。', 'I studied statistics as an undergraduate at the University of Toronto and am pursuing a master’s in Health Data Science at Harvard T.H. Chan School of Public Health.'),
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
