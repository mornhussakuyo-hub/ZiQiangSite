export const navItems = [
  { label: '首页', href: '/#top' },
  { label: '往期回顾', href: '/#archive' },
  { label: '组委会', href: '/committee' },
  { label: '精彩展示', href: '/#showcase' },
  { label: 'News', href: '/#news' },
  { label: '联系我们', href: '/#contact' },
];

export const sessions = [
  {
    number: '01',
    title: '开幕主旨演讲',
    description: '由知名学者就本届主旨“知识、传承与公共理性”作开场报告，奠定研讨基调。',
    speaker: '陈守正 教授',
    time: '09:00 – 10:30',
  },
  {
    number: '02',
    title: '青年学者分论坛',
    description: '来自各高校的青年研究者汇报最新成果，涵盖人文、社科与自然科学方向。',
    speaker: '16 位报告人',
    time: '10:45 – 12:30',
  },
  {
    number: '03',
    title: '圆桌讨论',
    description: '围绕“学术共同体与青年成长”展开跨学科对话，鼓励坦诚而克制的争鸣。',
    speaker: '特邀嘉宾 6 人',
    time: '14:00 – 15:30',
  },
  {
    number: '04',
    title: '学生成果展示',
    description: '本科生与研究生报告、海报与项目材料集中展示，并设同行评议环节。',
    speaker: '入选项目 24 项',
    time: '15:45 – 17:30',
  },
  {
    number: '05',
    title: '完整日程与往期记录',
    description: '查看本届完整流程、嘉宾信息与历届研讨会归档，继续浏览每一届的主题、现场与成果。',
    speaker: '历届资料归档',
    time: '持续更新',
    href: '/archive',
    action: '进入往期回顾',
  },
];

export const archiveItems = [
  {
    slug: '2026-spring',
    edition: '第十二届',
    date: '2026.05.18',
    title: '知识、传承与公共理性',
    summary: '设主旨演讲、青年论坛、圆桌讨论与学生成果展示，讨论学术共同体的传承与责任。',
    tags: ['学术共同体', '公共理性'],
  },
  {
    slug: '2025-autumn',
    edition: '第十一届',
    date: '2025.11.02',
    title: '技术、社会与人的尺度',
    summary: '从制度、伦理与教育三个方向，重新审视技术变迁中人的位置。',
    tags: ['技术伦理', '跨学科'],
  },
];

export const members = [
  { name: '林知远', role: '组委会主席', focus: '负责总体策划、学术议程与外部联络。', initials: '林' },
  { name: '姚志远', role: '后勤与合作负责人', focus: '负责场地、物资、赞助与合作对接。', initials: '姚' },
  { name: '苏婉清', role: '内容与传播负责人', focus: '负责新闻、人物采访与资料整理。', initials: '苏' },
  { name: '周明远', role: '技术负责人', focus: '负责网站、资料归档与线上发布。', initials: '周' },
];

export const showcases = [
  {
    type: '论文',
    title: '宋代书院制度与现代大学精神',
    author: '何承泽',
    identity: '历史系 2022 级博士生',
    summary: '梳理宋代书院的组织形态与教学理念，反思其与现代大学自治、通识教育传统之间的历史延续与断裂。',
  },
  {
    type: '项目',
    title: '铯元素核反应截面的实验测定',
    author: '周明远 等',
    identity: '物理学院本科生课题组',
    summary: '利用加速器实验测定铯元素核反应截面数据，为相关天体物理模型提供新的实验约束。',
  },
  {
    type: '报告',
    title: '城市记忆的口述史方法：以北京胡同为例',
    author: '苏婉清',
    identity: '社会学系 2023 级硕士生',
    summary: '通过口述史方法记录北京胡同居民的日常记忆，讨论城市更新中的历史保存。',
  },
  {
    type: '论文',
    title: '公共理性与数字时代的信息秩序',
    author: '林知远',
    identity: '哲学系 2024 级博士生',
    summary: '考察数字媒介对公共理性的塑造作用，主张重建学术共同体的论证规范与知识权威。',
  },
];

export const sponsors = Array.from({ length: 9 }, (_, index) => ({
  name: `合作方 Logo ${String(index + 1).padStart(2, '0')}`,
  label: '合作支持单位',
  note: '正式赞助信息待组委会确认。',
}));
