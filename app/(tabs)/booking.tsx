import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, Linking, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, User, Phone, MessageSquare, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function BookingScreen() {
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [alternativeDate, setAlternativeDate] = useState('');
  const [alternativeTime, setAlternativeTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const services = [
    { id: 'couple', name: 'Парная консультация', price: '65 €', duration: '90 мин' },
    { id: 'individual', name: 'Индивидуальная консультация', price: '40 €', duration: '60 мин' },
  ];

  const handleSubmit = () => {
    if (!selectedService || !preferredDate || !preferredTime || !name || !phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все обязательные поля');
      return;
    }

    const service = services.find(s => s.id === selectedService);

    const whatsappMessage = `Здравствуйте! Хочу записаться на консультацию:

Услуга: ${service?.name}
Предпочтительная дата: ${preferredDate}
Предпочтительное время: ${preferredTime}
${alternativeDate && alternativeTime ? `Альтернативная дата: ${alternativeDate}
Альтернативное время: ${alternativeTime}` : ''}
Имя: ${name}
Телефон: ${phone}
${message ? `Дополнительная информация: ${message}` : ''}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    Linking.openURL(`https://wa.me/37126037277?text=${encodedMessage}`);
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
            <Text style={styles.headerTitle}>Записаться на консультацию</Text>
            <Text style={styles.headerSubtitle}>Укажите удобные для вас дату и время</Text>
          </View>
        </ImageBackground>

        {/* Service Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Выберите услугу</Text>
          <View style={styles.servicesList}>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceOption,
                  selectedService === service.id && styles.serviceOptionSelected
                ]}
                onPress={() => setSelectedService(service.id)}
              >
                <View style={styles.serviceOptionContent}>
                  <Text style={[
                    styles.serviceOptionName,
                    selectedService === service.id && styles.serviceOptionNameSelected
                  ]}>
                    {service.name}
                  </Text>
                  <View style={styles.serviceOptionDetails}>
                    <Text style={[
                      styles.serviceOptionPrice,
                      selectedService === service.id && styles.serviceOptionPriceSelected
                    ]}>
                      {service.price}
                    </Text>
                    <Text style={[
                      styles.serviceOptionDuration,
                      selectedService === service.id && styles.serviceOptionDurationSelected
                    ]}>
                      {service.duration}
                    </Text>
                  </View>
                </View>
                {selectedService === service.id && (
                  <CheckCircle size={20} color="#ffffff" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date and Time Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Укажите желаемые дату и время</Text>
          
          <View style={styles.dateTimeSection}>
            <Text style={styles.dateTimeLabel}>Предпочтительные дата и время *</Text>
            
            <View style={styles.dateTimeRow}>
              <View style={styles.dateTimeInput}>
                <View style={styles.inputWrapper}>
                  <Calendar size={20} color="#64748b" />
                  <TextInput
                    style={styles.textInput}
                    placeholder="дд.мм.гггг"
                    value={preferredDate}
                    onChangeText={setPreferredDate}
                    placeholderTextColor="#94a3b8"
                  />
                </View>
                <Text style={styles.inputHint}>Например: 15.01.2024</Text>
              </View>
              
              <View style={styles.dateTimeInput}>
                <View style={styles.inputWrapper}>
                  <Clock size={20} color="#64748b" />
                  <TextInput
                    style={styles.textInput}
                    placeholder="чч:мм"
                    value={preferredTime}
                    onChangeText={setPreferredTime}
                    placeholderTextColor="#94a3b8"
                  />
                </View>
                <Text style={styles.inputHint}>Например: 14:30</Text>
              </View>
            </View>
          </View>

          <View style={styles.dateTimeSection}>
            <Text style={styles.dateTimeLabel}>Альтернативные дата и время (необязательно)</Text>
            
            <View style={styles.dateTimeRow}>
              <View style={styles.dateTimeInput}>
                <View style={styles.inputWrapper}>
                  <Calendar size={20} color="#64748b" />
                  <TextInput
                    style={styles.textInput}
                    placeholder="дд.мм.гггг"
                    value={alternativeDate}
                    onChangeText={setAlternativeDate}
                    placeholderTextColor="#94a3b8"
                  />
                </View>
                <Text style={styles.inputHint}>На случай, если основное время занято</Text>
              </View>
              
              <View style={styles.dateTimeInput}>
                <View style={styles.inputWrapper}>
                  <Clock size={20} color="#64748b" />
                  <TextInput
                    style={styles.textInput}
                    placeholder="чч:мм"
                    value={alternativeTime}
                    onChangeText={setAlternativeTime}
                    placeholderTextColor="#94a3b8"
                  />
                </View>
                <Text style={styles.inputHint}>Запасной вариант времени</Text>
              </View>
            </View>
          </View>

          <View style={styles.scheduleInfo}>
            <Text style={styles.scheduleInfoTitle}>📅 Режим работы:</Text>
            <Text style={styles.scheduleInfoText}>
              • Пн-Пт: 10:00 - 20:00{'\n'}
              • Суб- Воскр: 12:00 - 18:00{'\n'}
            </Text>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Ваши контакты</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Имя *</Text>
            <View style={styles.inputWrapper}>
              <User size={20} color="#64748b" />
              <TextInput
                style={styles.textInput}
                placeholder="Как к вам обращаться?"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#94a3b8"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Телефон *</Text>
            <View style={styles.inputWrapper}>
              <Phone size={20} color="#64748b" />
              <TextInput
                style={styles.textInput}
                placeholder="+371 ________"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#94a3b8"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Дополнительная информация (необязательно)</Text>
            <View style={styles.inputWrapper}>
              <MessageSquare size={20} color="#64748b" />
              <TextInput
                style={[styles.textInput, styles.textInputMultiline]}
                placeholder="Кратко опишите ситуацию или особые пожелания к времени встречи"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={3}
                placeholderTextColor="#94a3b8"
              />
            </View>
          </View>
        </View>

        {/* Important Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>ℹ️ Важная информация</Text>
          <View style={styles.notesList}>
            <Text style={styles.noteItem}>• После отправки заявки я свяжусь с вами для подтверждения времени</Text>
            <Text style={styles.noteItem}>• Если указанное время занято, предложу ближайшие свободные варианты</Text>
            <Text style={styles.noteItem}>• Консультации проводятся очно в кабинете или онлайн</Text>
            <Text style={styles.noteItem}>• Отмена или перенос возможны за 24 часа до встречи</Text>
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.submitSection}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Отправить заявку в WhatsApp</Text>
          </TouchableOpacity>
          
          <Text style={styles.submitNote}>
            Заявка будет отправлена в WhatsApp для подтверждения времени встречи
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
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  servicesList: {
    gap: 12,
  },
  serviceOption: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  serviceOptionSelected: {
    backgroundColor: '#f97316',
    borderColor: '#f97316',
  },
  serviceOptionContent: {
    flex: 1,
  },
  serviceOptionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  serviceOptionNameSelected: {
    color: '#ffffff',
  },
  serviceOptionDetails: {
    flexDirection: 'row',
    gap: 12,
  },
  serviceOptionPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f97316',
  },
  serviceOptionPriceSelected: {
    color: '#fed7aa',
  },
  serviceOptionDuration: {
    fontSize: 14,
    color: '#64748b',
  },
  serviceOptionDurationSelected: {
    color: '#fed7aa',
  },
  dateTimeSection: {
    marginBottom: 24,
  },
  dateTimeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dateTimeInput: {
    flex: 1,
  },
  inputWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 6,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
  },
  inputHint: {
    fontSize: 12,
    color: '#64748b',
    fontStyle: 'italic',
    paddingHorizontal: 4,
  },
  scheduleInfo: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  scheduleInfoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  scheduleInfoText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  textInputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  notesSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
  },
  notesList: {
    gap: 8,
  },
  noteItem: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  submitSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  submitButton: {
    backgroundColor: '#10b981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  submitNote: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomPadding: {
    height: 20,
  },
});