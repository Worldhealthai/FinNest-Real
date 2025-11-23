import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Modal from './Modal';
import { Colors, Spacing, Typography } from '@/constants/theme';

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function TermsModal({ visible, onClose }: TermsModalProps) {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Terms & Conditions"
      icon="document-text"
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.lastUpdated}>Last Updated: January 2025</Text>

          <Text style={styles.sectionTitle}>1. Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to FinNest. These Terms and Conditions govern your use of the FinNest mobile application and related services.
          </Text>
          <Text style={styles.paragraph}>
            By accessing or using FinNest, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.
          </Text>

          <Text style={styles.sectionTitle}>2. Service Description</Text>
          <Text style={styles.paragraph}>
            FinNest is an educational tracking tool designed to help UK users monitor their Individual Savings Account (ISA) contributions and allowances.
          </Text>

          <Text style={styles.subsectionTitle}>What FinNest Does</Text>
          <Text style={styles.bulletPoint}>• Track ISA contributions across multiple providers</Text>
          <Text style={styles.bulletPoint}>• Calculate remaining annual allowance</Text>
          <Text style={styles.bulletPoint}>• Display historical contribution data</Text>
          <Text style={styles.bulletPoint}>• Provide educational information about ISA types</Text>

          <Text style={styles.subsectionTitle}>What FinNest Does NOT Do</Text>
          <Text style={styles.bulletPoint}>• FinNest does NOT provide financial advice</Text>
          <Text style={styles.bulletPoint}>• FinNest does NOT manage or hold your ISA accounts</Text>
          <Text style={styles.bulletPoint}>• FinNest does NOT execute financial transactions</Text>
          <Text style={styles.bulletPoint}>• FinNest is NOT regulated by the Financial Conduct Authority (FCA)</Text>

          <Text style={styles.sectionTitle}>3. Important Disclaimers</Text>
          <Text style={styles.highlight}>
            THE SERVICE IS FOR INFORMATIONAL AND TRACKING PURPOSES ONLY.
          </Text>
          <Text style={styles.paragraph}>
            All information provided through FinNest is for general educational purposes. We do not provide investment advice, tax advice, or financial planning services.
          </Text>
          <Text style={styles.paragraph}>
            You should consult with a qualified financial advisor before making any financial decisions.
          </Text>

          <Text style={styles.sectionTitle}>4. User Responsibilities</Text>
          <Text style={styles.paragraph}>
            You are solely responsible for entering accurate contribution amounts, selecting correct ISA types and providers, and verifying all calculations independently.
          </Text>
          <Text style={styles.paragraph}>
            You must be at least 18 years old to use FinNest.
          </Text>

          <Text style={styles.subsectionTitle}>Prohibited Use</Text>
          <Text style={styles.bulletPoint}>• Use the Service for illegal purposes</Text>
          <Text style={styles.bulletPoint}>• Attempt to gain unauthorized access to our systems</Text>
          <Text style={styles.bulletPoint}>• Reverse engineer or disassemble the Service</Text>
          <Text style={styles.bulletPoint}>• Violate any applicable laws or regulations</Text>

          <Text style={styles.sectionTitle}>5. Data Storage</Text>
          <Text style={styles.paragraph}>
            All ISA contribution data you enter is stored locally on your device using AsyncStorage. We do not store your financial data on our servers or share your contribution data with third parties.
          </Text>

          <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
          <Text style={styles.paragraph}>
            To the fullest extent permitted by law, we shall not be liable for any financial losses resulting from your use of the Service, decisions made based on information in FinNest, or errors in calculations or data entry.
          </Text>
          <Text style={styles.paragraph}>
            We do not exclude or limit liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under UK law.
          </Text>

          <Text style={styles.sectionTitle}>7. Changes to the Service</Text>
          <Text style={styles.paragraph}>
            We reserve the right to modify or discontinue the Service at any time, change features or functionality, and update ISA allowance amounts and tax year information.
          </Text>

          <Text style={styles.sectionTitle}>8. Governing Law</Text>
          <Text style={styles.paragraph}>
            These Terms shall be governed by and construed in accordance with the laws of England and Wales.
          </Text>

          <Text style={styles.sectionTitle}>9. Contact Information</Text>
          <Text style={styles.paragraph}>
            If you have questions about these Terms, please contact us at support@finnest.app
          </Text>

          <View style={styles.acknowledgment}>
            <Text style={styles.highlight}>BY USING FINNEST, YOU ACKNOWLEDGE THAT:</Text>
            <Text style={styles.bulletPoint}>• You have read and understood these Terms</Text>
            <Text style={styles.bulletPoint}>• You agree to be bound by these Terms</Text>
            <Text style={styles.bulletPoint}>• FinNest is not a regulated financial service</Text>
            <Text style={styles.bulletPoint}>• You will seek professional advice for financial decisions</Text>
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
