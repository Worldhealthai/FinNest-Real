import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Modal from './Modal';
import { Colors, Spacing, Typography } from '@/constants/theme';

interface PrivacyPolicyModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ visible, onClose }: PrivacyPolicyModalProps) {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Privacy Policy"
      icon="shield-checkmark"
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdated}>Last Updated: January 2025</Text>

          <Text style={styles.sectionTitle}>1. Introduction</Text>
          <Text style={styles.paragraph}>
            This Privacy Policy explains how FinNest collects, uses, stores, and protects your personal information when you use our mobile application and services.
          </Text>
          <Text style={styles.paragraph}>
            We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </Text>

          <Text style={styles.sectionTitle}>2. Information We Collect</Text>

          <Text style={styles.subsectionTitle}>Financial Tracking Data (Stored Locally)</Text>
          <Text style={styles.paragraph}>
            When you use FinNest to track your ISA contributions, you may enter:
          </Text>
          <Text style={styles.bulletPoint}>• ISA contribution amounts</Text>
          <Text style={styles.bulletPoint}>• Contribution dates</Text>
          <Text style={styles.bulletPoint}>• ISA provider names</Text>
          <Text style={styles.bulletPoint}>• ISA account types</Text>

          <Text style={styles.highlight}>
            IMPORTANT: This data is stored locally on your device only. We do NOT store this financial data on our servers.
          </Text>

          <Text style={styles.subsectionTitle}>Device Information</Text>
          <Text style={styles.paragraph}>
            We may collect device type, operating system version, and app version for analytics purposes only.
          </Text>

          <Text style={styles.subsectionTitle}>What We Do NOT Collect</Text>
          <Text style={styles.bulletPoint}>• Access to your actual ISA provider accounts</Text>
          <Text style={styles.bulletPoint}>• Your ISA account numbers or login credentials</Text>
          <Text style={styles.bulletPoint}>• Your precise geolocation</Text>
          <Text style={styles.bulletPoint}>• Your contacts, photos, or other device data</Text>

          <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
          <Text style={styles.paragraph}>
            We use information to:
          </Text>
          <Text style={styles.bulletPoint}>• Provide the FinNest service</Text>
          <Text style={styles.bulletPoint}>• Calculate ISA allowances and contributions</Text>
          <Text style={styles.bulletPoint}>• Display your contribution history</Text>
          <Text style={styles.bulletPoint}>• Improve our app and fix bugs</Text>
          <Text style={styles.bulletPoint}>• Provide customer support</Text>

          <Text style={styles.sectionTitle}>4. Data Storage and Security</Text>

          <Text style={styles.subsectionTitle}>Local Storage</Text>
          <Text style={styles.paragraph}>
            Financial tracking data (ISA contributions, amounts, dates) is stored locally on your device using AsyncStorage. This data:
          </Text>
          <Text style={styles.bulletPoint}>• Remains on your device unless you delete the app</Text>
          <Text style={styles.bulletPoint}>• Is NOT transmitted to our servers</Text>
          <Text style={styles.bulletPoint}>• Will be lost if you delete the app or reset your device</Text>

          <Text style={styles.subsectionTitle}>Security Measures</Text>
          <Text style={styles.paragraph}>
            We implement appropriate technical and organizational measures to protect your data, including encryption of data in transit (HTTPS) and secure coding practices.
          </Text>

          <Text style={styles.sectionTitle}>5. Your Rights Under UK GDPR</Text>
          <Text style={styles.paragraph}>
            You have the following rights regarding your personal information:
          </Text>
          <Text style={styles.bulletPoint}>• Right of Access - Request a copy of your data</Text>
          <Text style={styles.bulletPoint}>• Right to Rectification - Correct inaccurate information</Text>
          <Text style={styles.bulletPoint}>• Right to Erasure - Request deletion of your data</Text>
          <Text style={styles.bulletPoint}>• Right to Data Portability - Receive your data in a portable format</Text>
          <Text style={styles.bulletPoint}>• Right to Object - Object to certain processing activities</Text>
          <Text style={styles.bulletPoint}>• Right to Lodge a Complaint - Contact the ICO</Text>

          <Text style={styles.sectionTitle}>6. Data Sharing</Text>
          <Text style={styles.highlight}>
            We will NEVER sell, rent, or trade your personal information to third parties for marketing purposes.
          </Text>
          <Text style={styles.paragraph}>
            We may share limited data with trusted third-party service providers who assist us with analytics and app performance monitoring.
          </Text>

          <Text style={styles.sectionTitle}>7. Children's Privacy</Text>
          <Text style={styles.paragraph}>
            FinNest is not intended for use by anyone under the age of 18. We do not knowingly collect personal information from children.
          </Text>

          <Text style={styles.sectionTitle}>8. Changes to This Policy</Text>
          <Text style={styles.paragraph}>
            We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date and posting a notice in the app.
          </Text>

          <Text style={styles.sectionTitle}>9. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have questions about this Privacy Policy or your personal information, please contact us at privacy@finnest.app
          </Text>

          <Text style={styles.sectionTitle}>10. Information Commissioner's Office</Text>
          <Text style={styles.paragraph}>
            You have the right to lodge a complaint with the UK's supervisory authority for data protection:
          </Text>
          <Text style={styles.bulletPoint}>• Website: https://ico.org.uk</Text>
          <Text style={styles.bulletPoint}>• Helpline: 0303 123 1113</Text>

          <View style={styles.acknowledgment}>
            <Text style={styles.highlight}>Data Protection Summary</Text>
            <Text style={styles.bulletPoint}>• Your ISA data stays on your device</Text>
            <Text style={styles.bulletPoint}>• We don't access your bank accounts</Text>
            <Text style={styles.bulletPoint}>• We comply with UK GDPR</Text>
            <Text style={styles.bulletPoint}>• We never sell your data</Text>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 500,
  },
  content: {
    paddingBottom: Spacing.xl,
  },
  lastUpdated: {
    fontSize: Typography.sizes.sm,
    color: Colors.mediumGray,
    fontStyle: 'italic',
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    color: Colors.gold,
    fontWeight: Typography.weights.bold,
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
  },
  subsectionTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  paragraph: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    lineHeight: 22,
    marginBottom: Spacing.md,
  },
  bulletPoint: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    lineHeight: 22,
    marginBottom: Spacing.xs,
    paddingLeft: Spacing.sm,
  },
  highlight: {
    fontSize: Typography.sizes.sm,
    color: Colors.gold,
    fontWeight: Typography.weights.bold,
    lineHeight: 22,
    marginBottom: Spacing.md,
  },
  acknowledgment: {
    backgroundColor: Colors.glassDark,
    padding: Spacing.lg,
    borderRadius: 8,
    marginTop: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.gold + '40',
  },
});
