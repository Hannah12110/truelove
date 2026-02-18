import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router';
import { loadResult, scoreToStars, scoreToLevel, scoreToColor } from '@/lib/quiz';
import type { QuizResult } from '@/types/quiz';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function ResultPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载动画（3秒）
    const timer = setTimeout(() => {
      const savedResult = loadResult();
      if (!savedResult) {
        navigate('/');
      } else {
        setResult(savedResult);
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut'
            }}
            className="text-6xl"
          >
            💖
          </motion.div>
          <p className="text-xl text-primary font-medium">正在分析你的恋爱时机...</p>
          <Progress value={66} className="w-64 mx-auto" />
        </motion.div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  // 准备雷达图数据（新的四个维度）
  const radarData = [
    {
      dimension: '情感准备度',
      value: result.dimensions.emotional,
      fullMark: 60
    },
    {
      dimension: '行动意愿度',
      value: result.dimensions.action,
      fullMark: 60
    },
    {
      dimension: '标准清晰度',
      value: result.dimensions.clarity,
      fullMark: 60
    },
    {
      dimension: '外部压力抗性',
      value: result.dimensions.resistance,
      fullMark: 60
    }
  ];

  // 维度展示数据
  const dimensionDisplays = [
    {
      name: '情感准备度',
      score: result.dimensions.emotional,
      description: '你对爱情的心理准备程度'
    },
    {
      name: '行动意愿度',
      score: result.dimensions.action,
      description: '你愿意主动追求爱情的程度'
    },
    {
      name: '标准清晰度',
      score: result.dimensions.clarity,
      description: '你对理想伴侣的标准是否清晰'
    },
    {
      name: '外部压力抗性',
      score: result.dimensions.resistance,
      description: '你抵抗外界催婚压力的能力'
    }
  ];

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen gradient-bg py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 1. 顶部：主要结果 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-dreamy border-2 border-primary/20 bg-card/95 backdrop-blur text-center overflow-hidden relative">
            {/* 装饰性星星 */}
            <div className="absolute top-6 right-6 text-4xl opacity-30">✨</div>
            <div className="absolute top-12 left-8 text-3xl opacity-20">💫</div>

            <CardContent className="p-8 md:p-12 space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-7xl md:text-9xl"
              >
                {result.icon}
              </motion.div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                {result.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 italic font-medium">
                {result.subtitle}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 2. 中部：雷达图 + 维度详情（合并显示） */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-center text-primary">四维度倾向分析</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-8">
              {/* 桌面端：左右布局；移动端：上下布局 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* 左侧：雷达图 */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <ResponsiveContainer width="100%" height={320}>
                    <RadarChart data={radarData} margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
                      <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.3} />
                      <PolarAngleAxis
                        dataKey="dimension"
                        tick={{ 
                          fill: 'hsl(var(--foreground))', 
                          fontSize: 11, 
                          fontWeight: 500 
                        }}
                      />
                      <Radar
                        name="倾向性"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* 右侧：维度详情 */}
                <div className="w-full md:w-1/2 space-y-5">
                  {dimensionDisplays.map((dim, index) => {
                    const stars = scoreToStars(dim.score);
                    const level = scoreToLevel(dim.score);
                    const color = scoreToColor(dim.score);
                    const percentage = (dim.score / 60) * 100;

                    return (
                      <motion.div
                        key={dim.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground text-sm">{dim.name}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-lg ${color}`}>
                              {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
                            </span>
                            <span className={`text-xs font-medium ${color} min-w-[3rem] text-right`}>{level}</span>
                          </div>
                        </div>
                        <Progress value={percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground leading-relaxed">{dim.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 3. "这意味着什么" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-primary">💭 这意味着什么</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                {result.meaning.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 4. "你的优势" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-primary">✨ 你的优势</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/30"
                >
                  <span className="text-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-foreground/90">{adv}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* 5. 2026年爱情运势 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-primary">🔮 2026年爱情运势</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 leading-relaxed">{result.forecast2025}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 6. "下一步建议" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-primary">📌 下一步建议</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {result.nextSteps.map((step, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      <span className="font-medium">{index + 1}. {step.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* 7. 心理小贴士 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-soft border-2 border-primary/10 bg-gradient-to-br from-accent/50 to-secondary/20 backdrop-blur">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="text-3xl mb-4">💡</div>
              <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed">
                "{result.tip}"
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 8. 底部功能按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center pb-8"
        >
          <Button
            onClick={handleRestart}
            size="lg"
            className="rounded-full px-12 shadow-soft hover:shadow-dreamy transition-all"
          >
            重新测试
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
