import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, Phone, Calendar, Star, CircleCheck as CheckCircle, Users, Target, TrendingUp, Smile, ClipboardList } from 'lucide-react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/37126037277');
  };
  const handleCall = () => {
    Linking.openURL('tel:+37126037277');
  };

  const handleBooking = () => {
    // Navigate to booking tab or open WhatsApp
    Linking.openURL('https://wa.me/37126037277?text=Здравствуйте! Хочу записаться на консультацию');
  };

  const handleTest = () => {
    router.push('/(tabs)/test');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section with Nature Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.heroSection}
          imageStyle={styles.heroBackgroundImage}
        >
          <View style={styles.heroOverlay}>
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                Семейный психолог{'\n'}
                <Text style={styles.heroTitleAccent}>Ксения Бодрихина</Text>
              </Text>
              <Text style={styles.heroSubtitle}>
                Сертифицированный клинический психолог (RSU) и специалист по методу Готтмана. Помогаю парам вернуть тепло и доверие
              </Text>
              <View style={styles.heroStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>8+</Text>
                  <Text style={styles.statLabel}>лет опыта</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>50+</Text>
                  <Text style={styles.statLabel}>пар</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>95%</Text>
                  <Text style={styles.statLabel}>успеха</Text>
                </View>
              </View>
            </View>
            <View style={styles.heroImageContainer}>
              <Image
                source={{ uri: 'https://i.imgur.com/spvv5Q8.jpeg' }}
                style={styles.heroImage}
              />
              <View style={styles.heroImageOverlay}>
                <Heart size={20} color="#ffffff" />
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleBooking}>
            <Calendar size={20} color="#ffffff" />
            <Text style={styles.primaryButtonText}>Записаться на консультацию</Text>
          </TouchableOpacity>
          
          <View style={styles.secondaryActions}>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleWhatsApp}>
              <Phone size={20} color="#1e3a8a" />
              <Text style={styles.secondaryButtonText}>WhatsApp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.testButton} onPress={handleTest}>
              <ClipboardList size={20} color="#10b981" />
              <Text style={styles.testButtonText}>Тест отношений</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Preview with Ocean Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Основные услуги</Text>
            <View style={styles.servicesGrid}>
              <View style={styles.serviceCard}>
                <Text style={styles.serviceIcon}>💑</Text>
                <Text style={styles.serviceTitle}>Парная консультация</Text>
                <Text style={styles.serviceDescription}>Совместная работа с парой по методу Готтмана</Text>
                <Text style={styles.servicePrice}>65 €</Text>
                <Text style={styles.serviceDuration}>90 минут</Text>
              </View>
              <View style={styles.serviceCard}>
                <Text style={styles.serviceIcon}>👤</Text>
                <Text style={styles.serviceTitle}>Индивидуальная консультация</Text>
                <Text style={styles.serviceDescription}>Персональная работа над отношениями</Text>
                <Text style={styles.servicePrice}>40 €</Text>
                <Text style={styles.serviceDuration}>60 минут</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Why Gottman Method Section */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Почему метод Готтмана?</Text>
            <View style={styles.gottmanBenefits}>
              <View style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  <CheckCircle size={24} color="#10b981" />
                </View>
                <Text style={styles.benefitTitle}>Научная доказанность</Text>
                <Text style={styles.benefitDescription}>
                  Метод основан на 40+ годах исследований сотен реальных пар. Все техники проверены временем и статистикой.
                </Text>
              </View>

              <View style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  <TrendingUp size={24} color="#f97316" />
                </View>
                <Text style={styles.benefitTitle}>Быстрый результат</Text>
                <Text style={styles.benefitDescription}>
                  Уже после первых сессий вы почувствуете сдвиги в общении и уровне доверия.
                </Text>
              </View>

              <View style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  <Target size={24} color="#1e3a8a" />
                </View>
                <Text style={styles.benefitTitle}>Эффективность</Text>
                <Text style={styles.benefitDescription}>
                  Конкретные упражнения и рекомендации помогают парам быстрее преодолеть конфликты и найти общий язык.
                </Text>
              </View>

              <View style={styles.benefitCard}>
                <View style={styles.benefitIconContainer}>
                  <Smile size={24} color="#dc2626" />
                </View>
                <Text style={styles.benefitTitle}>Позитивный фокус</Text>
                <Text style={styles.benefitDescription}>
                  Вместо «копания» в прошлом — акцент на ресурсах, здоровой коммуникации и построении счастливого будущего.
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* How Therapy Works Section */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Как проходит терапия?</Text>
            <View style={styles.therapySteps}>
              <View style={styles.stepCard}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>1</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Знакомство и диагностика</Text>
                  <Text style={styles.stepDescription}>
                    Вы рассказываете о ваших отношениях, мы проводим первичную диагностику, выявляем сильные и уязвимые стороны.
                  </Text>
                </View>
              </View>

              <View style={styles.stepCard}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>2</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Определение целей</Text>
                  <Text style={styles.stepDescription}>
                    Вместе формируем чёткие задачи: уменьшить конфликты, вернуть доверие, укрепить эмоциональную близость.
                  </Text>
                </View>
              </View>

              <View style={styles.stepCard}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>3</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Практические упражнения</Text>
                  <Text style={styles.stepDescription}>
                    Изучаем и отрабатываем техники метода Готтмана. Учимся конструктивно обсуждать любые разногласия.
                  </Text>
                </View>
              </View>

              <View style={styles.stepCard}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>4</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Закрепление результатов</Text>
                  <Text style={styles.stepDescription}>
                    На регулярных сессиях и в домашних заданиях укрепляем новые навыки, отслеживаем прогресс.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Testimonials Preview with Sky Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Что говорят клиенты</Text>
            <View style={styles.testimonialCard}>
              <View style={styles.testimonialHeader}>
                <View style={styles.stars}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </View>
                <Text style={styles.testimonialAuthor}>Мария, 34 года</Text>
              </View>
              <Text style={styles.testimonialText}>
                "Ксения помогла нам с мужем пройти через кризис в отношениях. Теперь мы понимаем друг друга намного лучше и снова счастливы вместе."
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Contact Info with Forest Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Контакты</Text>
            <View style={styles.contactMethods}>
              <TouchableOpacity style={styles.contactMethod} onPress={handleCall}>
                <Text style={styles.contactIcon}>📞</Text>
                <View>
                  <Text style={styles.contactLabel}>Телефон / WhatsApp</Text>
                  <Text style={styles.contactValue}>+371 26037277</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.contactMethod}>
                <Text style={styles.contactIcon}>📧</Text>
                <View>
                  <Text style={styles.contactLabel}>Email</Text>
                  <Text style={styles.contactValue}>ks.obuhova@gmail.com</Text>
                </View>
              </View>
              <View style={styles.contactMethod}>
                <Text style={styles.contactIcon}>📍</Text>
                <View>
                  <Text style={styles.contactLabel}>Адрес</Text>
                  <Text style={styles.contactValue}>Riga, Skolas 12</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
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
  heroSection: {
    minHeight: 400,
    justifyContent: 'center',
  },
  heroBackgroundImage: {
    opacity: 0.3,
  },
  heroOverlay: {
    backgroundColor: 'rgba(30, 58, 138, 0.4)',
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroContent: {
    flex: 1,
    paddingRight: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    lineHeight: 34,
  },
  heroTitleAccent: {
    color: '#f97316',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    marginBottom: 24,
    lineHeight: 22,
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316',
  },
  statLabel: {
    fontSize: 12,
    color: '#e2e8f0',
    marginTop: 4,
  },
  heroImageContainer: {
    position: 'relative',
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#f97316',
  },
  heroImageOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#10b981',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  quickActions: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  primaryButton: {
    backgroundColor: '#f97316',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#f97316',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryActions: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1e3a8a',
    gap: 8,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  secondaryButtonText: {
    color: '#1e3a8a',
    fontSize: 16,
    fontWeight: '600',
  },
  testButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#10b981',
    gap: 8,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  testButtonText: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionWithBackground: {
    minHeight: 300,
  },
  sectionBackgroundImage: {
    opacity: 0.2,
  },
  sectionOverlay: {
    backgroundColor: 'rgba(248, 250, 252, 0.92)',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  servicesGrid: {
    gap: 16,
  },
  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 12,
  },
  servicePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316',
    marginBottom: 4,
  },
  serviceDuration: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  gottmanBenefits: {
    gap: 16,
  },
  benefitCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  benefitIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#f8fafc',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  benefitDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  therapySteps: {
    gap: 16,
  },
  stepCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  stepNumber: {
    width: 40,
    height: 40,
    backgroundColor: '#f97316',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  testimonialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
  },
  testimonialText: {
    fontSize: 16,
    color: '#1e293b',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  contactMethods: {
    gap: 16,
  },
  contactMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(30, 58, 138, 0.1)',
  },
  contactIcon: {
    fontSize: 24,
  },
  contactLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
});