// 测试题目选项
export interface QuizOption {
  label: string;
  text: string;
  // 四个维度的得分：时机已到、等待中、需要调整、享受单身
  scores: {
    ready: number;
    waiting: number;
    needAdjust: number;
    enjoySingle: number;
  };
}

// 测试题目
export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: QuizOption[];
}

// 用户答案
export interface UserAnswer {
  questionId: number;
  selectedOption: string;
}

// 测试结果类型
export type ResultType = 'ready' | 'waiting' | 'needAdjust' | 'enjoySingle';

// 新的四个维度
export interface DimensionScores {
  emotional: number; // 情感准备度
  action: number; // 行动意愿度
  clarity: number; // 标准清晰度
  resistance: number; // 外部压力抗性
}

// 维度等级
export type DimensionLevel = 'very-low' | 'low' | 'medium' | 'high' | 'very-high';

// 维度展示信息
export interface DimensionDisplay {
  name: string;
  stars: number; // 1-5星
  level: DimensionLevel;
  description: string;
  color: string; // 颜色类名
}

// 测试结果
export interface QuizResult {
  type: ResultType;
  title: string;
  subtitle: string; // 副标题（引号包裹的一句话）
  icon: string;
  scores: {
    ready: number;
    waiting: number;
    needAdjust: number;
    enjoySingle: number;
  };
  dimensions: DimensionScores; // 新的四个维度得分
  meaning: string; // "这意味着什么"
  advantages: string[]; // 优势
  forecast2025: string; // 2026年运势
  nextSteps: {
    title: string;
    content: string;
  }[]; // 下一步建议
  tip: string; // 心理小贴士
}
