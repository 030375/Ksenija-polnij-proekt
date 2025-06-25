import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star } from 'lucide-react-native';

export default function ReviewsScreen() {
  const reviews = [
    {
      id: 1,
      name: 'Мария',
      age: 34,
      rating: 5,
      date: '2 недели назад',
      service: 'Семейная терапия',
      text: 'Ксения помогла нам с мужем пройти через кризис в отношениях. Мы были на грани развода, но благодаря её профессионализму и чуткости смогли найти общий язык. Теперь наша семья стала еще крепче.',
    },
    {
      id: 2,
      name: 'Алексей',
      age: 41,
      rating: 5,
      date: '1 месяц назад',
      service: 'Парная терапия',
      text: 'Долго сомневались, стоит ли идти к психологу. Но Ксения создала такую атмосферу доверия, что уже с первой встречи мы почувствовали себя комфортно. Получили много практических инструментов для улучшения отношений.',
    },
    {
      id: 3,
      name: 'Елена',
      age: 28,
      rating: 5,
      date: '3 недели назад',
      service: 'Детская психология',
      text: 'Обратились к Ксении из-за проблем с поведением 7-летнего сына. Она нашла подход к ребенку, объяснила нам причины его поведения и дала четкие рекомендации. Уже видим положительные изменения!',
    },
    {
      id: 4,
      name: 'Ирина и Сергей',
      age: null,
      rating: 5,
      date: '2 месяца назад',
      service: 'Семейная терапия',
      text: 'Пришли к Ксении перед свадьбой для работы с предбрачными вопросами. Очень ценная работа! Обсудили важные темы, которые помогают нам строить здоровые отношения. Рекомендуем всем парам!',
    },
    {
      id: 5,
      name: 'Татьяна',
      age: 45,
      rating: 5,
      date: '1 месяц назад',
      service: 'Индивидуальная терапия',
      text: 'После развода было очень тяжело наладить отношения с детьми. Ксения помогла мне понять свои ошибки и научила новым способам общения с подростками. Семейная атмосфера стала намного лучше.',
    },
    {
      id: 6,
      name: 'Андрей',
      age: 36,
      rating: 5,
      date: '3 недели назад',
      service: 'Парная терапия',
      text: 'Впервые столкнулся с психотерапией, было много предрассудков. Но Ксения профессионально и деликатно вела процесс. Мы с женой научились слышать друг друга и решать конфликты конструктивно.',
    },
    {
      id: 7,
      name: 'Ольга',
      age: 39,
      rating: 5,
      date: '5 дней назад',
      service: 'Семейная терапия',
      text: 'Семья проходила трудный период - конфликты между поколениями, непонимание с подростком. Ксения помогла всем нам услышать друг друга. Теперь дома царит гармония, за что ей огромное спасибо!',
    },
    {
      id: 8,
      name: 'Виктор и Анастасия',
      age: null,
      rating: 5,
      date: '6 недель назад',
      service: 'Парная терапия',
      text: 'Обратились после рождения второго ребенка - отношения дали трещину из-за стресса и усталости. Ксения научила нас поддерживать друг друга и распределять обязанности. Чувствуем себя командой!',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            color={star <= rating ? '#fbbf24' : '#e5e7eb'}
            fill={star <= rating ? '#fbbf24' : '#e5e7eb'}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Отзывы клиентов</Text>
          <Text style={styles.headerSubtitle}>Реальные истории наших семей</Text>
        </View>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5.0</Text>
              <View style={styles.statStars}>
                {renderStars(5)}
              </View>
              <Text style={styles.statLabel}>Средняя оценка</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>50+</Text>
              <Text style={styles.statLabel}>Отзывов</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Рекомендуют</Text>
            </View>
          </View>
        </View>

        {/* Reviews */}
        <View style={styles.reviewsContainer}>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewAuthor}>
                  <Text style={styles.reviewName}>
                    {review.name}
                    {review.age && `, ${review.age} лет`}
                  </Text>
                  <Text style={styles.reviewService}>{review.service}</Text>
                </View>
                <View style={styles.reviewMeta}>
                  {renderStars(review.rating)}
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Хотите поделиться своим опытом?</Text>
            <Text style={styles.ctaDescription}>
              Ваш отзыв поможет другим семьям принять решение о работе с психологом
            </Text>
            <Text style={styles.ctaContact}>
              Напишите мне в WhatsApp: +371 2 6037277
            </Text>
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#cbd5e1',
  },
  statsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  statsCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  statStars: {
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reviewAuthor: {
    flex: 1,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  reviewService: {
    fontSize: 12,
    color: '#f97316',
    fontWeight: '500',
  },
  reviewMeta: {
    alignItems: 'flex-end',
  },
  reviewDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  reviewText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  ctaCard: {
    backgroundColor: '#f97316',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 14,
    color: '#fed7aa',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  ctaContact: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 20,
  },
});