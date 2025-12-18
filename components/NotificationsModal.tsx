import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from './Modal';
import GlassCard from './GlassCard';
import { Colors, Spacing, Typography } from '@/constants/theme';

interface NotificationsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function NotificationsModal({ visible, onClose }: NotificationsModalProps) {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [isaReminders, setIsaReminders] = useState(true);
  const [contributionAlerts, setContributionAlerts] = useState(true);
  const [monthlySummaries, setMonthlySummaries] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title="Notification Settings"
      icon="notifications-outline"
    >
      <View style={styles.container}>
        {/* Push Notifications */}
        <Text style={styles.sectionTitle}>General Notifications</Text>
        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.gold + '30' }]}>
                <Ionicons name="notifications" size={24} color={Colors.gold} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>Push Notifications</Text>
                <Text style={styles.optionDesc}>
                  Receive notifications on your device
                </Text>
              </View>
            </View>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={pushNotifications ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.info + '30' }]}>
                <Ionicons name="mail" size={24} color={Colors.info} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>Email Notifications</Text>
                <Text style={styles.optionDesc}>
                  Receive updates via email
                </Text>
              </View>
            </View>
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={emailNotifications ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        {/* ISA Specific Notifications */}
        <Text style={styles.sectionTitle}>ISA Alerts</Text>
        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.success + '30' }]}>
                <Ionicons name="calendar" size={24} color={Colors.success} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>ISA Year Reminders</Text>
                <Text style={styles.optionDesc}>
                  Reminders about ISA tax year deadlines
                </Text>
              </View>
            </View>
            <Switch
              value={isaReminders}
              onValueChange={setIsaReminders}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={isaReminders ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.warning + '30' }]}>
                <Ionicons name="trending-up" size={24} color={Colors.warning} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>Contribution Alerts</Text>
                <Text style={styles.optionDesc}>
                  Notify when you're close to your allowance
                </Text>
              </View>
            </View>
            <Switch
              value={contributionAlerts}
              onValueChange={setContributionAlerts}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={contributionAlerts ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        {/* Reports */}
        <Text style={styles.sectionTitle}>Reports & Summaries</Text>
        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.info + '30' }]}>
                <Ionicons name="stats-chart" size={24} color={Colors.info} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>Monthly Summaries</Text>
                <Text style={styles.optionDesc}>
                  Monthly overview of your ISA progress
                </Text>
              </View>
            </View>
            <Switch
              value={monthlySummaries}
              onValueChange={setMonthlySummaries}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={monthlySummaries ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        {/* Marketing */}
        <Text style={styles.sectionTitle}>Marketing</Text>
        <GlassCard style={styles.optionCard} intensity="medium">
          <View style={styles.option}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIcon, { backgroundColor: Colors.mediumGray + '30' }]}>
                <Ionicons name="megaphone-outline" size={24} color={Colors.mediumGray} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.optionTitle}>Marketing Emails</Text>
                <Text style={styles.optionDesc}>
                  Tips, features, and product updates
                </Text>
              </View>
            </View>
            <Switch
              value={marketingEmails}
              onValueChange={setMarketingEmails}
              trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
              thumbColor={marketingEmails ? Colors.gold : Colors.lightGray}
              ios_backgroundColor={Colors.mediumGray}
            />
          </View>
        </GlassCard>

        {/* Info Note */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color={Colors.info} />
          <Text style={styles.infoText}>
            You can customize your notification preferences at any time. Important security alerts will always be sent regardless of these settings.
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.lightGray,
    fontWeight: Typography.weights.semibold,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  optionCard: {
    padding: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: Spacing.md,
  },
  optionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  optionTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginBottom: 4,
  },
  optionDesc: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    lineHeight: 18,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.info + '20',
    padding: Spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.info + '40',
    marginTop: Spacing.md,
    gap: Spacing.sm,
  },
  infoText: {
    flex: 1,
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    lineHeight: 20,
  },
});
