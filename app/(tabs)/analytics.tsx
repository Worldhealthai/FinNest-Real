import React, { useState } from 'react';
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
import { LineChart, BarChart } from 'react-native-chart-kit';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

const { width } = Dimensions.get('window');

const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

export default function AnalyticsScreen() {
  const [selectedRange, setSelectedRange] = useState('1M');

  const portfolioData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [95000, 102000, 98000, 110000, 118000, 124586],
        color: (opacity = 1) => Colors.gold,
        strokeWidth: 3,
      },
    ],
  };

  const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [4200, 5500, 4800, 6200, 5900, 7100],
      },
    ],
  };

  const expensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [2800, 3200, 2900, 3500, 3100, 3800],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: 'transparent',
    backgroundGradientTo: 'transparent',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity * 0.7})`,
    style: {
      borderRadius: BorderRadius.md,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: Colors.gold,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
      stroke: Colors.glassLight,
      strokeWidth: 1,
    },
  };

  const barChartConfig = {
    ...chartConfig,
    color: (opacity = 1) => `rgba(0, 255, 135, ${opacity})`,
    barPercentage: 0.6,
  };

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
            <Text style={styles.title}>Analytics</Text>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="options" size={24} color={Colors.gold} />
            </TouchableOpacity>
          </View>

          {/* Time Range Selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.rangeScroll}
            contentContainerStyle={styles.rangeContainer}
          >
            {timeRanges.map((range) => (
              <TouchableOpacity
                key={range}
                onPress={() => setSelectedRange(range)}
                style={[
                  styles.rangeButton,
                  selectedRange === range && styles.rangeButtonActive,
                ]}
              >
                {selectedRange === range && (
                  <LinearGradient
                    colors={Colors.goldGradient}
                    style={styles.rangeGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  />
                )}
                <Text
                  style={[
                    styles.rangeText,
                    selectedRange === range && styles.rangeTextActive,
                  ]}
                >
                  {range}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Portfolio Performance */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Portfolio Performance</Text>
              <View style={styles.performanceBadge}>
                <Ionicons name="trending-up" size={14} color={Colors.success} />
                <Text style={styles.performanceBadgeText}>+31.2%</Text>
              </View>
            </View>

            <GlassCard style={styles.chartCard} intensity="dark">
              <LineChart
                data={portfolioData}
                width={width - Spacing.md * 4}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
                withInnerLines={true}
                withOuterLines={false}
                withVerticalLines={false}
                withHorizontalLines={true}
                withDots={true}
                withShadow={false}
                fromZero={false}
              />
            </GlassCard>
          </View>

          {/* Key Metrics */}
          <View style={styles.metricsGrid}>
            <GlassCard style={styles.metricCard} intensity="medium">
              <View style={styles.metricIcon}>
                <Ionicons name="trending-up" size={20} color={Colors.success} />
              </View>
              <Text style={styles.metricValue}>+31.2%</Text>
              <Text style={styles.metricLabel}>Total Return</Text>
            </GlassCard>

            <GlassCard style={styles.metricCard} intensity="medium">
              <View style={styles.metricIcon}>
                <Ionicons name="calendar" size={20} color={Colors.info} />
              </View>
              <Text style={styles.metricValue}>+12.5%</Text>
              <Text style={styles.metricLabel}>This Month</Text>
            </GlassCard>

            <GlassCard style={styles.metricCard} intensity="medium">
              <View style={styles.metricIcon}>
                <Ionicons name="flash" size={20} color={Colors.gold} />
              </View>
              <Text style={styles.metricValue}>8.3%</Text>
              <Text style={styles.metricLabel}>Avg. Return</Text>
            </GlassCard>

            <GlassCard style={styles.metricCard} intensity="medium">
              <View style={styles.metricIcon}>
                <Ionicons name="shield-checkmark" size={20} color={Colors.warning} />
              </View>
              <Text style={styles.metricValue}>Low</Text>
              <Text style={styles.metricLabel}>Risk Level</Text>
            </GlassCard>
          </View>

          {/* Income vs Expenses */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Income vs Expenses</Text>
            <GlassCard style={styles.chartCard} intensity="dark">
              <View style={styles.chartLegend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.success }]} />
                  <Text style={styles.legendText}>Income</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.error }]} />
                  <Text style={styles.legendText}>Expenses</Text>
                </View>
              </View>
              <BarChart
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  datasets: [
                    {
                      data: [4200, 5500, 4800, 6200, 5900, 7100],
                    },
                  ],
                }}
                width={width - Spacing.md * 4}
                height={220}
                chartConfig={barChartConfig}
                style={styles.chart}
                withInnerLines={false}
                fromZero={true}
                showBarTops={false}
              />
            </GlassCard>
          </View>

          {/* Spending Breakdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Spending Breakdown</Text>

            <GlassCard style={styles.breakdownCard} intensity="medium">
              <View style={styles.breakdownItem}>
                <View style={styles.breakdownLeft}>
                  <View style={[styles.breakdownIcon, { backgroundColor: Colors.gold + '30' }]}>
                    <Ionicons name="home" size={20} color={Colors.gold} />
                  </View>
                  <View>
                    <Text style={styles.breakdownCategory}>Housing</Text>
                    <Text style={styles.breakdownAmount}>$1,200</Text>
                  </View>
                </View>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownProgress, { width: '60%', backgroundColor: Colors.gold }]} />
                </View>
                <Text style={styles.breakdownPercent}>40%</Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.breakdownCard} intensity="medium">
              <View style={styles.breakdownItem}>
                <View style={styles.breakdownLeft}>
                  <View style={[styles.breakdownIcon, { backgroundColor: Colors.info + '30' }]}>
                    <Ionicons name="car" size={20} color={Colors.info} />
                  </View>
                  <View>
                    <Text style={styles.breakdownCategory}>Transportation</Text>
                    <Text style={styles.breakdownAmount}>$450</Text>
                  </View>
                </View>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownProgress, { width: '45%', backgroundColor: Colors.info }]} />
                </View>
                <Text style={styles.breakdownPercent}>15%</Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.breakdownCard} intensity="medium">
              <View style={styles.breakdownItem}>
                <View style={styles.breakdownLeft}>
                  <View style={[styles.breakdownIcon, { backgroundColor: Colors.success + '30' }]}>
                    <Ionicons name="cart" size={20} color={Colors.success} />
                  </View>
                  <View>
                    <Text style={styles.breakdownCategory}>Shopping</Text>
                    <Text style={styles.breakdownAmount}>$380</Text>
                  </View>
                </View>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownProgress, { width: '38%', backgroundColor: Colors.success }]} />
                </View>
                <Text style={styles.breakdownPercent}>13%</Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.breakdownCard} intensity="medium">
              <View style={styles.breakdownItem}>
                <View style={styles.breakdownLeft}>
                  <View style={[styles.breakdownIcon, { backgroundColor: Colors.warning + '30' }]}>
                    <Ionicons name="restaurant" size={20} color={Colors.warning} />
                  </View>
                  <View>
                    <Text style={styles.breakdownCategory}>Food & Dining</Text>
                    <Text style={styles.breakdownAmount}>$620</Text>
                  </View>
                </View>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownProgress, { width: '70%', backgroundColor: Colors.warning }]} />
                </View>
                <Text style={styles.breakdownPercent}>21%</Text>
              </View>
            </GlassCard>

            <GlassCard style={styles.breakdownCard} intensity="medium">
              <View style={styles.breakdownItem}>
                <View style={styles.breakdownLeft}>
                  <View style={[styles.breakdownIcon, { backgroundColor: Colors.error + '30' }]}>
                    <Ionicons name="fitness" size={20} color={Colors.error} />
                  </View>
                  <View>
                    <Text style={styles.breakdownCategory}>Entertainment</Text>
                    <Text style={styles.breakdownAmount}>$320</Text>
                  </View>
                </View>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownProgress, { width: '32%', backgroundColor: Colors.error }]} />
                </View>
                <Text style={styles.breakdownPercent}>11%</Text>
              </View>
            </GlassCard>
          </View>

          {/* Financial Goals */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Financial Goals</Text>

            <GlassCard style={styles.goalCard} intensity="dark">
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>Emergency Fund</Text>
                <Text style={styles.goalAmount}>$8,500 / $10,000</Text>
              </View>
              <View style={styles.goalBar}>
                <LinearGradient
                  colors={Colors.goldGradient}
                  style={[styles.goalProgress, { width: '85%' }]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <Text style={styles.goalPercent}>85% Complete</Text>
            </GlassCard>

            <GlassCard style={styles.goalCard} intensity="dark">
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>Vacation Savings</Text>
                <Text style={styles.goalAmount}>$3,200 / $5,000</Text>
              </View>
              <View style={styles.goalBar}>
                <LinearGradient
                  colors={[Colors.info, Colors.success]}
                  style={[styles.goalProgress, { width: '64%' }]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <Text style={styles.goalPercent}>64% Complete</Text>
            </GlassCard>

            <GlassCard style={styles.goalCard} intensity="dark">
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>Home Down Payment</Text>
                <Text style={styles.goalAmount}>$45,000 / $100,000</Text>
              </View>
              <View style={styles.goalBar}>
                <LinearGradient
                  colors={[Colors.success, Colors.gold]}
                  style={[styles.goalProgress, { width: '45%' }]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <Text style={styles.goalPercent}>45% Complete</Text>
            </GlassCard>
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
  title: {
    fontSize: Typography.sizes.xxl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  filterButton: {
    padding: Spacing.sm,
  },
  rangeScroll: {
    marginBottom: Spacing.lg,
  },
  rangeContainer: {
    paddingRight: Spacing.md,
  },
  rangeButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    marginRight: Spacing.sm,
    backgroundColor: Colors.glassLight,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    minWidth: 50,
    alignItems: 'center',
  },
  rangeButtonActive: {
    borderColor: Colors.gold,
  },
  rangeGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  rangeText: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    fontWeight: Typography.weights.semibold,
  },
  rangeTextActive: {
    color: Colors.deepNavy,
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
  performanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.success + '30',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.sm,
  },
  performanceBadgeText: {
    fontSize: Typography.sizes.xs,
    color: Colors.success,
    fontWeight: Typography.weights.semibold,
    marginLeft: 4,
  },
  chartCard: {
    padding: Spacing.md,
    alignItems: 'center',
  },
  chart: {
    marginVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  chartLegend: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: Spacing.xs,
  },
  legendText: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  metricCard: {
    width: (width - Spacing.md * 3) / 2,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    alignItems: 'center',
  },
  metricIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.glassLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  metricValue: {
    fontSize: Typography.sizes.lg,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.xs,
  },
  metricLabel: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
    textAlign: 'center',
  },
  breakdownCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  breakdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breakdownLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 140,
  },
  breakdownIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  breakdownCategory: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
  },
  breakdownAmount: {
    fontSize: Typography.sizes.sm,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
  },
  breakdownBar: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.glassLight,
    borderRadius: 3,
    marginHorizontal: Spacing.sm,
    overflow: 'hidden',
  },
  breakdownProgress: {
    height: '100%',
    borderRadius: 3,
  },
  breakdownPercent: {
    fontSize: Typography.sizes.xs,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
    width: 35,
    textAlign: 'right',
  },
  goalCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  goalTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
  },
  goalAmount: {
    fontSize: Typography.sizes.sm,
    color: Colors.gold,
    fontWeight: Typography.weights.semibold,
  },
  goalBar: {
    height: 8,
    backgroundColor: Colors.glassLight,
    borderRadius: 4,
    marginBottom: Spacing.sm,
    overflow: 'hidden',
  },
  goalProgress: {
    height: '100%',
    borderRadius: 4,
  },
  goalPercent: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
  },
});
