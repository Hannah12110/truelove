import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router';
import { clearAnswers, clearResult } from '@/lib/quiz';
import { motion } from 'motion/react';

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    // 清除之前的答案和结果
    clearAnswers();
    clearResult();
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-dreamy border-2 border-primary/20 bg-card/95 backdrop-blur">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            {/* 装饰性元素 */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="text-6xl md:text-8xl mb-4"
            >
              💕
            </motion.div>

            {/* 主标题 */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            >
              恋爱时机测试
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-primary font-medium"
            >
              测测你的正缘什么时候出现？
            </motion.p>

            {/* 测试说明 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-accent/50 rounded-2xl p-6 space-y-3"
            >
              <p className="text-lg text-foreground/80">
                📝 20道情境化题目
              </p>
              <p className="text-lg text-foreground/80">
                ⏱️ 3分钟了解你的感情状态
              </p>
              <p className="text-lg text-foreground/80">
                💖 获得专属的爱情指南
              </p>
            </motion.div>

            {/* 开始按钮 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="pt-4"
            >
              <Button
                onClick={handleStart}
                size="lg"
                className="text-lg px-12 py-6 rounded-full shadow-soft hover:shadow-dreamy transition-all duration-300 hover:scale-105"
              >
                开始测试 ✨
              </Button>
            </motion.div>

            {/* 免责声明 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-muted-foreground pt-4"
            >
              本测试仅供娱乐，非专业心理测评
            </motion.p>
          </CardContent>
        </Card>

        {/* 浮动装饰元素 */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut'
          }}
          className="absolute top-20 left-10 text-4xl opacity-30"
        >
          💝
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-4xl opacity-30"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 0.5
          }}
          className="absolute top-1/2 right-20 text-3xl opacity-20"
        >
          ✨
        </motion.div>
      </motion.div>
    </div>
  );
}
