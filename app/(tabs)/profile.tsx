import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <AnimatedBackground />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" size={24} color={Colors.gold} />
            </TouchableOpacity>
          </View>

          {/* Profile Card */}
          <GlassCard style={styles.profileCard} intensity="dark">
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={Colors.goldGradient}
                style={styles.avatarGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.avatar}>
                  <Ionicons name="person" size={40} color={Colors.white} />
                </View>
              </LinearGradient>
              <TouchableOpacity style={styles.avatarBadge}>
                <Ionicons name="camera" size={16} color={Colors.deepNavy} />
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>Alex Johnson</Text>
            <Text style={styles.userEmail}>alex.johnson@email.com</Text>

            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statValue}>124</Text>
                <Text style={styles.statLabel}>Transactions</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statValue}>$124K</Text>
                <Text style={styles.statLabel}>Net Worth</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statValue}>8</Text>
                <Text style={styles.statLabel}>Investments</Text>
              </View>
            </View>
          </GlassCard>

          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.gold + '30' }]}>
                    <Ionicons name="person-outline" size={20} color={Colors.gold} />
                  </View>
                  <Text style={styles.menuText}>Personal Information</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.info + '30' }]}>
                    <Ionicons name="card-outline" size={20} color={Colors.info} />
                  </View>
                  <Text style={styles.menuText}>Payment Methods</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.success + '30' }]}>
                    <Ionicons name="wallet-outline" size={20} color={Colors.success} />
                  </View>
                  <Text style={styles.menuText}>Connected Accounts</Text>
                </View>
                <View style={styles.menuRight}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>3</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
                </View>
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.warning + '30' }]}>
                    <Ionicons name="shield-checkmark-outline" size={20} color={Colors.warning} />
                  </View>
                  <Text style={styles.menuText}>Security</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <GlassCard style={styles.menuCard} intensity="medium">
              <View style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.gold + '30' }]}>
                    <Ionicons name="notifications-outline" size={20} color={Colors.gold} />
                  </View>
                  <Text style={styles.menuText}>Notifications</Text>
                </View>
                <Switch
                  value={notificationsEnabled}
                  onValueChange={setNotificationsEnabled}
                  trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
                  thumbColor={notificationsEnabled ? Colors.gold : Colors.lightGray}
                  ios_backgroundColor={Colors.mediumGray}
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <View style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.info + '30' }]}>
                    <Ionicons name="finger-print" size={20} color={Colors.info} />
                  </View>
                  <Text style={styles.menuText}>Biometric Login</Text>
                </View>
                <Switch
                  value={biometricsEnabled}
                  onValueChange={setBiometricsEnabled}
                  trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
                  thumbColor={biometricsEnabled ? Colors.gold : Colors.lightGray}
                  ios_backgroundColor={Colors.mediumGray}
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <View style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.success + '30' }]}>
                    <Ionicons name="moon-outline" size={20} color={Colors.success} />
                  </View>
                  <Text style={styles.menuText}>Dark Mode</Text>
                </View>
                <Switch
                  value={darkModeEnabled}
                  onValueChange={setDarkModeEnabled}
                  trackColor={{ false: Colors.mediumGray, true: Colors.gold + '60' }}
                  thumbColor={darkModeEnabled ? Colors.gold : Colors.lightGray}
                  ios_backgroundColor={Colors.mediumGray}
                />
              </View>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.warning + '30' }]}>
                    <Ionicons name="language-outline" size={20} color={Colors.warning} />
                  </View>
                  <Text style={styles.menuText}>Language</Text>
                </View>
                <View style={styles.menuRight}>
                  <Text style={styles.menuSubtext}>English</Text>
                  <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
                </View>
              </TouchableOpacity>
            </GlassCard>
          </View>

          {/* Support Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Support</Text>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.info + '30' }]}>
                    <Ionicons name="help-circle-outline" size={20} color={Colors.info} />
                  </View>
                  <Text style={styles.menuText}>Help Center</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.success + '30' }]}>
                    <Ionicons name="chatbubble-outline" size={20} color={Colors.success} />
                  </View>
                  <Text style={styles.menuText}>Contact Support</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.gold + '30' }]}>
                    <Ionicons name="document-text-outline" size={20} color={Colors.gold} />
                  </View>
                  <Text style={styles.menuText}>Terms & Conditions</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>

            <GlassCard style={styles.menuCard} intensity="medium">
              <TouchableOpacity style={styles.menuItem}>
                <View style={styles.menuLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: Colors.warning + '30' }]}>
                    <Ionicons name="shield-outline" size={20} color={Colors.warning} />
                  </View>
                  <Text style={styles.menuText}>Privacy Policy</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.lightGray} />
              </TouchableOpacity>
            </GlassCard>
          </View>

          {/* Logout Button */}
          <GlassCard style={styles.logoutCard} intensity="medium">
            <TouchableOpacity style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={24} color={Colors.error} />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </GlassCard>

          {/* Version */}
          <Text style={styles.version}>FinNest v1.0.0</Text>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: Typography.sizes.xxl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  editButton: {
    padding: Spacing.sm,
  },
  profileCard: {
    alignItems: 'center',
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  avatarGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
    backgroundColor: Colors.deepNavy,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: Colors.deepNavy,
  },
  userName: {
    fontSize: Typography.sizes.xl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
  },
  userEmail: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    marginBottom: Spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: Typography.sizes.lg,
    color: Colors.gold,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Colors.glassLight,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.lightGray,
    fontWeight: Typography.weights.semibold,
    marginBottom: Spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  menuCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  menuText: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.medium,
  },
  menuRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  menuSubtext: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
  },
  badge: {
    backgroundColor: Colors.gold,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: Typography.sizes.xs,
    color: Colors.deepNavy,
    fontWeight: Typography.weights.bold,
  },
  logoutCard: {
    marginBottom: Spacing.md,
    padding: Spacing.md,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
  },
  logoutText: {
    fontSize: Typography.sizes.md,
    color: Colors.error,
    fontWeight: Typography.weights.semibold,
  },
  version: {
    fontSize: Typography.sizes.xs,
    color: Colors.mediumGray,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
});
