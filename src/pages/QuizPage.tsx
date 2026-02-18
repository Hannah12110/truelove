import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router';
import { quizQuestions } from '@/data/questions';
import { calculateResult, saveAnswers, saveResult } from '@/lib/quiz';
import type { UserAnswer } from '@/types/quiz';
import { motion, AnimatePresence } from 'motion/react';

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleOptionSelect = (optionLabel: string) => {
    setSelectedOption(optionLabel);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        selectedOption
      }
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      // 进入下一题
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      // 完成测试，计算结果
      const result = calculateResult(newAnswers);
      saveAnswers(newAnswers);
      saveResult(result);
      navigate('/result');
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* 进度条 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 space-y-2"
        >
          <div className="flex justify-between items-center text-sm text-foreground/70">
            <span>第 {currentQuestionIndex + 1} 题 / 共 {quizQuestions.length} 题</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </motion.div>

        {/* 题目卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-dreamy border-2 border-primary/20 bg-card/95 backdrop-blur">
              <CardContent className="p-6 md:p-10 space-y-6">
                {/* 题目分类标签 */}
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.category}
                </div>

                {/* 题目 */}
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                  {currentQuestion.question}
                </h2>

                {/* 选项 */}
                <div className="space-y-3 pt-2">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.label}
                      onClick={() => handleOptionSelect(option.label)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 ${
                        selectedOption === option.label
                          ? 'border-primary bg-primary/10 shadow-soft'
                          : 'border-border bg-accent/30 hover:border-primary/50 hover:bg-accent/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            selectedOption === option.label
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {option.label}
                        </span>
                        <span className="flex-1 text-base md:text-lg text-foreground/90 pt-0.5">
                          {option.text}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* 下一题按钮 */}
                <div className="flex justify-between items-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    💡 请根据你的第一反应选择答案
                  </p>
                  <Button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    size="lg"
                    className="rounded-full px-8 shadow-soft hover:shadow-dreamy transition-all"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? '下一题' : '查看结果'} →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
