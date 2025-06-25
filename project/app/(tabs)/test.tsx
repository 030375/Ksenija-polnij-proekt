import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClipboardList, CircleCheck as CheckCircle, Heart, TriangleAlert as AlertTriangle, TrendingUp, MessageCircle } from 'lucide-react-native';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

interface TestResult {
  score: number;
  level: 'excellent' | 'good' | 'needs_improvement' | 'crisis';
  title: string;
  description: string;
  recommendations: string[];
  color: string;
  icon: React.ReactNode;
}

export default function TestScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Как часто вы обсуждаете свои эмоции и переживания друг с другом?",
      options: [
        { text: "Практически каждый день", score: 4 },
        { text: "Несколько раз в неделю", score: 3 },
        { text: "Редко, 1-2 раза в месяц", score: 2 },
        { text: "Почти никогда", score: 1 }
      ]
    },
    {
      id: 2,
      question: "Как вы оцениваете уровень доверия в ваших отношениях?",
      options: [
        { text: "Полное доверие, мы всегда откровенны друг с другом", score: 4 },
        { text: "В целом, доверие есть, но бывают сомнения", score: 3 },
        { text: "Доверие есть, но некоторые темы остаются закрытыми", score: 2 },
        { text: "Доверие низкое, часто возникают сомнения и подозрения", score: 1 }
      ]
    },
    {
      id: 3,
      question: "Насколько вам легко обсудить проблему, не переходя на конфликты?",
      options: [
        { text: "Мы спокойно обсуждаем проблемы и ищем компромисс", score: 4 },
        { text: "Иногда обсуждаем, но конфликты случаются", score: 3 },
        { text: "Обычно обсуждение приводит к конфликту", score: 2 },
        { text: "Мы избегаем обсуждать проблемы, чтобы не ссориться", score: 1 }
      ]
    },
    {
      id: 4,
      question: "Как вы ощущаете поддержку от партнёра?",
      options: [
        { text: "Всегда чувствую поддержку", score: 4 },
        { text: "Чаще всего чувствую поддержку", score: 3 },
        { text: "Поддержка иногда есть, иногда её не хватает", score: 2 },
        { text: "Поддержка редко ощущается", score: 1 }
      ]
    },
    {
      id: 5,
      question: "Есть ли в ваших отношениях чувство близости?",
      options: [
        { text: "Да, мы чувствуем себя очень близкими", score: 4 },
        { text: "Чувствуем близость, но не всегда", score: 3 },
        { text: "Близость присутствует редко", score: 2 },
        { text: "Чувство близости практически отсутствует", score: 1 }
      ]
    },
    {
      id: 6,
      question: "Насколько вы довольны текущими отношениями?",
      options: [
        { text: "Полностью доволен(а)", score: 4 },
        { text: "В целом доволен(а), но есть моменты, которые хотелось бы улучшить", score: 3 },
        { text: "Не очень доволен(а), много того, что хотелось бы изменить", score: 2 },
        { text: "Практически не доволен(а), отношения находятся в кризисе", score: 1 }
      ]
    }
  ];

  const getTestResult = (totalScore: number): TestResult => {
    if (totalScore >= 20) {
      return {
        score: totalScore,
        level: 'excellent',
        title: 'Отличные отношения',
        description: 'Ваши отношения находятся в прекрасном состоянии! Вы демонстрируете высокий уровень доверия, открытого общения и взаимной поддержки.',
        recommendations: [
          'Продолжайте поддерживать открытое общение',
          'Регулярно выражайте благодарность друг другу',
          'Планируйте совместное время для укрепления близости',
          'Делитесь своими мечтами и планами на будущее'
        ],
        color: '#10b981',
        icon: <Heart size={32} color="#10b981" />
      };
    } else if (totalScore >= 16) {
      return {
        score: totalScore,
        level: 'good',
        title: 'Хорошие отношения',
        description: 'У вас крепкие отношения с хорошей основой. Есть области для улучшения, но в целом вы на правильном пути.',
        recommendations: [
          'Работайте над улучшением коммуникации',
          'Уделяйте больше времени обсуждению эмоций',
          'Практикуйте активное слушание',
          'Создавайте больше возможностей для близости'
        ],
        color: '#f97316',
        icon: <TrendingUp size={32} color="#f97316" />
      };
    } else if (totalScore >= 12) {
      return {
        score: totalScore,
        level: 'needs_improvement',
        title: 'Отношения требуют внимания',
        description: 'В ваших отношениях есть проблемные области, которые требуют работы. Важно не откладывать решение этих вопросов.',
        recommendations: [
          'Обратитесь к семейному психологу',
          'Начните с улучшения ежедневного общения',
          'Работайте над восстановлением доверия',
          'Изучите техники конструктивного решения конфликтов'
        ],
        color: '#eab308',
        icon: <AlertTriangle size={32} color="#eab308" />
      };
    } else {
      return {
        score: totalScore,
        level: 'crisis',
        title: 'Отношения в кризисе',
        description: 'Ваши отношения переживают серьезный кризис. Необходима профессиональная помощь для восстановления здоровой динамики.',
        recommendations: [
          'Срочно обратитесь к семейному психологу',
          'Рассмотрите возможность парной терапии',
          'Работайте над базовыми навыками общения',
          'Не принимайте кардинальных решений без профессиональной поддержки'
        ],
        color: '#dc2626',
        icon: <AlertTriangle size={32} color="#dc2626" />
      };
    }
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setTestStarted(false);
  };

  const startTest = () => {
    setTestStarted(true);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = showResult ? getTestResult(totalScore) : null;

  if (!testStarted) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800' }}
            style={styles.header}
            imageStyle={styles.headerBackgroundImage}
          >
            <View style={styles.headerOverlay}>
              <ClipboardList size={48} color="#ffffff" />
              <Text style={styles.headerTitle}>Тест оценки отношений</Text>
              <Text style={styles.headerSubtitle}>Узнайте состояние ваших отношений</Text>
            </View>
          </ImageBackground>

          {/* Introduction */}
          <View style={styles.introSection}>
            <Text style={styles.introTitle}>О тесте</Text>
            <Text style={styles.introDescription}>
              Этот тест поможет вам оценить текущее состояние ваших отношений по ключевым параметрам: 
              общение, доверие, поддержка, близость и общая удовлетворенность.
            </Text>
            
            <View style={styles.testInfo}>
              <View style={styles.testInfoItem}>
                <Text style={styles.testInfoNumber}>6</Text>
                <Text style={styles.testInfoLabel}>вопросов</Text>
              </View>
              <View style={styles.testInfoItem}>
                <Text style={styles.testInfoNumber}>3-5</Text>
                <Text style={styles.testInfoLabel}>минут</Text>
              </View>
              <View style={styles.testInfoItem}>
                <Text style={styles.testInfoNumber}>100%</Text>
                <Text style={styles.testInfoLabel}>анонимно</Text>
              </View>
            </View>

            <Text style={styles.instruction}>
              <Text style={styles.instructionBold}>Инструкция:</Text> Выберите тот вариант, который наиболее точно отражает ваше текущее состояние отношений.
            </Text>

            <TouchableOpacity style={styles.startButton} onPress={startTest}>
              <Text style={styles.startButtonText}>Начать тест</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (showResult && result) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Result Header */}
          <View style={[styles.resultHeader, { backgroundColor: result.color }]}>
            {result.icon}
            <Text style={styles.resultTitle}>{result.title}</Text>
            <Text style={styles.resultScore}>Ваш результат: {result.score} из 24 баллов</Text>
          </View>

          {/* Result Description */}
          <View style={styles.resultSection}>
            <Text style={styles.resultDescription}>{result.description}</Text>
          </View>

          {/* Recommendations */}
          <View style={styles.recommendationsSection}>
            <Text style={styles.recommendationsTitle}>Рекомендации</Text>
            {result.recommendations.map((recommendation, index) => (
              <View key={index} style={styles.recommendationItem}>
                <CheckCircle size={20} color={result.color} />
                <Text style={styles.recommendationText}>{recommendation}</Text>
              </View>
            ))}
          </View>

          {/* Contact CTA */}
          <View style={styles.ctaSection}>
            <Text style={styles.ctaTitle}>Нужна профессиональная помощь?</Text>
            <Text style={styles.ctaDescription}>
              Я помогу вам улучшить отношения с помощью научно обоснованных методов
            </Text>
            <TouchableOpacity 
              style={styles.ctaButton}
              onPress={() => {/* Navigate to contact or booking */}}
            >
              <MessageCircle size={20} color="#ffffff" />
              <Text style={styles.ctaButtonText}>Записаться на консультацию</Text>
            </TouchableOpacity>
          </View>

          {/* Restart Test */}
          <View style={styles.restartSection}>
            <TouchableOpacity style={styles.restartButton} onPress={resetTest}>
              <Text style={styles.restartButtonText}>Пройти тест заново</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Вопрос {currentQuestion + 1} из {questions.length}
          </Text>
        </View>

        {/* Question */}
        <View style={styles.questionSection}>
          <Text style={styles.questionNumber}>Вопрос {currentQuestion + 1}</Text>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        </View>

        {/* Options */}
        <View style={styles.optionsSection}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option.score)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    minHeight: 200,
    justifyContent: 'center',
  },
  headerBackgroundImage: {
    opacity: 0.3,
  },
  headerOverlay: {
    backgroundColor: 'rgba(30, 58, 138, 0.85)',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
  },
  introSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
  introDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 24,
    textAlign: 'center',
  },
  testInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    backgroundColor: '#f8fafc',
    paddingVertical: 20,
    borderRadius: 12,
  },
  testInfoItem: {
    alignItems: 'center',
  },
  testInfoNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316',
    marginBottom: 4,
  },
  testInfoLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  instruction: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 32,
    textAlign: 'center',
  },
  instructionBold: {
    fontWeight: '600',
    color: '#1e293b',
  },
  startButton: {
    backgroundColor: '#f97316',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  progressSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#f97316',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  questionSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f97316',
    marginBottom: 12,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    lineHeight: 26,
  },
  optionsSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    gap: 12,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
  },
  resultHeader: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  resultScore: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  resultSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  resultDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    textAlign: 'center',
  },
  recommendationsSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  recommendationsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  recommendationText: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginLeft: 12,
    flex: 1,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  restartSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  restartButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#64748b',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  restartButtonText: {
    color: '#64748b',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomPadding: {
    height: 20,
  },
});