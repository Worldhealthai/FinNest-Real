import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
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
            <View>
              <Text style={styles.greeting}>Welcome back,</Text>
              <Text style={styles.userName}>Alex Johnson</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Ionicons name="notifications" size={24} color={Colors.gold} />
              <View style={styles.badge} />
            </TouchableOpacity>
          </View>

          {/* Total Balance Card */}
          <GlassCard style={styles.balanceCard} intensity="dark">
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$124,586.50</Text>
            <View style={styles.balanceChange}>
              <Ionicons name="trending-up" size={16} color={Colors.success} />
              <Text style={styles.balanceChangeText}>+12.5% this month</Text>
            </View>

            <View style={styles.balanceActions}>
              <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                  colors={Colors.goldGradient}
                  style={styles.actionGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="arrow-up" size={20} color={Colors.deepNavy} />
                </LinearGradient>
                <Text style={styles.actionText}>Send</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                  colors={Colors.goldGradient}
                  style={styles.actionGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="arrow-down" size={20} color={Colors.deepNavy} />
                </LinearGradient>
                <Text style={styles.actionText}>Receive</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                  colors={Colors.goldGradient}
                  style={styles.actionGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Ionicons name="swap-horizontal" size={20} color={Colors.deepNavy} />
                </LinearGradient>
                <Text style={styles.actionText}>Exchange</Text>
              </TouchableOpacity>
            </View>
          </GlassCard>

          {/* Quick Stats */}
          <View style={styles.statsGrid}>
            <GlassCard style={styles.statCard} intensity="medium">
              <Ionicons name="wallet" size={24} color={Colors.gold} />
              <Text style={styles.statValue}>$24,580</Text>
              <Text style={styles.statLabel}>Cash</Text>
              <Text style={styles.statChange}>+5.2%</Text>
            </GlassCard>

            <GlassCard style={styles.statCard} intensity="medium">
              <Ionicons name="trending-up" size={24} color={Colors.success} />
              <Text style={styles.statValue}>$89,450</Text>
              <Text style={styles.statLabel}>Investments</Text>
              <Text style={styles.statChange}>+18.4%</Text>
            </GlassCard>

            <GlassCard style={styles.statCard} intensity="medium">
              <Ionicons name="card" size={24} color={Colors.info} />
              <Text style={styles.statValue}>$10,556</Text>
              <Text style={styles.statLabel}>Savings</Text>
              <Text style={styles.statChange}>+3.1%</Text>
            </GlassCard>
          </View>

          {/* Recent Transactions */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Transactions</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            <GlassCard style={styles.transactionCard} intensity="medium">
              <View style={styles.transaction}>
                <View style={styles.transactionIcon}>
                  <Ionicons name="logo-apple" size={20} color={Colors.white} />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>Apple Inc.</Text>
                  <Text style={styles.transactionDate}>Today, 2:45 PM</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={styles.transactionValue}>-$1,240.00</Text>
                  <Text style={styles.transactionShares}>+12 shares</Text>
                </View>
              </View>
            </GlassCard>

            <GlassCard style={styles.transactionCard} intensity="medium">
              <View style={styles.transaction}>
                <View style={[styles.transactionIcon, { backgroundColor: Colors.success + '30' }]}>
                  <Ionicons name="card" size={20} color={Colors.success} />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>Salary Deposit</Text>
                  <Text style={styles.transactionDate}>Yesterday</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={[styles.transactionValue, { color: Colors.success }]}>+$5,200.00</Text>
                </View>
              </View>
            </GlassCard>

            <GlassCard style={styles.transactionCard} intensity="medium">
              <View style={styles.transaction}>
                <View style={[styles.transactionIcon, { backgroundColor: Colors.gold + '30' }]}>
                  <Ionicons name="cart" size={20} color={Colors.gold} />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>Amazon Purchase</Text>
                  <Text style={styles.transactionDate}>2 days ago</Text>
                </View>
                <View style={styles.transactionAmount}>
                  <Text style={styles.transactionValue}>-$89.99</Text>
                </View>
              </View>
            </GlassCard>
          </View>

          {/* Investment Opportunities */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top Picks For You</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Explore</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScroll}
            >
              <GlassCard style={styles.pickCard} intensity="dark">
                <View style={styles.pickHeader}>
                  <Text style={styles.pickSymbol}>AAPL</Text>
                  <View style={styles.pickBadge}>
                    <Text style={styles.pickBadgeText}>+2.5%</Text>
                  </View>
                </View>
                <Text style={styles.pickName}>Apple Inc.</Text>
                <Text style={styles.pickPrice}>$178.45</Text>
                <View style={styles.pickChart}>
                  <Text style={styles.pickChartText}>📈</Text>
                </View>
              </GlassCard>

              <GlassCard style={styles.pickCard} intensity="dark">
                <View style={styles.pickHeader}>
                  <Text style={styles.pickSymbol}>TSLA</Text>
                  <View style={[styles.pickBadge, { backgroundColor: Colors.success + '30' }]}>
                    <Text style={styles.pickBadgeText}>+5.8%</Text>
                  </View>
                </View>
                <Text style={styles.pickName}>Tesla Inc.</Text>
                <Text style={styles.pickPrice}>$242.80</Text>
                <View style={styles.pickChart}>
                  <Text style={styles.pickChartText}>📈</Text>
                </View>
              </GlassCard>

              <GlassCard style={styles.pickCard} intensity="dark">
                <View style={styles.pickHeader}>
                  <Text style={styles.pickSymbol}>MSFT</Text>
                  <View style={styles.pickBadge}>
                    <Text style={styles.pickBadgeText}>+1.2%</Text>
                  </View>
                </View>
                <Text style={styles.pickName}>Microsoft</Text>
                <Text style={styles.pickPrice}>$385.20</Text>
                <View style={styles.pickChart}>
                  <Text style={styles.pickChartText}>📊</Text>
                </View>
              </GlassCard>
            </ScrollView>
          </View>

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
  greeting: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    fontWeight: Typography.weights.regular,
  },
  userName: {
    fontSize: Typography.sizes.xl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginTop: Spacing.xs,
  },
  notificationButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
  },
  balanceCard: {
    marginBottom: Spacing.lg,
    padding: Spacing.lg,
  },
  balanceLabel: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    marginBottom: Spacing.xs,
  },
  balanceAmount: {
    fontSize: Typography.sizes.xxxl,
    color: Colors.gold,
    fontWeight: Typography.weights.extrabold,
    marginBottom: Spacing.sm,
  },
  balanceChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  balanceChangeText: {
    fontSize: Typography.sizes.sm,
    color: Colors.success,
    marginLeft: Spacing.xs,
    fontWeight: Typography.weights.semibold,
  },
  balanceActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Spacing.md,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  actionText: {
    fontSize: Typography.sizes.xs,
    color: Colors.white,
    fontWeight: Typography.weights.medium,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  statCard: {
    flex: 1,
    marginHorizontal: Spacing.xs,
    padding: Spacing.md,
    alignItems: 'center',
  },
  statValue: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginTop: Spacing.sm,
  },
  statLabel: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
    marginTop: Spacing.xs,
  },
  statChange: {
    fontSize: Typography.sizes.xs,
    color: Colors.success,
    marginTop: Spacing.xs,
    fontWeight: Typography.weights.semibold,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  seeAll: {
    fontSize: Typography.sizes.sm,
    color: Colors.gold,
    fontWeight: Typography.weights.semibold,
  },
  transactionCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.glassLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
  },
  transactionDate: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
    marginTop: Spacing.xs,
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionValue: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  transactionShares: {
    fontSize: Typography.sizes.xs,
    color: Colors.gold,
    marginTop: Spacing.xs,
  },
  horizontalScroll: {
    paddingRight: Spacing.md,
  },
  pickCard: {
    width: width * 0.4,
    marginRight: Spacing.md,
    padding: Spacing.md,
  },
  pickHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  pickSymbol: {
    fontSize: Typography.sizes.lg,
    color: Colors.gold,
    fontWeight: Typography.weights.bold,
  },
  pickBadge: {
    backgroundColor: Colors.gold + '30',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.sm,
  },
  pickBadgeText: {
    fontSize: Typography.sizes.xs,
    color: Colors.gold,
    fontWeight: Typography.weights.semibold,
  },
  pickName: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    marginBottom: Spacing.xs,
  },
  pickPrice: {
    fontSize: Typography.sizes.xl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.sm,
  },
  pickChart: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickChartText: {
    fontSize: 24,
  },
});
