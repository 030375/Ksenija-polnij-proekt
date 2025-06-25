import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header with Mountain Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.header}
          imageStyle={styles.headerBackgroundImage}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>О психологе</Text>
            <Text style={styles.headerSubtitle}>Ксения Бодрихина</Text>
          </View>
        </ImageBackground>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://i.imgur.com/spvv5Q8.jpeg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Ксения Бодрихина</Text>
            <Text style={styles.profileTitle}>Семейный психолог, по методу Готмана</Text>
            <Text style={styles.profileExperience}>8 лет практики • 50+ семей</Text>
          </View>
        </View>

        {/* About Text with Ocean Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.aboutText}>
              Меня зовут Ксения Бодрихина. Я сертифицированный клинический психолог (RSU) и специалист по методу Готтмана. Помогла уже многим парам вернуть тепло и доверие, преодолеть кризисы и научиться конструктивному диалогу.
            </Text>
            <Text style={styles.aboutText}>
              Я верю, что каждая семья уникальна и заслуживает индивидуального подхода. 
              Главная моя цель — создать для вас безопасное пространство и передать работающие инструменты, помогающие укреплять семью.
            </Text>
          </View>
        </ImageBackground>

        {/* Diplomas Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Дипломы и сертификаты</Text>
          
          <View style={styles.diplomasGrid}>
            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/ZeKAjUE.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Диплом о высшем образовании</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/fTN9TlV.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Сертификат специализации по методу Готтмана</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/r6I8CDQ.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Сертификат повышения квалификации</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/OcQuUy4.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Сертификат семейной терапии</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/AZ83gYk.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Сертификат профессиональной подготовки</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/WH3TSZ1.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Сертификат дополнительного образования</Text>
            </View>

            <View style={styles.diplomaCard}>
              <Image
                source={{ uri: 'https://i.imgur.com/ydSQ3iZ.jpeg' }}
                style={styles.diplomaImage}
                resizeMode="cover"
              />
              <Text style={styles.diplomaCaption}>Международный сертификат</Text>
            </View>
          </View>
        </View>

        {/* Education & Credentials with Sky Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Образование и квалификация</Text>
            
            <View style={styles.credentialCard}>
              <GraduationCap size={24} color="#1e3a8a" />
              <View style={styles.credentialInfo}>
                <Text style={styles.credentialTitle}>Высшее психологическое образование</Text>
                <Text style={styles.credentialDetails}>Cертифицированный клинический психолог (RSU) </Text>
                <Text style={styles.credentialYear}>и специалист по методу Готтмана.</Text>
              </View>
            </View>

            <View style={styles.credentialCard}>
              <Award size={24} color="#f97316" />
              <View style={styles.credentialInfo}>
                <Text style={styles.credentialTitle}>Специализация</Text>
                <Text style={styles.credentialDetails}>Системная семейная терапия</Text>
                <Text style={styles.credentialYear}>Институт практической психологии, 2016</Text>
              </View>
            </View>

            <View style={styles.credentialCard}>
              <BookOpen size={24} color="#10b981" />
              <View style={styles.credentialInfo}>
                <Text style={styles.credentialTitle}>Дополнительная подготовка</Text>
                <Text style={styles.credentialDetails}>Эмоционально-фокусированная терапия (EFT)</Text>
                <Text style={styles.credentialYear}>2018-2020</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/* Approach with Nature Background */}
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800' }}
          style={styles.sectionWithBackground}
          imageStyle={styles.sectionBackgroundImage}
        >
          <View style={styles.sectionOverlay}>
            <Text style={styles.sectionTitle}>Мой подход к работе</Text>
            
            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>🤝</Text>
              <Text style={styles.approachTitle}>Доверие и безопасность</Text>
              <Text style={styles.approachDescription}>
                Создаю атмосферу доверия, где каждый член семьи чувствует себя услышанным и понятым
              </Text>
            </View>

            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>🎯</Text>
              <Text style={styles.approachTitle}>Целевой подход</Text>
              <Text style={styles.approachDescription}>
                Работаю с конкретными запросами и помогаю достичь измеримых результатов
              </Text>
            </View>

            <View style={styles.approachCard}>
              <Text style={styles.approachIcon}>💡</Text>
              <Text style={styles.approachTitle}>Практические решения</Text>
              <Text style={styles.approachDescription}>
                Даю конкретные инструменты и техники для улучшения отношений в семье
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Specializations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Области специализации</Text>
          
          <View style={styles.specializationsList}>
            <View style={styles.specializationItem}>
              <Text style={styles.specializationBullet}>•</Text>
              <Text style={styles.specializationText}>Семейные конфликты и кризисы</Text>
            </View>
            <View style={styles.specializationItem}>
              <Text style={styles.specializationBullet}>•</Text>
              <Text style={styles.specializationText}>Проблемы в отношениях между супругами</Text>
            </View>
            <View style={styles.specializationItem}>
              <Text style={styles.specializationBullet}>•</Text>
              <Text style={styles.specializationText}>Детско-родительские отношения</Text>
            </View>
            <View style={styles.specializationItem}>
              <Text style={styles.specializationBullet}>•</Text>
              <Text style={styles.specializationText}>Подготовка к браку и семейной жизни</Text>
            </View>
            <View style={styles.specializationItem}>
              <Text style={styles.specializationBullet}>•</Text>
              <Text style={styles.specializationText}>Развод и сопровождение в период расставания</Text>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Достижения</Text>
          
          <View style={styles.achievementCard}>
            <Users size={32} color="#10b981" />
            <View style={styles.achievementContent}>
              <Text style={styles.achievementNumber}>50+</Text>
              <Text style={styles.achievementLabel}>семей получили помощь</Text>
            </View>
          </View>

          <View style={styles.achievementCard}>
            <Award size={32} color="#f97316" />
            <View style={styles.achievementContent}>
              <Text style={styles.achievementNumber}>95%</Text>
              <Text style={styles.achievementLabel}>успешных случаев</Text>
            </View>
          </View>

          <View style={styles.achievementCard}>
            <GraduationCap size={32} color="#1e3a8a" />
            <View style={styles.achievementContent}>
              <Text style={styles.achievementNumber}>8</Text>
              <Text style={styles.achievementLabel}>лет опыта</Text>
            </View>
          </View>
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
    fontSize: 18,
    color: '#f97316',
    fontWeight: '600',
  },
  profileSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#f97316',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  profileTitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 8,
  },
  profileExperience: {
    fontSize: 14,
    color: '#f97316',
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
  aboutText: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  diplomasGrid: {
    gap: 16,
  },
  diplomaCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  diplomaImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f8fafc',
  },
  diplomaCaption: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
    textAlign: 'center',
  },
  credentialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(30, 58, 138, 0.1)',
  },
  credentialInfo: {
    flex: 1,
    marginLeft: 16,
  },
  credentialTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  credentialDetails: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  credentialYear: {
    fontSize: 12,
    color: '#94a3b8',
  },
  approachCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  approachIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  approachTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  approachDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  specializationsList: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.1)',
  },
  specializationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  specializationBullet: {
    fontSize: 18,
    color: '#f97316',
    fontWeight: 'bold',
    marginRight: 12,
    marginTop: 2,
  },
  specializationText: {
    fontSize: 16,
    color: '#475569',
    flex: 1,
    lineHeight: 22,
  },
  achievementCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.1)',
  },
  achievementContent: {
    marginLeft: 20,
    alignItems: 'center',
  },
  achievementNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  achievementLabel: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});