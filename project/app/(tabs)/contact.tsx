import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Phone, MessageCircle, Mail, MapPin, Clock, Video } from 'lucide-react-native';

export default function ContactScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+37126037277');
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/37126037277');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:ks.obuhova@gmail.com');
  };

  const handleMaps = () => {
    Linking.openURL('https://maps.google.com/?q=Skolas+12,+Riga,+Latvia');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Nature Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.header}
          imageStyle={styles.headerBackgroundImage}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>Контакты</Text>
            <Text style={styles.headerSubtitle}>Свяжитесь со мной удобным способом</Text>
          </View>
        </ImageBackground>

        {/* Quick Contact */}
        <View style={styles.quickContactSection}>
          <Text style={styles.sectionTitle}>Быстрая связь</Text>
          
          <View style={styles.quickContactButtons}>
            <TouchableOpacity style={styles.quickContactButton} onPress={handleCall}>
              <Phone size={24} color="#ffffff" />
              <Text style={styles.quickContactButtonText}>Позвонить</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.quickContactButton, styles.whatsappButton]} onPress={handleWhatsApp}>
              <MessageCircle size={24} color="#ffffff" />
              <Text style={styles.quickContactButtonText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Способы связи</Text>
          
          <TouchableOpacity style={styles.contactMethod} onPress={handleCall}>
            <View style={styles.contactMethodIcon}>
              <Phone size={24} color="#1e3a8a" />
            </View>
            <View style={styles.contactMethodInfo}>
              <Text style={styles.contactMethodTitle}>Телефон / WhatsApp</Text>
              <Text style={styles.contactMethodValue}>+371 26037277</Text>
              <Text style={styles.contactMethodDescription}>Звоните или пишите в любое время</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactMethod} onPress={handleEmail}>
            <View style={styles.contactMethodIcon}>
              <Mail size={24} color="#dc2626" />
            </View>
            <View style={styles.contactMethodInfo}>
              <Text style={styles.contactMethodTitle}>Email</Text>
              <Text style={styles.contactMethodValue}>ks.obuhova@gmail.com</Text>
              <Text style={styles.contactMethodDescription}>Отвечаю в течение 24 часов</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Office Location */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Адрес кабинета</Text>
            
            <TouchableOpacity style={styles.locationCard} onPress={handleMaps}>
              <View style={styles.locationHeader}>
                <MapPin size={24} color="#f97316" />
                <Text style={styles.locationTitle}>Психологический кабинет</Text>
              </View>
              
              <Text style={styles.locationAddress}>
                Riga, Skolas 12{'\n'}
                Латвия
              </Text>
              
              <View style={styles.locationFeatures}>
                <View style={styles.locationFeature}>
                  <Text style={styles.locationFeatureIcon}>🚗</Text>
                  <Text style={styles.locationFeatureText}>Удобная парковка</Text>
                </View>
                <View style={styles.locationFeature}>
                  <Text style={styles.locationFeatureIcon}>🏢</Text>
                  <Text style={styles.locationFeatureText}>Центр города</Text>
                </View>
                <View style={styles.locationFeature}>
                  <Text style={styles.locationFeatureIcon}>☕</Text>
                  <Text style={styles.locationFeatureText}>Комфортная обстановка</Text>
                </View>
              </View>
              
              <View style={styles.locationAction}>
                <Text style={styles.locationActionText}>Нажмите для открытия карт</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Working Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Режим работы</Text>
          
          <View style={styles.scheduleCard}>
            <View style={styles.scheduleHeader}>
              <Clock size={24} color="#1e3a8a" />
              <Text style={styles.scheduleTitle}>График консультаций</Text>
            </View>
            
            <View style={styles.scheduleList}>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleDay}>Понедельник - Пятница</Text>
                <Text style={styles.scheduleTime}>10:00 - 20:00</Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleDay}>Суббота</Text>
                <Text style={styles.scheduleTime}>10:00 - 16:00</Text>
              </View>
              <View style={styles.scheduleItem}>
                <Text style={styles.scheduleDay}>Воскресенье</Text>
                <Text style={styles.scheduleTime}>По договоренности</Text>
              </View>
            </View>
            
            <View style={styles.scheduleNote}>
              <Text style={styles.scheduleNoteText}>
                * Возможны консультации в вечернее время по предварительной договоренности
              </Text>
            </View>
          </View>
        </View>

        {/* Online Consultations */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Онлайн консультации</Text>
            
            <View style={styles.onlineCard}>
              <View style={styles.onlineHeader}>
                <Video size={24} color="#10b981" />
                <Text style={styles.onlineTitle}>Дистанционная работа</Text>
              </View>
              
              <Text style={styles.onlineDescription}>
                Провожу онлайн консультации с той же эффективностью, что и очные встречи. 
                Это удобно для занятых людей и клиентов из других городов.
              </Text>
              
              <View style={styles.onlinePlatforms}>
                <View style={styles.onlinePlatform}>
                  <Text style={styles.onlinePlatformIcon}>💻</Text>
                  <Text style={styles.onlinePlatformName}>Zoom</Text>
                </View>
                <View style={styles.onlinePlatform}>
                  <Text style={styles.onlinePlatformIcon}>📱</Text>
                  <Text style={styles.onlinePlatformName}>Skype</Text>
                </View>
                <View style={styles.onlinePlatform}>
                  <Text style={styles.onlinePlatformIcon}>📞</Text>
                  <Text style={styles.onlinePlatformName}>WhatsApp</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Contact CTA */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Готовы начать?</Text>
          <Text style={styles.ctaDescription}>
            Напишите мне в WhatsApp или позвоните для записи на консультацию
          </Text>
          <TouchableOpacity style={styles.ctaButton} onPress={handleWhatsApp}>
            <MessageCircle size={20} color="#ffffff" />
            <Text style={styles.ctaButtonText}>Написать в WhatsApp</Text>
          </TouchableOpacity>
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
    textAlign: 'center',
  },
  quickContactSection: {
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
  quickContactButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  quickContactButton: {
    flex: 1,
    backgroundColor: '#1e3a8a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  whatsappButton: {
    backgroundColor: '#10b981',
    shadowColor: '#10b981',
  },
  quickContactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  contactMethod: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
  contactMethodIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f8fafc',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactMethodInfo: {
    flex: 1,
  },
  contactMethodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  contactMethodValue: {
    fontSize: 16,
    color: '#f97316',
    fontWeight: '600',
    marginBottom: 4,
  },
  contactMethodDescription: {
    fontSize: 14,
    color: '#64748b',
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
  locationCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  locationAddress: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  locationFeatures: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  locationFeature: {
    alignItems: 'center',
    gap: 6,
  },
  locationFeatureIcon: {
    fontSize: 16,
  },
  locationFeatureText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  locationAction: {
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 12,
  },
  locationActionText: {
    fontSize: 14,
    color: '#f97316',
    textAlign: 'center',
    fontWeight: '500',
  },
  scheduleCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(30, 58, 138, 0.1)',
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
    justifyContent: 'center',
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  scheduleList: {
    gap: 12,
    marginBottom: 16,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleDay: {
    fontSize: 16,
    color: '#475569',
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  scheduleNote: {
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 12,
  },
  scheduleNoteText: {
    fontSize: 12,
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  onlineCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  onlineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
    justifyContent: 'center',
  },
  onlineTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  onlineDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  onlinePlatforms: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 16,
  },
  onlinePlatform: {
    alignItems: 'center',
    gap: 6,
  },
  onlinePlatformIcon: {
    fontSize: 24,
  },
  onlinePlatformName: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
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
  bottomPadding: {
    height: 20,
  },
});