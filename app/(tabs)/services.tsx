import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Users, Video, MapPin, Calendar, Phone } from 'lucide-react-native';

export default function ServicesScreen() {
  const handleBooking = () => {
    Linking.openURL('https://wa.me/37126037277?text=Здравствуйте! Хочу записаться на консультацию');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Nature Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.header}
          imageStyle={styles.headerBackgroundImage}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>Услуги и цены</Text>
            <Text style={styles.headerSubtitle}>Профессиональная психологическая помощь</Text>
          </View>
        </ImageBackground>

        {/* Services */}
        <View style={styles.servicesContainer}>
          
          {/* Couple Therapy */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <Text style={styles.serviceIcon}>💑</Text>
              <View style={styles.serviceHeaderText}>
                <Text style={styles.serviceTitle}>Парная консультация</Text>
                <Text style={styles.serviceSubtitle}>Совместная работа с парой по методу Готтмана</Text>
              </View>
              <Text style={styles.servicePrice}>65 €</Text>
            </View>
            
            <Text style={styles.serviceDescription}>
              Работа с парой по научно обоснованному методу Готтмана. Помогаю восстановить близость, решить проблемы в общении и укрепить отношения.
            </Text>
            
            <View style={styles.serviceDetails}>
              <View style={styles.serviceDetail}>
                <Clock size={16} color="#64748b" />
                <Text style={styles.serviceDetailText}>90 минут</Text>
              </View>
              <View style={styles.serviceDetail}>
                <Users size={16} color="#64748b" />
                <Text style={styles.serviceDetailText}>Для пары</Text>
              </View>
            </View>

            <View style={styles.serviceIncludes}>
              <Text style={styles.includesTitle}>Что включено:</Text>
              <Text style={styles.includesItem}>• Диагностика отношений по методу Готтмана</Text>
              <Text style={styles.includesItem}>• Работа с конфликтами и кризисами</Text>
              <Text style={styles.includesItem}>• Техники эффективного общения</Text>
              <Text style={styles.includesItem}>• Домашние задания и упражнения</Text>
            </View>

            <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
              <Calendar size={16} color="#ffffff" />
              <Text style={styles.bookButtonText}>Записаться</Text>
            </TouchableOpacity>
          </View>

          {/* Individual Therapy */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceHeader}>
              <Text style={styles.serviceIcon}>👤</Text>
              <View style={styles.serviceHeaderText}>
                <Text style={styles.serviceTitle}>Индивидуальная консультация</Text>
                <Text style={styles.serviceSubtitle}>Персональная консультация для работы над отношениями</Text>
              </View>
              <Text style={styles.servicePrice}>40 €</Text>
            </View>
            
            <Text style={styles.serviceDescription}>
              Индивидуальная работа с личными запросами, которые влияют на отношения: самооценка, границы, коммуникативные навыки.
            </Text>
            
            <View style={styles.serviceDetails}>
              <View style={styles.serviceDetail}>
                <Clock size={16} color="#64748b" />
                <Text style={styles.serviceDetailText}>60 минут</Text>
              </View>
              <View style={styles.serviceDetail}>
                <Users size={16} color="#64748b" />
                <Text style={styles.serviceDetailText}>1 человек</Text>
              </View>
            </View>

            <View style={styles.serviceIncludes}>
              <Text style={styles.includesTitle}>Что включено:</Text>
              <Text style={styles.includesItem}>• Глубокая диагностика личных паттернов</Text>
              <Text style={styles.includesItem}>• Работа с убеждениями и установками</Text>
              <Text style={styles.includesItem}>• Развитие навыков общения</Text>
              <Text style={styles.includesItem}>• Поддержка между сессиями</Text>
            </View>

            <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
              <Calendar size={16} color="#ffffff" />
              <Text style={styles.bookButtonText}>Записаться</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Method Section */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Метод Готтмана</Text>
            <View style={styles.methodCard}>
              <Text style={styles.methodDescription}>
                Работаю по методу Готтмана - одному из самых исследованных и эффективных подходов в парной терапии. 
                Этот метод основан на 40-летних исследованиях и помогает парам:
              </Text>
              <View style={styles.methodBenefits}>
                <Text style={styles.benefitItem}>✓ Улучшить коммуникацию</Text>
                <Text style={styles.benefitItem}>✓ Разрешать конфликты конструктивно</Text>
                <Text style={styles.benefitItem}>✓ Укреплять эмоциональную связь</Text>
                <Text style={styles.benefitItem}>✓ Строить доверие и близость</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Format Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Форматы работы</Text>
          
          <View style={styles.formatCard}>
            <MapPin size={24} color="#1e3a8a" />
            <View style={styles.formatInfo}>
              <Text style={styles.formatTitle}>Очно в кабинете</Text>
              <Text style={styles.formatDescription}>
                Riga, Skolas 12{'\n'}
                Комфортный кабинет в центре города
              </Text>
            </View>
          </View>

          <View style={styles.formatCard}>
            <Video size={24} color="#10b981" />
            <View style={styles.formatInfo}>
              <Text style={styles.formatTitle}>Онлайн консультации</Text>
              <Text style={styles.formatDescription}>
                Zoom, видеозвонки{'\n'}
                Та же эффективность, больше удобства
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Готовы начать?</Text>
          <Text style={styles.contactDescription}>
            Свяжитесь со мной для записи на консультацию или если у вас есть вопросы
          </Text>
          
          <TouchableOpacity style={styles.contactButton} onPress={handleBooking}>
            <Phone size={20} color="#ffffff" />
            <Text style={styles.contactButtonText}>WhatsApp +371 26037277</Text>
          </TouchableOpacity>
          
          <Text style={styles.contactNote}>
            Отвечаю обычно в течение нескольких часов
          </Text>
        </View>

        <View style={styles.bottomPadding} />
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
  servicesContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  serviceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  serviceHeaderText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  servicePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 16,
  },
  serviceDetails: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 16,
  },
  serviceDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  serviceDetailText: {
    fontSize: 14,
    color: '#64748b',
  },
  serviceIncludes: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  includesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  includesItem: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  bookButton: {
    backgroundColor: '#f97316',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionWithBackground: {
    minHeight: 200,
  },
  sectionBackgroundImage: {
    opacity: 0.2,
  },
  sectionOverlay: {
    backgroundColor: 'rgba(248, 250, 252, 0.92)',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  methodCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  methodDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  methodBenefits: {
    gap: 8,
  },
  benefitItem: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '500',
    textAlign: 'center',
  },
  formatCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(30, 58, 138, 0.1)',
  },
  formatInfo: {
    flex: 1,
    marginLeft: 16,
  },
  formatTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  formatDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 18,
  },
  contactSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  contactDescription: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: '#10b981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 12,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactNote: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 20,
  },
});