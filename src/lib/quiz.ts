import type { UserAnswer, QuizResult, ResultType, DimensionScores } from '@/types/quiz';
import { quizQuestions } from '@/data/questions';
import { resultTemplates } from '@/data/results';

// 计算新的四个维度得分
function calculateDimensions(scores: {
  ready: number;
  waiting: number;
  needAdjust: number;
  enjoySingle: number;
}): DimensionScores {
  // 情感准备度 = ready 分数（0-60）
  const emotional = scores.ready;

  // 行动意愿度 = ready 分数（主动性）
  const action = scores.ready;

  // 标准清晰度 = 60 - needAdjust（反向映射）
  const clarity = 60 - scores.needAdjust;

  // 外部压力抗性 = enjoySingle 分数
  const resistance = scores.enjoySingle;

  return {
    emotional,
    action,
    clarity,
    resistance
  };
}

// 计算测试结果
export function calculateResult(answers: UserAnswer[]): QuizResult {
  const scores = {
    ready: 0,
    waiting: 0,
    needAdjust: 0,
    enjoySingle: 0
  };

  // 累加每个答案的得分
  answers.forEach((answer) => {
    const question = quizQuestions.find((q) => q.id === answer.questionId);
    if (question) {
      const option = question.options.find((opt) => opt.label === answer.selectedOption);
      if (option) {
        scores.ready += option.scores.ready;
        scores.waiting += option.scores.waiting;
        scores.needAdjust += option.scores.needAdjust;
        scores.enjoySingle += option.scores.enjoySingle;
      }
    }
  });

  // 找出得分最高的类型
  let maxScore = 0;
  let resultType: ResultType = 'ready';

  (Object.keys(scores) as ResultType[]).forEach((type) => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  });

  // 计算新的四个维度得分
  const dimensions = calculateDimensions(scores);

  // 获取对应的结果模板并填充得分
  const template = resultTemplates[resultType];
  const result: QuizResult = {
    ...template,
    scores,
    dimensions
  };

  return result;
}

// 保存答案到 localStorage
export function saveAnswers(answers: UserAnswer[]): void {
  localStorage.setItem('loveQuizAnswers', JSON.stringify(answers));
}

// 从 localStorage 读取答案
export function loadAnswers(): UserAnswer[] | null {
  const saved = localStorage.getItem('loveQuizAnswers');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }
  return null;
}

// 清除保存的答案
export function clearAnswers(): void {
  localStorage.removeItem('loveQuizAnswers');
}

// 保存结果到 localStorage
export function saveResult(result: QuizResult): void {
  localStorage.setItem('loveQuizResult', JSON.stringify(result));
}

// 从 localStorage 读取结果
export function loadResult(): QuizResult | null {
  const saved = localStorage.getItem('loveQuizResult');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  }
  return null;
}

// 清除保存的结果
export function clearResult(): void {
  localStorage.removeItem('loveQuizResult');
}

// 将分数映射为星级（1-5星）
export function scoreToStars(score: number): number {
  if (score <= 12) return 1;
  if (score <= 24) return 2;
  if (score <= 36) return 3;
  if (score <= 48) return 4;
  return 5;
}

// 将分数映射为等级描述
export function scoreToLevel(score: number): string {
  if (score <= 12) return '很低';
  if (score <= 24) return '较低';
  if (score <= 36) return '一般';
  if (score <= 48) return '较高';
  return '很高';
}

// 将分数映射为颜色类名
export function scoreToColor(score: number): string {
  if (score <= 12) return 'text-muted-foreground';
  if (score <= 24) return 'text-muted-foreground';
  if (score <= 36) return 'text-secondary';
  if (score <= 48) return 'text-primary';
  return 'text-gold';
}
