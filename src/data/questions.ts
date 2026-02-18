import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: '社交场景',
    question: '在朋友的聚会上，你注意到有人一直在看你。你会：',
    options: [
      {
        label: 'A',
        text: '假装没看见，继续和朋友聊天',
        scores: { ready: 0, waiting: 2, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'B',
        text: '主动走过去打招呼',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '心里暗暗期待他会过来，但不敢主动',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'D',
        text: '觉得很不自在，想早点离开',
        scores: { ready: 0, waiting: 0, needAdjust: 3, enjoySingle: 1 }
      }
    ]
  },
  {
    id: 2,
    category: '社交场景',
    question: '朋友给你介绍了一个对象，发来对方的照片。你的第一反应是：',
    options: [
      {
        label: 'A',
        text: '立刻翻看对方的朋友圈，了解更多信息',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '有点紧张，不知道该聊什么',
        scores: { ready: 1, waiting: 3, needAdjust: 2, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"还凑合"，但也没有特别心动',
        scores: { ready: 0, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '没什么兴趣，觉得自己现在不需要',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 3,
    category: '社交场景',
    question: '你在社交媒体上刷到一个很喜欢的博主，Ta 的恋爱观和你很像。你会：',
    options: [
      {
        label: 'A',
        text: '立刻关注，并想和 Ta 做朋友',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '点赞几条内容，但不会主动互动',
        scores: { ready: 1, waiting: 2, needAdjust: 1, enjoySingle: 1 }
      },
      {
        label: 'C',
        text: '觉得"说得好"，但不会特别在意',
        scores: { ready: 0, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '无感，划过去',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 4,
    category: '情感反应',
    question: '看到朋友晒出甜蜜的合照，你的第一反应是：',
    options: [
      {
        label: 'A',
        text: '真心地为他们感到开心',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 1 }
      },
      {
        label: 'B',
        text: '有点羡慕，也想有一段这样的关系',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"挺甜"，但没有强烈的情绪波动',
        scores: { ready: 0, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '甚至有点反感，觉得秀恩爱很无聊',
        scores: { ready: 0, waiting: 0, needAdjust: 2, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 5,
    category: '情感反应',
    question: '听到朋友分手的消息，你会：',
    options: [
      {
        label: 'A',
        text: '主动安慰，愿意听 Ta 倾诉',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '感慨"感情真复杂"，心里有点难过',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"可惜"，但很快就过去了',
        scores: { ready: 0, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '觉得"这很正常"，不太受影响',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 6,
    category: '情感反应',
    question: '看到一部爱情电影，结尾男女主角终于在一起。你会：',
    options: [
      {
        label: 'A',
        text: '感动落泪，觉得爱情很美好',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '暗暗期待自己也能遇到这样的爱情',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"挺好看的"，但不会特别激动',
        scores: { ready: 0, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '觉得"太戏剧化了"，不太现实',
        scores: { ready: 0, waiting: 0, needAdjust: 2, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 7,
    category: '自我认知',
    question: '如果用三个词形容你现在的感情状态，你会选：',
    options: [
      {
        label: 'A',
        text: '充满期待、准备好了、相信爱情',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '渴望但有点害怕、等待对的人、不将就',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '有些困惑、需要时间、先提升自己',
        scores: { ready: 0, waiting: 1, needAdjust: 3, enjoySingle: 1 }
      },
      {
        label: 'D',
        text: '享受当下、独立自主、不着急',
        scores: { ready: 0, waiting: 0, needAdjust: 0, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 8,
    category: '自我认知',
    question: '你觉得，一段好的感情最重要的条件是：',
    options: [
      {
        label: 'A',
        text: '双方都愿意付出，共同成长',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '彼此理解和支持，给对方安全感',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '合适的时机，对的人',
        scores: { ready: 1, waiting: 2, needAdjust: 2, enjoySingle: 0 }
      },
      {
        label: 'D',
        text: '不强求，顺其自然',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 9,
    category: '自我认知',
    question: '如果现在有一段感情向你靠近，你的态度是：',
    options: [
      {
        label: 'A',
        text: '勇敢迎接，相信缘分',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '既期待又有点紧张，慢慢来',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '观察一段时间，再决定',
        scores: { ready: 0, waiting: 2, needAdjust: 2, enjoySingle: 1 }
      },
      {
        label: 'D',
        text: '觉得"还没准备好"，可能会拒绝',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 10,
    category: '成长轨迹',
    question: '回想过去的一段感情，你觉得最大的收获是：',
    options: [
      {
        label: 'A',
        text: '明白了自己真正想要什么',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '学会了如何更好地爱人',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '发现了自己的不足，需要改进',
        scores: { ready: 0, waiting: 1, needAdjust: 3, enjoySingle: 1 }
      },
      {
        label: 'D',
        text: '意识到单身其实也很好',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 11,
    category: '成长轨迹',
    question: '你对未来 3 年的感情期待是：',
    options: [
      {
        label: 'A',
        text: '希望能遇到对的人，走向稳定',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '保持开放心态，如果遇到了就试试',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '先专注于自己，感情随缘',
        scores: { ready: 0, waiting: 1, needAdjust: 2, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '不刻意期待，也不排斥机会',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 12,
    category: '成长轨迹',
    question: '如果现在没有感情，你会：',
    options: [
      {
        label: 'A',
        text: '积极参加社交，扩大机会',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '偶尔会期待，但不会特别主动',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '把更多时间放在自己身上',
        scores: { ready: 0, waiting: 1, needAdjust: 2, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '觉得很自在，享受单身生活',
        scores: { ready: 0, waiting: 0, needAdjust: 0, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 13,
    category: '现实压力',
    question: '家人开始催婚，你的反应是：',
    options: [
      {
        label: 'A',
        text: '会认真考虑，但不会因为催促而妥协',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '有点压力，但觉得"缘分到了自然会遇到"',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"还早"，不想着急',
        scores: { ready: 0, waiting: 1, needAdjust: 2, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '不太在意，觉得单身也挺好的',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 14,
    category: '现实压力',
    question: '看到同龄人结婚生子，你会：',
    options: [
      {
        label: 'A',
        text: '真心祝福，同时期待自己的缘分',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '有点羡慕，但不会特别焦虑',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"每个人都有自己的节奏"',
        scores: { ready: 0, waiting: 1, needAdjust: 2, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '觉得"这样也不错，但我还是更自由"',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 15,
    category: '现实压力',
    question: '如果一直遇不到对的人，你会：',
    options: [
      {
        label: 'A',
        text: '相信缘分，继续寻找',
        scores: { ready: 3, waiting: 2, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '可能会降低一些标准，试试看',
        scores: { ready: 1, waiting: 3, needAdjust: 2, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '觉得"可能缘分没到"，先过好自己',
        scores: { ready: 0, waiting: 1, needAdjust: 2, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '觉得"单身也很好"，不一定非要恋爱',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 16,
    category: '内心冲突',
    question: '你觉得"对的人"应该：',
    options: [
      {
        label: 'A',
        text: '彼此有相似的价值观和目标',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '能给你安全感和归属感',
        scores: { ready: 2, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '合适的时机出现，自然相遇',
        scores: { ready: 1, waiting: 2, needAdjust: 2, enjoySingle: 0 }
      },
      {
        label: 'D',
        text: '不强求，如果遇到了就是缘分',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 17,
    category: '内心冲突',
    question: '你在感情中最害怕的是：',
    options: [
      {
        label: 'A',
        text: '再次受伤害，不敢全身心投入',
        scores: { ready: 1, waiting: 2, needAdjust: 3, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '遇不到对的人，浪费时间',
        scores: { ready: 2, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '选择了错误的人，后悔',
        scores: { ready: 1, waiting: 2, needAdjust: 2, enjoySingle: 0 }
      },
      {
        label: 'D',
        text: '失去了自由，被束缚',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 18,
    category: '内心冲突',
    question: '如果有人说"你现在不适合恋爱"，你会：',
    options: [
      {
        label: 'A',
        text: '有点受伤，但会反思自己',
        scores: { ready: 1, waiting: 2, needAdjust: 3, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '觉得"可能对吧"，慢慢调整',
        scores: { ready: 0, waiting: 2, needAdjust: 3, enjoySingle: 1 }
      },
      {
        label: 'C',
        text: '觉得"这是我的选择"，不会太在意',
        scores: { ready: 2, waiting: 1, needAdjust: 1, enjoySingle: 2 }
      },
      {
        label: 'D',
        text: '完全不认同，单身也很好',
        scores: { ready: 0, waiting: 0, needAdjust: 0, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 19,
    category: '行动倾向',
    question: '假设你对一个朋友有了好感，你会：',
    options: [
      {
        label: 'A',
        text: '找机会多接触，试探对方的意思',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '有点纠结，不知道该不该主动',
        scores: { ready: 1, waiting: 3, needAdjust: 1, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '先观察一段时间，再做决定',
        scores: { ready: 0, waiting: 2, needAdjust: 2, enjoySingle: 1 }
      },
      {
        label: 'D',
        text: '压抑这种感情，保持朋友关系',
        scores: { ready: 0, waiting: 0, needAdjust: 1, enjoySingle: 3 }
      }
    ]
  },
  {
    id: 20,
    category: '行动倾向',
    question: '如果你现在必须给自己一个"感情状态标签"，你会选：',
    options: [
      {
        label: 'A',
        text: '渴望爱情，准备好了',
        scores: { ready: 3, waiting: 1, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'B',
        text: '期待爱情，但还在等待',
        scores: { ready: 1, waiting: 3, needAdjust: 0, enjoySingle: 0 }
      },
      {
        label: 'C',
        text: '有期待但不急，先提升自己',
        scores: { ready: 0, waiting: 1, needAdjust: 3, enjoySingle: 1 }
      },
      {
        label: 'D',
        text: '享受单身，不着急',
        scores: { ready: 0, waiting: 0, needAdjust: 0, enjoySingle: 3 }
      }
    ]
  }
];
